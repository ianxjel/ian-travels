// Turns textlint's JSON into a readable report
import fs from "node:fs";
let res = [];
try { res = JSON.parse(fs.readFileSync(process.argv[2], "utf8") || "[]"); } catch { res = []; }
const lines = JSON.parse(fs.readFileSync("jp-lines.map.json", "utf8"));
const msgs = res.flatMap(r => r.messages || []);
const ok = msgs.length === 0;
let md = `## 2. Style + typo check (textlint, Japanese rule set)\n\nChecked ${lines.length} unique Japanese lines.\n\n`;
if (ok) md += "No problems found.\n\n";
else {
  md += `| Line | Rule | Message |\n|---|---|---|\n`;
  for (const m of msgs) {
    const text = lines[Math.floor((m.line - 1) / 2)] || "?";
    md += `| ${text} | ${m.ruleId} | ${String(m.message).replace(/\|/g, "/").replace(/\n/g, " ")} |\n`;
  }
  md += "\n";
}
md += `RESULT: ${ok ? "PASS" : "FAIL"}\n`;
process.stdout.write(md);
