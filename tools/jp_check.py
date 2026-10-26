"""Reading check: MeCab (fugashi + UniDic) reads every Japanese line independently,
converts it to romaji, and compares it with the romaji shown on the site."""
import json, re, sys
from fugashi import Tagger

items = json.load(open(sys.argv[1], encoding="utf-8"))
over = {k: v for k, v in json.load(open(sys.argv[2], encoding="utf-8")).items() if not k.startswith("_")}
KEYS = sorted(over, key=len, reverse=True)
STRIP_LATIN = ["ATM", "JR", "LINE"]
tagger = Tagger()

H = {'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
 'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
 'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'wo','ん':'n',
 'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
 'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ゔ':'vu'}
SMALL_Y = {'ゃ':'a','ゅ':'u','ょ':'o'}
def hira(s): return ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in s)
def romaji(s):
    s = hira(s); out = ''; i = 0; gem = False
    while i < len(s):
        c = s[i]; nxt = s[i + 1] if i + 1 < len(s) else ''
        if c == 'っ': gem = True; i += 1; continue
        if c == 'ー':
            v = re.findall(r'[aiueo]', out); out += v[-1] if v else ''; i += 1; continue
        if c in H:
            r = H[c]
            if nxt in SMALL_Y:
                r = ({'し':'sh','ち':'ch','じ':'j'}.get(c) or (r[:-1] + 'y')) + SMALL_Y[nxt]; i += 1
            elif nxt and nxt in 'ぁぃぅぇぉ':
                r = r[:-1] + H[nxt]; i += 1
            if gem: r = ('t' if r.startswith('ch') else r[0]) + r; gem = False
            out += r
        else: out += ' '
        i += 1
    return out
def norm(r):
    r = r.lower()
    for a, b in [('ā','a'),('ī','i'),('ū','u'),('ē','e'),('ō','o')]: r = r.replace(a, b)
    r = re.sub(r'[^a-z]', '', r).replace('wo', 'o').replace('ha', 'wa').replace('he', 'e')
    for _ in range(3):
        for a, b in [('ou','o'),('oo','o'),('uu','u'),('aa','a'),('ii','i'),('ee','e')]: r = r.replace(a, b)
    return r
def reading(text):
    for k in KEYS: text = text.replace(k, over[k])
    parts = []
    for w in tagger(text):
        f = w.feature
        p = getattr(f, 'pron', None)
        if not p or p == '*': p = getattr(f, 'kana', None)
        if not p or p == '*': p = w.surface
        parts.append(p)
    return ''.join(parts)

bad = []; n = 0
for it in items:
    if not it.get('ro'): continue
    jp = it['jp'].replace('〇〇', '')
    ro = it['ro'].replace('___', '')
    for w in STRIP_LATIN: jp = jp.replace(w, ''); ro = ro.replace(w, '')
    kana = reading(jp)
    n += 1
    if re.search(r'[一-鿿]', kana) or norm(romaji(kana)) != norm(ro):
        bad.append((it, kana, romaji(kana).strip()))

md = f"## 1. Reading check (MeCab + UniDic)\n\nMeCab read {n} Japanese lines on its own and compared them with the site's romaji.\n\n"
if not bad: md += "All readings match.\n\n"
else:
    md += f"{len(bad)} line(s) to review — MeCab's reading differs from the site's romaji:\n\n| Where | Japanese | Site romaji | MeCab reading |\n|---|---|---|---|\n"
    for it, kana, r in bad:
        md += f"| {it['id']} | {it['jp']} | {it['ro']} | {kana} ({r}) |\n"
    md += "\n"
md += f"RESULT: {'PASS' if not bad else 'FAIL'}\n"
print(md)
