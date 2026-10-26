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
        t: "19:30", title: "Yakitori in Omoide Yokocho", ask: [{"jp": "一人、入れますか？", "ro": "Hitori, hairemasu ka?", "en": "Can one person get a seat?", "hear": "full"}, {"jp": "席料はいくらですか？", "ro": "Sekiryō wa ikura desu ka?", "en": "How much is the seat charge?", "hear": "money"}], ll: [35.6929, 139.6995], say: ["hitori", "hitotsu", "nama", "okaikei"], pic: "Omoide Yokocho night photo men", rx: "nostalgic", place: "Omoide Yokocho, Shinjuku",
        ride: [{"ln": "M", "from": "M10", "to": "M08", "dir": "荻窪・方南町方面 (toward Ogikubo / Hōnanchō)", "type": "Every train stops at all three stations.", "wrong": "Next stop 四谷三丁目 Yotsuya-sanchōme (M11) = wrong way.", "min": 4, "exit": "西口 West Exit — Omoide Yokocho is along the tracks just north"}],
        how: [
          "Walk 1 min to Shinjuku-gyoemmae Station and take the Marunouchi line (red) 2 stops to Shinjuku.",
          "Follow signs for the West Exit (西口); the alley is just north of the exit, along the tracks.",
          "Pick a stall with an empty stool and say “Hitori desu” (just one).",
        ],
        snack: "Order by pointing: negima (chicken + leek), tsukune (meatball), kawa (crispy skin). Say “tare” for the sweet glaze or “shio” for salt. A small seat charge (otōshi) with a mini appetizer is normal.",
        photo: "Walk toward the camera mid-alley glancing up at the lanterns, vertical, Night mode. Ask before shooting inside a stall.",
      },
      {
        t: "21:30", title: "Easy Ni-chome intro", night: true, ask: [{"jp": "アイイロカフェはどこですか？", "ro": "Aiiro Kafe wa doko desu ka?", "en": "Where's Aiiro Cafe?", "hear": "dir"}, {"jp": "外国人でも入れますか？", "ro": "Gaikokujin demo hairemasu ka?", "en": "Can foreigners come in?", "hear": "full"}], ll: [35.6905, 139.7077], say: ["cover", "kanpai", "w-profile", "namae"], rx: "neon", place: "Aiiro Cafe, Shinjuku 2-chome",
        ride: [{"ln": "M", "from": "M08", "to": "M09", "dir": "池袋方面 (toward Ikebukuro)", "type": "Or just walk ~15 min east.", "wrong": "Next stop 西新宿 Nishi-shinjuku = wrong way.", "min": 2, "exit": "Exits C5–C8 come up right at Ni-chome"}],
        how: [
          "Head back east: Marunouchi line to Shinjuku-sanchome, or just walk ~15 min. Ni-chome is literally around your hotel.",
          "Aiiro Cafe is the open-air corner bar on Naka-dori — grab a drink and people-watch.",
          "Then Eagle Tokyo for an easy, English-friendly vibe: bears, muscle and leather.",
          "Into daddies? GB is the quiet, English-speaking counter bar with an older crowd.",
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
    id: "d2", date: "2026-10-27", prep: ["Book a teamLab Planets time slot for tomorrow morning if you haven't, and save the QR in Trip → Tickets", "Pack shorts or pants that roll up above the knee — teamLab has knee-deep water rooms", "Charge everything (teamLab + Odaiba are big photo days)", "Alarm ~8:30 AM — leave at 9:30"], rain: "DisneySea stays great in rain: Journey to the Center of the Earth, Sindbad, Tower of Terror, Toy Story Mania and most of Fantasy Springs are indoors. Ponchos are sold in every shop; outdoor shows may be cut, so check the app.", home: {"after": "20:30", "note": "Trains from Maihama run until around midnight, but the long Keiyo-line walk at Tokyo Station adds 15 min. A taxi from Maihama to Shinjuku is expensive (likely ¥10,000+), so aim for a train before ~23:00."}, dow: "Tue", title: "Your 25th birthday at DisneySea", city: "Tokyo DisneySea",
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
        t: "08:30", title: "At the gate → Frozen Premier Access", ask: [{"jp": "バースデーシールはどこでもらえますか？", "ro": "Bāsudē shīru wa doko de moraemasu ka?", "en": "Where can I get a birthday sticker?", "hear": "dir"}], ll: [35.6273, 139.8846], say: ["sticker", "tanjoubi"], place: "Tokyo DisneySea",
        how: [
          "Scan in, then immediately buy Premier Access for Anna and Elsa's Frozen Journey in the app.",
          "Ask any cast member for a birthday sticker: “Bāsudē shīru o onegai shimasu.” (A birthday sticker, please.) Write your name on it — you'll get “Happy birthday!” all day.",
        ],
      },
      {
        t: "09:30", title: "Fantasy Springs + the big rides", ask: [{"jp": "ファンタジースプリングスはどっちですか？", "ro": "Fantajī Supuringusu wa dotchi desu ka?", "en": "Which way is Fantasy Springs?", "hear": "dir"}], say: ["photoplease", "hitotsu", "oishii"], pic: "Tokyo DisneySea Halloween outfit men", rx: "pastel", place: "Fantasy Springs, Tokyo DisneySea",
        how: [
          "Fantasy Springs on standby: Rapunzel's Lantern Festival, Peter Pan's Never Land Adventure.",
          "Then the classics: Journey to the Center of the Earth (Mysterious Island), Tower of Terror, Soaring: Fantastic Flight.",
          "Check the app for the 25th-anniversary harbor show times.",
        ],
        snack: "Park snacks to hunt: the Gyoza Dog at Nautilus Galley (Mysterious Island), the float-ring shaped Ukiwaman shrimp bun at Seaside Snacks (Port Discovery), and a popcorn bucket — every cart has a different flavor, so check the app map.",
        photo: "Halloween decor + the volcano behind you. Full-body costume shot from waist height (have them crouch a little).",
      },
      {
        t: "17:15", title: "Blue hour at Mediterranean Harbor", ask: [{"jp": "夜のショーは何時からですか？", "ro": "Yoru no shō wa nanji kara desu ka?", "en": "What time does the night show start?", "hear": "time"}], ll: [35.6265, 139.8848], say: ["photoplease", "kirei"], pic: "Tokyo DisneySea Mount Prometheus night photo", rx: "reala", place: "Mediterranean Harbor, Tokyo DisneySea",
        how: [
          "Grab a railing spot along the harbor ~10 min before sunset (~4:50 PM); blue hour is the 20 minutes after.",
          "Stay for the night show and ride until the 9 PM close.",
        ],
        photo: "THE birthday shot: lean on the railing, body angled, look back at the camera with Mount Prometheus across the water. Birthday sticker + ears in frame. Shoot RAW + JPEG on the X100VI.",
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
          "Tomorrow's teamLab slot is 9:30 AM, so give yourself 7 hours of sleep.",
        ],
        spicy: "Birthday steam session. “今日誕生日なんです” (it's my birthday today) works here too 🎉",
      },
    ],
  },

  /* ---------------- DAY 3 ---------------- */
  {
    id: "d3", date: "2026-10-28", prep: ["Costume + ears again for Disneyland", "Link your Disneyland ticket in the Disney app; decide on Premier Access for Beauty and the Beast", "Charge phone, power bank and camera batteries; poncho in the bag", "Alarm ~6:15 AM — leave at 7:00"], rain: "teamLab Planets is fully indoors. If it pours later, skip the seaside boardwalk and stay inside DiverCity Tokyo Plaza (food court + shops) — the Gundam still poses outside, rain or shine.", home: {"after": "20:00", "note": "You're back in Shinjuku early tonight — Ni-chome is around the corner from your hotel. Disneyland tomorrow means a 6:15 AM alarm."}, dow: "Wed", title: "teamLab + Odaiba", city: "Tokyo",
    theme: "teamlab", emoji: "🌈", deco: ["🌈", "🪞", "🤖", "🌊", "✨", "💧"],
    kicker: "Day 3 · Light, water + giant robots",
    tagline: "Wade through glowing water rooms, meet a life-size Gundam, then watch the sun set over Rainbow Bridge.",
    sleep: "shinjuku", wx: { lat: 35.645, lon: 139.79 },
    phrases: ["yoyaku", "photoplease", "kirei", "hitotsu"],
    steps: [
      {
        t: "09:30", title: "Shinjuku → teamLab Planets", ask: [{"jp": "チームラボプラネッツはどっちですか？", "ro": "Chīmu Rabo Puranettsu wa dotchi desu ka?", "en": "Which way to teamLab Planets?", "hear": "dir"}, {"jp": "靴と荷物はどこに置きますか？", "ro": "Kutsu to nimotsu wa doko ni okimasu ka?", "en": "Where do I leave my shoes and bags?", "hear": "dir"}], ll: [35.6492, 139.7898], say: ["yoyaku", "norikae"], pic: "teamLab Planets men outfit photo", rx: "reala", place: "teamLab Planets TOKYO, Toyosu",
        ride: [{"ln": "M", "from": "M10", "to": "M16", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train.", "wrong": "Next stop 新宿三丁目 (M09) = wrong way.", "min": 14, "exit": "Walk underground to Ginza-itchōme (Yurakucho Line, ~5 min)"}, {"ln": "Y", "from": "Y19", "to": "Y22", "dir": "新木場方面 (toward Shin-kiba)", "type": "Every train.", "wrong": "Next stop 有楽町 Yūrakuchō (Y18) = wrong way.", "min": 6, "exit": "Follow ゆりかもめ Yurikamome signs"}, {"ln": "U", "from": "U16", "to": "U15", "dir": "新橋方面 (toward Shimbashi) — Toyosu is the end, so any train", "type": "Driverless — front car = best view.", "wrong": "", "min": 2, "exit": "teamLab Planets is a 1-min walk"}],
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Ginza, walk to Ginza-itchōme and take the Yūrakuchō line to Toyosu (or just follow Google Maps).",
          "Switch to the Yurikamome line 1 stop to Shin-Toyosu; teamLab is a 1-min walk.",
          "Book a time slot online first if you haven't.",
        ],
        tip: "You'll wade through knee-deep water: wear shorts or pants that roll up. White or light colors catch the projections best.",
        photo: "The mirror-floor rooms are the best mirror selfies of the whole trip. Stand still in the infinite light-crystal room and shoot wide.",
      },
      {
        t: "12:30", title: "Odaiba: Unicorn Gundam", ask: [{"jp": "ガンダムの変身は何時ですか？", "ro": "Gandamu no henshin wa nanji desu ka?", "en": "What time does the Gundam transform?", "hear": "time"}], ll: [35.6251, 139.7756], say: ["photoplease", "hitotsu"], pic: "Unicorn Gundam Odaiba photo low angle", rx: "classic", place: "DiverCity Tokyo Plaza, Odaiba",
        ride: [{"ln": "U", "from": "U15", "to": "U07", "dir": "新橋方面 (toward Shimbashi)", "type": "Every train. Sit up front!", "wrong": "Next stop 豊洲 Toyosu (U16) = wrong way.", "min": 20, "exit": "DiverCity Tokyo Plaza is a 5-min walk"}],
        how: [
          "Yurikamome line from Shin-Toyosu to Daiba (~20 min). Sit in the front car — it's driverless, so you get the windshield view.",
          "The life-size Unicorn Gundam stands outside DiverCity Tokyo Plaza; it transforms at set times.",
        ],
        snack: "Lunch at the DiverCity food court (ramen, okonomiyaki, everything).",
        photo: "Shoot the Gundam from low with a 0.5x wide angle so it towers over you.",
      },
      {
        t: "16:15", title: "Sunset at Odaiba Seaside Park", ll: [35.6298, 139.7744], say: ["kirei"], pic: "Odaiba Rainbow Bridge sunset silhouette", rx: "velvia", place: "Odaiba Seaside Park",
        how: [
          "Walk 10 min to the beach boardwalk. Sunset ~4:50 PM.",
          "Rainbow Bridge lights up just after.",
        ],
        photo: "Silhouette on the boardwalk with Rainbow Bridge + Tokyo Tower behind. Lean on the railing, profile view.",
        tip: "Prefer the coast? Swap the whole day for Kamakura + Enoshima on the Odakyu line from Shinjuku: the Great Buddha, the seaside Enoden train and the famous Kamakurakōkōmae crossing.",
      },
      {
        t: "17:30", title: "Back to Shinjuku + dinner", quest: "⚔️ Attack on Titan “Guren no Yumiya” is screening in SCREEN X / 4DX (TOHO Cinemas Ikebukuro and others) — the first-week Eren art-board gift ends tomorrow, Oct 29.", ll: [35.6896, 139.7006], say: ["hitori", "oshiete"], place: "Shinjuku Station",
        ride: [{"ln": "U", "from": "U07", "to": "U01", "dir": "新橋方面 (toward Shimbashi)", "type": "Every train.", "wrong": "Next stop 東京国際クルーズターミナル (U08) = wrong way.", "min": 15, "exit": "Follow 銀座線 Ginza Line (orange) signs"}, {"ln": "G", "from": "G08", "to": "G05", "dir": "渋谷方面 (toward Shibuya)", "type": "Every train.", "wrong": "Next stop 銀座 Ginza (G09) = wrong way.", "min": 6, "exit": "Cross the platform at Akasaka-mitsuke to the red Marunouchi Line"}, {"ln": "M", "from": "M13", "to": "M10", "dir": "荻窪・方南町方面 (toward Ogikubo / Hōnanchō)", "type": "Every train.", "wrong": "Next stop 国会議事堂前 (M14) = wrong way.", "min": 6, "exit": "Back at your hotel station"}],
        how: [
          "Yurikamome from Daiba to Shimbashi, then the Ginza line to Akasaka-mitsuke and the Marunouchi line to Shinjuku-gyoemmae (~45 min) — or just follow Google Maps.",
          "Easy night: Disneyland tomorrow starts early.",
        ],
        snack: "Fūunji's tsukemen (dipping ramen) near Shinjuku South Exit: buy a ticket at the machine by the door, hand it over, wait for your seat.",
      },
      {
        t: "18:45", title: "Okamalt — Ni-chome's LGBTQ book café", night: true, ask: [{"jp": "オカマルトはどこですか？", "ro": "Okamaruto wa doko desu ka?", "en": "Where's Okamalt?", "hear": "dir"}], ll: [35.691, 139.707], say: ["gaymanga", "cover"], place: "Okamalt, 2-18-10 Shinjuku, Tokyo",
        how: [
          "Walk to 2-18-10 Shinjuku (Shin-Chidorigai building, 2F) — a few minutes from your hotel.",
          "Around ¥1,500 for 90 minutes, with a drink and snacks.",
          "Open about 1–8 PM, closed Thursday to Saturday — so tonight is your Tokyo window. Listing info is older; confirm hours first.",
        ],
        spicy: "Shelves of vintage Barazoku (the magazine the word “bara” comes from), Tom of Finland art and gay culture books, run by a Ni-chome writer and drag legend. Still up for more? The Tokyo Gaysian Club Crawl (Airbnb) runs 9–11:30 PM tonight from the Ni-chome 7-Eleven — only if you can handle the 6:15 AM Disney alarm 😅",
      },
      {
        t: "20:30", title: "Early session at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei", "kondomu2"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "Okamalt → 24 Kaikan is a 3-minute walk through Ni-chome.",
          "Out by 22:30: the Disneyland alarm is 6:15 AM tomorrow.",
        ],
        spicy: "Weeknight evenings are calmer: good for the sauna and the rooftop deck before it gets busy.",
      },
    ],
  },

  /* ---------------- DAY 4 ---------------- */
  {
    id: "d4", date: "2026-10-29", prep: ["Save your Shibuya Sky QR (sunset slot) in Trip → Tickets", "Optional bookings: Asakusa kimono rental, sushi class, Kirby Café / MHA Café cancellations", "Pick tomorrow's going-out outfit", "Cash for the night: ¥20,000+ (small bars are cash-only)", "Sleep in — alarm optional"], rain: "Rainy Disneyland: Haunted Mansion, Enchanted Tale of Beauty and the Beast, Pooh's Hunny Hunt and Monsters, Inc. are indoors. Parades can be cancelled for rain — check the app.", home: {"after": "20:30", "note": "Same as Tuesday: trains from Maihama until around midnight, but leave buffer for the long Tokyo Station transfer."}, dow: "Thu", title: "Tokyo Disneyland Halloween", city: "Tokyo Disneyland",
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
        t: "13:00", title: "The Villains' Halloween parade", ask: [{"jp": "パレードは何時からですか？", "ro": "Parēdo wa nanji kara desu ka?", "en": "What time does the parade start?", "hear": "time"}, {"jp": "ここに座ってもいいですか？", "ro": "Koko ni suwatte mo ii desu ka?", "en": "Can I sit here?", "hear": "yesno"}], say: ["sumimasen", "hitotsu", "oishii"], place: "Tokyo Disneyland Parade Route",
        how: [
          "Check the parade time in the app.",
          "Claim a spot 30–45 min early. Japanese parade etiquette: sit on the ground (bring a plastic sheet or a bag to sit on), don't stand up front, and keep bags low.",
        ],
        snack: "Halloween menus: look for seasonal items in the app (pumpkin and purple everything), a Mickey churro, and a themed popcorn bucket — it doubles as a birthday-week souvenir.",
      },
      {
        t: "17:00", title: "Cinderella Castle at blue hour", ask: [{"jp": "ナイトショーは何時からですか？", "ro": "Naito shō wa nanji kara desu ka?", "en": "What time is the night show?", "hear": "time"}], ll: [35.6329, 139.8804], say: ["photoplease", "kirei"], pic: "Tokyo Disneyland castle Halloween night men photo", rx: "pastel", place: "Cinderella Castle, Tokyo Disneyland",
        how: [
          "Get to the hub in front of the castle by ~4:45 PM.",
          "Stay for the nighttime show / Electrical Parade (check the app).",
        ],
        photo: "Stand dead-center on the path with the castle behind you, arms out or mid-jump. Burst mode, and have them crouch so the castle looks taller.",
      },
      {
        t: "21:00", title: "Easy night", night: true, ll: [35.6906, 139.7082], say: ["hitori", "nama", "kakkoii"], rx: "neon", spicy: "Dragon Men's go-gos are the muscle show, and Eagle is the bear-and-daddy room. Pick your vibe 😏", place: "Dragon Men, Shinjuku 2-chome",
        ride: [{"ln": "JE", "from": "JE07", "to": "JE01", "dir": "東京方面 (toward Tokyo)", "type": "Any train.", "wrong": "Next stop 新浦安 (JE08) = wrong way.", "min": 15, "exit": "Long walk → Marunouchi Line"}, {"ln": "M", "from": "M17", "to": "M09", "dir": "荻窪・方南町方面 (toward Ogikubo / Hōnanchō)", "type": "Every train. Get off one stop past your hotel for Ni-chome.", "wrong": "Next stop 大手町 = wrong way.", "min": 19, "exit": "Exits C5–C8 come up right at Ni-chome"}],
        how: [
          "Train back the same way (~1 h).",
          "One drink at Dragon Men (go-go dancers, very foreigner-friendly) or Eagle Tokyo.",
          "Thursday is drag night: Queen's Lounge at AiSOTOPE Lounge runs drag shows Wednesdays and Thursdays (about ¥3,000 with a drink, photo ID required).",
        ],
        snack: "Late konbini run: Lawson's Karaage-kun (bite-size fried chicken) or a hot oden cup from the counter.",
      },
      {
        t: "22:30", title: "Post-Disney soak at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "Dragon Men → 24 Kaikan is about 2 minutes on foot.",
          "Your legs will thank you after 15 hours at Disneyland. Tomorrow you sleep in.",
        ],
        spicy: "Stay as late as you like: Friday starts at 10 AM.",
      },
    ],
  },

  /* ---------------- DAY 5 ---------------- */
  {
    id: "d5", date: "2026-10-30", prep: ["Tomorrow is the LAST day of tax-free at the register: passport in your sling, ¥5,000+ per store", "Check the Pokémon Center Mega Tokyo site for timed entry", "Pokémon Café 7:15 PM: confirmation in Trip → Tickets; you leave the hotel at 6:25", "Halloween costume ready", "Look over your Trip → Merch list so the haul goes fast", "Big night tonight — water before bed 😅"], rain: "Shibuya Sky's open-air rooftop closes in heavy rain or strong wind (the indoor 46F deck stays open). Backup: the free Tokyo Metropolitan Government observatory in Shinjuku. Asakusa is fine with an umbrella — the Nakamise arcade is partly covered.", home: {"after": "23:00", "note": "Tokyo trains stop around midnight and restart ~5 AM. Ni-chome and Golden Gai are walking distance from your hotel."}, safe: {"title": "Easy Tokyo day + Shibuya sunset", "emoji": "🌆", "theme": "neon", "kicker": "Day 5 · Easy Tokyo day", "tagline": "Temples, Skytree, a Shibuya Sky sunset and a night out in Shinjuku.", "deco": ["🏮", "🗼", "🌆", "✨", "🍜", "🎌"]}, dow: "Fri", title: "Easy Tokyo day + the big night", city: "Tokyo",
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
        snack: "Asakusa Kagetsudo's giant melon pan (crispy outside, fluffy inside), then ningyō-yaki and age-manjū on Nakamise street. Eat beside the stall — eating while walking is frowned on here.",
      },
      {
        t: "11:00", title: "Senso-ji + Nakamise", ask: [{"jp": "予約なしで着物をレンタルできますか？", "ro": "Yoyaku nashi de kimono o rentaru dekimasu ka?", "en": "Can I rent a kimono without a reservation?", "hear": "yesno"}], ll: [35.7148, 139.7967], say: ["photook", "ikura"], pic: "Kaminarimon Asakusa men outfit photo", rx: "nostalgic", place: "Kaminarimon, Asakusa",
        how: [
          "Walk Nakamise street to the main hall.",
          "At the incense burner, waft a little smoke toward yourself for good health.",
          "Optional: rent a men's kimono nearby (~¥4,000 with dressing).",
        ],
        photo: "Under the giant red Kaminarimon lantern looking up, shot from low. From the temple grounds, line up the pagoda with Skytree behind it.",
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
        t: "15:00", title: "Omotesando mirror entrance (on the way)", quest: "💥 My Hero Academia Café is a short walk away at BOX cafe&space Cue Plaza Harajuku (through Dec 20; book ahead).", ask: [{"jp": "鏡のエスカレーターはどこですか？", "ro": "Kagami no esukarētā wa doko desu ka?", "en": "Where's the mirror escalator?", "hear": "dir"}], ll: [35.6683, 139.7056], say: ["photoplease"], pic: "Tokyu Plaza Omotesando mirror entrance outfit", rx: "reala", place: "Tokyu Plaza Omotesando Omokado",
        ride: [{"ln": "Z", "from": "Z14", "to": "Z02", "dir": "渋谷・中央林間方面 (toward Shibuya / Chūō-rinkan)", "type": "Every train stops everywhere on the Hanzomon Line.", "wrong": "Next stop 曳舟 Hikifune = wrong way (that's the Tobu Line).", "min": 30, "exit": "Exit A2 → Tokyu Plaza Omotesando"}],
        how: [
          "From Oshiage (Skytree) take the Hanzōmon line straight to Omotesando (~30 min).",
          "Exit A2; Tokyu Plaza's kaleidoscope mirror escalator is on the corner.",
        ],
        photo: "Fit check: full-body shot in the mirror entrance from the bottom of the escalator. Then the free rooftop terrace upstairs.",
      },
      {
        t: "16:15", title: "Shibuya Sky at sunset", ask: [{"jp": "渋谷スカイのチケット売り場は何階ですか？", "ro": "Shibuya Sukai no chiketto uriba wa nankai desu ka?", "en": "What floor is the Shibuya Sky ticket counter?", "hear": "kai"}, {"jp": "ロッカーはどこですか？", "ro": "Rokkā wa doko desu ka?", "en": "Where are the lockers?", "hear": "dir"}], ll: [35.6585, 139.7023], say: ["yoyaku", "photoplease"], pic: "Shibuya Sky sunset silhouette men", rx: "velvia", place: "Shibuya Sky",
        ride: [{"ln": "Z", "from": "Z02", "to": "Z01", "dir": "渋谷・中央林間方面 (toward Shibuya)", "type": "Every train.", "wrong": "Next stop 青山一丁目 Aoyama-itchōme (Z03) = wrong way.", "min": 2, "exit": "Follow signs to Shibuya Scramble Square"}],
        how: [
          "Hanzōmon line 1 stop to Shibuya, follow signs to Shibuya Scramble Square.",
          "Ticket counter on 14F; the rooftop is 46F. Sunset ~4:50 PM.",
          "Bags, hats and selfie sticks go in the ¥100 lockers; phones are fine.",
        ],
        photo: "Sky Edge glass corner at sunset as a silhouette (queue early). Lie in the Cloud Hammock looking up. Shoot straight down onto the crossing.",
        snack: "Dinner: Uobei Shibuya Dōgenzaka — order sushi on a touchscreen and it zooms to you on a little bullet-train track. Cheap and fun.",
      },
      {
        t: "19:00", title: "Back to the hotel to glow up", ll: [35.6888, 139.71], pic: "hotel mirror fit check night out men", rx: "reala", place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        ride: [{"ln": "F", "from": "F16", "to": "F13", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Local, Express and Commuter Express all stop at Shinjuku-sanchōme.", "wrong": "Trains for 横浜 Yokohama / 元町・中華街 Motomachi-Chūkagai use the same platforms — next stop 代官山 Daikanyama = wrong way.", "min": 10, "exit": "Walk ~5 min to the hotel"}],
        how: [
          "Fukutoshin line Shibuya → Shinjuku-sanchome (~10 min, no transfer).",
          "Nap 30 min. Shower. Outfit on.",
        ],
        photo: "Fit check in the hotel mirror before you go out — the photo-dump opener.",
      },
      {
        t: "22:00", title: "Golden Gai pre-game", ask: [{"jp": "外国人でも大丈夫ですか？チャージはいくら？", "ro": "Gaikokujin demo daijōbu desu ka? Chāji wa ikura?", "en": "Are foreigners OK? How much is the cover?", "hear": "full"}], ll: [35.694, 139.7048], say: ["gaikokujin", "cover", "nama"], pic: "Golden Gai night flash photo", rx: "neon", place: "Shinjuku Golden Gai",
        how: [
          "Walk ~12 min to Golden Gai (Kabukichō side).",
          "Many bars charge a cover and ban photos — pick one with an English sign out front.",
        ],
        photo: "Lantern alleys with direct flash ON (not Night mode) for the party-photo look. Shoot the alleys, never inside the bars.",
      },
      {
        t: "23:30", title: "The big night 🪩", night: true, ask: [{"jp": "イーグル・ブルーはどこですか？", "ro": "Īguru Burū wa doko desu ka?", "en": "Where's Eagle Tokyo Blue?", "hear": "dir"}], ll: [35.6902, 139.7085], say: ["taipu", "kinniku", "odorou", "hotel", "kisu", "yametoku"], rx: "neon", place: "Eagle Tokyo Blue, Shinjuku 2-chome",
        how: [
          "Eagle Tokyo Blue or Bear Tokyo first (weekend DJs).",
          "After 1 AM: ArcH (SHOWER CANDY tonight) or AiSOTOPE Lounge for Akiba Night's 23rd-anniversary Halloween, a long-running anime/otaku gay night. Your MHA and AOT fandom fits right in.",
          "Clubs run till ~5 AM; trains restart around 5.",
        ],
        spicy: "Friday is the main event — the bear-and-muscle crowd is out in force at Eagle Blue. Bring ¥20,000+ cash for small bars, and if the night ends at 24 Kaikan, wear your locker key the way you mean it 😉. Stay out of any bar a Kabukichō tout steers you to. Poppers and cannabis are illegal in Japan — don't carry or accept any.",
        snack: "The 4 AM move: konbini onigiri + Pocari Sweat on the walk home. Your Saturday self will thank you.",
      },
      {
        t: "28:00", title: "After-club crash at 24 Kaikan 🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["shukuhaku", "kondomu2"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "When Eagle Blue winds down, 24 Kaikan is a 2-minute walk.",
          "Ask for the overnight stay (宿泊): about 12–14 hours with a locker, robe and towels, so you can sleep there. Guys come straight from the clubs at this hour.",
          "Pokémon Center Mega Tokyo is at 10 AM, and your phone lives in the locker. Ask the desk to wake you: “8時に起こしてください” (Hachi-ji ni okoshite kudasai).",
        ],
        spicy: "The classic Ni-chome ending: the club crowd moves to the sauna at this hour 🔥",
      },
    ],
  },

  /* ---------------- DAY 6 ---------------- */
  {
    id: "d6", date: "2026-10-31", prep: ["📦 PACK THE SUITCASE TONIGHT — it ships from the front desk at 7:30 AM to your Osaka hotel (Yamato, ~¥2,500, arrives Nov 2)", "Waybill info ready: APA Hotel & Resort Osaka Umeda Eki Tower (address in Trip → Hotels), your name, delivery Nov 2", "Email the Osaka hotel that a suitcase is arriving for you", "Backpack for 1 Kyoto night: clothes, toiletries, chargers, passport (the Nintendo Museum checks ID)", "SmartEX: Shinagawa → Kyoto ~8:30 AM, seat E, Suica linked", "Last check on the Nintendo Museum ticket alert", "From midnight tax-free ends — keep receipts for anything you buy, for the Narita refund", "Alarm ~6:45 AM — check out by 7:30"], rain: "Ikebukuro's Sunshine City, Shibuya PARCO and Takashimaya are all indoors — rain barely matters today. Shibuya streets get crowded on Halloween either way.", home: {"after": "23:00", "note": "You're walking distance from your hotel in Ni-chome. Shinjuku streets stay busy all Halloween night."}, safe: {"tagline": "Merch haul by day, Pokémon Café dinner, then Halloween night in costume."}, dow: "Sat", title: "Pokémon Tokyo + Halloween", city: "Tokyo",
    theme: "ghost", emoji: "👻", deco: ["👻", "🎃", "⚡", "💜", "🍬", "🕯️"],
    kicker: "Day 6 · Ghost-type energy",
    tagline: "Merch haul by day, Pokémon Café dinner, then Ni-chome in costume until sunrise.",
    sleep: "shinjuku", wx: { lat: 35.69, lon: 139.71 },
    phrases: ["menzei", "fukuro", "card", "kore", "kanpai", "kakkoii", "line", "hima"],
    steps: [
      {
        t: "10:00", title: "Pokémon Center Mega Tokyo", ask: [{"jp": "サンシャインシティはどっちですか？", "ro": "Sanshain Shiti wa dotchi desu ka?", "en": "Which way to Sunshine City?", "hear": "dir"}, {"jp": "免税はレジでできますか？", "ro": "Menzei wa reji de dekimasu ka?", "en": "Can I do tax-free at the register?", "hear": "yesno"}], ll: [35.729, 139.7193], say: ["menzei", "fukuro", "card"], pic: "Pokemon Center Mega Tokyo photo", rx: "reala", place: "Pokemon Center Mega Tokyo, Sunshine City",
        ride: [{"ln": "F", "from": "F13", "to": "F09", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Any train — all stop at Ikebukuro.", "wrong": "Next stop 北参道 Kita-sandō (F14) = wrong way.", "min": 10, "exit": "East Exit (東口) → Sunshine 60 Street"}],
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
        t: "13:00", title: "Shibuya: Mewtwo + Nintendo Tokyo", quest: "🌸 Tower Records Shibuya (5 min walk) has Ariana's “Tower Love!” petal posters + a fan lottery. Buy the Japanese edition CD.", ask: [{"jp": "ポケモンセンターは何階ですか？", "ro": "Pokemon Sentā wa nankai desu ka?", "en": "What floor is the Pokémon Center on?", "hear": "kai"}], ll: [35.6622, 139.6988], say: ["photoplease", "menzei"], pic: "Shibuya crossing walking photo men", rx: "classic", place: "Shibuya PARCO",
        ride: [{"ln": "F", "from": "F09", "to": "F16", "dir": "渋谷・横浜・元町・中華街方面 (toward Shibuya)", "type": "Any train — all stop at Shibuya.", "wrong": "Next stop 要町 Kanamechō = wrong way.", "min": 15, "exit": "Follow signs to Shibuya PARCO (~7 min walk)"}],
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
        t: "16:15", title: "Pride House Tokyo Legacy 🏳️‍🌈", night: true, ask: [{"jp": "見学してもいいですか？", "ro": "Kengaku shite mo ii desu ka?", "en": "Is it OK to look around?", "hear": "yesno"}], ll: [35.6886, 139.7128], say: ["arigatou"], place: "Pride House Tokyo Legacy, 1-2-9 Shinjuku, Tokyo",
        how: [
          "Japan's first permanent LGBTQ center, at 1-2-9 Shinjuku: a few minutes' walk from your hotel.",
          "Open 1–7 PM, closed Wednesdays and Thursdays, so today works.",
          "Browse a library of about 1,400 LGBTQ books, chat with staff, and pick up flyers for tonight's parties.",
        ],
        spicy: "Ask the staff which Ni-chome Halloween parties they'd hit tonight. Local intel beats any guide.",
      },
      {
        t: "17:00", title: "Rest + costume on", ll: [35.6888, 139.71], place: "APA Hotel Shinjuku Gyoemmae, 2-2-8 Shinjuku, Tokyo",
        ride: [{"ln": "F", "from": "F16", "to": "F13", "dir": "池袋・和光市・小竹向原方面 (toward Ikebukuro)", "type": "Local, Express and Commuter Express all stop at Shinjuku-sanchōme.", "wrong": "Next stop 代官山 Daikanyama = wrong way.", "min": 10, "exit": "Walk ~5 min to the hotel"}],
        how: [
          "Fukutoshin line Shibuya → Shinjuku-sanchome (~10 min).",
          "Drop the merch, nap, costume on (wear it to the café for the Halloween photo).",
        ],
      },
      {
        t: "18:25", title: "Leave for Pokémon Café Tokyo", ask: [{"jp": "高島屋の新館はどっちですか？", "ro": "Takashimaya no shinkan wa dotchi desu ka?", "en": "Which way to Takashimaya's Annex building?", "hear": "dir"}], say: ["norikae", "doko"], place: "Nihonbashi Takashimaya S.C. Annex",
        ride: [{"ln": "M", "from": "M10", "to": "M16", "dir": "池袋方面 (toward Ikebukuro)", "type": "Every train.", "wrong": "Next stop 新宿三丁目 (M09) = wrong way.", "min": 14, "exit": "Follow the orange Ginza Line signs"}, {"ln": "G", "from": "G09", "to": "G11", "dir": "浅草方面 (toward Asakusa)", "type": "Every train.", "wrong": "Next stop 新橋 Shimbashi (G08) = wrong way.", "min": 4, "exit": "Exit B2 → straight into Takashimaya"}],
        how: [
          "Marunouchi line from Shinjuku-gyoemmae to Ginza (~17 min).",
          "Change to the Ginza line (orange) 2 stops to Nihombashi.",
          "Exit B2 connects straight into Takashimaya; head to the Annex (新館) 5F.",
        ],
        tip: "Arrive by 7:00 — they want you 15 min early for the 7:15 PM table. Your reservation number is in your confirmation email.",
      },
      {
        t: "19:15", title: "Pokémon Café dinner 🍰", ask: [{"jp": "ポケモンセンターは何時までですか？", "ro": "Pokemon Sentā wa nanji made desu ka?", "en": "What time does the Pokémon Center close?", "hear": "time"}], ll: [35.681, 139.774], say: ["yoyaku", "oishii", "photook"], pic: "Pokemon Cafe Tokyo food photo", rx: "reala", place: "Pokemon Cafe Tokyo",
        how: [
          "Peek into Pokémon Center Tokyo DX next door before you sit — it may close before you finish.",
          "90-minute seating — order early so you have time for dessert.",
        ],
        snack: "Order a latte for random Pokémon latte art, plus one of the character plates — they're made to be photographed.",
        photo: "Overhead flat-lay of your food before the first bite, then a selfie with the costume + plate.",
      },
      {
        t: "21:30", title: "Ni-chome Halloween 👻", night: true, ll: [35.6912, 139.7068], say: ["kakkoii", "line", "hima", "kanpai"], pic: "Shinjuku Halloween street costume night", rx: "neon", place: "Bar Blacknude, 2-15-12 Shinjuku",
        ride: [{"ln": "G", "from": "G11", "to": "G09", "dir": "渋谷方面 (toward Shibuya)", "type": "Every train.", "wrong": "Next stop 三越前 Mitsukoshimae (G12) = wrong way.", "min": 4, "exit": "Follow the red Marunouchi Line signs"}, {"ln": "M", "from": "M16", "to": "M09", "dir": "荻窪・方南町方面 (toward Ogikubo / Hōnanchō)", "type": "Every train.", "wrong": "Next stop 東京 Tokyo (M17) = wrong way.", "min": 17, "exit": "Exits C5–C8 come up right at Ni-chome"}],
        how: [
          "Ginza → Marunouchi line back to Shinjuku-sanchome (~25 min).",
          "Bar Blacknude's downstairs club (muscle staff, open from 7 PM tonight) → Arty Farty's HALLOWEEN PARTY 2026 (from 8 PM, very foreigner-friendly) → Eagle Tokyo Blue for the bears → after midnight, AiSOTOPE (RUSHCRUISE 80th) or ArcH (Jimi-Halloween: dress as something boring 😂).",
          "Drink inside the bars — parts of Shinjuku restrict street drinking tonight.",
        ],
        spicy: "The streets fill with costumes all night. Costume = instant conversation starter: compliment someone's look (“Kakkoii!” = you look cool!) and you're in. Ask before photographing anyone.",
        photo: "Street shots on Naka-dori with direct flash. Get a 5-second clip of the crowd — it'll be the Halloween reel opener.",
      },
      {
        t: "25:30", title: "Halloween nightcap at 24 Kaikan 👻🧖", night: true, ask: [{"jp": "外国人でも大丈夫ですか？", "ro": "Gaikokujin demo daijōbu desu ka?", "en": "Are foreigners OK?", "hear": "entry"}], ll: [35.6904, 139.7083], say: ["kyukei"], place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo",
        how: [
          "Only if your suitcase is packed. It ships at 7:30 AM and the alarm is 6:45 AM.",
          "Lockers are small, so drop the costume at the hotel first (it's on the way).",
        ],
        spicy: "Halloween is the busiest night of the year in Ni-chome, and 24 Kaikan fills up after the streets do 👀",
      },
    ],
  },

  /* ---------------- DAY 7 ---------------- */
  {
    id: "d7", date: "2026-11-01", prep: ["Pack the backpack tonight — you leave it at the front desk at 6:30 AM checkout", "Comfy shoes for the 1.5-hour Fushimi Inari climb", "Pokémon Café Osaka 6:00 PM: confirmation in Trip → Tickets", "Optional: check the Kirby Café Osaka booking site for a cancellation", "Alarm ~6:00 AM"], rain: "Kyoto temples look amazing in the rain, but Ninenzaka's stone slopes get slippery. Covered options: Nishiki Market, Kyoto Takashimaya (Nintendo KYOTO) and Kyoto Station.", home: {"after": "21:30", "note": "Kyoto buses and the Karasuma subway stop around 23:30. Taxis are easy to flag on Shijō-dōri — show the Kyoto hotel card."}, dow: "Sun", title: "To Kyoto + Nintendo Museum", city: "Kyoto",
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
        t: "08:30", title: "Nozomi to Kyoto (seat E)", ask: [{"jp": "富士山はどっち側に見えますか？", "ro": "Fujisan wa dotchi-gawa ni miemasu ka?", "en": "Which side can I see Mt Fuji from?", "hear": "side"}], say: ["seki"], pic: "Mt Fuji from shinkansen window", rx: "classic", place: "Kyoto Station",
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
        only: "a", t: "15:30", title: "Back → taxi to Kiyomizu-dera", ask: [{"jp": "清水寺までお願いします", "ro": "Kiyomizu-dera made onegai shimasu", "en": "To Kiyomizu-dera, please (taxi)", "hear": "none"}], say: ["taxi"], place: "Kiyomizu-dera",
        ride: [{"ln": "KB", "from": "B10", "to": "B01", "dir": "京都方面 (toward Kyoto)", "type": "Any train that stops at Ogura goes all the way to Kyoto.", "wrong": "Next stop 伊勢田 Iseda = wrong way.", "min": 25, "exit": "Taxi stand on the north (Karasuma) side"}],
        how: [
          "Kintetsu back to Kyoto Station.",
          "Taxi from the north (Karasuma) side to Kiyomizu-dera (~15 min, ~¥1,800). It's open until 6 PM.",
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
          "Walk east to Shijō-Kawaramachi: both are inside Kyoto Takashimaya S.C. (T8 building).",
          "Then taxi or walk ~25 min east to Kiyomizu-dera.",
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
          "Plan A people: Nintendo KYOTO + Pokémon Center Kyoto are 10 min west at Shijō-Kawaramachi (check closing time).",
          "Cross the Kamo River to Pontocho alley for dinner.",
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
        t: "21:30", title: "Back to the hotel", ask: [{"jp": "京都駅までお願いします", "ro": "Kyōto-eki made onegai shimasu", "en": "To Kyoto Station, please (taxi)", "hear": "none"}], ll: [34.987, 135.7593], say: ["taxi"], pic: "Kyoto Station staircase night photo", rx: "neon", place: "Hotel Hokke Club Kyoto",
        ride: [{"ln": "KR", "from": "K09", "to": "K11", "dir": "竹田方面 (toward Takeda)", "type": "Every train.", "wrong": "Next stop 烏丸御池 Karasuma-oike (K08) = wrong way.", "min": 5, "exit": "Karasuma Central Gate → hotel across the bus terminal"}],
        how: [
          "Taxi (~¥1,500) or walk ~10 min west to Shijō Station → Karasuma subway 2 stops to Kyoto.",
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
    id: "d8", date: "2026-11-02", prep: ["📦 PACK THE SUITCASE FOR THE FLIGHT — it ships to Narita at 8:15 AM (Yamato needs 2 days)", "Waybill: Narita Airport Terminal 1, flight UA868 on Thu Nov 5, pick up at the Yamato counter", "Keep OUT of the suitcase: 2 nights of clothes, a warm layer for the Fuji sunrise, passport, meds, chargers", "Anything you'll claim a tax refund on goes in your backpack, not the shipped suitcase", "SmartEX: Shin-Osaka ⇄ Hiroshima tickets (~9 AM out, ~6 PM back)", "Check tomorrow's Miyajima tide times", "Alarm ~7:30 AM"], rain: "Fushimi Inari in light rain = moody, empty gate photos (careful on wet steps). Osaka's Shinsaibashi-suji shopping street is fully covered, and Dotonbori is a short dash from it.", home: {"after": "23:00", "note": "Your hotel is ~5 min from Doyama-cho — walk home."}, safe: {"tagline": "Dawn torii, real matcha, Pokémon Café Osaka, and Dotonbori's neon by night."}, dow: "Mon", title: "Fushimi Inari + Uji → Osaka", city: "Kyoto → Osaka",
    theme: "torii", emoji: "🦊", deco: ["⛩️", "🦊", "🍵", "🐙", "🌆", "⚡"],
    kicker: "Day 8 · Thousand gates to neon canals",
    tagline: "Dawn torii, real matcha, Pokémon Café Osaka, and a holiday-eve night in Doyama-cho.",
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
        snack: "On the way out: kitsune udon or inari sushi (fried tofu — the fox spirits' favorite) at the shops by the gate.",
      },
      {
        t: "08:30", title: "Uji: Byōdō-in + matcha", ask: [{"jp": "平等院はどっちですか？", "ro": "Byōdōin wa dotchi desu ka?", "en": "Which way to Byōdō-in?", "hear": "dir"}], ll: [34.8892, 135.8077], say: ["osusume", "hitotsu"], pic: "Byodoin Phoenix Hall reflection photo", rx: "classic", place: "Byodo-in, Uji",
        ride: [{"ln": "JD", "from": "D03", "to": "D09", "dir": "奈良・宇治方面 (toward Nara / Uji)", "type": "普通 Local and みやこ路快速 Miyakoji Rapid stop at Uji.", "wrong": "Next stop 東福寺 Tōfukuji (D02) = wrong way.", "min": 20, "exit": "Walk ~10 min to Byōdō-in"}],
        how: [
          "JR Nara line from Inari to Uji (~20 min).",
          "Walk ~10 min to Byōdō-in (opens 8:30).",
        ],
        photo: "The Phoenix Hall mirrored in its pond — it's the temple on the ¥10 coin. Hold the coin up next to it for the cute comparison shot.",
        snack: "Early lunch at Nakamura Tōkichi's Byōdō-in branch: matcha soba and a matcha parfait. Uji is Japan's matcha capital.",
        tip: "Rather have the bamboo-grove photo? Swap Uji for Arashiyama (via Kyoto, ~35 min).",
      },
      {
        t: "12:30", title: "Uji → Kyoto → Osaka", ask: [{"jp": "大阪行きの新快速は何番線ですか？", "ro": "Ōsaka-iki no shinkaisoku wa nanbansen desu ka?", "en": "Which platform is the Special Rapid to Osaka?", "hear": "bansen"}], ll: [34.7025, 135.4959], say: ["nanban", "norikae"], place: "Osaka Station",
        ride: [{"ln": "JD", "from": "D09", "to": "D01", "dir": "京都方面 (toward Kyoto)", "type": "Any train.", "wrong": "Next stop 新田 Shinden = wrong way.", "min": 20, "exit": "Grab your backpack at the hotel, then back to JR Kyoto"}, {"ln": "JA", "from": "A31", "to": "A47", "dir": "大阪・神戸・姫路方面 (westbound) — look for 新快速 Special Rapid", "type": "Special Rapid only stops at these 4 stations. Local and Rapid also work, just slower.", "wrong": "Next stop 山科 Yamashina = wrong way (eastbound).", "min": 30, "exit": "Midosuji South Exit → walk ~8 min to the hotel"}],
        how: [
          "JR Nara line back to Kyoto; grab your backpack at the hotel.",
          "JR Special Rapid (新快速) from Kyoto to Osaka (~30 min).",
        ],
        tip: "Osaka switch: stand on the RIGHT side of escalators here (the opposite of Tokyo).",
      },
      {
        t: "14:00", title: "Drop your bag in Umeda", quest: "💥 MHA × Umeda Sky Building (stickers, stamp rally, photo panels) + the MHA café under HEP FIVE's Ferris wheel. 🍄 Nintendo OSAKA is on Daimaru Umeda 13F.", ask: [{"jp": "私のスーツケースは届いていますか？", "ro": "Watashi no sūtsukēsu wa todoite imasu ka?", "en": "Has my suitcase arrived?", "hear": "yesno"}], ll: [34.7022, 135.5018], say: ["azukeru", "checkin"], pic: "HEP FIVE ferris wheel night", rx: "neon", place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        how: [
          "From JR Osaka, Midosuji South Exit, walk ~8 min to the hotel.",
          "Your suitcase should be waiting. Check-in is from 3 PM.",
          "Nap before the long night — or see the Umeda Sky Building.",
        ],
        photo: "HEP FIVE's red Ferris wheel on the mall roof, shot from the street below (better after dark).",
      },
      {
        t: "17:00", title: "Pokémon Center Osaka DX", quest: "⭐ Kirby Café Osaka is also in Shinsaibashi — check its booking site for a cancellation.", ask: [{"jp": "ポケモンカフェは何階ですか？", "ro": "Pokemon Kafe wa nankai desu ka?", "en": "What floor is the Pokémon Café?", "hear": "kai"}], ll: [34.6731, 135.5012], say: ["yoyaku", "oishii"], pic: "Pokemon Cafe Osaka food photo", rx: "reala", place: "Daimaru Shinsaibashi",
        ride: [{"ln": "OM", "from": "M16", "to": "M19", "dir": "なかもず・天王寺方面 (toward Nakamozu / Tennōji)", "type": "Every train.", "wrong": "Next stop 中津 Nakatsu (M15) = wrong way.", "min": 6, "exit": "Daimaru is connected to the station"}],
        how: [
          "Midosuji line (red) from Umeda to Shinsaibashi (~6 min). Daimaru is connected to the station.",
          "Pokémon Center Osaka DX and the café are on 9F.",
          "Check in at Pokémon Café Osaka by 5:50 PM for your 6:00 table (reservation in your email).",
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
        snack: "Takoyaki at Kukuru or Wanaka (blow on it — the inside is lava). Kushikatsu rule: never double-dip in the shared sauce.",
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
          "Tomorrow your suitcase ships at 8:15 AM. Pack it before you go out.",
        ],
        spicy: "Mostly local guys. Osaka guys are chattier than Tokyo guys, so a smile and “はじめまして” go a long way.",
      },
    ],
  },

  /* ---------------- DAY 9 ---------------- */
  {
    id: "d9", date: "2026-11-03", prep: ["Fuji hotel booked? Add it in Trip → Hotels (edit Fuji hotel)", "Tickets: Hikari (NOT Nozomi) Shin-Osaka → Mishima ~10:30, seat E + the Mishima → Kawaguchiko bus QR", "Check the Kawaguchiko live cam and forecast — flip the cloudy-Fuji plan only if you want to", "Warm layer at the top of the backpack", "Check out by ~9:30 AM"], rain: "The Miyajima ferry runs in rain, and the torii looks dramatic in mist. If it pours: spend longer indoors at the Hiroshima Peace Memorial Museum and Okonomimura.", home: {"after": "19:30", "note": "Check the last shinkansen from Hiroshima back to Shin-Osaka in SmartEX and don't cut it close — it's the only way home tonight."}, dow: "Tue", title: "Hiroshima + Miyajima", city: "Hiroshima",
    theme: "sea", emoji: "🦌", deco: ["🦌", "🌊", "⛩️", "🍁", "🕊️", "🦪"],
    kicker: "Day 9 · Culture Day holiday",
    tagline: "A floating torii, wild deer, grilled oysters, and a quiet hour of remembrance at the Peace Park.",
    sleep: "osaka", wx: { lat: 34.296, lon: 132.32 },
    phrases: ["takkyubin", "konokippu", "doko", "oishii", "arigatou"],
    steps: [
      {
        t: "08:15", title: "Ship your suitcase to Narita", ask: [{"jp": "成田空港の第1ターミナルに木曜日までに届きますか？", "ro": "Narita Kūkō no dai-ichi tāminaru ni mokuyōbi made ni todokimasu ka?", "en": "Will it reach Narita Terminal 1 by Thursday?", "hear": "deliver"}], say: ["takkyubin"], place: "",
        how: [
          "At the front desk: ship your suitcase to Narita Airport by Yamato. Give them flight UA868, Thu Nov 5, Terminal 1 (~¥3,300).",
          "Keep a backpack with 2 nights of clothes + a warm layer for the Fuji sunrise.",
        ],
        tip: "Yamato needs it 2 days before your flight, so this has to happen this morning.",
      },
      {
        t: "08:30", title: "Osaka → Hiroshima", ask: [{"jp": "広島行きの新幹線は何番線ですか？", "ro": "Hiroshima-iki no shinkansen wa nanbansen desu ka?", "en": "Which platform for the shinkansen to Hiroshima?", "hear": "bansen"}], say: ["nanban", "seki"], place: "Hiroshima Station",
        ride: [{"ln": "JA", "from": "A47", "to": "A46", "dir": "京都方面 (toward Kyoto) — JR Kyoto Line platforms", "type": "Any train stops at Shin-Osaka.", "wrong": "Next stop 塚本 Tsukamoto = wrong way (JR Kobe Line).", "min": 4, "exit": "Follow blue 新幹線 signs"}, {"ln": "SYS", "from": "SHO", "to": "HIJ", "dir": "博多・広島方面 (westbound)", "type": "Every Nozomi stops at Hiroshima.", "min": 85, "exit": "Follow signs to the JR Sanyo Line for Miyajima"}],
        how: [
          "JR Kyoto line from Osaka 1 stop to Shin-Osaka (~4 min).",
          "~9:00 AM Nozomi to Hiroshima (~1 h 25) — tap the Suica linked to SmartEX.",
        ],
        snack: "Shin-Osaka ekiben: 551 Hōrai pork buns (Osaka's famous butaman) for the ride.",
      },
      {
        t: "10:45", title: "To Miyajima", ask: [{"jp": "JRの宮島行きフェリーはどこですか？", "ro": "JR no Miyajima-iki ferī wa doko desu ka?", "en": "Where's the JR ferry to Miyajima?", "hear": "dir"}], ll: [34.3112, 132.3036], say: ["konokippu"], pic: "Miyajima ferry torii view", rx: "velvia", place: "Miyajimaguchi Ferry Terminal",
        ride: [{"ln": "SL", "from": "HIR", "to": "MYJ", "dir": "岩国・大竹・南岩国方面 (westbound)", "type": "Local (普通) stops everywhere; Rapid also stops at Miyajimaguchi.", "wrong": "白市 Shiraichi / 西条 Saijō / 三原 Mihara on the sign, or next stop 天神川 Tenjingawa = wrong way.", "min": 27, "exit": "Walk 3 min to the JR ferry pier"}],
        how: [
          "JR Sanyo line (local toward Iwakuni) from Hiroshima to Miyajimaguchi (~30 min).",
          "Walk 3 min to the JR ferry pier — Suica works. ~10 min crossing.",
          "A ¥100 Miyajima visitor tax is collected with your ferry fare.",
        ],
        photo: "Stand on deck: the JR ferry swings close to the floating torii on the way over.",
      },
      {
        t: "11:30", title: "Itsukushima Shrine + the deer", ask: [{"jp": "今日の満潮は何時ですか？", "ro": "Kyō no manchō wa nanji desu ka?", "en": "What time is high tide today?", "hear": "time"}], ll: [34.296, 132.3198], say: ["photoplease", "hitotsu", "oishii"], pic: "Miyajima torii men photo", rx: "velvia", place: "Itsukushima Shrine",
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
        t: "15:00", title: "Peace Memorial Park", ask: [{"jp": "原爆ドームまでお願いします", "ro": "Genbaku Dōmu made onegai shimasu", "en": "To the Atomic Bomb Dome, please (taxi)", "hear": "none"}], ll: [34.3955, 132.4536], say: ["taxi"], pic: "Atomic Bomb Dome river photo black and white", rx: "acros", place: "Atomic Bomb Dome, Hiroshima",
        ride: [{"ln": "SL", "from": "MYJ", "to": "HIR", "dir": "広島・白市・西条方面 (toward Hiroshima)", "type": "Any train.", "wrong": "Next stop 前空 Maezora = wrong way.", "min": 27, "exit": "Taxi or tram to Genbaku-Dōmu-mae"}],
        how: [
          "Ferry back → JR to Hiroshima Station (~30 min).",
          "Taxi (~10 min) or streetcar line 2 or 6 to Genbaku-Dōmu-mae. Have coins ready in case your IC card isn't accepted.",
          "Walk the park to the Cenotaph and the Children's Peace Monument.",
        ],
        photo: "A memorial: photograph the dome across the Motoyasu River. No smiling or playful poses here.",
        tip: "Keep your voice low. Many visitors leave paper cranes at the Children's Peace Monument.",
      },
      {
        t: "17:00", title: "Hiroshima okonomiyaki", ask: [{"jp": "一人ですが、座れますか？", "ro": "Hitori desu ga, suwaremasu ka?", "en": "Just me — can I sit?", "hear": "full"}], ll: [34.392, 132.461], say: ["hitori", "osusume", "gochisousama"], pic: "Hiroshima okonomiyaki griddle", rx: "reala", place: "Okonomimura, Hiroshima",
        how: [
          "Walk ~15 min to Okonomimura near Hondōri: floors of tiny griddle counters.",
          "Sit at the counter and watch them build it.",
        ],
        snack: "Hiroshima-style okonomiyaki is layered with noodles (soba or udon) — order “soba-iri” with an egg on top. Eat it straight off the griddle with the little spatula.",
      },
      {
        t: "18:00", title: "Shinkansen back to Osaka", place: "APA Hotel & Resort Osaka Umeda Eki Tower",
        ride: [{"ln": "SYS", "from": "HIJ", "to": "SHO", "dir": "新大阪・東京方面 (eastbound)", "type": "Every Nozomi stops at Shin-Osaka.", "min": 85, "exit": "Follow JR Kyoto Line signs"}, {"ln": "JA", "from": "A46", "to": "A47", "dir": "大阪・神戸方面 (toward Osaka)", "type": "Any train.", "wrong": "Next stop 東淀川 Higashi-Yodogawa = wrong way.", "min": 4, "exit": "Midosuji South Exit → hotel"}],
        how: [
          "Tram or taxi back to Hiroshima Station.",
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
        ],
        photo: "Shinsekai is the best direct-flash street of the trip: giant food signs, retro neon, Tsūtenkaku behind you.",
        snack: "Shinsekai kushikatsu (fried skewers) — again: no double-dipping.",
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
    id: "d10", date: "2026-11-04", prep: ["Alarm 5:30 AM for the sunrise; warm layer by the door", "Save the 9:30 AM Kawaguchiko → Busta Shinjuku bus QR — don't take a later one", "Passport + tax-refund receipts + those goods together in your backpack", "Online check-in for UA868 (opens 24 hours before the 6 PM flight)", "Mobile Passport Control app ready for Chicago", "Spend leftover coins — they can't be exchanged back"], rain: "Clouds hide Fuji? Check the Kawaguchiko live cam the night before. If the forecast is bad, consider Hakone instead (Hikari to Odawara) — great hot springs, less reliable Fuji views. Even cloudy, Kawaguchiko's autumn leaves and onsen are worth it.", cloudy: true, home: {"after": "18:30", "note": "Kawaguchiko's local buses stop early in the evening — plan a taxi back from dinner if your hotel isn't walkable."}, dow: "Wed", title: "Osaka → Mt Fuji", city: "Mt Fuji",
    theme: "fuji", emoji: "🗻", deco: ["🗻", "🍁", "♨️", "🌅", "🚄", "🍂"],
    kicker: "Day 10 · The mountain",
    tagline: "Bullet train, lake views, autumn leaves and a hot spring. Your one Fuji sunset — make it count.",
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
        t: "10:30", title: "Hikari to Mishima (seat E)", ask: [{"jp": "三島に止まるひかりは何番線ですか？", "ro": "Mishima ni tomaru Hikari wa nanbansen desu ka?", "en": "Which platform for the Hikari that stops at Mishima?", "hear": "bansen"}], ll: [35.1264, 138.911], say: ["seki", "nanban"], pic: "Mt Fuji from shinkansen Mishima", rx: "classic", place: "Mishima Station",
        ride: [{"ln": "JA", "from": "A47", "to": "A46", "dir": "京都方面 (toward Kyoto)", "type": "Any train.", "wrong": "Next stop 塚本 Tsukamoto = wrong way.", "min": 4, "exit": "Follow blue 新幹線 signs"}, {"ln": "TKH", "from": "SHO", "to": "MSM", "dir": "東京方面 (eastbound) — must be ひかり HIKARI", "type": "Hikari stop patterns vary — these are the big ones. Check 三島 is on your train's list on the platform board.", "wrong": "のぞみ Nozomi does NOT stop at Mishima.", "min": 120, "exit": "South Exit (南口) → Fujikyu bus stop"}],
        how: [
          "Take a HIKARI (ひかり) — the Nozomi doesn't stop at Mishima.",
          "Seat E again for Fuji. ~2 h.",
        ],
        photo: "Fuji gets huge on the approach to Mishima — burst through the window.",
        snack: "Second ekiben of the trip. Go for a regional one with a pretty box.",
      },
      {
        t: "12:45", title: "Fujikyu bus to Kawaguchiko", ask: [{"jp": "河口湖行きのバス乗り場はどこですか？", "ro": "Kawaguchiko-iki no basu noriba wa doko desu ka?", "en": "Where's the bus stop for Kawaguchiko?", "hear": "dir"}, {"jp": "このバスは河口湖駅に行きますか？", "ro": "Kono basu wa Kawaguchiko-eki ni ikimasu ka?", "en": "Does this bus go to Kawaguchiko Station?", "hear": "yesno"}], ll: [35.4986, 138.7689], say: ["konokippu"], pic: "Mt Fuji bus window view", place: "Kawaguchiko Station",
        how: [
          "Mishima Station South Exit → bus stop for the Fujikyu bus to Kawaguchiko.",
          "Show your highway-buses.jp QR (or pay on board if seats remain). ~1 h 30.",
        ],
        photo: "Sit on the right side heading north — Fuji fills the window around Lake Yamanaka.",
      },
      {
        t: "15:00", title: "Check in", ask: [{"jp": "温泉は何時まで入れますか？", "ro": "Onsen wa nanji made hairemasu ka?", "en": "Until what time is the hot spring open?", "hear": "time"}], say: ["checkin", "onsen"], place: "",
        how: [
          "Check in at your Fuji hotel (add it in the Hotels tab once booked).",
          "Drop the bag and grab your warm layer.",
        ],
      },
      {
        t: "16:00", title: "Sunset: Oishi Park or the ropeway", ask: [{"jp": "大石公園に行くバスはどれですか？", "ro": "Ōishi Kōen ni iku basu wa dore desu ka?", "en": "Which bus goes to Oishi Park?", "hear": "dir"}], ll: [35.5245, 138.7462], say: ["photoplease", "kirei"], pic: "Oishi Park Mt Fuji men photo", rx: "velvia", place: "Oishi Park, Fujikawaguchiko",
        how: [
          "Oishi Park on the north shore (Kawaguchiko sightseeing bus, red line) — Fuji over the lake.",
          "Or the Kachi Kachi Ropeway near the station for Fuji + the lake from above.",
          "Sunset ~4:40 PM. Early-November leaves are peak color.",
        ],
        photo: "Sit on the lakeside wall with your back to the camera, facing Fuji. Use 2–3x zoom so the mountain looks massive. A bright red/orange/yellow layer pops against it.",
        tip: "If the autumn leaves festival is on, the Momiji Corridor is lit up after dark — magical and free.",
      },
      {
        t: "18:00", title: "Hōtō dinner + onsen night", ll: [35.5012, 138.7715], say: ["hitori", "onsen", "gochisousama"], pic: "hoto noodles Kawaguchiko", place: "Hoto Fudo Kawaguchiko",
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
    id: "d11", date: "2026-11-05", rain: "Cloudy sunrise? Skip the lakeshore, sleep an extra hour, and still try Chūreitō around 7 AM — mornings are Fuji's clearest window. Don't change the 9:30 bus.", cloudy: true, dow: "Thu", title: "Fuji sunrise → fly home", city: "Fuji → Narita",
    theme: "sunrise", emoji: "🌅", deco: ["🌅", "🗻", "✈️", "💖", "🎒", "🏯"],
    kicker: "Day 11 · Sayonara (for now)",
    tagline: "Sunrise on Fuji, a pagoda, and one last konbini run. You did Japan, birthday boy.",
    sleep: null, wx: { lat: 35.51, lon: 138.76 },
    phrases: ["arigatou", "gochisousama", "doko", "card", "mata"],
    steps: [
      {
        t: "05:45", title: "Lakeshore sunrise", ll: [35.5245, 138.7462], say: ["ohayou", "kirei"], pic: "Kawaguchiko sunrise Fuji reflection", rx: "velvia", place: "Oishi Park, Fujikawaguchiko",
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
        t: "09:30", title: "Highway bus to Shinjuku", ask: [{"jp": "新宿行きのバス乗り場はここですか？", "ro": "Shinjuku-iki no basu noriba wa koko desu ka?", "en": "Is this the stop for the bus to Shinjuku?", "hear": "yesno"}], ll: [35.4986, 138.7689], say: ["konokippu"], place: "Busta Shinjuku",
        ride: [{"ln": "FJ", "from": "SYD", "to": "KWG", "dir": "河口湖方面 (toward Kawaguchiko)", "type": "Any train.", "wrong": "Next stop isn't 月江寺 Gekkōji = wrong way.", "min": 15, "exit": "Bus stops are outside Kawaguchiko Station"}],
        how: [
          "Fujikyu train back to Kawaguchiko Station in time for the 9:30 bus — don't take a later one.",
          "Show your highway-buses.jp QR. ~1 h 45 to Busta Shinjuku.",
        ],
        snack: "Konbini breakfast for the bus. Grab regional KitKats or Fuji-shaped sweets as gifts.",
      },
      {
        t: "11:45", title: "Narita Express to the airport", ask: [{"jp": "成田エクスプレスの切符はどこで買えますか？", "ro": "Narita Ekusupuresu no kippu wa doko de kaemasu ka?", "en": "Where can I buy a Narita Express ticket?", "hear": "dir"}], ll: [35.6896, 139.7006], say: ["oshiete", "seki"], place: "Narita Airport Terminal 1",
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
        ],
      },
      {
        t: "18:00", title: "Fly home 💖", say: ["mata", "arigatou"], place: "",
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
    use: ["Shinjuku and Shibuya in daylight", "Skytree from the river", "Byōdō-in", "Fuji from the shinkansen window", "Anything architectural"],
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
    use: ["Birthday portrait at Mediterranean Harbor", "Pokémon Café plates", "Mirror fit checks", "teamLab", "Okonomiyaki on the griddle"],
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
    tips: "Many shops use a ticket machine by the door: pay, press the button, hand over the ticket. Slurping is normal.", where: "Ichiran Shinjuku (Day 2), Kyoto Ramen Kōji (Day 7)" },
  { id: "tsukemen", emoji: "🥢", en: "Tsukemen (dipping ramen)", jp: "つけ麺", ro: "tsukemen", wiki: "つけ麺", enwiki: "Tsukemen",
    what: "Thick cold noodles you dip into a concentrated hot broth.",
    order: { jp: "つけ麺の大盛りください", ro: "Tsukemen no ōmori kudasai", en: "A large tsukemen, please" },
    tips: "When you finish, ask for “sūpu wari” — they'll thin the leftover broth with soup so you can drink it.", where: "Fūunji, Shinjuku (Day 3)" },
  { id: "sushi", emoji: "🍣", en: "Sushi", jp: "寿司", ro: "sushi", wiki: "寿司", enwiki: "Sushi",
    what: "Vinegared rice with raw fish (nigiri) or rolled (maki).",
    order: { jp: "おすすめを二貫ください", ro: "Osusume o nikan kudasai", en: "Two pieces of whatever you recommend" },
    tips: "Dip the fish side, not the rice, in soy sauce. Eat nigiri in one bite. “Sabi-nuki” = no wasabi.", where: "Uobei Shibuya conveyor sushi (Day 5)" },
  { id: "onigiri", emoji: "🍙", en: "Onigiri (rice ball)", jp: "おにぎり", ro: "onigiri", wiki: "おにぎり", enwiki: "Onigiri",
    what: "Rice triangle wrapped in seaweed with a filling. The konbini breakfast of champions.",
    order: { jp: "ツナマヨと鮭をください", ro: "Tsuna mayo to shake o kudasai", en: "Tuna-mayo and salmon, please" },
    tips: "Unwrap: pull tab 1 down the middle, then corners 2 and 3. Fillings: tsuna mayo, shake (salmon), ume (sour plum — strong!).", where: "Any konbini, every morning" },
  { id: "yakitori", emoji: "🍢", en: "Yakitori", jp: "焼き鳥", ro: "yakitori", wiki: "焼き鳥", enwiki: "Yakitori",
    what: "Charcoal-grilled chicken skewers: thigh, meatballs, skin, hearts…",
    order: { jp: "ねぎまとつくねを、タレで二本ずつお願いします", ro: "Negima to tsukune o, tare de nihon zutsu onegai shimasu", en: "Two each of chicken-leek and meatball, with sauce" },
    tips: "“Tare” = sweet glaze, “shio” = salt. Order a beer first and a few skewers at a time.", where: "Omoide Yokochō (Day 1)" },
  { id: "takoyaki", emoji: "🐙", en: "Takoyaki", jp: "たこ焼き", ro: "takoyaki", wiki: "たこ焼き", enwiki: "Takoyaki",
    what: "Crispy-gooey batter balls with octopus, topped with sauce, mayo and bonito flakes. Osaka's icon.",
    order: { jp: "たこ焼き八個入りを一つください", ro: "Takoyaki hakko-iri o hitotsu kudasai", en: "One 8-piece takoyaki, please" },
    tips: "Molten inside — bite a hole and let the steam out first. Eat it at the stand's counter.", where: "Dotonbori: Kukuru or Wanaka (Day 8)" },
  { id: "okonomiyaki", emoji: "🥞", en: "Okonomiyaki", jp: "お好み焼き", ro: "okonomiyaki", wiki: "お好み焼き", enwiki: "Okonomiyaki",
    what: "Savory cabbage pancake. Hiroshima style is layered with noodles.",
    order: { jp: "肉玉そば入り、お願いします", ro: "Nikutama soba-iri, onegai shimasu", en: "Pork-and-egg with soba noodles, please" },
    tips: "Eat it straight off the griddle with the little spatula (hera).", where: "Okonomimura, Hiroshima (Day 9)" },
  { id: "gyoza", emoji: "🥟", en: "Gyōza", jp: "餃子", ro: "gyōza", wiki: "餃子", enwiki: "Jiaozi",
    what: "Pan-fried pork dumplings with crispy bottoms.",
    order: { jp: "餃子一人前と生ビールをください", ro: "Gyōza ichinin-mae to nama bīru o kudasai", en: "One serving of gyoza and a draft beer" },
    tips: "Mix soy sauce, vinegar and chili oil (rāyu) in the little dish to dip.", where: "Ramen shops and izakaya everywhere" },
  { id: "tonkatsu", emoji: "🐖", en: "Tonkatsu", jp: "とんかつ", ro: "tonkatsu", wiki: "とんかつ", enwiki: "Tonkatsu",
    what: "Panko-crusted fried pork cutlet with shredded cabbage, rice and miso soup.",
    order: { jp: "ロースかつ定食をください", ro: "Rōsu katsu teishoku o kudasai", en: "The pork-loin cutlet set meal, please" },
    tips: "“Teishoku” = set meal. Rice, cabbage and miso refills are often free — ask “okawari” (a refill).", where: "Department-store food floors" },
  { id: "karaage", emoji: "🍗", en: "Karaage / Famichiki", jp: "唐揚げ", ro: "karaage", wiki: "唐揚げ", enwiki: "Karaage",
    what: "Juicy Japanese fried chicken. Konbini versions are legendary.",
    order: { jp: "ファミチキ一つください", ro: "Famichiki hitotsu kudasai", en: "One Famichiki, please (FamilyMart)" },
    tips: "Konbini hot snacks sit by the register — just point. Lawson's version is “Karaage-kun.”", where: "Late-night konbini runs" },
  { id: "udon", emoji: "🍲", en: "Udon", jp: "うどん", ro: "udon", wiki: "うどん", enwiki: "Udon",
    what: "Thick, chewy wheat noodles in a light dashi broth.",
    order: { jp: "きつねうどんをください", ro: "Kitsune udon o kudasai", en: "Kitsune udon (with sweet fried tofu), please" },
    tips: "Kitsune (fox) udon is extra fitting at Fushimi Inari — fried tofu is the fox spirits' favorite.", where: "Fushimi Inari (Day 8)" },
  { id: "soba", emoji: "🥢", en: "Soba", jp: "蕎麦", ro: "soba", wiki: "蕎麦", enwiki: "Soba",
    what: "Buckwheat noodles, served cold with dipping sauce (zaru) or hot in broth.",
    order: { jp: "ざるそばをください", ro: "Zaru soba o kudasai", en: "Cold soba with dipping sauce, please" },
    tips: "At the end, pour the cooking water (sobayu) into your leftover sauce and drink it.", where: "Matcha soba in Uji (Day 8)" },
  { id: "tempura", emoji: "🍤", en: "Tempura", jp: "天ぷら", ro: "tenpura", wiki: "天ぷら", enwiki: "Tempura",
    what: "Light, crispy battered shrimp and vegetables. Tendon = tempura over rice.",
    order: { jp: "天丼をください", ro: "Tendon o kudasai", en: "A tempura rice bowl, please" },
    tips: "Dip in tentsuyu sauce with grated daikon, or sprinkle salt.", where: "Asakusa (Day 5)" },
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
    tips: "Asakusa Kagetsudō's giant version is the move. Eat it beside the shop.", where: "Asakusa (Day 5)" },
  { id: "taiyaki", emoji: "🐟", en: "Taiyaki", jp: "たい焼き", ro: "taiyaki", wiki: "たい焼き", enwiki: "Taiyaki",
    what: "Fish-shaped waffle filled with sweet red bean, custard or chocolate.",
    order: { jp: "カスタードを一つください", ro: "Kasutādo o hitotsu kudasai", en: "One custard, please" },
    tips: "“Anko” = red bean (traditional). Eat it hot.", where: "Street stalls in Asakusa and Kyoto" },
  { id: "matcha", emoji: "🍵", en: "Matcha", jp: "抹茶", ro: "matcha", wiki: "抹茶", enwiki: "Matcha",
    what: "Stone-ground green tea: as tea, lattes, soft-serve, parfaits, soba…",
    order: { jp: "抹茶ソフトを一つください", ro: "Matcha sofuto o hitotsu kudasai", en: "One matcha soft-serve, please" },
    tips: "Uji is Japan's matcha capital. A matcha parfait is basically required.", where: "Uji (Day 8), Ninenzaka (Day 7)" },
  { id: "daifuku", emoji: "🍓", en: "Ichigo daifuku", jp: "いちご大福", ro: "ichigo daifuku", wiki: "いちご大福", enwiki: "Daifuku",
    what: "Soft mochi wrapped around red bean and a whole strawberry.",
    order: { jp: "いちご大福を一つください", ro: "Ichigo daifuku o hitotsu kudasai", en: "One strawberry daifuku, please" },
    tips: "Cut it in half for the photo — the strawberry cross-section is the shot.", where: "Kuromon Market (Day 10)" },
  { id: "oden", emoji: "🍢", en: "Oden", jp: "おでん", ro: "oden", wiki: "おでん", enwiki: "Oden",
    what: "Egg, daikon, fish cakes and tofu simmered in dashi. Konbini counters have it in cold months.",
    order: { jp: "大根と卵をください", ro: "Daikon to tamago o kudasai", en: "Daikon and egg, please" },
    tips: "Point at what you want in the pot; ask for “karashi” (mustard).", where: "Konbini counter, late night" },
  { id: "kushikatsu", emoji: "🍡", en: "Kushikatsu", jp: "串カツ", ro: "kushikatsu", wiki: "串カツ", enwiki: "Kushikatsu",
    what: "Deep-fried skewers of meat, veg and cheese. Osaka's drinking food.",
    order: { jp: "おまかせで五本お願いします", ro: "Omakase de gohon onegai shimasu", en: "Five chef's-choice skewers, please" },
    tips: "NO double-dipping in the shared sauce (二度づけ禁止). Use a cabbage leaf to scoop more sauce.", where: "Shinsekai (Day 9), Dotonbori (Day 8)" },
  { id: "momiji", emoji: "🍁", en: "Momiji manjū", jp: "もみじ饅頭", ro: "momiji manjū", wiki: "もみじ饅頭", enwiki: "Momiji manjū",
    what: "Maple-leaf sponge cakes filled with red bean or custard. Miyajima's sweet.",
    order: { jp: "揚げもみじを一つください", ro: "Age-momiji o hitotsu kudasai", en: "One deep-fried momiji, please" },
    tips: "The fried version (age-momiji) is only on Miyajima — get it hot.", where: "Miyajima (Day 9)" },
  { id: "kaki", emoji: "🦪", en: "Grilled oysters", jp: "焼き牡蠣", ro: "yaki-gaki", wiki: "カキ (貝)", enwiki: "Oyster",
    what: "Hiroshima Bay oysters grilled in the shell with a squeeze of lemon.",
    order: { jp: "焼き牡蠣を二つください", ro: "Yaki-gaki o futatsu kudasai", en: "Two grilled oysters, please" },
    tips: "Stalls on Miyajima's Omotesandō street grill them to order.", where: "Miyajima (Day 9)" },
  { id: "hoto", emoji: "🎃", en: "Hōtō", jp: "ほうとう", ro: "hōtō", wiki: "ほうとう", enwiki: "Hōtō",
    what: "Fat flat noodles stewed in miso with pumpkin and veg, served in an iron pot.",
    order: { jp: "かぼちゃほうとうを一つください", ro: "Kabocha hōtō o hitotsu kudasai", en: "One pumpkin hōtō, please" },
    tips: "Perfect after a cold Fuji sunset. Portions are big.", where: "Hōtō Fudō, Kawaguchiko (Day 10)" },
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
    tips: "In Japan “sake” means alcohol in general; say “nihonshu” for rice wine.", where: "Pontochō (Day 7), izakaya" },
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
    ["🌀", "teamLab mirror rooms", "Infinite reflections — white or light outfit.", "d3"],
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
    { t: "Same café in Tokyo", where: "BOX cafe&space Cue Plaza Harajuku", when: "Oct 16 – Dec 20, 2026", day: "d5",
      what: "Fits the Omotesando stop on Friday afternoon.", place: "Cue Plaza Harajuku", link: "https://animeanime.jp/article/2026/10/03/103463.html" },
  ]},
  { fandom: "Attack on Titan", emoji: "⚔️", items: [
    { t: "Guren no Yumiya — SCREEN X / 4DX screening", where: "TOHO Cinemas Ikebukuro and other premium screens", when: "From Oct 23, 2026 · first-week gift Oct 23–29", day: "d3",
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
    { t: "Mandarake (secondhand manga + doujinshi)", where: "Nakano Broadway (1 stop from Shinjuku) · Shinsaibashi, Osaka", when: "Daytime", day: "d8",
      what: "Japan's big secondhand manga chain. Ask for the gay manga section with the phrase “ゲイ漫画のコーナーはありますか？” — not every branch has one.", place: "Mandarake Nakano", link: "https://www.timeout.com/tokyo/shopping/nakano-broadway" },
  ]},
  { fandom: "Gay saunas", emoji: "🧖", spicy: true, items: [
    { t: "24 Kaikan Shinjuku", where: "2-13-1 Shinjuku, 2F (Ni-chome) · ~5 min from your hotel", when: "24/7 · ~¥2,500–3,900, more after 9 PM", day: "d1",
      what: "Tokyo's best-known gay sauna and the most foreigner-friendly: English signs, staff with basic English. Sauna, steam, jacuzzi, cold plunge, rooftop deck, cabins. Planned on nights 1–6.",
      place: "24 Kaikan Shinjuku, 2-13-1 Shinjuku, Tokyo", link: "https://www.travelgay.com/venue/24-kaikan-shinjuku" },
    { t: "24 Kaikan Ueno + Asakusa", where: "Ueno (Showa-dori) · Asakusa (2-29-16)", when: "~¥2,400 before 9 PM, ~¥2,800 after", day: "d5",
      what: "Sister branches. Asakusa is a short walk from Senso-ji on Friday morning; Ueno has English signs too.", place: "24 Kaikan Ueno", link: "https://www.utopia-asia.com/tokysaun.htm" },
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
  { title: "teamLab Planets", date: "2026-10-28", when: "Wed Oct 28 · morning slot" },
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
  { item: "Nintendo KYOTO / Pokémon Center Kyoto", where: "Kyoto Takashimaya S.C.", day: "d7" },
  { item: "Uji matcha (powder tin or sweets)", where: "Uji", day: "d8" },
  { item: "Pokémon Center Osaka DX + Café Osaka merch", where: "Daimaru Shinsaibashi 9F", day: "d8" },
  { item: "My Hero Academia collab goods", where: "Umeda Sky Building 39F shop", day: "d8" },
  { item: "Nintendo OSAKA exclusives", where: "Daimaru Umeda 13F", day: "d8" },
  { item: "Momiji manjū gift box", where: "Miyajima", day: "d9" },
  { item: "Fuji-shaped sweets / regional KitKats", where: "Kawaguchiko + Narita", day: "d10" },
  { item: "Konbini snack haul for home", where: "Any konbini", day: "d11" },
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
    ["JE05", "新木場", "Shin-kiba"], ["JE06", "葛西臨海公園", "Kasai-rinkai-kōen"], ["JE07", "舞浜", "Maihama"]] },
  DR: { name: "Disney Resort Line", jp: "ディズニーリゾートライン", color: "#2fa9e0", loop: true, stops: [
    ["RG", "リゾートゲートウェイ", "Resort Gateway"], ["TDL", "東京ディズニーランド・ステーション", "Tokyo Disneyland Station"],
    ["BS", "ベイサイド", "Bayside"], ["TDS", "東京ディズニーシー・ステーション", "Tokyo DisneySea Station"]] },
  G: { name: "Ginza Line", jp: "銀座線", color: "#ff9500", stops: [
    ["G05", "赤坂見附", "Akasaka-mitsuke"], ["G06", "溜池山王", "Tameike-sannō"], ["G07", "虎ノ門", "Toranomon"], ["G08", "新橋", "Shimbashi"], ["G09", "銀座", "Ginza"],
    ["G10", "京橋", "Kyōbashi"], ["G11", "日本橋", "Nihombashi"], ["G12", "三越前", "Mitsukoshimae"], ["G13", "神田", "Kanda"], ["G14", "末広町", "Suehirochō"],
    ["G15", "上野広小路", "Ueno-hirokōji"], ["G16", "上野", "Ueno"], ["G17", "稲荷町", "Inarichō"], ["G18", "田原町", "Tawaramachi"], ["G19", "浅草", "Asakusa"]] },
  Y: { name: "Yurakucho Line", jp: "有楽町線", color: "#c1a470", stops: [
    ["Y18", "有楽町", "Yūrakuchō"], ["Y19", "銀座一丁目", "Ginza-itchōme"], ["Y20", "新富町", "Shintomichō"], ["Y21", "月島", "Tsukishima"], ["Y22", "豊洲", "Toyosu"]] },
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
  KR: { name: "Karasuma Line (Kyoto subway)", jp: "烏丸線", color: "#2a9d4a", stops: [["K09", "四条", "Shijō"], ["K10", "五条", "Gojō"], ["K11", "京都", "Kyoto"]] },
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
};
