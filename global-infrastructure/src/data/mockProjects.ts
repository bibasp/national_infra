import { Project, ProjectStatus, ProjectType } from "@/types";

export const mockProjects: Project[] = [
  {
    id: "p1",
    name: "Shanghai-Jiangsu High-Speed Rail",
    description: "A high-speed rail line connecting Shanghai and Jiangsu province, designed to reduce travel time and boost economic connectivity.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 12500000000,
    budgetCurrency: "CNY",
    location: {
      country: "China",
      city: "Shanghai",
      coordinates: {
        lat: 31.2304,
        lng: 121.4737
      }
    },
    timeline: {
      start: "2022-03-15",
      estimatedCompletion: "2025-06-30"
    },
    stakeholders: ["China Railway Corporation", "Shanghai Municipal Government", "Jiangsu Provincial Government"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-11-12",
    uniqueFacts: [
      "Will reduce travel time between Shanghai and Nanjing from 3 hours to just 1 hour",
      "Designed to operate at speeds of up to 350 km/h",
      "Incorporates earthquake early warning systems",
      "Uses over 60% domestically produced components and technology"
    ]
  },
  {
    id: "p2",
    name: "Grand Paris Express",
    description: "The largest transport project in Europe, adding 200km of new metro lines to connect Paris suburbs.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 35200000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Paris",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    },
    timeline: {
      start: "2015-06-20",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Société du Grand Paris", "RATP", "Île-de-France Mobilités"],
    tags: ["metro", "public transport", "urban development"],
    lastUpdated: "2023-10-05",
    uniqueFacts: [
      "Will serve 2 million passengers daily",
      "Features 68 new stations, many designed by renowned architects",
      "Uses AI to optimize construction and minimize disruption",
      "Includes a 'cultural line' with art installations throughout stations"
    ]
  },
  {
    id: "p3",
    name: "Three Gorges Dam Maintenance",
    description: "Comprehensive maintenance and upgrade project for the world's largest hydroelectric power station.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.ENERGY,
    budget: 2800000000,
    budgetCurrency: "CNY",
    location: {
      country: "China",
      city: "Yichang",
      coordinates: {
        lat: 30.8262,
        lng: 111.0046
      }
    },
    timeline: {
      start: "2024-04-10",
      estimatedCompletion: "2026-09-30"
    },
    stakeholders: ["China Three Gorges Corporation", "National Energy Administration"],
    tags: ["dam", "hydroelectric", "maintenance", "energy"],
    lastUpdated: "2023-12-01"
  },
  {
    id: "p4",
    name: "Riyadh Metro",
    description: "A rapid transit system with six lines totaling 176 km and 85 stations across Riyadh.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 22500000000,
    budgetCurrency: "USD",
    location: {
      country: "Saudi Arabia",
      city: "Riyadh",
      coordinates: {
        lat: 24.7136,
        lng: 46.6753
      }
    },
    timeline: {
      start: "2014-04-03",
      estimatedCompletion: "2021-12-31",
      actualCompletion: "2022-03-15"
    },
    stakeholders: ["Arriyadh Development Authority", "FAST Consortium", "ANM Consortium"],
    tags: ["metro", "public transport", "urban mobility"],
    lastUpdated: "2022-04-10"
  },
  {
    id: "p5",
    name: "California High-Speed Rail",
    description: "High-speed rail system connecting Los Angeles and San Francisco with trains reaching speeds of 350 km/h.",
    status: ProjectStatus.HALTED,
    type: ProjectType.TRANSPORT,
    budget: 80000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Los Angeles",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    timeline: {
      start: "2015-01-06",
      estimatedCompletion: "2033-12-31"
    },
    stakeholders: ["California High-Speed Rail Authority", "Federal Railroad Administration"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-07-18"
  },
  {
    id: "p6",
    name: "Sydney Metro West",
    description: "New underground metro railway connecting Greater Parramatta with Sydney CBD.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 25000000000,
    budgetCurrency: "AUD",
    location: {
      country: "Australia",
      city: "Sydney",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    timeline: {
      start: "2020-11-15",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Transport for NSW", "Sydney Metro Authority"],
    tags: ["metro", "underground", "public transport"],
    lastUpdated: "2023-09-22"
  },
  {
    id: "p7",
    name: "Thames Tideway Tunnel",
    description: "A 25km tunnel to prevent millions of tonnes of sewage from entering the River Thames.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 4200000000,
    budgetCurrency: "GBP",
    location: {
      country: "United Kingdom",
      city: "London",
      coordinates: {
        lat: 51.5074,
        lng: -0.1278
      }
    },
    timeline: {
      start: "2016-03-15",
      estimatedCompletion: "2025-01-30"
    },
    stakeholders: ["Tideway", "Thames Water", "Environment Agency"],
    tags: ["sewage", "tunnel", "environmental", "water management"],
    lastUpdated: "2023-10-30"
  },
  {
    id: "p8",
    name: "Dubai Creek Tower",
    description: "A planned observation tower that would have become the world's tallest structure.",
    status: ProjectStatus.HALTED,
    type: ProjectType.BUILDINGS,
    budget: 1000000000,
    budgetCurrency: "USD",
    location: {
      country: "United Arab Emirates",
      city: "Dubai",
      coordinates: {
        lat: 25.1972,
        lng: 55.2744
      }
    },
    timeline: {
      start: "2016-10-10",
      estimatedCompletion: "2022-12-31"
    },
    stakeholders: ["Emaar Properties", "Dubai Holding"],
    tags: ["skyscraper", "observation tower", "tourism"],
    lastUpdated: "2023-02-15"
  },
  {
    id: "p9",
    name: "Mumbai Trans Harbour Link",
    description: "A 21.8 km sea bridge connecting Mumbai with Navi Mumbai, the longest sea bridge in India.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 180000000000,
    budgetCurrency: "INR",
    location: {
      country: "India",
      city: "Mumbai",
      coordinates: {
        lat: 18.9387,
        lng: 72.8353
      }
    },
    timeline: {
      start: "2017-03-01",
      estimatedCompletion: "2023-12-31",
      actualCompletion: "2024-01-15"
    },
    stakeholders: ["Mumbai Metropolitan Region Development Authority", "Japan International Cooperation Agency"],
    tags: ["bridge", "sea bridge", "transport", "connectivity"],
    lastUpdated: "2024-01-20"
  },
  {
    id: "p10",
    name: "Hornsea Project Two Offshore Wind Farm",
    description: "The world's largest offshore wind farm with a capacity of 1.4 GW.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 3000000000,
    budgetCurrency: "GBP",
    location: {
      country: "United Kingdom",
      city: "Yorkshire",
      coordinates: {
        lat: 53.7846,
        lng: 0.1361
      }
    },
    timeline: {
      start: "2018-05-22",
      estimatedCompletion: "2022-08-31",
      actualCompletion: "2022-08-17"
    },
    stakeholders: ["Ørsted", "UK Department for Business, Energy and Industrial Strategy"],
    tags: ["renewable energy", "wind farm", "offshore", "energy"],
    lastUpdated: "2022-09-05"
  },
  {
    id: "p11",
    name: "California High-Speed Rail",
    description: "First true high-speed rail system in the United States connecting Los Angeles and San Francisco.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 77300000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Los Angeles",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    timeline: {
      start: "2015-01-06",
      estimatedCompletion: "2033-12-31"
    },
    stakeholders: ["California High-Speed Rail Authority", "Federal Railroad Administration"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-07-18"
  },
  {
    id: "p12",
    name: "Gordie Howe International Bridge",
    description: "The longest cable-stayed bridge in North America connecting Detroit, Michigan and Windsor, Ontario.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 4800000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Detroit",
      coordinates: {
        lat: 42.3314,
        lng: -83.0458
      }
    },
    timeline: {
      start: "2018-10-05",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Windsor-Detroit Bridge Authority", "Michigan Department of Transportation", "Transport Canada"],
    tags: ["bridge", "international", "infrastructure", "border crossing"],
    lastUpdated: "2023-09-15"
  },
  {
    id: "p13",
    name: "Champlain Hudson Power Express",
    description: "A 339-mile underground and underwater transmission line delivering 100% renewable hydropower from Canada to New York City.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 6000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    timeline: {
      start: "2022-11-30",
      estimatedCompletion: "2026-05-15"
    },
    stakeholders: ["Hydro-Québec", "Transmission Developers Inc.", "New York State Energy Research and Development Authority"],
    tags: ["energy", "renewable", "transmission", "hydropower"],
    lastUpdated: "2023-12-10"
  },
  {
    id: "p14",
    name: "Site C Dam",
    description: "A major hydroelectric dam and generating station on the Peace River in northeastern British Columbia.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 16000000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Fort St. John",
      coordinates: {
        lat: 56.2500,
        lng: -120.8480
      }
    },
    timeline: {
      start: "2015-07-27",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["BC Hydro", "British Columbia Government", "Peace River Regional District"],
    tags: ["dam", "hydroelectric", "energy", "water management"],
    lastUpdated: "2023-11-05"
  },
  {
    id: "p15",
    name: "New International Airport Mexico City",
    description: "A modern international airport serving Mexico City with state-of-the-art facilities and capacity for 68 million passengers annually.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 13000000000,
    budgetCurrency: "USD",
    location: {
      country: "Mexico",
      city: "Mexico City",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      }
    },
    timeline: {
      start: "2019-04-29",
      estimatedCompletion: "2022-03-21",
      actualCompletion: "2022-03-21"
    },
    stakeholders: ["Grupo Aeroportuario de la Ciudad de México", "Federal Government of Mexico", "Secretariat of Communications and Transportation"],
    tags: ["airport", "transportation", "aviation", "infrastructure"],
    lastUpdated: "2022-05-15"
  },
  {
    id: "p16",
    name: "Second Avenue Subway Phase 2",
    description: "Extension of the New York City Subway line along Second Avenue, featuring the deepest subway station in NYC.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.TRANSPORT,
    budget: 6300000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7831,
        lng: -73.9712
      }
    },
    timeline: {
      start: "2024-12-31",
      estimatedCompletion: "2031-12-31"
    },
    stakeholders: ["Metropolitan Transportation Authority", "Federal Transit Administration", "New York City Department of Transportation"],
    tags: ["subway", "transportation", "urban development", "public transit"],
    lastUpdated: "2023-10-20"
  },
  {
    id: "p17",
    name: "Trans Mountain Pipeline Expansion",
    description: "A pipeline expansion project tripling the capacity of the existing Trans Mountain pipeline from Alberta to British Columbia.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.INDUSTRIAL,
    budget: 21400000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Edmonton",
      coordinates: {
        lat: 53.5461,
        lng: -113.4938
      }
    },
    timeline: {
      start: "2019-06-18",
      estimatedCompletion: "2023-09-30",
      actualCompletion: "2023-09-30"
    },
    stakeholders: ["Trans Mountain Corporation", "Government of Canada", "Alberta Energy Regulator"],
    tags: ["pipeline", "oil", "energy", "industrial"],
    lastUpdated: "2023-10-05"
  },
  {
    id: "p18",
    name: "I-69 Ohio River Crossing",
    description: "A major infrastructure project featuring twin cable-stayed bridges across the Ohio River between Kentucky and Indiana.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 2100000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Henderson",
      coordinates: {
        lat: 37.8361,
        lng: -87.5900
      }
    },
    timeline: {
      start: "2021-06-22",
      estimatedCompletion: "2027-12-31"
    },
    stakeholders: ["Kentucky Transportation Cabinet", "Indiana Department of Transportation", "Federal Highway Administration"],
    tags: ["bridge", "highway", "infrastructure", "interstate"],
    lastUpdated: "2023-08-15"
  },
  {
    id: "p19",
    name: "Puerto Vallarta Water Treatment",
    description: "A comprehensive water treatment facility improving water quality and supply for Puerto Vallarta and surrounding areas.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.WATER,
    budget: 450000000,
    budgetCurrency: "USD",
    location: {
      country: "Mexico",
      city: "Puerto Vallarta",
      coordinates: {
        lat: 20.6534,
        lng: -105.2253
      }
    },
    timeline: {
      start: "2018-03-15",
      estimatedCompletion: "2021-08-30",
      actualCompletion: "2021-08-30"
    },
    stakeholders: ["SEAPAL Vallarta", "Jalisco State Government", "National Water Commission"],
    tags: ["water", "treatment", "infrastructure", "sustainability"],
    lastUpdated: "2021-09-10"
  },
  {
    id: "p20",
    name: "Houston Ship Channel Expansion",
    description: "A major dredging and widening project creating the deepest channel on the US Gulf Coast to accommodate larger vessels.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.INDUSTRIAL,
    budget: 1000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Houston",
      coordinates: {
        lat: 29.7604,
        lng: -95.3698
      }
    },
    timeline: {
      start: "2020-05-03",
      estimatedCompletion: "2023-06-30",
      actualCompletion: "2023-06-30"
    },
    stakeholders: ["Port of Houston Authority", "US Army Corps of Engineers", "Texas Department of Transportation"],
    tags: ["port", "shipping", "dredging", "maritime"],
    lastUpdated: "2023-07-15"
  },
  {
    id: "p21",
    name: "California High-Speed Rail",
    description: "First true high-speed rail system in the United States connecting Los Angeles and San Francisco with trains reaching speeds of 350 km/h.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 77300000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Los Angeles",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    timeline: {
      start: "2015-01-06",
      estimatedCompletion: "2033-12-31"
    },
    stakeholders: ["California High-Speed Rail Authority", "Federal Railroad Administration"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-07-18"
  },
  {
    id: "p22",
    name: "Gordie Howe International Bridge",
    description: "The longest cable-stayed bridge in North America connecting Detroit, Michigan and Windsor, Ontario.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 4800000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Detroit",
      coordinates: {
        lat: 42.3314,
        lng: -83.0458
      }
    },
    timeline: {
      start: "2018-10-05",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Windsor-Detroit Bridge Authority", "Michigan Department of Transportation", "Transport Canada"],
    tags: ["bridge", "international", "infrastructure", "border crossing"],
    lastUpdated: "2023-09-15"
  },
  {
    id: "p23",
    name: "Champlain Hudson Power Express",
    description: "A 339-mile underground and underwater transmission line delivering 100% renewable hydropower from Canada to New York City.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 6000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    timeline: {
      start: "2022-11-30",
      estimatedCompletion: "2026-05-15"
    },
    stakeholders: ["Hydro-Québec", "Transmission Developers Inc.", "New York State Energy Research and Development Authority"],
    tags: ["energy", "renewable", "transmission", "hydropower"],
    lastUpdated: "2023-12-10"
  },
  {
    id: "p24",
    name: "Site C Dam",
    description: "A major hydroelectric dam and generating station on the Peace River in northeastern British Columbia.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 16000000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Fort St. John",
      coordinates: {
        lat: 56.2500,
        lng: -120.8480
      }
    },
    timeline: {
      start: "2015-07-27",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["BC Hydro", "British Columbia Government", "Peace River Regional District"],
    tags: ["dam", "hydroelectric", "energy", "water management"],
    lastUpdated: "2023-11-05"
  },
  {
    id: "p25",
    name: "Fehmarn Belt Fixed Link",
    description: "An 18 km immersed tunnel connecting Denmark and Germany, reducing Copenhagen-Hamburg travel time to 2.5 hours.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 10000000000,
    budgetCurrency: "EUR",
    location: {
      country: "Denmark",
      city: "Rødbyhavn",
      coordinates: {
        lat: 54.6517,
        lng: 11.3500
      }
    },
    timeline: {
      start: "2020-01-01",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Femern A/S", "German Federal Ministry of Transport", "Danish Government"],
    tags: ["tunnel", "infrastructure", "international", "rail", "road"],
    lastUpdated: "2023-10-15"
  },
  {
    id: "p26",
    name: "Grand Paris Express",
    description: "A 200 km automated metro network with 68 stations around Paris, featuring fully automated rubber-tyred trains.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 45000000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Paris",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    },
    timeline: {
      start: "2015-06-20",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Société du Grand Paris", "RATP", "Île-de-France Mobilités"],
    tags: ["metro", "public transport", "urban development"],
    lastUpdated: "2023-10-05"
  },
  {
    id: "p27",
    name: "Flamanville EPR Reactor",
    description: "A 1,650 MW nuclear power plant using third-generation pressurized water reactor technology.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 12700000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Flamanville",
      coordinates: {
        lat: 49.5356,
        lng: -1.8811
      }
    },
    timeline: {
      start: "2007-12-04",
      estimatedCompletion: "2023-12-31"
    },
    stakeholders: ["EDF", "French Government", "Nuclear Safety Authority"],
    tags: ["nuclear", "energy", "power plant", "reactor"],
    lastUpdated: "2023-08-22"
  },
  {
    id: "p28",
    name: "Grand Inga Dam",
    description: "A massive hydroelectric power project with 40,000 MW potential capacity that could power 40% of Africa.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.ENERGY,
    budget: 100000000000,
    budgetCurrency: "USD",
    location: {
      country: "Democratic Republic of Congo",
      city: "Inga",
      coordinates: {
        lat: -5.5243,
        lng: 13.6201
      }
    },
    timeline: {
      start: "2025-01-01",
      estimatedCompletion: "2050-12-31"
    },
    stakeholders: ["DRC Government", "African Development Bank", "World Bank"],
    tags: ["hydroelectric", "dam", "energy", "power"],
    lastUpdated: "2023-11-30"
  },
  {
    id: "p29",
    name: "Egypt's New Administrative Capital",
    description: "A massive 700 km² new capital city being built east of Cairo to relieve congestion.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.BUILDINGS,
    budget: 45000000000,
    budgetCurrency: "USD",
    location: {
      country: "Egypt",
      city: "New Capital",
      coordinates: {
        lat: 30.0176,
        lng: 31.7476
      }
    },
    timeline: {
      start: "2015-03-14",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Egyptian Government", "China State Construction Engineering", "Administrative Capital for Urban Development"],
    tags: ["urban development", "smart city", "government", "infrastructure"],
    lastUpdated: "2023-12-05"
  },
  {
    id: "p30",
    name: "Sydney Metro",
    description: "A 113km automated metro network with 46 stations across Sydney, featuring fully automated trains.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 25000000000,
    budgetCurrency: "AUD",
    location: {
      country: "Australia",
      city: "Sydney",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    timeline: {
      start: "2013-06-16",
      estimatedCompletion: "2032-12-31"
    },
    stakeholders: ["Transport for NSW", "Sydney Metro Authority", "New South Wales Government"],
    tags: ["metro", "public transport", "infrastructure", "urban mobility"],
    lastUpdated: "2023-09-22"
  },
  {
    id: "p31",
    name: "Snowy 2.0 Hydro",
    description: "A 2,000MW pumped hydro storage project with 27km tunnels and 2GW turbine upgrades.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 12000000000,
    budgetCurrency: "AUD",
    location: {
      country: "Australia",
      city: "Kosciuszko National Park",
      coordinates: {
        lat: -36.0048,
        lng: 148.3897
      }
    },
    timeline: {
      start: "2019-02-26",
      estimatedCompletion: "2027-12-31"
    },
    stakeholders: ["Snowy Hydro Limited", "Australian Government", "New South Wales Government"],
    tags: ["hydro", "energy storage", "renewable energy", "electricity"],
    lastUpdated: "2023-10-10"
  },
  {
    id: "p32",
    name: "Belo Monte Dam",
    description: "The world's 4th-largest hydroelectric plant with 11,233 MW capacity in the Amazon Basin.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 18500000000,
    budgetCurrency: "USD",
    location: {
      country: "Brazil",
      city: "Altamira",
      coordinates: {
        lat: -3.1369,
        lng: -51.8097
      }
    },
    timeline: {
      start: "2011-06-01",
      estimatedCompletion: "2019-11-27",
      actualCompletion: "2019-11-27"
    },
    stakeholders: ["Norte Energia", "Brazilian Government", "BNDES"],
    tags: ["hydroelectric", "dam", "power generation", "amazon"],
    lastUpdated: "2022-01-15",
    uniqueFacts: [
      "Can produce enough electricity to power 60 million people",
      "Required diverting 80% of the Xingu River's flow",
      "Utilizes a unique run-of-river design to reduce environmental impact",
      "Contains 18 generating units spread across two powerhouses"
    ]
  },
  {
    id: "p33",
    name: "Crossrail / Elizabeth Line",
    description: "A 118 km railway line through London connecting suburbs in the east and west with central London.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 18700000000,
    budgetCurrency: "GBP",
    location: {
      country: "United Kingdom",
      city: "London",
      coordinates: {
        lat: 51.5085,
        lng: -0.1257
      }
    },
    timeline: {
      start: "2009-05-15",
      estimatedCompletion: "2018-12-01",
      actualCompletion: "2022-05-24"
    },
    stakeholders: ["Transport for London", "Department for Transport", "Crossrail Ltd"],
    tags: ["rail", "underground", "public transport", "transit"],
    lastUpdated: "2023-01-30",
    uniqueFacts: [
      "Required excavating 42km of tunnels through London's complex underground environment",
      "Features 10 new stations with platforms twice the length of normal London Underground stations",
      "Uses custom-built 200m-long tunnel boring machines named after British women",
      "Construction uncovered over 10,000 archaeological artifacts spanning 8,000 years"
    ]
  },
  {
    id: "p34",
    name: "Beijing Daxing International Airport",
    description: "A massive star-shaped airport with the world's largest single-building terminal, designed to handle 100 million passengers annually.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 11500000000,
    budgetCurrency: "USD",
    location: {
      country: "China",
      city: "Beijing",
      coordinates: {
        lat: 39.5098,
        lng: 116.4105
      }
    },
    timeline: {
      start: "2014-12-26",
      estimatedCompletion: "2019-09-25",
      actualCompletion: "2019-09-25"
    },
    stakeholders: ["Civil Aviation Administration of China", "Beijing Municipal Government", "China Southern Airlines"],
    tags: ["airport", "aviation", "infrastructure", "transportation hub"],
    lastUpdated: "2022-05-10",
    uniqueFacts: [
      "Terminal designed by Zaha Hadid spans 700,000 square meters in a single structure",
      "Features five concourses radiating from a central hub with the shortest walk to any gate under 600m",
      "Built with 52,000 tons of steel, including custom curved sections for the flowing roof",
      "Integrates facial recognition for all passenger services from check-in to boarding"
    ]
  },
  {
    id: "p35",
    name: "Istanbul Airport",
    description: "The world's largest airport built from scratch, designed to handle 200 million passengers annually at full capacity.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 12000000000,
    budgetCurrency: "USD",
    location: {
      country: "Turkey",
      city: "Istanbul",
      coordinates: {
        lat: 41.2608,
        lng: 28.7416
      }
    },
    timeline: {
      start: "2015-05-01",
      estimatedCompletion: "2018-10-29",
      actualCompletion: "2018-10-29"
    },
    stakeholders: ["IGA Consortium", "Turkish Government", "General Directorate of State Airports Authority"],
    tags: ["airport", "aviation", "mega-project", "transportation hub"],
    lastUpdated: "2023-02-15",
    uniqueFacts: [
      "When fully completed will have six runways and capacity for 200 million passengers annually",
      "Terminal roof design inspired by Istanbul's historic architecture and Bosphorus waves",
      "Features the world's largest airport terminal under a single roof (1.4 million square meters)",
      "Implemented the world's largest airport IT network with over 3,000 flight information screens"
    ]
  },
  {
    id: "p36",
    name: "Burj Khalifa",
    description: "The world's tallest building at 828 meters, an iconic mixed-use skyscraper that redefined urban architecture.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.BUILDINGS,
    budget: 1500000000,
    budgetCurrency: "USD",
    location: {
      country: "United Arab Emirates",
      city: "Dubai",
      coordinates: {
        lat: 25.1972,
        lng: 55.2744
      }
    },
    timeline: {
      start: "2004-01-06",
      estimatedCompletion: "2010-01-04",
      actualCompletion: "2010-01-04"
    },
    stakeholders: ["Emaar Properties", "Samsung C&T", "Skidmore, Owings & Merrill"],
    tags: ["skyscraper", "mixed-use", "architecture", "iconic"],
    lastUpdated: "2022-03-15",
    uniqueFacts: [
      "Foundation required 192 piles extending 43 meters deep to support the structure",
      "Uses a mechanical system that collects condensation from the exterior for irrigation",
      "Contains enough concrete to build a sidewalk 2,065 kilometers long",
      "The spire can be seen from 95 kilometers away in clear weather"
    ]
  },
  {
    id: "p37",
    name: "ITER Fusion Reactor",
    description: "The world's largest nuclear fusion research facility aimed at demonstrating the feasibility of fusion power.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 22000000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Saint-Paul-lès-Durance",
      coordinates: {
        lat: 43.7083,
        lng: 5.7414
      }
    },
    timeline: {
      start: "2007-10-24",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["ITER Organization", "European Union", "United States", "China", "Russia", "India", "Japan", "South Korea"],
    tags: ["fusion", "energy", "research", "nuclear", "international"],
    lastUpdated: "2023-12-01",
    uniqueFacts: [
      "Will create plasma temperatures of 150 million °C, ten times hotter than the sun's core",
      "Uses the world's largest superconducting magnets to contain the plasma",
      "Tokamak vacuum vessel weighs 5,200 tons, more than the Eiffel Tower's metalwork",
      "The only multinational collaboration involving all major nuclear powers"
    ]
  },
  {
    id: "p38",
    name: "Inga 3 Dam",
    description: "A 11,000 MW hydroelectric dam on the Congo River, part of the Grand Inga scheme that could power half of Africa.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.ENERGY,
    budget: 14000000000,
    budgetCurrency: "USD",
    location: {
      country: "Democratic Republic of Congo",
      city: "Inga",
      coordinates: {
        lat: -5.5243,
        lng: 13.6201
      }
    },
    timeline: {
      start: "2024-01-01", 
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["DRC Government", "African Development Bank", "World Bank"],
    tags: ["hydroelectric", "dam", "energy", "power", "africa"],
    lastUpdated: "2023-11-30",
    uniqueFacts: [
      "Will harness the world's largest waterfall by volume (not height) with 42,000 cubic meters per second",
      "Designed to be the first phase of Grand Inga, potentially the world's largest hydropower scheme",
      "Could export electricity to Southern Africa Power Pool via 2,500km transmission lines",
      "Will use run-of-river technology to minimize environmental impact compared to traditional dams"
    ]
  },
  {
    id: "p39",
    name: "Mecca Grand Mosque Expansion",
    description: "Massive expansion of Islam's holiest site to accommodate up to 1.85 million worshippers simultaneously.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.BUILDINGS,
    budget: 10600000000,
    budgetCurrency: "USD",
    location: {
      country: "Saudi Arabia",
      city: "Mecca",
      coordinates: {
        lat: 21.4225,
        lng: 39.8262
      }
    },
    timeline: {
      start: "2011-08-19",
      estimatedCompletion: "2020-03-01",
      actualCompletion: "2021-07-15"
    },
    stakeholders: ["Saudi Binladin Group", "Saudi Government", "General Presidency for the Affairs of the Two Holy Mosques"],
    tags: ["religious", "cultural", "expansion", "architecture"],
    lastUpdated: "2022-02-22",
    uniqueFacts: [
      "Features the world's largest folding umbrellas (each 20m high) that provide shade during day and open at night",
      "Includes 680 escalators and 24 elevators specifically for people with disabilities",
      "Uses special heat-resistant white marble flooring that stays cool despite desert temperatures",
      "Air conditioning system can supply 8,000 liters of Zamzam water per second through drinking fountains"
    ]
  },
  {
    id: "p40",
    name: "Jakarta-Bandung High-Speed Rail",
    description: "Indonesia's first high-speed railway connecting Jakarta and Bandung with trains operating at 350 km/h.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 7900000000,
    budgetCurrency: "USD",
    location: {
      country: "Indonesia",
      city: "Jakarta",
      coordinates: {
        lat: -6.2088,
        lng: 106.8456
      }
    },
    timeline: {
      start: "2016-01-21",
      estimatedCompletion: "2021-12-31",
      actualCompletion: "2023-10-17"
    },
    stakeholders: ["PT Kereta Cepat Indonesia-China", "Indonesian Government", "China Railway"],
    tags: ["rail", "high-speed", "public transport", "BRI"],
    lastUpdated: "2023-10-20",
    uniqueFacts: [
      "Used China's CRRC Qingdao Sifang trains operating at 350 km/h",
      "Features 13 tunnels including a 1.8 km underwater tunnel beneath Jakarta Bay",
      "Required developing six new earthquake-resistant technologies for Indonesian conditions",
      "Reduced travel time from 3+ hours to 40 minutes between Indonesia's major economic centers"
    ]
  },
  {
    id: "p41",
    name: "Delhi-Mumbai Industrial Corridor",
    description: "A 1,500 km long industrial corridor with 8 smart cities, 9 industrial zones, and 3 ports connecting India's capital with its financial hub.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.INDUSTRIAL,
    budget: 100000000000,
    budgetCurrency: "USD",
    location: {
      country: "India",
      city: "Delhi",
      coordinates: {
        lat: 28.7041,
        lng: 77.1025
      }
    },
    timeline: {
      start: "2011-12-15",
      estimatedCompletion: "2035-12-31"
    },
    stakeholders: ["Delhi Mumbai Industrial Corridor Development Corporation", "Japan International Cooperation Agency", "Indian Government"],
    tags: ["industrial", "development", "smart cities", "economic corridor"],
    lastUpdated: "2023-05-30",
    uniqueFacts: [
      "Planned to create 25 million jobs and triple industrial output in the influence zone",
      "Will utilize a 4,000 MW dedicated power plant and a 2,700 km high-capacity gas pipeline",
      "Includes India's first maglev train system connecting the smart cities",
      "Plans to utilize 80% treated wastewater through advanced recycling systems"
    ]
  },
  {
    id: "p42",
    name: "New Suez Canal",
    description: "A major expansion of the Suez Canal creating a new 35 km parallel waterway to allow two-way traffic.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 8500000000,
    budgetCurrency: "USD",
    location: {
      country: "Egypt",
      city: "Suez",
      coordinates: {
        lat: 30.0742,
        lng: 32.5498
      }
    },
    timeline: {
      start: "2014-08-05",
      estimatedCompletion: "2015-08-06",
      actualCompletion: "2015-08-06"
    },
    stakeholders: ["Suez Canal Authority", "Egyptian Armed Forces", "Egyptian Government"],
    tags: ["canal", "maritime", "shipping", "waterway"],
    lastUpdated: "2023-01-15",
    uniqueFacts: [
      "Completed in just one year instead of the projected three years",
      "Used 45 dredging machines simultaneously to move 258 million cubic meters of sand",
      "Reduced waiting times from 18 to 3 hours and transit times from 18 to 11 hours",
      "Increased capacity from 49 to 97 ships per day, nearly doubling the canal's revenue"
    ]
  },
  {
    id: "p43",
    name: "Laos-China Railway",
    description: "A 1,035 km high-speed railway connecting Kunming, China to Vientiane, Laos as part of the Belt and Road Initiative.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 5986000000,
    budgetCurrency: "USD",
    location: {
      country: "Laos",
      city: "Vientiane",
      coordinates: {
        lat: 17.9757,
        lng: 102.6331
      }
    },
    timeline: {
      start: "2016-12-25",
      estimatedCompletion: "2021-12-03",
      actualCompletion: "2021-12-03"
    },
    stakeholders: ["China Railway Group", "Laos-China Railway Company", "Lao Government"],
    tags: ["rail", "high-speed", "BRI", "international"],
    lastUpdated: "2023-06-10",
    uniqueFacts: [
      "Features 167 bridges and 75 tunnels covering over 60% of the entire route",
      "Includes the 9.5 km Ban Sen tunnel, crossing through challenging karst formations",
      "Reduced travel time from 3 days to 3 hours between the two countries",
      "Built to Chinese Class 1 standards allowing speeds of up to 160 km/h"
    ]
  },
  {
    id: "p44",
    name: "Panama Canal Expansion",
    description: "A project that doubled the canal's capacity by adding a new set of locks to accommodate larger Post-Panamax ships.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 5250000000,
    budgetCurrency: "USD",
    location: {
      country: "Panama",
      city: "Panama City",
      coordinates: {
        lat: 9.0801,
        lng: -79.6845
      }
    },
    timeline: {
      start: "2007-09-03",
      estimatedCompletion: "2014-08-15",
      actualCompletion: "2016-06-26"
    },
    stakeholders: ["Panama Canal Authority", "Grupo Unidos por el Canal", "Panamanian Government"],
    tags: ["canal", "maritime", "shipping", "waterway"],
    lastUpdated: "2022-07-10",
    uniqueFacts: [
      "New locks use rolling gates instead of miter gates, reducing maintenance requirements",
      "Implemented innovative water-saving basins that reuse 60% of water in each lock cycle",
      "Required excavating 150 million cubic meters of material, enough to build 25 Empire State Buildings",
      "Designed to handle 98% of the world's shipping fleet vs 45% before expansion"
    ]
  },
  {
    id: "p45",
    name: "Hong Kong-Zhuhai-Macau Bridge",
    description: "The world's longest sea crossing at 55 km, connecting Hong Kong, Zhuhai, and Macau across the Pearl River Delta.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 20000000000,
    budgetCurrency: "USD",
    location: {
      country: "China",
      city: "Hong Kong",
      coordinates: {
        lat: 22.2944,
        lng: 113.9428
      }
    },
    timeline: {
      start: "2009-12-15",
      estimatedCompletion: "2016-12-31",
      actualCompletion: "2018-10-24"
    },
    stakeholders: ["Hong Kong-Zhuhai-Macao Bridge Authority", "Chinese Government", "Hong Kong Government", "Macau Government"],
    tags: ["bridge", "sea crossing", "infrastructure", "transportation"],
    lastUpdated: "2022-11-05",
    uniqueFacts: [
      "Includes a 6.7 km underwater tunnel accessed by two artificial islands",
      "Built to withstand typhoons with winds up to 340 km/h and magnitude 8 earthquakes",
      "Used 400,000 tons of steel, enough to build 60 Eiffel Towers",
      "Features boundary crossing facilities spanning 150 hectares on artificial islands"
    ]
  },
  {
    id: "p46",
    name: "Marmaray Tunnel",
    description: "The world's first undersea tunnel connecting two continents, running beneath the Bosphorus Strait in Istanbul.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 4500000000,
    budgetCurrency: "USD",
    location: {
      country: "Turkey",
      city: "Istanbul",
      coordinates: {
        lat: 41.0082,
        lng: 29.0111
      }
    },
    timeline: {
      start: "2004-05-09",
      estimatedCompletion: "2013-10-29",
      actualCompletion: "2019-03-12"
    },
    stakeholders: ["Turkish Ministry of Transport", "Japan International Cooperation Agency", "Turkish State Railways"],
    tags: ["tunnel", "rail", "undersea", "public transport"],
    lastUpdated: "2022-03-10",
    uniqueFacts: [
      "Built 60 meters below sea level in a highly active seismic zone",
      "Uses special earthquake-resistant immersed tube sections that can move with seismic waves",
      "Discovered remains of a 4th-century Byzantine harbor during excavation, delaying construction",
      "Connects the historic Silk Road by rail for the first time in history"
    ]
  },
  {
    id: "p47",
    name: "Kusile Power Station",
    description: "A 4,800 MW coal-fired power plant using clean coal technologies including flue gas desulfurization.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 15500000000,
    budgetCurrency: "USD",
    location: {
      country: "South Africa",
      city: "Witbank",
      coordinates: {
        lat: -25.9295,
        lng: 29.0749
      }
    },
    timeline: {
      start: "2008-04-01",
      estimatedCompletion: "2024-12-31"
    },
    stakeholders: ["Eskom", "South African Government", "Hitachi Power Africa"],
    tags: ["power plant", "coal", "electricity", "energy"],
    lastUpdated: "2023-08-15",
    uniqueFacts: [
      "First power plant in Africa to implement flue gas desulfurization technology",
      "Cooling towers are 220m tall, among the tallest structures in South Africa",
      "Will use air-cooled condensers instead of water cooling to conserve water resources",
      "Coal conveyors total 18km in length, transporting 8,000 tons of coal per hour"
    ]
  },
  {
    id: "p48",
    name: "Blue Nile Renaissance Dam",
    description: "Africa's largest hydroelectric dam with 6,450 MW capacity on the Blue Nile River.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 4800000000,
    budgetCurrency: "USD",
    location: {
      country: "Ethiopia",
      city: "Benishangul-Gumuz",
      coordinates: {
        lat: 11.2153,
        lng: 35.0937
      }
    },
    timeline: {
      start: "2011-04-02",
      estimatedCompletion: "2022-07-22",
      actualCompletion: "2023-02-20"
    },
    stakeholders: ["Ethiopian Electric Power Corporation", "Ethiopian Government", "Salini Impregilo"],
    tags: ["dam", "hydroelectric", "water management", "energy"],
    lastUpdated: "2023-03-10",
    uniqueFacts: [
      "Reservoir capacity of 74 billion cubic meters, equivalent to 1.5 years of Blue Nile flow",
      "Primarily financed through government bonds purchased by Ethiopian citizens",
      "Dam wall contains 10.5 million cubic meters of concrete, three times that of Three Gorges Dam",
      "Constructed on a foundation of volcanic rock to ensure stability"
    ]
  },
  {
    id: "p49",
    name: "Bogibeel Bridge",
    description: "India's longest rail-cum-road bridge at 4.94 km across the Brahmaputra River.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 800000000,
    budgetCurrency: "USD",
    location: {
      country: "India",
      city: "Dibrugarh",
      coordinates: {
        lat: 27.4728,
        lng: 94.2951
      }
    },
    timeline: {
      start: "2002-04-21",
      estimatedCompletion: "2009-04-21",
      actualCompletion: "2018-12-25"
    },
    stakeholders: ["Indian Railways", "Indian Government", "Hindustan Construction Company"],
    tags: ["bridge", "rail", "road", "infrastructure"],
    lastUpdated: "2022-05-15",
    uniqueFacts: [
      "First fully welded bridge in India using European welding standards for greater earthquake resistance",
      "Reduced travel distance between Assam and Arunachal Pradesh from 500km to 100km",
      "Built using special composite welded steel truss to withstand extreme temperatures (-5°C to 45°C)",
      "Has strategic military importance, allowing rapid movement of troops to the Chinese border"
    ]
  },
  {
    id: "p50",
    name: "Karahnjukar Hydropower Project",
    description: "Iceland's largest hydroelectric project with 690 MW capacity, powering aluminum smelting operations.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 1500000000,
    budgetCurrency: "USD",
    location: {
      country: "Iceland",
      city: "Eastern Region",
      coordinates: {
        lat: 64.9312,
        lng: -15.8267
      }
    },
    timeline: {
      start: "2003-01-15",
      estimatedCompletion: "2007-11-30",
      actualCompletion: "2008-03-01"
    },
    stakeholders: ["Landsvirkjun", "Icelandic Government", "Alcoa"],
    tags: ["hydroelectric", "dam", "energy", "industrial"],
    lastUpdated: "2022-01-10",
    uniqueFacts: [
      "Required building the largest concrete-faced rock fill dam in Europe",
      "Involved diverting glacial rivers through 73 km of tunnels driven through solid rock",
      "Excavated material from tunnels would fill 180 Olympic-sized swimming pools",
      "Designed to withstand outburst floods from sub-glacial volcanic eruptions"
    ]
  },
  {
    id: "p51",
    name: "Diamer-Bhasha Dam",
    description: "A 4,500 MW hydroelectric dam on the Indus River in Pakistan with a 272-meter-high roller-compacted concrete dam.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 14000000000,
    budgetCurrency: "USD",
    location: {
      country: "Pakistan",
      city: "Gilgit-Baltistan",
      coordinates: {
        lat: 35.5212,
        lng: 73.7905
      }
    },
    timeline: {
      start: "2020-07-15",
      estimatedCompletion: "2029-12-31"
    },
    stakeholders: ["Water and Power Development Authority", "Pakistani Government", "China Gezhouba Group"],
    tags: ["dam", "hydroelectric", "water management", "energy"],
    lastUpdated: "2023-09-25",
    uniqueFacts: [
      "Will create a reservoir with 8.1 million acre-feet of water storage capacity",
      "Located in a highly seismic zone, requiring special earthquake-resistant design features",
      "Will extend the lifespan of downstream Tarbela Dam by 35 years by trapping sediment",
      "Expected to generate 18 billion units of electricity annually"
    ]
  }
]
