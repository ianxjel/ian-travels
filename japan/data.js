/* =========================================================
   Ian's Japan 2026 — trip data
   Edit this file to change the plan. Times are Japan time (JST).
   Step fields:
     t      "HH:MM" (24h, JST)
     title  what you're doing
     place  destination text for Google Maps directions (optional)
     how    numbered directions (array)
     tip    one extra heads-up (optional)
     photo  📸 shot to look for on the way to the NEXT step (optional)
     snack  🍙 food to grab on the way (optional)
     spicy  🔥 nightlife notes (optional)
     only   "a" or "b" when the day has two plans
   ========================================================= */

const HOTELS = {
  shinjuku: {
    name: "APA Hotel Shinjuku Gyoemmae",
    jp: "アパホテル〈新宿御苑前〉",
    addr: "東京都新宿区新宿2-2-8",
    addrEn: "2-2-8 Shinjuku, Shinjuku-ku, Tokyo",
    near: "新宿御苑前駅 1番出口 徒歩1分",
    nearEn: "1 min from Shinjuku-gyoemmae Stn (Marunouchi line) exit 1 · 3 min from Shinjuku-sanchome exit C5",
    dates: "Mon Oct 26 → Sun Nov 1 · 6 nights",
    maps: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
    emoji: "🌃",
  },
  kyoto: {
    name: "Hotel Hokke Club Kyoto",
    jp: "ホテル法華クラブ京都",
    addr: "京都府京都市下京区塩小路通室町東入ル東塩小路町579-16",
    addrEn: "579-16 Higashishiokoji-cho, Shimogyo-ku, Kyoto",
    near: "JR京都駅 烏丸中央口 徒歩1分",
    nearEn: "Directly across from Kyoto Station's Karasuma Central Gate (north side)",
    dates: "Sun Nov 1 → Mon Nov 2 · 1 night",
    maps: "Hotel Hokke Club Kyoto",
    emoji: "⛩️",
  },
  osaka: {
    name: "APA Hotel & Resort Osaka Umeda Eki Tower",
    jp: "アパホテル&リゾート〈大阪梅田駅タワー〉",
    addr: "大阪府大阪市北区曽根崎2-8-32",
    addrEn: "2-8-32 Sonezaki, Kita-ku, Osaka",
    near: "東梅田駅 4番出口 徒歩3分",
    nearEn: "3 min from Higashi-Umeda Stn (Tanimachi line) exit 4 · 8 min from JR Osaka Midosuji South Exit",
    dates: "Mon Nov 2 → Wed Nov 4 · 2 nights",
    maps: "APA Hotel & Resort Osaka Umeda Eki Tower",
    emoji: "🐙",
  },
  fuji: {
    name: "Mt Fuji hotel",
    jp: "",
    addr: "",
    addrEn: "Tap “Edit” to add your Fuji hotel once it's booked",
    near: "",
    nearEn: "",
    dates: "Wed Nov 4 → Thu Nov 5 · 1 night",
    maps: "Kawaguchiko Station",
    emoji: "🗻",
    editable: true,
  },
};

