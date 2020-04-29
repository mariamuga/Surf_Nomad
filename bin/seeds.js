const mongoose = require("mongoose");
const Spot = require("../models/Spot");

mongoose.connect("mongodb://localhost/Surf_Nomad", {
  useNewUrlParser: true,
});

const spots = [
  // 30 spots Spain
  // 8 spots Asturias
  {
    name: "Ribadesella",
    description:
      "Average, moderately consistent beachbreak. Works on most tides except high. - Occasionally gets crowded on weekends. Close to the town of Ribadesella. Parking not a problem apart from peak summer times. Good facilities on the beach plus close to shops and bars. Slight residential pollution.",
    location: {
      coordinates: [43.466904, -5.074039],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.61 - 2.44 m",
    rating: 2,
  },
  {
    name: "Playa la Vega",
    description:
      "Long beach with several possible peaks picking up all available swell. More consistent than surrounding spots due to it’s NNW orientation. Handles the summer NE winds. - Occasionally crowded. Fairly quiet spot although can have a few beachgoers in summer. Parking not a problem. Good beach facilities. Camping near the village. Stream polluted by mining activities.",
    location: {
      coordinates: [43.480578, -5.139053],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.61 - 2.44 m",
    rating: 0,
  },
  {
    name: "Playa España",
    description:
      "Small beach that can have one or two good peaks, attracting weekend surfers from Gijon. Surfable during most tides, but best around mid when the shorebreaks start appearing. Moderately consistent, but misses out on the smallest, summer swells. - Often crowded, but a mellow vibe at this rural bay, despite being almost in the city.",
    location: {
      coordinates: [43.545109, -5.529438],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "S",
    swell_range: "0.91 - 2.44 m",
    rating: 1,
  },
  {
    name: "Playa de San Antolin",
    description:
      "Good beachbreak with rivermouth. Various peaks, working at most tides, depending on sandbars. Fairly consistent, handling both small and moderate swells. There’s a left and right at each end of the bay. Offshore on SW winds. - Rarely crowded. Beautiful setting close to mountains. Visible from road, attracting a few beach-goers in summer at western end of beach where there are some facilities including a lifeguard. Otherwise empty.",
    location: {
      coordinates: [43.442827, -4.867229],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.61 - 2.44 m",
    rating: 2,
  },
  {
    name: "Playa del Espartal",
    description:
      "Stretching from Playa El Espartal to Salinas, this is one of the most popular surfing beaches in Asturias. Fast, barrelling, consistent beachbreak peaks, working during all tides. Smaller towards western end. Some shelter from summer NE sea breeze. - Always crowded. Some localism. Ugly, urban setting with tower blocks and concrete walkways. Residential and stormwater pollution together with industrial pollution from the nearby factories of Avilés. Good beach facilities including a surfing school. Plenty of shops and bars nearby.",
    location: {
      coordinates: [43.580144, -5.95498],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.91 - 2.44 m",
    rating: 1,
  },
  {
    name: "Playa de Xagó",
    description:
      "West-facing, ultra-consistent beachbreak. Surfable here when most other places are too small. Good peaks at all tides, depending on sandbars. Sheltered from summer NE sea breezes. - Can be crowded. Scenic spot, despite close proximity to industrial city of Avilés. Good beach facilities. Busy in summer with beachgoers. Parking OK apart from the busiest summer weekends. Surprisingly little pollution considering coordinates.",
    location: {
      coordinates: [43.603935, -5.920319],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.91 - 2.44 m",
    rating: 1,
  },
  {
    name: "Playa de Verdicio",
    description:
      "Consistent, medium-quality beachbreak with several peaks, best at low tide. Some rocky outcrops. - Reasonably quiet, uncrowded spot, considering its proximity to the cities of Avilés and Gijón. Easy parking and relatively unpolluted.",
    location: {
      coordinates: [43.626748, -5.877529],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.91 - 2.44 m",
    rating: 2,
  },
  {
    name: "Tapia de Casariego",
    description:
      "Good-quality, consistent beachbreak with semi-permanent, hollow lefthander, fed by a stream. Best mid to low tide, outgoing. Some shelter from NE sea breezes in summer, but it is a year-round wave. - Popular surfing beach and contest site that’s often crowded. La Paloma is a small swell spot west of town. Near to town of Tapia de Casariego. Good beach facilities and camping nearby, popular with travelling surfers. Surf shop in nearby town.",
    location: {
      coordinates: [43.568577, -6.948225],
      region: "Asturias",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.91 - 2.44 m",
    rating: 3,
  },
  // 4 spots Cantabria
  {
    name: "Langre",
    description:
      "Average beachbreak sheltered from strong SW and moderate W winds. Needs a reasonable swell to work. Low to mid tide only. - Rarely crowded. Picturesque, quiet spot, practically deserted in winter. Parking OK except in peak summer. Limited beach facilities. Camping nearby. Not very polluted.",
    location: {
      coordinates: [43.475831, -3.69061],
      region: "Cantabria",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.61 - 1.83 m",
    rating: 1,
  },
  {
    name: "Playa de Somo",
    description:
      "Consistent beachbreak with good peaks, working during most tides. Best on small to medium swells. Thriving surf scene in carpark and village. Good beach facilities with large carpark, showers, surf school and lifeguards. - Busy in summer season. Several surf shops, bars and other shops close by. Campsite just down the road. Also quite close to city of Santander. Some pollution from Santander.",
    location: {
      coordinates: [43.457202, -3.74383],
      region: "Cantabria",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "S",
    swell_range: "0.61 - 1.83 m",
    rating: 2,
  },
  {
    name: "Liencres",
    description:
      "Excellent beachbreak with a series of peaks, depending on tide and sandbars. Very consistent. - Main peaks can often be crowded. Very picturesque spot in a protected coastal area. Large carpark that can fill up during summer weekends. Good beach facilities. Camping nearby. Not very polluted.",
    location: {
      coordinates: [43.453145, -3.962273],
      region: "Cantabria",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.61 - 2.44 m",
    rating: 2,
  },
  {
    name: "Playa de Meron",
    description:
      "Consistent beachbreak with multiple peaks, giving fast walls and the occasional cover-up. Smaller towards western end, where a rivermouth shapes up the banks and there’s better W wind protection. - Sometimes crowded. Nearest surfing beach to popular summer resort of San Vicente de la Barquera. Parking not normally a problem. Good beach facilities, shops and campsite nearby. Some estuarine pollution.",
    location: {
      coordinates: [43.390998, -4.377408],
      region: "Cantabria",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.61 - 1.83 m",
    rating: 2,
  },
  // 6 spots Galicia
  {
    name: "Praia de Doniños",
    description:
      "Most popular wave in the area, thanks to superior quality and consistency. 2km’s of swell sucking peaks that are hollowest at low to mid tide. - Can be very crowded with surfers from Ferrol hence a degree of localism. Gets packed in summer, with difficult parking. Good beach facilities including a surf school. Camping nearby. No significant pollution.",
    location: {
      coordinates: [43.498489, -8.318749],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.91 - 2.44 m",
    rating: 1,
  },
  {
    name: "Praia de San Xorxe",
    description:
      "Beautiful crescent of west facing beachbreak, offering some S wind protection for the lefts in the southern corner. Various other peaks along length of beach, best at low to mid-tide. Rips. - Sometimes crowded. Plenty of space on the beach and in the carpark. Lifeguard, showers, camping nearby and squeaky clean water.",
    location: {
      coordinates: [43.534117, -8.295838],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "W",
    swell_range: "0.91 - 2.44 m",
    rating: 1,
  },
  {
    name: "Praia de Razo",
    description:
      "Big, open beachbreak that is surfable when surrounding spots are too small. Excellent quality, fast, walled up peelers, working on all tides. OK on SW winds, but destroyed by a NW’erly. - Rarely crowded. Very long stretch of beach in beautiful setting. A few beachgoers and travelling surfers in summer, practically deserted in winter. Good beach facilities including surf school. Low profile free-camping or site nearby in Baldaio. Clean as.",
    location: {
      coordinates: [43.290543, -8.706359],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "SE",
    swell_range: "0.90 - 2.44 m",
    rating: 2,
  },
  {
    name: "Barrañan",
    description:
      "Average-quality beachbreak, with reliable, mid to high tide rides. - Sometimes crowded. Still fairly near to city of A Coruña, so gets quite packed in summer. Limited beach facilities. Slight pollution.",
    location: {
      coordinates: [43.311338, -8.552315],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "Mid - High tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "S",
    swell_range: "0.61 - 1.83 m",
    rating: 2,
  },
  {
    name: "Caion",
    description:
      "Well orientated to pick up tiny W-NW swells at this quality summer beachbreak. Usually best at mid tide, depending on sandbars. - Sometimes crowded. A small bay that can be popular during summer, filling the car park. Beach facilities include lifeguard and showers. No significant pollution.",
    location: {
      coordinates: [43.315122, -8.61022],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.90 - 2.44 m",
    rating: 3,
  },
  {
    name: "Playa del Orzán",
    description:
      "Average-quality beachbreak. Moderately consistent. Low to mid tide best. OK on SW winds. - Often crowded throughout the year, because beach is right near the city of A Coruña. Difficult parking, particularly in summer. Good beach facilities, plus near to shops and bars. Some residential and stormwater pollution.",
    location: {
      coordinates: [43.453145, -3.962273],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "SW",
    swell_range: "0.61 - 1.83 m",
    rating: 3,
  },
  // 4 spots Pais Vasco
  {
    name: "Mundaka",
    description:
      "Mundaka is a dream lefthand barrel and possibly the best rivermouth wave in the world. A long triangular sandbank catches the stronger NW swells, creating a long flawless tube with rides of up to 150-200 meters possible. From the peak, the wave sucks up hard, making for steep challenging take-offs straight into a sick barrel section. The ensuing long, fast wall, allows a few turns if you are going close to warp speed. The final two sections of the wave can vary in quality depending on the sandbar, but frequently they offer hollow cylinders with less crowd pressure. Perfect autumn conditions include strong S-SW winds and the tide must be low incoming, otherwise the outgoing rip is horrendous. Good conditions at Mundaka rarely last for more than two days, as the large swells fade, so this classy wave is only rideable about 50 days a year. - Always crowded. Moderately dangerous, depending on swell size, wind and crowd. Be careful of the rip. Fairly consistent although almost never works in summer and only works from low to about mid tide. The wave is next to the port and village of Mundaka, a delightful fishing village apparently unspoilt by its surfing fame. Good facilities in village and friendly local residents. Parking can be difficult when the wave is on. Camping and surf shop nearby. Some estuarine pollution.",
    location: {
      coordinates: [43.407347, -2.696132],
      region: "Galicia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Left-hand Pointbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SW",
    swell_range: "0.91 - 3.66 m",
    rating: 1,
  },
  {
    name: "Zurriola Hondartza",
    description:
      "Consistent, medium-quality beachbreak that can have good peaks depending on the sandbars. A lefthander peels towards the pier at low tide. Best on small swells; anything over about 5' closes out. - Often crowded. Practically in the town centre of San Sebastian. City-type roadside parking with meters, or expensive underground carparks; practically impossible in the summer. Moderately polluted, mainly from residential and stormwater runoff. Beach facilities include toilets, showers, lifeguard and surf school.",
    location: {
      coordinates: [43.326512, -1.976309],
      region: "Vasque Country",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.30 - 1.82 m",
    rating: 1,
  },
  {
    name: "Zarautz",
    description:
      "Very consistent, good quality, beachbreak. Doesn’t need much swell to work, although W swells struggle to get in here. A long beach with several peaks, mostly performance orientated. Highly competitive in the water with a very high level of surfing. - Almost always crowded, particularly on the main peaks. Zarautz is one of the most popular surfing beaches in Spain. Also quite popular with beachgoers in the summer. Parking difficult during the summer and at weekends. Good facilities including lifeguard, showers, toilets and surfing school. Surf shops in nearby town centre. Mildly polluted, mainly from residential and stormwater runoff.",
    location: {
      coordinates: [43.288421, -2.168095],
      region: "Vasque Country",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "S",
    swell_range: "0.30 - 1.82 m",
    rating: 1,
  },
  {
    name: "Laga",
    description:
      "Consistent, good to excellent beachbreak, sometimes producing barrels. OK on most tides although changes with sandbars. - Sometimes crowded, especially at weekends. Some pollution from the nearby Mundaka estuary. Picturesque spot in a pine forest with impressive cliffs on the east side. Much nicer in winter when there are no beachgoers from nearby Gernika. Parking normally not a problem except in peak summer. Lifeguard, showers and a bar on the beach in summer.",
    location: {
      coordinates: [43.409551, -2.655425],
      region: "Vasque Country",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "NW - N",
    wind_direction: "S",
    swell_range: "0.61 - 1.82 m",
    rating: 1,
  },
  // 3 spots Andalucia
  {
    name: "El Palmar",
    description:
      "Top class peaks over epic sandbars anchored by underlying rock strata and sculpted by rip currents. Plenty of space for all abilities but it suffers in strong E winds and high tides. - A beach in a class of its own. Ideally facing to pick up lots of groundswell and with really good sandbars. The beach suffers from strong East winds as it is very exposed. When the winds are blowing from the East head up towards Roche. Highly consistent and the crowds get spread out. Free parking near local surf shop which gives advice on local conditions. Surfschool and camping nearby.",
    location: {
      coordinates: [36.242178, -6.077513],
      region: "Andalucia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "S - NW",
    wind_direction: "E",
    swell_range: "0.30 - 2.44 m",
    rating: 1,
  },
  {
    name: "Barbate",
    description:
      "An immense wave with the correct conditions. The sandbar is set into place by the seawall creating a classic lefthand rivermouth wave. Needs a solid swell and low tide to produce long, barrelling lefts with heavy currents guarenteed. - Only medium consistency so the protective locals are on it. After heavy rain pollution is cleary visible from several inland waterways and saltmarshes. Parking is restricted.",
    location: {
      coordinates: [36.179201, -5.903932],
      region: "Andalucia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Left-hand Pointbreak",
    seabed: "Sand",
    swell_direction: "SW - NW",
    wind_direction: "NE",
    swell_range: "0.91 - 1.83 m",
    rating: 1,
  },
  {
    name: "Los Caños",
    description:
      "A classic lefthander in solid swells and N winds. Steep, barreling take-off wrapping into long playful walls. Big swells can close out the bay, making it difficult to stay in position on the left. Very tight take-off zone but there's other waves in the bay. - Always crowded and some vibes at the peak. Beware urchins and submerged objects. A beautiful beach in the winter with regular swells. Beachcombers beware what you pick up, you never know who is watching!",
    location: {
      coordinates: [36.179201, -5.903932],
      region: "Andalucia",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Left-hand Pointbreak",
    seabed: "Rock Ledge",
    swell_direction: "SW - NW",
    wind_direction: "NE",
    swell_range: "0.91 - 1.83 m",
    rating: 1,
  },
  // 5 spots Canary Islands
  {
    name: "Las Galletas",
    description:
      "South-facing peak that picks up spring/summer swells. Generally mellow, easy walls for beginners, longboarders and bodyboarders, but can pack some punch when it gets overhead. S swell and low tide on the lefts is best but rocks do pop up on the inside. - Next to harbour wall that shortened the wave. Sometimes crowded because it is the only wave around. Next to harbour wall",
    location: {
      coordinates: [28.00588, -16.656227],
      region: "Canary Island - Tenerife",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Uneven Reef",
    swell_direction: "SE - SW",
    wind_direction: "NE",
    swell_range: "0.61 - 2.44 m",
    rating: 1,
  },
  {
    name: "La Izquierda",
    description:
      "Famous left in Playa de Las Americas that breaks over a lava platform and spins down the line for up to 100m. Sucky and hollow on take-off leading into a smackable wall with cover-up sections. Despite the name there are also some short rights. - Absolutely always crowded and localism is a major factor. Shallow and sharp rocks on the inside. Experts only when it's overhead. Intermediates should look for somewhere easier to surf.",
    location: {
      coordinates: [28.00588, -16.656227],
      region: "Canary Island - Tenerife",
      country: "Spain",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Uneven Reef",
    swell_direction: "W - NW",
    wind_direction: "E",
    swell_range: "0.61 - 3.66 m",
    rating: 1,
  },
  {
    name: "Punta Blanca",
    description:
      "Top class reef peak that quickly closes out on the right leaving bowly lefts to rifle down the reef. Intense jacking take-offs, dominated by local bodyboarders and tube masters. Short, shallow and scary – experts only. Best with a wrapping NW-NE swell. - Many injuries to bodies, boards and pride from the reef and aggressive local crew. There are some other less dangerous reefs nearby including La del Medio and La del Chalet.",
    location: {
      coordinates: [28.213423, -16.836812],
      region: "Canary Island - Tenerife",
      country: "Spain",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Reef",
    seabed: "Uneven Reef",
    swell_direction: "NW - N",
    wind_direction: "E",
    swell_range: "0.61 - 3.66 m",
    rating: 1,
  },
  {
    name: "La Santa",
    description:
      "Known as Pipeline's Atlantic sister. Lefts and rights reel down a short and shallow reef with intense power and ferocity. W swell makes the lefts more makeable than the rights, which resemble Backdoor by closing out on the sharp lava reef. When it’s on, it’s packed with the best of the islands stand-up and bodyboarders and a Coliseum atmosphere pervades. - One of the most photographed spots in the Canaries, but also one of the most localised. Does have its quieter moments on less epic days however the surfing level required to ride here must be very high. In front of the harbour",
    location: {
      coordinates: [29.112794, -13.662161],
      region: "Canary Island - Lanzarote",
      country: "Spain",
    },
    best_tide: "Mid - High tides",
    type: "Peaky Reef",
    seabed: "Uneven Reef",
    swell_direction: "SW - NW",
    wind_direction: "SE",
    swell_range: "1.22 - 4.57 m",
    rating: 1,
  },
  {
    name: "Playa del Confital",
    description:
      "Considered one of the best righthanders in Europe, thanks to it’s wedging barrels and fast walls. Localism remains but not as heavy as years ago. Venue for the WQS circuit. - El Confital is surrounded by one of the most beautiful landscapes in Gran Canaria, which is now being threatened by urban development.",
    location: {
      coordinates: [28.159632, -15.435284],
      region: "Canary Island - Gran Canaria",
      country: "Spain",
    },
    best_tide: "Mid - High tides",
    type: "Peaky Reef",
    seabed: "Uneven Reef",
    swell_direction: "W - N",
    wind_direction: "E",
    swell_range: "1.22 - 4.57 m",
    rating: 1,
  },

  // 11 spots Portugal
  // 2 spots Madeira
  {
    name: "Ponta do Tristão",
    description:
      "Another rarely surfed spot with difficult access. First ridden by Angus Opie, Magnus Murray and Will Henry. Requires a long paddle from the northern end of Porto Moniz. Usually too fast with unmakeable sections, but can be good with just the right swell direction. - Walk north from Porto Moniz and paddle out in the channel, then all the way west to the end of the point.",
    location: {
      coordinates: [32.866959, -17.200259],
      region: "Madeira",
      country: "Portugal",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Rock Ledge",
    swell_direction: "W - NW",
    wind_direction: "SE",
    swell_range: "1.52 - 4.5 m",
    rating: 2,
  },
  {
    name: "Jardim do Mar",
    description:
      "Once named the best big-wave pointbreak in the world by Surfer Magazine, Ponta Jardim now suffers severe backwash at mid to high tide from a new seawall built in 2003. The break still has its days when the critical drops lead into long, fast, powerful walls, but they are much less frequent and only last for a few hours around dead low tide. Experts with pintails only. - Getting in and out of the water on a big day can be downright frightening and the new seawall has made the waves break even closer to shore, so beware. Best shot is to paddle out from the backside of the point, to the west of the village. Follow main highway on south shore , past Ribeira Brava and Calheta, and look for signs for Jardim do Mar.",
    location: {
      coordinates: [32.737115, -17.212062],
      region: "Madeira",
      country: "Portugal",
    },
    best_tide: "Low tide",
    type: "Right-hand Pointbreak",
    seabed: "Boulders",
    swell_direction: "W - N",
    wind_direction: "N",
    swell_range: "1.82 - 9.1 m",
    rating: 1,
  },
  // 2 spots Peniche
  {
    name: "Foz Do Arelho",
    description:
      "This huge beach to the north of Peniche picks up absolutely anything in the Atlantic but it’s very wind exposed. - A couple of small river mouths dot the beach and help form good banks with minimal crowds.",
    location: {
      coordinates: [39.432042, -9.232235],
      region: "Peniche",
      country: "Portugal",
    },
    best_tide: "Low tide",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 2.4 m",
    rating: 1,
  },
  {
    name: "Supertubos",
    description:
      "The name speaks for itself! World-class spot and undoubtedly the best beachbreak in Portugal, Supertubos has become a favourite stop on the world pro tour and a perfect warm-up for Pipeline. Long, heavy, gas-filled tubes are guaranteed as well as a few shut-down close-outs, such is the speed of this wave. The lefts are usually better, but plenty of shorter rights peel off the main peak, especially in NW conditions. It’s at its best with NE winds, a decent SW swell and mid-tide, but these conditions don’t come around everyday. - There can be a few lesser peaks further along the beach to help dilute the concentration of bodyboarders and local tube-seekers, but there’s no escaping the mega crowds or the foul smell from the nearby fish factory. Easy parking in front of the break, but theft from vehicles is commonplace.",
    location: {
      coordinates: [39.344673, -9.363022],
      region: "Peniche",
      country: "Portugal",
    },
    best_tide: "All tide",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "S - NW",
    wind_direction: "NE",
    swell_range: "0.91 - 3.1 m",
    rating: 2,
  },
  // 3 spots Lisbon
  {
    name: "Praia Das Macas",
    description:
      "A low tide only beachbreak, with wedgy lefts off the cliffs that help to boost up the swell. - It doesn’t hold much size and has a devoted, but friendly, local crew who don’t leave many waves to share. Picks up any swell going.",
    location: {
      coordinates: [38.825623, -9.47005],
      region: "Lisbon",
      country: "Portugal",
    },
    best_tide: "Low tide",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - NW",
    wind_direction: "E",
    swell_range: "0.61 - 2.4 m",
    rating: 1,
  },
  {
    name: "Praia Do Guincho",
    description:
      "Better known for its windsurfing conditions Praia Gunicho is actually one of the better beachbreaks in the Lisbon area and certainly one of the most consistent. - When it’s good, wedgy, powerful rights break off the cliffs at the northern end. Mid-low tide on a NW swell is better, but it gets blown out very easily. City crowds but user-friendly enough.",
    location: {
      coordinates: [38.732749, -9.472595],
      region: "Lisbon",
      country: "Portugal",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 2.4 m",
    rating: 1,
  },
  {
    name: "Praia Grande Sintra",
    description:
      "One of the most consistent breaks in the Lisbon zone. This is a very versatile beachbreak with long, but often slow waves at low tide and faster, shorter shorebreaks when the tide starts pushing up. - The rocks at the beaches northern end shelter a few rarely ridden rights. Doesn’t like a lot of wind and is busy whenever it’s on.",
    location: {
      coordinates: [38.804784, -9.484808],
      region: "Lisbon",
      country: "Portugal",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 3.1 m",
    rating: 1,
  },
  // 4 spots Algarve
  {
    name: "Praia da Cordoama",
    description:
      "More isolated beachbreak with a sprinkling of rocks below impressive cliffs. Small summer swells in glassy conditions will provide plenty of peaks but the N winds will destroy it. - Summer crowds will be spread out. Strong currents.",
    location: {
      coordinates: [37.10986, -8.93737],
      region: "Algarve",
      country: "Portugal",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 2.44 m",
    rating: 1,
  },
  {
    name: "Carrapateira",
    description:
      "Along a winding track to the south of Carrapateira village, this consistent beach has more shelter than Praia da Bordeira and a right breaking off a large rock from mid-low tide. - Average peaks break further down the beach. Popular with Algarve surf schools, despite the odd rip.",
    location: {
      coordinates: [37.167323, -8.90296],
      region: "Algarve",
      country: "Portugal",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 2.44 m",
    rating: 3,
  },
  {
    name: "Arrifana",
    description:
      "Beneath the white-washed village and massive cliffs is a busy and very ordinary beachbreak that works throughout the tide, picks up most swell and has wind shelter. The real reason to visit Arrifana is the world-class, right pointbreak at the beaches northern end. - Waves here are long, fast and very heavy with shallow boils and barrel sections. It needs to be at least 2m (6ft) to start breaking and holds up to triple overhead. Be careful of the two large rocks on the inside, urchins, rips and locals. Not a beginner’s wave. Easy parking, showers, lifeguard (for the surf schools), a surfshop (in Aljezur) and camping nearby.",
    location: {
      coordinates: [37.292291, -8.864824],
      region: "Algarve",
      country: "Portugal",
    },
    best_tide: "Low - Mid tides",
    type: "Right-hand Pointbreak",
    seabed: "Uneven Reef",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "1.82 - 5.49 m",
    rating: 2,
  },
  {
    name: "Praia da Bordeira",
    description:
      "One of the best, as well as one of the most beautiful, beaches in south Portugal. At low tide a long left winds off the Carrapateira cliffs below the car park and from mid-high tide the beach turns on the goods with often fast and hollow rights into the rivermouth. - The left gets busy but the beach contains enough peaks to thin the crowds. Consistent but easily blown out.",
    location: {
      coordinates: [37.199242, -8.898464],
      region: "Algarve",
      country: "Portugal",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Uneven Reef",
    swell_direction: "SW - N",
    wind_direction: "E",
    swell_range: "0.61 - 3.05 m",
    rating: 3,
  },

  // 3 spots France
  {
    name: "Biarritz Grande Plage",
    description:
      "The Basque coast’s chic city beach receives less swell than Anglet, but handles a very large variety of conditions. Rocks on the south part of the beach contribute to the beauty of the site while shaping the banks and blocking S-SW winds. Sometimes the fat rolling peaks are fun and easy, other times they are sucky and close-out. - Beginners will do better at Cote des Basques. On the downside, crowds, bathing zone restrictions and difficult, expensive car parking spoil the experience, unless you surf at night under the boardwalk lights!",
    location: {
      coordinates: [43.484976, -1.55881],
      region: "Biarritz",
      country: "France",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.31 - 2.4 m",
    rating: 2,
  },
  {
    name: "Hossegor (La Graviere)",
    description:
      "Sited on an old gravel pit, this is the legendary Hossegor tube spot. Dredging the rivermouth has affected wave quality in the past, but it is back with a vengeance, hosting pro-surfing competitions in huge conditions, including the 2011 Quik Pro. Sometimes white-caps outside, rolls in and reforms, standing up over the shallow inside bars. - Heavy, thick-lipped beasts, break perilously close to shore and often close-out, snapping more boards than just about anywhere. - Tide range radically affects the window for ideal conditions, as does swell period, which decides if it is messy and inconsistent or lined-up and bombing through. The rip speed usually rises in direct proportion with the swell height and on big days, only the tow crew will be able to get into the sets before being swept south in the current. Humbling for all, but the barrel experts and the pros. Facilities down the beach at Hossegor's Front de Mer.",
    location: {
      coordinates: [43.67716, -1.440905],
      region: "Hossegor",
      country: "France",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "E",
    swell_range: "0.91 - 4.5 m",
    rating: 2,
  },
  {
    name: "Capbreton",
    description:
      "With semi-submerged blockhaus scattered in the sand and a large dune system keeping the suburbs in check, this is one of the most photographed beaches on the coast. Perfect barrels are regularly on offer for those that can handle the packs of gifted locals and tube-hungry visitors. - From low to mid tide is prime time, when the swell focuses on banks that seem to have a bit more punch and urgency than just about anywhere in Hossegor, so prepare for air drops and some solid floggings when it reaches headhigh plus. There will be more sand-dredging peaks up towards the massive VVF camping village, where more space is not necessarily guaranteed. Needs more swell energy than the open beaches to the north and hates the onshore wind, but when it is on, it's top quality.",
    location: {
      coordinates: [43.654584, -1.444882],
      region: "Hossegor",
      country: "France",
    },
    best_tide: "All tides",
    type: "Peaky Beachbreak",
    seabed: "Sand",
    swell_direction: "W - N",
    wind_direction: "SE",
    swell_range: "0.61 - 3.6 m",
    rating: 2,
  },

  // 18 spots Indonesia
  {
    name: "Ceningan",
    description:
      "Off the SW tip of the barely populated Ceningan island is a lefthander that lines up rolling walls with a nice steep pocket and predictable sections. Some protection from the trades but it can get messy with currents and deepwater channel affecting the swell. - Good small swell, low tide option when Lembongan isn’t working, it gets powerful and sketchy when the swell jumps. Best accessed by boat, although there is a few ways down the cave-pocked cliffs, but it’s only sometimes crowded. Locals say it is sharky.",
    location: {
      coordinates: [-8.706292, 115.437753],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "E",
    swell_range: "0.91 - 3.5 m",
    rating: 3,
  },
  {
    name: "Keramas",
    description:
      "Jet-set plaything and new pro contest hangout as its reputation for barrels and high-octane performance ramps grows. Picks up plenty of east coast swell and focuses it on a jagged lava reef that opens up straight from the drop then just asks to be bashed before the wave closes-out on the inside. - Sometimes can barrel all the way or else leaves an open canvas for progressive moves and large punts on the steeper shut-down end section. Keramas is tidally sensitive, preferring higher, incoming tides and light morning land breezes.",
    location: {
      coordinates: [-8.600007, 115.335138],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Right-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - SW",
    wind_direction: "NW",
    swell_range: "0.61 - 3.6 m",
    rating: 3,
  },
  {
    name: "Lacerations",
    description:
      "Hard core right with excellent, wide open tube time on offer as the tide floods the sharp, shallow reef. It’s a pitching, air-drop entry from the peak into a straight barrel section then a further sucky bowl as it approaches the channel marked by floating mooring lines that litter the bay. - Not easy, not long and not empty but it’s more challenging than neighbours Shipwrecks and Playgrounds. Occasionally the lefts are makeable and there are a few more, hollow, ridiculously shallow sections of reef nearby.",
    location: {
      coordinates: [-8.669333, 115.447555],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "Mid - High tides",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "E",
    swell_range: "0.91 - 3.0 m",
    rating: 4,
  },
  {
    name: "Padangbai",
    description:
      "Rare pointbreak set-up that needs a minor miracle to break well. Big S swells will wrap into the natural harbour around a headland and peel down the rocky reef for up to 150m at mid tides. - Problem is it needs W winds so you are unlikely to get the maxing swell in off-season. Long drive from the Bukit to look for protection, but it’s also the port for the Lombok ferry. Harbour water quality is rank from sewage and shipping.",
    location: {
      coordinates: [-8.530179, 115.509611],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "Mid tide",
    type: "Right-hand Pointbreak",
    seabed: "Uneven Reef",
    swell_direction: "S - SW",
    wind_direction: "W",
    swell_range: "0.91 - 3.6 m",
    rating: 5,
  },
  {
    name: "Playgrounds",
    description:
      "Nestled below cliffs offering good SE trade protection, this is the most user-friendly spot on Lembongan. It’s an easier paddle, being closer to shore, continues to break at lower tides, is a little bit deeper and offers more wall to work as opposed to the flat out barrels nearby. - The lefts are better with a few lip-bashing opportunities along a tapered wall, while the rights may pitch slightly, but fade quickly. Constant current to paddle against and the whole area is surrounded by a flotilla of cruisers, pontoons and leisure craft catering for the daily influx of Bali tourists.",
    location: {
      coordinates: [-8.675777, 115.445489],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Peaky Reef",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "E",
    swell_range: "0.60 - 2.4 m",
    rating: 3,
  },
  {
    name: "Sanur",
    description:
      "East coast super-right that guillotines mercilessly over a sharp slab of coral and pinwheels at mach one for hundreds of meters, before closing out on the inside dry reef. Unfortunately, Sanur Reef needs a serious swell to even begin breaking and wont get classic until it is well overhead, meaning Nusa Dua will be twice as big. - These huge swell conditions are rarer in the rainy season window when it’s offshore all day, so consistency drops further. On smaller days at lower tides, it breaks up into funnelling walls and long shut-down sections, but with more swell and tide, barrel predictability and length of ride improves dramatically. The inside section is often unmakeable on all but the biggest tides and days of the year and even then it will claim many victims. To say it is crowded is an understatement and some localism is likely.",
    location: {
      coordinates: [-8.706447, 115.26274],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "Mid - High tides",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "W",
    swell_range: "1.81 - 4.5 m",
    rating: 3,
  },
  {
    name: "Serangan",
    description:
      "Aka Turtle Island, this wet-season, east-facing, crowd-pleaser has something for everyone. Various lefts and rights peak up and pitch along a coral arc, ranging from softer shoulders to sucky shacks at all stages of the tide. - It’s strange to surf next to a massive rock jetty in Bali, but it has little affect on the waves, which hit the nicely oriented SE reef. Picks up plenty of swell and wind, drawing the crowds when the winds go W. Chilled out warung scene after clearing the security check to get on the island.",
    location: {
      coordinates: [-8.724645, 115.233504],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Peaky Reef",
    seabed: "Dead Coral",
    swell_direction: "S - W",
    wind_direction: "NW",
    swell_range: "0.64 - 4.5 m",
    rating: 2,
  },
  {
    name: "Shipwrecks - Lembongan",
    description:
      "Iconic Nusa Lembongan break marked by a rusting ships bow on long exposed reef platform. Non-existent at low tide, it starts breaking on the push to mid and sets start rearing up out of nowhere, peeling fast with a high, tight envelope and open shoulder. - Gets packed with surfers of all standards so snagging one and avoiding the scratchers is part of the deal. Getting the tide just right is the trick - mid on springs, higher on neaps. Watch out for scrap metal on the reef.",
    location: {
      coordinates: [-8.670818, 115.447664],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "Mid - High tides",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "E",
    swell_range: "0.91 - 3.0 m",
    rating: 3,
  },
  {
    name: "Sri Lanka",
    description:
      "Another quality wave that happens to be out the front of a Club Med. Off-season thrill a minute barrel when a big S-SW swell can wrap enough to spin down the short, straight coral platform that faces out to the NE. Sucky and round from the take-off to the kick-out shut down section but it has to to huge at Nusa Dua to be working well. - Its only a medium consistency spot so when it finally breaks, the locals descend. It’s possible to get a sneaky dry season session before the winds get up, but it may be warbly and unpredictable. There’s a few more corners of reef off the two islands (Nusa Dua) including a fast right and a shallow left.",
    location: {
      coordinates: [-8.787205, 115.228894],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "Low - Mid tides",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - SW",
    wind_direction: "SW",
    swell_range: "1.23 - 3.6 m",
    rating: 2,
  },
  {
    name: "Tanjung Sari",
    description:
      "Another hotel namesake line-up, where a big bend in the reef and a shallow channel provide both rights and lefts on either side. The rights can be picture perfect and peel for a good few hundred meters, providing the tide is lower and a good sized S-SW swell has already awoken Sanur. - Fast and sectiony is the vibe with scant coral cover, so each wave is a bit of a lottery. The lefts are easier, with a nice cover-up section before a short wall to the channel. Less crowded than Sanur, with an easy paddle out.",
    location: {
      coordinates: [-8.702441, 115.264935],
      region: "East Bali",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "NW",
    swell_range: "0.91 - 3.0 m",
    rating: 3,
  },
  {
    name: "Balangan",
    description:
      "Mirage-like left spinner that is often a sectiony close-out, depending on swell direction and tide height. More south in the swell may make it a bit peaky and parallel the reef more, but the real deal starts at overhead to double on a SW-WSW and 0.4-1.4m tide co-efficient. - First peak in front of the huge cave and undercut headland lets you in before having to race the speeding wall/tube down to the middle of the bay where the next pack are dropping into swinger sets and the wave that just outpaced you. Intermediates will deal with small swells, experts will charge the big days. Beautiful bay that is still managing to dodge major development.",
    location: {
      coordinates: [-8.791545, 115.12354],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - W",
    wind_direction: "SW",
    swell_range: "1.21 - 4.5 m",
    rating: 5,
  },
  {
    name: "Bingin",
    description:
      "Bingin is best described as short, sharp and shallow. The tight take-off zone at the end of the shelf beneath the impressive Bukit cliffs - It's always packed with goofy’s trying to nail the backdoor take-off and kick out before the dry reef shutdown a mere 50m later. All tides are do-able but high is fun and low springs is tempting fate.",
    location: {
      coordinates: [-8.805502, 115.113021],
      country: "Indonesia",
      region: "Bukit Peninsula",
    },
    best_tide: "Mid tide",
    type: "Left-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "SE",
    swell_range: "0.91 - 2.4 m",
    rating: 4,
  },
  {
    name: "Dreamland",
    description:
      "Beneath the shadow of the hulking, metropolis-scale hotel, golf course and condo development that sprawls across the Bukit from Balangan to Bingin, this once tranquil beach is now a tourist hotspot, with all mod cons, but very little soul. - The wave is well suited to the masses, offering a short left wall and shouldering right off the peak, over a sandy reef platform that is good and deep. Best at low tides, otherwise it is a fat shoredump. Uninspiring in small swell and sideshore winds, overhead conditions can barrel and challenge the constant crowd of mixed ability.",
    location: {
      coordinates: [-8.798772, 115.117709],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "Low - Mid tides",
    type: "Peaky Reef",
    seabed: "Uneven Reef",
    swell_direction: "S - W",
    wind_direction: "SE",
    swell_range: "0.91 - 2.4 m",
    rating: 5,
  },
  {
    name: "Green Ball",
    description:
      "Shares much with Nyang Nyang in that it is a swell-magnet right, horribly exposed to the trade winds and is at the bottom of a long, strenuous cliff path. If the wind isn’t on it, then a fast, punchy right sucks and spins off the reef, then walls up nicely before pitting on the last bit of reef before the channel. Home of the strongest current in Bali, which whips out to sea at various angles, making it hard to stay in position. - Lots of sets will catch you out and goofy’s will be tempted to try the left next door, but the rip and reef generally prevent it from being a touch on the right. Gets crowded because the morning glass window is short. It’s also a long hike from anywhere.",
    location: {
      coordinates: [-8.798772, 115.117709],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "Mid tide",
    type: "Right-hand Pointbreak",
    seabed: "Live Coral",
    swell_direction: "S - W",
    wind_direction: "NW",
    swell_range: "0.61 - 2.4 m",
    rating: 1,
  },
  {
    name: "Impossibles",
    description:
      "Becomes possible when a moderate to large, long period S swell sweeps past Ulu’s and Padang onto this long coral reef at low tide. There’s usually 3 sections separated by straight bits of reef, so getting caught behind the curtain is a given. Looks picture perfect from the cliffs, but the reality is it’s impossibly fast at some point in the wave. - Often gets a cluster at the tip of the wave over the channel from Padang and also down near the shelf at the end, but crowds aren’t a problem. Rideable at high when it gets warbly and full - low is the go for making it through the many barrel sections. Same paddle-out as Padang, while getting in over the sharp low tide reef is best done in booties.",
    location: {
      coordinates: [-8.807159, 115.108929],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - SW",
    wind_direction: "SE",
    swell_range: "1.21 - 3.6 m",
    rating: 4,
  },
  {
    name: "Nyang Nyang",
    description:
      "Bali’s “if it’s flat here, it’s flat everywhere” wave, located on the exposed south coast of the Bukit at the bottom of impressive cliffs. The long trail down keeps crowds away, but it’s more the fact winter and summer trades are basically onshore so early, late or a flukey N wind is the go. It also maxes out very quickly as the rights get overhead and the barrel sections become shut-down sections. - The reef is ragged and always seems closer than it actually is, but higher tides will see more water in the channel and more chance of the lefts showing as well. Strong rips, sneaker sets and plenty of sealife make this an advanced riders and fitness fanatics spot, considering the hellish walk back up. Beautiful, empty beach",
    location: {
      coordinates: [-8.843898, 115.110956],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Right-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - W",
    wind_direction: "NE",
    swell_range: "0.61 - 1.8 m",
    rating: 4,
  },
  {
    name: "Padang Padang",
    description:
      "Benchmark Bali barrel machine and all-round epic wave up there with the best lefts on the planet. Needs major swells to work as it is tucked into the peninsula below the cliffs where the SE trades blow dead offshore. The short 50m ride starts with a pitching lip take-off that sets up into a perfectly cylindrical wall, tempting experts to stand on the tail and see how deep they can push it. - Barrel intensity increases as it draws more water off the shallow coral and forces a speed run to the exit before the wave runs out of water. Best described as a bear pit, attracting the biggest and the best grizzlies from the local, expat and tourist hordes. Mayhem when it finally breaks, including drop-ins, snaking, glorious wipe-outs and only lucky experts will manage to get some scraps on a good day. Low is really sketchy, but there will still be someone out there risking their skin. Respect.",
    location: {
      coordinates: [-8.81094, 115.103717],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "Mid - High tides",
    type: "Left-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - SW",
    wind_direction: "SE",
    swell_range: "0.61 - 3.6 m",
    rating: 4,
  },
  {
    name: "Uluwatu",
    description:
      "Ultra-consistent “Ulu’s” is the focal point of Balinese surfing thanks to it’s ability to handle any size swell from small to large and spread the biggest of crowds across a wide playing field of reef. It’s sectioning, hollow walls always produce great waves, starting with faster, high tide, occasional tuck-ins up at Temples that lead down to the muscular, steep drops of The Peak that offers open face with hollow pockets directly in front of the famous cave. - It can sometimes jump the deadspot and barrel through to the start of the Racetrack, which twists and bends the wailing walls in an ever increasing race against the falling curtain. When swells exceed the 8-10ft mark, Outside Corner will rumble into life, with heavy, thick-lipped sections at low tide for experts on sturdy pintails. Main hazard is the crowd, followed by the reef and the constant higher tide sweep that requires aiming for a spot well south of the cave to come in. Blow it and you’ll paddle another 15min circuit.",
    location: {
      coordinates: [-8.814667, 115.0884],
      region: "Bukit Peninsula",
      country: "Indonesia",
    },
    best_tide: "All tides",
    type: "Left-hand Pointbreak",
    seabed: "Dead Coral",
    swell_direction: "S - W",
    wind_direction: "SE",
    swell_range: "0.61 - 4.5 m",
    rating: 4,
  },
];

function dbSeed() {
  spots.forEach((spot) => {
    Spot.create(spot).catch((error) => console.log(error));
  });
}
dbSeed();
