/* Ian × Japan 2026 — app logic (no build step, no frameworks) */
(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const view = $("#view");
  const store = {
    get(k, d = null) { try { const v = localStorage.getItem("ij:" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("ij:" + k, JSON.stringify(v)); } catch {} },
  };
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Family-friendly mode ---------- */
  const SPICY_CATS = ["Flirting 💋", "Scene words"];
  const isSafe = () => !!store.get("safe", false);
  const okPhrase = p => p && (!isSafe() || !SPICY_CATS.includes(p.cat));
  const dv = day => (isSafe() && day.safe ? { ...day, ...day.safe } : day);
  function applySafe() {
    document.body.classList.toggle("safe", isSafe());
    const b = document.getElementById("safeBtn");
    if (b) { b.textContent = isSafe() ? "😇" : "🔥"; b.setAttribute("aria-label", isSafe() ? "Family-friendly mode is on" : "Family-friendly mode is off"); }
  }

  /* ---------- On-device file storage (IndexedDB) ---------- */
  const idb = (() => {
    let dbp = null;
    const open = () => dbp || (dbp = new Promise((res, rej) => {
      const r = indexedDB.open("ij", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("files");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    }));
    const run = async (mode, fn) => {
      const db = await open();
      return new Promise((res, rej) => {
        const t = db.transaction("files", mode), req = fn(t.objectStore("files"));
        t.oncomplete = () => res(req && req.result);
        t.onerror = () => rej(t.error);
      });
    };
    return {
      get: k => run("readonly", st => st.get(k)).catch(() => null),
      set: (k, v) => run("readwrite", st => st.put(v, k)),
      del: k => run("readwrite", st => st.delete(k)).catch(() => null),
    };
  })();
  async function shrinkImage(file, max = 1600, q = 0.85) {
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
      const sc = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement("canvas");
      c.width = Math.round(img.naturalWidth * sc); c.height = Math.round(img.naturalHeight * sc);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      return await new Promise(res => c.toBlob(res, "image/jpeg", q));
    } finally { URL.revokeObjectURL(url); }
  }
  const blobUrls = {};
  async function imgUrl(key) {
    const b = await idb.get(key);
    if (!b) return null;
    if (blobUrls[key]) URL.revokeObjectURL(blobUrls[key]);
    return (blobUrls[key] = URL.createObjectURL(b));
  }

  /* ---------- Japan time helpers ---------- */
  const jstNow = () => new Date(Date.now() + 9 * 3600 * 1000); // read with getUTC*
  const jstDateStr = () => jstNow().toISOString().slice(0, 10);
  const jstMinutes = () => { const d = jstNow(); return d.getUTCHours() * 60 + d.getUTCMinutes(); };
  const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const fmt12 = t => {
    let [h, m] = t.split(":").map(Number);
    const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, "0")} ${ap}`;
  };
  const longDate = (iso, dow) => {
    const [y, mo, d] = iso.split("-").map(Number);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${dow} ${months[mo - 1]} ${d}`;
  };

  function todayDayIndex() {
    const t = jstDateStr();
    const i = DAYS.findIndex(d => d.date === t);
    if (i >= 0) return i;
    return t < DAYS[0].date ? 0 : DAYS.length - 1;
  }
  const isToday = d => d.date === jstDateStr();

  /* ---------- Hotels (Fuji is editable) ---------- */
  function hotel(key) {
    const h = { ...HOTELS[key] };
    if (h.editable) {
      const saved = store.get("fujiHotel", null);
      if (saved && saved.name) {
        h.name = saved.name; h.jp = saved.jp || ""; h.addr = saved.addr || ""; h.addrEn = saved.addrEn || "";
        h.maps = saved.name + (saved.addrEn ? ", " + saved.addrEn : " Fujikawaguchiko");
      }
    }
    return h;
  }

  /* ---------- Clock ---------- */
  function tickClock() {
    const d = jstNow();
    const hh = d.getUTCHours(), mm = String(d.getUTCMinutes()).padStart(2, "0");
    const t = `${hh % 12 || 12}:${mm} ${hh >= 12 ? "PM" : "AM"}`;
    const today = jstDateStr();
    let sub;
    if (today < DAYS[0].date) {
      const land = Date.UTC(2026, 9, 26, 6, 30); // 3:30 PM JST
      const hrs = Math.max(0, Math.round((land - Date.now()) / 36e5));
      sub = hrs > 0 ? `Landing in ~${hrs} h ✈️` : "Landing soon ✈️";
    } else if (today > DAYS[DAYS.length - 1].date) {
      sub = "Okaeri! 🏠";
    } else {
      sub = `Day ${todayDayIndex() + 1} of ${DAYS.length}`;
    }
    const bday = today === "2026-10-27";
    if (bday) sub = "🎂 Happy 25th, Ian!";
    else if (today === "2026-10-26") {
      const left = Date.UTC(2026, 9, 26, 15, 0) - Date.now(); // midnight Oct 27 JST
      if (left > 0 && left < 12 * 36e5) sub = `🎂 25 in ${Math.floor(left / 36e5)}h ${Math.floor(left % 36e5 / 6e4)}m`;
    }
    document.body.classList.toggle("bday", bday);
    if (bday && !sessionStorage.getItem("bday-confetti")) { sessionStorage.setItem("bday-confetti", "1"); setTimeout(confetti, 400); }
    $("#clock").innerHTML = `<b>${t}</b> 🇯🇵<br>${sub}`;
  }

  /* ---------- Day strip ---------- */
  function renderStrip(activeId) {
    const strip = $("#dayStrip");
    strip.innerHTML = DAYS.map((d, i) => {
      const [, mo, dd] = d.date.split("-");
      return `<a class="day-chip ${d.id === activeId ? "active" : ""} ${isToday(d) ? "today" : ""}" href="#day/${d.id}" aria-label="Day ${i + 1}: ${esc(d.title)}">
        <span class="e">${dv(d).emoji}</span><span>${d.dow}</span><span class="d">${Number(mo)}/${Number(dd)}</span></a>`;
    }).join("");
    const act = $(".day-chip.active", strip);
    if (act) act.scrollIntoView({ inline: "center", block: "nearest" });
  }

  /* ---------- Speech ---------- */
  let jaVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    jaVoice = vs.find(v => /ja[-_]JP/i.test(v.lang) && /Kyoko|O-ren|Google/i.test(v.name)) || vs.find(v => /^ja/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, btn) {
    if (!("speechSynthesis" in window)) { toast("Speech isn't available on this device"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/〇〇|___/g, "").trim());
    u.lang = "ja-JP"; u.rate = 0.82;
    if (jaVoice) u.voice = jaVoice;
    if (btn) { btn.classList.add("speaking"); u.onend = u.onerror = () => btn.classList.remove("speaking"); }
    speechSynthesis.speak(u);
  }

  /* ---------- Overlay + toast ---------- */
  function openOverlay(html) {
    $("#overlayCard").innerHTML = html + `<div class="close">Tap anywhere to close</div>`;
    $("#overlay").hidden = false;
  }
  $("#overlay").addEventListener("click", e => {
    if (e.target.closest("[data-keep]")) return;
    $("#overlay").hidden = true;
  });
  let toastT;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2200);
  }

  function showPhrase(p) {
    openOverlay(`<p class="big">${esc(p.jp)}</p><div class="ro">${esc(p.ro)}</div><div class="en">${esc(p.en)}</div>
      <div style="margin-top:16px"><button class="btn" data-keep data-speak="${esc(p.jp)}">🔊 Play</button></div>`);
  }
  function showHotel(h) {
    openOverlay(`<div class="mid">この住所までお願いします</div>
      <p class="big" style="font-size:clamp(24px,7vw,38px)">${esc(h.jp || h.name)}</p>
      <div class="mid">${esc(h.addr)}</div>
      ${h.near ? `<div class="en">${esc(h.near)}</div>` : ""}
      <div class="en" style="margin-top:10px">“To this address, please” — show this to the taxi driver.</div>`);
  }

  /* ---------- Maps links ---------- */
  const mapsDir = place => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}&travelmode=transit`;
  const mapsSearch = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

  /* ---------- Weather (Open-Meteo, no key) ---------- */
  const WX = { 0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 48: "🌫️", 51: "🌦️", 53: "🌦️", 55: "🌧️", 61: "🌧️", 63: "🌧️", 65: "🌧️", 80: "🌦️", 81: "🌧️", 82: "⛈️", 95: "⛈️" };
  async function loadWeather(day) {
    const el = $("#wx");
    if (!el || !day.wx) return;
    const key = "wx:" + day.id;
    const cached = store.get(key);
    const paint = w => {
      el.classList.remove("wx-loading");
      el.innerHTML = `${WX[w.code] || "🌡️"} ${Math.round(w.hi)}° / ${Math.round(w.lo)}°F${w.rain != null ? ` · ☔ ${w.rain}%` : ""}${w.sunset ? ` · 🌇 ${fmt12(w.sunset)}` : ""}`;
      wxPlan(day, w);
    };
    if (cached && Date.now() - cached.at < 3 * 3600e3) { paint(cached.w); return; }
    try {
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${day.wx.lat}&longitude=${day.wx.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,cloud_cover_mean,sunset&temperature_unit=fahrenheit&timezone=Asia%2FTokyo&start_date=${day.date}&end_date=${day.date}`;
      const r = await fetch(u);
      if (!r.ok) throw 0;
      const j = await r.json();
      const w = { code: j.daily.weather_code[0], hi: j.daily.temperature_2m_max[0], lo: j.daily.temperature_2m_min[0], rain: j.daily.precipitation_probability_max[0], cloud: j.daily.cloud_cover_mean ? j.daily.cloud_cover_mean[0] : null, sunset: (j.daily.sunset[0] || "").slice(11, 16) };
      store.set(key, { at: Date.now(), w });
      if ($("#wx") === el) paint(w);
    } catch {
      if (cached) paint(cached.w); else el.remove();
    }
  }

  // Weather never changes the plan by itself — it only shows a hint next to the Plan B switch.
  function wxPlan(day, w) {
    const hint = $("#wxhint");
    if (!hint || !day.rain) return;
    const wet = w.rain != null && w.rain >= 50;
    const cloudy = day.cloudy && w.cloud != null && w.cloud >= 70;
    hint.textContent = wet ? `Forecast: ☔ ${w.rain}% rain — your call` : cloudy ? `Forecast: ☁️ ${Math.round(w.cloud)}% cloud — your call` : `Forecast looks fine`;
    hint.classList.toggle("warn", wet || cloudy);
  }

  /* ---------- Day view ---------- */
  function dayVariant(day) { return store.get("variant:" + day.id, "a"); }

  function visibleSteps(day) {
    const v = dayVariant(day);
    return day.steps.map((s, i) => ({ ...s, key: `${day.id}-${i}` })).filter(s => (!s.only || s.only === v) && !(s.night && isSafe()));
  }

  function nextKey(day, steps) {
    if (!isToday(day)) return null;
    const now = jstMinutes();
    const done = store.get("done", {});
    // first not-done step whose start is within 45 min ago or later; otherwise first not-done
    const upcoming = steps.find(s => !done[s.key] && toMin(s.t) >= now - 45);
    return (upcoming || steps.find(s => !done[s.key]) || {}).key || null;
  }

  function renderDay(id) {
    const idx = Math.max(0, DAYS.findIndex(d => d.id === id));
    const day = dv(DAYS[idx]);
    document.body.dataset.theme = day.theme;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.body).getPropertyValue("--bg").trim() || "#111";
    renderStrip(day.id);

    const steps = visibleSteps(day);
    const pinNo = {}; let pn = 0; steps.forEach(x => { if (x.ll) pinNo[x.key] = ++pn; });
    const done = store.get("done", {});
    const nk = nextKey(day, steps);
    const doneCount = steps.filter(s => done[s.key]).length;
    const h = day.sleep ? hotel(day.sleep) : null;

    const decoPos = [[84, 6], [72, 30], [88, 48], [76, 76], [90, 88], [62, 4]];
    const deco = (day.deco || []).map((e, i) => {
      const [x, y] = decoPos[i % decoPos.length];
      return `<span style="left:${x}%;top:${y}%;animation-delay:${i * -1.1}s">${e}</span>`;
    }).join("");
    const steam = day.theme === "steamy"
      ? `<div class="steam">${Array.from({ length: 7 }, (_, i) => `<i style="left:${i * 15 - 5}%;animation-delay:${i * -1}s;animation-duration:${6 + (i % 3)}s"></i>`).join("")}</div>`
      : "";

    let html = `
      <section class="banner">
        <div class="deco" aria-hidden="true">${deco}</div>${steam}
        <div class="bt"><span class="kicker">${esc(day.kicker)}</span>
        <h1>${esc(day.title)}</h1>
        <div class="date">${longDate(day.date, day.dow)} · ${esc(day.city)}</div></div>
        <p class="tagline">${esc(day.tagline)}</p>
        <div class="pills">
          ${day.wx ? `<span class="pill wx-loading" id="wx">🌡️ checking weather…</span>` : ""}
          ${h ? `<a class="pill" href="#trip/hotels">${h.emoji} Sleep: ${esc(h.name)}</a>` : `<span class="pill">✈️ Sleep: on the plane</span>`}
          ${day.rain && store.get("planb:" + day.id, false) ? `<span class="pill">${day.cloudy ? "☁️" : "☔"} Plan B on</span>` : ""}
          ${ticketsFor(day.date).length ? `<a class="pill" href="#trip/tickets">🎟️ ${ticketsFor(day.date).length} ticket${ticketsFor(day.date).length > 1 ? "s" : ""} today</a>` : ""}
        </div>
      </section>
      ${homeCard(day)}`;

    if (day.variants) {
      const v = dayVariant(day);
      html += `<div class="card variant"><p>${esc(day.variants.q)}</p>
        <div class="seg">
          <button data-variant="a" class="${v === "a" ? "on" : ""}">${esc(day.variants.a)}</button>
          <button data-variant="b" class="${v === "b" ? "on" : ""}">${esc(day.variants.b)}</button>
        </div></div>`;
    }

    // map
    const pinned = steps.filter(x => x.ll);
    if (pinned.length && window.L) {
      const areas = clusterAreas(pinned);
      html += `<div class="section-title"><h2>Today's map</h2><span class="sub">tap a pin</span></div>
        <div class="card mapcard">
          ${areas.length > 1 ? `<div class="cats area-chips">${areas.map((a, i) => `<button data-area="${i}" class="${i === 0 ? "on" : ""}">📍 ${esc(a.label)}</button>`).join("")}</div>` : ""}
          <div id="daymap" class="daymap"></div>
          <div class="map-actions"><button class="btn" data-locate>🫵 Where am I?</button><button class="btn" data-fitall>🔎 Whole day</button></div>
        </div>`;
    }
    if (day.rain) {
      const on = !!store.get("planb:" + day.id, false);
      html += `<div class="card rainplan ${on ? "on" : ""}">
        <div class="rp-row"><div><b>${day.cloudy ? "☁️ Cloudy-Fuji plan" : "☔ Rain plan"}</b><small id="wxhint">${on ? "Plan B is on" : "Off — following the original plan"}</small></div>
          <button class="switch ${on ? "on" : ""}" data-planb="${day.id}" aria-pressed="${on}" aria-label="Rain plan"><i></i></button></div>
        ${on ? `<p>${esc(day.rain)}</p>` : ""}
      </div>`;
    }
    html += `<div class="progress"><span>${doneCount}/${steps.length} done</span><div class="bar"><i style="width:${steps.length ? (doneCount / steps.length) * 100 : 0}%"></i></div></div>`;
    html += `<div class="section-title"><h2>Step by step</h2><span class="sub">Japan time</span></div><div class="timeline">`;

    steps.forEach(s => {
      const isDone = !!done[s.key];
      const isNext = s.key === nk;
      html += `<article class="card step ${isDone ? "done" : ""} ${isNext ? "next" : ""}" id="s-${s.key}">
        ${isNext ? `<span class="badge-next">Up next</span>` : ""}
        <div class="step-head"><div class="time">${fmt12(s.t)}${s.ll ? `<button class="pin-no" data-flyto="${s.key}" aria-label="Show on map">${pinNo[s.key]}</button>` : ""}</div><h3>${esc(s.title)}</h3></div>
        ${s.how && s.how.length ? `<ol class="how">${s.how.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}
        ${s.tip ? `<div class="tip"><b>Heads-up:</b> ${esc(s.tip)}</div>` : ""}
        ${askHere(s)}
        ${sayHere(s)}
        ${s.rx ? recipeTag(s.rx) : ""}
        <div class="step-actions">
          ${s.place ? `<a class="btn primary" href="${mapsDir(s.place)}" target="_blank" rel="noopener">🧭 Directions</a>` : ""}
          ${photoLink(s) ? `<a class="btn" href="${photoLink(s)}" target="_blank" rel="noopener">🖼️ Photo idea</a>` : ""}
          <button class="btn ${isDone ? "done-on" : ""}" data-done="${s.key}">${isDone ? "✅ Done" : "◻️ Mark done"}</button>
        </div>
      </article>`;
      const mini = [];
      if (s.photo) mini.push(`<div class="mini photo"><span class="ico">📸</span><div><b>Photo op</b>${esc(s.photo)}</div></div>`);
      if (s.snack) mini.push(`<div class="mini snack"><span class="ico">🍙</span><div><b>Snack stop</b>${esc(s.snack)}</div></div>`);
      if (s.quest) mini.push(`<a class="mini quest" href="#media/quests"><span class="ico">🎮</span><div><b>Fan quest</b>${esc(s.quest)}</div></a>`);
      if (s.spicy && !isSafe()) mini.push(`<div class="mini spicy"><span class="ico">🔥</span><div><b>After dark</b>${esc(s.spicy)}</div></div>`);
      if (mini.length) html += `<div class="between">${mini.join("")}</div>`;
    });
    html += `</div>`;

    // phrases for the day
    const pids = [...new Set([...steps.flatMap(x => x.say || []), ...(day.phrases || [])])];
    const ps = pids.map(pid => PHRASES.find(p => p.id === pid)).filter(okPhrase);
    if (ps.length) {
      html += `<details class="card cheat"><summary>🗣️ All of today's phrases (${ps.length})</summary><div class="cheat-body">${ps.map(phraseCard).join("")}</div></details>`;
    }

    // favorite moment (for the recap)
    const fav = store.get("fav:" + day.id, {}) || {};
    html += `<div class="section-title"><h2>⭐ Favorite moment</h2><span class="sub">builds your recap</span></div>
      <div class="card fav">
        <div class="fav-img" id="fav-img-${day.id}"><span>📷 No photo yet</span></div>
        <div class="fav-row">
          <label class="btn primary">📷 ${fav.photo ? "Change" : "Add"} photo<input type="file" accept="image/*" data-favfile="${day.id}" hidden></label>
          <div class="stars" role="radiogroup" aria-label="Rate the day">${[1, 2, 3, 4, 5].map(n => `<button class="star ${n <= (fav.stars || 0) ? "on" : ""}" data-star="${day.id}|${n}" aria-label="${n} stars">★</button>`).join("")}</div>
        </div>
        <input class="fav-cap" data-favcap="${day.id}" value="${esc(fav.cap || "")}" placeholder="One line about today… ✨" maxlength="140">
      </div>`;

    // notes
    html += `<div class="section-title"><h2>My notes</h2><span class="sub">saved on this phone</span></div>
      <textarea class="notes" data-notes="${day.id}" placeholder="Bar names, who you met, what to buy… 💭">${esc(store.get("notes:" + day.id, ""))}</textarea>`;

    // prev / next
    const prev = DAYS[idx - 1], next = DAYS[idx + 1];
    html += `<div class="link-row" style="justify-content:space-between;margin-top:18px">
      ${prev ? `<a class="btn" href="#day/${prev.id}">← ${prev.emoji} ${prev.dow}</a>` : "<span></span>"}
      ${next ? `<a class="btn" href="#day/${next.id}">${next.dow} ${next.emoji} →</a>` : "<span></span>"}
    </div>
    <p class="foot">Made for Ian's 25th · Oct 26 – Nov 5, 2026 · Works offline once loaded</p>`;

    view.innerHTML = html;
    loadWeather(day);
    if (pinned.length && window.L) initMap(day, steps, pinNo, nk);
    if (fav.photo) imgUrl("fav:" + day.id).then(u => { const el = $("#fav-img-" + day.id); if (u && el) el.innerHTML = `<img src="${u}" alt="Favorite moment">`; });
    if (day.confetti && !sessionStorage.getItem("confetti-" + day.id)) {
      sessionStorage.setItem("confetti-" + day.id, "1");
      confetti();
    }

    const nb = $("#nowBtn");
    if (nk) { nb.hidden = false; nb.onclick = () => $("#s-" + nk)?.scrollIntoView({ behavior: "smooth", block: "center" }); }
    else nb.hidden = true;
  }

  /* ---------- Step helpers ---------- */
  function sayHere(s) {
    const ps = (s.say || []).map(id => PHRASES.find(p => p.id === id)).filter(okPhrase);
    if (!ps.length) return "";
    return `<div class="say-here"><div class="say-h">🗣️ Say it here</div>${ps.map(p => `
      <div class="say-chip">
        <div class="sc-txt"><span class="sc-jp jp">${esc(p.jp)}</span><span class="sc-ro">${esc(p.ro)}</span><span class="sc-en">${esc(p.en)}</span></div>
        <button class="icon-btn sm" data-speak="${esc(p.jp)}" aria-label="Play">🔊</button>
        <button class="icon-btn sm" data-show="${p.id}" aria-label="Show big">⤢</button>
      </div>`).join("")}</div>`;
  }
  function askHere(s) {
    if (!s.ask || !s.ask.length) return "";
    return `<div class="ask-here"><div class="ask-h">🙋 Ask for it <span>— tap ⤢ and hand them your phone</span></div>${s.ask.map((a, i) => `
      <div class="ask-chip">
        <div class="sc-txt"><span class="sc-jp jp">${esc(a.jp)}</span><span class="sc-ro">${esc(a.ro)}</span><span class="sc-en">${esc(a.en)}</span></div>
        <button class="icon-btn sm" data-speak="${esc(a.jp)}" aria-label="Play">🔊</button>
        <button class="icon-btn sm show-btn" data-ask="${s.key}|${i}" aria-label="Show to staff">⤢</button>
      </div>
      ${(HEAR[a.hear] || []).length ? `<div class="hear"><b>Listen for:</b> ${HEAR[a.hear].slice(0, 5).map(h => `<span>${esc(h[1])} <i>${esc(h[2])}</i> = ${esc(h[3])}</span>`).join("")}</div>` : ""}`).join("")}</div>`;
  }
  function showAsk(key) {
    const [sk, i] = key.split("|");
    const [dayId, idx] = sk.split("-");
    const day = DAYS.find(d => d.id === dayId);
    const a = day && day.steps[+idx] && day.steps[+idx].ask[+i];
    if (!a) return;
    const tiles = HEAR[a.hear] || [];
    const write = HEAR_WRITE.includes(a.hear);
    const isStatement = a.hear === "none";
    openOverlay(`<p class="big" style="font-size:clamp(26px,7.5vw,42px)">${esc(a.jp)}</p>
      <div class="en">${esc(a.en)}</div>
      ${isStatement ? "" : `<div class="ask-help">${esc(ASK_HELP.jp)}<small>${esc(ASK_HELP.en)}</small></div>`}
      ${tiles.length ? `<div class="tiles" data-keep>${tiles.map(t => `<button class="tile" data-keep data-tile><span class="t-e">${esc(t[0])}</span><span class="t-jp">${esc(t[1])}</span><span class="t-en">${esc(t[3])}</span></button>`).join("")}</div>` : ""}
      ${write ? `<div class="write" data-keep><div class="w-h">${esc(ASK_HELP.writeJp)} <small>${esc(ASK_HELP.writeEn)}</small></div><textarea data-keep rows="2" placeholder="✍️"></textarea></div>` : ""}
      <div style="margin-top:14px" class="link-row" data-keep>
        <button class="btn" data-keep data-speak="${esc(a.jp)}">🔊 Play question</button>
        ${isStatement ? "" : `<button class="btn" data-keep data-speak="${esc(ASK_HELP.jp)}">🔊 “Please point”</button>`}
      </div>`);
  }
  function photoLink(s) {
    const q = s.pic || (s.photo && s.place ? s.place + " photo ideas" : "");
    return q ? `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}` : "";
  }
  function recipeTag(id) {
    const r = (typeof RECIPES !== "undefined" ? RECIPES : []).find(x => x.id === id);
    return r ? `<a class="rx-tag" href="#media/recipes/${r.id}">🎞️ X100VI: <b>${r.slot} · ${esc(r.name)}</b> (${esc(r.sim)})</a>` : "";
  }

  /* ---------- Map (Leaflet + CARTO tiles) ---------- */
  let map = null, mapMarkers = {}, meMarker = null, mapAreas = [];
  const distKm = (a, b) => {
    const R = 6371, dLat = (b[0] - a[0]) * Math.PI / 180, dLon = (b[1] - a[1]) * Math.PI / 180;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * Math.PI / 180) * Math.cos(b[0] * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  function clusterAreas(pinned) {
    const areas = [];
    pinned.forEach(s => {
      const a = areas.find(a => a.pts.some(p => distKm(p.ll, s.ll) < 30));
      if (a) a.pts.push(s); else areas.push({ pts: [s] });
    });
    areas.forEach(a => { a.label = areaName(a.pts[0].ll); });
    return areas;
  }
  function areaName(ll) {
    const C = [["Tokyo", [35.68, 139.76]], ["Tokyo Bay", [35.63, 139.88]], ["Kyoto", [34.99, 135.76]], ["Uji", [34.89, 135.80]], ["Osaka", [34.69, 135.50]], ["Hiroshima", [34.39, 132.45]], ["Miyajima", [34.30, 132.31]], ["Mishima", [35.12, 138.91]], ["Kawaguchiko", [35.50, 138.77]], ["Narita", [35.77, 140.39]], ["Inagi", [35.62, 139.52]]];
    return C.reduce((b, c) => distKm(ll, c[1]) < distKm(ll, b[1]) ? c : b)[0];
  }
  function initMap(day, steps, pinNo, nk) {
    if (map) { map.remove(); map = null; }
    mapMarkers = {}; meMarker = null;
    const pinned = steps.filter(x => x.ll);
    mapAreas = clusterAreas(pinned);
    map = L.map("daymap", { zoomControl: false, attributionControl: true, scrollWheelZoom: false });
    map.on("popupopen", e => {
      const a = e.popup.getElement && e.popup.getElement().querySelector("[data-goto]");
      if (a) a.onclick = ev => { ev.preventDefault(); ev.stopPropagation(); map.closePopup(); $("#s-" + a.dataset.goto)?.scrollIntoView({ behavior: "smooth", block: "center" }); };
    });
    L.control.zoom({ position: "topright" }).addTo(map);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19, subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);
    const done = store.get("done", {});
    mapAreas.forEach(a => {
      if (a.pts.length > 1) L.polyline(a.pts.map(p => p.ll), { color: getComputedStyle(document.body).getPropertyValue("--accent").trim(), weight: 3, dashArray: "6 8", opacity: .8 }).addTo(map);
    });
    pinned.forEach(s => {
      const icon = L.divIcon({ className: "", html: `<div class="map-pin ${done[s.key] ? "done" : ""} ${s.key === nk ? "next" : ""}">${pinNo[s.key]}</div>`, iconSize: [30, 30], iconAnchor: [15, 15] });
      const m = L.marker(s.ll, { icon }).addTo(map);
      m.bindPopup(`<div class="pop"><b>${pinNo[s.key]}. ${esc(s.title)}</b><br><span>${fmt12(s.t)}</span><br>
        ${s.place ? `<a href="${mapsDir(s.place)}" target="_blank" rel="noopener">🧭 Directions</a> · ` : ""}<a href="#" data-goto="${s.key}">⬇ See step</a></div>`);
      mapMarkers[s.key] = m;
    });
    // start on the area containing the next step, else the first area
    let start = 0;
    if (nk) { const i = mapAreas.findIndex(a => a.pts.some(p => p.key === nk)); if (i >= 0) start = i; }
    showArea(start);
  }
  function showArea(i) {
    const a = mapAreas[i]; if (!a || !map) return;
    $$(".area-chips button").forEach((b, j) => b.classList.toggle("on", j === i));
    if (a.pts.length === 1) map.setView(a.pts[0].ll, 15);
    else map.fitBounds(L.latLngBounds(a.pts.map(p => p.ll)), { padding: [36, 36], maxZoom: 16 });
  }
  function flyTo(key) {
    const m = mapMarkers[key]; if (!m || !map) return;
    $("#daymap").scrollIntoView({ behavior: "smooth", block: "center" });
    const i = mapAreas.findIndex(a => a.pts.some(p => p.key === key));
    $$(".area-chips button").forEach((b, j) => b.classList.toggle("on", j === i));
    setTimeout(() => { map.flyTo(m.getLatLng(), 16, { duration: .8 }); m.openPopup(); }, 300);
  }
  function locateMe() {
    if (!navigator.geolocation) { toast("Location isn't available"); return; }
    toast("Finding you… 📡");
    navigator.geolocation.getCurrentPosition(pos => {
      const ll = [pos.coords.latitude, pos.coords.longitude];
      if (!map) return;
      if (meMarker) meMarker.setLatLng(ll);
      else meMarker = L.marker(ll, { icon: L.divIcon({ className: "", html: '<div class="me-dot"></div>', iconSize: [20, 20], iconAnchor: [10, 10] }) }).addTo(map).bindPopup("You are here 💖");
      map.flyTo(ll, 16); meMarker.openPopup();
    }, () => toast("Couldn't get your location — check permissions"), { enableHighAccuracy: true, timeout: 12000 });
  }

  function confetti() {
    const box = document.createElement("div"); box.className = "confetti";
    const colors = ["#f5c451", "#ff6fb5", "#9fd8ff", "#ffffff", "#b38bff", "#7cf2c4"];
    for (let i = 0; i < 90; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = 2.4 + Math.random() * 2.6 + "s";
      p.style.animationDelay = Math.random() * 0.8 + "s";
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 6500);
  }

  /* ---------- Food ---------- */
  async function foodImage(f) {
    const key = "img:" + f.id;
    const c = store.get(key);
    if (c) return c;
    const tryWiki = async (lang, title) => {
      if (!title) return null;
      const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!r.ok) return null;
      const j = await r.json();
      return (j.thumbnail && j.thumbnail.source) || (j.originalimage && j.originalimage.source) || null;
    };
    let src = null;
    try { src = await tryWiki("ja", f.wiki); } catch {}
    if (!src) { try { src = await tryWiki("en", f.enwiki); } catch {} }
    if (src) store.set(key, src);
    return src;
  }
  function renderFood() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Food guide 🍜</h2><span class="sub">🔊 hear · ⤢ show</span></div>
      <details class="card cheat"><summary>🧾 Ordering basics</summary><div class="cheat-body">
        ${FOOD_ORDERING.map(o => `<div class="say-chip">
          <div class="sc-txt"><span class="sc-jp jp">${esc(o.jp)}</span><span class="sc-ro">${esc(o.ro)}</span><span class="sc-en">${esc(o.en)}</span></div>
          <button class="icon-btn sm" data-speak="${esc(o.jp)}" aria-label="Play">🔊</button>
          <button class="icon-btn sm" data-showtxt="${esc(JSON.stringify(o))}" aria-label="Show big">⤢</button></div>`).join("")}
        <p class="tip" style="margin-top:10px">Can't read the menu? Many places have plastic food models or photos — point and say “Kore kudasai” (this one, please). Google Translate's camera mode reads menus too.</p>
      </div></details>
      <div id="foods">${FOODS.map(f => `
        <article class="card food" id="f-${f.id}">
          <div class="food-img" data-img="${f.id}"><span class="food-emoji">${f.emoji}</span></div>
          <div class="food-body">
            <div class="food-top">
              <div><h3>${esc(f.en)}</h3><div class="food-jp"><span class="jp">${esc(f.jp)}</span> · <b>${esc(f.ro)}</b></div></div>
              <button class="icon-btn" data-speak="${esc(f.jp)}" aria-label="Play">🔊</button>
            </div>
            <p class="food-what">${esc(f.what)}</p>
            <div class="order-box">
              <div class="ob-h">How to order</div>
              <div class="say-chip">
                <div class="sc-txt"><span class="sc-jp jp">${esc(f.order.jp)}</span><span class="sc-ro">${esc(f.order.ro)}</span><span class="sc-en">${esc(f.order.en)}</span></div>
                <button class="icon-btn sm" data-speak="${esc(f.order.jp)}" aria-label="Play">🔊</button>
                <button class="icon-btn sm" data-showtxt="${esc(JSON.stringify(f.order))}" aria-label="Show big">⤢</button>
              </div>
            </div>
            <p class="food-tip">💡 ${esc(f.tips)}</p>
            <div class="food-foot"><span>📍 ${esc(f.where)}</span>
              <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(f.jp + " " + f.en)}" target="_blank" rel="noopener">More photos ↗</a></div>
          </div>
        </article>`).join("")}</div>
      <p class="foot">Photos from Wikipedia (CC licensed). Tap “More photos” for more examples.</p>`;
    $$("[data-img]").forEach(async el => {
      const f = FOODS.find(x => x.id === el.dataset.img);
      const src = await foodImage(f);
      if (src && el.isConnected) el.innerHTML = `<img src="${esc(src)}" alt="${esc(f.en)}" loading="lazy" onerror="this.remove()"><span class="food-emoji">${f.emoji}</span>`;
    });
  }

  /* ---------- Media hub ---------- */
  function mediaHeader(title, sub) {
    return `<div class="media-back"><a href="#media" class="btn">‹ Media</a></div>
      <div class="section-title" style="margin-top:10px"><h2>${title}</h2><span class="sub">${sub || ""}</span></div>`;
  }
  function renderMedia() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const shot = store.get("shots", {});
    const total = PHOTO_IDEAS.reduce((a, c) => a + c.items.length, 0);
    const got = Object.keys(shot).length;
    const songs = SONG_SECTIONS.reduce((a, c) => a + c.songs.length, 0);
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Media 🎬</h2><span class="sub">camera · music · shots</span></div>
      <a class="card media-card mc-1" href="#media/recipes"><span class="mc-e">🎞️</span><div><h3>Camera recipes</h3><p>7 Fujifilm X100VI recipes (C1–C7) and where to use each on the trip.</p></div><span class="mc-go">›</span></a>
      <a class="card media-card mc-2" href="#media/songs"><span class="mc-e">🎧</span><div><h3>Japan songs</h3><p>${songs} tracks from artists you play that really reference Japan.</p></div><span class="mc-go">›</span></a>
      <a class="card media-card mc-4" href="#media/quests"><span class="mc-e">🎮</span><div><h3>Fan quests</h3><p>Ariana, My Hero Academia, Attack on Titan, Kirby & Nintendo — what's on during your dates.</p></div><span class="mc-go">›</span></a>
      <a class="card media-card mc-5" href="#recap"><span class="mc-e">📔</span><div><h3>Trip recap</h3><p>Your favorite photo + caption from each day, plus trip stats.</p></div><span class="mc-go">›</span></a>
      <a class="card media-card mc-3" href="#media/photos"><span class="mc-e">📸</span><div><h3>Photo ideas</h3><p>Shot list to check off — ${got}/${total} captured.</p></div><span class="mc-go">›</span></a>`;
  }

  function renderSongs() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const sp = q => `https://open.spotify.com/search/${encodeURIComponent(q)}`;
    const dayChip = id => { const d = DAYS.find(x => x.id === id); return d ? `<a class="song-day" href="#day/${d.id}">${d.emoji} ${d.dow}</a>` : ""; };
    view.innerHTML = mediaHeader("Japan songs 🎧", "tap ▶ for Spotify") + `
      <a class="card playlist-card" href="https://open.spotify.com/playlist/4zADznAlkmmxRMoFLxBABS" target="_blank" rel="noopener">
        <span class="mc-e">🎶</span><div><b>Tokyo Kyoto Osaka Vibes</b><span>A ready-made Spotify playlist for the trains</span></div><span class="mc-go">▶</span></a>
      ${SONG_SECTIONS.map(sec => `
        <div class="cat-h">${esc(sec.title)} ${sec.sub ? `<small>${esc(sec.sub)}</small>` : ""}</div>
        ${sec.songs.map(x => `<div class="card song ${x.mine ? "mine" : ""}">
          <a class="song-play" href="${sp(x.t + " " + x.a)}" target="_blank" rel="noopener" aria-label="Open in Spotify">▶</a>
          <div class="song-txt">
            <div class="song-t">${esc(x.t)}${x.fan ? ` <span class="mine-tag">${esc(x.fan)}</span>` : ""}</div>
            <div class="song-a">${esc(x.a)}${x.y ? ` · ${x.y}` : ""}</div>
            <div class="song-why">${esc(x.why)}</div>
            ${x.day ? `<div class="song-foot">Play on ${dayChip(x.day)}</div>` : ""}
          </div></div>`).join("")}`).join("")}
      <p class="foot">Only artists you play or follow on Spotify, and only songs that actually reference Japan — in the title, the lyrics, or sung in Japanese.</p>`;
  }

  function renderQuests() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const dayChip = id => { const d = DAYS.find(x => x.id === id); return d ? `<a class="song-day" href="#day/${d.id}">${d.emoji} ${d.dow} ${d.date.slice(5).replace("-", "/")}</a>` : ""; };
    view.innerHTML = mediaHeader("Fan quests 🎮", "Oct 26 – Nov 5") + FAN_QUESTS.map(f => `
      <div class="cat-h">${f.emoji} ${esc(f.fandom)}</div>
      ${f.items.map(q => `<div class="card quest-card">
        <div class="q-t">${esc(q.t)}</div>
        <div class="q-meta">📍 ${esc(q.where)}<br>🗓️ ${esc(q.when)}</div>
        <p class="q-what">${esc(q.what)}</p>
        <div class="q-foot">${q.day ? `Fits ${dayChip(q.day)}` : ""}
          <span class="link-row">${q.place ? `<a class="btn sm-btn" href="${mapsDir(q.place)}" target="_blank" rel="noopener">🧭</a>` : ""}${q.link ? `<a class="btn sm-btn" href="${esc(q.link)}" target="_blank" rel="noopener">Info ↗</a>` : ""}</span></div>
      </div>`).join("")}`).join("") + `<p class="foot">Checked Oct 25, 2026. Event pages can change — tap Info before you go. No Ariana concerts in Japan this tour.</p>`;
  }

  function renderPhotos() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const shot = store.get("shots", {});
    const total = PHOTO_IDEAS.reduce((a, c) => a + c.items.length, 0);
    const got = Object.keys(shot).length;
    const dayName = id => { const d = DAYS.find(x => x.id === id); return d ? `${d.emoji} ${d.dow} ${d.date.slice(5).replace("-", "/")}` : ""; };
    view.innerHTML = mediaHeader("Photo ideas 📸", `${got}/${total} captured`) + `
      <div class="progress" style="margin-top:0"><span>${got}/${total}</span><div class="bar"><i style="width:${(got / total) * 100}%"></i></div></div>
      ${PHOTO_IDEAS.map((c, ci) => `
        <div class="cat-h">${esc(c.cat)}</div>
        ${c.items.map(([e, t, how, day], i) => {
          const k = `${ci}-${i}`, on = !!shot[k];
          return `<div class="card shot ${on ? "got" : ""}">
            <button class="shot-check" data-shot="${k}" aria-label="Mark captured">${on ? "✅" : e}</button>
            <div class="shot-txt"><div class="shot-t">${esc(t)}</div><div class="shot-how">${esc(how)}</div>
              <div class="shot-foot">${day ? `<a href="#day/${day}">${dayName(day)}</a>` : `<span>Anytime</span>`}
              <a href="https://www.pinterest.com/search/pins/?q=${encodeURIComponent(t + " Japan")}" target="_blank" rel="noopener">🖼️ Examples</a></div></div>
          </div>`;
        }).join("")}`).join("")}
      <p class="foot">Every step's 📸 Photo op on the Today tab has its own 🖼️ Photo idea button too.</p>`;
  }

  /* ---------- Recipes ---------- */
  function renderRecipes(focus) {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const uses = {};
    DAYS.forEach((d, di) => d.steps.forEach(s => { if (s.rx) (uses[s.rx] = uses[s.rx] || []).push({ d, di, s }); }));
    view.innerHTML = mediaHeader("X100VI recipes 🎞️", "C1–C7") + `
      <details class="card cheat"><summary>⚙️ How to save + switch</summary><div class="cheat-body"><ul class="rx-tips">${RECIPE_TIPS.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div></details>
      ${RECIPES.map(r => `
        <article class="card recipe" id="rx-${r.id}">
          <div class="rx-head"><span class="rx-slot">${r.slot}</span><div><h3>${r.emoji} ${esc(r.name)}</h3><div class="rx-sim">${esc(r.sim)}</div></div></div>
          <p class="rx-vibe">${esc(r.vibe)}</p>
          <table class="rx-table">${r.settings.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</table>
          <div class="rx-use"><b>Best for</b>${r.use.map(u => `<span>${esc(u)}</span>`).join("")}</div>
          ${uses[r.id] ? `<div class="rx-trip"><b>On your trip</b>${uses[r.id].map(u => `<a href="#day/${u.d.id}" data-step="${u.d.id}-${u.d.steps.indexOf(u.s)}">${u.d.emoji} ${u.d.dow} · ${esc(u.s.title)}</a>`).join("")}</div>` : ""}
        </article>`).join("")}
      <p class="foot">Recipes are starting points — adjust exposure comp to taste and check the histogram on the once-only shots.</p>`;
    if (focus) setTimeout(() => $("#rx-" + focus)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  /* ---------- Phrases ---------- */
  function phraseCard(p) {
    return `<div class="card phrase">
      <div class="row">
        <div class="txt">
          <div class="jp">${esc(p.jp)}</div>
          <div class="ro">${esc(p.ro)}</div>
          <div class="en">${esc(p.en)}</div>
          <div class="say">🗣️ ${esc(p.say)}</div>
        </div>
        <div style="display:grid;gap:8px">
          <button class="icon-btn" data-speak="${esc(p.jp)}" aria-label="Play pronunciation">🔊</button>
          <button class="icon-btn" data-show="${p.id}" aria-label="Show big to staff">⤢</button>
        </div>
      </div>
      ${p.note ? `<div class="note">💡 ${esc(p.note)}</div>` : ""}
    </div>`;
  }

  let phraseCat = "All", phraseQ = "";
  function renderPhrases() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const cats = ["All", ...new Set(PHRASES.filter(okPhrase).map(p => p.cat))];
    if (!cats.includes(phraseCat)) phraseCat = "All";
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Phrasebook 🗣️</h2><span class="sub">🔊 hear it · ⤢ show it</span></div>
      <input class="search" id="pq" type="search" placeholder="Search: thank you, beer, bathroom…" value="${esc(phraseQ)}" autocomplete="off" />
      <div class="cats">${cats.map(c => `<button data-cat="${esc(c)}" class="${c === phraseCat ? "on" : ""}">${esc(c)}</button>`).join("")}</div>
      <div id="plist"></div>
      <p class="foot">Tip: tap ⤢ to show a phrase in giant text to staff — perfect for pointing at what you want.</p>`;
    paintPhraseList();
    $("#pq").addEventListener("input", e => { phraseQ = e.target.value; paintPhraseList(); });
  }
  function paintPhraseList() {
    const q = phraseQ.trim().toLowerCase();
    const list = PHRASES.filter(okPhrase).filter(p => (phraseCat === "All" || p.cat === phraseCat) &&
      (!q || [p.jp, p.ro, p.en, p.note || ""].join(" ").toLowerCase().includes(q)));
    let html = "", lastCat = "";
    list.forEach(p => {
      if (phraseCat === "All" && !q && p.cat !== lastCat) { html += `<div class="cat-h">${esc(p.cat)}</div>`; lastCat = p.cat; }
      else if (!html) html += `<div style="height:8px"></div>`;
      html += phraseCard(p);
    });
    $("#plist").innerHTML = html || `<p class="foot">No match — try another word.</p>`;
  }

  /* ---------- Manners ---------- */
  const bowSvg = deg => {
    const r = deg * Math.PI / 180, hx = 30 + Math.sin(r) * 34, hy = 62 - Math.cos(r) * 34;
    return `<svg width="64" height="96" viewBox="0 0 64 96" aria-hidden="true">
      <line x1="30" y1="62" x2="30" y2="92" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
      <line x1="30" y1="62" x2="${hx}" y2="${hy}" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
      <circle cx="${30 + Math.sin(r) * 46}" cy="${62 - Math.cos(r) * 46}" r="8" fill="currentColor"/></svg>`;
  };
  function renderManners() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Manners + culture 🙇</h2><span class="sub">tap to open</span></div>
      ${MANNERS.filter(m => !(m.spicy && isSafe())).map((m, i) => `<details class="card manner" ${i === 0 ? "open" : ""}>
        <summary><span class="e">${m.emoji}</span>${esc(m.title)}</summary>
        ${i === 0 ? `<div class="bow-demo"><div>${bowSvg(0)}Standing</div><div>${bowSvg(15)}15° everyday<br>“thank you”</div><div>${bowSvg(30)}30° big thanks<br>/ sorry</div></div>` : ""}
        <ul>${m.body.map(b => `<li>${b}</li>`).join("")}</ul>
      </details>`).join("")}
      <p class="foot">When in doubt: smile, small bow, “sumimasen.” It fixes almost everything.</p>`;
  }

  /* ---------- Hotels ---------- */
  function tonightKey() {
    const d = DAYS[todayDayIndex()];
    return isToday(d) ? d.sleep : null;
  }
  function hotelsHtml() {
    const tk = tonightKey();
    const fuji = store.get("fujiHotel", {}) || {};
    return `
      <div class="section-title" id="t-hotels"><h2>🏨 Hotels + taxi cards</h2><span class="sub">🚕 = show driver</span></div>
      ${Object.keys(HOTELS).map(k => {
        const h = hotel(k);
        return `<div class="card hotel ${k === tk ? "tonight" : ""}">
          ${k === tk ? `<span class="tag">Tonight</span>` : ""}
          <div class="h-top" style="margin-top:${k === tk ? 8 : 0}px"><span class="h-e">${h.emoji}</span>
            <div><h3>${esc(h.name)}</h3><div class="h-dates">${esc(h.dates)}</div></div></div>
          ${h.addr ? `<div class="addr-jp jp">${esc(h.jp)}<br>${esc(h.addr)}</div>` : ""}
          <div class="addr-en">${esc(h.addrEn)}</div>
          ${h.nearEn ? `<div class="near">🚉 ${esc(h.nearEn)}</div>` : ""}
          <div class="step-actions">
            ${h.addr || h.jp ? `<button class="btn primary" data-taxi="${k}">🚕 Show driver</button>` : ""}
            <a class="btn" href="${mapsDir(h.maps)}" target="_blank" rel="noopener">🧭 Directions</a>
            ${h.addr ? `<button class="btn" data-copy="${esc(h.jp + " " + h.addr)}">📋 Copy</button>` : ""}
          </div>
          ${h.editable ? `<details style="margin-top:10px"><summary class="btn" style="display:inline-flex">✏️ Edit Fuji hotel</summary>
            <label class="field">Hotel name<input id="fz-name" value="${esc(fuji.name || "")}" placeholder="e.g. Fuji View Ryokan"></label>
            <label class="field">Name in Japanese (optional)<input id="fz-jp" value="${esc(fuji.jp || "")}" placeholder="from the booking confirmation"></label>
            <label class="field">Address in Japanese (for taxis)<input id="fz-addr" value="${esc(fuji.addr || "")}" placeholder="山梨県南都留郡富士河口湖町…"></label>
            <label class="field">Address in English<input id="fz-en" value="${esc(fuji.addrEn || "")}" placeholder="Fujikawaguchiko, Yamanashi"></label>
            <div class="step-actions"><button class="btn primary" data-savefuji>💾 Save</button></div>
          </details>` : ""}
        </div>`;
      }).join("")}
      <div class="card tip" style="margin-top:14px">
        ${isSafe() ? "" : `<b>Bringing someone back?</b> Your Tokyo room is booked for 1 — register a visitor at the desk. Osaka is booked for 2. `}
        Check-in is usually 3 PM, checkout 10–11 AM, and every hotel holds bags for free.
      </div>`;
  }

  /* ---------- SOS ---------- */
  function sosHtml() {
    const em = PHRASES.filter(p => p.cat === "Emergency");
    return `
      <div class="section-title" id="t-sos"><h2>🆘 Help + emergencies</h2><span class="sub">tap to call</span></div>
      ${SOS.map(s => `<a class="card sos" href="tel:${s.num.replace(/[^0-9+]/g, "")}">
        <div><div class="lbl">${esc(s.label)}</div><div class="num">${esc(s.num)}</div><div class="nt">${esc(s.note)}</div></div>
        <span class="call">📞</span></a>`).join("")}
      <div class="card tip" style="margin-top:14px">
        <b>Lost?</b> Look for a kōban (police box) — they give directions all day. <b>Lost passport?</b> Report it at a kōban for a police report, then call the US Embassy.
        Keep a photo of your passport page on your phone.
      </div>
      <div class="section-title"><h2>Emergency phrases</h2></div>
      ${em.map(phraseCard).join("")}`;
  }

  /* ---------- Tickets vault (on this phone only) ---------- */
  function tickets() {
    let t = store.get("tickets", null);
    if (!t) { t = TICKET_SEEDS.map((x, i) => ({ id: "t" + i, code: "", note: "", photo: false, ...x })); store.set("tickets", t); }
    return t;
  }
  const ticketsFor = date => tickets().filter(t => t.date === date && (t.code || t.photo));
  function ticketsHtml() {
    const today = jstDateStr();
    const list = tickets().slice().sort((a, b) => (a.date || "9").localeCompare(b.date || "9"));
    return `
      <div class="section-title" id="t-tickets"><h2>🎟️ My tickets</h2><span class="sub">saved on this phone only</span></div>
      <p class="mini-note">Add screenshots of QR codes and confirmation numbers. They work offline and never leave your phone — nothing goes to GitHub.</p>
      ${list.map(t => `<div class="card ticket ${t.date === today ? "today" : ""} ${t.code || t.photo ? "" : "empty"}" id="tk-${t.id}">
        <div class="tk-head"><div><div class="tk-title">${esc(t.title)}</div><div class="tk-when">${esc(t.when || "")}</div></div>${t.date === today ? `<span class="tag">Today</span>` : ""}</div>
        ${t.photo ? `<button class="tk-img" data-tkview="${t.id}" aria-label="Show full screen"><span>Loading…</span></button>` : ""}
        ${t.code ? `<button class="tk-code" data-copy="${esc(t.code)}">${esc(t.code)} <small>tap to copy</small></button>` : ""}
        ${t.note ? `<div class="tk-note">${esc(t.note)}</div>` : ""}
        <div class="step-actions">
          <label class="btn ${t.photo ? "" : "primary"}">📷 ${t.photo ? "Replace" : "Add"} screenshot<input type="file" accept="image/*" data-tkfile="${t.id}" hidden></label>
          <button class="btn" data-tkedit="${t.id}">✏️ ${t.code ? "Edit" : "Add code"}</button>
          <button class="btn" data-tkdel="${t.id}" aria-label="Remove">🗑️</button>
        </div>
      </div>`).join("")}
      <div class="card add-card"><b>➕ Add a ticket</b>
        <label class="field">What is it?<input id="tk-new-title" placeholder="e.g. teamLab Planets 10:00"></label>
        <label class="field">Date<input id="tk-new-date" type="date" min="2026-10-25" max="2026-11-05"></label>
        <div class="step-actions"><button class="btn primary" data-tkadd>Add</button></div>
      </div>`;
  }
  async function paintTicketImages() {
    for (const t of tickets().filter(x => x.photo)) {
      const el = $(`#tk-${t.id} .tk-img`);
      const u = await imgUrl("tk:" + t.id);
      if (el) el.innerHTML = u ? `<img src="${u}" alt="${esc(t.title)}">` : "<span>Photo missing</span>";
    }
  }

  /* ---------- Money ---------- */
  async function getRate() {
    const c = store.get("fx", null);
    if (c && Date.now() - c.at < 6 * 36e5) return c;
    try {
      const r = await fetch("https://open.er-api.com/v6/latest/USD");
      const j = await r.json();
      if (j && j.rates && j.rates.JPY) { const v = { jpy: j.rates.JPY, at: Date.now(), live: true }; store.set("fx", v); return v; }
    } catch {}
    return c || { jpy: 150, at: 0, live: false };
  }
  const yen = n => "¥" + Math.round(n).toLocaleString("en-US");
  const usd = (n, rate) => "$" + (n / rate).toFixed(n / rate < 100 ? 2 : 0);
  function taxFreeLine() {
    const end = Date.UTC(2026, 9, 31, 15, 0); // Oct 31 24:00 JST
    const left = end - Date.now();
    if (left > 0) {
      const d = Math.floor(left / 864e5), h = Math.floor(left % 864e5 / 36e5);
      return `<div class="card taxfree"><b>⏳ Tax-free at the register ends in ${d}d ${h}h</b><p>Through Sat Oct 31: show your passport, spend ¥5,000+ per store, and the 10% tax comes off at the register. Do the big Pokémon / Nintendo haul by then.</p></div>`;
    }
    return `<div class="card taxfree"><b>🧾 Tax refund mode</b><p>Since Nov 1 you pay full price. Keep receipts and the goods with you, and claim the refund at the Narita tax-refund kiosk before you check your bag.</p></div>`;
  }
  const CATS = [["food", "🍜 Food"], ["transport", "🚃 Transport"], ["shopping", "🛍️ Shopping"], ["tickets", "🎟️ Tickets"], ["nights", "🍻 Nights"], ["other", "📦 Other"]];
  function moneyHtml(rate) {
    const log = store.get("spend", []);
    const today = jstDateStr();
    const tot = log.reduce((a, x) => a + x.amt, 0);
    const todayTot = log.filter(x => x.date === today).reduce((a, x) => a + x.amt, 0);
    const budget = store.get("budget", 0);
    const byCat = CATS.map(([k, l]) => [l, log.filter(x => x.cat === k).reduce((a, x) => a + x.amt, 0)]).filter(x => x[1] > 0);
    const max = Math.max(1, ...byCat.map(x => x[1]));
    const cats = CATS.filter(c => !(isSafe() && c[0] === "nights"));
    return `
      <div class="section-title" id="t-money"><h2>💴 Money</h2><span class="sub">${rate.live ? "live rate" : "approx. rate"} · $1 = ¥${rate.jpy.toFixed(1)}</span></div>
      <div class="card money">
        <div class="conv">
          <label><span>¥ Yen</span><input id="cv-jpy" type="number" inputmode="decimal" placeholder="1000"></label>
          <span class="conv-eq">⇄</span>
          <label><span>$ USD</span><input id="cv-usd" type="number" inputmode="decimal" placeholder="${(1000 / rate.jpy).toFixed(2)}"></label>
        </div>
        <div class="quick">${[500, 1000, 3000, 5000, 10000].map(n => `<button data-cv="${n}">${yen(n)} = ${usd(n, rate.jpy)}</button>`).join("")}</div>
      </div>
      ${taxFreeLine()}
      <div class="card money">
        <div class="spend-tot">
          <div><small>Today</small><b>${yen(todayTot)}</b><span>${usd(todayTot, rate.jpy)}</span></div>
          <div><small>Whole trip</small><b>${yen(tot)}</b><span>${usd(tot, rate.jpy)}</span></div>
        </div>
        ${budget ? `<div class="progress" style="margin:10px 0 0"><span>Daily budget ${yen(budget)}</span><div class="bar"><i style="width:${Math.min(100, todayTot / budget * 100)}%;${todayTot > budget ? "background:#e5484d" : ""}"></i></div></div>` : ""}
        <div class="spend-form">
          <input id="sp-amt" type="number" inputmode="decimal" placeholder="¥ amount">
          <input id="sp-what" placeholder="What? (ramen, Suica top-up…)">
          <select id="sp-cat">${cats.map(([k, l]) => `<option value="${k}">${l}</option>`).join("")}</select>
          <button class="btn primary" data-spadd>Add</button>
        </div>
        ${byCat.length ? `<div class="cat-bars">${byCat.map(([l, v]) => `<div class="cb"><span>${l}</span><i style="width:${v / max * 100}%"></i><b>${yen(v)}</b></div>`).join("")}</div>` : ""}
        ${log.length ? `<details class="spend-log"><summary>Log (${log.length})</summary>${log.slice().reverse().map(x => `<div class="sl-row"><span>${esc(x.date.slice(5).replace("-", "/"))}</span><span class="sl-what">${esc(x.what || "")}</span><b>${yen(x.amt)}</b><button data-spdel="${x.id}" aria-label="Delete">✕</button></div>`).join("")}</details>` : `<p class="mini-note">Log what you spend — it totals by day and category.</p>`}
        <label class="field">Daily budget (¥, optional)<input id="sp-budget" type="number" inputmode="numeric" value="${budget || ""}" placeholder="e.g. 15000"></label>
      </div>`;
  }

  /* ---------- Merch + gifts ---------- */
  function merch() {
    let m = store.get("merch", null);
    if (!m) { m = MERCH_SEEDS.map((x, i) => ({ id: "m" + i, forWho: "", price: "", bought: false, ...x })); store.set("merch", m); }
    return m;
  }
  function merchHtml() {
    const m = merch();
    const dayOf = id => DAYS.find(d => d.id === id);
    const row = x => {
      const d = dayOf(x.day);
      const taxNote = d ? (d.date <= "2026-10-31" ? `<span class="tf ok">tax-free at register</span>` : `<span class="tf">refund at Narita</span>`) : "";
      return `<div class="card merch ${x.bought ? "got" : ""}">
        <button class="shot-check" data-mtoggle="${x.id}" aria-label="Bought">${x.bought ? "✅" : "🛍️"}</button>
        <div class="m-txt">
          <div class="m-item">${esc(x.item)}</div>
          <div class="m-where">📍 ${esc(x.where || "")} ${d ? `· <a href="#day/${d.id}">${dv(d).emoji} ${d.dow}</a>` : ""} ${taxNote}</div>
          <div class="m-inputs"><input data-mfor="${x.id}" value="${esc(x.forWho || "")}" placeholder="For who?"><input data-mprice="${x.id}" type="number" inputmode="numeric" value="${esc(x.price || "")}" placeholder="¥"></div>
        </div>
        <button class="m-del" data-mdel="${x.id}" aria-label="Remove">✕</button>
      </div>`;
    };
    const todo = m.filter(x => !x.bought), got = m.filter(x => x.bought);
    const spent = got.reduce((a, x) => a + (+x.price || 0), 0);
    return `
      <div class="section-title" id="t-merch"><h2>🛍️ Merch + gifts</h2><span class="sub">${got.length}/${m.length} bought${spent ? ` · ${yen(spent)}` : ""}</span></div>
      ${todo.map(row).join("")}
      <div class="card add-card"><b>➕ Add an item</b>
        <label class="field">Item<input id="m-new-item" placeholder="e.g. Gengar plush for…"></label>
        <label class="field">Where<input id="m-new-where" placeholder="Pokémon Center Mega Tokyo"></label>
        <div class="step-actions"><button class="btn primary" data-madd>Add</button></div>
      </div>
      ${got.length ? `<div class="cat-h">Bought ✅</div>${got.map(row).join("")}` : ""}`;
  }

  /* ---------- Settings ---------- */
  function settingsHtml() {
    return `
      <div class="section-title" id="t-settings"><h2>⚙️ Settings</h2></div>
      <div class="card settings">
        <div class="set-row"><div><b>😇 Family-friendly mode</b><small>Hides nightlife steps, after-dark tips and flirting phrases — for showing the site to family or friends. Also on the 🔥 button up top.</small></div>
          <button class="switch ${isSafe() ? "on" : ""}" data-safe aria-pressed="${isSafe()}"><i></i></button></div>
        <div class="set-row"><div><b>💾 Back up my data</b><small>Downloads your checkmarks, notes, tickets text, spending and merch list. Photos stay on this phone.</small></div>
          <button class="btn" data-backup>Download</button></div>
        <div class="set-row"><div><b>♻️ Restore a backup</b><small>Pick a backup file you downloaded earlier.</small></div>
          <label class="btn">Choose file<input type="file" accept="application/json" data-restore hidden></label></div>
      </div>`;
  }

  /* ---------- Trip tab ---------- */
  async function renderTrip(section) {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const rate = store.get("fx", null) || { jpy: 150, live: false };
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Trip 🧳</h2><span class="sub">tickets · money · stays</span></div>
      <div class="cats trip-nav">${[["tickets", "🎟️ Tickets"], ["money", "💴 Money"], ["merch", "🛍️ Merch"], ["hotels", "🏨 Hotels"], ["sos", "🆘 SOS"], ["settings", "⚙️ Settings"]].map(([k, l]) => `<button data-jump="t-${k}">${l}</button>`).join("")}</div>
      ${ticketsHtml()}
      <div id="money-wrap">${moneyHtml(rate)}</div>
      <div id="merch-wrap">${merchHtml()}</div>
      ${hotelsHtml()}
      ${sosHtml()}
      ${settingsHtml()}`;
    paintTicketImages();
    if (section) setTimeout(() => $("#t-" + section)?.scrollIntoView({ block: "start" }), 30);
    const fresh = await getRate();
    if (fresh.jpy !== rate.jpy || fresh.live !== rate.live) { const w = $("#money-wrap"); if (w) w.innerHTML = moneyHtml(fresh); }
  }
  const rerender = fn => { const y = scrollY; fn(); scrollTo(0, y); };

  /* ---------- Get-home card ---------- */
  function homeCard(day) {
    if (!day.home || !isToday(day) || jstMinutes() < toMin(day.home.after)) return "";
    const h = day.sleep ? hotel(day.sleep) : null;
    return `<div class="card home-card"><b>🌙 Getting home tonight</b><p>${esc(day.home.note)}</p>
      <div class="step-actions">
        ${h ? `<a class="btn primary" href="${mapsDir(h.maps)}" target="_blank" rel="noopener">🧭 Route to hotel</a>` : ""}
        ${h && (h.addr || h.jp) ? `<button class="btn" data-taxi="${day.sleep}">🚕 Taxi card</button>` : ""}
        <a class="btn" href="https://go.mo-t.com/" target="_blank" rel="noopener">🚖 GO taxi app</a>
      </div></div>`;
  }

  /* ---------- Recap ---------- */
  async function renderRecap() {
    document.body.dataset.theme = "sunrise";
    renderStrip(null);
    const done = store.get("done", {}), shots = store.get("shots", {}), spend = store.get("spend", []);
    const favs = DAYS.map(d => ({ d: dv(d), f: store.get("fav:" + d.id, {}) || {} }));
    const steps = DAYS.reduce((a, d) => a + d.steps.length, 0);
    const tot = spend.reduce((a, x) => a + x.amt, 0);
    const rate = store.get("fx", null) || { jpy: 150 };
    const bought = merch().filter(x => x.bought).length;
    view.innerHTML = `
      <div class="media-back"><a href="#media" class="btn">‹ Media</a></div>
      <section class="banner recap-hero">
        <div class="bt"><span class="kicker">Oct 26 – Nov 5, 2026</span><h1>Ian × Japan · Recap</h1><div class="date">Tokyo · Kyoto · Osaka · Hiroshima · Mt Fuji</div></div>
        <div class="recap-stats">
          <div><b>${Object.keys(done).length}</b><span>steps done of ${steps}</span></div>
          <div><b>${Object.keys(shots).length}</b><span>shots captured</span></div>
          <div><b>${favs.filter(x => x.f.photo).length}</b><span>favorite moments</span></div>
          <div><b>${tot ? yen(tot) : "—"}</b><span>${tot ? usd(tot, rate.jpy) + " spent" : "spent"}</span></div>
          <div><b>${bought}</b><span>souvenirs bought</span></div>
        </div>
      </section>
      <div class="recap-grid">${favs.map(({ d, f }, i) => `
        <a class="card recap-day" href="#day/${d.id}">
          <div class="rd-img" id="rd-${d.id}">${f.photo ? "" : `<span>${d.emoji}</span>`}</div>
          <div class="rd-txt"><small>Day ${i + 1} · ${d.dow} ${d.date.slice(5).replace("-", "/")}</small><b>${esc(d.title)}</b>
            ${f.stars ? `<span class="rd-stars">${"★".repeat(f.stars)}${"☆".repeat(5 - f.stars)}</span>` : ""}
            ${f.cap ? `<p>${esc(f.cap)}</p>` : `<p class="muted">Add a favorite photo + caption on this day →</p>`}</div>
        </a>`).join("")}</div>
      <div class="link-row" style="justify-content:center;margin-top:16px"><button class="btn primary" data-share>📤 Share recap text</button></div>
      <p class="foot">Screenshot this page for your photo dump. Photos are stored only on this phone.</p>`;
    for (const { d, f } of favs) if (f.photo) imgUrl("fav:" + d.id).then(u => { const el = $("#rd-" + d.id); if (u && el) el.innerHTML = `<img src="${u}" alt="">`; });
  }

  /* ---------- Router ---------- */
  function setTab(tab) { $$(".tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === tab)); }
  function route() {
    const h = location.hash.replace(/^#/, "") || "today";
    $("#nowBtn").hidden = true;
    $$(".confetti").forEach(c => c.remove());
    $("#overlay").hidden = true;
    if (h.startsWith("day/")) { renderDay(h.slice(4)); setTab("today"); }
    else if (h === "food") { renderFood(); setTab("food"); }
    else if (h === "media") { renderMedia(); setTab("media"); }
    else if (h === "media/songs") { renderSongs(); setTab("media"); }
    else if (h === "media/photos") { renderPhotos(); setTab("media"); }
    else if (h === "media/quests") { renderQuests(); setTab("media"); }
    else if (h.startsWith("media/recipes") || h.startsWith("recipes")) {
      const focus = h.startsWith("media/") ? h.split("/")[2] : h.split("/")[1];
      renderRecipes(focus); setTab("media"); if (focus) return;
    }
    else if (h === "trip" || h.startsWith("trip/") || h === "help" || h === "hotels" || h === "sos") {
      const sec = h.startsWith("trip/") ? h.split("/")[1] : (h === "hotels" || h === "sos" ? h : "");
      renderTrip(sec); setTab("trip"); if (sec) return;
    }
    else if (h === "recap") { renderRecap(); setTab("media"); }
    else if (h === "phrases") { renderPhrases(); setTab("phrases"); }
    else if (h === "manners") { renderManners(); setTab("manners"); }
    else { renderDay(DAYS[todayDayIndex()].id); setTab("today"); }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  const currentDayId = () => (location.hash.match(/^#day\/(\w+)/) || [])[1] || DAYS[todayDayIndex()].id;

  /* ---------- Delegated events ---------- */
  document.addEventListener("click", e => {
    const tile = e.target.closest("[data-tile]");
    if (tile) { $$(".tile").forEach(x => x.classList.toggle("picked", x === tile)); return; }
    const t = e.target.closest("[data-planb],[data-star],[data-jump],[data-cv],[data-spadd],[data-spdel],[data-mtoggle],[data-mdel],[data-madd],[data-tkview],[data-tkedit],[data-tkdel],[data-tkadd],[data-safe],[data-backup],[data-share],[data-shot],[data-ask],[data-speak],[data-show],[data-showtxt],[data-done],[data-variant],[data-taxi],[data-copy],[data-cat],[data-savefuji],[data-flyto],[data-step],[data-area],[data-locate],[data-fitall],[data-goto]");
    if (!t) return;
    if (t.dataset.speak !== undefined) { e.stopPropagation(); speak(t.dataset.speak, t); return; }
    if (t.dataset.planb) { const k = "planb:" + t.dataset.planb; store.set(k, !store.get(k, false)); toast(store.get(k, false) ? "Plan B on ☔" : "Back to the original plan ☀️"); rerender(() => renderDay(t.dataset.planb)); return; }
    if (t.dataset.star) { const [d, n] = t.dataset.star.split("|"); const f = store.get("fav:" + d, {}) || {}; f.stars = f.stars === +n ? 0 : +n; store.set("fav:" + d, f); $$(`[data-star^="${d}|"]`).forEach((b, i) => b.classList.toggle("on", i < f.stars)); return; }
    if (t.dataset.jump) { $("#" + t.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (t.dataset.cv) { const r = (store.get("fx", null) || { jpy: 150 }).jpy; $("#cv-jpy").value = t.dataset.cv; $("#cv-usd").value = (t.dataset.cv / r).toFixed(2); return; }
    if (t.dataset.spadd !== undefined) {
      const amt = parseFloat($("#sp-amt").value); if (!(amt > 0)) { toast("Enter a ¥ amount"); return; }
      const log = store.get("spend", []); log.push({ id: Date.now().toString(36), amt, what: $("#sp-what").value.trim(), cat: $("#sp-cat").value, date: jstDateStr() });
      store.set("spend", log); toast(`Logged ${yen(amt)} 💴`); rerender(() => { $("#money-wrap").innerHTML = moneyHtml(store.get("fx", null) || { jpy: 150 }); }); return;
    }
    if (t.dataset.spdel) { store.set("spend", store.get("spend", []).filter(x => x.id !== t.dataset.spdel)); rerender(() => { $("#money-wrap").innerHTML = moneyHtml(store.get("fx", null) || { jpy: 150 }); }); return; }
    if (t.dataset.mtoggle) { const m = merch(); const x = m.find(i => i.id === t.dataset.mtoggle); if (x) x.bought = !x.bought; store.set("merch", m); rerender(() => { $("#merch-wrap").innerHTML = merchHtml(); }); return; }
    if (t.dataset.mdel) { store.set("merch", merch().filter(i => i.id !== t.dataset.mdel)); rerender(() => { $("#merch-wrap").innerHTML = merchHtml(); }); return; }
    if (t.dataset.madd !== undefined) { const item = $("#m-new-item").value.trim(); if (!item) { toast("Name the item"); return; } const m = merch(); m.push({ id: "m" + Date.now().toString(36), item, where: $("#m-new-where").value.trim(), day: "", forWho: "", price: "", bought: false }); store.set("merch", m); rerender(() => { $("#merch-wrap").innerHTML = merchHtml(); }); return; }
    if (t.dataset.tkview) { imgUrl("tk:" + t.dataset.tkview).then(u => { if (!u) return; const tk = tickets().find(x => x.id === t.dataset.tkview); openOverlay(`<div class="tk-full"><b>${esc(tk ? tk.title : "")}</b><img src="${u}" alt=""><small>Turn your screen brightness up for scanners ☀️</small></div>`); }); return; }
    if (t.dataset.tkedit) {
      const list = tickets(); const tk = list.find(x => x.id === t.dataset.tkedit); if (!tk) return;
      const code = prompt(`Confirmation / booking code for “${tk.title}”`, tk.code || ""); if (code === null) return;
      const note = prompt("Note (seat, time, entrance…) — optional", tk.note || ""); tk.code = code.trim(); if (note !== null) tk.note = note.trim();
      store.set("tickets", list); renderTrip("tickets"); return;
    }
    if (t.dataset.tkdel) { if (!confirm("Remove this ticket?")) return; idb.del("tk:" + t.dataset.tkdel); store.set("tickets", tickets().filter(x => x.id !== t.dataset.tkdel)); rerender(() => renderTrip()); return; }
    if (t.dataset.tkadd !== undefined) { const title = $("#tk-new-title").value.trim(); if (!title) { toast("Name the ticket"); return; } const list = tickets(); const date = $("#tk-new-date").value; list.push({ id: "t" + Date.now().toString(36), title, date, when: date ? longDate(date, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(date + "T12:00:00Z").getUTCDay()]) : "", code: "", note: "", photo: false }); store.set("tickets", list); renderTrip("tickets"); return; }
    if (t.dataset.safe !== undefined) { store.set("safe", !isSafe()); applySafe(); toast(isSafe() ? "Family-friendly mode on 😇" : "Family-friendly mode off 🔥"); rerender(route); return; }
    if (t.dataset.backup !== undefined) {
      const data = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith("ij:") && !k.startsWith("ij:img:") && !k.startsWith("ij:wx:")) data[k] = localStorage.getItem(k); }
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "application/json" })); a.download = `ian-japan-backup-${jstDateStr()}.json`; a.click(); return;
    }
    if (t.dataset.share !== undefined) {
      const lines = DAYS.map((d, i) => { const f = store.get("fav:" + d.id, {}) || {}; return `Day ${i + 1} ${dv(d).emoji} ${dv(d).title}${f.cap ? " — " + f.cap : ""}`; });
      const text = "Ian × Japan 2026 🇯🇵\n" + lines.join("\n");
      if (navigator.share) navigator.share({ title: "Ian × Japan recap", text }).catch(() => {}); else navigator.clipboard?.writeText(text).then(() => toast("Recap copied 📋"));
      return;
    }
    if (t.dataset.shot) {
      const shot = store.get("shots", {});
      if (shot[t.dataset.shot]) delete shot[t.dataset.shot]; else shot[t.dataset.shot] = Date.now();
      store.set("shots", shot); const y = scrollY; renderPhotos(); scrollTo(0, y); return;
    }
    if (t.dataset.ask) { showAsk(t.dataset.ask); return; }
    if (t.dataset.showtxt) { showPhrase(JSON.parse(t.dataset.showtxt)); return; }
    if (t.dataset.step) { e.preventDefault(); location.hash = "day/" + t.dataset.step.split("-")[0]; setTimeout(() => $("#s-" + t.dataset.step)?.scrollIntoView({ behavior: "smooth", block: "center" }), 120); return; }
    if (t.dataset.flyto) { flyTo(t.dataset.flyto); return; }
    if (t.dataset.area !== undefined) { showArea(+t.dataset.area); return; }
    if (t.dataset.locate !== undefined) { locateMe(); return; }
    if (t.dataset.fitall !== undefined) { if (map) map.fitBounds(L.latLngBounds(Object.values(mapMarkers).map(m => m.getLatLng())), { padding: [30, 30] }); $$(".area-chips button").forEach(b => b.classList.remove("on")); return; }
    if (t.dataset.goto) { e.preventDefault(); map && map.closePopup(); $("#s-" + t.dataset.goto)?.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    if (t.dataset.show) { const p = PHRASES.find(x => x.id === t.dataset.show); if (p) showPhrase(p); return; }
    if (t.dataset.done) {
      const done = store.get("done", {});
      done[t.dataset.done] = !done[t.dataset.done];
      if (!done[t.dataset.done]) delete done[t.dataset.done];
      store.set("done", done);
      const y = window.scrollY; renderDay(currentDayId()); window.scrollTo(0, y);
      return;
    }
    if (t.dataset.variant) {
      const id = currentDayId();
      store.set("variant:" + id, t.dataset.variant);
      const y = window.scrollY; renderDay(id); window.scrollTo(0, y);
      return;
    }
    if (t.dataset.taxi) { showHotel(hotel(t.dataset.taxi)); return; }
    if (t.dataset.copy) {
      navigator.clipboard?.writeText(t.dataset.copy).then(() => toast("Address copied 📋"), () => toast("Couldn't copy"));
      return;
    }
    if (t.dataset.cat) { phraseCat = t.dataset.cat; $$(".cats button").forEach(b => b.classList.toggle("on", b === t)); paintPhraseList(); return; }
    if (t.dataset.savefuji !== undefined) {
      store.set("fujiHotel", { name: $("#fz-name").value.trim(), jp: $("#fz-jp").value.trim(), addr: $("#fz-addr").value.trim(), addrEn: $("#fz-en").value.trim() });
      toast("Fuji hotel saved 🗻"); renderTrip("hotels");
    }
  });
  document.addEventListener("input", e => {
    const el = e.target;
    if (el.dataset.notes) store.set("notes:" + el.dataset.notes, el.value);
    if (el.dataset.favcap) { const f = store.get("fav:" + el.dataset.favcap, {}) || {}; f.cap = el.value; store.set("fav:" + el.dataset.favcap, f); }
    if (el.dataset.mfor || el.dataset.mprice) { const m = merch(); const x = m.find(i => i.id === (el.dataset.mfor || el.dataset.mprice)); if (x) { if (el.dataset.mfor) x.forWho = el.value; else x.price = el.value; store.set("merch", m); } }
    if (el.id === "sp-budget") store.set("budget", +el.value || 0);
    if (el.id === "cv-jpy" || el.id === "cv-usd") {
      const r = (store.get("fx", null) || { jpy: 150 }).jpy;
      if (el.id === "cv-jpy") $("#cv-usd").value = el.value ? (el.value / r).toFixed(2) : "";
      else $("#cv-jpy").value = el.value ? Math.round(el.value * r) : "";
    }
  });
  document.addEventListener("change", async e => {
    const el = e.target;
    if (el.dataset.favfile && el.files[0]) {
      toast("Saving photo…");
      try { await idb.set("fav:" + el.dataset.favfile, await shrinkImage(el.files[0], 1600, 0.85)); const f = store.get("fav:" + el.dataset.favfile, {}) || {}; f.photo = true; store.set("fav:" + el.dataset.favfile, f); toast("Favorite saved ⭐"); rerender(route); }
      catch { toast("Couldn't save that photo"); }
    }
    if (el.dataset.tkfile && el.files[0]) {
      toast("Saving ticket…");
      try { await idb.set("tk:" + el.dataset.tkfile, await shrinkImage(el.files[0], 2200, 0.92)); const list = tickets(); const tk = list.find(x => x.id === el.dataset.tkfile); if (tk) tk.photo = true; store.set("tickets", list); toast("Ticket saved 🎟️"); renderTrip("tickets"); }
      catch { toast("Couldn't save that image"); }
    }
    if (el.dataset.restore !== undefined && el.files[0]) {
      try { const data = JSON.parse(await el.files[0].text()); let n = 0; for (const [k, v] of Object.entries(data)) if (k.startsWith("ij:")) { localStorage.setItem(k, v); n++; } toast(`Restored ${n} items ♻️`); applySafe(); route(); }
      catch { toast("That file isn't a valid backup"); }
    }
  });
  document.getElementById("safeBtn")?.addEventListener("click", () => { store.set("safe", !isSafe()); applySafe(); toast(isSafe() ? "Family-friendly mode on 😇" : "Family-friendly mode off 🔥"); rerender(route); });

  /* ---------- Boot ---------- */
  applySafe();
  const setTopH = () => document.documentElement.style.setProperty("--top-h", ($(".top")?.offsetHeight || 130) + "px");
  setTopH(); window.addEventListener("resize", setTopH);
  tickClock(); setInterval(tickClock, 30e3);
  route();
  // refresh "up next" every 5 minutes on the day view
  setInterval(() => { if (/^#?(day\/|today|$)/.test(location.hash.replace("#", "")) && !document.activeElement?.matches("textarea,input")) { const y = scrollY; route(); scrollTo(0, y); } }, 5 * 60e3);

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