const DAYS = [
  /* ---------------- DAY 1 ---------------- */
  {
    id: "d1", date: "2026-10-26", dow: "Mon", title: "Land in Tokyo", city: "Tokyo",
    theme: "neon", emoji: "🌃", deco: ["✈️", "🏮", "🌃", "✨", "🍢"],
    kicker: "Day 1 · Welcome to Japan",
    tagline: "Neon, yakitori smoke, and your first night in Ni-chome. Ease in, babe.",
    sleep: "shinjuku", wx: { lat: 35.69, lon: 139.71 },
    phrases: ["konnichiwa", "sumimasen", "arigatou", "kore", "hitori", "tonari", "namae"],
    steps: [
      {
        t: "15:30", title: "Land at Haneda (HND)", place: "Haneda Airport Terminal 3",
        how: [
          "Phone off airplane mode and data roaming on. Set the clock to Japan time (13 h ahead of Orlando).",
          "Follow the yellow “Arrivals” signs to Immigration. Have your Visit Japan Web QR code open.",
          "Baggage claim, then Customs: scan the second QR code at the kiosk and walk through the e-gate.",
          "Out into the arrivals hall (2F).",
        ],
        tip: "Immigration + bags usually takes 45–60 minutes. Use the bathroom on the plane before landing.",
      },
      {
        t: "16:30", title: "Cash + Suica check", place: "Haneda Airport Terminal 3",
        how: [
          "Find the 7-Eleven (Seven Bank) ATM in the arrivals area and pull ¥20,000–30,000. Choose “decline conversion” so your bank does the exchange.",
          "Open Apple Wallet and make sure Suica is set as Express Transit.",
        ],
        snack: "Your first vending machine moment: blue price tags are cold, red are hot. Try Pocari Sweat (rehydrate after the flight) or a hot can of Royal Milk Tea.",
      },
      {
        t: "17:00", title: "Train to Shinjuku", place: "Shinjuku Station East Exit",
        how: [
          "Follow the red “Keikyu Line” signs and tap Suica at the gate.",
          "Board any train whose sign says 品川 Shinagawa (Airport Limited Express is fastest, ~15 min).",
          "At Shinagawa, follow the green “JR Yamanote Line” signs to the platform for Shibuya / Shinjuku (~20 min).",
          "At Shinjuku, exit via the Central East Exit (中央東口).",
          "Walk ~10 min east along Shinjuku-dori past Isetan, or grab a taxi at the East Exit rank (~¥1,000).",
        ],
        tip: "Too tired for transfers with a suitcase? The Airport Limousine Bus goes straight to Busta Shinjuku (~1 h; buy at the counter in arrivals).",
        photo: "Right outside the East Exit: the giant 3D cat billboard on Cross Shinjuku Vision. Film 10 seconds, not a still — it moves, and it pops up every few minutes between ads.",
      },
      {
        t: "18:30", title: "Check in at APA Shinjuku Gyoemmae", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Hand over your passport at the front desk (they'll scan it).",
          "APA rooms are tiny: open the suitcase on the bed or stand it upright by the door.",
          "Shower, change, and plug the phone in for 20 min.",
        ],
        tip: "If you bring someone back later, register them at the desk — the room is booked for 1.",
      },
      {
        t: "19:30", title: "Yakitori in Omoide Yokocho", place: "Omoide Yokocho, Shinjuku",
        how: [
          "Walk 1 min to Shinjuku-gyoemmae Station and take the Marunouchi line (red) 2 stops to Shinjuku.",
          "Follow signs for the West Exit (西口); the alley is just north of the exit, along the tracks.",
          "Pick a stall with an empty stool and say “Hitori desu” (just one).",
        ],
        snack: "Order by pointing: negima (chicken + leek), tsukune (meatball), kawa (crispy skin). Say “tare” for the sweet glaze or “shio” for salt. A small seat charge (otōshi) with a mini appetizer is normal.",
        photo: "Walk toward the camera mid-alley glancing up at the lanterns, vertical, Night mode. Ask before shooting inside a stall.",
      },
      {
        t: "21:30", title: "Easy Ni-chome intro", place: "Aiiro Cafe, Shinjuku 2-chome",
        how: [
          "Head back east: Marunouchi line to Shinjuku-sanchome, or just walk ~15 min. Ni-chome is literally around your hotel.",
          "Aiiro Cafe is the open-air corner bar on Naka-dori — grab a drink and people-watch.",
          "Then Eagle Tokyo for an easy, English-friendly vibe.",
        ],
        spicy: "Mondays are quiet — perfect for scouting. Think of tonight as reconnaissance 👀. Cover is usually ¥1,000–2,000 with a drink; Eagle is cashless, smaller bars want cash.",
        snack: "Before bed: FamilyMart Famichiki (juicy fried chicken) or a 7-Eleven egg sando, plus a big water. Jet-lag insurance.",
      },
    ],
  },

  /* ---------------- DAY 2 ---------------- */
  {
    id: "d2", date: "2026-10-27", dow: "Tue", title: "Your 25th birthday at DisneySea", city: "Tokyo DisneySea",
    theme: "disney", emoji: "🎂", deco: ["🎂", "✨", "🏰", "🎈", "🌊", "⭐"],
    kicker: "Day 2 · Happy 25th, Ian!",
    tagline: "The whole harbor is celebrating you today. Ears on, sticker on, main character energy on.",
    sleep: "shinjuku", wx: { lat: 35.627, lon: 139.885 }, confetti: true,
    phrases: ["tanjoubi", "sticker", "photoplease", "oishii", "kanpai", "taipu", "ogoru"],
    steps: [
      {
        t: "06:45", title: "Fuel up + costume on", place: "",
        how: [
          "Costume on (Halloween costumes are allowed at the parks through Oct 31 — no full face masks or anything that drags on the ground).",
          "Open the Tokyo Disney Resort app: ticket linked, battery at 100%, power bank packed.",
        ],
        snack: "Konbini breakfast on the way: an onigiri (pull tab 1 → 2 → 3 to unwrap the seaweed without tearing) and a tamago sando.",
      },
      {
        t: "07:00", title: "Shinjuku → DisneySea", place: "Tokyo DisneySea Station",
        how: [
          "Walk 1 min to Shinjuku-gyoemmae Station. Marunouchi line (red) direct to Tokyo (~20 min, no transfer).",
          "At Tokyo Station, follow the red/pink “Keiyo Line” signs. It's a long 10–15 min underground walk with moving walkways — keep going.",
          "Take any Keiyo line train toward Soga / Kaihin-Makuhari to Maihama (~15 min).",
          "Exit South, walk to Resort Gateway Station and ride the Disney Resort Line monorail to Tokyo DisneySea Station (~10 min). Suica works.",
        ],
        photo: "The Disney Resort Line monorail has Mickey-shaped windows and hand straps — get a close-up with the bay behind.",
      },
      {
        t: "08:30", title: "At the gate → Frozen Premier Access", place: "Tokyo DisneySea",
        how: [
          "Scan in, then immediately buy Premier Access for Anna and Elsa's Frozen Journey in the app.",
          "Ask any cast member for a birthday sticker: “Tanjōbi shīru, onegai shimasu.” Write your name on it — you'll get “Happy birthday!” all day.",
        ],
      },
      {
        t: "09:30", title: "Fantasy Springs + the big rides", place: "Fantasy Springs, Tokyo DisneySea",
        how: [
          "Fantasy Springs on standby: Rapunzel's Lantern Festival, Peter Pan's Never Land Adventure.",
          "Then the classics: Journey to the Center of the Earth (Mysterious Island), Tower of Terror, Soaring: Fantastic Flight.",
          "Check the app for the 25th-anniversary harbor show times.",
        ],
        snack: "Park snacks to hunt: the Gyoza Dog at Nautilus Galley (Mysterious Island), the float-ring shaped Ukiwaman shrimp bun at Seaside Snacks (Port Discovery), and a popcorn bucket — every cart has a different flavor, so check the app map.",
        photo: "Halloween decor + the volcano behind you. Full-body costume shot from waist height (have them crouch a little).",
      },
      {
        t: "17:15", title: "Blue hour at Mediterranean Harbor", place: "Mediterranean Harbor, Tokyo DisneySea",
        how: [
          "Grab a railing spot along the harbor ~10 min before sunset (~4:50 PM); blue hour is the 20 minutes after.",
          "Stay for the night show and ride until the 9 PM close.",
        ],
        photo: "THE birthday shot: lean on the railing, body angled, look back at the camera with Mount Prometheus across the water. Birthday sticker + ears in frame. Shoot RAW + JPEG on the X100VI.",
      },
      {
        t: "21:00", title: "Back to Shinjuku", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Monorail to Resort Gateway → Keiyo line to Tokyo → long walk → Marunouchi line to Shinjuku-gyoemmae (~1 h total).",
          "Quick costume change at the hotel.",
        ],
        snack: "Hungry? Ichiran Shinjuku (solo-booth tonkotsu ramen, open 24 h) is a 10-min walk. Fill in the order sheet, press the button, ramen appears.",
      },
      {
        t: "22:30", title: "Birthday drinks in Ni-chome 🎉", place: "Eagle Tokyo, Shinjuku 2-chome",
        how: [
          "Start at Eagle Tokyo, then Bear Tokyo or KING TOKYO (go-gos + DJs).",
          "Tell the bartender: “Kyō wa tanjōbi desu!” — then “Kanpai!”",
          "Missed the last train? You're already home. 😌",
        ],
        spicy: "Birthday boy rules: free pass to flirt shamelessly 😏 — the birthday line is the best icebreaker you'll get all trip. Watch your drink, and never accept a drink you didn't see poured.",
      },
    ],
  },

  /* ---------------- DAY 3 ---------------- */
  {
    id: "d3", date: "2026-10-28", dow: "Wed", title: "PokéPark Kanto", city: "Tokyo",
    theme: "poke", emoji: "⚡", deco: ["⚡", "🎒", "🌿", "🔴", "⭐", "🧢"],
    kicker: "Day 3 · Trainer mode",
    tagline: "Field notebook out, plush on your shoulder. Today you're a Pokémon Trainer, full stop.",
    sleep: "shinjuku", wx: { lat: 35.625, lon: 139.518 },
    phrases: ["photoplease", "kore", "card", "toire", "sumimasen"],
    variants: {
      q: "Did you get PokéPark tickets?",
      a: "Yes — PokéPark! ⚡",
      b: "No — teamLab + Odaiba 🌈",
    },
    steps: [
      {
        only: "a", t: "09:30", title: "Shinjuku → Keio-Yomiuriland", place: "Keio-yomiuriland Station",
        how: [
          "Walk ~10 min to Shinjuku Station and follow the “Keio Line” signs (west side).",
          "Board a train bound for 橋本 Hashimoto. If yours goes to Takaosanguchi or Hachiōji instead, change at Chōfu to a Hashimoto train.",
          "Get off at Keio-Yomiuriland (~35 min total).",
          "Ride the Sky Shuttle gondola up to Yomiuriland.",
        ],
        snack: "PokéPark is cashless with long lines — buy breakfast and a drink at the station konbini before you board.",
        photo: "From the gondola: the whole park and the forest below. Quick video out the window.",
      },
      {
        only: "a", t: "10:30", title: "Through the gate, app open", place: "PokéPark Kanto, Yomiuriland",
        how: [
          "Join the PokéPark line at the Yomiuriland gate with the PokéPark KANTO app open and the ticket QR ready.",
          "Lockers are on the Yomiuriland side, not inside PokéPark — stash anything big now.",
        ],
      },
      {
        only: "a", t: "10:45", title: "Reservation race 🏁", place: "",
        how: [
          "The second it opens: Playhouse first.",
          "Then the Daisuki Shop.",
          "Then enter the Gym show lottery.",
        ],
        tip: "Tell staff it's your birthday week for a sticker — the window covers your whole trip.",
      },
      {
        only: "a", t: "12:00", title: "Pokémon Forest at your time slot", place: "",
        how: [
          "Head to the Forest at the time printed on your ticket.",
          "Bring your plush to the Pokémon Center counter so staff can “heal” it.",
        ],
        photo: "Ride the Rhyhorn (officially allowed), field notebook in hand, plush on your shoulder. No photos on the 110-step stairway or during the Gym show.",
        snack: "Eat in the park — cards only. Grab a themed snack early before lunch lines build.",
      },
      {
        only: "a", t: "19:00", title: "Park closes → back to Shinjuku", place: "Shinjuku Station",
        how: [
          "Gondola down, Keio line back toward Shinjuku (~35–45 min).",
          "Rest up — Disneyland tomorrow.",
        ],
        snack: "Dinner: Fuunji's tsukemen (dipping ramen) near Shinjuku South Exit. Buy a ticket at the machine by the door, hand it over, wait for your seat.",
      },

      /* ---- Plan B ---- */
      {
        only: "b", t: "09:30", title: "Shinjuku → teamLab Planets", place: "teamLab Planets TOKYO, Toyosu",
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Ginza, walk to Ginza-itchōme and take the Yūrakuchō line to Toyosu (or just follow Google Maps).",
          "Switch to the Yurikamome line 1 stop to Shin-Toyosu; teamLab is a 1-min walk.",
          "Book a time slot online first if you haven't.",
        ],
        tip: "You'll wade through knee-deep water: wear shorts or pants that roll up. White or light colors catch the projections best.",
        photo: "The mirror-floor rooms are the best mirror selfies of the whole trip. Stand still in the infinite light-crystal room and shoot wide.",
      },
      {
        only: "b", t: "12:30", title: "Odaiba: Unicorn Gundam", place: "DiverCity Tokyo Plaza, Odaiba",
        how: [
          "Yurikamome line from Shin-Toyosu to Daiba (~20 min). Sit in the front car — it's driverless, so you get the windshield view.",
          "The life-size Unicorn Gundam stands outside DiverCity Tokyo Plaza; it transforms at set times.",
        ],
        snack: "Lunch at the DiverCity food court (ramen, okonomiyaki, everything).",
        photo: "Shoot the Gundam from low with a 0.5x wide angle so it towers over you.",
      },
      {
        only: "b", t: "16:15", title: "Sunset at Odaiba Seaside Park", place: "Odaiba Seaside Park",
        how: [
          "Walk 10 min to the beach boardwalk. Sunset ~4:50 PM.",
          "Rainbow Bridge lights up just after.",
          "Yurikamome back to Shimbashi, then the Ginza/Marunouchi lines home.",
        ],
        photo: "Silhouette on the boardwalk with Rainbow Bridge + Tokyo Tower behind. Lean on the railing, profile view.",
        tip: "Prefer the coast? Swap the whole day for Kamakura + Enoshima on the Odakyu line from Shinjuku: the Great Buddha, the seaside Enoden train and the famous Kamakurakōkōmae crossing.",
      },
    ],
  },

  /* ---------------- DAY 4 ---------------- */
  {
    id: "d4", date: "2026-10-29", dow: "Thu", title: "Tokyo Disneyland Halloween", city: "Tokyo Disneyland",
    theme: "spooky", emoji: "🎃", deco: ["🎃", "🏰", "🦇", "👻", "🍬", "🕸️"],
    kicker: "Day 4 · Spooky season, castle edition",
    tagline: "Villains, pumpkins and a castle at blue hour. Wear the costume one more time — it's allowed.",
    sleep: "shinjuku", wx: { lat: 35.633, lon: 139.880 },
    phrases: ["sumimasen", "photoplease", "kore", "oishii", "arigatou"],
    steps: [
      {
        t: "07:00", title: "Shinjuku → Maihama", place: "Tokyo Disneyland",
        how: [
          "Same as Tuesday: Marunouchi line from Shinjuku-gyoemmae to Tokyo (~20 min).",
          "Long walk to the Keiyo line → Maihama (~15 min).",
          "Exit South. Disneyland's gate is a 5-min walk — no monorail needed today.",
        ],
        snack: "Konbini onigiri + a canned coffee (Boss or Georgia) for the walk.",
      },
      {
        t: "08:30", title: "Haunted Mansion “Holiday Nightmare” first", place: "Haunted Mansion, Tokyo Disneyland",
        how: [
          "Go straight to Haunted Mansion — it's the Nightmare Before Christmas overlay this season.",
          "Consider Premier Access for Enchanted Tale of Beauty and the Beast in the app.",
        ],
        photo: "Costume shot at the Haunted Mansion front gate: centered, slightly low angle, flash off for the moody look.",
      },
      {
        t: "13:00", title: "The Villains' Halloween parade", place: "Tokyo Disneyland Parade Route",
        how: [
          "Check the parade time in the app.",
          "Claim a spot 30–45 min early. Japanese parade etiquette: sit on the ground (bring a plastic sheet or a bag to sit on), don't stand up front, and keep bags low.",
        ],
        snack: "Halloween menus: look for seasonal items in the app (pumpkin and purple everything), a Mickey churro, and a themed popcorn bucket — it doubles as a birthday-week souvenir.",
      },
      {
        t: "17:00", title: "Cinderella Castle at blue hour", place: "Cinderella Castle, Tokyo Disneyland",
        how: [
          "Get to the hub in front of the castle by ~4:45 PM.",
          "Stay for the nighttime show / Electrical Parade (check the app).",
        ],
        photo: "Stand dead-center on the path with the castle behind you, arms out or mid-jump. Burst mode, and have them crouch so the castle looks taller.",
      },
      {
        t: "21:00", title: "Easy night", place: "Dragon Men, Shinjuku 2-chome",
        how: [
          "Train back the same way (~1 h).",
          "One drink at Dragon Men or Eagle Tokyo, or an early night. Three park days deserve a rest.",
        ],
        snack: "Late konbini run: Lawson's Karaage-kun (bite-size fried chicken) or a hot oden cup from the counter.",
      },
    ],
  },

  /* ---------------- DAY 5 ---------------- */
  {
    id: "d5", date: "2026-10-30", dow: "Fri", title: "Easy Tokyo day + the big night", city: "Tokyo",
    theme: "steamy", emoji: "💦", deco: ["💦", "🔥", "🍑", "🪩", "💋", "😈"],
    kicker: "Day 5 · Friday is for the boys",
    tagline: "Temples by day, Ni-chome by night. Hydrate, moisturize, and stay out till the trains restart.",
    sleep: "shinjuku", wx: { lat: 35.71, lon: 139.79 },
    phrases: ["hitori", "cover", "kanpai", "taipu", "kinniku", "hige", "odorou", "hotel", "kisu", "yametoku"],
    steps: [
      {
        t: "10:00", title: "Sleep in, then Asakusa", place: "Senso-ji, Asakusa",
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Akasaka-mitsuke (~8 min).",
          "Cross the platform to the Ginza line (orange) and ride to the end: Asakusa (~25 min).",
          "Exit 1 → Kaminarimon gate is right there.",
        ],
        snack: "Asakusa Kagetsudo's giant melon pan (crispy outside, fluffy inside), then ningyō-yaki and age-manjū on Nakamise street. Eat beside the stall — eating while walking is frowned on here.",
      },
      {
        t: "11:00", title: "Senso-ji + Nakamise", place: "Kaminarimon, Asakusa",
        how: [
          "Walk Nakamise street to the main hall.",
          "At the incense burner, waft a little smoke toward yourself for good health.",
          "Optional: rent a men's kimono nearby (~¥4,000 with dressing).",
        ],
        photo: "Under the giant red Kaminarimon lantern looking up, shot from low. From the temple grounds, line up the pagoda with Skytree behind it.",
      },
      {
        t: "13:30", title: "Skytree Town + Pokémon Center", place: "Tokyo Solamachi",
        how: [
          "Walk ~20 min across the Sumida River (Azuma-bashi bridge) or ride the Tobu Skytree line 1 stop to Tokyo Skytree.",
          "Pokémon Center Skytree Town is inside Tokyo Solamachi (4F).",
        ],
        photo: "From Azuma-bashi bridge: Skytree + the golden Asahi building across the river.",
      },
      {
        t: "15:00", title: "Omotesando mirror entrance (on the way)", place: "Tokyu Plaza Omotesando Omokado",
        how: [
          "From Oshiage (Skytree) take the Hanzōmon line straight to Omotesando (~30 min).",
          "Exit A2; Tokyu Plaza's kaleidoscope mirror escalator is on the corner.",
        ],
        photo: "Fit check: full-body shot in the mirror entrance from the bottom of the escalator. Then the free rooftop terrace upstairs.",
      },
      {
        t: "16:15", title: "Shibuya Sky at sunset", place: "Shibuya Sky",
        how: [
          "Hanzōmon line 1 stop to Shibuya, follow signs to Shibuya Scramble Square.",
          "Ticket counter on 14F; the rooftop is 46F. Sunset ~4:50 PM.",
          "Bags, hats and selfie sticks go in the ¥100 lockers; phones are fine.",
        ],
        photo: "Sky Edge glass corner at sunset as a silhouette (queue early). Lie in the Cloud Hammock looking up. Shoot straight down onto the crossing.",
        snack: "Dinner: Uobei Shibuya Dōgenzaka — order sushi on a touchscreen and it zooms to you on a little bullet-train track. Cheap and fun.",
      },
      {
        t: "19:00", title: "Back to the hotel to glow up", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Fukutoshin line Shibuya → Shinjuku-sanchome (~10 min, no transfer).",
          "Nap 30 min. Shower. Outfit on.",
        ],
        photo: "Fit check in the hotel mirror before you go out — the photo-dump opener.",
      },
      {
        t: "22:00", title: "Golden Gai pre-game", place: "Shinjuku Golden Gai",
        how: [
          "Walk ~12 min to Golden Gai (Kabukichō side).",
          "Many bars charge a cover and ban photos — pick one with an English sign out front.",
        ],
        photo: "Lantern alleys with direct flash ON (not Night mode) for the party-photo look. Shoot the alleys, never inside the bars.",
      },
      {
        t: "23:30", title: "The big night 🪩", place: "Eagle Tokyo Blue, Shinjuku 2-chome",
        how: [
          "Eagle Tokyo Blue or Bear Tokyo first (weekend DJs).",
          "After 1 AM: ArcH (SHOWER CANDY tonight) or AiSOTOPE Lounge (Akiba Night – Halloween).",
          "Clubs run till ~5 AM; trains restart around 5.",
        ],
        spicy: "Friday is the main event — the bear-and-muscle crowd is out in force at Eagle Blue. Bring ¥20,000+ cash for small bars, and if the night ends at 24 Kaikan, wear your locker key the way you mean it 😉. Stay out of any bar a Kabukichō tout steers you to. Poppers and cannabis are illegal in Japan — don't carry or accept any.",
        snack: "The 4 AM move: konbini onigiri + Pocari Sweat on the walk home. Your Saturday self will thank you.",
      },
    ],
  },

  /* ---------------- DAY 6 ---------------- */
  {
    id: "d6", date: "2026-10-31", dow: "Sat", title: "Pokémon Tokyo + Halloween", city: "Tokyo",
    theme: "ghost", emoji: "👻", deco: ["👻", "🎃", "⚡", "💜", "🍬", "🕯️"],
    kicker: "Day 6 · Ghost-type energy",
    tagline: "Merch haul by day, Pokémon Café dinner, then Ni-chome in costume until sunrise.",
    sleep: "shinjuku", wx: { lat: 35.69, lon: 139.71 },
    phrases: ["menzei", "fukuro", "card", "kore", "kanpai", "kakkoii", "line", "hima"],
    steps: [
      {
        t: "10:00", title: "Pokémon Center Mega Tokyo", place: "Pokemon Center Mega Tokyo, Sunshine City",
        how: [
          "Fukutoshin line (brown) from Shinjuku-sanchome to Ikebukuro (~10 min, no transfer).",
          "Take the East Exit and walk ~10 min down Sunshine 60 Street to Sunshine City.",
          "Pokémon Center Mega Tokyo + Pikachu Sweets are on Alpa 2F. Check the official site in the morning in case timed entry is required.",
        ],
        tip: "TODAY is the last day of tax-free at the register: bring your passport and do the big haul (¥5,000+ per store). From Nov 1 you'd have to claim refunds at Narita.",
        snack: "Pikachu Sweets by Pokémon Café — walk-up takeout treats, no reservation.",
        photo: "With the big statues at the entrance, plush in hand. Opening time = no crowds.",
      },
      {
        t: "13:00", title: "Shibuya: Mewtwo + Nintendo Tokyo", place: "Shibuya PARCO",
        how: [
          "Fukutoshin line from Ikebukuro straight to Shibuya (~15 min).",
          "Walk ~7 min to Shibuya PARCO; Pokémon Center Shibuya and Nintendo TOKYO are both on 6F.",
          "Then Scramble Crossing photos on the way back.",
        ],
        snack: "Lunch at Shibuya Yokochō under Miyashita Park — a lively food alley with dishes from all over Japan.",
        photo: "Copy Mewtwo's pose next to its tank. At the Scramble, have someone shoot you walking toward the camera mid-crossing (Live Photo → Long Exposure blurs the crowd). Keep walking — guards stop people posing in the road today.",
        tip: "Leave Shibuya by 5 PM. Street drinking is banned 6 PM–5 AM and the Halloween crowds get intense fast.",
      },
      {
        t: "17:00", title: "Rest + costume on", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Fukutoshin line Shibuya → Shinjuku-sanchome (~10 min).",
          "Drop the merch, nap, costume on (wear it to the café for the Halloween photo).",
        ],
      },
      {
        t: "18:25", title: "Leave for Pokémon Café Tokyo", place: "Nihonbashi Takashimaya S.C. Annex",
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Ginza (~17 min).",
          "Change to the Ginza line (orange) 2 stops to Nihombashi.",
          "Exit B2 connects straight into Takashimaya; head to the Annex (新館) 5F.",
        ],
        tip: "Arrive by 7:00 — they want you 15 min early for the 7:15 PM table. Your reservation number is in your confirmation email.",
      },
      {
        t: "19:15", title: "Pokémon Café dinner 🍰", place: "Pokemon Cafe Tokyo",
        how: [
          "Peek into Pokémon Center Tokyo DX next door before you sit — it may close before you finish.",
          "90-minute seating — order early so you have time for dessert.",
        ],
        snack: "Order a latte for random Pokémon latte art, plus one of the character plates — they're made to be photographed.",
        photo: "Overhead flat-lay of your food before the first bite, then a selfie with the costume + plate.",
      },
      {
        t: "21:30", title: "Ni-chome Halloween 👻", place: "Bar Blacknude, 2-15-12 Shinjuku",
        how: [
          "Ginza → Marunouchi line back to Shinjuku-sanchome (~25 min).",
          "Bar Blacknude's downstairs club (open from 7 PM tonight) → Eagle Tokyo Blue → after midnight, AiSOTOPE (RUSHCRUISE) or ArcH (Jimi-Halloween: dress as something boring 😂).",
          "Drink inside the bars — parts of Shinjuku restrict street drinking tonight.",
        ],
        spicy: "The streets fill with costumes all night. Costume = instant conversation starter: compliment someone's look (“Kakkoii!”) and you're in. Ask before photographing anyone.",
        photo: "Street shots on Naka-dori with direct flash. Get a 5-second clip of the crowd — it'll be the Halloween reel opener.",
      },
    ],
  },

  /* ---------------- DAY 7 ---------------- */
  {
    id: "d7", date: "2026-11-01", dow: "Sun", title: "To Kyoto + Nintendo Museum", city: "Kyoto",
    theme: "pixel", emoji: "🎮", deco: ["🎮", "⛩️", "🍄", "⭐", "🕹️", "🍁"],
    kicker: "Day 7 · Press Start in Kyoto",
    tagline: "Bullet train past Fuji, Nintendo's birthplace, and lantern-lit Gion at night.",
    sleep: "kyoto", wx: { lat: 34.99, lon: 135.76 },
    phrases: ["takkyubin", "azukeru", "photook", "eigomenu", "gochisousama"],
    variants: {
      q: "Did you get Nintendo Museum tickets?",
      a: "Yes — museum time! 🎮",
      b: "No — Kyoto temples + Nintendo KYOTO 🍁",
    },
    steps: [
      {
        t: "07:30", title: "Check out + ship your suitcase", place: "",
        how: [
          "At the front desk, ask to send your suitcase to the Osaka hotel by Yamato (takkyūbin): “Takkyūbin de Ōsaka no hoteru ni okuritai desu.”",
          "On the waybill: APA Hotel & Resort Osaka Umeda Eki Tower (address in the Hotels tab), your name, and delivery date Nov 2. ~¥2,500.",
          "Email the Osaka hotel that a bag is arriving for you.",
          "Keep a backpack with 1 night of stuff + your passport.",
        ],
      },
      {
        t: "07:45", title: "Shinjuku → Shinagawa", place: "Shinagawa Station",
        how: [
          "Walk ~10 min to Shinjuku Station, JR Yamanote line (green) toward Shibuya/Shinagawa (~20 min).",
          "At Shinagawa follow the blue “Shinkansen” signs and tap the Suica linked to SmartEX at the gate.",
        ],
        snack: "Buy an ekiben (station bento) inside the shinkansen gates + a bottle of green tea. Eating on the shinkansen is totally normal.",
      },
      {
        t: "08:30", title: "Nozomi to Kyoto (seat E)", place: "Kyoto Station",
        how: [
          "Find your car number on the platform floor markings and line up there.",
          "Sit in seat E — the window side that faces Mt Fuji.",
          "Fuji shows up ~40–45 min after Shinagawa. Kyoto in 2 h 15.",
        ],
        photo: "Fuji through the window: press the lens (or phone) flat against the glass to kill reflections, and shoot a burst as it passes.",
      },
      {
        t: "10:45", title: "Drop your backpack at the hotel", place: "Hotel Hokke Club Kyoto",
        how: [
          "Exit via the Karasuma Central Gate (烏丸中央口, north side).",
          "Hotel Hokke Club is directly across the bus terminal, 1 min away.",
          "“Nimotsu o azukatte moraemasu ka?” — they'll hold it till check-in.",
        ],
      },

      /* ---- Plan A: museum ---- */
      {
        only: "a", t: "11:30", title: "Kintetsu → Nintendo Museum", place: "Nintendo Museum, Uji",
        how: [
          "Back into Kyoto Station, follow signs to the Kintetsu Line (south side, Hachijō exit area).",
          "Ride the Kintetsu Kyoto Line to Ogura (小倉) — check the board that your train stops there (~20–30 min).",
          "Walk ~5 min to the museum. Bring your passport — tickets are checked against your name.",
          "Plan on ~2.5 hours inside.",
        ],
        snack: "Grab onigiri at a konbini near Ogura Station before your entry time, or eat at the museum café.",
        photo: "Follow the posted photo rules inside. The courtyard and the big entrance signage are fair game for a hero shot.",
      },
      {
        only: "a", t: "15:30", title: "Back → taxi to Kiyomizu-dera", place: "Kiyomizu-dera",
        how: [
          "Kintetsu back to Kyoto Station.",
          "Taxi from the north (Karasuma) side to Kiyomizu-dera (~15 min, ~¥1,800). It's open until 6 PM.",
        ],
      },

      /* ---- Plan B: no museum ---- */
      {
        only: "b", t: "11:30", title: "Nishiki Market lunch crawl", place: "Nishiki Market, Kyoto",
        how: [
          "Karasuma subway from Kyoto Station 2 stops to Shijō (~5 min).",
          "Walk ~5 min east to Nishiki Market.",
        ],
        snack: "Graze: tamagoyaki (sweet rolled omelet), tako-tamago (baby octopus with a quail egg inside), soy-milk doughnuts. Many stalls ask you to eat at the stall, not while walking.",
      },
      {
        only: "b", t: "13:30", title: "Nintendo KYOTO + Pokémon Center Kyoto", place: "Kyoto Takashimaya S.C.",
        how: [
          "Walk east to Shijō-Kawaramachi: both are inside Kyoto Takashimaya S.C. (T8 building).",
          "Then taxi or walk ~25 min east to Kiyomizu-dera.",
        ],
        photo: "Grab a shot with the shop's big character displays — Kyoto is where Nintendo started as a playing-card company in 1889.",
      },

      {
        t: "16:00", title: "Kiyomizu → Ninenzaka → Yasaka Pagoda", place: "Kiyomizu-dera",
        how: [
          "Kiyomizu-dera's wooden stage first, then walk downhill on Sannenzaka and Ninenzaka.",
          "Pass the Starbucks in a 100-year-old townhouse, and end at Yasaka Pagoda for blue hour (~5 PM).",
        ],
        photo: "Walk out through the Starbucks Ninenzaka noren curtain, drink in hand. Then the classic pagoda shot looking up the sloped lane, three-quarter turn — but don't block the street.",
        snack: "Matcha soft-serve and free yatsuhashi (cinnamon mochi) samples on the slopes — stand by the shop to eat.",
      },
      {
        t: "18:00", title: "Gion + Pontocho dinner", place: "Pontocho Alley, Kyoto",
        how: [
          "Walk ~10 min north to Gion's Hanamikoji street (main street only — the private side alleys have a ¥10,000 photo fine).",
          "Plan A people: Nintendo KYOTO + Pokémon Center Kyoto are 10 min west at Shijō-Kawaramachi (check closing time).",
          "Cross the Kamo River to Pontocho alley for dinner.",
        ],
        photo: "Pontocho: walk toward the camera between the lanterns, or a flash close-up. Then a sitting shot on the Kamo River bank.",
        snack: "Pontocho can be pricey — check the menu board out front. Yakitori or kushiage counters are the friendliest for solo diners.",
        tip: "Never photograph geiko or maiko without asking.",
      },
      {
        t: "21:00", title: "Back to the hotel", place: "Hotel Hokke Club Kyoto",
        how: [
          "Taxi (~¥1,500) or walk ~10 min west to Shijō Station → Karasuma subway 2 stops to Kyoto.",
          "Check in and grab your backpack.",
        ],
        photo: "The Kyoto Station grand staircase light-up, right by your hotel: sit halfway up the 171 steps while the LEDs change color, shot from the bottom.",
        snack: "Kyoto Ramen Kōji on Kyoto Station's 10F: eight ramen shops from around Japan under one roof.",
      },
    ],
  },

  /* ---------------- DAY 8 ---------------- */
  {
    id: "d8", date: "2026-11-02", dow: "Mon", title: "Fushimi Inari + Uji → Osaka", city: "Kyoto → Osaka",
    theme: "torii", emoji: "🦊", deco: ["⛩️", "🦊", "🍵", "🐙", "🌆", "⚡"],
    kicker: "Day 8 · Thousand gates to neon canals",
    tagline: "Dawn torii, real matcha, Pokémon Café Osaka, and a holiday-eve night in Doyama-cho.",
    sleep: "osaka", wx: { lat: 34.70, lon: 135.50 },
    phrases: ["azukeru", "ohayou", "osusume", "nama", "kanpai", "amerika", "nomou", "issho"],
    steps: [
      {
        t: "06:30", title: "Check out → Inari", place: "Fushimi Inari Taisha",
        how: [
          "Leave your backpack at the front desk.",
          "JR Nara line from Kyoto Station (platforms 8–10) 2 stops to Inari (~5 min). Any local train stops there.",
          "The shrine gate is right across the street.",
        ],
        snack: "Konbini breakfast before you board.",
      },
      {
        t: "06:45", title: "Climb the gates to Yotsutsuji", place: "Yotsutsuji Intersection, Fushimi Inari",
        how: [
          "Walk through the Senbon Torii (the double rows of gates) and keep climbing.",
          "Yotsutsuji viewpoint is ~45 min up; the crowds thin the higher you go.",
          "About 1.5 h round trip.",
        ],
        photo: "Walk away down the torii tunnel and look back over your shoulder. Shoot from chest height so the gates converge. White, black or denim pops against the orange.",
        snack: "On the way out: kitsune udon or inari sushi (fried tofu — the fox spirits' favorite) at the shops by the gate.",
      },
      {
        t: "08:30", title: "Uji: Byōdō-in + matcha", place: "Byodo-in, Uji",
        how: [
          "JR Nara line from Inari to Uji (~20 min).",
          "Walk ~10 min to Byōdō-in (opens 8:30).",
        ],
        photo: "The Phoenix Hall mirrored in its pond — it's the temple on the ¥10 coin. Hold the coin up next to it for the cute comparison shot.",
        snack: "Early lunch at Nakamura Tōkichi's Byōdō-in branch: matcha soba and a matcha parfait. Uji is Japan's matcha capital.",
        tip: "Rather have the bamboo-grove photo? Swap Uji for Arashiyama (via Kyoto, ~35 min).",
      },
      {
        t: "12:30", title: "Uji → Kyoto → Osaka", place: "Osaka Station",
        how: [
          "JR Nara line back to Kyoto; grab your backpack at the hotel.",
          "JR Special Rapid (新快速) from Kyoto to Osaka (~30 min).",
        ],
        tip: "Osaka switch: stand on the RIGHT side of escalators here (the opposite of Tokyo).",
      },
      {
        t: "14:00", title: "Drop your bag in Umeda", place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        how: [
          "From JR Osaka, Midosuji South Exit, walk ~8 min to the hotel.",
          "Your suitcase should be waiting. Check-in is from 3 PM.",
          "Nap before the long night — or see the Umeda Sky Building.",
        ],
        photo: "HEP FIVE's red Ferris wheel on the mall roof, shot from the street below (better after dark).",
      },
      {
        t: "17:00", title: "Pokémon Center Osaka DX", place: "Daimaru Shinsaibashi",
        how: [
          "Midosuji line (red) from Umeda to Shinsaibashi (~6 min). Daimaru is connected to the station.",
          "Pokémon Center Osaka DX and the café are on 9F.",
          "Check in at Pokémon Café Osaka by 5:50 PM for your 6:00 table (reservation in your email).",
        ],
        snack: "Café time: character plates + a latte. Try a different dish than Tokyo for the comparison post.",
      },
      {
        t: "19:45", title: "Dotonbori neon", place: "Glico Sign, Dotonbori",
        how: [
          "Walk ~5 min south down Midosuji/Shinsaibashi-suji to Ebisubashi bridge.",
          "Stroll the canal both ways.",
        ],
        photo: "The Glico runner pose: arms up in a V, one knee raised, sign behind you. Everyone does it — that's the point. Direct flash for the night look.",
        snack: "Takoyaki at Kukuru or Wanaka (blow on it — the inside is lava). Kushikatsu rule: never double-dip in the shared sauce.",
      },
      {
        t: "23:00", title: "Doyama-cho holiday-eve crawl", place: "Doyama-cho, Kita-ku, Osaka",
        how: [
          "Midosuji line back to Umeda; Doyama-cho is ~5 min from your hotel.",
          "Eagle Osaka (free entry Mon–Thu, cashless) → Grand Slam (small, international) → Explosion (main club; check @explosion_osaka).",
          "Bear Plus / Dungaree / BULL for bear-and-muscle bars — check Instagram that they're open.",
        ],
        spicy: "Tomorrow's a holiday, so Osaka's out tonight. Osaka guys are famously chattier than Tokyo — say hi first. Your hotel is a 5-minute stumble away 😉",
      },
    ],
  },

  /* ---------------- DAY 9 ---------------- */
  {
    id: "d9", date: "2026-11-03", dow: "Tue", title: "Hiroshima + Miyajima", city: "Hiroshima",
    theme: "sea", emoji: "🦌", deco: ["🦌", "🌊", "⛩️", "🍁", "🕊️", "🦪"],
    kicker: "Day 9 · Culture Day holiday",
    tagline: "A floating torii, wild deer, grilled oysters, and a quiet hour of remembrance at the Peace Park.",
    sleep: "osaka", wx: { lat: 34.296, lon: 132.32 },
    phrases: ["takkyubin", "konokippu", "doko", "oishii", "arigatou"],
    steps: [
      {
        t: "08:15", title: "Ship your suitcase to Narita", place: "",
        how: [
          "At the front desk: ship your suitcase to Narita Airport by Yamato. Give them flight UA868, Thu Nov 5, Terminal 1 (~¥3,300).",
          "Keep a backpack with 2 nights of clothes + a warm layer for the Fuji sunrise.",
        ],
        tip: "Yamato needs it 2 days before your flight, so this has to happen this morning.",
      },
      {
        t: "08:30", title: "Osaka → Hiroshima", place: "Hiroshima Station",
        how: [
          "JR Kyoto line from Osaka 1 stop to Shin-Osaka (~4 min).",
          "~9:00 AM Nozomi to Hiroshima (~1 h 25) — tap the Suica linked to SmartEX.",
        ],
        snack: "Shin-Osaka ekiben: 551 Hōrai pork buns (Osaka's famous butaman) for the ride.",
      },
      {
        t: "10:45", title: "To Miyajima", place: "Miyajimaguchi Ferry Terminal",
        how: [
          "JR Sanyo line (local toward Iwakuni) from Hiroshima to Miyajimaguchi (~30 min).",
          "Walk 3 min to the JR ferry pier — Suica works. ~10 min crossing.",
          "A ¥100 Miyajima visitor tax is collected with your ferry fare.",
        ],
        photo: "Stand on deck: the JR ferry swings close to the floating torii on the way over.",
      },
      {
        t: "11:30", title: "Itsukushima Shrine + the deer", place: "Itsukushima Shrine",
        how: [
          "Check today's tide table: the torii “floats” near high tide; at low tide you can walk out to it.",
          "Walk the shrine's corridors over the water.",
          "Deer roam free — don't feed them (it's banned here) and keep maps and paper out of reach. They will eat them.",
        ],
        photo: "“Pinch” the torii with forced perspective from the beach, or sit on the shore with the torii behind you and a deer wandering in.",
        snack: "Grilled oysters (yaki-gaki) on Omotesando shopping street, momiji manjū (try the deep-fried age-momiji), and anago-meshi (conger-eel rice) — a Miyajima classic.",
        tip: "It's a national holiday — expect crowds. Eat early.",
      },
      {
        t: "15:00", title: "Peace Memorial Park", place: "Atomic Bomb Dome, Hiroshima",
        how: [
          "Ferry back → JR to Hiroshima Station (~30 min).",
          "Taxi (~10 min) or streetcar line 2 or 6 to Genbaku-Dōmu-mae. Have coins ready in case your IC card isn't accepted.",
          "Walk the park to the Cenotaph and the Children's Peace Monument.",
        ],
        photo: "A memorial: photograph the dome across the Motoyasu River. No smiling or playful poses here.",
        tip: "Keep your voice low. Many visitors leave paper cranes at the Children's Peace Monument.",
      },
      {
        t: "17:00", title: "Hiroshima okonomiyaki", place: "Okonomimura, Hiroshima",
        how: [
          "Walk ~15 min to Okonomimura near Hondōri: floors of tiny griddle counters.",
          "Sit at the counter and watch them build it.",
        ],
        snack: "Hiroshima-style okonomiyaki is layered with noodles (soba or udon) — order “soba-iri” with an egg on top. Eat it straight off the griddle with the little spatula.",
      },
      {
        t: "18:00", title: "Shinkansen back to Osaka", place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        how: [
          "Tram or taxi back to Hiroshima Station.",
          "Nozomi to Shin-Osaka (~1 h 25), JR 1 stop to Osaka, walk ~8 min.",
        ],
      },
      {
        t: "21:30", title: "Last Osaka night", place: "Shinsekai, Osaka",
        how: [
          "Energy left? Shinsekai's retro neon around Tsūtenkaku tower (Sakaisuji line to Ebisuchō).",
          "Or one last round in Doyama-cho, 5 min from the hotel.",
        ],
        photo: "Shinsekai is the best direct-flash street of the trip: giant food signs, retro neon, Tsūtenkaku behind you.",
        snack: "Shinsekai kushikatsu (fried skewers) — again: no double-dipping.",
      },
    ],
  },

  /* ---------------- DAY 10 ---------------- */
  {
    id: "d10", date: "2026-11-04", dow: "Wed", title: "Osaka → Mt Fuji", city: "Mt Fuji",
    theme: "fuji", emoji: "🗻", deco: ["🗻", "🍁", "♨️", "🌅", "🚄", "🍂"],
    kicker: "Day 10 · The mountain",
    tagline: "Bullet train, lake views, autumn leaves and a hot spring. Your one Fuji sunset — make it count.",
    sleep: "fuji", wx: { lat: 35.51, lon: 138.76 },
    phrases: ["onsen", "takkyubin", "doko", "gochisousama", "kirei"],
    steps: [
      {
        t: "09:30", title: "Check out + breakfast", place: "Shin-Osaka Station",
        how: [
          "Check out with your backpack.",
          "Up early? Kuromon Market (Sakaisuji line Ōgimachi → Nippombashi, ~10 min) — allow a full hour.",
          "Otherwise go straight to Shin-Osaka.",
        ],
        snack: "Kuromon: grilled scallops, tuna skewers and a strawberry daifuku. Or 551 Hōrai buns at Shin-Osaka.",
      },
      {
        t: "10:30", title: "Hikari to Mishima (seat E)", place: "Mishima Station",
        how: [
          "Take a HIKARI (ひかり) — the Nozomi doesn't stop at Mishima.",
          "Seat E again for Fuji. ~2 h.",
        ],
        photo: "Fuji gets huge on the approach to Mishima — burst through the window.",
        snack: "Second ekiben of the trip. Go for a regional one with a pretty box.",
      },
      {
        t: "12:45", title: "Fujikyu bus to Kawaguchiko", place: "Kawaguchiko Station",
        how: [
          "Mishima Station South Exit → bus stop for the Fujikyu bus to Kawaguchiko.",
          "Show your highway-buses.jp QR (or pay on board if seats remain). ~1 h 30.",
        ],
        photo: "Sit on the right side heading north — Fuji fills the window around Lake Yamanaka.",
      },
      {
        t: "15:00", title: "Check in", place: "",
        how: [
          "Check in at your Fuji hotel (add it in the Hotels tab once booked).",
          "Drop the bag and grab your warm layer.",
        ],
      },
      {
        t: "16:00", title: "Sunset: Oishi Park or the ropeway", place: "Oishi Park, Fujikawaguchiko",
        how: [
          "Oishi Park on the north shore (Kawaguchiko sightseeing bus, red line) — Fuji over the lake.",
          "Or the Kachi Kachi Ropeway near the station for Fuji + the lake from above.",
          "Sunset ~4:40 PM. Early-November leaves are peak color.",
        ],
        photo: "Sit on the lakeside wall with your back to the camera, facing Fuji. Use 2–3x zoom so the mountain looks massive. A bright red/orange/yellow layer pops against it.",
        tip: "If the autumn leaves festival is on, the Momiji Corridor is lit up after dark — magical and free.",
      },
      {
        t: "18:00", title: "Hōtō dinner + onsen night", place: "Hoto Fudo Kawaguchiko",
        how: [
          "Dinner: hōtō, the local thick noodles stewed in miso with pumpkin (Hōtō Fudō is the famous spot).",
          "Hot spring at the hotel (manners in the Manners tab).",
          "Check the Fuji live camera, set an alarm for 5:30 AM, early night.",
        ],
        spicy: "Onsen: the one place where being naked in public is the dress code 😉 Wash fully before you get in, keep the little towel out of the water.",
      },
    ],
  },

  /* ---------------- DAY 11 ---------------- */
  {
    id: "d11", date: "2026-11-05", dow: "Thu", title: "Fuji sunrise → fly home", city: "Fuji → Narita",
    theme: "sunrise", emoji: "🌅", deco: ["🌅", "🗻", "✈️", "💖", "🎒", "🏯"],
    kicker: "Day 11 · Sayonara (for now)",
    tagline: "Sunrise on Fuji, a pagoda, and one last konbini run. You did Japan, birthday boy.",
    sleep: null, wx: { lat: 35.51, lon: 138.76 },
    phrases: ["arigatou", "gochisousama", "doko", "card", "mata"],
    steps: [
      {
        t: "05:45", title: "Lakeshore sunrise", place: "Oishi Park, Fujikawaguchiko",
        how: [
          "Warm layer on. Head to the north shore (~6:00 AM sunrise).",
          "Morning is Fuji's clearest window — clouds usually build by late morning.",
        ],
        photo: "Fuji reflected in still water: crouch low near the edge, or stand as a silhouette at the waterline.",
      },
      {
        t: "07:00", title: "Chureito Pagoda", place: "Chureito Pagoda",
        how: [
          "Fujikyu train from Kawaguchiko to Shimoyoshida (~15 min).",
          "Walk up ~400 steps to the viewing deck above the pagoda.",
        ],
        photo: "Stand at the right edge of the frame, back to camera or in profile, with the pagoda + Fuji behind you. 2–3x zoom. Then Honchō Street's Fuji view — sidewalk only.",
      },
      {
        t: "09:30", title: "Highway bus to Shinjuku", place: "Busta Shinjuku",
        how: [
          "Fujikyu train back to Kawaguchiko Station in time for the 9:30 bus — don't take a later one.",
          "Show your highway-buses.jp QR. ~1 h 45 to Busta Shinjuku.",
        ],
        snack: "Konbini breakfast for the bus. Grab regional KitKats or Fuji-shaped sweets as gifts.",
      },
      {
        t: "11:45", title: "Narita Express to the airport", place: "Narita Airport Terminal 1",
        how: [
          "Walk into JR Shinjuku and buy a Narita Express (N'EX) ticket at a JR machine — every seat is reserved (~¥3,300).",
          "~1 h 20 to Narita Airport Terminal 1 (United is in T1).",
        ],
        snack: "Last ekiben on the N'EX, and spend coins at a vending machine — coins can't be exchanged back.",
      },
      {
        t: "13:30", title: "Narita: bag → tax refund → check in", place: "Narita Airport Terminal 1",
        how: [
          "Yamato counter in Terminal 1: pick up your suitcase.",
          "Tax-refund kiosk for anything bought from Nov 1 on (passport + purchases with you).",
          "Check in for UA868 (6:00 PM) and drop the bag.",
        ],
      },
      {
        t: "18:00", title: "Fly home 💖", place: "",
        how: [
          "UA868 Narita → Chicago, landing 2:50 PM the same day.",
          "In Chicago: Mobile Passport Control, re-check your bag, then UA1875 at 4:20 PM.",
          "Land in Orlando 8:12 PM. Photo dump incoming.",
        ],
      },
    ],
  },
];

