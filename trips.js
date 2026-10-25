/* Ian's Travels — one entry per country guide.
   To add a country: copy a trip folder (e.g. japan/) to a new folder, edit its data.js,
   then add an entry here. Dates are YYYY-MM-DD. */
const TRIPS = [
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
