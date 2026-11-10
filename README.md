# Ian's Travels ✈️

Pocket guides for every trip — a homepage of passport "stamps", one per country, each opening a phone-first guide with
step-by-step days, photo spots, snack stops, phrases (yes, including flirting 💋), manners and hotel taxi cards.

**Live:** https://ianxjel.github.io/ian-travels/

| Trip | Guide |
|---|---|
| 🇯🇵 Japan · Oct 26 – Nov 5, 2026 | [`/japan/`](japan/) |
| 🇪🇺 Berlin → Amsterdam → London (Pokémon EUIC) · ~Feb 12 – 21, 2027 · ✏️ *in planning* | [`/europe/`](europe/) (draft plan) |
| 🇺🇸 Denver + Red Rocks (Porter Robinson b2b Ninajirachi) · ~Mar 24 – 28, 2027 · ✏️ *in planning* | [`/colorado/`](colorado/) (draft plan) |

## Trips in planning
A trip that isn't booked yet gets `status: "planning"` in `trips.js`. It shows in its own "In planning" section on the
homepage with dashed edges and "(tentative)" dates, and it doesn't count toward the passport stats. Its folder holds a
simple plan page until the route is set. Once it's booked, build the full guide (steps below) and delete the `status` line.

## Add a new country
1. Copy `japan/` to a new folder (e.g. `mexico/`) and rewrite its `data.js` (days, phrases, manners, hotels, SOS).
   Update the brand text in that folder's `index.html` and the `VERSION` in its `sw.js`.
2. Add an entry to `trips.js` with the folder, flag, dates, cities and a cover gradient. For a trip inside one
   country (like a US state), add `nation` so the passport "Countries" stat counts the country, not the state.
3. Commit + push. GitHub Pages serves it from `main`.

No build step — plain HTML, CSS and JS.
