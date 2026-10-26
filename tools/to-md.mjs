// One Japanese line per paragraph so textlint checks each phrase on its own
import fs from "node:fs";
const items = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const seen = new Set();
const lines = [];
for (const it of items) {
  const t = it.jp.replace(/〇〇/g, "○○").trim();
  if (!t || seen.has(t)) continue;
  seen.add(t); lines.push(t);
}
fs.writeFileSync("jp-lines.map.json", JSON.stringify(lines));
process.stdout.write(lines.join("\n\n") + "\n");
