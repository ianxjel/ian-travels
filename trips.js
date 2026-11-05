/* Ian's Travels — one entry per country guide.
   To add a country: copy a trip folder (e.g. japan/) to a new folder, edit its data.js,
   then add an entry here. Dates are YYYY-MM-DD.
   status: "planning" = not booked yet. It shows under "In planning" on the homepage,
   doesn't count toward the passport stats, and its dates are shown as tentative.
   Remove the status line once flights + hotels are booked to turn it into a real stamp. */
const TRIPS = [
  {
    slug: "europe/",
    status: "planning",
    country: "Europe",
    local: "→ London",
    flag: "🇪🇺",
    title: "Pokémon EUIC trip",
    start: "2027-02-13",
    end: "2027-02-21",
    cities: ["Route TBD", "London 🏆"],
    vibes: ["⚡ Pokémon EUIC", "🇬🇧 London finale", "🗺️ 9 days", "✏️ Route TBD"],
    cover: "linear-gradient(150deg, #3d7bff 0%, #1d2a8f 48%, #c8102e 100%)",
    emoji: ["⚡", "🏆", "💂", "🎡"],
  },
  {
    slug: "japan/",
    country: "Japan",
    local: "日本",
    flag: "🇯🇵",
    title: "25th birthday trip",
    start: "2026-10-26",
    end: "2026-11-05",
    cities: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Mt Fuji"],
    vibes: ["🎂 DisneySea birthday", "⚡ Pokémon", "🏳️‍🌈 Ni-chome", "🗻 Fuji sunrise"],
    cover: "linear-gradient(150deg, #ff4f9a 0%, #b0207a 40%, #3a0f4f 100%)",
    emoji: ["🗻", "⛩️", "🍣", "🌸"],
  },
];