/* ---------------- PHRASES ---------------- */
const PHRASES = [
  // Basics
  { id: "konnichiwa", cat: "Basics", jp: "こんにちは", ro: "Konnichiwa", en: "Hello", say: "kohn-nee-chee-wah" },
  { id: "ohayou", cat: "Basics", jp: "おはようございます", ro: "Ohayō gozaimasu", en: "Good morning", say: "oh-hah-yoh go-zai-mahs" },
  { id: "konbanwa", cat: "Basics", jp: "こんばんは", ro: "Konbanwa", en: "Good evening", say: "kohn-bahn-wah" },
  { id: "arigatou", cat: "Basics", jp: "ありがとうございます", ro: "Arigatō gozaimasu", en: "Thank you (polite)", say: "ah-ree-gah-toh go-zai-mahs", note: "Pair it with a small nod/bow. Say it to everyone: cashiers, drivers, staff." },
  { id: "doumo", cat: "Basics", jp: "どうも", ro: "Dōmo", en: "Thanks (quick, casual)", say: "doh-moh", note: "Great for a door held open or a receipt handed over." },
  { id: "sumimasen", cat: "Basics", jp: "すみません", ro: "Sumimasen", en: "Excuse me / Sorry / Waiter!", say: "soo-mee-mah-sen", note: "The most useful word in Japan: getting attention, squeezing past, apologizing." },
  { id: "hai", cat: "Basics", jp: "はい ／ いいえ", ro: "Hai / Iie", en: "Yes / No", say: "hai / ee-eh" },
  { id: "daijoubu", cat: "Basics", jp: "大丈夫です", ro: "Daijōbu desu", en: "I'm OK / No thanks", say: "dai-joh-boo dess", note: "Use it to politely decline a bag, a receipt, or help." },
  { id: "wakaranai", cat: "Basics", jp: "わかりません", ro: "Wakarimasen", en: "I don't understand", say: "wah-kah-ree-mah-sen" },
  { id: "eigo", cat: "Basics", jp: "英語を話せますか？", ro: "Eigo o hanasemasu ka?", en: "Do you speak English?", say: "ay-go oh hah-nah-seh-mahs kah" },
  { id: "mata", cat: "Basics", jp: "また来ます！", ro: "Mata kimasu!", en: "I'll come back!", say: "mah-tah kee-mahs" },

  // Shopping
  { id: "kore", cat: "Shopping", jp: "これください", ro: "Kore kudasai", en: "This one, please", say: "koh-reh koo-dah-sai", note: "Gesture at the item with an open hand, palm up — not a jabbing finger." },
  { id: "ikura", cat: "Shopping", jp: "これはいくらですか？", ro: "Kore wa ikura desu ka?", en: "How much is this?", say: "koh-reh wah ee-koo-rah dess kah" },
  { id: "card", cat: "Shopping", jp: "カードで払えますか？", ro: "Kādo de haraemasu ka?", en: "Can I pay by card?", say: "kah-doh deh hah-rah-eh-mahs kah" },
  { id: "suica", cat: "Shopping", jp: "Suicaでお願いします", ro: "Suika de onegai shimasu", en: "With Suica, please", say: "soo-ee-kah deh oh-neh-gai shee-mahs" },
  { id: "fukuro", cat: "Shopping", jp: "袋はいりません", ro: "Fukuro wa irimasen", en: "I don't need a bag", say: "foo-koo-roh wah ee-ree-mah-sen" },
  { id: "menzei", cat: "Shopping", jp: "免税できますか？", ro: "Menzei dekimasu ka?", en: "Can I buy tax-free?", say: "men-zay deh-kee-mahs kah", note: "Through Oct 31 only, ¥5,000+ per store, show your passport." },
  { id: "atatame", cat: "Shopping", jp: "温めてください", ro: "Atatamete kudasai", en: "Please heat it up (konbini)", say: "ah-tah-tah-meh-teh koo-dah-sai", note: "They'll usually ask “Atatamemasu ka?” — answer “Hai!”" },
  { id: "ohashi", cat: "Shopping", jp: "お箸ください", ro: "Ohashi kudasai", en: "Chopsticks, please", say: "oh-hah-shee koo-dah-sai" },

  // Food
  { id: "hitori", cat: "Food & drink", jp: "一人です", ro: "Hitori desu", en: "Just one person", say: "hee-toh-ree dess", note: "Hold up one finger when you walk in. Staff will shout “Irasshaimase!” — no reply needed, just smile." },
  { id: "eigomenu", cat: "Food & drink", jp: "英語のメニューはありますか？", ro: "Eigo no menyū wa arimasu ka?", en: "Is there an English menu?", say: "ay-go noh meh-nyoo wah ah-ree-mahs kah" },
  { id: "osusume", cat: "Food & drink", jp: "おすすめは何ですか？", ro: "Osusume wa nan desu ka?", en: "What do you recommend?", say: "oh-soo-soo-meh wah nahn dess kah" },
  { id: "hitotsu", cat: "Food & drink", jp: "これを一つください", ro: "Kore o hitotsu kudasai", en: "One of these, please", say: "koh-reh oh hee-toh-tsoo koo-dah-sai" },
  { id: "nama", cat: "Food & drink", jp: "生ビールください", ro: "Nama bīru kudasai", en: "A draft beer, please", say: "nah-mah bee-roo koo-dah-sai" },
  { id: "mizu", cat: "Food & drink", jp: "お水ください", ro: "Omizu kudasai", en: "Water, please", say: "oh-mee-zoo koo-dah-sai", note: "Water and tea are free in restaurants." },
  { id: "itadakimasu", cat: "Food & drink", jp: "いただきます", ro: "Itadakimasu", en: "Said before eating (“I humbly receive”)", say: "ee-tah-dah-kee-mahs", note: "Hands together lightly, small nod." },
  { id: "gochisousama", cat: "Food & drink", jp: "ごちそうさまでした", ro: "Gochisōsama deshita", en: "Thanks for the meal (when leaving)", say: "go-chee-soh-sah-mah desh-tah", note: "Say it to the chef on your way out — they love it." },
  { id: "oishii", cat: "Food & drink", jp: "おいしい！", ro: "Oishii!", en: "Delicious!", say: "oy-shee" },
  { id: "okaikei", cat: "Food & drink", jp: "お会計お願いします", ro: "Okaikei onegai shimasu", en: "Check, please", say: "oh-kai-kay oh-neh-gai shee-mahs", note: "Or cross your index fingers in an X. You usually pay at the register, not the table." },

  // Getting around
  { id: "doko", cat: "Getting around", jp: "〇〇はどこですか？", ro: "___ wa doko desu ka?", en: "Where is ___?", say: "___ wah doh-koh dess kah", note: "Show the place name on your phone and point at the blank." },
  { id: "toire", cat: "Getting around", jp: "トイレはどこですか？", ro: "Toire wa doko desu ka?", en: "Where's the bathroom?", say: "toy-reh wah doh-koh dess kah" },
  { id: "konokippu", cat: "Getting around", jp: "この電車は〇〇に行きますか？", ro: "Kono densha wa ___ ni ikimasu ka?", en: "Does this train go to ___?", say: "koh-noh den-shah wah ___ nee ee-kee-mahs kah" },
  { id: "taxi", cat: "Getting around", jp: "この住所までお願いします", ro: "Kono jūsho made onegai shimasu", en: "To this address, please (taxi)", say: "koh-noh joo-shoh mah-deh oh-neh-gai shee-mahs", note: "Show the hotel card from the Hotels tab. Taxi doors open and close by themselves — don't touch them." },
  { id: "mayoi", cat: "Getting around", jp: "道に迷いました", ro: "Michi ni mayoimashita", en: "I'm lost", say: "mee-chee nee mah-yoy-mahsh-tah" },

  // Hotel
  { id: "azukeru", cat: "Hotel", jp: "荷物を預かってもらえますか？", ro: "Nimotsu o azukatte moraemasu ka?", en: "Can you hold my bags?", say: "nee-moh-tsoo oh ah-zoo-kah-teh moh-rah-eh-mahs kah" },
  { id: "takkyubin", cat: "Hotel", jp: "宅急便で送りたいです", ro: "Takkyūbin de okuritai desu", en: "I'd like to ship this (luggage forwarding)", say: "tahk-kyoo-bin deh oh-koo-ree-tai dess" },
  { id: "checkin", cat: "Hotel", jp: "チェックインお願いします", ro: "Chekku-in onegai shimasu", en: "Check-in, please", say: "check-een oh-neh-gai shee-mahs" },

  // Photos
  { id: "photoplease", cat: "Photos", jp: "写真を撮ってもらえますか？", ro: "Shashin o totte moraemasu ka?", en: "Could you take my photo?", say: "shah-sheen oh toht-teh moh-rah-eh-mahs kah", note: "Offer to take theirs first — works almost every time." },
  { id: "photook", cat: "Photos", jp: "写真を撮ってもいいですか？", ro: "Shashin o totte mo ii desu ka?", en: "May I take a photo?", say: "shah-sheen oh toht-teh moh ee dess kah" },
  { id: "kirei", cat: "Photos", jp: "きれい！", ro: "Kirei!", en: "Beautiful!", say: "kee-ray" },
  { id: "sticker", cat: "Photos", jp: "誕生日シールお願いします", ro: "Tanjōbi shīru, onegai shimasu", en: "A birthday sticker, please (Disney)", say: "tahn-joh-bee shee-roo oh-neh-gai shee-mahs" },

  // Night out
  { id: "kanpai", cat: "Night out", jp: "乾杯！", ro: "Kanpai!", en: "Cheers!", say: "kahn-pai", note: "Wait for everyone's glass before the first sip." },
  { id: "tanjoubi", cat: "Night out", jp: "今日は誕生日です！", ro: "Kyō wa tanjōbi desu!", en: "Today's my birthday!", say: "kyoh wah tahn-joh-bee dess" },
  { id: "hajimemashite", cat: "Night out", jp: "はじめまして、イアンです", ro: "Hajimemashite, Ian desu", en: "Nice to meet you, I'm Ian", say: "hah-jee-meh-mahsh-teh, ee-ahn dess" },
  { id: "amerika", cat: "Night out", jp: "アメリカから来ました", ro: "Amerika kara kimashita", en: "I'm from the US", say: "ah-meh-ree-kah kah-rah kee-mahsh-tah" },
  { id: "gaikokujin", cat: "Night out", jp: "外国人でも大丈夫ですか？", ro: "Gaikokujin demo daijōbu desu ka?", en: "Are foreigners OK here?", say: "gai-koh-koo-jeen deh-moh dai-joh-boo dess kah", note: "Ask at the door of small upstairs bars. A no is about the format, not you." },
  { id: "cover", cat: "Night out", jp: "チャージはいくらですか？", ro: "Chāji wa ikura desu ka?", en: "How much is the cover charge?", say: "chah-jee wah ee-koo-rah dess kah" },
  { id: "kakkoii", cat: "Night out", jp: "かっこいいね", ro: "Kakkoii ne", en: "You look cool / handsome", say: "kahk-koh-ee neh", note: "Flirt-safe compliment that lands every time 😉" },
  { id: "mouippai", cat: "Night out", jp: "もう一杯！", ro: "Mō ippai!", en: "One more (drink)!", say: "moh eep-pai" },
  { id: "onsen", cat: "Night out", jp: "タトゥーは大丈夫ですか？", ro: "Tatū wa daijōbu desu ka?", en: "Are tattoos OK (onsen/gym)?", say: "tah-too wah dai-joh-boo dess kah" },

  // Flirting 💋
  { id: "gay", cat: "Flirting 💋", jp: "ゲイです", ro: "Gei desu", en: "I'm gay", say: "gay dess" },
  { id: "taipu", cat: "Flirting 💋", jp: "タイプです", ro: "Taipu desu", en: "You're my type", say: "tai-poo dess", note: "The classic Ni-chome line. Direct, but totally normal in gay bars." },
  { id: "kakkoiidesu", cat: "Flirting 💋", jp: "かっこいいですね", ro: "Kakkoii desu ne", en: "You're really handsome", say: "kahk-koh-ee dess neh" },
  { id: "tonari", cat: "Flirting 💋", jp: "隣いいですか？", ro: "Tonari ii desu ka?", en: "Mind if I sit next to you?", say: "toh-nah-ree ee dess kah" },
  { id: "namae", cat: "Flirting 💋", jp: "名前は？", ro: "Namae wa?", en: "What's your name?", say: "nah-mah-eh wah" },
  { id: "nomou", cat: "Flirting 💋", jp: "一緒に飲みませんか？", ro: "Issho ni nomimasen ka?", en: "Want to grab a drink together?", say: "ees-shoh nee noh-mee-mah-sen kah" },
  { id: "ogoru", cat: "Flirting 💋", jp: "一杯おごらせて", ro: "Ippai ogorasete", en: "Let me buy you a drink", say: "eep-pai oh-goh-rah-seh-teh" },
  { id: "egao", cat: "Flirting 💋", jp: "笑顔がかわいい", ro: "Egao ga kawaii", en: "Your smile is cute", say: "eh-gah-oh gah kah-wai-ee" },
  { id: "kinniku", cat: "Flirting 💋", jp: "筋肉すごい！", ro: "Kinniku sugoi!", en: "Your muscles are amazing!", say: "keen-nee-koo soo-goy" },
  { id: "hige", cat: "Flirting 💋", jp: "ヒゲいいね", ro: "Hige ii ne", en: "Nice beard", say: "hee-geh ee neh" },
  { id: "odorou", cat: "Flirting 💋", jp: "踊ろう！", ro: "Odorō!", en: "Let's dance!", say: "oh-doh-roh" },
  { id: "kareshi", cat: "Flirting 💋", jp: "彼氏いる？", ro: "Kareshi iru?", en: "Do you have a boyfriend?", say: "kah-reh-shee ee-roo" },
  { id: "hima", cat: "Flirting 💋", jp: "今夜ひま？", ro: "Kon'ya hima?", en: "Free tonight?", say: "kohn-yah hee-mah" },
  { id: "line", cat: "Flirting 💋", jp: "LINE交換しない？", ro: "LINE kōkan shinai?", en: "Want to swap LINE?", say: "line koh-kahn shee-nai", note: "LINE is Japan's WhatsApp. Instagram works too: “Insuta oshiete” (tell me your Insta)." },
  { id: "issho", cat: "Flirting 💋", jp: "もう少し一緒にいたい", ro: "Mō sukoshi issho ni itai", en: "I want to stay with you a little longer", say: "moh soo-koh-shee ees-shoh nee ee-tai" },
  { id: "hotel", cat: "Flirting 💋", jp: "ホテル、近いよ 😏", ro: "Hoteru, chikai yo", en: "My hotel's close by…", say: "hoh-teh-roo chee-kai yoh", note: "Your Shinjuku hotel is booked for 1 — register a visitor at the desk." },
  { id: "kisu", cat: "Flirting 💋", jp: "キスしてもいい？", ro: "Kisu shite mo ii?", en: "Can I kiss you?", say: "kee-soo shteh moh ee" },
  { id: "kondomu", cat: "Flirting 💋", jp: "ゴムある？", ro: "Gomu aru?", en: "Got a condom?", say: "goh-moo ah-roo", note: "Gomu (rubber) is the everyday word. Konbini and the big saunas have them." },
  { id: "yametoku", cat: "Flirting 💋", jp: "ごめん、今日はやめとく", ro: "Gomen, kyō wa yametoku", en: "Sorry, I'll pass tonight", say: "goh-men kyoh wah yah-meh-toh-koo", note: "A soft, friendly no. A firm one is “Iya desu” (I don't want to)." },
  { id: "yamete", cat: "Flirting 💋", jp: "やめて", ro: "Yamete", en: "Stop", say: "yah-meh-teh" },

  // Scene words (glossary)
  { id: "w-tachi", cat: "Scene words", jp: "タチ ／ ウケ ／ リバ", ro: "Tachi / Uke / Riba", en: "Top / Bottom / Versatile", say: "tah-chee / oo-keh / ree-bah", note: "You'll see these on Grindr and 9Monsters profiles." },
  { id: "w-gachimuchi", cat: "Scene words", jp: "ガチムチ", ro: "Gachimuchi", en: "Muscular + solid (stocky muscle build)", say: "gah-chee-moo-chee", note: "Put it in your profile so local guys place your type fast." },
  { id: "w-kuma", cat: "Scene words", jp: "クマ ／ 熊系", ro: "Kuma / Kuma-kei", en: "Bear / bear type", say: "koo-mah / koo-mah-kay" },
  { id: "w-gaisen", cat: "Scene words", jp: "ガイ専", ro: "Gaisen", en: "Into foreigners", say: "gai-sen", note: "“-sen” means “into.” Fuke-sen = into older guys, debu-sen = into bigger guys." },
  { id: "w-nonke", cat: "Scene words", jp: "ノンケ", ro: "Nonke", en: "Straight guy", say: "nohn-keh" },
  { id: "w-nichome", cat: "Scene words", jp: "二丁目", ro: "Ni-chōme", en: "Tokyo's gay district (Shinjuku 2-chōme)", say: "nee-choh-meh" },

  // Emergency
  { id: "tasukete", cat: "Emergency", jp: "助けて！", ro: "Tasukete!", en: "Help!", say: "tah-soo-keh-teh" },
  { id: "byouin", cat: "Emergency", jp: "病院に連れて行ってください", ro: "Byōin ni tsurete itte kudasai", en: "Please take me to a hospital", say: "byoh-een nee tsoo-reh-teh eet-teh koo-dah-sai" },
  { id: "kyuukyuusha", cat: "Emergency", jp: "救急車を呼んでください", ro: "Kyūkyūsha o yonde kudasai", en: "Please call an ambulance", say: "kyoo-kyoo-shah oh yohn-deh koo-dah-sai" },
  { id: "passport", cat: "Emergency", jp: "パスポートをなくしました", ro: "Pasupōto o nakushimashita", en: "I lost my passport", say: "pah-soo-poh-toh oh nah-koo-shee-mahsh-tah" },
  { id: "keisatsu", cat: "Emergency", jp: "交番はどこですか？", ro: "Kōban wa doko desu ka?", en: "Where's the police box?", say: "koh-bahn wah doh-koh dess kah" },
];

