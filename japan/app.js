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
    $("#clock").innerHTML = `<b>${t}</b> 🇯🇵<br>${sub}`;
  }

  /* ---------- Day strip ---------- */
  function renderStrip(activeId) {
    const strip = $("#dayStrip");
    strip.innerHTML = DAYS.map((d, i) => {
      const [, mo, dd] = d.date.split("-");
      return `<a class="day-chip ${d.id === activeId ? "active" : ""} ${isToday(d) ? "today" : ""}" href="#day/${d.id}" aria-label="Day ${i + 1}: ${esc(d.title)}">
        <span class="e">${d.emoji}</span><span>${d.dow}</span><span class="d">${Number(mo)}/${Number(dd)}</span></a>`;
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
    };
    if (cached && Date.now() - cached.at < 3 * 3600e3) { paint(cached.w); return; }
    try {
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${day.wx.lat}&longitude=${day.wx.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunset&temperature_unit=fahrenheit&timezone=Asia%2FTokyo&start_date=${day.date}&end_date=${day.date}`;
      const r = await fetch(u);
      if (!r.ok) throw 0;
      const j = await r.json();
      const w = { code: j.daily.weather_code[0], hi: j.daily.temperature_2m_max[0], lo: j.daily.temperature_2m_min[0], rain: j.daily.precipitation_probability_max[0], sunset: (j.daily.sunset[0] || "").slice(11, 16) };
      store.set(key, { at: Date.now(), w });
      if ($("#wx") === el) paint(w);
    } catch {
      if (cached) paint(cached.w); else el.remove();
    }
  }

  /* ---------- Day view ---------- */
  function dayVariant(day) { return store.get("variant:" + day.id, "a"); }

  function visibleSteps(day) {
    const v = dayVariant(day);
    return day.steps.map((s, i) => ({ ...s, key: `${day.id}-${i}` })).filter(s => !s.only || s.only === v);
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
    const day = DAYS[idx];
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
          ${h ? `<a class="pill" href="#hotels">${h.emoji} Sleep: ${esc(h.name)}</a>` : `<span class="pill">✈️ Sleep: on the plane</span>`}
        </div>
      </section>`;

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
      if (s.spicy) mini.push(`<div class="mini spicy"><span class="ico">🔥</span><div><b>After dark</b>${esc(s.spicy)}</div></div>`);
      if (mini.length) html += `<div class="between">${mini.join("")}</div>`;
    });
    html += `</div>`;

    // phrases for the day
    const pids = [...new Set([...steps.flatMap(x => x.say || []), ...(day.phrases || [])])];
    const ps = pids.map(pid => PHRASES.find(p => p.id === pid)).filter(Boolean);
    if (ps.length) {
      html += `<details class="card cheat"><summary>🗣️ All of today's phrases (${ps.length})</summary><div class="cheat-body">${ps.map(phraseCard).join("")}</div></details>`;
    }

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
    const ps = (s.say || []).map(id => PHRASES.find(p => p.id === id)).filter(Boolean);
    if (!ps.length) return "";
    return `<div class="say-here"><div class="say-h">🗣️ Say it here</div>${ps.map(p => `
      <div class="say-chip">
        <div class="sc-txt"><span class="sc-jp jp">${esc(p.jp)}</span><span class="sc-ro">${esc(p.ro)}</span><span class="sc-en">${esc(p.en)}</span></div>
        <button class="icon-btn sm" data-speak="${esc(p.jp)}" aria-label="Play">🔊</button>
        <button class="icon-btn sm" data-show="${p.id}" aria-label="Show big">⤢</button>
      </div>`).join("")}</div>`;
  }
  function photoLink(s) {
    const q = s.pic || (s.photo && s.place ? s.place + " photo ideas" : "");
    return q ? `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}` : "";
  }
  function recipeTag(id) {
    const r = (typeof RECIPES !== "undefined" ? RECIPES : []).find(x => x.id === id);
    return r ? `<a class="rx-tag" href="#recipes/${r.id}">🎞️ X100VI: <b>${r.slot} · ${esc(r.name)}</b> (${esc(r.sim)})</a>` : "";
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

  /* ---------- Recipes ---------- */
  function renderRecipes(focus) {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const uses = {};
    DAYS.forEach((d, di) => d.steps.forEach(s => { if (s.rx) (uses[s.rx] = uses[s.rx] || []).push({ d, di, s }); }));
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>X100VI recipes 🎞️</h2><span class="sub">C1–C7</span></div>
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
    const cats = ["All", ...new Set(PHRASES.map(p => p.cat))];
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
    const list = PHRASES.filter(p => (phraseCat === "All" || p.cat === phraseCat) &&
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
      ${MANNERS.map((m, i) => `<details class="card manner" ${i === 0 ? "open" : ""}>
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
  function renderHotels() {
    document.body.dataset.theme = DAYS[todayDayIndex()].theme;
    renderStrip(null);
    const tk = tonightKey();
    const fuji = store.get("fujiHotel", {}) || {};
    view.innerHTML = `
      <div class="section-title" style="margin-top:6px"><h2>Hotels + taxi cards</h2><span class="sub">🚕 = show driver</span></div>
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
        <b>Bringing someone back?</b> Your Tokyo room is booked for 1 — register a visitor at the desk. Osaka is booked for 2.
        Check-in is usually 3 PM, checkout 10–11 AM, and every hotel holds bags for free.
      </div>`;
  }

  /* ---------- SOS ---------- */
  function renderSOS(append) {
    if (!append) { document.body.dataset.theme = DAYS[todayDayIndex()].theme; renderStrip(null); }
    const em = PHRASES.filter(p => p.cat === "Emergency");
    const sosHtml = `
      <div class="section-title" id="sos" style="margin-top:${append ? 30 : 6}px"><h2>Help + emergencies 🆘</h2><span class="sub">tap to call</span></div>
      ${SOS.map(s => `<a class="card sos" href="tel:${s.num.replace(/[^0-9+]/g, "")}">
        <div><div class="lbl">${esc(s.label)}</div><div class="num">${esc(s.num)}</div><div class="nt">${esc(s.note)}</div></div>
        <span class="call">📞</span></a>`).join("")}
      <div class="card tip" style="margin-top:14px">
        <b>Lost?</b> Look for a kōban (police box) — they give directions all day. <b>Lost passport?</b> Report it at a kōban for a police report, then call the US Embassy.
        Keep a photo of your passport page on your phone.
      </div>
      <div class="section-title"><h2>Emergency phrases</h2></div>
      ${em.map(phraseCard).join("")}`;
    if (append) view.insertAdjacentHTML("beforeend", sosHtml); else view.innerHTML = sosHtml;
  }

  /* ---------- Router ---------- */
  function setTab(tab) { $$(".tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === tab)); }
  function route() {
    const h = location.hash.replace(/^#/, "") || "today";
    $("#nowBtn").hidden = true;
    $$(".confetti").forEach(c => c.remove());
    if (h.startsWith("day/")) { renderDay(h.slice(4)); setTab("today"); }
    else if (h === "food") { renderFood(); setTab("food"); }
    else if (h.startsWith("recipes")) { renderRecipes(h.split("/")[1]); setTab("recipes"); if (h.includes("/")) return; }
    else if (h === "help" || h === "hotels") { renderHotels(); renderSOS(true); setTab("help"); }
    else if (h === "phrases") { renderPhrases(); setTab("phrases"); }
    else if (h === "manners") { renderManners(); setTab("manners"); }
    else if (h === "sos") { renderHotels(); renderSOS(true); setTab("help"); setTimeout(() => $("#sos")?.scrollIntoView(), 30); return; }
    else { renderDay(DAYS[todayDayIndex()].id); setTab("today"); }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  const currentDayId = () => (location.hash.match(/^#day\/(\w+)/) || [])[1] || DAYS[todayDayIndex()].id;

  /* ---------- Delegated events ---------- */
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-speak],[data-show],[data-showtxt],[data-done],[data-variant],[data-taxi],[data-copy],[data-cat],[data-savefuji],[data-flyto],[data-step],[data-area],[data-locate],[data-fitall],[data-goto]");
    if (!t) return;
    if (t.dataset.speak !== undefined) { e.stopPropagation(); speak(t.dataset.speak, t); return; }
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
      toast("Fuji hotel saved 🗻"); renderHotels();
    }
  });
  document.addEventListener("input", e => {
    const n = e.target.closest("[data-notes]");
    if (n) store.set("notes:" + n.dataset.notes, n.value);
  });

  /* ---------- Boot ---------- */
  tickClock(); setInterval(tickClock, 30e3);
  route();
  // refresh "up next" every 5 minutes on the day view
  setInterval(() => { if (/^#?(day\/|today|$)/.test(location.hash.replace("#", "")) && !document.activeElement?.matches("textarea,input")) { const y = scrollY; route(); scrollTo(0, y); } }, 5 * 60e3);

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
