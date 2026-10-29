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
    id: "d1", date: "2026-10-26", prep: ["Lay out your costume + Disney ears (no full face masks or anything that drags on the ground)", "Link your DisneySea ticket in the Tokyo Disney Resort app and save the QR in Trip → Tickets", "Charge phone, power bank, X100VI battery + the spare; clear space on the SD card", "Day bag: poncho, power bank, Suica topped up (¥3,000+), some cash", "Alarm ~6:15 AM — you leave at 7:00"], rain: "Omoide Yokochō's stalls are mostly covered and Shinjuku Station is all underground. Grab a ¥500–700 clear umbrella at any konbini.", home: {"after": "21:00", "note": "Ni-chome is around the corner from your hotel — walk home. In a taxi, say “Shinjuku-gyoenmae eki made” (to Shinjuku-gyoemmae Station)."}, safe: {"tagline": "Neon, yakitori smoke and your first night in Tokyo. Ease in."}, dow: "Mon", title: "Land in Tokyo", city: "Tokyo",
    theme: "neon", emoji: "🌃", deco: ["✈️", "🏮", "🌃", "✨", "🍢"],
    kicker: "Day 1 · Welcome to Japan",
    tagline: "Neon, yakitori smoke, and your first night in Ni-chome. Ease in, babe.",
    sleep: "shinjuku", wx: { lat: 35.69, lon: 139.71 },
    phrases: ["konnichiwa", "sumimasen", "arigatou", "kore", "hitori", "tonari", "namae"],
    steps: [
      {
        t: "15:30", title: "Land at Haneda (HND)", ll: [35.5443, 139.7686], say: ["sumimasen", "wakaranai"], place: "Haneda Airport Terminal 3",
        how: [
          "Phone off airplane mode and data roaming on. Set the clock to Japan time (13 h ahead of Orlando).",
          "Follow the yellow “Arrivals” signs to Immigration. Have your Visit Japan Web QR code open.",
          "Baggage claim, then Customs: scan the second QR code at the kiosk and walk through the e-gate.",
          "Out into the arrivals hall (2F).",
        ],
        tip: "Immigration + bags usually takes 45–60 minutes. Use the bathroom on the plane before landing.",
      },
      {
        t: "16:30", title: "Cash + Suica check", ask: [{"jp": "セブン銀行のATMはどこですか？", "ro": "Sebun Ginkō no ATM wa doko desu ka?", "en": "Where's the Seven Bank ATM?", "hear": "dir"}], place: "Haneda Airport Terminal 3",
        how: [
          "Find the 7-Eleven (Seven Bank) ATM in the arrivals area and pull ¥20,000–30,000. Choose “decline conversion” so your bank does the exchange.",
          "Open Apple Wallet and make sure Suica is set as Express Transit.",
        ],
        snack: "Your first vending machine moment: blue price tags are cold, red are hot. Try Pocari Sweat (rehydrate after the flight) or a hot can of Royal Milk Tea.",
      },
      {
        t: "17:00", title: "Train to Shinjuku", ask: [{"jp": "京急線の乗り場はどこですか？", "ro": "Keikyū-sen no noriba wa doko desu ka?", "en": "Where do I board the Keikyu Line?", "hear": "dir"}, {"jp": "山手線の新宿方面は何番線ですか？", "ro": "Yamanote-sen no Shinjuku hōmen wa nanbansen desu ka?", "en": "Which platform is the Yamanote Line toward Shinjuku?", "hear": "bansen"}], ll: [35.6913, 139.701], say: ["norikae", "nanban"], pic: "Shinjuku 3D cat billboard", rx: "neon", place: "Shinjuku Station East Exit",
        ride: [{"ln": "KK", "from": "KK16", "to": "KK01", "dir": "品川・泉岳寺・押上・青砥・成田空港 方面 (toward Shinagawa — trains to Narita/Oshiage/Aoto/Sengakuji all go this way)", "type": "Any train type stops at Shinagawa. From Terminal 1·2 you start at KK17 — same direction.", "wrong": "横浜 Yokohama · 逗子・葉山 Zushi-Hayama · 三崎口 Misakiguchi · 浦賀 Uraga on the sign = wrong way. Get off at KK11 京急蒲田 Keikyū Kamata and switch to a train for 品川.", "min": 15, "exit": "Follow the green JR Yamanote Line signs"}, {"ln": "JY", "from": "JY25", "to": "JY17", "dir": "渋谷・新宿方面 (toward Shibuya / Shinjuku)", "type": "All Yamanote trains stop everywhere.", "wrong": "Next stop 高輪ゲートウェイ Takanawa Gateway (JY26) or 田町 Tamachi = wrong way. Get off and take the train on the other side.", "min": 20, "exit": "中央東口 Central East Exit"}],
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
        t: "18:30", title: "Check in at APA Shinjuku Gyoemmae", ask: [{"jp": "チェックインは何時からですか？", "ro": "Chekku-in wa nanji kara desu ka?", "en": "What time is check-in?", "hear": "time"}], ll: [35.6888, 139.71], say: ["checkin", "azukeru"], place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Hand over your passport at the front desk (they'll scan it).",
          "APA rooms are tiny: open the suitcase on the bed or stand it upright by the door.",
          "Shower, change, and plug the phone in for 20 min.",
        ],
        tip: "If you bring someone back later, register them at the desk — the room is booked for 1.",
      },
      {
        t: "19:30", title: "7-Eleven run 🏪", ask: [{"jp": "温めてもらえますか？", "ro": "Atatamete moraemasu ka?", "en": "Could you heat this up?", "hear": "yesno"}, {"jp": "袋はいりません。", "ro": "Fukuro wa irimasen.", "en": "I don't need a bag.", "hear": "none"}], ll: [35.6884, 139.7104], say: ["atatame", "fukuro", "kore"], place: "7-Eleven near Shinjuku-gyoemmae Station",
        how: [
          "Search セブンイレブン in Google Maps: there are a couple within a few minutes of your hotel.",
          "Grab dinner the easy way: onigiri, the egg sando (たまごサンド), karaage, or a hot bento — the cashier heats it if you ask.",
          "Stock the room: big water, Pocari Sweat for jet lag, and a pastry for tomorrow's 6:45 AM breakfast.",
          "Need cash? The 7-Eleven ATM takes foreign cards (choose \u201cdecline conversion\u201d). Suica top-ups work at the register.",
        ],
        snack: "The 7-Eleven egg sando and the ¥100–200 onigiri are legendary for a reason. Peel onigiri by the numbered tabs: 1, 2, 3.",
        photo: "The glowing 7-Eleven sign at night is an iconic first-night shot. Hold the X100VI low and let the store light fill the frame.",
      },
      {
        t: "20:30", title: "Easy Ni-chome intro", night: true, ask: [{"jp": "アイイロカフェはどこですか？", "ro": "Aiiro Kafe wa doko desu ka?", "en": "Where's Aiiro Cafe?", "hear": "dir"}, {"jp": "外国人でも入れますか？", "ro": "Gaikokujin demo hairemasu ka?", "en": "Can foreigners come in?", "hear": "full"}], ll: [35.6905, 139.7077], say: ["cover", "kanpai", "w-profile", "namae"], rx: "neon", place: "Aiiro Cafe, Shinjuku 2-chome",
        how: [
          "Drop the 7-Eleven haul in your room, then walk ~5 min: Ni-chome is literally around your hotel.",
          "Aiiro Cafe is the open-air corner bar on Naka-dori — grab a drink and people-watch.",
          "Then Eagle Tokyo for an easy, English-friendly vibe: bears, muscle and leather.",
          "Into daddies? GB is the quiet, English-speaking counter bar with an older crowd.",
          "Taking someone home? Not to the APA (no visitors). Hotel Queen Annex is a gay-friendly love hotel right in Ni-chome.",
        ],
        spicy: "Mondays are quiet — perfect for scouting. Think of tonight as reconnaissance 👀. Cover is usually ¥1,000–2,000 with a drink; Eagle is cashless, smaller bars want cash.",
        snack: "Before bed: FamilyMart Famichiki (juicy fried chicken) or a 7-Eleven egg sando, plus a big water. Jet-lag insurance.",
      },
      {
        t: "22:45", title: "Jet-lag soak at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei", "gaikokujin"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "From Aiiro Cafe, it's around the corner at 2-13-1 Shinjuku (2F). Your hotel is about 5 minutes away.",
          "Shoes into a small locker at the door (keep a ¥10 or ¥100 coin), then pay at the desk. Ask for the short “rest” stay (休憩).",
          "Keep it to an hour or so: the DisneySea alarm is 6:15 AM.",
        ],
        spicy: "Your first look at Tokyo's biggest gay sauna: sauna, steam, jacuzzi, cold plunge and a rooftop deck, with lots of foreign visitors and English signs. Tonight's just a soak to beat the jet lag 😉",
      },
    ],
  },

  /* ---------------- DAY 2 ---------------- */
  {
    id: "d2", date: "2026-10-27", prep: ["Passport in your sling tomorrow: tax-free shopping at Animate + Pokémon Centers", "Charge everything (big merch + food photo day)", "No early alarm: ~9:45 AM, leave at 10:15 — stay out as late as you want tonight 🎂"], rain: "DisneySea stays great in rain: Journey to the Center of the Earth, Sindbad, Tower of Terror, Toy Story Mania and most of Fantasy Springs are indoors. Ponchos are sold in every shop; outdoor shows may be cut, so check the app.", home: {"after": "20:30", "note": "Trains from Maihama run until around midnight, but the long Keiyo-line walk at Tokyo Station adds 15 min. A taxi from Maihama to Shinjuku is expensive (likely ¥10,000+), so aim for a train before ~23:00."}, park: "tds", dow: "Tue", title: "Your 25th birthday at DisneySea", city: "Tokyo DisneySea",
    theme: "disney", emoji: "🎂", deco: ["🎂", "✨", "🏰", "🎈", "🌊", "⭐"],
    kicker: "Day 2 · Happy 25th, Ian!",
    tagline: "The whole harbor is celebrating you today. Ears on, sticker on, main character energy on.",
    sleep: "shinjuku", wx: { lat: 35.627, lon: 139.885 }, confetti: true,
    phrases: ["tanjoubi", "sticker", "photoplease", "oishii", "kanpai", "taipu", "ogoru"],
    steps: [
      {
        t: "06:45", title: "Fuel up + costume on", say: ["atatame", "fukuro"], place: "",
        how: [
          "Costume on (Halloween costumes are allowed at the parks through Oct 31 — no full face masks or anything that drags on the ground).",
          "Open the Tokyo Disney Resort app: ticket linked, battery at 100%, power bank packed.",
        ],
        snack: "Konbini breakfast on the way: an onigiri (pull tab 1 → 2 → 3 to unwrap the seaweed without tearing) and a tamago sando.",
      },
      {
        t: "07:00", title: "Shinjuku → DisneySea", ask: [{"jp": "京葉線はどっちですか？", "ro": "Keiyō-sen wa dotchi desu ka?", "en": "Which way is the Keiyo Line?", "hear": "dir"}, {"jp": "この電車は舞浜に止まりますか？", "ro": "Kono densha wa Maihama ni tomarimasu ka?", "en": "Does this train stop at Maihama?", "hear": "yesno"}], ll: [35.628, 139.886], say: ["norikae", "nanban"], pic: "Disney Resort Line Mickey window", rx: "pastel", place: "Tokyo DisneySea Station",
        ride: [{"ln": "M", "from": "M10", "to": "M17", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train. No transfer.", "wrong": "Next stop 新宿三丁目 Shinjuku-sanchōme (M09) = wrong way.", "min": 17, "exit": "Follow the red/pink 京葉線 Keiyo Line signs (10–15 min walk underground)"}, {"ln": "JE", "from": "JE01", "to": "JE07", "dir": "蘇我・海浜幕張・新習志野・府中本町 方面 — every train from the Keiyo platforms at Tokyo goes your way", "type": "Local (各駅停車) and Rapid (快速) both stop at Maihama.", "wrong": "Tokyo is the end of the line, so you can't go the wrong way from here.", "min": 15, "exit": "South Exit → Resort Gateway Station"}, {"ln": "DR", "from": "RG", "to": "TDS", "dir": "Every monorail runs one way around the loop", "type": "¥300 — tap Suica. Mickey-shaped windows and straps!", "wrong": "", "min": 10, "exit": "Tokyo DisneySea Station → park gate"}],
        how: [
          "Walk 1 min to Shinjuku-gyoemmae Station. Marunouchi line (red) direct to Tokyo (~20 min, no transfer).",
          "At Tokyo Station, follow the red/pink “Keiyo Line” signs. It's a long 10–15 min underground walk with moving walkways — keep going.",
          "Take any Keiyo line train toward Soga / Kaihin-Makuhari to Maihama (~15 min).",
          "Exit South, walk to Resort Gateway Station and ride the Disney Resort Line monorail to Tokyo DisneySea Station (~10 min). Suica works.",
        ],
        photo: "The Disney Resort Line monorail has Mickey-shaped windows and hand straps — get a close-up with the bay behind.",
      },
      {
        t: "08:30", title: "At the gate → Frozen Premier Access", fixed: true, ask: [{"jp": "バースデーシールはどこでもらえますか？", "ro": "Bāsudē shīru wa doko de moraemasu ka?", "en": "Where can I get a birthday sticker?", "hear": "dir"}], ll: [35.6273, 139.8846], say: ["sticker", "tanjoubi"], place: "Tokyo DisneySea",
        how: [
          "Scan in, then immediately buy Premier Access for Anna and Elsa's Frozen Journey in the app.",
          "Ask any cast member for a birthday sticker: “Bāsudē shīru o onegai shimasu.” (A birthday sticker, please.) Write your name on it — you'll get “Happy birthday!” all day.",
        ],
      },
      {
        t: "09:30", title: "Fantasy Springs + the big rides", ask: [{"jp": "ファンタジースプリングスはどっちですか？", "ro": "Fantajī Supuringusu wa dotchi desu ka?", "en": "Which way is Fantasy Springs?", "hear": "dir"}], say: ["photoplease", "hitotsu", "oishii"], pic: "Tokyo DisneySea Halloween outfit men", rx: "pastel", place: "Fantasy Springs, Tokyo DisneySea",
        how: [
          "Fantasy Springs on standby: Rapunzel's Lantern Festival, Peter Pan's Never Land Adventure.",
          "Then the classics: Journey to the Center of the Earth (Mysterious Island), Raging Spirits, Nemo & Friends SeaRider, Soaring: Fantastic Flight. (Tower of Terror is closed until Nov 5 and Indiana Jones until Nov 30 for refurbishment.)",
          "Check the app for the 25th-anniversary harbor show times.",
        ],
        snack: "Park snacks to hunt: the Gyoza Dog at Nautilus Galley (Mysterious Island), the float-ring shaped Ukiwaman shrimp bun at Seaside Snacks (Port Discovery), and a popcorn bucket — every cart has a different flavor, so check the app map.",
        photo: "Halloween decor + the volcano behind you. Full-body costume shot from waist height (have them crouch a little).",
      },
      {
        t: "16:30", title: "Blue hour at Mediterranean Harbor", fixed: true, ask: [{"jp": "夜のショーは何時からですか？", "ro": "Yoru no shō wa nanji kara desu ka?", "en": "What time does the night show start?", "hear": "time"}], ll: [35.6265, 139.8848], say: ["photoplease", "kirei"], pic: "Tokyo DisneySea Mount Prometheus night photo", rx: "reala", place: "Mediterranean Harbor, Tokyo DisneySea",
        how: [
          "Grab a railing spot along the harbor ~10 min before sunset (~4:50 PM); blue hour is the 20 minutes after.",
          "Stay for the night show and ride until the 9 PM close.",
        ],
        photo: "THE birthday shot: lean on the railing, body angled, look back at the camera with Mount Prometheus across the water. Birthday sticker + ears in frame. Shoot RAW + JPEG on the X100VI.",
      },
      {
        t: "17:20", title: "Journey to the Center of the Earth 🌋", fixed: true, ll: [35.6261, 139.8853], say: ["photoplease"], place: "Journey to the Center of the Earth, Tokyo DisneySea",
        how: [
          "Your Premier Access window is 16:55–17:55. From the harbor it's a ~7 min walk into the volcano (Mysterious Island).",
          "Open the app → Display code at the Premier Access entrance.",
          "After dark: Soaring or Fantasy Springs standby, then the night show — check ⏱️ Live waits at the top of this day.",
        ],
        photo: "Mount Prometheus lit up after dark from the Mysterious Island bridge — rest the X100VI on the railing for a sharp night shot.",
      },
      {
        t: "21:00", title: "Back to Shinjuku", ask: [{"jp": "新宿御苑前までの終電は何時ですか？", "ro": "Shinjuku-gyoenmae made no shūden wa nanji desu ka?", "en": "What time is the last train to Shinjuku-gyoemmae?", "hear": "time"}], ll: [35.6888, 139.71], say: ["oshiete"], place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        ride: [{"ln": "DR", "from": "TDS", "to": "RG", "loop": true, "dir": "Next stop: Resort Gateway", "type": "¥300 — tap Suica.", "wrong": "", "min": 3, "exit": "Walk to JR Maihama Station"}, {"ln": "JE", "from": "JE07", "to": "JE01", "dir": "東京方面 (toward Tokyo)", "type": "Any train.", "wrong": "Next stop 新浦安 Shin-urayasu (JE08) = wrong way.", "min": 15, "exit": "Long walk → Marunouchi Line"}, {"ln": "M", "from": "M17", "to": "M10", "dir": "荻窪・方南町方面 (toward Ogikubo / Hōnanchō)", "type": "Every train.", "wrong": "Next stop 大手町 Ōtemachi = wrong way.", "min": 17, "exit": "Your hotel is 1 min from Exit 1"}],
        how: [
          "Monorail to Resort Gateway → Keiyo line to Tokyo → long walk → Marunouchi line to Shinjuku-gyoemmae (~1 h total).",
          "Quick costume change at the hotel.",
        ],
        snack: "Hungry? Ichiran Shinjuku (solo-booth tonkotsu ramen, open 24 h) is a 10-min walk. Fill in the order sheet, press the button, ramen appears.",
      },
      {
        t: "22:30", title: "Birthday drinks in Ni-chome 🎉", night: true, ask: [{"jp": "今日誕生日なんです！おすすめのお酒は？", "ro": "Kyō tanjōbi nan desu! Osusume no osake wa?", "en": "It's my birthday! What drink do you recommend?", "hear": "write"}], ll: [35.6908, 139.7079], say: ["tanjoubi", "kanpai", "taipu", "ogoru"], rx: "neon", place: "Eagle Tokyo, Shinjuku 2-chome",
        how: [
          "Start at Eagle Tokyo, then Bear Tokyo or KING TOKYO (go-gos + DJs).",
          "Birthday shot from a drag queen: Campy! Bar (1F Musashino Bldg, 2-13-10 Shinjuku), run by drag star Bourbonne. Open till 4 AM.",
          "Tell the bartender: “Kyō wa tanjōbi desu!” (It's my birthday today!) — then “Kanpai!” (Cheers!)",
          "Missed the last train? You're already home. 😌",
        ],
        spicy: "Birthday boy rules: free pass to flirt shamelessly 😏 — the birthday line is the best icebreaker you'll get all trip. Watch your drink, and never accept a drink you didn't see poured.",
      },
      {
        t: "24:30", title: "Birthday nightcap at 24 Kaikan 🎂🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei", "tanjoubi"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "A 2-minute walk from Eagle. Open 24/7.",
          "Prices go up after about 9 PM (roughly ¥2,500–3,900). Bring cash.",
          "Tomorrow starts at noon, so stay as long as you like.",
        ],
        spicy: "Birthday steam session. “今日誕生日なんです” (it's my birthday today) works here too 🎉",
      },
    ],
  },

  /* ---------------- DAY 3 ---------------- */
  {
    id: "d3", date: "2026-10-28", prep: ["Costume + ears again for Disneyland", "Link your Disneyland ticket in the Disney app; decide on Premier Access for Beauty and the Beast", "Charge phone, power bank and camera batteries; poncho in the bag", "Alarm ~6:15 AM — leave at 7:00"], rain: "Almost everything today is indoors: Animate, Sunshine City, Shibuya PARCO and Tower Records. Grab a ¥500 umbrella at any konbini for the walks between.", home: {"after": "21:30", "note": "Omoide Yokocho to your hotel is ~15 min on foot or 2 stops on the Marunouchi Line (M08 → M10). Disneyland tomorrow means a 6:15 AM alarm."}, dow: "Wed", title: "Pokémon, anime + ramen day", city: "Tokyo",
    theme: "poke", emoji: "⚡", deco: ["⚡", "🎌", "🍜", "🍣", "🦑", "🌸"],
    kicker: "Day 3 · Sleep in, then fandom",
    tagline: "Ramen in Ikebukuro, the world's biggest anime store, two Pokémon Centers, Splatoon + Ariana + AOT in Shibuya, conveyor sushi and yakitori.",
    sleep: "shinjuku", wx: { lat: 35.645, lon: 139.79 },
    phrases: ["yoyaku", "photoplease", "kirei", "hitotsu"],
    steps: [
      {
        t: "12:00", title: "Ramen brunch in Ikebukuro 🍜", ask: [{"jp": "全部のせでお願いします。", "ro": "Zenbu nose de onegai shimasu.", "en": "With all the toppings, please.", "hear": "yesno"}], ll: [35.7299, 139.7125], say: ["hitori", "oishii", "gochisousama"], pic: "ramen bowl close up chopsticks", rx: "classic", place: "Mutekiya, Ikebukuro",
        ride: [{"ln": "F", "from": "F13", "to": "F09", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Any train — all stop at Ikebukuro.", "wrong": "Next stop 北参道 Kita-sandō (F14) = wrong way.", "min": 10, "exit": "East Exit (東口)"}],
        how: [
          "Sleep in first. Then Fukutoshin Line from Shinjuku-sanchōme straight to Ikebukuro (~10 min).",
          "Ikebukuro is a ramen battleground. Mutekiya (無敵家), a few minutes from the East Exit, is the famous one: rich tonkotsu, open late, with a line that moves fast.",
          "Buy a ticket at the machine or order at the counter, then say “zenbu nose” for everything on top.",
        ],
        snack: "Ramen must-try: tonkotsu (pork bone). Later this trip you'll also get shoyu, miso and tsukemen.",
        photo: "Overhead shot of the bowl the second it lands, before you touch it.",
      },
      {
        t: "13:15", title: "Animate Ikebukuro: the anime mothership 🎌", ask: [{"jp": "ヒロアカのグッズは何階ですか？", "ro": "Hiroaka no guzzu wa nankai desu ka?", "en": "Which floor has My Hero Academia goods?", "hear": "kai"}], ll: [35.7311, 139.7171], say: ["kore", "menzei"], place: "Animate Ikebukuro",
        how: [
          "Walk ~5 min down Sunshine 60 Street. It's the world's biggest anime store, floor after floor of goods.",
          "Hunt MHA, Tokyo Ghoul and Attack on Titan goods: acrylic stands, can badges, clear files. Ask staff for a series with 「〇〇のグッズは何階ですか？」 (Which floor has ___ goods?).",
          "Bring your passport: tax-free at the register until Oct 31.",
        ],
        snack: "Taiyaki (fish-shaped waffle with sweet red bean) from a street stand on Sunshine 60 Street.",
      },
      {
        t: "14:30", title: "Pokémon Center Mega Tokyo ⚡", ask: [{"jp": "サンシャインシティはどっちですか？", "ro": "Sanshain Shiti wa dotchi desu ka?", "en": "Which way to Sunshine City?", "hear": "dir"}, {"jp": "免税はレジでできますか？", "ro": "Menzei wa reji de dekimasu ka?", "en": "Can I do tax-free at the register?", "hear": "yesno"}], ll: [35.729, 139.7193], say: ["menzei", "fukuro", "card"], pic: "Pokemon Center Mega Tokyo photo", rx: "reala", place: "Pokemon Center Mega Tokyo, Sunshine City",
        how: [
          "From Animate, walk ~5 min to Sunshine City.",
                    "Pokémon Center Mega Tokyo + Pikachu Sweets are on Alpa 2F. Check the official site in case timed entry is required.",
        ],
        tip: "Tax-free at the register until Oct 31: bring your passport and do the big haul (¥5,000+ per store).",
        snack: "Pikachu Sweets by Pokémon Café — walk-up takeout treats, no reservation.",
        photo: "With the big statues at the entrance, plush in hand.",
      },
      {
        t: "16:15", title: "Shibuya: Mewtwo + Pokémon Center + Nintendo Tokyo", quest: "🌸 Tower Records Shibuya (5 min walk): Ariana's “Tower Love!” petal posters + fan lottery (buy the Japanese edition CD), PLUS the Attack on Titan DJ-theme POP UP SHOP (until Nov 29).", ask: [{"jp": "ポケモンセンターは何階ですか？", "ro": "Pokemon Sentā wa nankai desu ka?", "en": "What floor is the Pokémon Center on?", "hear": "kai"}], ll: [35.6622, 139.6988], say: ["photoplease", "menzei"], pic: "Shibuya crossing walking photo men", rx: "classic", place: "Shibuya PARCO",
        ride: [{"ln": "F", "from": "F09", "to": "F16", "dir": "渋谷・横浜・元町・中華街方面 (toward Shibuya)", "type": "Any train — all stop at Shibuya.", "wrong": "Next stop 要町 Kanamechō = wrong way.", "min": 15, "exit": "Follow signs to Shibuya PARCO (~7 min walk)"}],
        how: [
          "Fukutoshin line from Ikebukuro straight to Shibuya (~15 min).",
          "Walk ~7 min to Shibuya PARCO; Pokémon Center Shibuya and Nintendo TOKYO are both on 6F. Nintendo TOKYO is your Splatoon spot: store-exclusive Splatoon merch (Splatoween runs in-game Oct 31 – Nov 2).",
          "Then Scramble Crossing at dusk (sunset ~4:50) — the neon comes on just as you finish shopping.",
        ],
        snack: "Early dinner: conveyor-belt sushi at Uobei (魚べい) in Dōgenzaka — order on the touch screen and plates zoom to you on a bullet-train track. ¥100-ish plates, a must-try.",
        photo: "Copy Mewtwo's pose next to its tank. At the Scramble, have someone shoot you walking toward the camera mid-crossing (Live Photo → Long Exposure blurs the crowd). Keep walking — guards stop people posing in the road this week.",
        tip: "Halloween week: Shibuya bans street drinking in the evenings and the crowds build fast. Shop, shoot, then head out by ~6.",
      },
      {
        t: "18:00", title: "Shibuya → Ni-chome", ll: [35.6896, 139.7006], say: ["hitori", "oshiete"], place: "Shinjuku Station",
        ride: [{"ln": "F", "from": "F16", "to": "F13", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Local, Express and Commuter Express all stop at Shinjuku-sanchōme.", "wrong": "Trains for 横浜 Yokohama / 元町・中華街 use the same platforms — next stop 代官山 Daikanyama = wrong way.", "min": 10, "exit": "Exits C5–C8 come up right at Ni-chome"}],
        how: [
          "Fukutoshin Line from Shibuya straight to Shinjuku-sanchōme (~10 min).",
          "Drop the Pokémon haul at the hotel on the way (it's 5 min from Ni-chome).",
        ],
        snack: "Hungry before Okamalt? Fūunji's tsukemen (dipping ramen) near Shinjuku South Exit: buy a ticket at the machine by the door, hand it over, wait for your seat.",
      },
      {
        t: "18:30", title: "Okamalt — Ni-chome's LGBTQ book café", night: true, ask: [{"jp": "オカマルトはどこですか？", "ro": "Okamaruto wa doko desu ka?", "en": "Where's Okamalt?", "hear": "dir"}], ll: [35.691, 139.707], say: ["gaymanga", "cover"], place: "Okamalt, 2-18-10 Shinjuku, Tokyo",
        how: [
          "From Shinjuku-sanchōme (Exits C5–C8), walk ~3 min to 2-18-10 Shinjuku (Shin-Chidorigai building, 2F). It closes around 8 PM.",
          "Around ¥1,500 for 90 minutes, with a drink and snacks.",
          "Open about 1–8 PM, closed Thursday to Saturday — so tonight is your Tokyo window. Listing info is older; confirm hours first.",
        ],
        spicy: "Shelves of vintage Barazoku (the magazine the word “bara” comes from), Tom of Finland art and gay culture books, run by a Ni-chome writer and drag legend.",
      },
      {
        t: "19:45", title: "Yakitori in Omoide Yokocho", ask: [{"jp": "一人、入れますか？", "ro": "Hitori, hairemasu ka?", "en": "Can one person get a seat?", "hear": "full"}, {"jp": "席料はいくらですか？", "ro": "Sekiryō wa ikura desu ka?", "en": "How much is the seat charge?", "hear": "money"}], ll: [35.6929, 139.6995], say: ["hitori", "hitotsu", "nama", "okaikei"], pic: "Omoide Yokocho night photo men", rx: "nostalgic", place: "Omoide Yokocho, Shinjuku",
        how: [
          "From Okamalt, walk ~15 min west along Shinjuku-dōri, or take the Marunouchi Line one stop, M09 → M08 (toward 荻窪 Ogikubo).",
          "Follow signs for the West Exit (西口); the alley is just north of the exit, along the tracks.",
          "Pick a stall with an empty stool and say “Hitori desu” (just one).",
        ],
        snack: "Order by pointing: negima (chicken + leek), tsukune (meatball), kawa (crispy skin). Say “tare” for the sweet glaze or “shio” for salt. A small seat charge (otōshi) with a mini appetizer is normal.",
        photo: "Walk toward the camera mid-alley glancing up at the lanterns, vertical, Night mode. Ask before shooting inside a stall.",
      },
      {
        t: "21:00", title: "Free night view: Tokyo Metropolitan Government Building 🌃", ask: [{"jp": "展望室の入口はどこですか？", "ro": "Tenbōshitsu no iriguchi wa doko desu ka?", "en": "Where's the observatory entrance?", "hear": "dir"}], ll: [35.6896, 139.6917], say: ["kirei", "photoplease"], pic: "Tokyo Metropolitan Government Building projection mapping night", rx: "neon", place: "Tokyo Metropolitan Government Building, Shinjuku",
        how: [
          "Walk ~10 min west from Omoide Yokocho through the Shinjuku skyscraper district.",
          "Free 45th-floor observatory (202 m), open until 22:00 — last entry 21:30. On a clear night you can see Skytree and Tokyo Tower.",
          "TOKYO Night & Light: free projection mapping on the building's facade, several shows each evening until 21:45 — catch one from the plaza before you go up.",
        ],
        photo: "Rest the X100VI on the window ledge (no flash, lens hood against the glass to kill reflections) for a sharp city-lights shot.",
      },
      {
        t: "22:30", title: "Optional: quick soak at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei", "kondomu2"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "From the TMG building, ~20 min on foot or a ¥1,000 taxi.",
          "Only if you're not wiped: the Disneyland alarm is 6:15 AM. Tomorrow night is the long Ueno sauna night anyway.",
        ],
        spicy: "Weeknight evenings are calmer: good for the sauna and the rooftop deck before it gets busy.",
      },
    ],
  },

  /* ---------------- DAY 4 ---------------- */
  {
    id: "d4", date: "2026-10-29", prep: ["Save your Shibuya Sky QR (sunset slot) in Trip → Tickets", "Optional bookings: Asakusa kimono rental, sushi class, Kirby Café / MHA Café cancellations", "Pick tomorrow's going-out outfit", "🎁 Family gifts start tomorrow: Kiddy Land (toys) at Omotesandō, BEAMS JAPAN (uncle's polos) on the way back — list in Trip → Merch", "Cash for the night: ¥20,000+ (small bars are cash-only)", "Sleep in — alarm optional"], rain: "Rainy Disneyland: Haunted Mansion, Enchanted Tale of Beauty and the Beast, Pooh's Hunny Hunt and Monsters, Inc. are indoors. Parades can be cancelled for rain — check the app.", home: {"after": "21:00", "note": "You're out of Disney by about 3:15 today. Tonight ends in Ueno: the Yamanote runs until about midnight, or sleep over at 24 Kaikan and take the first train."}, park: "tdl", dow: "Thu", title: "Tokyo Disneyland Halloween", city: "Tokyo Disneyland",
    theme: "spooky", emoji: "🎃", deco: ["🎃", "🏰", "🦇", "👻", "🍬", "🕸️"],
    kicker: "Day 4 · Spooky season, castle edition",
    tagline: "Villains, pumpkins and a castle at blue hour. Wear the costume one more time — it's allowed.",
    sleep: "shinjuku", wx: { lat: 35.633, lon: 139.880 },
    phrases: ["sumimasen", "photoplease", "kore", "oishii", "arigatou"],
    steps: [
      {
        t: "07:00", title: "Shinjuku → Maihama", ask: [{"jp": "ディズニーランドの入口はどっちですか？", "ro": "Dizunīrando no iriguchi wa dotchi desu ka?", "en": "Which way to the Disneyland entrance?", "hear": "dir"}], ll: [35.6346, 139.8808], say: ["norikae", "atatame"], place: "Tokyo Disneyland",
        ride: [{"ln": "M", "from": "M10", "to": "M17", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train.", "wrong": "Next stop 新宿三丁目 (M09) = wrong way.", "min": 17, "exit": "Follow the red/pink 京葉線 Keiyo Line signs (long walk)"}, {"ln": "JE", "from": "JE01", "to": "JE07", "dir": "Any train from the Keiyo platforms", "type": "Local and Rapid both stop at Maihama.", "wrong": "", "min": 15, "exit": "South Exit → Disneyland gate is a 5-min walk"}],
        how: [
          "Same as Tuesday: Marunouchi line from Shinjuku-gyoemmae to Tokyo (~20 min).",
          "Long walk to the Keiyo line → Maihama (~15 min).",
          "Exit South. Disneyland's gate is a 5-min walk — no monorail needed today.",
        ],
        snack: "Konbini onigiri + a canned coffee (Boss or Georgia) for the walk.",
      },
      {
        t: "08:30", title: "Haunted Mansion “Holiday Nightmare” first", say: ["photoplease"], pic: "Tokyo Disneyland Haunted Mansion Halloween costume photo", rx: "pastel", place: "Haunted Mansion, Tokyo Disneyland",
        how: [
          "Go straight to Haunted Mansion — it's the Nightmare Before Christmas overlay this season.",
          "Consider Premier Access for Enchanted Tale of Beauty and the Beast in the app.",
        ],
        photo: "Costume shot at the Haunted Mansion front gate: centered, slightly low angle, flash off for the moody look.",
      },
      {
        t: "13:00", title: "The Villains' Halloween parade", fixed: true, ask: [{"jp": "パレードは何時からですか？", "ro": "Parēdo wa nanji kara desu ka?", "en": "What time does the parade start?", "hear": "time"}, {"jp": "ここに座ってもいいですか？", "ro": "Koko ni suwatte mo ii desu ka?", "en": "Can I sit here?", "hear": "yesno"}], say: ["sumimasen", "hitotsu", "oishii"], place: "Tokyo Disneyland Parade Route",
        how: [
          "Check the parade time in the app.",
          "Claim a spot 30–45 min early. Japanese parade etiquette: sit on the ground (bring a plastic sheet or a bag to sit on), don't stand up front, and keep bags low.",
        ],
        snack: "Halloween menus: look for seasonal items in the app (pumpkin and purple everything), a Mickey churro, and a themed popcorn bucket — it doubles as a birthday-week souvenir.",
      },
      {
        t: "14:40", title: "Beauty and the Beast, round 2 🌹", fixed: true, ll: [35.6343, 139.8797], say: ["photoplease"], pic: "Tokyo Disneyland Cinderella Castle Halloween daytime photo", rx: "pastel", place: "Enchanted Tale of Beauty and the Beast, Tokyo Disneyland",
        how: [
          "Your Premier Access window is 2:40–3:40 PM. Scan the QR in the Disney app at the DPA entrance.",
          "You've done every Premier Access ride before noon, so this is the victory lap. Leave the park right after.",
        ],
        photo: "No blue hour at the castle today: grab a daytime castle shot on your way out. Tokyo Station lit up at night is tonight's big photo.",
      },
      {
        t: "15:20", title: "Maihama → Pokémon Center Tokyo Bay ⚡", ll: [35.6868, 139.9915], say: ["norikae"], place: "Pokémon Center Tokyo Bay, LaLaport TOKYO-BAY West Building 2F, Funabashi",
        ride: [{"ln": "JE", "from": "JE07", "to": "JE11", "dir": "蘇我・海浜幕張・南船橋方面 (toward Soga / Kaihin-Makuhari) — away from Tokyo", "type": "Keiyo Line trains toward 蘇我 Soga or 海浜幕張 Kaihin-Makuhari stop at Minami-Funabashi.", "wrong": "Trains marked 武蔵野線 Musashino Line or 西船橋 Nishi-Funabashi split off after Ichikawa-shiohama — don't board those. Next stop 葛西臨海公園 Kasai-rinkai-kōen = wrong way.", "min": 12, "exit": "South Exit (南口) → follow the signs to LaLaport, ~10 min walk"}],
        how: [
          "From the park gates walk back to JR Maihama, then 4 stops away from Tokyo to Minami-Funabashi (~12 min).",
          "LaLaport TOKYO-BAY is one of Japan's biggest malls. Head for the West Building (西館), 2F.",
        ],
      },
      {
        t: "15:45", title: "Pokémon Center Tokyo Bay ⚡", ask: [{"jp": "免税できますか？", "ro": "Menzei dekimasu ka?", "en": "Can I buy tax-free?", "hear": "yesno"}], ll: [35.6868, 139.9915], say: ["menzei", "kore", "fukuro"], pic: "Pokemon Center Tokyo Bay store", rx: "reala", place: "Pokémon Center Tokyo Bay, LaLaport TOKYO-BAY West Building 2F, Funabashi",
        how: [
          "Full-size Pokémon Center, open until 8 PM on weekdays. Usually calmer than the city stores.",
          "Ask about tax-free before you pay — the register system still runs until Saturday.",
          "Out by about 4:40 to make the next train back.",
        ],
      },
      {
        t: "16:45", title: "Minami-Funabashi → Tokyo Station 🚃", ll: [35.6795, 139.7685], say: ["norikae"], place: "Tokyo Character Street, First Avenue Tokyo Station B1",
        ride: [{"ln": "JE", "from": "JE11", "to": "JE01", "dir": "東京方面 (toward Tokyo)", "type": "Board a train whose sign says 東京 Tokyo.", "wrong": "Orange Musashino Line trains (武蔵野線, toward 西船橋 / 府中本町) don't go to Tokyo. Next stop 新習志野 Shin-Narashino = wrong way.", "min": 25, "exit": "Follow 八重洲口 Yaesu Exit signs. Tokyo Character Street is on B1, right outside the Yaesu-side gates"}],
        how: [
          "Keiyo Line all the way to the end, Tokyo (~25 min). You'll pass Maihama again.",
          "The Keiyo platforms are deep underground, so it's a long walk to the gates. Tap out at a Yaesu-side gate (八重洲口).",
        ],
      },
      {
        t: "17:30", title: "Tokyo Character Street 🎁", quest: "⭐ KIRBY CAFÉ PETIT: takeout Kirby sweets, no reservation needed.", ask: [{"jp": "免税できますか？", "ro": "Menzei dekimasu ka?", "en": "Can I buy tax-free?", "hear": "yesno"}], ll: [35.6795, 139.7685], say: ["menzei", "kore", "fukuro"], place: "Tokyo Character Street, First Avenue Tokyo Station B1",
        how: [
          "A whole underground street of character shops, open until 8:30 PM. Tax-free is still on until Saturday: ask before you pay.",
          "Pokémon Store Tokyo Station: small, but it has station-exclusive designs.",
          "🎁 TOMICA PLARAIL SHOP: a wall of ~700 Tomica cars and a big train diorama. The easiest place to shop for your nieces and nephews.",
          "🎁 Also here: Sanrio (store exclusives), Chiikawa Land, the ONE PIECE Mugiwara Store, plus Snoopy and Rilakkuma shops.",
        ],
        photo: "Night shot: walk out the Marunouchi side (丸の内中央口) for the 1914 red-brick Tokyo Station building lit up. Shoot it from across the plaza in front of the KITTE building.",
      },
      {
        t: "18:30", title: "Ueno: Ameyoko on the walk to dinner 🏮", ll: [35.7101, 139.7744], say: ["kore", "ikura"], pic: "Ameyoko Ueno night street photo", rx: "neon", place: "Ameyoko, Ueno, Tokyo",
        ride: [{"ln": "JYE", "from": "JY01", "to": "JY05", "dir": "上野・池袋方面 (toward Ueno / Ikebukuro) — or the light-blue Keihin-Tohoku Line toward 大宮 Ōmiya; both stop at Ueno", "type": "Every Yamanote train stops at all 4 stops.", "wrong": "Next stop 有楽町 Yūrakuchō (JY30) = wrong way.", "min": 8, "exit": "Shinobazu Exit (不忍口) → Ameyoko starts right across the street"}],
        how: [
          "Back through the gates and 4 stops north to Ueno (~8 min).",
          "Ameyoko (アメ横) runs under and beside the train tracks from Ueno to Okachimachi: snack stalls, sneaker shops, cheap Japanese snacks. Stalls start closing around 7–8 PM, so it's a quick stroll tonight.",
          "It ends right by Yakiniku Iwasaki, so just walk south to dinner.",
        ],
        snack: "Street-food stalls here: only stop at ones showing 4.0+ on Google Maps.",
        photo: "Shoot down the alley under the elevated tracks when a train passes overhead, neon signs on both sides.",
      },
      {
        t: "19:15", title: "Yakiniku in Ueno 🍖", ask: [{"jp": "一人ですが、大丈夫ですか？", "ro": "Hitori desu ga, daijōbu desu ka?", "en": "It's just me. Is that OK?", "hear": "yesno"}], ll: [35.7096, 139.7745], say: ["hitori", "oishii", "nama"], place: "Yakiniku Iwasaki, 2-8-2 Ueno, Taito, Tokyo",
        how: [
          "Yakiniku Iwasaki (2-8-2 Ueno, ~7 min walk south of Ueno Station toward Okachimachi): Google 4.8 from 2,300+ reviews, listed as open late into the night. Search “Yakiniku Iwasaki Ueno” in Google Maps.",
          "Backup: Wagyu Yakiniku USHIHACHI Kiwami Ueno (FUNDES Ueno 10F, right by the station): Google 4.6, open until 11 PM.",
          "Point at the menu photos. Start with tongue (タン) and kalbi (カルビ).",
        ],
        snack: "Wagyu kalbi, a beer and rice. You've earned it after a full Disney day.",
      },
      {
        t: "21:00", title: "Long night at 24 Kaikan Ueno 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.712, 139.779], say: ["shukuhaku", "kyukei", "kondomu2"], place: "24会館 上野 (24 Kaikan Ueno)",
        how: [
          "It's on Shōwa-dōri, a short walk from Ueno Station's east side. Search 24会館 上野 in Google Maps.",
          "Get there at 9 PM or later: that's when the ~¥2,800 overnight rate (up to 14 hours, cash) starts. English is spoken and the signs are in English too.",
          "Tonight's the one to go long: Friday starts at 10 AM, and Asakusa is 5 minutes away.",
          "Sleeping there? Ask for the overnight stay (宿泊). Trains restart around 5 AM, and Friday starts in Asakusa, 3 stops away on the Ginza Line.",
        ],
        spicy: "Thursday + post-Disney legs + nowhere to be until 10 AM = the long sauna night you asked for 😏",
      },
    ],
  },

  /* ---------------- DAY 5 ---------------- */
  {
    id: "d5", date: "2026-10-30", prep: ["Tomorrow is the LAST day of tax-free at the register: passport in your sling, ¥5,000+ per store", "Tomorrow is Akihabara + Nakano Broadway: bring cash for the card shops and ¥100 coins for gachapon", "Pokémon Café 7:15 PM: confirmation in Trip → Tickets; you leave the hotel at 6:25", "Halloween costume ready", "Look over your Trip → Merch list so the haul goes fast — the 🎁 family gift haul is at Don Quijote Akihabara, 1:30 PM", "Big night tonight — water before bed 😅 No alarm: Saturday starts at 11:30"], rain: "Shibuya Sky's open-air rooftop closes in heavy rain or strong wind (the indoor 46F deck stays open). Backup: the free Tokyo Metropolitan Government observatory in Shinjuku. Asakusa is fine with an umbrella — the Nakamise arcade is partly covered.", home: {"after": "23:00", "note": "Tokyo trains stop around midnight and restart ~5 AM. Ni-chome and Golden Gai are walking distance from your hotel."}, safe: {"title": "Easy Tokyo day + Shibuya sunset", "emoji": "🌆", "theme": "neon", "kicker": "Day 5 · Easy Tokyo day", "tagline": "Temples, Skytree, a Shibuya Sky sunset and a night out in Shinjuku.", "deco": ["🏮", "🗼", "🌆", "✨", "🍜", "🎌"]}, dow: "Fri", title: "Easy Tokyo day + the big night", city: "Tokyo",
    theme: "steamy", emoji: "💦", deco: ["💦", "🔥", "🍑", "🪩", "💋", "😈"],
    kicker: "Day 5 · Friday is for the boys",
    tagline: "Temples by day, Ni-chome by night. Hydrate, moisturize, and stay out till the trains restart.",
    sleep: "shinjuku", wx: { lat: 35.71, lon: 139.79 },
    phrases: ["hitori", "cover", "kanpai", "taipu", "kinniku", "hige", "odorou", "hotel", "kisu", "yametoku"],
    steps: [
      {
        t: "10:00", title: "Sleep in, then Asakusa", ask: [{"jp": "雷門はどっちですか？", "ro": "Kaminarimon wa dotchi desu ka?", "en": "Which way to Kaminarimon gate?", "hear": "dir"}], ll: [35.7106, 139.7975], say: ["norikae", "hitotsu"], place: "Senso-ji, Asakusa",
        ride: [{"ln": "M", "from": "M10", "to": "M13", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train.", "wrong": "Next stop 新宿三丁目 (M09) = wrong way.", "min": 8, "exit": "Cross the platform to the orange Ginza Line"}, {"ln": "G", "from": "G05", "to": "G19", "dir": "浅草方面 (toward Asakusa)", "type": "Every train. Asakusa is the last stop.", "wrong": "Next stop 青山一丁目 Aoyama-itchōme (G04) = wrong way.", "min": 25, "exit": "Exit 1 → Kaminarimon gate"}],
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Akasaka-mitsuke (~8 min).",
          "Cross the platform to the Ginza line (orange) and ride to the end: Asakusa (~25 min).",
          "Exit 1 → Kaminarimon gate is right there.",
        ],
        snack: "Asakusa Kagetsudo's giant melon pan (2-7-13 Asakusa; opens 10 AM and sells until it runs out, so go early): crispy outside, fluffy inside, then ningyō-yaki and age-manjū on Nakamise street. Eat beside the stall — eating while walking is frowned on here.",
        spicy: "Slept at 24 Kaikan Ueno? Skip the hotel route: Ginza Line G16 Ueno → G19 Asakusa (toward 浅草, 3 stops, ~5 min), Exit 1.",
      },
      {
        t: "11:00", title: "Senso-ji + Nakamise", ask: [{"jp": "予約なしで着物をレンタルできますか？", "ro": "Yoyaku nashi de kimono o rentaru dekimasu ka?", "en": "Can I rent a kimono without a reservation?", "hear": "yesno"}], ll: [35.7148, 139.7967], say: ["photook", "ikura"], pic: "Kaminarimon Asakusa men outfit photo", rx: "nostalgic", place: "Kaminarimon, Asakusa",
        how: [
          "Walk Nakamise street to the main hall.",
          "At the incense burner, waft a little smoke toward yourself for good health.",
          "Optional: rent a men's kimono nearby (~¥4,000 with dressing).",
        ],
        photo: "Under the giant red Kaminarimon lantern looking up, shot from low. From the temple grounds, line up the pagoda with Skytree behind it.",
        snack: "Lunch: tendon (tempura over rice) at Edomae Tendon Masaru (江戸前天丼 まさる, 1-32-2 Asakusa), the local favorite. Lunch only, 11:00–15:00, ~¥3,800, and it closes early when the day's fish sells out, so go before 1 PM. Check it shows 4.0+ on Google, Yelp and Apple Maps before you queue.",
      },
      {
        t: "13:30", title: "Skytree Town + Pokémon Center", quest: "⭐ Kirby Café + Kirby Café THE STORE are in Solamachi too. THE STORE is walk-in; the café needs a reservation.", ask: [{"jp": "ポケモンセンターは何階ですか？", "ro": "Pokemon Sentā wa nankai desu ka?", "en": "What floor is the Pokémon Center on?", "hear": "kai"}], ll: [35.7101, 139.8107], say: ["menzei", "fukuro"], pic: "Tokyo Skytree Sumida river photo", rx: "classic", place: "Tokyo Solamachi",
        ride: [{"ln": "TS", "from": "TS01", "to": "TS02", "dir": "北千住・東武動物公園方面 — Asakusa is the end, so any local", "type": "Local (普通) trains stop at Tokyo Skytree; limited expresses don't.", "min": 3, "exit": "Follow signs to Tokyo Solamachi"}],
        how: [
          "Walk ~20 min across the Sumida River (Azuma-bashi bridge) or ride the Tobu Skytree line 1 stop to Tokyo Skytree.",
          "Pokémon Center Skytree Town is inside Tokyo Solamachi (4F).",
        ],
        photo: "From Azuma-bashi bridge: Skytree + the golden Asahi building across the river.",
      },
      {
        t: "15:00", title: "Omotesando mirror entrance (on the way)", quest: "💥 My Hero Academia Café “WE ARE HERO HOLICS”: BOX cafe&space, Q Plaza Harajuku 3F (6-28-6 Jingūmae), through Dec 20. Book a slot at heroaca-cafe.ltr-online.com (¥715 reservation fee, comes with a hologram sticker).", ask: [{"jp": "鏡のエスカレーターはどこですか？", "ro": "Kagami no esukarētā wa doko desu ka?", "en": "Where's the mirror escalator?", "hear": "dir"}], ll: [35.6683, 139.7056], say: ["photoplease"], pic: "Tokyu Plaza Omotesando mirror entrance outfit", rx: "reala", place: "Tokyu Plaza Omotesando Omokado",
        ride: [{"ln": "Z", "from": "Z14", "to": "Z02", "dir": "渋谷・中央林間方面 (toward Shibuya / Chūō-rinkan)", "type": "Every train stops everywhere on the Hanzomon Line.", "wrong": "Next stop 曳舟 Hikifune = wrong way (that's the Tobu Line).", "min": 30, "exit": "Exit A2 → Tokyu Plaza Omotesando"}],
        how: [
          "From Oshiage (Skytree) take the Hanzōmon line straight to Omotesando (~30 min).",
          "Exit A2, then walk ~7 min up Omotesandō avenue toward Harajuku (you pass Kiddy Land on the way). The kaleidoscope mirror entrance is Tokyu Plaza Omokado, on the corner of Meiji-dōri (4-30-3 Jingūmae).",
          "Ahead of schedule? Takeshita Street (Harajuku's colorful crepe-and-fashion street) and Meiji Jingū shrine are ~10 min north. The shrine gates close at sunset.",
        ],
        photo: "Fit check: full-body shot in the mirror entrance from the bottom of the escalator. Then the free rooftop terrace upstairs.",
        snack: "Soufflé pancakes: A Happy Pancake Omotesandō (its branches sit around Google 4.1–4.2). Put your name down (20–30 min wait), then do the MHA café / mirror photos.",
      },
      {
        t: "15:30", title: "🎁 Kiddy Land: toys for the nieces + nephews", ask: [{"jp": "免税できますか？", "ro": "Menzei dekimasu ka?", "en": "Can I buy tax-free?", "hear": "yesno"}], ll: [35.6683, 139.7058], say: ["menzei", "kore", "fukuro"], place: "Kiddy Land Harajuku, 6-1-9 Jingumae, Tokyo",
        how: [
          "On Omotesandō avenue, ~3 min back toward Omotesandō Station from the mirror entrance. Open 11:00–20:00.",
          "5 floors: Tomica cars + Plarail trains (3F), Sanrio + Rilakkuma (4F), Disney (2F), Snoopy (B1).",
          "Tax-free over ¥5,000 — passport out, ask before they scan.",
          "If time: @cosme TOKYO by Harajuku Station (1-14-27 Jingūmae, 11:00–21:00) for skincare. Otherwise skincare is tomorrow in Akihabara.",
        ],
      },
      {
        t: "15:45", title: "👕 BEAMS Harajuku: Amekaji for you", ask: [{"jp": "もう一つ大きいサイズはありますか？", "ro": "Mō hitotsu ōkii saizu wa arimasu ka?", "en": "Do you have one size bigger?", "hear": "yesno"}, {"jp": "試着してもいいですか？", "ro": "Shichaku shite mo ii desu ka?", "en": "Can I try this on?", "hear": "yesno"}], ll: [35.6702, 139.7055], say: ["menzei", "kore"], place: "BEAMS Harajuku, 3-24-7 Jingumae, Tokyo",
        how: [
          "1F–2F, 3-24-7 Jingūmae, ~3 min from the mirror entrance. The flagship reopened in March 2026 for BEAMS' 50th: casual menswear plus Harajuku-only collabs.",
          "Look for: heavyweight boxy tees, open-collar shirts, relaxed straight denim, knit polos. Tops in 3L/XXL.",
          "Keep it to ~25 min: Shibuya Sky's sunset slot is at 4:15, one stop away.",
        ],
      },
      {
        t: "16:15", title: "Shibuya Sky at sunset", fixed: true, ask: [{"jp": "渋谷スカイのチケット売り場は何階ですか？", "ro": "Shibuya Sukai no chiketto uriba wa nankai desu ka?", "en": "What floor is the Shibuya Sky ticket counter?", "hear": "kai"}, {"jp": "ロッカーはどこですか？", "ro": "Rokkā wa doko desu ka?", "en": "Where are the lockers?", "hear": "dir"}], ll: [35.6585, 139.7023], say: ["yoyaku", "photoplease"], pic: "Shibuya Sky sunset silhouette men", rx: "velvia", place: "Shibuya Sky",
        ride: [{"ln": "Z", "from": "Z02", "to": "Z01", "dir": "渋谷・中央林間方面 (toward Shibuya)", "type": "Every train.", "wrong": "Next stop 青山一丁目 Aoyama-itchōme (Z03) = wrong way.", "min": 2, "exit": "Follow signs to Shibuya Scramble Square"}],
        how: [
          "Hanzōmon line 1 stop to Shibuya, follow signs to Shibuya Scramble Square.",
          "Ticket counter on 14F; the rooftop is 46F. Sunset ~4:50 PM.",
          "Bags, hats, scarves, umbrellas and selfie sticks go in the 46F lockers (¥100, refunded). Phones are fine, and your camera is allowed only with a neck or wrist strap — bring the X100VI strap.",
        ],
        photo: "Sky Edge glass corner at sunset as a silhouette (queue early). Lie in the Cloud Hammock looking up. Shoot straight down onto the crossing.",
        snack: "Dinner: tonkatsu at Tonkatsu Maisen Aoyama (Google 4.4 from 5,000+ reviews, Tripadvisor 4.5), one stop back on the Hanzōmon line at Omotesandō (Exit A2, ~5 min walk). Open until 9 PM, English menu. Solid fuel for the big night.",
      },
      {
        t: "18:45", title: "👕🎁 BEAMS JAPAN + Isetan Men's", ask: [{"jp": "免税でお願いします。", "ro": "Menzei de onegai shimasu.", "en": "Tax-free, please.", "hear": "yesno"}, {"jp": "もう一つ大きいサイズはありますか？", "ro": "Mō hitotsu ōkii saizu wa arimasu ka?", "en": "Do you have one size bigger?", "hear": "yesno"}], ll: [35.6904, 139.7036], say: ["menzei", "kore"], place: "BEAMS JAPAN, 3-32-6 Shinjuku, Tokyo",
        ride: [{"ln": "F", "from": "F15", "to": "F13", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Local, Express and Commuter Express all stop at Shinjuku-sanchōme.", "wrong": "Next stop 渋谷 Shibuya (F16) = wrong way.", "min": 10, "exit": "Walk ~5 min to the hotel"}],
        how: [
          "From Maisen (Omotesandō), walk ~8 min to Meiji-jingūmae Station, then the Fukutoshin Line 2 stops to Shinjuku-sanchōme (F15 → F13). Both stores close at 8 PM.",
          "BEAMS JAPAN (3-32-6 Shinjuku) 2F: a sukajan (the embroidered souvenir jacket born from US servicemen in Japan), made-in-Japan tees and denim — and your uncle's polos (LL ≈ US L). 1F has Japanese crafts if anyone else is still on your list.",
          "Isetan Men's (across the street): 8 floors of menswear and the best one-stop for work pieces — oxford button-downs, pleated wide trousers, an unstructured stretch blazer, knit polos. Central tax-free counter on site.",
          "Tax-free still works at the register today: passport out, ¥5,000+ per store.",
        ],
      },
      {
        t: "19:45", title: "Back to the hotel to glow up", ll: [35.6888, 139.71], pic: "hotel mirror fit check night out men", rx: "reala", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Walk ~10 min from Isetan to the hotel.",
          "Nap 30 min. Shower. Outfit on. Dinner is yakitori on the way to Golden Gai.",
        ],
        photo: "Fit check in the hotel mirror before you go out — the photo-dump opener.",
      },
      {
        t: "21:00", title: "Yakitori in Omoide Yokocho", ask: [{"jp": "一人、入れますか？", "ro": "Hitori, hairemasu ka?", "en": "Can one person get a seat?", "hear": "full"}, {"jp": "席料はいくらですか？", "ro": "Sekiryō wa ikura desu ka?", "en": "How much is the seat charge?", "hear": "money"}], ll: [35.6929, 139.6995], say: ["hitori", "hitotsu", "nama", "okaikei"], pic: "Omoide Yokocho night photo men", rx: "nostalgic", place: "Omoide Yokocho, Shinjuku",
        ride: [{"ln": "M", "from": "M10", "to": "M08", "dir": "荻窪方面 (toward Ogikubo)", "type": "Every train.", "wrong": "Next stop 四谷三丁目 Yotsuya-sanchōme (M11) = wrong way.", "min": 4, "exit": "West Exit (西口) → the alley is just north, along the tracks"}],
        how: [
          "From the hotel, Marunouchi Line Shinjuku-gyoemmae → Shinjuku (M10 → M08, toward 荻窪 Ogikubo, ~4 min), or walk ~20 min along Shinjuku-dōri.",
          "Follow signs for the West Exit (西口); the alley is just north of the exit, along the tracks.",
          "Before you sit, tap the stall in Google Maps and only go in at 4.0+. Then say “Hitori desu” (just one). Eat here before Golden Gai — it's a 7-min walk across the tracks.",
        ],
        snack: "Order by pointing: negima (chicken + leek), tsukune (meatball), kawa (crispy skin). Say “tare” for the sweet glaze or “shio” for salt. A small seat charge (otōshi) with a mini appetizer is normal.",
        photo: "Walk toward the camera mid-alley glancing up at the lanterns, vertical, Night mode. Ask before shooting inside a stall.",
      },
      {
        t: "22:00", title: "Golden Gai pre-game", ask: [{"jp": "外国人でも大丈夫ですか？チャージはいくら？", "ro": "Gaikokujin demo daijōbu desu ka? Chāji wa ikura?", "en": "Are foreigners OK? How much is the cover?", "hear": "full"}], ll: [35.694, 139.7048], say: ["gaikokujin", "cover", "nama"], pic: "Golden Gai night flash photo", rx: "neon", place: "Shinjuku Golden Gai",
        how: [
          "From Omoide Yokocho, walk ~7 min east through the Seibu-Shinjuku / Kabukichō side to Golden Gai.",
          "Many bars charge a cover and ban photos — pick one with an English sign out front.",
        ],
        photo: "Lantern alleys with direct flash ON (not Night mode) for the party-photo look. Shoot the alleys, never inside the bars.",
      },
      {
        t: "23:30", title: "The big night 🪩", fixed: true, night: true, ask: [{"jp": "イーグル・ブルーはどこですか？", "ro": "Īguru Burū wa doko desu ka?", "en": "Where's Eagle Tokyo Blue?", "hear": "dir"}], ll: [35.6902, 139.7085], say: ["taipu", "kinniku", "odorou", "hotel", "kisu", "yametoku"], rx: "neon", place: "Eagle Tokyo Blue, Shinjuku 2-chome",
        how: [
          "Eagle Tokyo Blue (hairy, beefy go-go dancers) or Bear Tokyo first (weekend DJs).",
          "✅ Confirmed on the clubs' own sites: AiSOTOPE LOUNGE “Akiba Night 51 · 23rd anniversary HALLOWEEN NIGHT” and ArcH “SHOWER CANDY” both start at 9 PM tonight.",
          "Go-go shows: Dragon Men's Dragon Master party has sets at 11 PM, 1 AM and 3 AM tonight (⚠️ check Dragon Men's Instagram for tonight's times). Tip in yen bills tucked into the waistband.",
          "After 1 AM: ArcH (SHOWER CANDY tonight) or AiSOTOPE Lounge for Akiba Night's 23rd-anniversary Halloween, a long-running anime/otaku gay night. Your MHA and AOT fandom fits right in.",
          "Clubs run till ~5 AM; trains restart around 5.",
          "Want it straight to the point? Deep Throat Men (3F Wakatsuki Bldg, Kabukichō) is a foreigner-friendly cruising bar with English-speaking staff, 5 min from Golden Gai.",
        ],
        spicy: "Friday is the main event — the bear-and-muscle crowd is out in force at Eagle Blue. Bring ¥20,000+ cash for small bars, and if the night ends at 24 Kaikan, wear your locker key the way you mean it 😉. Stay out of any bar a Kabukichō tout steers you to. Poppers and cannabis are illegal in Japan — don't carry or accept any.",
        snack: "The 4 AM move: konbini onigiri + Pocari Sweat on the walk home. Your Saturday self will thank you.",
      },
      {
        t: "28:00", title: "After-club crash at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["shukuhaku", "kondomu2"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "When Eagle Blue winds down, 24 Kaikan is a 2-minute walk.",
          "Ask for the overnight stay (宿泊): about 12–14 hours with a locker, robe and towels, so you can sleep there. Guys come straight from the clubs at this hour.",
          "Akihabara isn't until 11:30, and your phone lives in the locker. Ask the desk to wake you: “10時に起こしてください” (Jū-ji ni okoshite kudasai).",
        ],
        spicy: "The classic Ni-chome ending: the club crowd moves to the sauna at this hour 🔥",
      },
    ],
  },

  /* ---------------- DAY 6 ---------------- */
  {
    id: "d6", date: "2026-10-31", prep: ["📦 PACK THE SUITCASE BEFORE YOU GO OUT and hand it to the front desk to ship to your Osaka hotel (Yamato, ~¥2,500, arrives Nov 2)", "Waybill info ready: APA Hotel & Resort Osaka Umeda Eki Tower (address in Trip → Hotels), your name, delivery Nov 2", "Email the Osaka hotel that a suitcase is arriving for you", "Backpack for 1 Kyoto night: clothes, toiletries, chargers, passport (the Nintendo Museum checks ID)", "SmartEX: Shinagawa → Kyoto ~8:30 AM, seat E, Suica linked", "Last check on the Nintendo Museum ticket alert", "From midnight tax-free ends — keep receipts for anything you buy, for the Narita refund", "Alarm ~6:45 AM — check out by 7:30"], rain: "Akihabara's shops, Nakano Broadway and Takashimaya are all indoors — rain barely matters today.", home: {"after": "23:00", "note": "You're walking distance from your hotel in Ni-chome. Shinjuku streets stay busy all Halloween night."}, safe: {"tagline": "Merch haul by day, Pokémon Café dinner, then Halloween night in costume."}, dow: "Sat", title: "Akihabara, Nakano + Halloween", city: "Tokyo",
    theme: "ghost", emoji: "👻", deco: ["👻", "🎃", "⚡", "💜", "🍬", "🕯️"],
    kicker: "Day 6 · Ghost-type energy",
    tagline: "Anime, retro games and Pokémon cards by day, Pokémon Café dinner, then Ni-chome in costume until sunrise.",
    sleep: "shinjuku", wx: { lat: 35.69, lon: 139.71 },
    phrases: ["menzei", "fukuro", "card", "kore", "kanpai", "kakkoii", "line", "hima"],
    steps: [
      {
        t: "11:30", title: "Akihabara: anime, retro games + Pokémon cards 🎮", quest: "💥 MHA Chara Pop Store at Bandai Namco Cross Store (atre Akihabara, by the station) — until Jan 17.", ask: [{"jp": "ポケモンカードはありますか？", "ro": "Pokemon kādo wa arimasu ka?", "en": "Do you have Pokémon cards?", "hear": "yesno"}, {"jp": "免税はレジでできますか？", "ro": "Menzei wa reji de dekimasu ka?", "en": "Can I do tax-free at the register?", "hear": "yesno"}], ll: [35.6984, 139.7731], say: ["menzei", "kore", "ikura"], pic: "Akihabara electric town neon street", rx: "neon", place: "Akihabara Electric Town, Tokyo",
        ride: [{"ln": "JB", "from": "JB10", "to": "JB19", "dir": "千葉・津田沼・西船橋方面 (toward Chiba) — the YELLOW Chūō-Sōbu local, not the orange Chūō rapid", "type": "Every yellow local stops at Akihabara.", "wrong": "Next stop 大久保 Ōkubo (JB09) = wrong way. Orange trains (中央線快速) don't go to Akihabara.", "min": 18, "exit": "電気街口 Electric Town Exit"}],
        how: [
          "Walk ~10 min to JR Shinjuku, then the yellow Chūō-Sōbu local straight to Akihabara (~18 min).",
          "Start at Super Potato (open from 10 AM on weekends): retro-game heaven over several floors (Game Boy, N64, old Pokémon carts).",
          "Mandarake Complex: 8 floors of anime figures, manga and vintage toys. It opens at noon, so do it after Super Potato and the card shops.",
          "Radio Kaikan + the card shops along Chūō-dōri: Japanese Pokémon TCG singles and sealed packs. Check prices across a couple of shops.",
          "Akihabara Gachapon Kaikan: hundreds of capsule-toy machines — bring ¥100 coins.",
        ],
        tip: "TODAY is the last day of tax-free at the register: passport in your sling, ¥5,000+ per store. From Nov 1 you'd claim refunds at Narita instead.",
        snack: "Lunch: gyūkatsu at Gyūkatsu Motomura Akihabara — crispy rare beef cutlet you finish on your own hot stone. There's usually a line; it moves.",
        photo: "Chūō-dōri's wall of anime billboards: stand on the sidewalk by the Electric Town Exit and shoot up the street.",
      },
      {
        t: "13:30", title: "🎁 Family gift haul (last tax-free day)", ask: [{"jp": "免税でお願いします。", "ro": "Menzei de onegai shimasu.", "en": "Tax-free, please.", "hear": "yesno"}, {"jp": "母へのプレゼントです。おすすめは？", "ro": "Haha e no purezento desu. Osusume wa?", "en": "It's a gift for my mom. What do you recommend?", "hear": "none"}], ll: [35.6987, 139.7714], say: ["menzei", "kore", "fukuro"], place: "Don Quijote Akihabara, 4-3-3 Sotokanda, Tokyo",
        how: [
          "Don Quijote Akihabara (4-3-3 Sotokanda, open 24 h, ~3 min from the Electric Town Exit) has skincare, toys and Christmas lights under one roof — one tax-free checkout easily clears the ¥5,000 minimum. Say “Menzei de onegai shimasu” BEFORE they scan.",
          "Skincare, sister + sister-in-law: Hada Labo Gokujyun lotion, Biore UV Aqua Rich sunscreen, Melano CC vitamin-C serum, Lululun face-mask packs.",
          "Skincare, mom + grandma: Kosé Sekkisei lotion (the iconic blue bottle), Shiseido Elixir (anti-aging), a Japanese horse-oil cream or Shiseido Urea hand cream.",
          "Toys: Tomica cars and Plarail trains, Sylvanian Families, Pokémon plush, Kracie Popin' Cookin' DIY candy kits (very Japanese, kids love them), a kendama, plus gachapon capsules as stocking stuffers.",
          "Christmas lights for dad: battery or USB LED strings, or LED paper-lantern (chōchin) lights for a Japanese twist. Plug-in sets must say AC100–240V on the box — 100V-only ones aren't safe on US 120V.",
          "Bigger toy floor if Donki is too chaotic: Yodobashi Akiba (5 min east, across the tracks) has a huge toy floor and its own tax-free counter.",
        ],
        tip: "Tax-free skincare comes sealed in a bag: don't open it until you're home. Liquids go in the suitcase you ship tomorrow, not your carry-on.",
      },
      {
        t: "14:30", title: "Nakano Broadway: Mandarake heaven", quest: "🍑 Ask Mandarake for the gay manga section: ゲイ漫画のコーナーはありますか？", ask: [{"jp": "ゲイ漫画のコーナーはありますか？", "ro": "Gei manga no kōnā wa arimasu ka?", "en": "Is there a gay manga section?", "hear": "kai"}], ll: [35.7086, 139.6658], say: ["kore", "ikura", "menzei"], place: "Nakano Broadway, Tokyo",
        ride: [{"ln": "JB", "from": "JB19", "to": "JB07", "dir": "三鷹・中野方面 (toward Mitaka / Nakano) — yellow local", "type": "Every yellow local stops at Nakano.", "wrong": "Next stop 浅草橋 Asakusabashi = wrong way.", "min": 28, "exit": "北口 North Exit → Sun Mall arcade → Nakano Broadway"}],
        how: [
          "Stay on the yellow local the other way, all the way to Nakano (~28 min). It goes straight through Shinjuku.",
          "Walk through the Sun Mall arcade into Nakano Broadway: floors 2–4 are packed with Mandarake shops for vintage toys, anime cels, retro games and old Pokémon merch.",
          "Back to Shinjuku: 3 stops on the yellow local (JB07 → JB10, ~6 min), then walk to Pride House by 4:30.",
        ],
        photo: "The long covered Sun Mall arcade leading into Broadway — shoot down the middle for the vanishing point.",
      },
      {
        t: "16:30", title: "Pride House Tokyo Legacy 🏳️‍🌈", night: true, ask: [{"jp": "見学してもいいですか？", "ro": "Kengaku shite mo ii desu ka?", "en": "Is it OK to look around?", "hear": "yesno"}], ll: [35.6886, 139.7128], say: ["arigatou"], place: "Pride House Tokyo Legacy, 1-2-9 Shinjuku, Tokyo",
        how: [
          "Japan's first permanent LGBTQ center, at 1-2-9 Shinjuku: a few minutes' walk from your hotel.",
          "Open 1–7 PM, closed Wednesdays and Thursdays, so today works.",
          "Browse a library of about 1,400 LGBTQ books, chat with staff, and pick up flyers for tonight's parties.",
        ],
        spicy: "Ask the staff which Ni-chome Halloween parties they'd hit tonight. Local intel beats any guide.",
      },
      {
        t: "17:15", title: "Rest + costume on", ll: [35.6888, 139.71], place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        how: [
          "Walk ~5 min from Pride House to the hotel.",
          "Drop the merch, nap, costume on (wear it to the café for the Halloween photo).",
        ],
      },
      {
        t: "18:25", title: "Leave for Pokémon Café Tokyo", fixed: true, ask: [{"jp": "高島屋の新館はどっちですか？", "ro": "Takashimaya no shinkan wa dotchi desu ka?", "en": "Which way to Takashimaya's Annex building?", "hear": "dir"}], say: ["norikae", "doko"], place: "Nihonbashi Takashimaya S.C. Annex",
        ride: [{"ln": "M", "from": "M10", "to": "M16", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train.", "wrong": "Next stop 新宿三丁目 (M09) = wrong way.", "min": 14, "exit": "Follow the orange Ginza Line signs"}, {"ln": "G", "from": "G09", "to": "G11", "dir": "浅草方面 (toward Asakusa)", "type": "Every train.", "wrong": "Next stop 新橋 Shimbashi (G08) = wrong way.", "min": 4, "exit": "Exit B2 → straight into Takashimaya"}],
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Ginza (~17 min).",
          "Change to the Ginza line (orange) 2 stops to Nihombashi.",
          "Exit B2, then a short walk to Nihombashi Takashimaya S.C. East Building (東館): the café and Pokémon Center Tokyo DX are side by side on 5F.",
        ],
        tip: "Arrive by 7:00 — they want you 15 min early for the 7:15 PM table. Your reservation number is in your confirmation email.",
      },
      {
        t: "19:15", title: "Pokémon Café dinner 🍰", fixed: true, ask: [{"jp": "ポケモンセンターは何時までですか？", "ro": "Pokemon Sentā wa nanji made desu ka?", "en": "What time does the Pokémon Center close?", "hear": "time"}], ll: [35.681, 139.774], say: ["yoyaku", "oishii", "photook"], pic: "Pokemon Cafe Tokyo food photo", rx: "reala", place: "Pokemon Cafe Tokyo",
        how: [
          "Peek into Pokémon Center Tokyo DX next door before you sit — it may close before you finish.",
          "90-minute seating — order early so you have time for dessert.",
        ],
        snack: "Order a latte for random Pokémon latte art, plus one of the character plates — they're made to be photographed.",
        photo: "Overhead flat-lay of your food before the first bite, then a selfie with the costume + plate.",
      },
      {
        t: "21:00", title: "Tokyo Tower lit up 🗼", ask: [{"jp": "東京タワーへの行き方を教えてください。", "ro": "Tōkyō Tawā e no ikikata o oshiete kudasai.", "en": "How do I get to Tokyo Tower?", "hear": "dir"}], ll: [35.6586, 139.7454], say: ["photoplease", "kirei"], pic: "Tokyo Tower night Zojoji temple", rx: "neon", place: "Zojo-ji Temple, Minato, Tokyo",
        ride: [{"ln": "A", "from": "A13", "to": "A09", "dir": "西馬込・羽田空港方面 (toward Nishi-magome / Haneda)", "type": "Every train stops at Daimon.", "wrong": "Next stop 人形町 Ningyōchō = wrong way.", "min": 7, "exit": "Exit A6 → walk ~10 min past Zōjō-ji's big gate"}],
        how: [
          "Toei Asakusa Line from Nihombashi 4 stops to Daimon (~10 min), then walk ~10 min west past Zōjō-ji.",
          "The classic shot: Zōjō-ji temple's gate and roof with the glowing orange tower right behind it.",
          "You don't need to go up — the ground-level view is the iconic one.",
        ],
        photo: "Costume + tower: stand in Zōjō-ji's courtyard and have someone shoot you with the tower above your head.",
      },
      {
        t: "22:15", title: "Ni-chome Halloween 👻", night: true, ll: [35.6912, 139.7068], say: ["kakkoii", "line", "hima", "kanpai"], pic: "Shinjuku Halloween street costume night", rx: "neon", place: "Bar Blacknude, 2-15-12 Shinjuku",
        ride: [{"ln": "OE", "from": "E21", "to": "E27", "dir": "六本木・都庁前方面 (toward Roppongi / Tochōmae)", "type": "Every train.", "wrong": "Next stop 大門 Daimon (E20) = wrong way.", "min": 15, "exit": "Exit toward Shinjuku-dōri, then walk east ~15 min to Shinjuku 2-chōme"}],
        how: [
          "From Tokyo Tower: walk ~7 min north to Akabanebashi Station, Toei Ōedo Line to Shinjuku (E21 → E27, ~15 min), then walk ~15 min east along Shinjuku-dōri to Ni-chome. Easier in costume than it sounds — half the train will be dressed up too.",
          "Bar Blacknude's downstairs club (muscle staff, open from 7 PM tonight) → Arty Farty's HALLOWEEN PARTY 2026 (from 8 PM, very foreigner-friendly) → Dragon Men's Dragon Master go-go sets (11 PM, 1 AM, 3 AM) → Eagle Tokyo Blue for the bears → after midnight, AiSOTOPE (RUSHCRUISE The 80th Edition “Duality”, from 9 PM ✅) or ArcH (地味ハロ “Jimi-Halloween”, from 9 PM ✅: dress as something boring 😂). ⚠️ Blacknude, Arty Farty and Dragon Men times are from their social posts — check Instagram before you go.",
          "Drink inside the bars — parts of Shinjuku restrict street drinking tonight.",
        ],
        spicy: "The streets fill with costumes all night. Costume = instant conversation starter: compliment someone's look (“Kakkoii!” = you look cool!) and you're in. Ask before photographing anyone.",
        photo: "Street shots on Naka-dori with direct flash. Get a 5-second clip of the crowd — it'll be the Halloween reel opener.",
      },
      {
        t: "25:30", title: "Halloween nightcap at 24 Kaikan 👻🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "Only if the suitcase is already at the front desk. Sunday is the one early non-park morning (6:45 AM alarm for the Kyoto train).",
          "Lockers are small, so drop the costume at the hotel first (it's on the way).",
        ],
        spicy: "Halloween is the busiest night of the year in Ni-chome, and 24 Kaikan fills up after the streets do 👀",
      },
    ],
  },

  /* ---------------- DAY 7 ---------------- */
  {
    id: "d7", date: "2026-11-01", prep: ["Pack the backpack tonight — you leave it at the front desk at 6:30 AM checkout", "Comfy shoes for the 1.5-hour Fushimi Inari climb", "Tomorrow is all trains + buses (Inari → Kinkaku-ji → Arashiyama). Suica works on all of them; keep ~¥1,000 in coins as backup", "Pokémon Café Osaka 6:00 PM: confirmation in Trip → Tickets", "Optional: check the Kirby Café Osaka booking site for a cancellation", "Alarm ~6:00 AM"], rain: "Kyoto temples look amazing in the rain, but Ninenzaka's stone slopes get slippery. Covered options: Nishiki Market, Kyoto Takashimaya (Nintendo KYOTO) and Kyoto Station.", home: {"after": "21:30", "note": "Kyoto buses and the Karasuma subway stop around 23:30. From Kiyamachi it's a 15-min walk to Shijō Station, then 2 stops on the Karasuma subway — catch it before ~23:30."}, dow: "Sun", title: "To Kyoto + Nintendo Museum", city: "Kyoto",
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
        t: "07:30", title: "Check out + ship your suitcase", ask: [{"jp": "大阪のホテルに明日届きますか？", "ro": "Ōsaka no hoteru ni ashita todokimasu ka?", "en": "Will it arrive at my Osaka hotel tomorrow?", "hear": "deliver"}], ll: [35.6888, 139.71], say: ["checkout", "takkyubin"], place: "",
        how: [
          "At the front desk, ask to send your suitcase to the Osaka hotel by Yamato (takkyūbin): “Takkyūbin de Ōsaka no hoteru ni okuritai desu.” (I'd like to send this to my Osaka hotel by courier.)",
          "On the waybill: APA Hotel & Resort Osaka Umeda Eki Tower (address in the Hotels tab), your name, and delivery date Nov 2. ~¥2,500.",
          "Email the Osaka hotel that a bag is arriving for you.",
          "Keep a backpack with 1 night of stuff + your passport.",
        ],
      },
      {
        t: "07:45", title: "Shinjuku → Shinagawa", ask: [{"jp": "新幹線の乗り換え口はどこですか？", "ro": "Shinkansen no norikae-guchi wa doko desu ka?", "en": "Where's the transfer gate for the shinkansen?", "hear": "dir"}], ll: [35.6285, 139.7387], say: ["nanban", "hitotsu"], place: "Shinagawa Station",
        ride: [{"ln": "JY", "from": "JY17", "to": "JY25", "dir": "渋谷・品川方面 (toward Shibuya / Shinagawa)", "type": "All Yamanote trains stop everywhere.", "wrong": "Next stop 新大久保 Shin-Ōkubo (JY16) = wrong way.", "min": 20, "exit": "Blue 新幹線 Shinkansen signs → tap the SmartEX-linked Suica"}],
        how: [
          "Walk ~10 min to Shinjuku Station, JR Yamanote line (green) toward Shibuya/Shinagawa (~20 min).",
          "At Shinagawa follow the blue “Shinkansen” signs and tap the Suica linked to SmartEX at the gate.",
        ],
        snack: "Buy an ekiben (station bento) inside the shinkansen gates + a bottle of green tea. Eating on the shinkansen is totally normal.",
      },
      {
        t: "08:30", title: "Nozomi to Kyoto (seat E)", fixed: true, ask: [{"jp": "富士山はどっち側に見えますか？", "ro": "Fujisan wa dotchi-gawa ni miemasu ka?", "en": "Which side can I see Mt Fuji from?", "hear": "side"}], say: ["seki"], pic: "Mt Fuji from shinkansen window", rx: "classic", place: "Kyoto Station",
        ride: [{"ln": "TKN", "from": "SGW", "to": "KYT", "dir": "新大阪・博多・広島方面 (westbound) — your car number is on your SmartEX ticket", "type": "Nozomi stops only at these stations before Kyoto.", "wrong": "A train whose next stop is 東京 Tokyo = wrong way (that's the other platform).", "min": 135, "exit": "烏丸中央口 Karasuma Central Gate (north side)"}],
        how: [
          "Find your car number on the platform floor markings and line up there.",
          "Sit in seat E — the window side that faces Mt Fuji.",
          "Fuji shows up ~40–45 min after Shinagawa. Kyoto in 2 h 15.",
        ],
        photo: "Fuji through the window: press the lens (or phone) flat against the glass to kill reflections, and shoot a burst as it passes.",
      },
      {
        t: "10:45", title: "Drop your backpack at the hotel", ask: [{"jp": "チェックインの前に荷物を預けられますか？", "ro": "Chekku-in no mae ni nimotsu o azukeraremasu ka?", "en": "Can I leave my bag before check-in?", "hear": "yesno"}], ll: [34.987, 135.7593], say: ["azukeru"], place: "Hotel Hokke Club Kyoto",
        how: [
          "Exit via the Karasuma Central Gate (烏丸中央口, north side).",
          "Hotel Hokke Club is directly across the bus terminal, 1 min away.",
          "“Nimotsu o azukatte moraemasu ka?” (Can you hold my bags?) — they'll hold it till check-in.",
        ],
      },

      /* ---- Plan A: museum ---- */
      {
        only: "a", t: "11:30", title: "Kintetsu → Nintendo Museum", ask: [{"jp": "近鉄線の乗り場はどこですか？", "ro": "Kintetsu-sen no noriba wa doko desu ka?", "en": "Where do I board the Kintetsu Line?", "hear": "dir"}, {"jp": "この電車は小倉に止まりますか？", "ro": "Kono densha wa Ogura ni tomarimasu ka?", "en": "Does this train stop at Ogura?", "hear": "yesno"}], ll: [34.8956, 135.786], say: ["yoyaku", "konokippu"], pic: "Nintendo Museum Kyoto photo", rx: "reala", place: "Nintendo Museum, Uji",
        ride: [{"ln": "KB", "from": "B01", "to": "B10", "dir": "奈良・橿原神宮前・新田辺方面", "type": "⚠️ Only 普通 Local and 準急 Semi-Express stop at Ogura. 急行 Express and 特急 Limited Express skip it.", "min": 25, "exit": "Walk ~5 min to the Nintendo Museum"}],
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
        only: "a", t: "15:30", title: "Back → express bus to Kiyomizu-dera", ask: [{"jp": "清水寺行きのバス乗り場はどこですか？", "ro": "Kiyomizu-dera iki no basu noriba wa doko desu ka?", "en": "Where's the bus stop for Kiyomizu-dera?", "hear": "dir"}], say: ["norikae"], place: "Kiyomizu-dera",
        ride: [{"ln": "KB", "from": "B10", "to": "B01", "dir": "京都方面 (toward Kyoto)", "type": "Any train that stops at Ogura goes all the way to Kyoto.", "wrong": "Next stop 伊勢田 Iseda = wrong way.", "min": 25, "exit": "Out the north (Karasuma) side to the bus terminal"}],
        how: [
          "Kintetsu back to Kyoto Station.",
          "Today is Sunday, so the EX101 Rakuraku Kiyomizu-dera express bus runs (weekends/holidays): Kyoto Station bus terminal → Gojōzaka, ¥500, Suica OK. Pay as you board at the front.",
          "Backup: regular city bus 206 to Kiyomizu-michi (¥230). From either stop it's a ~10-min uphill walk. Kiyomizu-dera is open until 6 PM.",
        ],
      },

      /* ---- Plan B: no museum ---- */
      {
        only: "b", t: "11:30", title: "Nishiki Market lunch crawl", ask: [{"jp": "これ一つ。ここで食べてもいいですか？", "ro": "Kore hitotsu. Koko de tabete mo ii desu ka?", "en": "One of these. Can I eat it here?", "hear": "yesno"}], ll: [35.005, 135.7649], say: ["hitotsu", "ikura", "oishii"], pic: "Nishiki Market food photo", rx: "nostalgic", place: "Nishiki Market, Kyoto",
        ride: [{"ln": "KR", "from": "K11", "to": "K09", "dir": "国際会館方面 (toward Kokusaikaikan)", "type": "Every train.", "wrong": "Next stop 九条 Kujō (K12) = wrong way.", "min": 5, "exit": "Walk ~5 min east to Nishiki Market"}],
        how: [
          "Karasuma subway from Kyoto Station 2 stops to Shijō (~5 min).",
          "Walk ~5 min east to Nishiki Market.",
        ],
        snack: "Graze: tamagoyaki (sweet rolled omelet), tako-tamago (baby octopus with a quail egg inside), soy-milk doughnuts. Many stalls ask you to eat at the stall, not while walking.",
      },
      {
        only: "b", t: "13:30", title: "Nintendo KYOTO + Pokémon Center Kyoto", ask: [{"jp": "任天堂のお店は何階ですか？", "ro": "Nintendō no omise wa nankai desu ka?", "en": "What floor is the Nintendo store?", "hear": "kai"}], ll: [35.0034, 135.7688], say: ["card", "fukuro"], pic: "Nintendo Kyoto store photo", place: "Kyoto Takashimaya S.C.",
        how: [
          "Nintendo KYOTO is inside Kyoto Takashimaya S.C. (T8 building) at Shijō-Kawaramachi.",
          "⚡ Pokémon Center Kyoto is NOT in the same building: it's 12 min west along Shijō-dōri in SUINA Muromachi 2F (Hankyu Karasuma Station Exit 26, or Karasuma subway Shijō Station). Open 10:00–20:00.",
          "Then walk ~25 min east to Kiyomizu-dera (across the Kamo River, through Gion and up the slopes).",
        ],
        photo: "Grab a shot with the shop's big character displays — Kyoto is where Nintendo started as a playing-card company in 1889.",
      },

      {
        t: "16:00", title: "Kiyomizu → Ninenzaka → Yasaka Pagoda", ask: [{"jp": "二年坂はどっちですか？", "ro": "Ninenzaka wa dotchi desu ka?", "en": "Which way to Ninenzaka?", "hear": "dir"}], ll: [34.9949, 135.785], say: ["photoplease", "kirei"], pic: "Yasaka Pagoda men outfit photo", rx: "nostalgic", place: "Kiyomizu-dera",
        how: [
          "Kiyomizu-dera's wooden stage first, then walk downhill on Sannenzaka and Ninenzaka.",
          "Pass the Starbucks in a 100-year-old townhouse, and end at Yasaka Pagoda for blue hour (~5 PM).",
        ],
        photo: "Walk out through the Starbucks Ninenzaka noren curtain, drink in hand. Then the classic pagoda shot looking up the sloped lane, three-quarter turn — but don't block the street.",
        snack: "Matcha soft-serve and free yatsuhashi (cinnamon mochi) samples on the slopes — stand by the shop to eat.",
      },
      {
        t: "18:00", title: "Gion + Pontocho dinner", ask: [{"jp": "一人ですが、カウンター席はありますか？", "ro": "Hitori desu ga, kauntā-seki wa arimasu ka?", "en": "Just me — do you have a counter seat?", "hear": "full"}], ll: [35.0054, 135.771], say: ["hitori", "osusume", "gochisousama"], pic: "Pontocho alley night photo", rx: "nostalgic", place: "Pontocho Alley, Kyoto",
        how: [
          "Walk ~10 min north to Gion's Hanamikoji street (main street only — the private side alleys have a ¥10,000 photo fine).",
          "Plan A people: Nintendo KYOTO is 10 min west at Shijō-Kawaramachi (Takashimaya S.C.). Pokémon Center Kyoto is another 12 min west along Shijō-dōri in SUINA Muromachi 2F and closes at 8 PM, so go there first.",
          "Cross the Kamo River to Pontocho alley for dinner. Only sit down where Google Maps shows 4.0+.",
        ],
        photo: "Pontocho: walk toward the camera between the lanterns, or a flash close-up. Then a sitting shot on the Kamo River bank.",
        snack: "Pontocho can be pricey — check the menu board out front. Yakitori or kushiage counters are the friendliest for solo diners.",
        tip: "Never photograph geiko or maiko without asking.",
      },
      {
        t: "20:00", title: "Kiyamachi gay bars 🏳️‍🌈", night: true, ask: [{"jp": "アップルはどこですか？", "ro": "Appuru wa doko desu ka?", "en": "Where's Apple (the bar)?", "hear": "dir"}], ll: [35.0045, 135.7703], say: ["cover", "kanpai", "gaikokujin"], place: "Kiyamachi-dori, Kyoto",
        how: [
          "Kiyamachi runs right beside Pontocho, so just walk one street west.",
          "Apple Kyoto: men only, English-friendly, a mix of locals and travelers. Open 8 PM–4 AM (closed Mondays).",
          "Azure: men only, open nightly 8 PM–4 AM, with a table charge.",
          "bell KYOTO: lots of international travelers (closed Tuesdays).",
          "Leave by about 21:30 to get back to the hotel: Fushimi Inari starts at 6:30 AM.",
        ],
        spicy: "Kyoto's scene is tiny and chatty: one bar, a few drinks, and you'll know half the room 😉",
      },
      {
        t: "21:30", title: "Back to the hotel", ask: [{"jp": "四条駅はどっちですか？", "ro": "Shijō-eki wa dotchi desu ka?", "en": "Which way to Shijō Station?", "hear": "dir"}], ll: [34.987, 135.7593], say: ["norikae"], pic: "Kyoto Station staircase night photo", rx: "neon", place: "Hotel Hokke Club Kyoto",
        ride: [{"ln": "KR", "from": "K09", "to": "K11", "dir": "竹田方面 (toward Takeda)", "type": "Every train.", "wrong": "Next stop 烏丸御池 Karasuma-oike (K08) = wrong way.", "min": 5, "exit": "Karasuma Central Gate → hotel across the bus terminal"}],
        how: [
          "Walk ~15 min west along Shijō-dōri to Shijō Station → Karasuma subway 2 stops to Kyoto.",
          "Check in and grab your backpack.",
        ],
        photo: "The Kyoto Station grand staircase light-up, right by your hotel: sit halfway up the 171 steps while the LEDs change color, shot from the bottom.",
        snack: "Kyoto Ramen Kōji on Kyoto Station's 10F: eight ramen shops from around Japan under one roof.",
      },
      {
        t: "22:15", title: "Sauna Verde Club (check it out first) 🧖", night: true, ask: [{"jp": "ここはゲイサウナですか？", "ro": "Koko wa gei sauna desu ka?", "en": "Is this a gay sauna?", "hear": "yesno"}, {"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [34.9879, 135.7608], say: ["kyukei", "gaikokujin"], place: "Sauna Verde Club, 684 Higashishiokoji-cho, Kyoto",
        how: [
          "It's on the same street as your hotel, by Kyoto Station: Shiokoji-dori, east of Higashinotoin.",
          "One gay guide lists it as gay, but I couldn't confirm that, or the hours or price. Look in or ask at the desk before you pay.",
          "Keep it short: you check out at 6:30 AM for Fushimi Inari.",
        ],
        spicy: "Kyoto's scene is small. If this one isn't it, Osaka's Doyama-cho is tomorrow night.",
      },
    ],
  },

  /* ---------------- DAY 8 ---------------- */
  {
    id: "d8", date: "2026-11-02", prep: ["📦 Suitcase handed to the front desk for Narita? (Yamato needs 2 days)", "Waybill: Narita Airport Terminal 1, flight UA868 on Thu Nov 5, pick up at the Yamato counter", "Keep OUT of the suitcase: 2 nights of clothes, a warm layer for the Fuji sunrise, passport, meds, chargers", "Anything you'll claim a tax refund on goes in your backpack, not the shipped suitcase", "SmartEX: Shin-Osaka ⇄ Hiroshima tickets (~10:30 AM out, ~7:15 PM back)", "Check tomorrow's Miyajima tide times", "Alarm ~9:00 AM — out as late as you want tonight"], rain: "Fushimi Inari and the bamboo grove in light rain = moody, empty photos (careful on wet steps). Osaka's Shinsaibashi-suji shopping street is fully covered, and Dotonbori is a short dash from it.", home: {"after": "23:00", "note": "Your hotel is ~5 min from Doyama-cho — walk home."}, safe: {"tagline": "Dawn torii, real matcha, Pokémon Café Osaka, and Dotonbori's neon by night."}, dow: "Mon", title: "Inari, Golden Pavilion + bamboo → Osaka", city: "Kyoto → Osaka",
    theme: "torii", emoji: "🦊", deco: ["⛩️", "🦊", "🍵", "🐙", "🌆", "⚡"],
    kicker: "Day 8 · Thousand gates to neon canals",
    tagline: "Dawn torii, the Golden Pavilion, the bamboo grove, Osaka Castle, Pokémon Café Osaka, and a holiday-eve night in Doyama-cho.",
    sleep: "osaka", wx: { lat: 34.70, lon: 135.50 },
    phrases: ["azukeru", "ohayou", "osusume", "nama", "kanpai", "amerika", "nomou", "issho"],
    steps: [
      {
        t: "06:30", title: "Check out → Inari", ask: [{"jp": "奈良線は何番線ですか？", "ro": "Nara-sen wa nanbansen desu ka?", "en": "Which platform is the Nara Line?", "hear": "bansen"}, {"jp": "この電車は稲荷に止まりますか？", "ro": "Kono densha wa Inari ni tomarimasu ka?", "en": "Does this train stop at Inari?", "hear": "yesno"}], ll: [34.9671, 135.7727], say: ["checkout", "azukeru"], place: "Fushimi Inari Taisha",
        ride: [{"ln": "JD", "from": "D01", "to": "D03", "dir": "奈良・城陽方面 — platforms 8–10. Kyoto is the end of the Nara Line", "type": "普通 Local and みやこ路快速 Miyakoji Rapid stop at Inari.", "min": 5, "exit": "The shrine gate is right across the street"}],
        how: [
          "Leave your backpack at the front desk.",
          "JR Nara line from Kyoto Station (platforms 8–10) 2 stops to Inari (~5 min). Any local train stops there.",
          "The shrine gate is right across the street.",
        ],
        snack: "Konbini breakfast before you board.",
      },
      {
        t: "06:45", title: "Climb the gates to Yotsutsuji", ask: [{"jp": "四ツ辻まであと何分ですか？", "ro": "Yotsutsuji made ato nanpun desu ka?", "en": "How many more minutes to Yotsutsuji?", "hear": "min"}], ll: [34.9655, 135.781], say: ["ohayou", "photoplease"], pic: "Fushimi Inari men outfit photo", rx: "velvia", place: "Yotsutsuji Intersection, Fushimi Inari",
        how: [
          "Walk through the Senbon Torii (the double rows of gates) and keep climbing.",
          "Yotsutsuji viewpoint is ~45 min up; the crowds thin the higher you go.",
          "About 1.5 h round trip.",
        ],
        photo: "Walk away down the torii tunnel and look back over your shoulder. Shoot from chest height so the gates converge. White, black or denim pops against the orange.",
        snack: "On the way out: kitsune udon or inari sushi (fried tofu — the fox spirits' favorite) at the shops by the gate. Only sit down where Google Maps shows 4.0+.",
      },
      {
        t: "08:15", title: "Kinkaku-ji: the Golden Pavilion ✨", ask: [{"jp": "金閣寺行きのバスはどれですか？", "ro": "Kinkakuji iki no basu wa dore desu ka?", "en": "Which bus goes to Kinkaku-ji?", "hear": "none"}], ll: [35.0394, 135.7292], say: ["norikae", "photoplease", "kirei"],
        ride: [{"ln": "JD", "from": "D03", "to": "D01", "dir": "京都方面 (toward Kyoto)", "type": "Every train.", "wrong": "Next stop JR藤森 JR Fujinomori (D04) = wrong way.", "min": 5, "exit": "Follow the green subway signs (Karasuma Line)"}, {"ln": "KR", "from": "K11", "to": "K04", "dir": "国際会館方面 (toward Kokusaikaikan)", "type": "Every train.", "wrong": "Next stop 九条 Kujō = wrong way.", "min": 15, "exit": "Kitaōji Bus Terminal → blue boarding area, stop E → bus 205 (or 204 from stop G) to Kinkakuji-michi, ~15 min"}], pic: "Kinkakuji golden pavilion reflection pond", rx: "velvia", place: "Kinkaku-ji, Kyoto",
        how: [
          "Leave Inari by ~8:15: JR 2 stops back to Kyoto, Karasuma subway 7 stops to Kitaōji, then bus 205 from Kitaōji Bus Terminal stop E to Kinkakuji-michi (stop B), and a 5-min walk. ~50 min door to door, about ¥650, Suica all the way.",
          "Opens 9:00, ¥500. The path loops past the pavilion and its pond in about 40 minutes.",
        ],
        photo: "The classic: the gold pavilion mirrored in the pond from the first viewpoint by the entrance. Arrive at 9:00 sharp to get the railing before the tour groups.",
        snack: "Matcha soft serve near the exit — the gold-leaf version is very on-theme.",
      },
      {
        t: "10:15", title: "Arashiyama bamboo grove + Togetsukyō 🎋", ask: [{"jp": "竹林の小径はどっちですか？", "ro": "Chikurin no komichi wa dotchi desu ka?", "en": "Which way to the bamboo grove path?", "hear": "dir"}], ll: [35.0170, 135.6713], say: ["photoplease", "osusume", "kirei"], pic: "Arashiyama bamboo grove path men photo", rx: "classic", place: "Arashiyama Bamboo Grove, Kyoto",
        how: [
          "Bus 204 or 205 from Kinkakuji-michi 3 stops to Kitano-Hakubaichō, then the Randen tram (Kitano Line) → change at Katabiranotsuji → Arashiyama (~40 min total, Suica OK). The Randen Arashiyama stop is a 5-min walk from the bamboo grove.",
          "Walk the bamboo path (Chikurin no Komichi), then Tenryū-ji's garden (¥500) right next to it.",
          "Finish at Togetsukyō, the long wooden bridge over the river with forested mountains behind.",
        ],
        photo: "Stand still mid-path and shoot straight up through the bamboo, or walk away from the camera with the stalks framing you. Tall vertical frame.",
        snack: "Lunch in Arashiyama: soba or yudōfu (Kyoto's silky simmered tofu), then matcha sweets on the main street. Only sit down where Google Maps shows 4.0+.",
      },
      {
        t: "12:00", title: "Arashiyama → Kyoto → Osaka", ask: [{"jp": "大阪行きの新快速は何番線ですか？", "ro": "Ōsaka-iki no shinkaisoku wa nanbansen desu ka?", "en": "Which platform is the Special Rapid to Osaka?", "hear": "bansen"}], ll: [34.7025, 135.4959], say: ["nanban", "norikae"], place: "Osaka Station",
        ride: [{"ln": "SAG", "from": "E08", "to": "E01", "dir": "京都方面 (toward Kyoto)", "type": "Every train stops at Kyoto (the end of the line).", "wrong": "Next stop 保津峡 Hozukyō = wrong way.", "min": 16, "exit": "Grab your backpack at the hotel (Karasuma side), then back into JR Kyoto"}, {"ln": "JA", "from": "A31", "to": "A47", "dir": "大阪・神戸・姫路方面 (westbound) — look for 新快速 Special Rapid", "type": "Special Rapid only stops at these 4 stations. Local and Rapid also work, just slower.", "wrong": "Next stop 山科 Yamashina = wrong way (eastbound).", "min": 30, "exit": "Midosuji South Exit → walk ~8 min to the hotel"}],
        how: [
          "JR Sagano Line from Saga-Arashiyama (8 min walk from the bamboo grove) to Kyoto; grab your backpack at the hotel.",
          "JR Special Rapid (新快速) from Kyoto to Osaka (~30 min).",
        ],
        tip: "Osaka switch: stand on the RIGHT side of escalators here (the opposite of Tokyo).",
      },
      {
        t: "13:45", title: "Drop your bag in Umeda", quest: "💥 MHA × Umeda Sky Building (Oct 30–Nov 30): collab ticket ¥2,800 incl. the 40F observatory, 2 random stickers + a stamp rally for a glass magnet, 9:30 AM–10:30 PM (last entry 10 PM). 💥 MHA Café “WE ARE HERO HOLICS”: BOX cafe&space HEP FIVE 7F (through Dec 6), book at heroaca-cafe.ltr-online.com. 🍄 Nintendo OSAKA + ⚡ Pokémon Center Osaka are both on Daimaru Umeda 13F.", ask: [{"jp": "私のスーツケースは届いていますか？", "ro": "Watashi no sūtsukēsu wa todoite imasu ka?", "en": "Has my suitcase arrived?", "hear": "yesno"}], ll: [34.7022, 135.5018], say: ["azukeru", "checkin"], pic: "HEP FIVE ferris wheel night", rx: "neon", place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        how: [
          "From JR Osaka, Midosuji South Exit, walk ~8 min to the hotel.",
          "Your suitcase should be waiting. Check-in is from 3 PM.",
          "Repack it for the flight now and hand it back to the front desk for Yamato to Narita (flight UA868, Thu Nov 5, Terminal 1, ~¥3,300). Then tonight and tomorrow morning are free.",
          "⚡ Before the castle: Pokémon Center Osaka (the original, not the DX) is on Daimaru Umeda 13F, right on top of JR Osaka Station and ~5 min from the hotel. Nintendo OSAKA is on the same floor. Give it 30 minutes.",
          "Then straight to Osaka Castle while it's light out.",
        ],
        photo: "HEP FIVE's red Ferris wheel on the mall roof, shot from the street below (better after dark).",
      },
      {
        t: "15:00", title: "Osaka Castle 🏯", ask: [{"jp": "天守閣はどっちですか？", "ro": "Tenshukaku wa dotchi desu ka?", "en": "Which way is the castle tower?", "hear": "dir"}], ll: [34.6873, 135.5262], say: ["photoplease", "kirei"], pic: "Osaka Castle autumn moat photo", rx: "velvia", place: "Osaka Castle Main Tower",
        ride: [{"ln": "OT", "from": "T20", "to": "T23", "dir": "八尾南方面 (toward Yaominami)", "type": "Every train.", "wrong": "Next stop 中崎町 Nakazakichō = wrong way.", "min": 6, "exit": "Exit 9 → ~15 min walk through the park to the main tower"}],
        how: [
          "Tanimachi Line from Higashi-Umeda (5 min walk from your hotel) to Tanimachi 4-chōme.",
          "Main tower: 9:00–18:00, last entry 17:30, ¥1,200. Museum inside, rooftop-style viewing deck on the 8th floor.",
          "Leave by 16:15 for Amerikamura: Chūō Line from Tanimachi 4-chōme to Hommachi (C18 → C16), then the Midosuji Line 1 stop to Shinsaibashi (~20 min).",
        ],
        photo: "Shoot the tower across the stone walls and moat from the Gokuraku-bashi bridge — gold trim, white walls, autumn leaves.",
      },
      {
        t: "16:30", title: "👕 Amerikamura: American vintage in US sizes", ask: [{"jp": "試着してもいいですか？", "ro": "Shichaku shite mo ii desu ka?", "en": "Can I try this on?", "hear": "yesno"}], ll: [35.6719, 135.4985], say: ["kore", "ikura"], pic: "Amerikamura Osaka street", rx: "classic", place: "Amerikamura (America-mura), Osaka",
        ride: [{"ln": "OC", "from": "C18", "to": "C16", "dir": "本町・コスモスクエア方面 (toward Hommachi / Cosmosquare)", "type": "Every train.", "wrong": "Next stop 森ノ宮 Morinomiya (C19) = wrong way.", "min": 5, "exit": "Transfer to the red Midosuji Line"}, {"ln": "OM", "from": "M18", "to": "M19", "dir": "なかもず・天王寺方面 (toward Nakamozu / Tennōji)", "type": "Every train.", "wrong": "Next stop 淀屋橋 Yodoyabashi (M17) = wrong way.", "min": 2, "exit": "Daimaru is connected to the station"}],
        how: [
          "Chūō Line to Hommachi, Midosuji Line 1 stop to Shinsaibashi, then walk ~5 min west into Amerikamura (“America Village”).",
          "Vintage Mecca (2-13-13 Nishi-Shinsaibashi, 1–7 PM, closed Wed): 30s–60s American denim, shirts and military pants.",
          "Grizzly (2-12-14 Nishi-Shinsaibashi by Triangle Park, 12–7:30 PM): Ralph Lauren and American brands.",
          "It's American stock, so US sizes — no 3L guessing. Head to Daimaru by 5:40 for the café.",
        ],
        photo: "Triangle Park (三角公園) is the heart of Amerikamura — street shots with the murals.",
      },
      {
        t: "17:45", title: "Pokémon Café Osaka + Pokémon Center Osaka DX", fixed: true, quest: "⭐ Kirby Café Osaka is in this same Daimaru Shinsaibashi building. Reservations sell out fast — check its booking site for a cancellation.", ask: [{"jp": "ポケモンカフェは何階ですか？", "ro": "Pokemon Kafe wa nankai desu ka?", "en": "What floor is the Pokémon Café?", "hear": "kai"}], ll: [34.6731, 135.5012], say: ["yoyaku", "oishii"], pic: "Pokemon Cafe Osaka food photo", rx: "reala", place: "Daimaru Shinsaibashi",
        how: [
          "Walk ~5 min east from Amerikamura to Daimaru Shinsaibashi (Main Building).",
          "Pokémon Center Osaka DX and the café are on 9F.",
          "Check in at Pokémon Café Osaka by 5:50 PM for your 6:00 table (reservation in your email).",
          "Shop Pokémon Center Osaka DX after the café — it's open until 8 PM.",
        ],
        snack: "Café time: character plates + a latte. Try a different dish than Tokyo for the comparison post.",
      },
      {
        t: "19:45", title: "Dotonbori neon", ask: [{"jp": "グリコの看板はどっちですか？", "ro": "Guriko no kanban wa dotchi desu ka?", "en": "Which way to the Glico sign?", "hear": "dir"}], ll: [34.6687, 135.5013], say: ["hitotsu", "oishii"], pic: "Glico pose Dotonbori men", rx: "neon", place: "Glico Sign, Dotonbori",
        how: [
          "Walk ~5 min south down Midosuji/Shinsaibashi-suji to Ebisubashi bridge.",
          "Stroll the canal both ways.",
        ],
        photo: "The Glico runner pose: arms up in a V, one knee raised, sign behind you. Everyone does it — that's the point. Direct flash for the night look.",
        snack: "Takoyaki at Wanaka Dōtonbori (1-6-7 Dōtonbori, Google 4.2, open until 9 PM). Blow on it — the inside is lava). Kushikatsu rule: never double-dip in the shared sauce.",
      },
      {
        t: "23:00", title: "Doyama-cho holiday-eve crawl", night: true, ask: [{"jp": "イーグル大阪はどこですか？", "ro": "Īguru Ōsaka wa doko desu ka?", "en": "Where's Eagle Osaka?", "hear": "dir"}], ll: [34.7048, 135.504], say: ["amerika", "nomou", "issho", "gaikokujin"], rx: "neon", place: "Doyama-cho, Kita-ku, Osaka",
        ride: [{"ln": "OM", "from": "M19", "to": "M16", "dir": "千里中央・新大阪方面 (toward Senri-Chūō / Shin-Osaka)", "type": "Every train.", "wrong": "Next stop なんば Namba (M20) = wrong way.", "min": 6, "exit": "Doyama-cho is ~5 min from Umeda"}],
        how: [
          "Midosuji line back to Umeda; Doyama-cho is ~5 min from your hotel.",
          "Eagle Osaka (free entry Mon–Thu, cashless) → Grand Slam (small, international) → Explosion (main club; check @explosion_osaka).",
          "Bear Plus / Dungaree / BULL for bear-and-muscle bars — check Instagram that they're open.",
          "Daddies: Kuro (OK Bldg, 16-6 Doyama), Osaka's oldest gay bar, with a mostly mature Japanese crowd. Foreigners welcome; the sign is only in Japanese.",
          "Drag: Village (2F East Street Bldg, 10-3 Doyama) does drag shows, cabaret and karaoke nightly, 8 PM–5 AM.",
        ],
        spicy: "Tomorrow's a holiday, so Osaka's out tonight. Osaka guys are famously chattier than Tokyo — say hi first. Your hotel is a 5-minute stumble away 😉",
      },
      {
        t: "25:30", title: "Daikichi — Osaka's gay sauna 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [34.7046, 135.5026], say: ["shukuhaku", "gaikokujin"], place: "Daikichi, 12-12 Doyamacho, Kita-ku, Osaka",
        how: [
          "It's in the middle of Doyama-cho (12-12 Doyamacho), about 5 minutes from your hotel.",
          "Open 24/7. A short stay is about ¥2,000–2,500, overnight about ¥2,500–3,000, with private rooms extra. Cash.",
          "Several floors: sauna, steam, baths, a dark room and cabins. Age limit is under 50, and ID may be checked, so bring your passport.",
          "Your suitcase is already with the front desk and tomorrow's train isn't until 10:30, so stay out.",
        ],
        spicy: "Mostly local guys. Osaka guys are chattier than Tokyo guys, so a smile and “はじめまして” go a long way.",
      },
    ],
  },

  /* ---------------- DAY 9 ---------------- */
  {
    id: "d9", date: "2026-11-03", prep: ["Fuji hotel booked? Add it in Trip → Hotels (edit Fuji hotel)", "Tickets: Hikari (NOT Nozomi) Shin-Osaka → Mishima ~10:30, seat E + the Mishima → Kawaguchiko bus QR", "Check the Kawaguchiko live cam and forecast — flip the cloudy-Fuji plan only if you want to", "Warm layer at the top of the backpack", "Check out by ~9:30 AM"], rain: "The Miyajima ferry runs in rain, and the torii looks dramatic in mist. If it pours: spend longer indoors at the Hiroshima Peace Memorial Museum and Okonomimura.", home: {"after": "20:00", "note": "Check the last shinkansen from Hiroshima back to Shin-Osaka in SmartEX and don't cut it close — it's the only way home tonight."}, dow: "Tue", title: "Hiroshima + Miyajima", city: "Hiroshima",
    theme: "sea", emoji: "🦌", deco: ["🦌", "🌊", "⛩️", "🍁", "🕊️", "🦪"],
    kicker: "Day 9 · Culture Day holiday",
    tagline: "A floating torii, wild deer, grilled oysters, and a quiet hour of remembrance at the Peace Park.",
    sleep: "osaka", wx: { lat: 34.296, lon: 132.32 },
    phrases: ["takkyubin", "konokippu", "doko", "oishii", "arigatou"],
    steps: [
      {
        t: "10:00", title: "Osaka → Hiroshima", ask: [{"jp": "広島行きの新幹線は何番線ですか？", "ro": "Hiroshima-iki no shinkansen wa nanbansen desu ka?", "en": "Which platform for the shinkansen to Hiroshima?", "hear": "bansen"}], say: ["nanban", "seki"], place: "Hiroshima Station",
        ride: [{"ln": "JA", "from": "A47", "to": "A46", "dir": "京都方面 (toward Kyoto) — JR Kyoto Line platforms", "type": "Any train stops at Shin-Osaka.", "wrong": "Next stop 塚本 Tsukamoto = wrong way (JR Kobe Line).", "min": 4, "exit": "Follow blue 新幹線 signs"}, {"ln": "SYS", "from": "SHO", "to": "HIJ", "dir": "博多・広島方面 (westbound)", "type": "Every Nozomi stops at Hiroshima.", "min": 85, "exit": "Follow signs to the JR Sanyo Line for Miyajima"}],
        how: [
          "JR Kyoto line from Osaka 1 stop to Shin-Osaka (~4 min).",
          "~10:30 AM Nozomi to Hiroshima (~1 h 25) — tap the Suica linked to SmartEX.",
        ],
        snack: "Shin-Osaka ekiben: 551 Hōrai pork buns (Osaka's famous butaman) for the ride.",
      },
      {
        t: "12:15", title: "To Miyajima", ask: [{"jp": "JRの宮島行きフェリーはどこですか？", "ro": "JR no Miyajima-iki ferī wa doko desu ka?", "en": "Where's the JR ferry to Miyajima?", "hear": "dir"}], ll: [34.3112, 132.3036], say: ["konokippu"], pic: "Miyajima ferry torii view", rx: "velvia", place: "Miyajimaguchi Ferry Terminal",
        ride: [{"ln": "SL", "from": "HIR", "to": "MYJ", "dir": "岩国・大竹・南岩国方面 (westbound)", "type": "Local (普通) stops everywhere; Rapid also stops at Miyajimaguchi.", "wrong": "白市 Shiraichi / 西条 Saijō / 三原 Mihara on the sign, or next stop 天神川 Tenjingawa = wrong way.", "min": 27, "exit": "Walk 3 min to the JR ferry pier"}],
        how: [
          "JR Sanyo line (local toward Iwakuni) from Hiroshima to Miyajimaguchi (~30 min).",
          "Walk 3 min to the JR ferry pier — Suica works. ~10 min crossing.",
          "A ¥100 Miyajima visitor tax is collected with your ferry fare.",
        ],
        photo: "Stand on deck: the JR ferry swings close to the floating torii on the way over.",
      },
      {
        t: "13:00", title: "Itsukushima Shrine + the deer", ask: [{"jp": "今日の満潮は何時ですか？", "ro": "Kyō no manchō wa nanji desu ka?", "en": "What time is high tide today?", "hear": "time"}], ll: [34.296, 132.3198], say: ["photoplease", "hitotsu", "oishii"], pic: "Miyajima torii men photo", rx: "velvia", place: "Itsukushima Shrine",
        how: [
          "Check today's tide table: the torii “floats” near high tide; at low tide you can walk out to it.",
          "Walk the shrine's corridors over the water.",
          "Deer roam free — don't feed them (it's banned here) and keep maps and paper out of reach. They will eat them.",
        ],
        photo: "“Pinch” the torii with forced perspective from the beach, or sit on the shore with the torii behind you and a deer wandering in.",
        snack: "Grilled oysters (yaki-gaki) on Omotesando shopping street, momiji manjū (try the deep-fried age-momiji), and anago-meshi (conger-eel rice) — a Miyajima classic. Only sit down where Google Maps shows 4.0+.",
        tip: "It's a national holiday — expect crowds. Eat early.",
      },
      {
        t: "16:15", title: "Peace Memorial Park", ask: [{"jp": "原爆ドーム前に行きますか？", "ro": "Genbaku Dōmu-mae ni ikimasu ka?", "en": "Does this go to Genbaku-Dōmu-mae?", "hear": "yesno"}], ll: [34.3955, 132.4536], say: ["norikae"], pic: "Atomic Bomb Dome river photo black and white", rx: "acros", place: "Atomic Bomb Dome, Hiroshima",
        ride: [{"ln": "SL", "from": "MYJ", "to": "HIR", "dir": "広島・白市・西条方面 (toward Hiroshima)", "type": "Any train.", "wrong": "Next stop 前空 Maezora = wrong way.", "min": 27, "exit": "Streetcar to Genbaku-Dōmu-mae"}],
        how: [
          "Ferry back → JR to Hiroshima Station (~30 min).",
          "Streetcar (Hiroden) line 2 or 6 from the Hiroshima Station stop to Genbaku-Dōmu-mae (~15 min). Have coins ready in case your IC card isn't accepted.",
          "Walk the park to the Cenotaph and the Children's Peace Monument.",
          "🏛️ Strongly recommended: the Peace Memorial Museum (¥200, at the south end of the park). Regular entry is until 5:30 PM in November; after that you need an online reservation. Give it 45–60 minutes, then go straight to Pokémon Center and dinner.",
          "⚡ On your way to dinner: Pokémon Center Hiroshima is in Sogo Hiroshima, ~5 min east of the Atomic Bomb Dome across the river at Kamiyachō. Open daily. A quick 20-minute stop, then the streetcar to dinner.",
        ],
        photo: "A memorial: photograph the dome across the Motoyasu River. No smiling or playful poses here.",
        tip: "Keep your voice low. Many visitors leave paper cranes at the Children's Peace Monument.",
      },
      {
        t: "17:30", title: "Hiroshima okonomiyaki", ask: [{"jp": "一人ですが、座れますか？", "ro": "Hitori desu ga, suwaremasu ka?", "en": "Just me — can I sit?", "hear": "full"}], ll: [34.3918, 132.4659], say: ["hitori", "osusume", "gochisousama"], pic: "Hiroshima okonomiyaki griddle", rx: "reala", place: "Yagenbori Hassho, 10-6 Yagenbori, Naka-ku, Hiroshima",
        how: [
          "Yagenbori Hassho (薬研堀 八昌): Google 4.2 from 1,700+ reviews, opens at 4 PM and Tuesday is open. A queue builds fast, so get in line by 5:30. From Kamiyachō-higashi, ride any eastbound streetcar 3 stops to Ebisu-chō, then walk ~5 min south (or walk ~20 min from Peace Park).",
          "Today is a national holiday, so hours can shift. If it's closed, Nagataya by Peace Park (Google 4.4) is normally closed Tuesdays but may open for the holiday. Check Google Maps.",
          "Leave by 18:35 for your 19:15 shinkansen: streetcar from Ebisu-chō to Hiroshima Station (~10 min), then the shinkansen gates.",
          "Sit at the counter and watch them build it.",
        ],
        snack: "Hiroshima-style okonomiyaki is layered with noodles (soba or udon) — order “soba-iri” with an egg on top. Eat it straight off the griddle with the little spatula.",
      },
      {
        t: "19:15", title: "Shinkansen back to Osaka", fixed: true, place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        ride: [{"ln": "SYS", "from": "HIJ", "to": "SHO", "dir": "新大阪・東京方面 (eastbound)", "type": "Every Nozomi stops at Shin-Osaka.", "min": 85, "exit": "Follow JR Kyoto Line signs"}, {"ln": "JA", "from": "A46", "to": "A47", "dir": "大阪・神戸方面 (toward Osaka)", "type": "Any train.", "wrong": "Next stop 東淀川 Higashi-Yodogawa = wrong way.", "min": 4, "exit": "Midosuji South Exit → hotel"}],
        how: [
          "Streetcar back to Hiroshima Station.",
          "Nozomi to Shin-Osaka (~1 h 25), JR 1 stop to Osaka, walk ~8 min.",
        ],
        spicy: "Want a Hiroshima gay bar first? Goli Macho (5F Jewel Ebisu Bldg, 3-6 Ebisu-cho; open Tue–Sat) is Hiroshima's friendliest, with a mixed crowd. Its opening time isn't listed, so only stay if SmartEX shows a later train that still gets you to Osaka.",
      },
      {
        t: "21:30", title: "Last Osaka night", say: ["nama", "kanpai"], pic: "Shinsekai Osaka night flash photo", rx: "neon", place: "Shinsekai, Osaka",
        ride: [{"ln": "OK", "from": "K12", "to": "K18", "dir": "天下茶屋方面 (toward Tengachaya)", "type": "Every train.", "wrong": "Next stop 天神橋筋六丁目 (K11) = wrong way.", "min": 12, "exit": "Shinsekai is right outside"}],
        how: [
          "Energy left? Shinsekai's retro neon around Tsūtenkaku tower (Sakaisuji line to Ebisuchō).",
          "Or one last round in Doyama-cho, 5 min from the hotel.",
          "Or the MHA × Umeda Sky Building collab at night: the open-air Floating Garden observatory, 15 min walk from your hotel (open to 22:30, last entry 22:00). The ¥2,800 collab ticket includes entry, 2 random stickers and the stamp rally; the collab drink (¥880) is at café SKY 40.",
        ],
        photo: "Shinsekai is the best direct-flash street of the trip: giant food signs, retro neon, Tsūtenkaku behind you.",
        snack: "Shinsekai kushikatsu (fried skewers) at Kushikatsu Daruma Shinsekai Sōhonten (the original, Google 4.1, open until 10:30 PM). Again: no double-dipping.",
        spicy: "Doyama tonight: Eagle Osaka for bears, Kuro for daddies, Village for drag. Explosion is closed on Tuesdays.",
      },
      {
        t: "23:30", title: "Last-night soak at Daikichi 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [34.7046, 135.5026], say: ["kyukei"], place: "Daikichi, 12-12 Doyamacho, Kita-ku, Osaka",
        ride: [{"ln": "OM", "from": "M22", "to": "M16", "dir": "千里中央・新大阪方面 (toward Shin-Osaka)", "type": "Every train.", "wrong": "Next stop 天王寺 Tennōji (M23) = wrong way.", "min": 15, "exit": "Walk 5–10 min to Doyama-cho"}],
        how: [
          "From Shinsekai, take the Midosuji line to Umeda (about 15 min). Daikichi is a 5–10 minute walk from there.",
          "Check out of the hotel by about 9:30 AM tomorrow for the Fuji train. No sauna in Kawaguchiko, so make this one count.",
        ],
        spicy: "Last sauna of the trip 🥲 Go big.",
      },
    ],
  },

  /* ---------------- DAY 10 ---------------- */
  {
    id: "d10", date: "2026-11-04", prep: ["Alarm 5:30 AM for the sunrise; warm layer by the door", "Save the 9:30 AM Kawaguchiko → Busta Shinjuku bus QR — don't take a later one", "Passport + tax-refund receipts + those goods together in your backpack", "Online check-in for UA868 (opens 24 hours before the 6 PM flight)", "Mobile Passport Control app ready for Chicago", "Spend leftover coins — they can't be exchanged back"], rain: "Clouds hide Fuji? Check the Kawaguchiko live cam the night before. If the forecast is bad, consider Hakone instead (Hikari to Odawara) — great hot springs, less reliable Fuji views. Even cloudy, Kawaguchiko's autumn leaves and onsen are worth it.", cloudy: true, home: {"after": "18:30", "note": "Kawaguchiko's local buses stop early in the evening — pick a dinner spot within walking distance of your hotel, or eat early enough to catch the bus back."}, dow: "Wed", title: "Osaka → Mt Fuji", city: "Mt Fuji",
    theme: "fuji", emoji: "🗻", deco: ["🗻", "🍁", "♨️", "🌅", "🚄", "🍂"],
    kicker: "Day 10 · The mountain",
    tagline: "Bullet train, then My Hero Academia coasters with Fuji in the background, hōtō noodles and a hot spring.",
    sleep: "fuji", wx: { lat: 35.51, lon: 138.76 },
    phrases: ["onsen", "takkyubin", "doko", "gochisousama", "kirei"],
    steps: [
      {
        t: "09:30", title: "Check out + breakfast", say: ["checkout", "hitotsu"], place: "Shin-Osaka Station",
        how: [
          "Check out with your backpack.",
          "Up early? Kuromon Market (Sakaisuji line Ōgimachi → Nippombashi, ~10 min) — allow a full hour.",
          "Otherwise go straight to Shin-Osaka.",
        ],
        snack: "Kuromon: grilled scallops, tuna skewers and a strawberry daifuku. Or 551 Hōrai buns at Shin-Osaka.",
      },
      {
        t: "10:30", title: "Hikari to Mishima (seat E)", fixed: true, ask: [{"jp": "三島に止まるひかりは何番線ですか？", "ro": "Mishima ni tomaru Hikari wa nanbansen desu ka?", "en": "Which platform for the Hikari that stops at Mishima?", "hear": "bansen"}], ll: [35.1264, 138.911], say: ["seki", "nanban"], pic: "Mt Fuji from shinkansen Mishima", rx: "classic", place: "Mishima Station",
        ride: [{"ln": "JA", "from": "A47", "to": "A46", "dir": "京都方面 (toward Kyoto)", "type": "Any train.", "wrong": "Next stop 塚本 Tsukamoto = wrong way.", "min": 4, "exit": "Follow blue 新幹線 signs"}, {"ln": "TKH", "from": "SHO", "to": "MSM", "dir": "東京方面 (eastbound) — must be ひかり HIKARI", "type": "Hikari stop patterns vary — these are the big ones. Check 三島 is on your train's list on the platform board.", "wrong": "のぞみ Nozomi does NOT stop at Mishima.", "min": 120, "exit": "South Exit (南口) → Fujikyu bus stop"}],
        how: [
          "Take a HIKARI (ひかり) — the Nozomi doesn't stop at Mishima.",
          "Seat E again for Fuji. ~2 h.",
        ],
        photo: "Fuji gets huge on the approach to Mishima — burst through the window.",
        snack: "Second ekiben of the trip. Go for a regional one with a pretty box.",
      },
      {
        t: "12:45", title: "Fujikyu bus to Kawaguchiko", fixed: true, ask: [{"jp": "河口湖行きのバス乗り場はどこですか？", "ro": "Kawaguchiko-iki no basu noriba wa doko desu ka?", "en": "Where's the bus stop for Kawaguchiko?", "hear": "dir"}, {"jp": "このバスは河口湖駅に行きますか？", "ro": "Kono basu wa Kawaguchiko-eki ni ikimasu ka?", "en": "Does this bus go to Kawaguchiko Station?", "hear": "yesno"}], ll: [35.4986, 138.7689], say: ["konokippu"], pic: "Mt Fuji bus window view", place: "Kawaguchiko Station",
        how: [
          "Mishima Station South Exit → bus stop for the Fujikyu bus to Kawaguchiko.",
          "Show your highway-buses.jp QR (or pay on board if seats remain). ~1 h 30.",
        ],
        photo: "Sit on the right side heading north — Fuji fills the window around Lake Yamanaka.",
      },
      {
        t: "14:30", title: "Fuji-Q Highland × My Hero Academia 🎢", quest: "💥 “My Hero Academia in Fuji-Q Highland” runs until Nov 8: Deku / Bakugo / Todoroki announcements on the rides, MHA music on Kirarinko, an attraction + mission stamp rally, MHA-wrapped trains and buses, collab food and merch.", ask: [{"jp": "フジヤマは今日動いていますか？", "ro": "Fujiyama wa kyō ugoite imasu ka?", "en": "Is FUJIYAMA running today?", "hear": "yesno"}], ll: [35.4873, 138.7799], say: ["photoplease", "kakkoii"], pic: "Fuji-Q FUJIYAMA roller coaster Mt Fuji", rx: "velvia", place: "Fuji-Q Highland, Fujiyoshida",
        ride: [{"ln": "FJ", "from": "KWG", "to": "FQH", "dir": "大月方面 (toward Ōtsuki) — Kawaguchiko is the end, so any train", "type": "Every local stops at Fuji-Q Highland. Or walk ~20 min.", "min": 5, "exit": "The park gate is right at the station"}],
        how: [
          "The Fujikyu bus from Mishima may stop at 富士急ハイランド (Fuji-Q Highland) — ask the driver. Otherwise ride it to Kawaguchiko, leave your bag in a station locker, and take the train 1 stop back.",
          "Entry is free; you pay per ride or buy a one-day pass (¥6,000–7,900 depending on the day). During the MHA collab (Sep 18–Nov 8) the pass comes with an original 3-piece rubber-band set. Look out for the MHA-wrapped Fujikyu trains and buses too.",
          "Check fujiq.jp for Nov 4 hours: in autumn the park often closes around 5 PM, and closure days are irregular (usually Thursdays — Nov 4 is a Wednesday).",
          "Thrill list: FUJIYAMA (MHA-themed classic with huge Fuji views), Eejanaika (spinning 4D coaster), Takabisha (beyond-vertical drop), Do-Dodonpa (launch coaster). Check which are running today.",
        ],
        photo: "Fuji behind the FUJIYAMA lift hill at golden hour — the coaster and the mountain in one frame.",
        tip: "If Fuji-Q is closed: Oishi Park on the north shore for a Fuji-over-the-lake sunset (Kawaguchiko sightseeing bus, red line).",
        snack: "MHA collab menu inside the park — order food for a random placemat, a side or drink for a random coaster.",
      },
      {
        t: "17:15", title: "Check in", fixed: true, ask: [{"jp": "温泉は何時まで入れますか？", "ro": "Onsen wa nanji made hairemasu ka?", "en": "Until what time is the hot spring open?", "hear": "time"}], say: ["checkin", "onsen"], place: "",
        how: [
          "Fujikyu train back 1 stop to Kawaguchiko (grab your bag from the locker), then check in at your Fuji hotel (add it in the Hotels tab once booked).",
          "Grab your warm layer: Kawaguchiko gets cold after dark.",
        ],
      },
      {
        t: "18:30", title: "Hōtō dinner + onsen night", ll: [35.5012, 138.7715], say: ["hitori", "onsen", "gochisousama"], pic: "hoto noodles Kawaguchiko", place: "Hoto Fudo Kawaguchiko",
        how: [
          "Dinner: hōtō, the local thick noodles stewed in miso with pumpkin. Skip Hōtō Fudō's station branch (Google 3.8). Try Kosaku Kawaguchiko (甲州ほうとう小作 河口湖店), the other classic, but check it shows 4.0+ on Google first.",
          "Hot spring at the hotel (manners in the Manners tab).",
          "Check the Fuji live camera, set an alarm for 5:30 AM, early night.",
        ],
        spicy: "Onsen: the one place where being naked in public is the dress code 😉 Wash fully before you get in, keep the little towel out of the water.",
      },
    ],
  },

  /* ---------------- DAY 11 ---------------- */
  {
    id: "d11", date: "2026-11-05", rain: "Cloudy sunrise? Skip the lakeshore, sleep an extra hour, and still try Chūreitō around 7 AM — mornings are Fuji's clearest window. Don't change the 9:30 bus.", cloudy: true, dow: "Thu", title: "Fuji sunrise → fly home", city: "Fuji → Narita",
    theme: "sunrise", emoji: "🌅", deco: ["🌅", "🗻", "✈️", "💖", "🎒", "🏯"],
    kicker: "Day 11 · Sayonara (for now)",
    tagline: "Sunrise on Fuji, a pagoda, and one last konbini run. You did Japan, birthday boy.",
    sleep: null, wx: { lat: 35.51, lon: 138.76 },
    phrases: ["arigatou", "gochisousama", "doko", "card", "mata"],
    steps: [
      {
        t: "05:45", title: "Lakeshore sunrise", fixed: true, ll: [35.5245, 138.7462], say: ["ohayou", "kirei"], pic: "Kawaguchiko sunrise Fuji reflection", rx: "velvia", place: "Oishi Park, Fujikawaguchiko",
        how: [
          "Warm layer on. Head to the north shore (~6:00 AM sunrise).",
          "Morning is Fuji's clearest window — clouds usually build by late morning.",
        ],
        photo: "Fuji reflected in still water: crouch low near the edge, or stand as a silhouette at the waterline.",
      },
      {
        t: "07:00", title: "Chureito Pagoda", ask: [{"jp": "忠霊塔はどっちですか？", "ro": "Chūreitō wa dotchi desu ka?", "en": "Which way to Chūreitō Pagoda?", "hear": "dir"}], ll: [35.5013, 138.8019], say: ["photoplease"], pic: "Chureito Pagoda men photo", rx: "velvia", place: "Chureito Pagoda",
        ride: [{"ln": "FJ", "from": "KWG", "to": "SYD", "dir": "大月方面 (toward Ōtsuki) — Kawaguchiko is the end, so any train", "type": "Local (普通) trains stop at Shimoyoshida; check the board for limited expresses.", "min": 15, "exit": "Walk up ~400 steps to the pagoda deck"}],
        how: [
          "Fujikyu train from Kawaguchiko to Shimoyoshida (~15 min).",
          "Walk up ~400 steps to the viewing deck above the pagoda.",
        ],
        photo: "Stand at the right edge of the frame, back to camera or in profile, with the pagoda + Fuji behind you. 2–3x zoom. Then Honchō Street's Fuji view — sidewalk only.",
      },
      {
        t: "09:30", title: "Highway bus to Shinjuku", fixed: true, ask: [{"jp": "新宿行きのバス乗り場はここですか？", "ro": "Shinjuku-iki no basu noriba wa koko desu ka?", "en": "Is this the stop for the bus to Shinjuku?", "hear": "yesno"}], ll: [35.4986, 138.7689], say: ["konokippu"], place: "Busta Shinjuku",
        ride: [{"ln": "FJ", "from": "SYD", "to": "KWG", "dir": "河口湖方面 (toward Kawaguchiko)", "type": "Any train.", "wrong": "Next stop isn't 月江寺 Gekkōji = wrong way.", "min": 15, "exit": "Bus stops are outside Kawaguchiko Station"}],
        how: [
          "Fujikyu train back to Kawaguchiko Station in time for the 9:30 bus — don't take a later one.",
          "Show your highway-buses.jp QR. ~1 h 45 to Busta Shinjuku.",
        ],
        snack: "Konbini breakfast for the bus. Grab regional KitKats or Fuji-shaped sweets as gifts.",
      },
      {
        t: "11:45", title: "Narita Express to the airport", fixed: true, ask: [{"jp": "成田エクスプレスの切符はどこで買えますか？", "ro": "Narita Ekusupuresu no kippu wa doko de kaemasu ka?", "en": "Where can I buy a Narita Express ticket?", "hear": "dir"}], ll: [35.6896, 139.7006], say: ["oshiete", "seki"], place: "Narita Airport Terminal 1",
        ride: [{"ln": "NEX", "from": "SJK", "to": "NRT1", "dir": "成田空港方面 — every seat is reserved; your car + seat are on the ticket", "type": "At Tokyo the train joins another — just stay in your seat.", "wrong": "Get off at the LAST stop, 成田空港 Narita Airport (T1). 空港第2ビル is Terminal 2·3 — United is in T1.", "min": 80, "exit": "Terminal 1 → United check-in"}],
        how: [
          "Walk into JR Shinjuku and buy a Narita Express (N'EX) ticket at a JR machine — every seat is reserved (~¥3,300).",
          "~1 h 20 to Narita Airport Terminal 1 (United is in T1).",
        ],
        snack: "Last ekiben on the N'EX, and spend coins at a vending machine — coins can't be exchanged back.",
      },
      {
        t: "13:30", title: "Narita: bag → tax refund → check in", ask: [{"jp": "ヤマト運輸のカウンターはどこですか？", "ro": "Yamato Un'yu no kauntā wa doko desu ka?", "en": "Where's the Yamato luggage counter?", "hear": "dir"}, {"jp": "免税の手続きはどこですか？", "ro": "Menzei no tetsuzuki wa doko desu ka?", "en": "Where do I do the tax refund?", "hear": "dir"}], ll: [35.772, 140.3929], say: ["menzei", "arigatou"], place: "Narita Airport Terminal 1",
        how: [
          "Yamato counter in Terminal 1: pick up your suitcase.",
          "Tax-refund kiosk for anything bought from Nov 1 on (passport + purchases with you).",
          "Check in for UA868 (6:00 PM) and drop the bag.",
          "⚡ Last Pokémon stop: Pokémon Store Narita Airport is in Terminal 2 (main building 4F). Take the free terminal shuttle bus from T1 (~10 min each way) after you check in, before security. Leave T2 by 4:15.",
        ],
      },
      {
        t: "18:00", title: "Fly home 💖", fixed: true, say: ["mata", "arigatou"], place: "",
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

  { id: "yubi", cat: "Basics", jp: "指さしてもらえますか？", ro: "Yubisashite moraemasu ka?", en: "Could you point (to it)?", say: "yoo-bee-sah-shteh moh-rah-eh-mahs kah", note: "The magic follow-up when the answer is too fast. They'll point to the place or the answer." },
  { id: "chizu", cat: "Basics", jp: "地図で見せてもらえますか？", ro: "Chizu de misete moraemasu ka?", en: "Could you show me on the map?", say: "chee-zoo deh mee-seh-teh moh-rah-eh-mahs kah", note: "Hand them your phone with Google Maps open." },
  { id: "kaite", cat: "Basics", jp: "書いてもらえますか？", ro: "Kaite moraemasu ka?", en: "Could you write it down?", say: "kai-teh moh-rah-eh-mahs kah", note: "Great for times, prices and platform numbers." },
  { id: "moichido", cat: "Basics", jp: "もう一度お願いします", ro: "Mō ichido onegai shimasu", en: "One more time, please", say: "moh ee-chee-doh oh-neh-gai shee-mahs" },
  { id: "yukkuri", cat: "Basics", jp: "もう少しゆっくり話してください", ro: "Mō sukoshi yukkuri hanashite kudasai", en: "Could you speak a little slower?", say: "moh soo-koh-shee yook-koo-ree hah-nah-shteh koo-dah-sai" },
  { id: "oshiete", cat: "Basics", jp: "使い方を教えてください", ro: "Tsukaikata o oshiete kudasai", en: "Can you show me how to use this?", say: "tskai-kah-tah oh oh-shee-eh-teh koo-dah-sai", note: "For ticket machines, ramen vending machines, lockers, toilets with 20 buttons…" },
  { id: "yoyaku", cat: "Basics", jp: "予約しています。イアンです。", ro: "Yoyaku shite imasu. Ian desu.", en: "I have a reservation. I'm Ian.", say: "yoh-yah-koo shteh ee-mahs. ee-ahn dess", note: "Pokémon Café, Shibuya Sky, Nintendo Museum, hotels. Have the QR or email open." },

  // Shopping
  { id: "kore", cat: "Shopping", jp: "これください", ro: "Kore kudasai", en: "This one, please", say: "koh-reh koo-dah-sai", note: "Gesture at the item with an open hand, palm up — not a jabbing finger." },
  { id: "ikura", cat: "Shopping", jp: "これはいくらですか？", ro: "Kore wa ikura desu ka?", en: "How much is this?", say: "koh-reh wah ee-koo-rah dess kah" },
  { id: "card", cat: "Shopping", jp: "カードで払えますか？", ro: "Kādo de haraemasu ka?", en: "Can I pay by card?", say: "kah-doh deh hah-rah-eh-mahs kah" },
  { id: "suica", cat: "Shopping", jp: "Suicaでお願いします", ro: "Suika de onegai shimasu", en: "With Suica, please", say: "soo-ee-kah deh oh-neh-gai shee-mahs" },
  { id: "fukuro", cat: "Shopping", jp: "袋はいりません", ro: "Fukuro wa irimasen", en: "I don't need a bag", say: "foo-koo-roh wah ee-ree-mah-sen" },
  { id: "menzei", cat: "Shopping", jp: "免税できますか？", ro: "Menzei dekimasu ka?", en: "Can I buy tax-free?", say: "men-zay deh-kee-mahs kah", note: "Through Oct 31 only, ¥5,000+ per store, show your passport." },
  { id: "atatame", cat: "Shopping", jp: "温めてください", ro: "Atatamete kudasai", en: "Please heat it up (konbini)", say: "ah-tah-tah-meh-teh koo-dah-sai", note: "They'll usually ask “Atatamemasu ka?” (shall I heat it?) — answer “Hai!” (yes!)" },
  { id: "ohashi", cat: "Shopping", jp: "お箸ください", ro: "Ohashi kudasai", en: "Chopsticks, please", say: "oh-hah-shee koo-dah-sai" },

  // Food
  { id: "hitori", cat: "Food & drink", jp: "一人です", ro: "Hitori desu", en: "Just one person", say: "hee-toh-ree dess", note: "Hold up one finger when you walk in. Staff will shout “Irasshaimase!” (welcome!) — no reply needed, just smile." },
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

  { id: "norikae", cat: "Getting around", jp: "乗り換えはどこですか？", ro: "Norikae wa doko desu ka?", en: "Where do I transfer?", say: "noh-ree-kah-eh wah doh-koh dess kah" },
  { id: "nanban", cat: "Getting around", jp: "〇〇行きは何番線ですか？", ro: "___ iki wa nanbansen desu ka?", en: "Which platform for ___?", say: "___ ee-kee wah nahn-bahn-sen dess kah", note: "Point at the station name on your phone. Platform numbers are on big signs: 1番線 = platform 1." },
  { id: "seki", cat: "Getting around", jp: "この席、空いていますか？", ro: "Kono seki, aite imasu ka?", en: "Is this seat free?", say: "koh-noh seh-kee, ai-teh ee-mahs kah", note: "On the shinkansen, check your seat number first — someone may be in yours by mistake. Show them your ticket and say “sumimasen.”" },

  // Hotel
  { id: "azukeru", cat: "Hotel", jp: "荷物を預かってもらえますか？", ro: "Nimotsu o azukatte moraemasu ka?", en: "Can you hold my bags?", say: "nee-moh-tsoo oh ah-zoo-kah-teh moh-rah-eh-mahs kah" },
  { id: "takkyubin", cat: "Hotel", jp: "宅急便で送りたいです", ro: "Takkyūbin de okuritai desu", en: "I'd like to ship this (luggage forwarding)", say: "tahk-kyoo-bin deh oh-koo-ree-tai dess" },
  { id: "checkout", cat: "Hotel", jp: "チェックアウトお願いします", ro: "Chekku-auto onegai shimasu", en: "Check-out, please", say: "check-out oh-neh-gai shee-mahs" },
  { id: "checkin", cat: "Hotel", jp: "チェックインお願いします", ro: "Chekku-in onegai shimasu", en: "Check-in, please", say: "check-een oh-neh-gai shee-mahs" },

  // Photos
  { id: "photoplease", cat: "Photos", jp: "写真を撮ってもらえますか？", ro: "Shashin o totte moraemasu ka?", en: "Could you take my photo?", say: "shah-sheen oh toht-teh moh-rah-eh-mahs kah", note: "Offer to take theirs first — works almost every time." },
  { id: "photook", cat: "Photos", jp: "写真を撮ってもいいですか？", ro: "Shashin o totte mo ii desu ka?", en: "May I take a photo?", say: "shah-sheen oh toht-teh moh ee dess kah" },
  { id: "kirei", cat: "Photos", jp: "きれい！", ro: "Kirei!", en: "Beautiful!", say: "kee-ray" },
  { id: "sticker", cat: "Photos", jp: "バースデーシールをお願いします", ro: "Bāsudē shīru o onegai shimasu", en: "A birthday sticker, please (Disney)", say: "bah-soo-deh shee-roo oh oh-neh-gai shee-mahs", note: "Tokyo Disney calls it a バースデーシール (birthday sticker). Any cast member or Guest Relations has them." },

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
  { id: "gaymanga", cat: "Scene words", jp: "ゲイ漫画のコーナーはありますか？", ro: "Gei manga no kōnā wa arimasu ka?", en: "Is there a gay manga section?", say: "gay mahn-gah noh koh-nah wah ah-ree-mahs kah", note: "Japanese shops rarely say “bara” — the genre is ゲイ漫画 (gay manga), and the muscle style is ガチムチ系." },
  { id: "kyukei", cat: "Scene words", jp: "休憩でお願いします。", ro: "Kyūkei de onegai shimasu.", en: "Just a short stay, please.", say: "kyoo-keh deh oh-neh-gai shee-mahs", note: "Saunas price by stay: 休憩 (kyūkei, a few hours) or 宿泊 (shukuhaku, overnight)." },
  { id: "shukuhaku", cat: "Scene words", jp: "宿泊でお願いします。", ro: "Shukuhaku de onegai shimasu.", en: "Overnight stay, please.", say: "shoo-koo-hah-koo deh oh-neh-gai shee-mahs" },
  { id: "kondomu2", cat: "Scene words", jp: "コンドームはありますか？", ro: "Kondōmu wa arimasu ka?", en: "Do you have condoms?", say: "kohn-doh-moo wah ah-ree-mahs kah", note: "Usually free at the front desk, but supplies and sizes vary — bring your own." },
  { id: "w-profile", cat: "Scene words", jp: "ラテン系のガチムチです。アメリカから旅行中です。", ro: "Raten-kei no gachimuchi desu. Amerika kara ryokō-chū desu.", en: "I'm a Latino gachimuchi guy, visiting from the US.", say: "rah-ten-kay noh gah-chee-moo-chee dess. ah-meh-ree-kah kah-rah ryoh-koh-choo dess", note: "Paste it into your 9Monsters/Grindr bio, or use it as your bar intro. Add ヒゲ (beard) and 体毛あり (hairy) as tags." },
  { id: "prep", cat: "Flirting 💋", jp: "プレップ飲んでるよ。", ro: "Pureppu nonderu yo.", en: "I'm on PrEP.", say: "poo-rep-poo nohn-deh-roo yoh", note: "PrEP is less common in Japan, so plenty of guys still expect condoms." },
  { id: "kensa", cat: "Flirting 💋", jp: "最近検査した？", ro: "Saikin kensa shita?", en: "Tested recently?", say: "sai-keen ken-sah shee-tah" },
  { id: "ie", cat: "Flirting 💋", jp: "家、近い？", ro: "Ie, chikai?", en: "Is your place close?", say: "ee-eh, chee-kai", note: "Your APA room is off-limits to visitors, so his place or a love hotel it is." },
  { id: "dansei", cat: "Scene words", jp: "男性同士でも大丈夫ですか？", ro: "Dansei dōshi demo daijōbu desu ka?", en: "Is it OK for two men? (at a love hotel)", say: "dahn-say doh-shee deh-moh dai-joh-boo dess kah" },
  { id: "w-nichome", cat: "Scene words", jp: "二丁目", ro: "Ni-chōme", en: "Tokyo's gay district (Shinjuku 2-chōme)", say: "nee-choh-meh" },

  // App chat 📱 — Grindr / 9Monsters / Jack'd. Every card has a 📋 button: copy, then paste into the chat.
  // Your bio
  { id: "a-bio", cat: "App chat 📱", sub: "Your bio", jp: "旅行で日本来てます！10/31まで東京🗼 遊べる人・飲める人募集〜 日本語ちょっとだけ😅 英語OK", ro: "Ryokō de Nihon kitemasu! Jūgatsu sanjūichi-nichi made Tōkyō. Asoberu hito, nomeru hito boshū~ Nihongo chotto dake. Eigo ōkē", en: "Visiting Japan! In Tokyo till 10/31. Looking for guys to hang out and drink with. Only a little Japanese, English OK", say: "ryoh-koh deh nee-hohn kee-teh-mahs", copy: "Visiting Japan 🇯🇵 in Tokyo till 10/31\nLooking for friends, drinks & fun 😉\n旅行で日本来てます！10/31まで東京🗼\n遊べる人・飲める人募集〜 日本語ちょっとだけ😅 英語OK", note: "📋 copies the full English + Japanese bio, ready to paste. 遊べる人 (people to play with) reads friendly-but-open on gay apps." },
  { id: "a-bio-friends", cat: "App chat 📱", sub: "Your bio", jp: "旅行で日本に来てます🇯🇵 友達と楽しいこと探してます！", ro: "Ryokō de Nihon ni kitemasu. Tomodachi to tanoshii koto sagashitemasu!", en: "Visiting Japan — looking for friends and fun things to do!", say: "toh-moh-dah-chee toh tah-noh-shee koh-toh sah-gahsh-teh-mahs", note: "The softer, friends-first version." },
  { id: "a-bio-kyoto", cat: "App chat 📱", sub: "Your bio", jp: "旅行中！11/1は京都、そのあと11/3まで大阪にいます", ro: "Ryokō-chū! Jūichigatsu tsuitachi wa Kyōto, sono ato jūichigatsu mikka made Ōsaka ni imasu", en: "Traveling! Kyoto on 11/1, then Osaka until 11/3", say: "ryoh-koh-choo! … oh-sah-kah nee ee-mahs", note: "Swap this in when you leave Tokyo — the grid changes with you." },
  { id: "a-bio-doyama", cat: "App chat 📱", sub: "Your bio", jp: "堂山で飲める人募集〜", ro: "Dōyama de nomeru hito boshū~", en: "Looking for someone to drink with in Doyama", say: "doh-yah-mah deh noh-meh-roo hee-toh boh-shoo", note: "Doyama-cho is Osaka's gay bar area, ~5 min from your hotel." },
  { id: "a-bio-lang", cat: "App chat 📱", sub: "Your bio", jp: "日本語は少しだけ。英語OK", ro: "Nihongo wa sukoshi dake. Eigo ōkē", en: "Only a little Japanese. English OK", say: "nee-hohn-goh wah soo-koh-shee dah-keh. ay-goh oh-kay" },

  // Openers
  { id: "a-yoroshiku", cat: "App chat 📱", sub: "Openers", jp: "よろしく！", ro: "Yoroshiku!", en: "Hey! (nice to e-meet you)", say: "yoh-roh-shee-koo", note: "The standard first message on Japanese apps — friendlier than a bare “hi”." },
  { id: "a-hajime", cat: "App chat 📱", sub: "Openers", jp: "はじめまして！旅行で来てます", ro: "Hajimemashite! Ryokō de kitemasu", en: "Hi! I'm here on a trip", say: "hah-jee-meh-mahsh-teh! ryoh-koh deh kee-teh-mahs" },
  { id: "a-nani", cat: "App chat 📱", sub: "Openers", jp: "何探してる？", ro: "Nani sagashiteru?", en: "What are you looking for?", say: "nah-nee sah-gahsh-teh-roo" },
  { id: "a-mokuteki", cat: "App chat 📱", sub: "Openers", jp: "何目的？", ro: "Nani mokuteki?", en: "What are you on here for?", say: "nah-nee moh-koo-teh-kee", note: "Answers you'll get: 友達 (friends), 飲み (drinks), 恋人 (boyfriend), ヤリ目 (hookups)." },
  { id: "a-nanzai", cat: "App chat 📱", sub: "Openers", jp: "何歳？", ro: "Nansai?", en: "How old are you?", say: "nahn-sai" },
  { id: "a-kao", cat: "App chat 📱", sub: "Openers", jp: "顔写真ある？", ro: "Kao shashin aru?", en: "Got a face pic?", say: "kah-oh shah-sheen ah-roo", note: "Lots of Japanese profiles are faceless (顔出しNG) — asking is totally normal." },
  { id: "a-shashin", cat: "App chat 📱", sub: "Openers", jp: "他の写真ある？", ro: "Hoka no shashin aru?", en: "More pics?", say: "hoh-kah noh shah-sheen ah-roo" },
  { id: "a-koukan", cat: "App chat 📱", sub: "Openers", jp: "写真交換しない？", ro: "Shashin kōkan shinai?", en: "Want to swap pics?", say: "shah-sheen koh-kahn shee-nai" },
  { id: "a-osusume", cat: "App chat 📱", sub: "Openers", jp: "おすすめのバーある？", ro: "Osusume no bā aru?", en: "Any bars you'd recommend?", say: "oh-soo-soo-meh noh bah ah-roo", note: "Great friends-first opener — locals love giving tips." },
  { id: "a-annai", cat: "App chat 📱", sub: "Openers", jp: "二丁目を案内してくれない？", ro: "Ni-chōme o annai shite kurenai?", en: "Want to show me around Ni-chome?", say: "nee-choh-meh oh ahn-nai shteh koo-reh-nai" },

  // Compliments
  { id: "a-eroi", cat: "App chat 📱", sub: "Compliments", jp: "エロいね", ro: "Eroi ne", en: "You're sexy", say: "eh-roy neh" },
  { id: "a-kakkoii", cat: "App chat 📱", sub: "Compliments", jp: "めっちゃかっこいい！", ro: "Metcha kakkoii!", en: "You're so hot!", say: "met-chah kahk-koh-ee" },
  { id: "a-taipu", cat: "App chat 📱", sub: "Compliments", jp: "めっちゃタイプ", ro: "Metcha taipu", en: "You're totally my type", say: "met-chah tai-poo" },
  { id: "a-karada", cat: "App chat 📱", sub: "Compliments", jp: "いい体してるね", ro: "Ii karada shiteru ne", en: "Nice body", say: "ee kah-rah-dah shteh-roo neh" },
  { id: "a-kawaii", cat: "App chat 📱", sub: "Compliments", jp: "かわいいね", ro: "Kawaii ne", en: "You're cute", say: "kah-wai-ee neh" },

  // Making plans
  { id: "a-konya", cat: "App chat 📱", sub: "Making plans", jp: "今夜飲みに行く？", ro: "Kon'ya nomi ni iku?", en: "Are you going out tonight?", say: "kohn-yah noh-mee nee ee-koo" },
  { id: "a-nichome", cat: "App chat 📱", sub: "Making plans", jp: "今日二丁目行く？", ro: "Kyō Ni-chōme iku?", en: "Going to Ni-chome today?", say: "kyoh nee-choh-meh ee-koo" },
  { id: "a-nomou", cat: "App chat 📱", sub: "Making plans", jp: "一緒に飲もうよ", ro: "Issho ni nomō yo", en: "Let's grab a drink together", say: "ees-shoh nee noh-moh yoh" },
  { id: "a-doko", cat: "App chat 📱", sub: "Making plans", jp: "今どこ？", ro: "Ima doko?", en: "Where are you now?", say: "ee-mah doh-koh" },
  { id: "a-aeru", cat: "App chat 📱", sub: "Making plans", jp: "今から会える？", ro: "Ima kara aeru?", en: "Want to meet now?", say: "ee-mah kah-rah ah-eh-roo" },
  { id: "a-nanji", cat: "App chat 📱", sub: "Making plans", jp: "何時がいい？", ro: "Nanji ga ii?", en: "What time works?", say: "nahn-jee gah ee" },
  { id: "a-machiawase", cat: "App chat 📱", sub: "Making plans", jp: "どこで待ち合わせる？", ro: "Doko de machiawaseru?", en: "Where should we meet?", say: "doh-koh deh mah-chee-ah-wah-seh-roo" },
  { id: "a-kafe", cat: "App chat 📱", sub: "Making plans", jp: "最初はバーかカフェで会おう", ro: "Saisho wa bā ka kafe de aō", en: "Let's meet at a bar or café first", say: "sai-shoh wah bah kah kah-feh deh ah-oh", note: "Smart first meet with anyone new — public, easy to leave." },
  { id: "a-fuku", cat: "App chat 📱", sub: "Making plans", jp: "何着てる？", ro: "Nani kiteru?", en: "What are you wearing? (so I can spot you)", say: "nah-nee kee-teh-roo" },
  { id: "a-tsuita", cat: "App chat 📱", sub: "Making plans", jp: "着いたよ！", ro: "Tsuita yo!", en: "I'm here!", say: "tsoo-ee-tah yoh" },
  { id: "a-okureru", cat: "App chat 📱", sub: "Making plans", jp: "ごめん、10分遅れる", ro: "Gomen, juppun okureru", en: "Sorry, running 10 min late", say: "goh-men, joop-poon oh-koo-reh-roo" },
  { id: "a-line", cat: "App chat 📱", sub: "Making plans", jp: "LINEかインスタ交換しない？", ro: "LINE ka insuta kōkan shinai?", en: "Want to swap LINE or Insta?", say: "line kah een-soo-tah koh-kahn shee-nai" },

  // Hosting
  { id: "a-basho", cat: "App chat 📱", sub: "Hosting", jp: "場所ある？", ro: "Basho aru?", en: "Do you host?", say: "bah-shoh ah-roo", note: "On profiles: 場所あり = can host, 場所なし = can't host." },
  { id: "a-basho-aru", cat: "App chat 📱", sub: "Hosting", jp: "場所あるよ", ro: "Basho aru yo", en: "I can host", say: "bah-shoh ah-roo yoh", note: "Your hotels are booked for 1 — register a visitor at the front desk first (some charge a guest fee)." },
  { id: "a-basho-nai", cat: "App chat 📱", sub: "Hosting", jp: "ごめん、場所ない", ro: "Gomen, basho nai", en: "Sorry, I can't host", say: "goh-men, bah-shoh nai" },
  { id: "a-rabuho", cat: "App chat 📱", sub: "Hosting", jp: "ラブホ行く？", ro: "Rabuho iku?", en: "Want to go to a love hotel?", say: "rah-boo-hoh ee-koo", note: "Love hotels rent rooms by 休憩 (a few hours). Plenty in Kabukicho and Doyama — a local will know which ones are gay-friendly." },
  { id: "a-chikai", cat: "App chat 📱", sub: "Hosting", jp: "近いね！", ro: "Chikai ne!", en: "You're close!", say: "chee-kai neh" },

  // Into it
  { id: "a-tachiuke", cat: "App chat 📱", sub: "Into it", jp: "タチ？ウケ？", ro: "Tachi? Uke?", en: "Top or bottom?", say: "tah-chee? oo-keh?" },
  { id: "a-tachi", cat: "App chat 📱", sub: "Into it", jp: "タチです", ro: "Tachi desu", en: "I'm a top", say: "tah-chee dess" },
  { id: "a-uke", cat: "App chat 📱", sub: "Into it", jp: "ウケです", ro: "Uke desu", en: "I'm a bottom", say: "oo-keh dess" },
  { id: "a-riba", cat: "App chat 📱", sub: "Into it", jp: "リバです", ro: "Riba desu", en: "I'm vers", say: "ree-bah dess" },
  { id: "a-gomu", cat: "App chat 📱", sub: "Into it", jp: "ゴム使う？", ro: "Gomu tsukau?", en: "Do you use condoms?", say: "goh-moo tsoo-kow" },
  { id: "a-safe", cat: "App chat 📱", sub: "Into it", jp: "セーフでお願い", ro: "Sēfu de onegai", en: "Condoms only, please", say: "seh-foo deh oh-neh-gai", note: "セーフ (safe) means with a condom on Japanese profiles." },

  // Saying no + staying safe
  { id: "a-pasu", cat: "App chat 📱", sub: "Saying no + staying safe", jp: "ごめん、今日はパスで", ro: "Gomen, kyō wa pasu de", en: "Sorry, I'll pass today", say: "goh-men, kyoh wah pah-soo deh" },
  { id: "a-taipujanai", cat: "App chat 📱", sub: "Saying no + staying safe", jp: "ごめん、タイプじゃないかも", ro: "Gomen, taipu ja nai kamo", en: "Sorry, I don't think you're my type", say: "goh-men, tai-poo jah nai kah-moh", note: "かも (maybe) keeps it gentle." },
  { id: "a-kusuri", cat: "App chat 📱", sub: "Saying no + staying safe", jp: "クスリはなしで", ro: "Kusuri wa nashi de", en: "No drugs", say: "koo-soo-ree wah nah-shee deh", note: "Japan's drug laws are extremely strict, even for tourists — block anyone who brings it up." },
  { id: "a-okane", cat: "App chat 📱", sub: "Saying no + staying safe", jp: "お金の話ならパス", ro: "Okane no hanashi nara pasu", en: "If this is about money, I'll pass", say: "oh-kah-neh noh hah-nah-shee nah-rah pah-soo", note: "For anyone asking for money, gift cards or a “bar” you have to pay to enter." },

  // Words you'll see on profiles
  { id: "a-w-yarimoku", cat: "App chat 📱", sub: "Words you'll see on profiles", jp: "ヤリ目", ro: "Yarimoku", en: "Here for hookups", say: "yah-ree-moh-koo" },
  { id: "a-w-nomitomo", cat: "App chat 📱", sub: "Words you'll see on profiles", jp: "飲み友募集", ro: "Nomitomo boshū", en: "Looking for drinking buddies", say: "noh-mee-toh-moh boh-shoo" },
  { id: "a-w-kaodashi", cat: "App chat 📱", sub: "Words you'll see on profiles", jp: "顔出しNG", ro: "Kaodashi enujī", en: "Won't show face pics publicly", say: "kah-oh-dah-shee en-oo-jee" },
  { id: "a-w-toshiue", cat: "App chat 📱", sub: "Words you'll see on profiles", jp: "年上好き ／ 年下好き", ro: "Toshiue zuki / Toshishita zuki", en: "Into older guys / Into younger guys", say: "toh-shee-oo-eh zoo-kee / toh-shee-shtah zoo-kee" },
  { id: "a-w-stats", cat: "App chat 📱", sub: "Words you'll see on profiles", jp: "175/80/30", ro: "", en: "Height (cm) / weight (kg) / age", say: "", note: "Japanese profiles list stats in this order. 175 cm ≈ 5'9\", 80 kg ≈ 176 lb." },

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
      "<b>The everyday nod (eshaku, ~15°):</b> a small bow from the waist while saying “arigatō gozaimasu” (thank you) — to cashiers, taxi drivers, anyone who holds a door. Keep eye contact light, then glance down as you bow.",
      "<b>The sincere bow (~30°):</b> for a big favor or an apology. Hands at your sides (or lightly in front), back straight, pause one beat at the bottom.",
      "<b>Both hands:</b> give and receive anything that matters — cards, receipts, gifts, change — with both hands and a little nod.",
      "Don't press your palms together prayer-style to say thanks to people; that's for temples and “itadakimasu” before a meal.",
    ],
  },
  {
    emoji: "🫴", title: "Pointing at what you want",
    body: [
      "Gesture with an <b>open hand, palm up</b> (fingers together) toward the item and say “Kore kudasai” (this one, please). Jabbing one finger at people is rude; at a menu or a pastry case it's fine, but the open hand reads as polite.",
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
      "Restaurants: pay at the register on your way out, and say “gochisōsama deshita” (thanks for the meal).",
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
      "Tattoos may be refused — ask “Tatū wa daijōbu desu ka?” (are tattoos OK?) or cover small ones with a patch.",
      "No photos, no splashing, keep your voice down. Drink water after.",
    ],
  },
  {
    emoji: "📸", title: "Photos",
    body: [
      "Ask before photographing people: “Shashin o totte mo ii desu ka?” (may I take a photo?)",
      "Never photograph geiko/maiko without permission; Gion's private alleys have fines.",
      "No photos inside Ni-chome bars, clubs or saunas — you'll be asked to leave.",
      "No posing in the road at Shibuya Crossing or Fujiyoshida's Honchō Street; shoot from the sidewalk.",
    ],
  },
  {
    emoji: "🔥", spicy: true, title: "Hookups + health on the road",
    body: [
      "<b>Where to go:</b> business hotels like your APAs generally don't allow visitors in your room (and the rooms are tiny). Go to his place, a sauna, a cruising bar, or a love hotel (ラブホ).",
      "<b>Love hotels:</b> pay for a few hours (休憩, a “rest”) or the night (宿泊). Hotel Queen Annex in Ni-chome is known as gay-friendly. Elsewhere, ask “男性同士でも大丈夫ですか？” before you pay: some still refuse two men.",
      "<b>PrEP:</b> take it at the same Japan time every day (13 hours ahead of Orlando). Japan allows up to a one-month supply of prescription meds without a permit; keep it in the labeled pharmacy bottle.",
      "<b>PrEP doesn't cover syphilis, gonorrhea or chlamydia</b>, and syphilis in Japan has been at record highs. Condoms for anal; Japanese sizes run small, so bring your own (lube is easy to find at Don Quijote or any drugstore). If your doctor gave you doxy-PEP, pack it.",
      "<b>Testing:</b> Shinjuku City runs free, anonymous HIV and syphilis tests in English by online reservation (call 03-5273-3859 to check tourists can book). Otherwise, test 2–3 weeks after you get home.",
      "<b>No chems:</b> poppers, G, meth and cannabis are all illegal here, and arrests mean weeks of detention. Never take a drink you didn't see poured.",
      "<b>Phones:</b> 9Monsters and Grindr are busiest; Japanese guys often keep face pics private until you chat. Ask before taking any photo of anyone.",
    ],
  },
  {
    emoji: "🧖", spicy: true, title: "Gay sauna 101",
    body: [
      "Shoes go in a small locker at the door (keep ¥10/¥100 coins). Pay at the desk or ticket machine, and swap your shoe key for a locker key on a wristband, a robe and towels.",
      "<b>Shower and wash fully</b> before any bath or sauna, same as an onsen. Towel around your waist in the common areas unless it's a nude night.",
      "Phones stay in the locker: no photos anywhere inside. Keep your voice low.",
      "Consent is quiet but clear: a hand moved away or a step back means no — smile and move on. Same goes for you.",
      "Some saunas are Japanese-only or have age/type rules. Ask “外国人でも大丈夫ですか？” at the desk; if it's a no, it's policy, not you.",
      "Cash only at most. Bring your passport. Condoms are often at the desk — bring your own anyway.",
      "Regular sento and hotel onsen are <b>not</b> cruising spots: straight guys, families, old men. Keep it completely respectable there.",
    ],
  },
  {
    emoji: "🏳️‍🌈", spicy: true, title: "Ni-chome + Doyama-cho 101",
    body: [
      "Most bars hold 10–15 people and charge a cover (¥1,000–2,000) that includes your first drink. Order at least one drink per visit.",
      "Each bar has a “type” (bears, muscle, twinks, older guys). Some upstairs bars are Japanese-only or type-only — a polite no is the format, not you. Ground-floor bars are open to everyone.",
      "Peak hours are 11 PM–3 AM; weekend clubs run to 5 AM.",
      "Apps: 9Monsters is the big local one, and Grindr and Scruff work too. Put ガイ専OK (into foreigners welcome) and your type tags in your profile.",
      "Your look: stocky muscle + full beard + body hair = ガチムチ (gachimuchi) / muscle cub, one of the most wanted types in the scene. Don't trim the body hair for this trip. A fitted tee or tank, and a harness for Eagle or BUFF, is all you need.",
      "Your bars: Eagle Tokyo/Blue, Bear Tokyo and Eagle Osaka are your crowd (muscle cubs, bears, daddies). Dragon Men and Blacknude for muscle guys, GB (Tokyo) and Kuro (Osaka) for daddies.",
      "Skip any bar a street tout steers you to (especially Kabukichō).",
      "Poppers, cannabis and THC vapes are <b>illegal</b>, even to possess. Watch your drink; carry your passport.",
      "Condoms are free at the bigger saunas — use them; syphilis rates are high and PrEP doesn't cover it.",
    ],
  },
  {
    emoji: "🫶", title: "Small things that make you look local",
    body: [
      "Say “sumimasen” (excuse me) to get attention, squeeze past, or apologize — it covers all three.",
      "When staff shout “Irasshaimase!” (welcome!) as you walk in, no reply is needed. A smile is enough.",
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

/* ---------------- FUJIFILM X100VI RECIPES ----------------
   The X100VI has 7 custom slots (C1–C7): one recipe per slot. */
const RECIPES = [
  {
    id: "classic", slot: "C1", name: "Tokyo Classic", emoji: "🏙️", sim: "Classic Chrome",
    vibe: "The recipe you already saved: muted, warm, editorial. The default for daytime streets and buildings.",
    settings: [["Film Simulation", "Classic Chrome"], ["Grain", "Off (or Weak, Small for texture)"], ["Color Chrome Effect", "Off (or Weak)"], ["Color Chrome FX Blue", "Off"], ["White Balance", "6700K, R −1, B −6"], ["Dynamic Range", "DR200"], ["Highlight / Shadow", "−2 / −2"], ["Color", "+1"], ["Sharpness", "−2"], ["High ISO NR", "−4"], ["Clarity", "0"], ["ISO", "Auto, up to 6400"], ["Exposure comp", "0 to +1/3"]],
    use: ["Shinjuku and Shibuya in daylight", "Skytree from the river", "Kinkaku-ji", "Fuji from the shinkansen window", "Anything architectural"],
  },
  {
    id: "neon", slot: "C2", name: "Neon Nights", emoji: "🌃", sim: "Classic Negative",
    vibe: "Cool teal shadows with punchy pink/red neon. Made for night streets and direct flash.",
    settings: [["Film Simulation", "Classic Negative"], ["Grain", "Weak, Small"], ["Color Chrome Effect", "Strong"], ["Color Chrome FX Blue", "Weak"], ["White Balance", "4000K, R +2, B −4"], ["Dynamic Range", "DR400"], ["Highlight / Shadow", "−1 / +1"], ["Color", "+2"], ["Sharpness", "−1"], ["High ISO NR", "−4"], ["Clarity", "0"], ["ISO", "Auto, up to 6400"], ["Exposure comp", "−1/3 (protects neon signs)"]],
    use: ["Kabukichō + the Godzilla head", "Golden Gai with flash", "Ni-chome streets (never inside bars)", "Dotonbori + Glico", "HEP FIVE wheel", "Kyoto Station staircase light-up", "Shinsekai"],
  },
  {
    id: "pastel", slot: "C3", name: "Disney Pastel", emoji: "🏰", sim: "Astia",
    vibe: "Soft, bright, fairytale color with gentle skin tones. Makes costumes and castles glow.",
    settings: [["Film Simulation", "Astia"], ["Grain", "Off"], ["Color Chrome Effect", "Weak"], ["Color Chrome FX Blue", "Off"], ["White Balance", "Auto, R +1, B −2"], ["Dynamic Range", "DR200"], ["Highlight / Shadow", "−1 / −1"], ["Color", "+2"], ["Sharpness", "0"], ["High ISO NR", "−2"], ["Clarity", "0"], ["ISO", "Auto, up to 3200"], ["Exposure comp", "+2/3"]],
    use: ["DisneySea + Disneyland in daylight", "The Mickey-window monorail", "Costume shots", "Halloween decor"],
  },
  {
    id: "reala", slot: "C4", name: "Reala Glow", emoji: "📸", sim: "Reala Ace",
    vibe: "True-to-life color and the most flattering skin. Your people, food and fit-check recipe.",
    settings: [["Film Simulation", "Reala Ace"], ["Grain", "Weak, Small"], ["Color Chrome Effect", "Weak"], ["Color Chrome FX Blue", "Off"], ["White Balance", "Auto, R +1, B −1"], ["Dynamic Range", "DR-Auto"], ["Highlight / Shadow", "0 / −1"], ["Color", "0"], ["Sharpness", "−1"], ["High ISO NR", "−4"], ["Clarity", "0"], ["ISO", "Auto, up to 6400"], ["Exposure comp", "+1/3"]],
    use: ["Birthday portrait at Mediterranean Harbor", "Pokémon Café plates", "Mirror fit checks", "Akihabara neon", "Okonomiyaki on the griddle"],
  },
  {
    id: "velvia", slot: "C5", name: "Vermilion + Fuji", emoji: "🗻", sim: "Velvia",
    vibe: "Saturated landscape color: orange torii, red maples, blue lake, pink sunrise sky.",
    settings: [["Film Simulation", "Velvia"], ["Grain", "Weak, Small"], ["Color Chrome Effect", "Strong"], ["Color Chrome FX Blue", "Strong"], ["White Balance", "Daylight, R +1, B −2"], ["Dynamic Range", "DR200"], ["Highlight / Shadow", "−1 / 0"], ["Color", "0"], ["Sharpness", "−1"], ["High ISO NR", "−4"], ["Clarity", "+1"], ["ISO", "Auto, up to 3200"], ["Exposure comp", "−1/3"]],
    use: ["Fushimi Inari torii tunnel", "Miyajima floating torii", "Shibuya Sky + Odaiba sunsets", "Oishi Park Fuji sunset", "Kawaguchiko sunrise", "Chūreitō Pagoda"],
  },
  {
    id: "nostalgic", slot: "C6", name: "Old Kyoto", emoji: "🏮", sim: "Nostalgic Neg.",
    vibe: "Amber, slightly faded, 1970s-film feeling. Lanterns and wood look timeless.",
    settings: [["Film Simulation", "Nostalgic Neg."], ["Grain", "Strong, Small"], ["Color Chrome Effect", "Strong"], ["Color Chrome FX Blue", "Off"], ["White Balance", "Auto, R +2, B −3"], ["Dynamic Range", "DR400"], ["Highlight / Shadow", "−1 / +1"], ["Color", "+1"], ["Sharpness", "−2"], ["High ISO NR", "−4"], ["Clarity", "−2"], ["ISO", "Auto, up to 6400"], ["Exposure comp", "+1/3"]],
    use: ["Omoide Yokochō lanterns", "Asakusa + Kaminarimon", "Ninenzaka + Yasaka Pagoda at golden hour", "Gion + Pontochō at dusk", "Nishiki Market"],
  },
  {
    id: "acros", slot: "C7", name: "Quiet Acros", emoji: "🖤", sim: "Acros + R",
    vibe: "Deep, grainy black and white. For moments that should feel still, respectful or timeless.",
    settings: [["Film Simulation", "Acros + R filter"], ["Grain", "Strong, Large"], ["Color Chrome Effect", "Off"], ["Monochromatic Color", "WC 0, MG 0"], ["White Balance", "Auto"], ["Dynamic Range", "DR400"], ["Highlight / Shadow", "+1 / +2"], ["Sharpness", "+1"], ["High ISO NR", "−4"], ["Clarity", "+2"], ["ISO", "Auto, up to 12800"], ["Exposure comp", "0"]],
    use: ["Hiroshima Peace Park + the Dome", "Rainy days anywhere", "Shinkansen platforms + train candids", "Street portraits with hard shadows"],
  },
];

const RECIPE_TIPS = [
  "Save each one: MENU → Image Quality Setting → Edit/Save Custom Setting → pick C1–C7 → enter the values → Edit Custom Name.",
  "Switch fast: press Q and turn the rear dial, or set the Fn button to “Select Custom Setting.”",
  "DR200 needs ISO 250+ and DR400 needs ISO 500+ — leave ISO on Auto and the camera handles it.",
  "Shoot RAW + JPEG for the once-only shots (birthday, Fuji, Fushimi Inari) so you can re-edit later.",
  "Bring a spare battery and a 128 GB card. A full Disney day drains one battery.",
];

/* ---------------- FOOD ---------------- */
// wiki: Japanese Wikipedia article for the photo (falls back to English `en`)
const FOODS = [
  { id: "ramen", emoji: "🍜", en: "Ramen", jp: "ラーメン", ro: "rāmen", wiki: "ラーメン", enwiki: "Ramen",
    what: "Wheat noodles in rich broth. Styles: tonkotsu (pork), shōyu (soy), shio (salt), miso.",
    order: { jp: "とんこつラーメンを一つ、麺かためで", ro: "Tonkotsu rāmen o hitotsu, men katame de", en: "One tonkotsu ramen, firm noodles" },
    tips: "Many shops use a ticket machine by the door: pay, press the button, hand over the ticket. Slurping is normal.", where: "Mutekiya tonkotsu, Ikebukuro (Wed) · Ichiran after a night out · Kyoto ramen (Sun)", day: "d3" },
  { id: "tsukemen", emoji: "🥢", en: "Tsukemen (dipping ramen)", jp: "つけ麺", ro: "tsukemen", wiki: "つけ麺", enwiki: "Tsukemen",
    what: "Thick cold noodles you dip into a concentrated hot broth.",
    order: { jp: "つけ麺の大盛りください", ro: "Tsukemen no ōmori kudasai", en: "A large tsukemen, please" },
    tips: "When you finish, ask for “sūpu wari” — they'll thin the leftover broth with soup so you can drink it.", where: "Fūunji near Shinjuku South Exit, 10 min from your hotel", day: "d3" },
  { id: "sushi", emoji: "🍣", en: "Sushi", jp: "寿司", ro: "sushi", wiki: "寿司", enwiki: "Sushi",
    what: "Vinegared rice with raw fish (nigiri) or rolled (maki).",
    order: { jp: "おすすめを二貫ください", ro: "Osusume o nikan kudasai", en: "Two pieces of whatever you recommend" },
    tips: "Dip the fish side, not the rice, in soy sauce. Eat nigiri in one bite. “Sabi-nuki” = no wasabi.", where: "Uobei conveyor sushi, Shibuya (Wed)", day: "d3" },
  { id: "onigiri", emoji: "🍙", en: "Onigiri (rice ball)", jp: "おにぎり", ro: "onigiri", wiki: "おにぎり", enwiki: "Onigiri",
    what: "Rice triangle wrapped in seaweed with a filling. The konbini breakfast of champions.",
    order: { jp: "ツナマヨと鮭をください", ro: "Tsuna mayo to shake o kudasai", en: "Tuna-mayo and salmon, please" },
    tips: "Unwrap: pull tab 1 down the middle, then corners 2 and 3. Fillings: tsuna mayo, shake (salmon), ume (sour plum — strong!).", where: "Any konbini, every morning" },
  { id: "yakitori", emoji: "🍢", en: "Yakitori", jp: "焼き鳥", ro: "yakitori", wiki: "焼き鳥", enwiki: "Yakitori",
    what: "Charcoal-grilled chicken skewers: thigh, meatballs, skin, hearts…",
    order: { jp: "ねぎまとつくねを、タレで二本ずつお願いします", ro: "Negima to tsukune o, tare de nihon zutsu onegai shimasu", en: "Two each of chicken-leek and meatball, with sauce" },
    tips: "“Tare” = sweet glaze, “shio” = salt. Order a beer first and a few skewers at a time.", where: "Omoide Yokochō (Fri, before Golden Gai)", day: "d5" },
  { id: "takoyaki", emoji: "🐙", en: "Takoyaki", jp: "たこ焼き", ro: "takoyaki", wiki: "たこ焼き", enwiki: "Takoyaki",
    what: "Crispy-gooey batter balls with octopus, topped with sauce, mayo and bonito flakes. Osaka's icon.",
    order: { jp: "たこ焼き八個入りを一つください", ro: "Takoyaki hakko-iri o hitotsu kudasai", en: "One 8-piece takoyaki, please" },
    tips: "Molten inside — bite a hole and let the steam out first. Eat it at the stand's counter.", where: "Wanaka Dōtonbori (Mon Nov 2)", day: "d8" },
  { id: "okonomiyaki", emoji: "🥞", en: "Okonomiyaki", jp: "お好み焼き", ro: "okonomiyaki", wiki: "お好み焼き", enwiki: "Okonomiyaki",
    what: "Savory cabbage pancake. Hiroshima style is layered with noodles.",
    order: { jp: "肉玉そば入り、お願いします", ro: "Nikutama soba-iri, onegai shimasu", en: "Pork-and-egg with soba noodles, please" },
    tips: "Eat it straight off the griddle with the little spatula (hera).", where: "Yagenbori Hassho, Hiroshima (Tue Nov 3)", day: "d9" },
  { id: "gyoza", emoji: "🥟", en: "Gyōza", jp: "餃子", ro: "gyōza", wiki: "餃子", enwiki: "Jiaozi",
    what: "Pan-fried pork dumplings with crispy bottoms.",
    order: { jp: "餃子一人前と生ビールをください", ro: "Gyōza ichinin-mae to nama bīru o kudasai", en: "One serving of gyoza and a draft beer" },
    tips: "Mix soy sauce, vinegar and chili oil (rāyu) in the little dish to dip.", where: "Ramen shops and izakaya everywhere (the DisneySea Gyoza Dog counts 😉)" },
  { id: "tonkatsu", emoji: "🐖", en: "Tonkatsu", jp: "とんかつ", ro: "tonkatsu", wiki: "とんかつ", enwiki: "Tonkatsu",
    what: "Panko-crusted fried pork cutlet with shredded cabbage, rice and miso soup.",
    order: { jp: "ロースかつ定食をください", ro: "Rōsu katsu teishoku o kudasai", en: "The pork-loin cutlet set meal, please" },
    tips: "“Teishoku” = set meal. Rice, cabbage and miso refills are often free — ask “okawari” (a refill).", where: "Tonkatsu Maisen Aoyama, Omotesandō — dinner after Shibuya Sky (Fri)", day: "d5" },
  { id: "karaage", emoji: "🍗", en: "Karaage / Famichiki", jp: "唐揚げ", ro: "karaage", wiki: "唐揚げ", enwiki: "Karaage",
    what: "Juicy Japanese fried chicken. Konbini versions are legendary.",
    order: { jp: "ファミチキ一つください", ro: "Famichiki hitotsu kudasai", en: "One Famichiki, please (FamilyMart)" },
    tips: "Konbini hot snacks sit by the register — just point. Lawson's version is “Karaage-kun.”", where: "Late-night konbini runs" },
  { id: "udon", emoji: "🍲", en: "Udon", jp: "うどん", ro: "udon", wiki: "うどん", enwiki: "Udon",
    what: "Thick, chewy wheat noodles in a light dashi broth.",
    order: { jp: "きつねうどんをください", ro: "Kitsune udon o kudasai", en: "Kitsune udon (with sweet fried tofu), please" },
    tips: "Kitsune (fox) udon is extra fitting at Fushimi Inari — fried tofu is the fox spirits' favorite.", where: "Kitsune udon by Fushimi Inari (Mon Nov 2)", day: "d8" },
  { id: "soba", emoji: "🥢", en: "Soba", jp: "蕎麦", ro: "soba", wiki: "蕎麦", enwiki: "Soba",
    what: "Buckwheat noodles, served cold with dipping sauce (zaru) or hot in broth.",
    order: { jp: "ざるそばをください", ro: "Zaru soba o kudasai", en: "Cold soba with dipping sauce, please" },
    tips: "At the end, pour the cooking water (sobayu) into your leftover sauce and drink it.", where: "Soba in Arashiyama (Mon Nov 2)", day: "d8" },
  { id: "tempura", emoji: "🍤", en: "Tempura", jp: "天ぷら", ro: "tenpura", wiki: "天ぷら", enwiki: "Tempura",
    what: "Light, crispy battered shrimp and vegetables. Tendon = tempura over rice.",
    order: { jp: "天丼をください", ro: "Tendon o kudasai", en: "A tempura rice bowl, please" },
    tips: "Dip in tentsuyu sauce with grated daikon, or sprinkle salt.", where: "Tendon at Edomae Tendon Masaru, Asakusa (Fri lunch)", day: "d5" },
  { id: "curry", emoji: "🍛", en: "Japanese curry", jp: "カレーライス", ro: "karē raisu", wiki: "カレーライス", enwiki: "Japanese curry",
    what: "Thick, mildly sweet curry over rice. Katsu curry adds a pork cutlet.",
    order: { jp: "カツカレー、普通の辛さで", ro: "Katsu karē, futsū no karasa de", en: "Katsu curry, regular spice" },
    tips: "Spice is chosen by level; “futsū” (regular) is mild by US standards.", where: "CoCo Ichibanya chains near every station" },
  { id: "gyudon", emoji: "🍚", en: "Gyūdon (beef bowl)", jp: "牛丼", ro: "gyūdon", wiki: "牛丼", enwiki: "Gyūdon",
    what: "Thin-sliced beef and onions simmered sweet over rice. Cheap, fast, 24 hours.",
    order: { jp: "牛丼の並、つゆだくで", ro: "Gyūdon no nami, tsuyudaku de", en: "Regular beef bowl, extra sauce" },
    tips: "Sizes: nami (regular), ōmori (large). Add a raw egg (tamago) on top like a local.", where: "Yoshinoya / Matsuya / Sukiya — post-club fuel" },
  { id: "tamagosando", emoji: "🥪", en: "Tamago sando (egg sandwich)", jp: "たまごサンド", ro: "tamago sando", wiki: "卵焼き", enwiki: "Egg sandwich",
    what: "Fluffy milk bread with creamy egg salad. The konbini cult classic.",
    order: { jp: "たまごサンドください", ro: "Tamago sando kudasai", en: "An egg sandwich, please" },
    tips: "7-Eleven's is the famous one. Grab it early — it sells out.", where: "Konbini breakfast" },
  { id: "melonpan", emoji: "🍈", en: "Melon pan", jp: "メロンパン", ro: "meron pan", wiki: "メロンパン", enwiki: "Melonpan",
    what: "Sweet bun with a crackly cookie crust (named for its look, not flavor).",
    order: { jp: "メロンパンを一つください", ro: "Meron pan o hitotsu kudasai", en: "One melon pan, please" },
    tips: "Asakusa Kagetsudō's giant version is the move. Eat it beside the shop.", where: "Asakusa Kagetsudō (Fri)", day: "d5" },
  { id: "taiyaki", emoji: "🐟", en: "Taiyaki", jp: "たい焼き", ro: "taiyaki", wiki: "たい焼き", enwiki: "Taiyaki",
    what: "Fish-shaped waffle filled with sweet red bean, custard or chocolate.",
    order: { jp: "カスタードを一つください", ro: "Kasutādo o hitotsu kudasai", en: "One custard, please" },
    tips: "“Anko” = red bean (traditional). Eat it hot.", where: "Sunshine 60 Street, Ikebukuro (Wed) · Asakusa (Fri)", day: "d3" },
  { id: "matcha", emoji: "🍵", en: "Matcha", jp: "抹茶", ro: "matcha", wiki: "抹茶", enwiki: "Matcha",
    what: "Stone-ground green tea: as tea, lattes, soft-serve, parfaits, soba…",
    order: { jp: "抹茶ソフトを一つください", ro: "Matcha sofuto o hitotsu kudasai", en: "One matcha soft-serve, please" },
    tips: "Uji is Japan's matcha capital. A matcha parfait is basically required.", where: "Kinkaku-ji + Arashiyama (Mon Nov 2) · Ninenzaka, Kyoto (Sun)", day: "d8" },
  { id: "daifuku", emoji: "🍓", en: "Ichigo daifuku", jp: "いちご大福", ro: "ichigo daifuku", wiki: "いちご大福", enwiki: "Daifuku",
    what: "Soft mochi wrapped around red bean and a whole strawberry.",
    order: { jp: "いちご大福を一つください", ro: "Ichigo daifuku o hitotsu kudasai", en: "One strawberry daifuku, please" },
    tips: "Cut it in half for the photo — the strawberry cross-section is the shot.", where: "Kuromon Market, Osaka (Wed Nov 4 morning)", day: "d10" },
  { id: "oden", emoji: "🍢", en: "Oden", jp: "おでん", ro: "oden", wiki: "おでん", enwiki: "Oden",
    what: "Egg, daikon, fish cakes and tofu simmered in dashi. Konbini counters have it in cold months.",
    order: { jp: "大根と卵をください", ro: "Daikon to tamago o kudasai", en: "Daikon and egg, please" },
    tips: "Point at what you want in the pot; ask for “karashi” (mustard).", where: "Konbini counter, late night" },
  { id: "kushikatsu", emoji: "🍡", en: "Kushikatsu", jp: "串カツ", ro: "kushikatsu", wiki: "串カツ", enwiki: "Kushikatsu",
    what: "Deep-fried skewers of meat, veg and cheese. Osaka's drinking food.",
    order: { jp: "おまかせで五本お願いします", ro: "Omakase de gohon onegai shimasu", en: "Five chef's-choice skewers, please" },
    tips: "NO double-dipping in the shared sauce (二度づけ禁止). Use a cabbage leaf to scoop more sauce.", where: "Kushikatsu Daruma Shinsekai Sōhonten, Osaka (Tue Nov 3)", day: "d9" },
  { id: "momiji", emoji: "🍁", en: "Momiji manjū", jp: "もみじ饅頭", ro: "momiji manjū", wiki: "もみじ饅頭", enwiki: "Momiji manjū",
    what: "Maple-leaf sponge cakes filled with red bean or custard. Miyajima's sweet.",
    order: { jp: "揚げもみじを一つください", ro: "Age-momiji o hitotsu kudasai", en: "One deep-fried momiji, please" },
    tips: "The fried version (age-momiji) is only on Miyajima — get it hot.", where: "Miyajima (Tue Nov 3)", day: "d9" },
  { id: "kaki", emoji: "🦪", en: "Grilled oysters", jp: "焼き牡蠣", ro: "yaki-gaki", wiki: "カキ (貝)", enwiki: "Oyster",
    what: "Hiroshima Bay oysters grilled in the shell with a squeeze of lemon.",
    order: { jp: "焼き牡蠣を二つください", ro: "Yaki-gaki o futatsu kudasai", en: "Two grilled oysters, please" },
    tips: "Stalls on Miyajima's Omotesandō street grill them to order.", where: "Miyajima (Tue Nov 3)", day: "d9" },
  { id: "hoto", emoji: "🎃", en: "Hōtō", jp: "ほうとう", ro: "hōtō", wiki: "ほうとう", enwiki: "Hōtō",
    what: "Fat flat noodles stewed in miso with pumpkin and veg, served in an iron pot.",
    order: { jp: "かぼちゃほうとうを一つください", ro: "Kabocha hōtō o hitotsu kudasai", en: "One pumpkin hōtō, please" },
    tips: "Perfect after a cold Fuji sunset. Portions are big.", where: "Kosaku, Kawaguchiko (Wed Nov 4) — check 4.0+ first", day: "d10" },
  { id: "gyukatsu", emoji: "🥩", en: "Gyūkatsu (beef cutlet)", jp: "牛カツ", ro: "gyūkatsu", wiki: "牛カツ", enwiki: "Gyukatsu", what: "Crispy breaded beef left rare inside — you finish each slice yourself on a tiny hot stone.", order: { jp: "牛カツ定食をお願いします。", ro: "Gyūkatsu teishoku o onegai shimasu.", en: "A gyukatsu set meal, please." }, tips: "Sear each piece only a few seconds. Try it with wasabi + soy, then with the sauce.", where: "Gyūkatsu Motomura, Akihabara (Sat lunch)", day: "d6" },
  { id: "pancakes", emoji: "🥞", en: "Soufflé pancakes", jp: "スフレパンケーキ", ro: "sufure pankēki", wiki: "パンケーキ", enwiki: "Soufflé pancake", what: "Jiggly, cloud-soft pancakes about 4 cm tall. A Tokyo café classic.", order: { jp: "スフレパンケーキを一つお願いします。", ro: "Sufure pankēki o hitotsu onegai shimasu.", en: "One soufflé pancake, please." }, tips: "They're cooked to order, so expect a 20–30 min wait. Put your name on the list, then wander.", where: "A Happy Pancake, Omotesandō (Fri afternoon)", day: "d5" },
  { id: "yakiniku", emoji: "🍖", en: "Yakiniku (Japanese BBQ)", jp: "焼肉", ro: "yakiniku", wiki: "焼肉", enwiki: "Yakiniku", what: "Grill-it-yourself wagyu and other meats at your table. Solo-friendly chains give you your own little grill.", order: { jp: "一人焼肉セットをお願いします。", ro: "Hitori yakiniku setto o onegai shimasu.", en: "A solo yakiniku set, please." }, tips: "Start with tongue (タン, tan) with lemon, then kalbi (カルビ). Don't overcook wagyu.", where: "Yakiniku Iwasaki, Ueno, after Disneyland (Thu) — Google 4.8", day: "d4" },
  { id: "kaisendon", emoji: "🐟", en: "Kaisendon (seafood bowl)", jp: "海鮮丼", ro: "kaisendon", wiki: "海鮮丼", enwiki: "Kaisendon", what: "Rice topped with raw tuna, salmon, salmon roe, sea urchin and more. Market breakfast royalty.", order: { jp: "海鮮丼をお願いします。", ro: "Kaisendon o onegai shimasu.", en: "A seafood rice bowl, please." }, tips: "Dab wasabi on the fish, not into the soy sauce. Drizzle soy lightly over the top.", where: "Kuromon Market, Osaka (Wed Nov 4 morning)", day: "d10" },
  { id: "highball", emoji: "🥃", en: "Highball", jp: "ハイボール", ro: "haibōru", wiki: "ハイボール", enwiki: "Highball",
    what: "Japanese whisky and soda — the default bar drink.",
    order: { jp: "ハイボールください", ro: "Haibōru kudasai", en: "A highball, please" },
    tips: "Cheap and light. Good pacing drink for long Ni-chome nights.", where: "Every bar" },
  { id: "lemonsour", emoji: "🍋", en: "Lemon sour (chūhai)", jp: "レモンサワー", ro: "remon sawā", wiki: "チューハイ", enwiki: "Chūhai",
    what: "Shōchū, soda and lemon. Dangerously easy to drink.",
    order: { jp: "レモンサワー、もう一杯！", ro: "Remon sawā, mō ippai!", en: "Another lemon sour!" },
    tips: "Canned versions at konbini (Strong Zero is 9% — careful).", where: "Izakaya + bars" },
  { id: "sake", emoji: "🍶", en: "Sake (nihonshu)", jp: "日本酒", ro: "nihonshu", wiki: "日本酒", enwiki: "Sake",
    what: "Rice wine, served cold (hiya), room temp or warm (atsukan).",
    order: { jp: "おすすめの日本酒を冷やでお願いします", ro: "Osusume no nihonshu o hiya de onegai shimasu", en: "Your recommended sake, chilled" },
    tips: "In Japan “sake” means alcohol in general; say “nihonshu” for rice wine.", where: "Pontochō, Kyoto (Sun) · any izakaya", day: "d7" },
];

const FOOD_ORDERING = [
  { jp: "〇〇をください", ro: "___ o kudasai", en: "___, please" },
  { jp: "これを一つ／二つ", ro: "Kore o hitotsu / futatsu", en: "One / two of these" },
  { jp: "おすすめは何ですか？", ro: "Osusume wa nan desu ka?", en: "What do you recommend?" },
  { jp: "大盛りで", ro: "Ōmori de", en: "Large size" },
  { jp: "おかわり", ro: "Okawari", en: "A refill / seconds" },
  { jp: "持ち帰りで", ro: "Mochikaeri de", en: "To go" },
  { jp: "店内で", ro: "Tennai de", en: "To eat here" },
  { jp: "〇〇は入っていますか？", ro: "___ wa haitte imasu ka?", en: "Does it have ___ in it?" },
];

/* ---------------- ANSWER TILES ----------------
   Shown with "Ask for it" questions so the person you ask can POINT at their answer. */
const HEAR = {
  dir: [["⬆️", "まっすぐ", "massugu", "straight ahead"], ["➡️", "右", "migi", "right"], ["⬅️", "左", "hidari", "left"], ["🔼", "上の階", "ue no kai", "upstairs"], ["🔽", "下の階", "shita no kai", "downstairs"], ["🔄", "後ろ", "ushiro", "behind you"], ["👉", "あそこ", "asoko", "over there"], ["↔️", "向こう側", "mukō-gawa", "the other side"], ["🚪", "出口を出て", "deguchi o dete", "go out the exit"], ["🎫", "改札の中", "kaisatsu no naka", "inside the ticket gates"]],
  bansen: [["1", "1番線", "ichi-bansen", "platform 1"], ["2", "2番線", "ni-bansen", "platform 2"], ["3", "3番線", "san-bansen", "platform 3"], ["4", "4番線", "yon-bansen", "platform 4"], ["5", "5番線", "go-bansen", "platform 5"], ["6", "6番線", "roku-bansen", "platform 6"], ["7", "7番線", "nana-bansen", "platform 7"], ["8", "8番線", "hachi-bansen", "platform 8"], ["9", "9番線", "kyū-bansen", "platform 9"], ["10", "10番線", "jū-bansen", "platform 10"], ["11", "11番線", "jūichi-bansen", "platform 11"], ["12", "12番線", "jūni-bansen", "platform 12"], ["13", "13番線", "jūsan-bansen", "platform 13"], ["14", "14番線", "jūyon-bansen", "platform 14"], ["15", "15番線", "jūgo-bansen", "platform 15"], ["16", "16番線", "jūroku-bansen", "platform 16"]],
  entry: [["⭕", "大丈夫です", "daijōbu desu", "yes, that's fine"], ["🙅", "日本人のみです", "Nihonjin nomi desu", "Japanese only"], ["🔞", "年齢制限があります", "nenrei seigen ga arimasu", "there's an age limit"], ["🪪", "身分証を見せてください", "mibunshō o misete kudasai", "show me your ID"], ["💴", "前払いです", "maebarai desu", "pay up front"]],
  yesno: [["⭕", "はい", "hai", "yes"], ["❌", "いいえ", "iie", "no"], ["👌", "大丈夫です", "daijōbu desu", "that's fine"], ["🙅", "だめです", "dame desu", "not allowed"], ["⏳", "少々お待ちください", "shōshō omachi kudasai", "one moment, please"]],
  full: [["⭕", "どうぞ", "dōzo", "come in / go ahead"], ["❌", "満席です", "manseki desu", "we're full"], ["⏳", "少々お待ちください", "shōshō omachi kudasai", "please wait a bit"], ["🙇", "ちょっと…", "chotto…", "sorry, not possible (polite no)"]],
  side: [["⬅️", "左側", "hidari-gawa", "left side"], ["➡️", "右側", "migi-gawa", "right side"], ["🪟", "窓側", "mado-gawa", "window side"]],
  kai: [["B2", "地下2階", "chika ni-kai", "basement 2"], ["B1", "地下1階", "chika ik-kai", "basement 1"], ["1F", "1階", "ik-kai", "1st floor"], ["2F", "2階", "ni-kai", "2nd floor"], ["3F", "3階", "san-gai", "3rd floor"], ["4F", "4階", "yon-kai", "4th floor"], ["5F", "5階", "go-kai", "5th floor"], ["6F", "6階", "rok-kai", "6th floor"], ["7F", "7階", "nana-kai", "7th floor"], ["8F", "8階", "hachi-kai", "8th floor"], ["9F", "9階", "kyū-kai", "9th floor"], ["10F", "10階", "juk-kai", "10th floor"], ["14F", "14階", "jūyon-kai", "14th floor"], ["🏙️", "屋上", "okujō", "rooftop"]],
  min: [["5", "5分", "go-fun", "5 minutes"], ["10", "10分", "jup-pun", "10 minutes"], ["15", "15分", "jūgo-fun", "15 minutes"], ["20", "20分", "nijup-pun", "20 minutes"], ["30", "30分", "sanjup-pun", "30 minutes"], ["60", "1時間", "ichi-jikan", "1 hour"]],
  deliver: [["⭕", "はい、届きます", "hai, todokimasu", "yes, it'll arrive"], ["❌", "間に合いません", "maniaimasen", "it won't make it in time"], ["📅", "明日", "ashita", "tomorrow"], ["📅", "明後日", "asatte", "day after tomorrow"], ["⏳", "少々お待ちください", "shōshō omachi kudasai", "one moment, please"]],
  time: [["⏰", "今", "ima", "now"], ["⏳", "もうすぐ", "mō sugu", "soon"], ["🏁", "終わりました", "owarimashita", "it's already over"], ["❓", "わかりません", "wakarimasen", "I don't know"]],
  money: [["🆓", "無料です", "muryō desu", "it's free"], ["💴", "千円", "sen-en", "¥1,000"], ["💴", "二千円", "nisen-en", "¥2,000"], ["💴", "三千円", "sanzen-en", "¥3,000"]],
  write: [],
  none: [],
};
// Which answers need the "please write it here" box
const HEAR_WRITE = ["time", "money", "write"];
const ASK_HELP = {
  jp: "すみません、日本語が少ししかわかりません。答えを指さしてください。",
  ro: "Sumimasen, nihongo ga sukoshi shika wakarimasen. Kotae o yubisashite kudasai.",
  en: "Sorry, I only understand a little Japanese. Please point to your answer.",
  writeJp: "ここに書いていただけますか？",
  writeEn: "Could you write it here?",
};

/* ---------------- SONGS ----------------
   why: the Japan connection (no lyrics). mine: from Ian's top Spotify artists. day: suggested day to play it. */
const SONG_SECTIONS = [
  {
    title: "🌸 Ariana Grande", sub: "",
    songs: [
      { t: "ordinary things (feat. Nonna)", a: "Ariana Grande", y: 2024, mine: true, fan: "🗼 Tokyo", why: "The first verse is set in Tokyo — a couple out for a Japanese dinner there. From eternal sunshine; play it at your Omoide Yokochō dinner on night one.", day: "d1" },
      { t: "bad idea", a: "Ariana Grande", y: 2019, mine: true, why: "The chorus slips in a Japanese-style nickname for Ari — a nod to her love of Japanese culture (per Songfacts).", day: "d2" },
    ],
  },
  {
    title: "🐍 Megan Thee Stallion", sub: "the biggest otaku in your rotation",
    songs: [
      { t: "Mamushi (feat. Yuki Chiba)", a: "Megan Thee Stallion", y: 2024, mine: true, why: "Largely performed in Japanese with Japanese rapper Yuki Chiba. The viral hook “Watashi wa star” means “I'm a star.” Mamushi is a Japanese pit viper.", day: "d5" },
      { t: "Otaku Hot Girl", a: "Megan Thee Stallion", y: 2024, mine: true, why: "Jujutsu Kaisen and Naruto references, and it samples JJK's commercial-break music. Play it in Ikebukuro, Tokyo's anime hub.", day: "d6" },
      { t: "Wanna Be", a: "GloRilla & Megan Thee Stallion", y: 2024, mine: true, fan: "⚔️ AOT", why: "Megan's verse pays homage to Attack on Titan — it set off a “Rumbling” among AOT fans.", day: "d3" },
      { t: "HISS", a: "Megan Thee Stallion", y: 2024, mine: true, why: "References Tokyo Ghoul — an anime set in Tokyo.", day: "d6" },
      { t: "BOA", a: "Megan Thee Stallion", y: 2024, mine: true, why: "One Piece references; in the video she cosplays Boa Hancock and runs through Gantz- and Dance Dance Revolution-inspired scenes.", day: "d5" },
      { t: "Opposite Day", a: "Megan Thee Stallion", mine: true, why: "Another One Piece reference.", day: "d9" },
      { t: "Girls in the Hood", a: "Megan Thee Stallion", y: 2020, mine: true, why: "Naruto reference.", day: "d8" },
      { t: "Running Up (Freestyle)", a: "Megan Thee Stallion", mine: true, fan: "⚡ Pokémon", why: "Dragon Ball Z and Pokémon references.", day: "d6" },
      { t: "Tuned In (Freestyle)", a: "Megan Thee Stallion", mine: true, fan: "⚡ Pokémon", why: "Pokémon reference — queue it for your Pokémon Center day.", day: "d6" },
    ],
  },
  {
    title: "😼 Doja Cat", sub: "",
    songs: [
      { t: "Kiss Me More (feat. Naomi Watanabe)", a: "Doja Cat", y: 2021, mine: true, why: "Japanese remix: Japanese comedian Naomi Watanabe raps her first-ever verse, with Japanese lyrics written by Awich in place of SZA's part.", day: "d5" },
    ],
  },
  {
    title: "💖 Nicki Minaj", sub: "",
    songs: [
      { t: "Itty Bitty Piggy", a: "Nicki Minaj", y: 2009, mine: true, why: "Name-checks her “Harajuku Barbie” persona — named for Tokyo's Harajuku street-style district.", day: "d5" },
    ],
  },
  {
    title: "🎧 Zedd", sub: "",
    songs: [
      { t: "Lost in Japan (Remix)", a: "Shawn Mendes & Zedd", y: 2018, mine: true, why: "Japan is in the title and the hook.", day: "d1" },
      { t: "Nakama (feat. Ai)", a: "Zedd", y: 2025, mine: true, why: "Ending theme of the anime Dragon Ball Daima, sung in Japanese and English. “Nakama” means your crew / comrades.", day: "d3" },
    ],
  },
  {
    title: "💚 Charli xcx", sub: "",
    songs: [
      { t: "Boom Clap (Japanese version)", a: "Charli xcx", y: 2015, mine: true, why: "Re-recorded in Japanese for the Japan edition of SUCKER. Japan-only bonus — may not stream in the US, so try YouTube.", day: "d5" },
      { t: "Break the Rules (Japanese version)", a: "Charli xcx", y: 2015, mine: true, why: "The other Japanese-language re-record from the Japan edition of SUCKER.", day: "d8" },
      { t: "Fancy", a: "Iggy Azalea ft. Charli xcx", y: 2014, mine: true, why: "Tokyo gets a shout-out in the lyrics.", day: "d5" },
    ],
  },
];

/* ---------------- PHOTO IDEAS ---------------- */
const PHOTO_IDEAS = [
  { cat: "Signature shots", items: [
    ["🎂", "Birthday portrait at Mediterranean Harbor", "Blue hour, volcano behind you, birthday sticker visible.", "d2"],
    ["⛩️", "Walking away down the torii tunnel", "Look back over your shoulder at Fushimi Inari, 7 AM.", "d8"],
    ["🗻", "Back-to-camera Fuji over the lake", "Oishi Park at sunset, 2–3x zoom so Fuji looks huge.", "d10"],
    ["🌅", "Chūreitō Pagoda + Fuji", "From the deck above, you at the right edge of the frame.", "d11"],
    ["🌆", "Shibuya Sky silhouette", "Sky Edge glass corner at sunset.", "d5"],
    ["🏮", "Kaminarimon lantern from below", "Stand under it, phone low, looking up.", "d5"],
    ["🦌", "Miyajima torii + a deer", "Sit on the shore with a deer wandering into frame.", "d9"],
    ["🐙", "Glico pose on Ebisubashi", "Arms in a V, knee up, flash on.", "d8"],
  ]},
  { cat: "Fit checks + portraits", items: [
    ["🪞", "Omokado mirror entrance", "Full-body in the kaleidoscope mirrors.", "d5"],
    ["🛗", "Elevator mirror fit check", "Every night before going out — the photo-dump opener.", ""],
    ["⚡", "Pokémon Center Mega Tokyo statues", "Life-size Pokémon at the entrance — plush in hand, crouch low.", "d3"],
    ["🚶", "Candid walk past the camera", "Have them crouch, burst mode, you looking away. Pontochō, the Scramble, Gion.", ""],
    ["👘", "Kimono rental portrait", "Asakusa or Ninenzaka — temple backdrop.", "d5"],
    ["🎃", "Costume shot at the Haunted Mansion", "Centered, slightly low, moody.", "d4"],
  ]},
  { cat: "Night + flash", items: [
    ["📸", "Direct flash in Golden Gai", "Lean in a lantern doorway. Alleys only, never inside bars.", "d5"],
    ["🦖", "Godzilla peeking over Kabukichō", "From Central Road, flash on.", "d1"],
    ["🐱", "3D cat billboard video", "Film 10 seconds — it moves.", "d1"],
    ["🎡", "HEP FIVE red Ferris wheel", "Shot from the street below.", "d8"],
    ["🌃", "Shinsekai neon + Tsūtenkaku", "Best direct-flash street of the trip.", "d9"],
    ["🌈", "Kyoto Station staircase light-up", "Sit halfway up the 171 steps.", "d7"],
  ]},
  { cat: "Carousel details", items: [
    ["🥪", "Konbini egg sando, held up", "The most-posted snack in Japan.", ""],
    ["🍜", "Ramen from directly above", "Before the first slurp.", ""],
    ["🥤", "Vending machines glowing at night", "Stand back and get a whole row.", ""],
    ["🚄", "The shinkansen nose on the platform", "Shoot low from the front as it arrives.", "d7"],
    ["🪟", "Fuji through the train window", "Lens flat on the glass.", "d7"],
    ["🍰", "Pokémon Café plate flat-lay", "Overhead before you touch it.", "d6"],
    ["🍓", "Strawberry daifuku cut in half", "The cross-section is the shot.", "d10"],
    ["🎟️", "Tickets + passes on a table", "DisneySea, Disneyland, shinkansen tickets — trip receipts.", ""],
    ["🔑", "Hotel key + window view", "First thing after check-in.", "d1"],
  ]},
  { cat: "Video clips (3–5 sec each)", items: [
    ["🚦", "Scramble Crossing light change", "From the Starbucks side or Shibuya Sky.", "d6"],
    ["🚃", "Train pulling into the platform", "Any station — reels love it.", "" ],
    ["🌀", "Mewtwo tank slow pan", "Pokémon Center Shibuya.", "d6"],
    ["🎆", "Disney night show", "One wide clip, then put the phone down.", "d2"],
    ["♨️", "Onsen steam at dusk", "Only where photos are allowed (outside the bath).", "d10"],
  ]},
];

/* ---------------- FAN QUESTS (checked for Oct 26 – Nov 5, 2026) ---------------- */
const FAN_QUESTS = [
  { fandom: "Ariana Grande", emoji: "🌸", items: [
    { t: "Tower Records “Tower Love!” × Ariana", where: "Tower Records Shibuya (and stores nationwide)", when: "Running since Sep 29, 2026", day: "d6",
      what: "Tower's campaign for her album petal: B1-size posters in store, a fan lottery, and back-catalog promos. Grab the Japanese edition of petal (Japanese CDs come with an obi strip and often bonus tracks).",
      place: "Tower Records Shibuya", link: "https://www.universal-music.co.jp/ariana-grande/news/2026-09-25/" },
  ]},
  { fandom: "My Hero Academia", emoji: "💥", items: [
    { t: "MHA × Umeda Sky Building", where: "Kūchū Teien Observatory, 40F, Umeda Sky Building (15–20 min walk from your Osaka hotel)", when: "Oct 30 – Nov 30, 2026 · 9:30–22:30", day: "d8",
      what: "Collab ticket ¥2,800: observatory entry + 2 random stickers + stamp rally (finish it for a glass magnet). Character photo panels, a ¥880 collab drink with a coaster, and goods in the 39F shop.",
      place: "Umeda Sky Building", link: "https://event.amnibus.com/heroaca-skybldg/" },
    { t: "My Hero Academia Café — WE ARE HERO HOLICS", where: "BOX cafe&space HEP FIVE, Osaka (under the red Ferris wheel, next to your hotel)", when: "Oct 22 – Dec 6, 2026", day: "d8",
      what: "Themed menu for Deku, Bakugo, Todoroki and the class. Advance booking ¥715 includes a hologram sticker.",
      place: "HEP FIVE Osaka", link: "https://animeanime.jp/article/2026/10/03/103463.html" },
    { t: "My Hero Academia in Fuji-Q Highland", where: "Fuji-Q Highland, next to Kawaguchiko", when: "Until Nov 8, 2026 · park hours", day: "d10", what: "Deku / Bakugo / Todoroki announcements on the rides, MHA music on Kirarinko, a stamp rally, MHA-wrapped trains + buses, plus collab food with random placemats/coasters, and merch at SHOP FUJIYAMA. Collab one-day pass comes with a 3-piece rubber-band set (regular passes ¥6,000–7,900 by day; check fujiq.jp for the collab price).", place: "Fuji-Q Highland", link: "https://collabo-cafe.com/events/collabo/heroaca-fujiq-highland-collabo2026/" },
    { t: "MHA Chara Pop Store", where: "Bandai Namco Cross Store, atre Akihabara", when: "Until Jan 17, 2027", day: "d6", what: "Character pop-up shop with MHA goods — right by Akihabara Station on your Saturday fan run.", place: "atre Akihabara", link: "https://charagoo.jp/collab/region/tokyo/" },
    { t: "Same café in Tokyo", where: "BOX cafe&space, Q Plaza Harajuku 3F", when: "Oct 16 – Dec 20, 2026", day: "d5",
      what: "Fits the Omotesando stop on Friday afternoon.", place: "Q Plaza Harajuku, 6-28-6 Jingumae", link: "https://animeanime.jp/article/2026/10/03/103463.html" },
  ]},
  { fandom: "Attack on Titan", emoji: "⚔️", items: [
    { t: "AOT DJ-theme POP UP SHOP", where: "Tower Records Shibuya (also Abeno Hoop, Osaka)", when: "Until Nov 29, 2026", day: "d3", what: "Attack on Titan pop-up inside Tower Records Shibuya — same stop as Ariana's petal campaign.", place: "Tower Records Shibuya", link: "https://charagoo.jp/collab/region/tokyo/" },
    { t: "Guren no Yumiya — SCREEN X / 4DX screening", where: "109 Cinemas Premium Shinjuku (ScreenX) · Grand Cinema Sunshine Ikebukuro (ULTRA 4DX) · TOHO Cinemas Ikebukuro", when: "From Oct 23, 2026 · first-week gift Oct 23–29", day: "d3",
      what: "Recap film of the anime shown only in SCREEN X, 4DX and ULTRA 4DX. First week: a free Eren mini shikishi (art board) while supplies last. Japanese audio — check if subtitled.",
      place: "TOHO Cinemas Ikebukuro", link: "https://collabo-cafe.com/events/collabo/attack-on-titan-event-guren-screenx-nyujosha-tokuten-week1-2026/" },
    { t: "Attack on Titan × Nijigen no Mori", where: "Awaji Island, Hyogo (a day trip from Osaka)", when: "Through Dec 13, 2026", day: "d9",
      what: "A 1.2 km night forest walk with projection mapping following the story, plus a stamp rally and themed food. Night tickets ¥3,600–4,000. Only fits if you swap out the Hiroshima day.",
      place: "Nijigen no Mori Awaji", link: "https://prtimes.jp/main/html/rd/p/000000817.000128966.html" },
  ]},
  { fandom: "Kirby", emoji: "⭐", items: [
    { t: "Kirby Café Tokyo + THE STORE", where: "Tokyo Solamachi, Skytree Town", when: "Café needs a reservation · THE STORE is walk-in", day: "d5",
      what: "Kirby-shaped food and desserts. Reservations open on the 10th of the prior month and sell out — check kirbycafe-reserve.com for cancellations. THE STORE (Kirby goods + Kirby-face buns) needs no booking, and you're already at Solamachi Friday.",
      place: "Kirby Cafe Tokyo Solamachi", link: "https://kirbycafe.jp/" },
    { t: "Kirby Café Osaka", where: "Shinsaibashi, Osaka (same area as Pokémon Café Osaka)", when: "Reservation only", day: "d8",
      what: "Try osaka.kirbycafe-reserve.com for a cancellation before your 6 PM Pokémon Café. The winter menu starts Nov 11, after your trip.",
      place: "Kirby Cafe Osaka", link: "https://kirbycafe.jp/" },
  ]},
  { fandom: "Bara + gay manga", emoji: "🍑", spicy: true, items: [
    { t: "Okamalt — LGBTQ book café", where: "2-18-10 Shinjuku, 2F (Ni-chome, minutes from your hotel)", when: "About 1–8 PM, closed Thu–Sat · ~¥1,500 / 90 min with a drink", day: "d3",
      what: "Vintage Barazoku (the magazine the word “bara” comes from), Tom of Finland art and gay culture books, run by a Ni-chome writer and drag icon. Info is from an older listing — confirm hours.",
      place: "Okamalt, 2-18-10 Shinjuku, Tokyo", link: "https://www.timeout.com/tokyo/lgbtq/okamalt" },
    { t: "Lumiere", where: "2-17-1 Shinjuku, Naka-dori (Ni-chome)", when: "Any Tokyo evening", day: "d1",
      what: "The historic Ni-chome gay shop, known for its gay magazines.", place: "Lumiere, 2-17-1 Shinjuku, Tokyo", link: "https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%9F%E3%82%A8%E3%83%BC%E3%83%AB_(%E3%82%B2%E3%82%A4%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97)" },
    { t: "Mandarake (secondhand manga + doujinshi)", where: "Nakano Broadway (1 stop on the orange Chūō rapid from Shinjuku) · Shinsaibashi, Osaka", when: "Daytime", day: "d6",
      what: "Japan's big secondhand manga chain. Ask for the gay manga section with the phrase “ゲイ漫画のコーナーはありますか？” — not every branch has one.", place: "Mandarake Nakano", link: "https://www.timeout.com/tokyo/shopping/nakano-broadway" },
  ]},
  { fandom: "Gay saunas", emoji: "🧖", spicy: true, items: [
    { t: "24 Kaikan Shinjuku", where: "2-13-1 Shinjuku, 2F (Ni-chome) · ~5 min from your hotel", when: "24/7 · ~¥2,500–3,900, more after 9 PM", day: "d1",
      what: "Tokyo's best-known gay sauna and the most foreigner-friendly: English signs, staff with basic English. Sauna, steam, jacuzzi, cold plunge, rooftop deck, cabins. Planned on nights 1–6.",
      place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo", link: "https://www.travelgay.com/venue/24-kaikan-shinjuku" },
    { t: "24 Kaikan Ueno + Asakusa", where: "Ueno (Showa-dori) · Asakusa (2-29-16)", when: "~¥2,400 before 9 PM, ~¥2,800 after", day: "d4",
      what: "Sister branches. Ueno is your long Thursday night after Disneyland (English signs, English spoken). Asakusa is a short walk from Senso-ji on Friday morning.", place: "24 Kaikan Ueno", link: "https://www.utopia-asia.com/tokysaun.htm" },
    { t: "Jinya", where: "2-30-19 Ikebukuro", when: "Baths closed for cleaning 11 AM–3 PM · ~¥2,800", day: "d6",
      what: "Older Ikebukuro sauna with a long record of welcoming foreigners.", place: "Jinya, 2-30-19 Ikebukuro, Tokyo", link: "https://www.utopia-asia.com/tokysaun.htm" },
    { t: "Sauna Verde Club (unconfirmed)", where: "684 Higashishiokoji-cho, by Kyoto Station · next to your Kyoto hotel", when: "Hours not listed", day: "d7",
      what: "Listed by one gay guide as a gay sauna, but I couldn't confirm it. Check at the door before paying.", place: "Sauna Verde Club, Kyoto", link: "https://spartacus.gayguide.travel/saunas/kyoto/97733_Sauna+Verde+Club" },
    { t: "Daikichi", where: "12-12 Doyamacho, Osaka · ~5 min from your hotel", when: "24/7 · ~¥2,000–3,000", day: "d8",
      what: "Osaka's main gay sauna: several floors, sauna, steam, baths, dark room, cabins. Mostly locals, under-50s only, ID may be checked.", place: "Daikichi, 12-12 Doyamacho, Osaka", link: "https://www.travelgay.com/venue/daikishi-sauna" },
  ]},
  { fandom: "Your bars: gachimuchi + muscle cub crowd", emoji: "🐻", spicy: true, items: [
    { t: "Eagle Tokyo + Eagle Tokyo Blue", where: "Ni-chome, Tokyo", when: "Nightly · cashless · ¥1,000–2,000", day: "d2", what: "Leather and bear bars with a mature, stocky and muscular crowd, multilingual staff, and locals and tourists mixing. BUFF parties (muscle guys to bears, fetish gear) run every two months; check @bufftyo.", place: "Eagle Tokyo, Shinjuku 2-chome", link: "https://sushisandwich81.com/eagle-tokyo-and-eagle-tokyo-blue/" },
    { t: "Dragon Men", where: "Ni-chome, Tokyo", when: "~¥2,000 with two drinks on weekends", day: "d4", what: "Go-go dancers and a big mix of Japanese regulars and visitors. Turns club-like after midnight.", place: "Dragon Men, Shinjuku 2-chome", link: "https://nightlifetokyo.com/en/tokyo/guides/lgbtq-nightlife-tokyo-ni-chome" },
    { t: "Bar Blacknude", where: "1F, 2-15-12 Shinjuku", when: "Mon–Sat 8 PM–1 AM, Sun 7 PM–midnight", day: "d6", what: "Muscle-staff bar; foreigners welcome.", place: "Bar Blacknude, 2-15-12 Shinjuku", link: "https://www.travelgay.com/tokyo-gay-bars" },
    { t: "GB", where: "Ni-chome, Tokyo", when: "Nightly", day: "d1", what: "Quiet counter bar with English-speaking staff and an older crowd. Good for daddies and real conversation.", place: "GB, Shinjuku 2-chome", link: "https://nightlifetokyo.com/en/tokyo/guides/lgbtq-nightlife-tokyo-ni-chome" },
    { t: "Eagle Osaka", where: "12-8 Doyama-cho, Osaka", when: "Cashless · free entry Mon–Thu", day: "d8", what: "Western Japan's biggest gay bar: a go-go dance floor downstairs and a lounge upstairs. A hotspot for bears and tourists.", place: "Eagle Osaka, 12-8 Doyamacho", link: "https://sushisandwich81.com/eagle-osaka-best-gay-bear-bar-in-osaka/" },
    { t: "Dungaree + Kuro", where: "Doyama-cho, Osaka", when: "Kuro: Mon–Sat 7 PM–2 AM", day: "d8", what: "Dungaree is “where Japanese bears go to play.” Kuro is Osaka's oldest gay bar, with a mature Japanese crowd; foreigners welcome.", place: "Doyama-cho, Kita-ku, Osaka", link: "https://www.travelgay.com/osaka-gay-bars" },
    { t: "Goli Macho", where: "5F Jewel Ebisu Bldg, 3-6 Ebisu-cho, Hiroshima", when: "Tue–Sat · opening time not listed", day: "d9", what: "Hiroshima's friendliest gay bar, with a mixed crowd. Only works if you take a later shinkansen back.", place: "Goli Macho, Hiroshima", link: "https://nomadicboys.com/gay-hiroshima/" },
  ]},
  { fandom: "Go-go boys + strip shows", emoji: "🍑", spicy: true, items: [
    { t: "Dragon Master at Dragon Men", where: "2-11-4 Shinjuku (Ni-chome)", when: "Fri Oct 30 + Sat Oct 31 · go-go shows 11 PM, 1 AM, 3 AM", day: "d5", what: "Weekend party with a different go-go show at each set, guest DJs and happy hour 6–9 PM. Cash.", place: "Dragon Men, 2-11-4 Shinjuku", link: "https://www.gaytravel4u.com/event/dragon-men-presents/" },
    { t: "Eagle Tokyo Blue", where: "2-11-21 Shinjuku (Ni-chome)", when: "Fri–Sun from 6 PM, Mon–Thu from 8 PM · ¥1,000–2,000", day: "d5", what: "Known for hairy, beefy go-go dancers — exactly your type of show.", place: "Eagle Tokyo Blue, 2-11-21 Shinjuku", link: "https://japangayguide.com/gogoboys/gogoboys-in-japan-best-clubs-2024/" },
    { t: "Kingdom Tokyo", where: "2-10-7 Shinjuku (Ni-chome)", when: "Fri + Sat go-go × drag shows · ¥1,000–2,000", day: "d6", what: "Go-go boys plus drag on weekend nights; all-you-can-drink ¥1,500 from 6–10 PM.", place: "Kingdom Tokyo, 2-10-7 Shinjuku", link: "https://japangayguide.com/gogoboys/gogoboys-in-japan-best-clubs-2024/" },
    { t: "Club Blacknude", where: "B1F, 2-15-12 Shinjuku", when: "Nightly · ¥1,500 with a drink", day: "d6", what: "Muscle bar with one or two go-go boys every night.", place: "Club Blacknude, 2-15-12 Shinjuku", link: "https://japangayguide.com/gogoboys/gogoboys-in-japan-best-clubs-2024/" },
    { t: "Eagle Osaka dance floor", where: "12-8 Doyama-cho, Osaka", when: "Cashless", day: "d8", what: "Go-go dancers on the ground-floor dance floor.", place: "Eagle Osaka, 12-8 Doyamacho", link: "https://sushisandwich81.com/eagle-osaka-best-gay-bear-bar-in-osaka/" },
  ]},
  { fandom: "Cruise bars + love hotels", emoji: "🔥", spicy: true, items: [
    { t: "Deep Throat Men", where: "3F Wakatsuki Bldg, Kabukichō, Shinjuku", when: "Nights · 20+", day: "d5", what: "Cruising bar where foreigners are welcome and staff speak English. 5 minutes from Golden Gai.", place: "Deep Throat Men, Kabukicho", link: "https://www.utopia-asia.com/tokysaun.htm" },
    { t: "D-Light + The Boiler Room", where: "Ni-chome (Boiler Room: B1F)", when: "Nights · BUFF parties every two months", day: "d5", what: "Go-go bar connected to a basement cruising bar. Home of the BUFF muscle-to-bears fetish party (check @bufftyo for dates).", place: "D-Light, Shinjuku 2-chome", link: "https://www.gaytravel4u.com/event/buff-tokyo/" },
    { t: "Men's Club MEAT", where: "1-13-4 Shinjuku · near your hotel", when: "Mon–Fri 3–10 PM, Sat 1–10 PM, Sun noon–9 PM", day: "d6", what: "Daytime-and-evening cruising club for guys in their 20s–40s. Good for a sleep-in day afternoon.", place: "Men's Club MEAT, 1-13-4 Shinjuku", link: "https://www.utopia-asia.com/tokysaun.htm" },
    { t: "Rokuten", where: "4F Okuo Bldg, Kanda", when: "Check before going", day: "d5", what: "Fundoshi (traditional loincloth) cruising bar, described as foreigner-friendly.", place: "Rokuten, Kanda", link: "https://www.utopia-asia.com/tokysaun.htm" },
    { t: "Hotel Queen Annex", where: "Ni-chome, Shinjuku", when: "24-hour front desk", day: "d1", what: "Big, bright love hotel in Ni-chome known as gay-friendly. Pay by the “rest” (a few hours) or the night.", place: "Hotel Queen Annex, Shinjuku", link: "https://japangayguide.com/travel-tips/our-favorite-tokyo-gay-love-hotels/" },
    { t: "Glory Hole Osaka", where: "Near Namba / Dōtonbori", when: "Nights", day: "d8", what: "Osaka cruising bar. Reports say it's not especially foreigner-friendly, so try Daikichi first.", place: "Namba, Osaka", link: "https://www.utopia-asia.com/osaksaun.htm" },
  ]},
  { fandom: "Parties on your dates", emoji: "🪩", spicy: true, items: [
    { t: "Akiba Night 51 · Halloween + 23rd anniversary", where: "AiSOTOPE Lounge, Ni-chome", when: "Fri Oct 30 · 9 PM", day: "d5", what: "Long-running anime/otaku gay night. Photo ID required, 20+.", place: "AiSOTOPE Lounge, Shinjuku", link: "https://aisotope-lounge.net/" },
    { t: "SHOWER CANDY", where: "ArcH, Ni-chome", when: "Fri Oct 30 · 9 PM", day: "d5", what: "Friday club night at ArcH.", place: "ArcH, Shinjuku 2-chome", link: "https://clubarch.jp/" },
    { t: "Arty Farty HALLOWEEN PARTY 2026", where: "Arty Farty, Ni-chome", when: "Sat Oct 31 · 8 PM", day: "d6", what: "Halloween at one of Ni-chome's most foreigner-friendly bars.", place: "Arty Farty, Shinjuku 2-chome", link: "https://dokoiku-2chome.com/event-list/" },
    { t: "RUSHCRUISE 80th · Duality", where: "AiSOTOPE Lounge", when: "Sat Oct 31 · 9 PM", day: "d6", what: "Halloween-night party at Ni-chome's biggest gay club.", place: "AiSOTOPE Lounge, Shinjuku", link: "https://aisotope-lounge.net/" },
    { t: "Jimi-Halloween", where: "ArcH", when: "Sat Oct 31 · 9 PM", day: "d6", what: "地味ハロ: dress as something boring and everyday. Very Japanese humor.", place: "ArcH, Shinjuku 2-chome", link: "https://clubarch.jp/" },
    { t: "Explosion", where: "B1 Sanyo-Kaikan, 8-23 Doyama-cho, Osaka", when: "8 PM–4 AM · closed Tuesdays · no cover", day: "d8", what: "Osaka's main gay club. Saturdays bring drag queens and go-gos, and it's open on your Monday holiday-eve night too.", place: "Explosion, Doyama-cho, Osaka", link: "https://www.travelgay.com/venue/explosion" },
  ]},
  { fandom: "Drag + shows", emoji: "💄", spicy: true, items: [
    { t: "Campy! Bar", where: "1F Musashino Bldg, 2-13-10 Shinjuku", when: "Mon–Sat 7 PM–4 AM, Sun 5 PM–midnight · usually no cover", day: "d2", what: "Run by TV drag star Bourbonne. Glitter, shots and chaos. Perfect for a birthday shot.", place: "Campy! Bar, Shinjuku 2-chome", link: "https://www.travelgay.com/tokyo-gay-bars" },
    { t: "Queen's Lounge drag nights", where: "AiSOTOPE Lounge, Ni-chome", when: "Wed + Thu · ~¥3,000 with a drink", day: "d4", what: "Weekly drag shows at the big club.", place: "AiSOTOPE Lounge, Shinjuku", link: "https://nightlifetokyo.com/en/tokyo/guides/lgbtq-nightlife-tokyo-ni-chome" },
    { t: "Village", where: "2F East Street Bldg, 10-3 Doyama-cho, Osaka", when: "Daily 8 PM–5 AM", day: "d8", what: "Drag shows, cabaret, karaoke and live performances in Doyama.", place: "Village, Doyama-cho, Osaka", link: "https://www.travelgay.com/osaka-gay-bars" },
  ]},
  { fandom: "Daytime queer culture", emoji: "🏳️‍🌈", spicy: true, items: [
    { t: "Pride House Tokyo Legacy", where: "1-2-9 Shinjuku · minutes from your hotel", when: "1–7 PM · closed Wed + Thu", day: "d6", what: "Japan's first permanent LGBTQ center: a 1,400-book library, friendly staff and event flyers.", place: "Pride House Tokyo Legacy, 1-2-9 Shinjuku", link: "https://www.timeout.com/tokyo/things-to-do/pride-house-tokyo-legacy" },
    { t: "Tokyo Gaysian Club Crawl", where: "Meets at the Ni-chome 7-Eleven", when: "Wed Oct 28 · 9–11:30 PM", day: "d3", what: "Airbnb-hosted Ni-chome bar crawl. A fast way to meet people early in the trip.", place: "Shinjuku 2-chome", link: "https://www.airbnb.com/s/Tokyo/experiences?query=gaysian%20club%20crawl" },
    { t: "Tac's Knot", where: "Nakano (1 stop from Shinjuku)", when: "Check their socials for hours", day: "d3", what: "Queer-run café with drag trivia, readings and a pop-up queer bookshop.", place: "Tac's Knot, Nakano", link: "https://nightlifetokyo.com/en/tokyo/guides/lgbtq-nightlife-tokyo-ni-chome" },
  ]},
  { fandom: "Splatoon", emoji: "🦑", items: [
    { t: "Splatoon merch at Nintendo TOKYO", where: "Shibuya PARCO 6F", when: "Wed (today's Shibuya stop)", day: "d3", what: "Store-exclusive Splatoon goods: plushies, apparel, Inkling and Octoling merch.", place: "Nintendo TOKYO, Shibuya PARCO", link: "https://www.nintendo.com/jp/officialstore/" },
    { t: "Splatoween 2026 (in-game Splatfest)", where: "On your Switch", when: "Oct 31, 9:00 → Nov 2, 9:00 JST", day: "d6", what: "Halloween Splatfest: Magic User (Fuuka) vs Knight (Utsuho) vs Ninja (Mantaro), with spooky Splatsville decorations. Playing from Japan puts you on the Japanese servers.", place: "", link: "https://splatoon-salmonrun.com/splatoween-2026/" },
    { t: "Nintendo OSAKA", where: "Daimaru Umeda 13F", when: "10:00–21:00", day: "d8", what: "The other official store with Splatoon goods, a few minutes from your Osaka hotel.", place: "Nintendo OSAKA, Daimaru Umeda", link: "https://www.nintendo.com/jp/officialstore/" },
  ]},
  { fandom: "Tokyo Ghoul", emoji: "🎭", items: [
    { t: "Tokyo Ghoul goods hunt", where: "Animate Ikebukuro · Mandarake (Nakano Broadway + Akihabara)", when: "Wed + Sat", day: "d3", what: "No Tokyo Ghoul café is running during your trip, so hunt goods instead: Animate for new merch, Mandarake for rare older figures and art books.", place: "Animate Ikebukuro", link: "https://collabocafe.tokyo/genre/%E6%9D%B1%E4%BA%AC%E5%96%B0%E7%A8%AE/" },
  ]},
  { fandom: "Nintendo", emoji: "🍄", items: [
    { t: "Nintendo TOKYO", where: "Shibuya PARCO 6F", when: "Already in your plan", day: "d6",
      what: "Official store with store-exclusive illustration merch (Mario, Zelda, Kirby, Splatoon, Animal Crossing).", place: "Nintendo TOKYO Shibuya PARCO", link: "" },
    { t: "Nintendo OSAKA", where: "Daimaru Umeda 13F (a few minutes from your Osaka hotel)", when: "10:00–21:00", day: "d8",
      what: "The other official store — same exclusive illustration goods. Easy stop when you drop your bags in Umeda.", place: "Nintendo OSAKA Daimaru Umeda", link: "https://jw-webmagazine.com/tips/nintendo-osaka" },
    { t: "Nintendo KYOTO + Nintendo Museum", where: "Kyoto Takashimaya S.C. · Ogura, Uji", when: "Sun Nov 1 (museum closed Nov 2–4)", day: "d7",
      what: "Already in your Kyoto day — keep the ticket alert running for the museum.", place: "Nintendo KYOTO", link: "https://museum-tickets.nintendo.com/en/calendar" },
  ]},
];

/* ---------------- STARTER LISTS (copied to the phone once, then editable) ---------------- */
const TICKET_SEEDS = [
  { title: "Visit Japan Web QR (immigration + customs)", date: "2026-10-26", when: "Mon Oct 26 · Haneda arrival" },
  { title: "Tokyo DisneySea", date: "2026-10-27", when: "Tue Oct 27 · birthday!" },
  { title: "Tokyo Disneyland", date: "2026-10-29", when: "Thu Oct 29" },
  { title: "Shibuya Sky", date: "2026-10-30", when: "Fri Oct 30 · sunset slot" },
  { title: "Pokémon Café Tokyo", date: "2026-10-31", when: "Sat Oct 31 · 7:15 PM · arrive 15 min early" },
  { title: "Shinkansen Shinagawa → Kyoto", date: "2026-11-01", when: "Sun Nov 1 · ~8:30 AM · seat E" },
  { title: "Nintendo Museum", date: "2026-11-01", when: "Sun Nov 1 · if the alert lands one" },
  { title: "Pokémon Café Osaka", date: "2026-11-02", when: "Mon Nov 2 · 6:00 PM · arrive 10 min early" },
  { title: "Shinkansen Osaka ⇄ Hiroshima", date: "2026-11-03", when: "Tue Nov 3 · ~9 AM out, ~6 PM back" },
  { title: "Shinkansen Shin-Osaka → Mishima (Hikari)", date: "2026-11-04", when: "Wed Nov 4 · ~10:30 AM · seat E" },
  { title: "Bus Mishima → Kawaguchiko", date: "2026-11-04", when: "Wed Nov 4 · ~12:45 PM" },
  { title: "Bus Kawaguchiko → Busta Shinjuku", date: "2026-11-05", when: "Thu Nov 5 · 9:30 AM" },
  { title: "Flight home UA868 → UA1875", date: "2026-11-05", when: "Thu Nov 5 · Narita T1 · 6:00 PM" },
];

const MERCH_SEEDS = [
  { item: "DisneySea Halloween / anniversary popcorn bucket", where: "Tokyo DisneySea", day: "d2" },
  { item: "Disneyland Halloween ears or headband", where: "Tokyo Disneyland", day: "d4" },
  { item: "Kirby Café THE STORE goods", where: "Tokyo Solamachi", day: "d5" },
  { item: "Pokémon Center Skytree Town exclusives", where: "Tokyo Solamachi", day: "d5" },
  { item: "Pokémon Center Mega Tokyo exclusives", where: "Sunshine City, Ikebukuro", day: "d6" },
  { item: "Pikachu Sweets gift box", where: "Sunshine City, Ikebukuro", day: "d6" },
  { item: "Pokémon Center Shibuya (Mewtwo) merch", where: "Shibuya PARCO 6F", day: "d6" },
  { item: "Nintendo TOKYO exclusive-illustration goods", where: "Shibuya PARCO 6F", day: "d6" },
  { item: "Ariana — petal (Japanese edition CD)", where: "Tower Records Shibuya", day: "d6" },
  { item: "Pokémon Café Tokyo merch", where: "Nihonbashi Takashimaya", day: "d6" },
  { item: "Nintendo Museum shop", where: "Ogura, Uji", day: "d7" },
  { item: "Nintendo KYOTO / Pokémon Center Kyoto", where: "Takashimaya S.C. (Nintendo) · SUINA Muromachi 2F (Pokémon)", day: "d7" },
  { item: "Kyoto matcha (powder tin or sweets)", where: "Arashiyama main street", day: "d8" },
  { item: "Pokémon Center Osaka DX + Café Osaka merch", where: "Daimaru Shinsaibashi 9F", day: "d8" },
  { item: "My Hero Academia collab goods", where: "Umeda Sky Building 39F shop", day: "d8" },
  { item: "Nintendo OSAKA exclusives", where: "Daimaru Umeda 13F", day: "d8" },
  { item: "Momiji manjū gift box", where: "Miyajima", day: "d9" },
  { item: "Fuji-shaped sweets / regional KitKats", where: "Kawaguchiko + Narita", day: "d10" },
  { item: "Konbini snack haul for home", where: "Any konbini", day: "d11" },
];
// 🎁 family gifts (added Oct 29) — also merged into lists already saved on the phone
const GIFT_SEEDS = [
  { id: "g-toys", item: "🎁 Toys for the nieces + nephews (Tomica, Sylvanian, Popin' Cookin' kits, gachapon)", where: "Tomica Plarail Shop, Tokyo Character Street (Thu) · Kiddy Land (Fri) · Don Quijote Akiba (Sat)", day: "d4", forWho: "Nieces + nephews" },
  { id: "g-sis", item: "🎁 Skincare: Hada Labo lotion, Biore UV sunscreen, Melano CC serum, Lululun masks", where: "Don Quijote Akihabara (Sat) · @cosme TOKYO (Fri)", day: "d6", forWho: "Sister + sister-in-law" },
  { id: "g-mom", item: "🎁 Skincare: Sekkisei lotion or Shiseido Elixir", where: "Don Quijote Akihabara (Sat) · @cosme TOKYO (Fri)", day: "d6", forWho: "Mom" },
  { id: "g-grandma", item: "🎁 Skincare: Shiseido Elixir, horse-oil cream or Urea hand cream", where: "Don Quijote Akihabara (Sat)", day: "d6", forWho: "Grandma" },
  { id: "g-dad", item: "🎁 Christmas lights: battery/USB LED or paper-lantern lights (plug-ins must say AC100–240V)", where: "Don Quijote Akihabara (Sat) · LOFT Umeda (Mon, backup)", day: "d6", forWho: "Dad" },
  { id: "p-osaka", item: "Pokémon Center Osaka (Umeda) exclusives", where: "Daimaru Umeda 13F", day: "d8", forWho: "" },
  { id: "p-hiro", item: "Pokémon Center Hiroshima exclusives", where: "Sogo Hiroshima, by Peace Park", day: "d9", forWho: "" },
  { id: "p-tbay", item: "Pokémon Center Tokyo Bay exclusives", where: "LaLaport TOKYO-BAY West 2F", day: "d4", forWho: "" },
  { id: "p-tsta", item: "Pokémon Store Tokyo Station exclusives", where: "First Avenue Tokyo Station", day: "d4", forWho: "" },
  { id: "p-nrt", item: "Pokémon Store Narita Airport", where: "Narita Terminal 2, 4F", day: "d11", forWho: "" },
  { id: "s-sukajan", item: "👕 Sukajan (souvenir jacket) for me", where: "BEAMS JAPAN Shinjuku 2F (Fri)", day: "d5", forWho: "Me" },
  { id: "s-tees", item: "👕 Heavyweight boxy tees in 3L/XXL + a knit polo (going out + work)", where: "BEAMS JAPAN (Fri) · Uniqlo (U line, heavyweight)", day: "d5", forWho: "Me" },
  { id: "s-work", item: "👕 Work: oxford button-downs, pleated wide trousers, unstructured stretch blazer", where: "Isetan Men's (Fri) · BEAMS / United Arrows", day: "d5", forWho: "Me" },
  { id: "s-vintage", item: "👕 American vintage in US sizes (denim, workwear, Ralph Lauren)", where: "Amerikamura, Osaka (Mon)", day: "d8", forWho: "Me" },
  { id: "g-uncle", item: "🎁 Japanese polos (go one size up: LL ≈ US L)", where: "BEAMS JAPAN Shinjuku 2F (Fri) · Isetan Men's (backup)", day: "d5", forWho: "Uncle" },
];

/* ---------------- Train lines + station numbers (for the 🚆 Ride check boxes) ----------------
   stops are listed in line order; a leg's stops are sliced between its from/to codes. */
const LINES = {
  KK: { name: "Keikyu Line", jp: "京急線", color: "#e5171f", stops: [
    ["KK01", "品川", "Shinagawa"], ["KK02", "北品川", "Kita-shinagawa"], ["KK03", "新馬場", "Shimbamba"], ["KK04", "青物横丁", "Aomono-yokochō"],
    ["KK05", "鮫洲", "Samezu"], ["KK06", "立会川", "Tachiaigawa"], ["KK07", "大森海岸", "Ōmorikaigan"], ["KK08", "平和島", "Heiwajima"],
    ["KK09", "大森町", "Ōmorimachi"], ["KK10", "梅屋敷", "Umeyashiki"], ["KK11", "京急蒲田", "Keikyū Kamata"], ["KK12", "糀谷", "Kōjiya"],
    ["KK13", "大鳥居", "Ōtorii"], ["KK14", "穴守稲荷", "Anamori-inari"], ["KK15", "天空橋", "Tenkūbashi"], ["KK16", "羽田空港第3ターミナル", "Haneda Airport Terminal 3"],
    ["KK17", "羽田空港第1・第2ターミナル", "Haneda Airport Terminal 1·2"]] },
  JY: { name: "JR Yamanote Line", jp: "山手線", color: "#80c241", stops: [
    ["JY13", "池袋", "Ikebukuro"], ["JY14", "目白", "Mejiro"], ["JY15", "高田馬場", "Takadanobaba"], ["JY16", "新大久保", "Shin-Ōkubo"],
    ["JY17", "新宿", "Shinjuku"], ["JY18", "代々木", "Yoyogi"], ["JY19", "原宿", "Harajuku"], ["JY20", "渋谷", "Shibuya"],
    ["JY21", "恵比寿", "Ebisu"], ["JY22", "目黒", "Meguro"], ["JY23", "五反田", "Gotanda"], ["JY24", "大崎", "Ōsaki"], ["JY25", "品川", "Shinagawa"]] },
  M: { name: "Marunouchi Line", jp: "丸ノ内線", color: "#f62e36", stops: [
    ["M08", "新宿", "Shinjuku"], ["M09", "新宿三丁目", "Shinjuku-sanchōme"], ["M10", "新宿御苑前", "Shinjuku-gyoemmae"], ["M11", "四谷三丁目", "Yotsuya-sanchōme"],
    ["M12", "四ツ谷", "Yotsuya"], ["M13", "赤坂見附", "Akasaka-mitsuke"], ["M14", "国会議事堂前", "Kokkai-gijidōmae"], ["M15", "霞ケ関", "Kasumigaseki"],
    ["M16", "銀座", "Ginza"], ["M17", "東京", "Tokyo"]] },
  JE: { name: "JR Keiyo Line", jp: "京葉線", color: "#c9242f", stops: [
    ["JE01", "東京", "Tokyo"], ["JE02", "八丁堀", "Hatchōbori"], ["JE03", "越中島", "Etchūjima"], ["JE04", "潮見", "Shiomi"],
    ["JE05", "新木場", "Shin-kiba"], ["JE06", "葛西臨海公園", "Kasai-rinkai-kōen"], ["JE07", "舞浜", "Maihama"], ["JE08", "新浦安", "Shin-urayasu"],
    ["JE09", "市川塩浜", "Ichikawa-shiohama"], ["JE10", "二俣新町", "Futamata-shinmachi"], ["JE11", "南船橋", "Minami-funabashi"]] },
  DR: { name: "Disney Resort Line", jp: "ディズニーリゾートライン", color: "#2fa9e0", loop: true, stops: [
    ["RG", "リゾートゲートウェイ", "Resort Gateway"], ["TDL", "東京ディズニーランド・ステーション", "Tokyo Disneyland Station"],
    ["BS", "ベイサイド", "Bayside"], ["TDS", "東京ディズニーシー・ステーション", "Tokyo DisneySea Station"]] },
  G: { name: "Ginza Line", jp: "銀座線", color: "#ff9500", stops: [
    ["G05", "赤坂見附", "Akasaka-mitsuke"], ["G06", "溜池山王", "Tameike-sannō"], ["G07", "虎ノ門", "Toranomon"], ["G08", "新橋", "Shimbashi"], ["G09", "銀座", "Ginza"],
    ["G10", "京橋", "Kyōbashi"], ["G11", "日本橋", "Nihombashi"], ["G12", "三越前", "Mitsukoshimae"], ["G13", "神田", "Kanda"], ["G14", "末広町", "Suehirochō"],
    ["G15", "上野広小路", "Ueno-hirokōji"], ["G16", "上野", "Ueno"], ["G17", "稲荷町", "Inarichō"], ["G18", "田原町", "Tawaramachi"], ["G19", "浅草", "Asakusa"]] },
  Y: { name: "Yurakucho Line", jp: "有楽町線", color: "#c1a470", stops: [
    ["Y09", "池袋", "Ikebukuro"], ["Y10", "東池袋", "Higashi-ikebukuro"], ["Y11", "護国寺", "Gokokuji"], ["Y12", "江戸川橋", "Edogawabashi"], ["Y13", "飯田橋", "Iidabashi"],
    ["Y14", "市ケ谷", "Ichigaya"], ["Y15", "麹町", "Kōjimachi"], ["Y16", "永田町", "Nagatachō"], ["Y17", "桜田門", "Sakuradamon"], ["Y18", "有楽町", "Yūrakuchō"], ["Y19", "銀座一丁目", "Ginza-itchōme"], ["Y20", "新富町", "Shintomichō"], ["Y21", "月島", "Tsukishima"], ["Y22", "豊洲", "Toyosu"]] },
  U: { name: "Yurikamome", jp: "ゆりかもめ", color: "#1b8fd1", stops: [
    ["U01", "新橋", "Shimbashi"], ["U02", "汐留", "Shiodome"], ["U03", "竹芝", "Takeshiba"], ["U04", "日の出", "Hinode"], ["U05", "芝浦ふ頭", "Shibaura-futō"],
    ["U06", "お台場海浜公園", "Odaiba-kaihinkōen"], ["U07", "台場", "Daiba"], ["U08", "東京国際クルーズターミナル", "Tokyo Int'l Cruise Terminal"], ["U09", "テレコムセンター", "Telecom Center"],
    ["U10", "青海", "Aomi"], ["U11", "東京ビッグサイト", "Tokyo Big Sight"], ["U12", "有明", "Ariake"], ["U13", "有明テニスの森", "Ariake-tennis-no-mori"],
    ["U14", "市場前", "Shijō-mae"], ["U15", "新豊洲", "Shin-toyosu"], ["U16", "豊洲", "Toyosu"]] },
  TS: { name: "Tobu Skytree Line", jp: "東武スカイツリーライン", color: "#0f6cc3", stops: [["TS01", "浅草", "Asakusa"], ["TS02", "とうきょうスカイツリー", "Tokyo Skytree"]] },
  Z: { name: "Hanzomon Line", jp: "半蔵門線", color: "#8f76d6", stops: [
    ["Z01", "渋谷", "Shibuya"], ["Z02", "表参道", "Omotesandō"], ["Z03", "青山一丁目", "Aoyama-itchōme"], ["Z04", "永田町", "Nagatachō"], ["Z05", "半蔵門", "Hanzōmon"],
    ["Z06", "九段下", "Kudanshita"], ["Z07", "神保町", "Jimbōchō"], ["Z08", "大手町", "Ōtemachi"], ["Z09", "三越前", "Mitsukoshimae"], ["Z10", "水天宮前", "Suitengūmae"],
    ["Z11", "清澄白河", "Kiyosumi-shirakawa"], ["Z12", "住吉", "Sumiyoshi"], ["Z13", "錦糸町", "Kinshichō"], ["Z14", "押上〈スカイツリー前〉", "Oshiage (Skytree)"]] },
  F: { name: "Fukutoshin Line", jp: "副都心線", color: "#9c5e31", stops: [
    ["F09", "池袋", "Ikebukuro"], ["F10", "雑司が谷", "Zōshigaya"], ["F11", "西早稲田", "Nishi-waseda"], ["F12", "東新宿", "Higashi-shinjuku"],
    ["F13", "新宿三丁目", "Shinjuku-sanchōme"], ["F14", "北参道", "Kita-sandō"], ["F15", "明治神宮前〈原宿〉", "Meiji-jingūmae (Harajuku)"], ["F16", "渋谷", "Shibuya"]] },
  TKN: { name: "Tokaido Shinkansen · Nozomi", jp: "東海道新幹線 のぞみ", color: "#1a4fa0", stops: [
    ["SGW", "品川", "Shinagawa"], ["SYH", "新横浜", "Shin-Yokohama"], ["NGY", "名古屋", "Nagoya"], ["KYT", "京都", "Kyoto"]] },
  TKH: { name: "Tokaido Shinkansen · Hikari", jp: "東海道新幹線 ひかり", color: "#1a4fa0", stops: [
    ["SHO", "新大阪", "Shin-Osaka"], ["KYT", "京都", "Kyoto"], ["NGY", "名古屋", "Nagoya"], ["SZK", "静岡", "Shizuoka"], ["MSM", "三島", "Mishima"]] },
  SYS: { name: "Sanyo Shinkansen · Nozomi", jp: "山陽新幹線 のぞみ", color: "#1a4fa0", stops: [
    ["SHO", "新大阪", "Shin-Osaka"], ["SKB", "新神戸", "Shin-Kobe"], ["OKY", "岡山", "Okayama"], ["FKY", "福山 (some trains)", "Fukuyama (some trains)"], ["HIJ", "広島", "Hiroshima"]] },
  KB: { name: "Kintetsu Kyoto Line", jp: "近鉄京都線", color: "#e0262b", stops: [
    ["B01", "京都", "Kyoto"], ["B02", "東寺", "Tōji"], ["B03", "十条", "Jūjō"], ["B04", "上鳥羽口", "Kamitobaguchi"], ["B05", "竹田", "Takeda"],
    ["B06", "伏見", "Fushimi"], ["B07", "近鉄丹波橋", "Kintetsu-Tambabashi"], ["B08", "桃山御陵前", "Momoyama-goryōmae"], ["B09", "向島", "Mukaijima"], ["B10", "小倉", "Ogura"]] },
  KR: { name: "Karasuma Line (Kyoto subway)", jp: "烏丸線", color: "#2a9d4a", stops: [["K04", "北大路", "Kitaōji"], ["K05", "鞍馬口", "Kuramaguchi"], ["K06", "今出川", "Imadegawa"], ["K07", "丸太町", "Marutamachi"], ["K08", "烏丸御池", "Karasuma-oike"], ["K09", "四条", "Shijō"], ["K10", "五条", "Gojō"], ["K11", "京都", "Kyoto"]] },
  JD: { name: "JR Nara Line", jp: "奈良線", color: "#9a6b32", stops: [
    ["D01", "京都", "Kyoto"], ["D02", "東福寺", "Tōfukuji"], ["D03", "稲荷", "Inari"], ["D04", "JR藤森", "JR Fujinomori"], ["D05", "桃山", "Momoyama"],
    ["D06", "六地蔵", "Rokujizō"], ["D07", "木幡", "Kohata"], ["D08", "黄檗", "Ōbaku"], ["D09", "宇治", "Uji"]] },
  JA: { name: "JR Kyoto Line · Special Rapid", jp: "JR京都線 新快速", color: "#0072bc", stops: [
    ["A31", "京都", "Kyoto"], ["A38", "高槻", "Takatsuki"], ["A46", "新大阪", "Shin-Osaka"], ["A47", "大阪", "Osaka"]] },
  OM: { name: "Midosuji Line (Osaka Metro)", jp: "御堂筋線", color: "#e5171f", stops: [
    ["M16", "梅田", "Umeda"], ["M17", "淀屋橋", "Yodoyabashi"], ["M18", "本町", "Hommachi"], ["M19", "心斎橋", "Shinsaibashi"],
    ["M20", "なんば", "Namba"], ["M21", "大国町", "Daikokuchō"], ["M22", "動物園前", "Dōbutsuen-mae"]] },
  OK: { name: "Sakaisuji Line (Osaka Metro)", jp: "堺筋線", color: "#814721", stops: [
    ["K12", "扇町", "Ōgimachi"], ["K13", "南森町", "Minami-morimachi"], ["K14", "北浜", "Kitahama"], ["K15", "堺筋本町", "Sakaisuji-hommachi"],
    ["K16", "長堀橋", "Nagahoribashi"], ["K17", "日本橋", "Nippombashi"], ["K18", "恵美須町", "Ebisuchō"]] },
  SL: { name: "JR Sanyo Line (local)", jp: "山陽本線", color: "#0072bc", stops: [
    ["HIR", "広島", "Hiroshima"], ["SHK", "新白島", "Shin-Hakushima"], ["YKG", "横川", "Yokogawa"], ["NHR", "西広島", "Nishi-Hiroshima"], ["SIN", "新井口", "Shin-Inokuchi"],
    ["ITK", "五日市", "Itsukaichi"], ["HTK", "廿日市", "Hatsukaichi"], ["MKS", "宮内串戸", "Miyauchi-Kushido"], ["AJN", "阿品", "Ajina"], ["MYJ", "宮島口", "Miyajimaguchi"]] },
  FJ: { name: "Fujikyu Line", jp: "富士急行線", color: "#2b5fae", stops: [
    ["KWG", "河口湖", "Kawaguchiko"], ["FQH", "富士急ハイランド", "Fuji-Q Highland"], ["FJS", "富士山", "Fujisan"], ["GKJ", "月江寺", "Gekkōji"], ["SYD", "下吉田", "Shimoyoshida"]] },
  NEX: { name: "Narita Express (N'EX)", jp: "成田エクスプレス", color: "#c8102e", stops: [
    ["SJK", "新宿", "Shinjuku"], ["SBY", "渋谷", "Shibuya (some trains)"], ["SGW", "品川", "Shinagawa"], ["TKY", "東京", "Tokyo"],
    ["NRT2", "空港第2ビル", "Narita Airport T2·3"], ["NRT1", "成田空港", "Narita Airport T1"]] },
  JYE: { name: "JR Yamanote Line", jp: "山手線", color: "#80c241", stops: [["JY01", "東京", "Tokyo"], ["JY02", "神田", "Kanda"], ["JY03", "秋葉原", "Akihabara"], ["JY04", "御徒町", "Okachimachi"], ["JY05", "上野", "Ueno"]] },
  JB: { name: "JR Chūō-Sōbu Line (yellow, local)", jp: "中央・総武線各駅停車", color: "#ffd400", stops: [
    ["JB07", "中野", "Nakano"], ["JB08", "東中野", "Higashi-Nakano"], ["JB09", "大久保", "Ōkubo"], ["JB10", "新宿", "Shinjuku"], ["JB11", "代々木", "Yoyogi"],
    ["JB12", "千駄ケ谷", "Sendagaya"], ["JB13", "信濃町", "Shinanomachi"], ["JB14", "四ツ谷", "Yotsuya"], ["JB15", "市ケ谷", "Ichigaya"], ["JB16", "飯田橋", "Iidabashi"],
    ["JB17", "水道橋", "Suidōbashi"], ["JB18", "御茶ノ水", "Ochanomizu"], ["JB19", "秋葉原", "Akihabara"]] },
  OE: { name: "Toei Ōedo Line", jp: "大江戸線", color: "#b6007a", stops: [["E21", "赤羽橋", "Akabanebashi"], ["E22", "麻布十番", "Azabu-jūban"], ["E23", "六本木", "Roppongi"], ["E24", "青山一丁目", "Aoyama-itchōme"], ["E25", "国立競技場", "Kokuritsu-kyōgijō"], ["E26", "代々木", "Yoyogi"], ["E27", "新宿", "Shinjuku"]] },
  OC: { name: "Chūō Line (Osaka Metro)", jp: "中央線", color: "#019a66", stops: [["C16", "本町", "Hommachi"], ["C17", "堺筋本町", "Sakaisuji-hommachi"], ["C18", "谷町四丁目", "Tanimachi 4-chōme"]] },
  A: { name: "Toei Asakusa Line", jp: "浅草線", color: "#ec6e65", stops: [["A09", "大門", "Daimon"], ["A10", "新橋", "Shimbashi"], ["A11", "東銀座", "Higashi-ginza"], ["A12", "宝町", "Takarachō"], ["A13", "日本橋", "Nihombashi"]] },
  OT: { name: "Tanimachi Line (Osaka Metro)", jp: "谷町線", color: "#8e5c9e", stops: [["T20", "東梅田", "Higashi-Umeda"], ["T21", "南森町", "Minami-morimachi"], ["T22", "天満橋", "Temmabashi"], ["T23", "谷町四丁目", "Tanimachi 4-chōme"]] },
  SAG: { name: "JR Sagano Line", jp: "嵯峨野線", color: "#7b3f98", stops: [["E01", "京都", "Kyoto"], ["E02", "梅小路京都西", "Umekōji-Kyōtonishi"], ["E03", "丹波口", "Tambaguchi"], ["E04", "二条", "Nijō"], ["E05", "円町", "Emmachi"], ["E06", "花園", "Hanazono"], ["E07", "太秦", "Uzumasa"], ["E08", "嵯峨嵐山", "Saga-Arashiyama"]] },
};

/* ---------------- Park treats (for the Live waits → 🍡 Treats tab) ----------------
   tag: halloween (until Oct 31) · 25th (anniversary, through Mar 2027) · remember (Coco event, until Nov 2) · classic · popcorn
   jp: true = Japan-style or only-in-Tokyo flavor */
const PARK_TREATS = {
  tds: [
    { name: "Gyoza Dog", price: 600, tag: "classic", jp: true, land: "Mysterious Island", where: "Nautilus Galley · also Liberty Landing Diner, Breezeway Bites, Yucatan Base Camp Grill", why: "The DisneySea legend: a fluffy bun stuffed with gyoza-style pork filling. Eat it inside the volcano." },
    { name: "Ukiwa Man (shrimp float-ring bun)", price: 600, tag: "classic", jp: true, land: "Port Discovery", where: "Seaside Snacks", why: "Steamed bun shaped like Donald's life preserver, filled with shrimp. The 25th-anniversary shrimp + sweet potato version is ¥900." },
    { name: "Maple Pumpkin Churro", price: 600, tag: "halloween", land: "American Waterfront", where: "Dockside Diner · Liberty Landing Diner · Open Sesame", why: "Halloween-only churro (until Oct 31)." },
    { name: "Halloween Sundae (purple sweet potato soft serve + churro)", price: 900, tag: "halloween", jp: true, land: "American Waterfront", where: "Liberty Landing Diner · Sultan's Oasis (Arabian Coast)", why: "Beni-imo (Okinawan purple sweet potato) soft serve is a very Japanese autumn flavor." },
    { name: "Purple Sweet Potato Milk with coffee jelly", price: 750, tag: "halloween", jp: true, land: "American Waterfront", where: "New York Deli · Hudson River Harvest", why: "Sweet potato latte vibes with chewy coffee jelly at the bottom." },
    { name: "Pumpkin Muffin", price: 400, tag: "halloween", land: "Mediterranean Harbor", where: "Gondolier Snack", why: "Easy grab-and-go while you wait for sunset at the harbor." },
    { name: "Duffy Cookie Sandwich (cheese + lemon)", price: 600, tag: "25th", land: "American Waterfront", where: "Cape Cod Cook-Off · Cape Cod Confections · Dockside Diner", why: "Duffy is DisneySea's mascot bear (huge in Japan). Anniversary-only." },
    { name: "Cookies & Cream Mickey Churro", price: 650, tag: "25th", land: "American Waterfront", where: "Dockside Diner · Open Sesame · Hudson River Harvest · Arendelle Royal Banquet · Zambini Brothers'", why: "Mickey-shaped anniversary churro." },
    { name: "White Chocolate Mickey Macaron", price: 600, tag: "25th", land: "Mediterranean Harbor", where: "Mamma Biscotti's Bakery · Sebastian's Calypso Kitchen (Mermaid Lagoon)", why: "¥1,850 with the souvenir case." },
    { name: "Little Green Men Bun", price: 400, tag: "classic", jp: true, land: "Mediterranean Harbor", where: "Zambini Brothers' · Expedition Eats · Yucatan Base Camp Grill", why: "Steamed bun shaped like the Toy Story aliens. Peak Tokyo Disney cute." },
    { name: "Mike Melon Bread (cream)", price: 500, tag: "classic", jp: true, land: "Mediterranean Harbor", where: "Mamma Biscotti's Bakery", why: "Japanese melon-pan shaped like Mike Wazowski." },
    { name: "Smoked Turkey Leg", price: 1200, tag: "classic", land: "Mediterranean Harbor", where: "Refresco's", why: "Big, smoky and shareable." },
    { name: "Tortilla Cheese Dog", price: 980, tag: "remember", land: "Lost River Delta", where: "Miguel's El Dorado Cantina", why: "Coco 'Remember Me' event special (until Nov 2): spicy sausage, chili and cheese." },
    { name: "Tandoori Chicken + Mango Lassi", price: 400, tag: "classic", land: "Arabian Coast", where: "Casbah Food Court", why: "Cheap, tasty and quick: ¥400 chicken, ¥600 lassi." },
    { name: "Sushi Roll (shrimp + chicken cutlet)", price: 550, tag: "classic", jp: true, land: "American Waterfront", where: "Bayside Takeout", why: "Hand-held Japanese snack roll." },
    { name: "Sea Salt Ice Monaka", price: 400, tag: "classic", jp: true, land: "Everywhere", where: "Ice cream wagons", why: "Ice cream in a crispy Japanese monaka wafer." },
    { name: "Popcorn: Truffle Salt", price: 400, tag: "popcorn", land: "Port Discovery", where: "Wagon by Aquatopia · wagon by Horizon Bay", why: "Anniversary flavor." },
    { name: "Popcorn: Garlic Shrimp", price: 400, tag: "popcorn", jp: true, land: "Fantasy Springs", where: "Wagon by Fairy Tinker Bell's Busy Buggies · Lido Isle wagon", why: "Savory and only-in-Tokyo." },
    { name: "Popcorn: Mala Spicy", price: 400, tag: "popcorn", land: "American Waterfront", where: "Wagon by Liberty Landing Diner", why: "Numbing Sichuan heat." },
    { name: "Popcorn: Soy Sauce Butter", price: 400, tag: "popcorn", jp: true, land: "Mermaid Lagoon", where: "Wagon by Scuttle's Scooters", why: "The classic Japanese flavor." },
    { name: "Popcorn: Black Pepper", price: 400, tag: "popcorn", land: "Mediterranean Harbor", where: "Wagon by Soaring", why: "" },
    { name: "Popcorn: Curry (from 5 PM) / Salty Caramel (until 4:30)", price: 400, tag: "popcorn", jp: true, land: "Arabian Coast", where: "Arabian Coast wagon", why: "Japanese-style curry popcorn is a fan favorite." },
    { name: "Popcorn: Caramel · Milk Chocolate · Salt", price: 400, tag: "popcorn", land: "American Waterfront", where: "Caramel: Dockside Stage + Cove of Wonder · Milk Choc: Cape Cod Cook-Off · Salt: Hangar Stage (Lost River Delta)", why: "" },
  ],
  tdl: [
    // ✅ every item checked against the official tokyodisneyresort.jp menus on Oct 29, 2026
    { name: "Halloween Sundae (pumpkin soft serve + churro)", price: 900, tag: "halloween", land: "World Bazaar", where: "Ice Cream Cones", why: "Halloween-only. Pumpkin soft serve is a Japanese fall favorite." },
    { name: "Maple-Pumpkin Churro", price: 600, tag: "halloween", land: "Fantasyland + Parkside", where: "LeFou's · La Taverne de Gaston · Parkside Wagon", why: "This season's churro flavor. Gone after Oct 31." },
    { name: "Mike's Melon Bread (custard filling)", price: 500, tag: "halloween", jp: true, land: "World Bazaar + Tomorrowland", where: "Sweetheart Café · Food Booth (Tomorrowland side)", why: "Japan's crispy melon pan with Mike's face. Sold through Oct 31 only." },
    { name: "Assorted Box: Pretzel Dog + bone-in fried chicken", price: 1580, tag: "halloween", land: "Fantasyland", where: "La Taverne de Gaston", why: "Halloween box (¥1,860 with a drink). Eat it in Gaston's tavern." },
    { name: "Iced Purple Sweet Potato Caffè Latte", price: 880, tag: "halloween", jp: true, land: "Adventureland", where: "Café Orléans", why: "Purple sweet potato (beni imo) is Japan's classic autumn flavor." },
    { name: "Pumpkin Mousse & Chocolate Pudding", price: 550, tag: "halloween", land: "Everywhere", where: "Sweetheart Café · Hungry Bear · Tomorrowland Terrace · Pan Galactic · Plazma Ray's", why: "Easy Halloween dessert at most counter-service spots." },
    { name: "Gyoza Sausage Bun", price: 600, tag: "classic", jp: true, land: "Adventureland", where: "Boiler Room Bites", why: "Disneyland's answer to the DisneySea Gyoza Dog: gyoza filling + sausage in a bun." },
    { name: "Inari Sushi Sausage Roll", price: 600, tag: "classic", jp: true, land: "Tomorrowland", where: "Food Booth (Tomorrowland side)", why: "Sweet fried-tofu (inari) wrapped around a sausage. Only in Japan." },
    { name: "Little Green Dumplings (alien mochi)", price: 550, tag: "classic", jp: true, land: "Tomorrowland", where: "Pan Galactic Pizza Port · Plazma Ray's Diner", why: "Three Toy Story aliens as squishy mochi. ¥1,400 with the souvenir case." },
    { name: "Hungry Bear Curry (chicken + beef patty)", price: 1200, tag: "classic", jp: true, land: "Westernland", where: "Hungry Bear Restaurant", why: "Japanese curry rice, the park's best-value real meal (Google 4.3). Chicken curry ¥900, pork cutlet ¥1,100. Mild or medium-spicy." },
    { name: "Tempura or tonkatsu set · chirashi don", price: 2800, tag: "classic", jp: true, land: "World Bazaar", where: "Restaurant Hokusai (2F)", why: "Sit-down Japanese food (Google 4.0). Chirashi don ¥3,300. Their specialty parfait is ¥800." },
    { name: "Teriyaki Chicken Leg", price: 800, tag: "classic", jp: true, land: "Adventureland", where: "The Skipper's Galley", why: "Sweet-savory teriyaki, cheaper than the turkey leg." },
    { name: "Crème Brûlée Churro", price: 600, tag: "classic", land: "Westernland + Critter Country", where: "Camp Woodchuck Kitchen · Grandma Sara's Kitchen", why: "A churro flavor WDW doesn't have." },
    { name: "Mickey Waffle (whipped topping + maple)", price: 800, tag: "classic", land: "World Bazaar", where: "Great American Waffle Co.", why: "The classic. ¥1,000 with ice cream. Expect a line in the morning." },
    { name: "Ganache Sandwich (chocolate + coffee)", price: 850, tag: "classic", land: "Adventureland", where: "Café Orléans", why: "New 'Sweet Moments' dessert." },
    { name: "Galette Bretonne (nuts + chocolate)", price: 850, tag: "classic", land: "World Bazaar", where: "Sweetheart Café", why: "New 'Sweet Moments' dessert; ¥1,450 as a café set." },
    { name: "Smoked Turkey Leg", price: 1200, tag: "classic", land: "Westernland", where: "Camp Woodchuck Kitchen · Cowboy Cookhouse", why: "The giant drumstick. Same idea as Orlando's, so skip it if you're saving room." },
    { name: "Mickey Ice Bar (tropical fruit)", price: 400, tag: "classic", land: "Tomorrowland + Fantasyland", where: "Fresh Fruit Oasis · ice cream wagons by Fantasyland Forest Theatre and La Taverne de Gaston", why: "Cheap, cute, and quick between rides." },
    { name: "Popcorn: Japan-only flavors", price: 400, tag: "popcorn", jp: true, land: "Everywhere", where: "Soy sauce & butter: in front of “it's a small world” · Curry: next to Trading Post · Honey: in front of Pooh's Hunny Hunt · Black pepper: next to The Gazebo · Corn potage: Toon Pop · Strawberry Napoleon / salted caramel / cheddar: The Big Pop · Milk chocolate: Pop-A-Lot", why: "Each wagon sells one flavor. ¥400 a box; character buckets cost more." },
  ],
};