/* ---------------- MANNERS ---------------- */
const MANNERS = [
  {
    emoji: "🙇", title: "How to physically say thank you",
    body: [
      "<b>The everyday nod (eshaku, ~15°):</b> a small bow from the waist while saying “arigatō gozaimasu” — to cashiers, taxi drivers, anyone who holds a door. Keep eye contact light, then glance down as you bow.",
      "<b>The sincere bow (~30°):</b> for a big favor or an apology. Hands at your sides (or lightly in front), back straight, pause one beat at the bottom.",
      "<b>Both hands:</b> give and receive anything that matters — cards, receipts, gifts, change — with both hands and a little nod.",
      "Don't press your palms together prayer-style to say thanks to people; that's for temples and “itadakimasu” before a meal.",
    ],
  },
  {
    emoji: "🫴", title: "Pointing at what you want",
    body: [
      "Gesture with an <b>open hand, palm up</b> (fingers together) toward the item and say “Kore kudasai.” Jabbing one finger at people is rude; at a menu or a pastry case it's fine, but the open hand reads as polite.",
      "Pointing at your own nose means “me?” — useful when someone's calling for you.",
      "“Come here” in Japan is a palm-down wave. If someone does it, they're calling you over, not shooing you away.",
      "Show quantity with fingers. An X with your index fingers means “no” or “check, please.”",
    ],
  },
  {
    emoji: "💴", title: "Paying + tipping",
    body: [
      "Put cash or your card in the little <b>tray</b> by the register, not in the cashier's hand. Change comes back on the tray.",
      "<b>No tipping, ever</b> — they'll chase you down the street to return it. Great service is just the default.",
      "Restaurants: pay at the register on your way out, and say “gochisōsama deshita.”",
      "Small bars, older saunas and street stalls are often cash-only. Keep ¥10,000+ on you at night.",
    ],
  },
  {
    emoji: "🚃", title: "Trains + escalators",
    body: [
      "Quiet zone: no phone calls; keep your voice low. Backpack on your front or on the rack when it's crowded.",
      "Line up at the floor markings on the platform and let people off first.",
      "Escalators: <b>stand left in Tokyo</b>, <b>stand right in Osaka</b>.",
      "Priority seats are for elderly, pregnant and disabled riders — skip them even when empty.",
    ],
  },
  {
    emoji: "🍜", title: "Eating out",
    body: [
      "Slurping noodles is normal — it's a compliment.",
      "Never stand chopsticks upright in rice or pass food chopstick-to-chopstick (both are funeral rituals). Rest them on the holder.",
      "The wet towel (oshibori) is for hands only, not your face.",
      "Ramen shops often use a ticket machine by the door: pay, press your dish, hand the ticket to the staff.",
      "Eating while walking is frowned on — eat by the stall or in front of the konbini. Some streets (Asakusa, Nishiki, Miyajima) ask you not to.",
    ],
  },
  {
    emoji: "🗑️", title: "Trash + smoking",
    body: [
      "There are almost no public trash cans. Carry a small bag for your trash and use the bins inside konbini.",
      "Bins are sorted: burnables, PET bottles, cans/glass. Bottle caps and labels sometimes go separately.",
      "Smoking only in marked smoking areas — most of central Tokyo bans it on the street.",
    ],
  },
  {
    emoji: "👟", title: "Shoes off",
    body: [
      "Take shoes off where you see a raised floor, shoe lockers or slippers: ryokans, some restaurants, fitting rooms, some temple halls.",
      "Toilet slippers stay in the bathroom. Walking out in them is a classic tourist mistake.",
      "Socks without holes — you'll be seen. 😅",
    ],
  },
  {
    emoji: "⛩️", title: "Shrines + temples",
    body: [
      "Bow once at the torii gate and walk on the sides of the path — the center is for the gods.",
      "Purify at the water basin: ladle in right hand, rinse left; switch, rinse right; pour a little in your cupped left hand to rinse your mouth (spit beside the basin, not in it); tip the ladle upright so the water washes the handle.",
      "<b>Shrines</b> (torii gates): coin in the box, bow twice, clap twice, make your wish, bow once. <b>Temples</b>: coin, hands together, quiet bow — no clapping.",
    ],
  },
  {
    emoji: "♨️", title: "Onsen (hot spring) etiquette",
    body: [
      "Fully naked — no swimsuits. Men's and women's baths are separate (look for 男 = men).",
      "<b>Wash and rinse completely</b> at the seated shower stations before getting in.",
      "The small towel never goes in the water: fold it on your head or leave it on the side.",
      "Tattoos may be refused — ask “Tatū wa daijōbu desu ka?” or cover small ones with a patch.",
      "No photos, no splashing, keep your voice down. Drink water after.",
    ],
  },
  {
    emoji: "📸", title: "Photos",
    body: [
      "Ask before photographing people: “Shashin o totte mo ii desu ka?”",
      "Never photograph geiko/maiko without permission; Gion's private alleys have fines.",
      "No photos inside Ni-chome bars, clubs or saunas — you'll be asked to leave.",
      "No posing in the road at Shibuya Crossing or Fujiyoshida's Honchō Street; shoot from the sidewalk.",
    ],
  },
  {
    emoji: "🏳️‍🌈", title: "Ni-chome + Doyama-cho 101",
    body: [
      "Most bars hold 10–15 people and charge a cover (¥1,000–2,000) that includes your first drink. Order at least one drink per visit.",
      "Each bar has a “type” (bears, muscle, twinks, older guys). Some upstairs bars are Japanese-only or type-only — a polite no is the format, not you. Ground-floor bars are open to everyone.",
      "Peak hours are 11 PM–3 AM; weekend clubs run to 5 AM.",
      "Skip any bar a street tout steers you to (especially Kabukichō).",
      "Poppers, cannabis and THC vapes are <b>illegal</b>, even to possess. Watch your drink; carry your passport.",
      "Condoms are free at the bigger saunas — use them; syphilis rates are high and PrEP doesn't cover it.",
    ],
  },
  {
    emoji: "🫶", title: "Small things that make you look local",
    body: [
      "Say “sumimasen” to get attention, squeeze past, or apologize — it covers all three.",
      "When staff shout “Irasshaimase!” as you walk in, no reply is needed. A smile is enough.",
      "Blow your nose discreetly (step away). Wearing a mask if you have a cold is considerate.",
      "Taxi doors open and close automatically — don't grab them.",
      "Keep your voice down in public; Japan is quieter than you think.",
    ],
  },
];

const SOS = [
  { label: "Police", num: "110", note: "Emergencies, theft, crime" },
  { label: "Ambulance / Fire", num: "119", note: "Say “Kyūkyūsha” (ambulance). English is often available." },
  { label: "Japan Visitor Hotline", num: "050-3816-2787", note: "24/7 English help line for tourists (JNTO)" },
  { label: "US Embassy Tokyo", num: "03-3224-5000", note: "Lost passport, arrests, emergencies (24 h)" },
  { label: "US Consulate Osaka-Kobe", num: "06-6315-5900", note: "Business hours; after hours call the Embassy" },
  { label: "Police lost & found", num: "0570-550-142", note: "Lost items (English)" },
];
