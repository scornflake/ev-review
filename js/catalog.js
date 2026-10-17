/* Second owner — figures locked to the October 2026 shortlist. */
const ASSUMPTIONS = {
  kmYear: 12000,
  years: 3,
  homeRate: 0.2364,
  rucPer100: 7.6,
  petrol98: 3.959,
  wrxLPer100: 10,
  wrxTyreSet: 1051,
  wrxTyreLifeKm: 30000,
  priceFloor: 43995,
  priceCeiling: 109995,
};

const CARS = [
  {
    id: "model3",
    slug: "model-3",
    name: "Tesla Model 3",
    variant: "Long Range AWD",
    year: "2024 Highland",
    priceLabel: "$56,999–$59,990",
    priceSort: 58495,
    zero: "4.4 s",
    boot: "594 L + 88 L frunk",
    pace: 3,
    chassis: 2.5,
    defect: 2,
    warranty: 1,
    service: 2,
    fleet: 2,
    battery: 1,
    kwh: 16,
    tyreSet: 1580,
    tyreLifeKm: 25000,
    verdict: "The one to go and drive.",
    overview:
      "A 2024 Highland Long Range is all-wheel drive, about 4.4 seconds to 100 km/h, and it has the largest boot in the sedan group plus a frunk. Trade Me asks on 17 October 2026 sat between $56,999 and $59,990. No Performance from 2023 or 2024 was listed. New Zealand has more of these than any other car on this list, and the things that actually wear out are bushes, tyres and the odd heat pump, not a fault that leaves the car dead. The Highland’s indicator buttons live on the wheel.",
    good: [
      "The deepest local service history of the ten, and Consumer NZ’s 2024 survey put Tesla among the brands owners were glad they bought.",
      "AWD and a 594 L boot. Two people and a weekly shop fit without stepping up to an SUV.",
      "Highland ride and panel fit are a clear step on from the earlier Model 3.",
      "On your Mercury anytime rate the energy is cheap enough that tyres do not eat the saving.",
    ],
    bad: [
      "The indicator stalk is gone. You will notice that at every intersection.",
      "The basic warranty is 4 years or 80,000 km. A 2024 car is already using it. The battery warranty is the long one, typically 8 years or 160,000 km.",
      "One Christchurch ad called the Long Range pack LFP. The long-range car is the larger nickel pack.",
      "The photograph is a Highland Performance. The face is the same generation. The car scored here is the Long Range.",
    ],
    links: [
      { href: "https://www.whichcar.com.au/reviews/car-comparisons/2024-byd-seal-vs-tesla-model-3-vs-hyundai-ioniq-6-comparison", label: "WhichCar — Seal vs Model 3 vs Ioniq 6", kind: "Review" },
      { href: "https://www.trademe.co.nz/c/motors/review/2024-tesla-model-3-rwd-review", label: "NZ Autocar on Trade Me — 2024 Model 3 RWD", kind: "Review" },
      { href: "https://www.reddit.com/r/nzev/comments/1mtfesk/recent_thoughts_on_tesla_model_3/", label: "r/nzev — long-term Model 3 ownership", kind: "Owners" },
      { href: "https://www.trademe.co.nz/a/motors/cars/tesla/model-3", label: "Trade Me — Model 3 listings", kind: "Market" },
      { href: "https://tessories.nz/product/tyre-services/", label: "Tessories — fitted 235/45R18 prices", kind: "Tyres" },
    ],
    photo: "Chanokchon",
    photoPage: "https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Highland_Performance_AWD.jpg",
  },
  {
    id: "mg4",
    slug: "mg4-xpower",
    name: "MG4",
    variant: "XPower",
    year: "2023",
    priceLabel: "$43,995",
    priceSort: 43995,
    zero: "3.8 s",
    boot: "363 L",
    pace: 3.5,
    chassis: 2.5,
    defect: 2,
    warranty: 2,
    service: 1,
    fleet: 1,
    battery: 0,
    kwh: 21,
    tyreSet: 1580,
    tyreLifeKm: 20000,
    verdict: "The hot hatch with the long warranty.",
    overview:
      "One 2023 XPower was on Trade Me, at $43,995 with 28,000 km, in Pukekohe. It has 320 kW, all-wheel drive, and a 3.8-second claim. Cars retailed on or before 31 July 2024 carry MG’s 7-year unlimited-kilometre warranty, which is the safety net on a brand with a shorter record than Tesla. The boot is Golf-sized.",
    good: [
      "The cheapest car in the ten, and still quicker than the WRX in a straight line.",
      "Seven years of warranty left on a 2023 car, if it was retailed before August 2024 and the services were kept.",
      "Tarmac Life and Consumer NZ both came back grinning. It is a hatch, which is the shape you already live with.",
    ],
    bad: [
      "Consumer NZ saw 21 kWh/100 km when they drove it hard over the Remutakas. The weekly bill is thirstier than the Model 3.",
      "The reviewer was told it can be a handful in the wet. They did not get rain.",
      "Infotainment is laggy, and MG dealer quality is uneven. Only one XPower was actually for sale.",
      "363 litres is a supermarket shop, then it gets tight.",
    ],
    links: [
      { href: "https://www.tarmaclife.co.nz/ev-electric-vehicle/power-to-the-people-mg4-xpower-review/", label: "Tarmac Life — MG4 XPower", kind: "Review" },
      { href: "https://www.consumer.org.nz/travel-and-transport/cars/electric-and-hybrid-cars/mg4-xpower-review", label: "Consumer NZ — MG4 XPower", kind: "Review" },
      { href: "https://mgmotor.co.nz/owners/warranty/", label: "MG New Zealand — warranty terms", kind: "Warranty" },
      { href: "https://www.trademe.co.nz/a/motors/cars/mg/mg4", label: "Trade Me — MG4 listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:MG4_EV_XPower_Automesse_Ludwigsburg_2023_1X7A0027.jpg",
  },
  {
    id: "seal",
    slug: "seal-performance",
    name: "BYD Seal",
    variant: "Performance",
    year: "2024",
    priceLabel: "$48,995–$52,995",
    priceSort: 50995,
    zero: "3.8 s",
    boot: "400 L + 53 L frunk",
    pace: 3.5,
    chassis: 1.5,
    defect: 2,
    warranty: 2,
    service: 1,
    fleet: 1,
    battery: 1,
    kwh: 18,
    tyreSet: 2320,
    tyreLifeKm: 22000,
    verdict: "A fast grand tourer, not a WRX.",
    overview:
      "2024 Performance asks were $48,995 to $52,995. Dual motor, 390 kW, 3.8 seconds, and a Blade battery under a 6-year / 150,000 km vehicle warranty that transfers, plus 8 years on the battery. Driven in New Zealand it felt grippy and finished. Driven back to back with a Model 3 and an Ioniq 6 in Australia, the steering went numb and the body moved too much.",
    good: [
      "The most performance per dollar in the sedan group, with years of warranty still on a 2024 car.",
      "Blade battery chemistry is the durable kind, and BYD was a people’s-choice brand in Consumer NZ’s survey.",
      "It looks like a proper sport sedan. The Leaf problem does not apply.",
    ],
    bad: [
      "WhichCar and Chasing Cars both marked the steering and the bump control down. Driven NZ was kinder. The score follows the comparison test.",
      "Feel for a shudder on a hard pull. Overseas Performance cars have had a rear driveshaft issue. It is not a proven New Zealand pattern.",
      "The 19-inch tyre price is a Tesla Model Y Hankook stand-in, not a Seal quote. Treat that line as a ceiling.",
      "The dealer network is younger than Hyundai, Kia, BMW or Tesla.",
    ],
    links: [
      { href: "https://www.drivencarguide.co.nz/reviews/byd-seal-performance-review-dont-discount-this-brand-as-a-premium-player/", label: "Driven — Seal Performance in New Zealand", kind: "Review" },
      { href: "https://www.chasingcars.com.au/reviews/large-cars/byd-seal-performance-2024-review/", label: "Chasing Cars — Seal Performance", kind: "Review" },
      { href: "https://www.whichcar.com.au/reviews/car-comparisons/2024-byd-seal-vs-tesla-model-3-vs-hyundai-ioniq-6-comparison", label: "WhichCar — Seal vs Model 3 vs Ioniq 6", kind: "Review" },
      { href: "https://www.bydauto.co.nz/vehicles/seal", label: "BYD New Zealand — Seal warranty", kind: "Warranty" },
      { href: "https://www.trademe.co.nz/a/motors/cars/byd/seal", label: "Trade Me — Seal listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:BYD_Seal_IAA_2023_1X7A0371.jpg",
  },
  {
    id: "ev6",
    slug: "ev6-gt",
    name: "Kia EV6",
    variant: "GT",
    year: "2023",
    priceLabel: "$77,990",
    priceSort: 77990,
    zero: "3.5 s",
    boot: "480 L",
    pace: 4,
    chassis: 3.5,
    defect: 1,
    warranty: 1,
    service: 2,
    fleet: 1,
    battery: 0,
    kwh: 20,
    tyreSet: 3887,
    tyreLifeKm: 20000,
    verdict: "The depreciated driver’s car.",
    overview:
      "A 2023 NZ-new GT with 12,842 km was asking $77,990, down from about $140,000. Auto Trader timed one at 3.31 seconds and liked the chassis, limited-slip diff included. It is also an E-GMP car, so the integrated charging unit can flatten the 12-volt system and leave it undrivable. Kia New Zealand has told owners the ICCU warranty is extended. That news arrived as an email an owner posted, not as a public campaign page.",
    good: [
      "The first owner has already paid most of the new-car money, and the car underneath is actually set up to be driven.",
      "Kia dealers are everywhere, which matters when the part that fails is an ICCU.",
      "480 litres and a shape that does not apologise for being a hatch.",
    ],
    bad: [
      "Do not buy it until Kia confirms ICCU cover on that VIN in writing, and the service book is a Kia book. The pre-facelift warranty is 5 years or 150,000 km only if it was serviced properly.",
      "A set of 255/40R21 Michelin Pilot Sport EVs is $939 each before fitting. Tyres are most of the three-year gap to a Model 3.",
      "GT stock is thin. The Air models all over Trade Me are a different, much slower car.",
    ],
    links: [
      { href: "https://autotrader.co.nz/car-reviews/2023-kia-ev6-gt-review", label: "Auto Trader NZ — 2023 EV6 GT", kind: "Review" },
      { href: "https://www.reddit.com/r/nzev/comments/1tzv2mn/extended_iccu_warranty_new_zealand/", label: "r/nzev — Kia NZ on the ICCU warranty", kind: "Owners" },
      { href: "https://www.kia.co.nz/ownership/warranty-roadside-assist/", label: "Kia New Zealand — warranty", kind: "Warranty" },
      { href: "https://tradetyres.co.nz/tyres/electric-car-tyres/", label: "Trade Tyres — Pilot Sport EV 255/40R21", kind: "Tyres" },
      { href: "https://www.trademe.co.nz/a/motors/cars/kia/ev6", label: "Trade Me — EV6 listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:Kia_EV6_GT_IMG_8171.jpg",
  },
  {
    id: "ioniq6",
    slug: "ioniq-6",
    name: "Hyundai Ioniq 6",
    variant: "AWD Limited",
    year: "2023",
    priceLabel: "$59,990",
    priceSort: 59990,
    zero: "5.1 s",
    boot: "401 L",
    pace: 2,
    chassis: 3.5,
    defect: 1,
    warranty: 1,
    service: 2,
    fleet: 1,
    battery: 0,
    kwh: 16,
    tyreSet: 2600,
    tyreLifeKm: 25000,
    verdict: "The sedan they preferred to drive.",
    overview:
      "A 2023 Limited AWD with 34,500 km was $59,990. About 5.1 seconds, 239 kW, and in WhichCar’s comparison its steering, ride and stability control sat clearly ahead of both the Seal and the Model 3. It shares the E-GMP charging unit with the EV6 and the Ioniq 5. Hyundai New Zealand publishes that campaign.",
    good: [
      "The best chassis of the three sedans in the back-to-back test, at a Model 3 kind of money.",
      "Efficient. The planning figure is 16 kWh/100 km, same as the Long Range Tesla.",
      "Hyundai can fix an ICCU in more towns than Polestar or BYD can.",
    ],
    bad: [
      "5.1 seconds is a smaller step on from a WRX than the dual-motor rockets. The charm is the way it turns, not the launch.",
      "The ICCU fault is the same family as the EV6 GT. Check the campaign on the VIN.",
      "The 20-inch tyre price is a Model Y Hankook stand-in. Limited cars are often on 20s, not always this exact size.",
    ],
    links: [
      { href: "https://www.whichcar.com.au/reviews/car-comparisons/2024-byd-seal-vs-tesla-model-3-vs-hyundai-ioniq-6-comparison", label: "WhichCar — Ioniq 6 against Seal and Model 3", kind: "Review" },
      { href: "https://www.hyundai.co.nz/safety-campaigns", label: "Hyundai New Zealand — ICCU and battery campaigns", kind: "Recall" },
      { href: "https://www.trademe.co.nz/a/motors/cars/hyundai/ioniq-6", label: "Trade Me — Ioniq 6 listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_6_1X7A7083.jpg",
  },
  {
    id: "polestar",
    slug: "polestar-2",
    name: "Polestar 2",
    variant: "Long Range Dual Motor",
    year: "2023–24, if you can find one",
    priceLabel: "No 2023–24 ask. 2025 NZ-new $69,990",
    priceSort: 69990,
    zero: "4.5 s",
    boot: "405 L",
    pace: 3,
    chassis: 3,
    defect: 2,
    warranty: 1,
    service: 1,
    fleet: 1,
    battery: 0,
    kwh: 19,
    tyreSet: 2320,
    tyreLifeKm: 25000,
    verdict: "A good chassis and a bad hunt.",
    overview:
      "The dual motor is the sporty Polestar 2: 300 kW, about 4.5 seconds, up to 350 kW with the Performance pack. CAR magazine liked its balance more than the Seal’s. Trade Me in this age band is full of single-motor cars around $39,000–$47,000, and those are not this car. No 2023–2024 dual motor was listed on 17 October 2026. The nearest NZ-new example was a 2025 at $69,990. A 2022 NZ-new dual motor was $42,000 with 81,000 km, which is older than this brief.",
    good: [
      "Steering and balance that reviewers actually wanted to play with. Software annoyances, not a dead-car fault.",
      "405 litres and a hatch opening. More useful than the boot lid on a Seal.",
      "If a NZ-new 2023 or 2024 dual motor appears under $60,000, the fit score moves.",
    ],
    bad: [
      "Single-motor cars will not feel like this score. Read the badge. LRSM is not LRDM.",
      "At least one 2023 “Long Range” was at a Japanese-import yard. Warranty and charging support are a different buy.",
      "Owners report software glitches and front suspension mounts, and the service counter is Giltrap, not a national dealer map.",
      "The price used in the sort is the 2025 car, because that is what a dual motor actually costs today.",
    ],
    links: [
      { href: "https://www.carmagazine.co.uk/car-reviews/comparison/2024/byd-seal-vs-tesla-model-3-vs-polestar-2/", label: "CAR — Seal vs Model 3 vs Polestar 2", kind: "Review" },
      { href: "https://www.reddit.com/r/nzev/comments/1i53t9l/polestar_2_owners_looking_for_some_opinions/", label: "r/nzev — Polestar 2 owners", kind: "Owners" },
      { href: "https://www.trademe.co.nz/a/motors/cars/polestar/2", label: "Trade Me — Polestar 2 listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:Polestar_2_1X7A0419.jpg",
  },
  {
    id: "i4",
    slug: "i4-m50",
    name: "BMW i4",
    variant: "M50",
    year: "2023",
    priceLabel: "$82,900",
    priceSort: 82900,
    zero: "3.9 s",
    boot: "470 L",
    pace: 3.5,
    chassis: 3.5,
    defect: 2,
    warranty: 1,
    service: 2,
    fleet: 0,
    battery: 0,
    kwh: 19,
    tyreSet: 2600,
    tyreLifeKm: 15000,
    verdict: "The serious sedan. It does not look like an i3.",
    overview:
      "A 2023 M50 with 43,500 km was $82,900. About 3.9 seconds, and the shape is a 4 Series gran coupe. BMW’s New Zealand dealers are a real reliability advantage when something electrical needs a part. Very few i4s change hands here, twelve listings in a year across every variant, so the local evidence is thin even though the powertrain’s reputation elsewhere is clean.",
    good: [
      "Chassis and steering in the same conversation as the EV6 GT, with a boot you can actually use.",
      "A BMW workshop in more cities than Polestar has.",
      "The i3 objection does not transfer. This is a different car.",
    ],
    bad: [
      "After the warranty, the invoices are BMW invoices. Tyres, brakes, and anything suspension-shaped.",
      "M50s are often staggered, so the rears die first and you cannot rotate them. The 15,000 km life and the 20-inch square-set price are a stand-in, and the truth can be worse.",
      "The eDrive35 at about $65,000 is roughly six seconds. It loses this brief to the Seal and the Model 3.",
    ],
    links: [
      { href: "https://www.trademe.co.nz/c/motors/review/2024-bmw-i4-edrive35-review", label: "NZ Autocar on Trade Me — i4 eDrive35, not the M50", kind: "Review" },
      { href: "https://www.trademe.co.nz/a/motors/cars/bmw/i4", label: "Trade Me — i4 listings", kind: "Market" },
      { href: "https://tessories.nz/product/tyre-services/", label: "Tessories — 20-inch fitted price used as a stand-in", kind: "Tyres" },
    ],
    photo: "Calreyn88",
    photoPage: "https://commons.wikimedia.org/wiki/File:2022_BMW_i4_M50_(35166).jpg",
  },
  {
    id: "mache",
    slug: "mach-e-gt",
    name: "Mustang Mach-E",
    variant: "GT",
    year: "2024",
    priceLabel: "$69,990–$69,995",
    priceSort: 69993,
    zero: "3.7 s",
    boot: "402 L",
    pace: 3.5,
    chassis: 2,
    defect: 1,
    warranty: 2,
    service: 2,
    fleet: 0,
    battery: 0,
    kwh: 21,
    tyreSet: 2600,
    tyreLifeKm: 20000,
    verdict: "Quick, heavy, and already cheap.",
    overview:
      "Two 2024 NZ-new GTs were $69,990 and $69,995, with 12,200 km and 18,378 km. They launched around $117,000 to $125,000. Auto Trader’s long spell with one returned 21.0 kWh/100 km and a car that is fast in a straight line and less interested in a corner than the hatches. Ford’s 5-year unlimited-kilometre warranty still has years on these. Early Mach-Es had a high-voltage junction box that could strand them. A 2024 is a better bet, and the recalls still need to be checked.",
    good: [
      "Someone else has already lost about fifty thousand dollars. What is left is 358 kW and a usable boot.",
      "Ford dealers exist outside the three main centres.",
      "The low-kilometre 2024s are the ones still inside a long warranty.",
    ],
    bad: [
      "21 kWh/100 km in a New Zealand long-term test. Weight is about 2.3 tonnes. It does not wag its tail like a WRX.",
      "Consumer NZ’s brand survey scored Ford poorly. That is the brand, not a Mach-E census, and the American recall list on the 2024 is still long.",
      "The 20-inch tyre price is a stand-in, not a Mach-E quote.",
    ],
    links: [
      { href: "https://autotrader.co.nz/car-reviews/2024-ford-mach-e-gt-long-term-report", label: "Auto Trader NZ — Mach-E GT long-term", kind: "Review" },
      { href: "https://autotrader.co.nz/car-reviews/2024-ford-mach-e-gt-review", label: "Auto Trader NZ — Mach-E GT review", kind: "Review" },
      { href: "https://www.trademe.co.nz/a/motors/cars/ford/mustang-mach-e", label: "Trade Me — Mach-E listings", kind: "Market" },
      { href: "https://www.consumer.org.nz/about-us/media-releases/pump-the-brakes-consumer-reveals-the-best-and-worst-cars-rated-by-new-zealanders", label: "Consumer NZ — 2024 brand survey", kind: "Owners" },
    ],
    photo: "Oleg Yunakov",
    photoPage: "https://commons.wikimedia.org/wiki/File:2022_Ford_Mustang_Mach-E_GT_electric_SUV.jpg",
  },
  {
    id: "ioniq5",
    slug: "ioniq-5",
    name: "Hyundai Ioniq 5",
    variant: "AWD, not the N",
    year: "2023",
    priceLabel: "$49,880–$54,880",
    priceSort: 52380,
    zero: "5.1 s",
    boot: "527 L",
    pace: 2,
    chassis: 2,
    defect: 1,
    warranty: 1,
    service: 2,
    fleet: 1,
    battery: 0,
    kwh: 18,
    tyreSet: 2320,
    tyreLifeKm: 25000,
    verdict: "The practical one with the same caveat.",
    overview:
      "2023 AWD cars, a Lounge at $49,880 and an Elite at $54,880, are about 5.1 seconds and they have the biggest boot in the ten at 527 litres. This is the E-GMP car you buy when the shop matters more than a simulated gearbox. The ICCU fault is identical in kind to the N and the EV6. Hyundai’s campaign is public, which is better than finding out from a forum.",
    good: [
      "527 litres and a hatch opening. The easiest of the ten to live with if the back seat is also for bags.",
      "Tens of thousands cheaper than the N, and the warranty path for the known fault is a normal Hyundai dealer.",
      "Fast enough to feel like an upgrade on a WRX in traffic, without buying a halo car.",
    ],
    bad: [
      "It will not scratch the itch the N and the EV6 GT are for. The chassis score is ordinary.",
      "ICCU. Confirm the campaign is done before you treat the price as a bargain.",
      "The tyre line uses a 19-inch Hankook stand-in.",
    ],
    links: [
      { href: "https://www.hyundai.co.nz/safety-campaigns", label: "Hyundai New Zealand — ICCU campaign", kind: "Recall" },
      { href: "https://www.trademe.co.nz/a/motors/cars/hyundai/ioniq-5", label: "Trade Me — Ioniq 5 listings", kind: "Market" },
      { href: "https://www.motoringnz.com/tested/2024/8/12/hyundai-ioniq-5-n-roadtest-review-zip-zap-tastic-genre-hero", label: "Motoring NZ — the N, for the car this one is not", kind: "Review" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5_IAA_2021_1X7A0189.jpg",
  },
  {
    id: "n",
    slug: "ioniq-5-n",
    name: "Hyundai Ioniq 5 N",
    variant: "N",
    year: "2024",
    priceLabel: "$109,995",
    priceSort: 109995,
    zero: "3.4 s",
    boot: "480 L",
    pace: 4,
    chassis: 4,
    defect: 1,
    warranty: 2,
    service: 2,
    fleet: 0,
    battery: 0,
    kwh: 22,
    tyreSet: 4607,
    tyreLifeKm: 15000,
    verdict: "The drive you want. The deal you don’t.",
    overview:
      "One 2024 N was listed at $109,995 with 1,572 km. Motoring NZ thought it was the electric car that could convince a petrol person: simulated gears, a real diff, 3.4 seconds, and a chassis that is more than a fast Ioniq 5. It is also barely used, so the first owner has not paid the premium you are trying to avoid. The 275/35R21 Continentals, at $1,119 each and a hard-driven 15,000 km life, push three-year running cost up beside the WRX.",
    good: [
      "Highest sportiness score in the set, and the only one that tries to replace the feeling of a performance car rather than just the acceleration.",
      "A 2024 with almost no kilometres still has most of its Hyundai warranty, and the dealer network can take the ICCU work.",
      "480 litres. It is still a hatch you can shop in.",
    ],
    bad: [
      "$109,995 for 1,572 km is new-car money with someone else’s kilometres as a rounding error.",
      "Same ICCU family, and almost no New Zealand cars to learn from.",
      "Tyres, on the assumptions here, cost more over three years than the WRX’s petrol and CR1s combined. The life figure is an assumption, not a measured set.",
    ],
    links: [
      { href: "https://www.motoringnz.com/tested/2024/8/12/hyundai-ioniq-5-n-roadtest-review-zip-zap-tastic-genre-hero", label: "Motoring NZ — Ioniq 5 N", kind: "Review" },
      { href: "https://www.trademe.co.nz/c/motors/review/2024-hyundai-ioniq-5-n-review", label: "NZ Autocar on Trade Me — Ioniq 5 N", kind: "Review" },
      { href: "https://www.hyundai.co.nz/safety-campaigns", label: "Hyundai New Zealand — ICCU campaign", kind: "Recall" },
      { href: "https://www.directtyre.co.nz/catalog/21%22-200033", label: "Direct Tyres — 275/35R21 Continental", kind: "Tyres" },
      { href: "https://www.trademe.co.nz/a/motors/cars/hyundai/ioniq-5", label: "Trade Me — Ioniq 5 listings", kind: "Market" },
    ],
    photo: "Alexander Migl",
    photoPage: "https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5_N_IMG_0053.jpg",
  },
];

function sportOf(car) {
  return car.pace + car.chassis + 2;
}

function reliabilityOf(car) {
  return car.defect + car.warranty + car.service + car.fleet + car.battery;
}

function priceScore(price) {
  return 1 + (9 * (ASSUMPTIONS.priceCeiling - price)) / (ASSUMPTIONS.priceCeiling - ASSUMPTIONS.priceFloor);
}

function fitOf(car) {
  return 0.45 * reliabilityOf(car) + 0.35 * sportOf(car) + 0.2 * priceScore(car.priceSort);
}

function runningOf(car) {
  const km = ASSUMPTIONS.kmYear * ASSUMPTIONS.years;
  const fuel = (km / 100) * car.kwh * ASSUMPTIONS.homeRate;
  const ruc = (km / 100) * ASSUMPTIONS.rucPer100;
  const tyres = (km / car.tyreLifeKm) * car.tyreSet;
  const three = fuel + ruc + tyres;
  return { fuel, ruc, tyres, three, weekly: three / (ASSUMPTIONS.years * 52) };
}

function wrxRunning() {
  const km = ASSUMPTIONS.kmYear * ASSUMPTIONS.years;
  const fuel = (km / 100) * ASSUMPTIONS.wrxLPer100 * ASSUMPTIONS.petrol98;
  const tyres = (km / ASSUMPTIONS.wrxTyreLifeKm) * ASSUMPTIONS.wrxTyreSet;
  const three = fuel + tyres;
  return { fuel, ruc: 0, tyres, three, weekly: three / (ASSUMPTIONS.years * 52) };
}

function nzd(n) {
  const sign = n < 0 ? "−" : "";
  return sign + "$" + Math.abs(Math.round(n)).toLocaleString("en-NZ");
}

function compared(car) {
  const ev = runningOf(car);
  const wrx = wrxRunning();
  return {
    ev,
    wrx,
    weekDelta: ev.weekly - wrx.weekly,
    threeDelta: ev.three - wrx.three,
  };
}

function byId(id) {
  return CARS.find((car) => car.id === id);
}
