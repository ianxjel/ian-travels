# Ian's Travels ✈️

Pocket guides for every trip — a homepage of passport "stamps", one per country, each opening a phone-first guide with
step-by-step days, photo spots, snack stops, phrases (yes, including flirting 💋), manners and hotel taxi cards.

**Live:** https://ianxjel.github.io/ian-travels/

| Trip | Guide |
|---|---|
| 🇯🇵 Japan · Oct 26 – Nov 5, 2026 | [`/japan/`](japan/) |

## Add a new country
1. Copy `japan/` to a new folder (e.g. `mexico/`) and rewrite its `data.js` (days, phrases, manners, hotels, SOS).
   Update the brand text in that folder's `index.html` and the `VERSION` in its `sw.js`.
2. Add an entry to `trips.js` with the folder, flag, dates, cities and a cover gradient.
3. Commit + push. GitHub Pages serves it from `main`.

No build step — plain HTML, CSS and JS.
