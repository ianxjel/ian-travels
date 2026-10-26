// Pulls every Japanese string (with its romaji + English) out of a trip's data.js
import fs from "node:fs";
const file = process.argv[2] || "japan/data.js";
const src = fs.readFileSync(file, "utf8");
const X = new Function(src + `;return {DAYS, PHRASES, FOODS, FOOD_ORDERING, HEAR, ASK_HELP};`)();
const out = [];
X.PHRASES.forEach(p => out.push({ id: "phrase:" + p.id, jp: p.jp, ro: p.ro, en: p.en }));
X.DAYS.forEach(d => d.steps.forEach((s, i) => (s.ask || []).forEach((a, j) => out.push({ id: `ask:${d.id}-${i}.${j}`, jp: a.jp, ro: a.ro, en: a.en }))));
X.FOODS.forEach(f => { out.push({ id: "food:" + f.id, jp: f.jp, ro: f.ro, en: f.en }); out.push({ id: "order:" + f.id, jp: f.order.jp, ro: f.order.ro, en: f.order.en }); });
X.FOOD_ORDERING.forEach((o, i) => out.push({ id: "ordering:" + i, jp: o.jp, ro: o.ro, en: o.en }));
Object.entries(X.HEAR).forEach(([k, v]) => v.forEach((t, i) => out.push({ id: `tile:${k}${i}`, jp: t[1], ro: t[2], en: t[3] })));
out.push({ id: "askhelp", jp: X.ASK_HELP.jp, ro: X.ASK_HELP.ro, en: X.ASK_HELP.en });
out.push({ id: "askhelp-write", jp: X.ASK_HELP.writeJp, ro: "", en: X.ASK_HELP.writeEn });
process.stdout.write(JSON.stringify(out, null, 1));
