export interface ProductItem {
  id: string;
  name: string;
  category: "Earth Clamp Testers" | "Phase & Power Meters" | "Digital Multimeters" | "Soil Resistivity Testers" | "Insulation & Grounding";
  code: string;
  model: string;
  sourceDoc: string;
  pdfUrl: string;
  rdsoCompliant: boolean;
  description: string;
  keyHighlights: string[];
  specs: {
    resistanceRange?: string;
    currentRange?: string;
    voltageRange?: string;
    phaseRange?: string;
    powerRange?: string;
    frequencyRange?: string;
    jawSize?: string;
    display?: string;
    dataStorage?: string;
    safetyStandard?: string;
    powerSupply?: string;
    accuracy?: string;
  };
  features: string[];
  image: string;
}

export const COMPANY_DETAILS = {
  name: "RailJet Co., Ltd.",
  japaneseName: "レールジェット株式会社",
  tagline: "High-Precision Japanese Railway Testing Instruments & Electrical Safety Solutions",
  taglineJp: "高精度 鉄道試験計測機器・接地抵抗測定ソリューション",
  milestone: "¥180+ Billion",
  milestoneDesc: "Achieving an international landmark of over ¥180 Billion in precision measurement instrumentation orders, trusted across global transit, high-speed rail, and power substation networks.",
  address: "2-chome, Chiyoda-ku, Tokyo 101-0048, Japan",
  addressJp: "〒101-0048 東京都千代田区2丁目",
  phone: "+81 3-5829-9180",
  whatsapp: "+81358299180",
  emails: {
    staff: "info@railjet-global.jp",
    sales: "sales@railjet-global.jp",
  },
  website: "https://railjetpvtltd.com",
  mainDistributor: {
    name: "Rudra Rail Services",
    role: "Authorized Global Marketing & Distribution Partner (Mkt By)",
    address: "Global Transit Procurement & Distribution Division",
    description: "Official authorized marketing, supply, and procurement partner for RailJet Japan precision testing instruments across worldwide transit networks.",
  },
  manufacturingUnit: {
    name: "RAILJET Headquarters & R&D Plant",
    japaneseName: "RAILJET 東京本社・研究開発センター",
    address: "2-chome, Chiyoda-ku, Tokyo 101-0048, Japan",
    origin: "Made in Japan (日本品質)",
  },
  clientSectors: [
    { name: "High-Speed Rail & Shinkansen Networks", hub: "Traction Power, OHE & Substation Earth Pits", status: "Primary Standard" },
    { name: "Metro & Urban Transit Systems", hub: "Depots, 750V/1500V DC Traction Systems", status: "Approved Vendor" },
    { name: "Power Grid & EHV Substations", hub: "Grounding Grids, Surge Earth & Switchyards", status: "Certified Standard" },
    { name: "Heavy Rolling Stock & Loco Sheds", hub: "Inrush Current, Motors & Traction Inverters", status: "Active Supplier" },
    { name: "Renewable Energy & Solar Mega-Grids", hub: "Soil Resistivity Surveys & Earth Loop Arrays", status: "Active Deployment" },
    { name: "Heavy Industrial Engineering Plants", hub: "Precision Plant Grounding & Insulation Safety", status: "Certified Vendor" },
  ],
  stats: [
    { label: "Global Order Scale", value: "¥180B+", subtext: "International Transit Pipeline" },
    { label: "Engineering Standard", value: "JIS / IEC", subtext: "Japanese Industrial Standards" },
    { label: "Flagship Instruments", value: "6 Core", subtext: "Precision Grounding & Phase" },
    { label: "Testing Reliability", value: "99.99%", subtext: "Tokyo Calibration Certified" },
  ],
};

export interface GlobalSupplierItem {
  id: number;
  country: string;
  flag: string;
  supplierName: string;
  region: string;
  badge?: string;
}

export const GLOBAL_SUPPLIERS_LIST: GlobalSupplierItem[] = [
  { id: 1, country: "USA", flag: "🇺🇸", supplierName: "TEquipment", region: "North America", badge: "Authorized Distributor" },
  { id: 2, country: "China", flag: "🇨🇳", supplierName: "Shenzhen Test Instrument", region: "East Asia", badge: "Technical Partner" },
  { id: 3, country: "Hong Kong", flag: "🇭🇰", supplierName: "RS Hong Kong", region: "Asia Pacific", badge: "Direct Procurement" },
  { id: 4, country: "South Korea", flag: "🇰🇷", supplierName: "Eleparts", region: "East Asia", badge: "Channel Partner" },
  { id: 5, country: "Taiwan", flag: "🇹🇼", supplierName: "Evencat", region: "East Asia", badge: "Authorized Supplier" },
  { id: 6, country: "Singapore", flag: "🇸🇬", supplierName: "Unitest Instruments", region: "Southeast Asia", badge: "ASEAN Hub" },
  { id: 7, country: "Thailand", flag: "🇹🇭", supplierName: "Measuretronix", region: "Southeast Asia", badge: "Regional Distributor" },
  { id: 8, country: "Vietnam", flag: "🇻🇳", supplierName: "Peritec", region: "Southeast Asia", badge: "Authorized Supplier" },
  { id: 9, country: "Germany", flag: "🇩🇪", supplierName: "Conrad Electronic", region: "Europe (EU)", badge: "EU Direct Supplier" },
  { id: 10, country: "Malaysia", flag: "🇲🇾", supplierName: "RS Malaysia", region: "Southeast Asia", badge: "Authorized Partner" },
  { id: 11, country: "India", flag: "🇮🇳", supplierName: "Rudra Rail Services", region: "South Asia", badge: "Primary Mkt & Supply Partner" },
  { id: 12, country: "Mexico", flag: "🇲🇽", supplierName: "Grainger México", region: "North America", badge: "Industrial Supply" },
  { id: 13, country: "Netherlands", flag: "🇳🇱", supplierName: "RS Netherlands", region: "Europe (EU)", badge: "European Logistics Hub" },
  { id: 14, country: "UK", flag: "🇬🇧", supplierName: "Caltest Instruments", region: "United Kingdom", badge: "Calibration & Supply" },
  { id: 15, country: "Indonesia", flag: "🇮🇩", supplierName: "PT Best Instrument", region: "Southeast Asia", badge: "Regional Supplier" },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "prod-1",
    name: "RailJet Clamp Earth Resistance Tester (Model: R1+ / XCRK272)",
    category: "Earth Clamp Testers",
    code: "RJ-R1+ / XCRK272",
    model: "Model: R1+ (XCRK272 Series)",
    sourceDoc: "RALIJET CLAMP EARTH RESISTANCE MENU.pdf",
    pdfUrl: "/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf",
    rdsoCompliant: true,
    description: "High-precision clamp ground loop resistance & leakage current tester engineered with authentic Japanese precision technology (Made in Japan). Manufactured by RAILJET Tokyo for railway traction & signaling earth pits.",
    keyHighlights: [
      "Model: R1+ (Made in Japan / 日本製)",
      "Marketed by: Rudra Rail Services",
      "Resistance: 0.010Ω - 1200Ω",
      "Leakage Current: 0.00mA - 20.0A",
    ],
    specs: {
      resistanceRange: "0.010Ω - 1200Ω (Resolution: 0.001Ω, Accuracy: ±1% + 0.01Ω)",
      currentRange: "0.00mA - 20.0A (Resolution: 0.01mA, Accuracy: ±2.5% + 1mA)",
      jawSize: "55mm × 32mm Long Jaw",
      display: "4-Digit High-Contrast LCD (Black Screen Design, 46mm × 29mm)",
      dataStorage: "300 Groups with 'MEM' Storage and 'FULL' Overflow Indication",
      safetyStandard: "IEC61010-1 (CAT III 300V, CAT IV 150V), JIS C 1302, IEC61557-1",
      powerSupply: "DC 6V (4 × AA Alkaline Dry Batteries)",
      accuracy: "High Accuracy ±1% with Auto Interference Noise Detection",
    },
    features: [
      "Precision engineered & manufactured by RAILJET (2-chome, Chiyoda-ku, Tokyo 101-0048, Japan)",
      "Marketed globally by Rudra Rail Services",
      "Automatic identification of interference signals with 'NOISE' prompt",
      "Sound & light alarm prompt when exceeding threshold",
      "Non-contact loop resistance testing without driving auxiliary earth spikes",
    ],
    image: "/images/ClampEarthResistanceTeste.png",
  },
  {
    id: "prod-2",
    name: "ES3022 Ground Pile Clamp Earth Resistance & Soil Resistivity Tester",
    category: "Earth Clamp Testers",
    code: "RJ-ES3022",
    model: "ES3022 Series",
    sourceDoc: "ES3022 Series user manual.pdf",
    pdfUrl: "/docs/ES3022%20Series%20user%20manual.pdf",
    rdsoCompliant: true,
    description: "Multi-functional 2.4-inch color LCD ground pile clamp tester supporting Clamp Method, 3-Wire / 4-Wire Method, Selection Method, Soil Resistivity (Wenner 4-pole), AC Current, and Ground Voltage testing with Bluetooth App & USB PC software.",
    keyHighlights: [
      "2.4-inch Color LCD Display",
      "Dual Clamp & 3/4-Wire Methods",
      "Soil Resistivity: 0.00Ωm ~ 9999kΩm",
      "Bluetooth Mobile App + USB Port",
    ],
    specs: {
      resistanceRange: "0.01Ω - 30.0kΩ (Clamp method: 0.02Ω-2000Ω; 3/4-Wire: 0.01Ω-30kΩ)",
      currentRange: "0.100mA - 60.0A AC (Resolution: 0.001mA, True RMS)",
      voltageRange: "1.00V - 600V AC Ground Voltage (Resolution: 0.01V)",
      jawSize: "68mm Extra-Large Clamp Aperture",
      display: "2.4-inch Color TFT LCD Screen (46mm × 29mm)",
      dataStorage: "500 Groups Data Memory with USB PC Upload & Analysis",
      safetyStandard: "IEC61010-1 (CAT III 300V, CAT IV 600V, Pollution Degree 2)",
      powerSupply: "DC 3.7V High-Capacity Rechargeable Lithium Battery",
      accuracy: "±2% rdg ± 0.1Ω (Fast Digital Filter Technology)",
    },
    features: [
      "Bluetooth mobile connectivity (PIN: 123456) for remote live field monitoring",
      "Selection method testing without tripping parallel grounding systems",
      "Winner 4-pole method soil resistivity calculation (ρ = 2πaR)",
      "Rugged shock-proof, dust-proof & moisture-proof industrial enclosure",
    ],
    image: "/images/ClampEarthResistanceTeste.png",
  },
  {
    id: "prod-3",
    name: "FR207 Series 1000A Clamp Digital Multimeter (FR207C / FR207D)",
    category: "Digital Multimeters",
    code: "RJ-FR207D",
    model: "FR207C / FR207D (Catalog Page 17)",
    sourceDoc: "catalog 20260729压缩.pdf (Page 17)",
    pdfUrl: "/docs/catalog%2020260729%E5%8E%8B%E7%BC%A9.pdf",
    rdsoCompliant: true,
    description: "Heavy-duty 1000A industrial True RMS clamp multimeter with 1700V DC high-voltage capability, LowZ anti-ghost voltage, 60MΩ resistance, 60mF capacitance, 20MHz frequency, and temperature measurement for railway electrical substations.",
    keyHighlights: [
      "AC/DC Current: 1000A True RMS",
      "DC High Voltage: up to 1700V (FR207D)",
      "LowZ 100V ~ 1000V Anti-Ghosting",
      "Temperature: 1000°C / 1832°F",
    ],
    specs: {
      currentRange: "AC / DC Current: 60A / 600A / 1000A (Inrush Current 1000A)",
      voltageRange: "DC High Voltage: 1000V (FR207C) / 1700V (FR207D); AC Voltage: 1000V",
      resistanceRange: "600Ω / 6kΩ / 60kΩ / 600kΩ / 6MΩ / 60MΩ (Accuracy ±1%)",
      frequencyRange: "10Hz - 20MHz Bandwidth (ACA 60Hz, ACV 1kHz)",
      jawSize: "42mm Clamp Jaw Opening",
      display: "6000 Counts High-Definition Display with Backlight",
      safetyStandard: "CAT III 1000V, CAT IV 600V Inrush Peak Certified",
      accuracy: "DC Voltage ±0.5%+5, AC Voltage ±0.5%+5, Current ±2%+5",
    },
    features: [
      "NCV / LIVE Non-Contact Voltage Detector with Red LED Flash & Buzzer",
      "Inrush Current capture for locomotive traction motors & compressors",
      "60mF Large Capacitance & Diode/Continuity measurement",
      "Max / Min / Zero / Relative (Rel) one-touch operational modes",
    ],
    image: "/images/product_fr207.png",
  },
  {
    id: "prod-4",
    name: "ES2010E+ Smart Double Clamp Phase Volt-Ampere Meter",
    category: "Phase & Power Meters",
    code: "RJ-ES2010E+",
    model: "ES2010E+ (Catalog Page 39)",
    sourceDoc: "catalog 20260729压缩.pdf (Page 39)",
    pdfUrl: "/docs/catalog%2020260729%E5%8E%8B%E7%BC%A9.pdf",
    rdsoCompliant: true,
    description: "Intelligent handheld dual-clamp phase meter measuring two-phase AC voltage, current, phase sequence (0.0°~360.0°), active/reactive/apparent power, and power factor (-1~+1) with 72×55mm color LCD & USB data management.",
    keyHighlights: [
      "Phase Angle Range: 0.0° ~ 360.0°",
      "Voltage AC: 0.00V ~ 600V (0.01V res)",
      "Current AC: 0.0mA ~ 20.0A (0.1mA res)",
      "Power: Active, Reactive & Apparent",
    ],
    specs: {
      voltageRange: "AC 0.00V ~ 600V (Resolution: 0.01V, Accuracy: ±1.5%rdg+3dgt)",
      currentRange: "AC 0.0mA ~ 20.0A (Resolution: 0.1mA, Accuracy: ±1.5%rdg+3dgt)",
      phaseRange: "0.0° ~ 360.0° (Resolution: 0.1°, Accuracy: ±1°)",
      powerRange: "Active: 0.0W~12kW; Reactive: 0.0var~12kvar; Apparent: 0.0VA~12kVA",
      frequencyRange: "45.00Hz ~ 65.00Hz (Resolution: 0.01Hz, Accuracy: ±0.1Hz)",
      display: "72mm × 55mm Wide Color LCD Display",
      dataStorage: "500 Groups (Stores 5000 parameter points) with USB export",
      safetyStandard: "IEC61010-1 CAT III 600V, IEC61326, IP45 Protection",
      powerSupply: "3.65V Rechargeable Lithium Battery",
    },
    features: [
      "Checks transformer wiring groups, CT differential protection & phase relationships",
      "Distinguishes inductive vs capacitive circuits and inspects watt-hour meters",
      "Silicone protective shock-absorbing sleeve & IP45 dust protection",
      "USB interface with PC analytics software for historical test reports",
    ],
    image: "/images/product_es2010e.png",
  },
  {
    id: "prod-5",
    name: "ES3020 Multi-Functional Soil Resistivity & Precision Grounding Tester",
    category: "Soil Resistivity Testers",
    code: "RJ-ES3020",
    model: "ES3020 / ES3021",
    sourceDoc: "ES3022 Series user manual.pdf",
    pdfUrl: "/docs/ES3022%20Series%20user%20manual.pdf",
    rdsoCompliant: true,
    description: "Engineered for comprehensive soil resistivity surveys and grounding grid verification along dedicated freight corridors and railway substations with Wenner 4-pole calculation and auxiliary grounding spike compensation.",
    keyHighlights: [
      "Soil Resistivity: 0.00Ωm ~ 9999kΩm",
      "Ground Resistance: 0.01Ω ~ 30kΩ",
      "4-Pole Wenner Method (ρ = 2πaR)",
      "High Interference Rejection (40A/m)",
    ],
    specs: {
      resistanceRange: "0.01Ω - 30.0kΩ (Resolution: 0.01Ω, Accuracy: ±2%rdg±0.2Ω)",
      currentRange: "AC 0.100mA - 60.0A (True RMS)",
      voltageRange: "1.00V - 600V AC Earth Voltage",
      display: "Backlit Digital LCD Display with Bargraph Indicator",
      dataStorage: "500 Sets Test Memory with USB Interface",
      safetyStandard: "IEC61010-1, IEC61557-1, CAT IV 600V",
      powerSupply: "DC 3.7V Lithium Battery with Power Indicator",
    },
    features: [
      "Automatic calculation of soil resistivity ρ based on electrode spacing distance",
      "Two-point, three-point, and four-point ground measurement algorithms",
      "High dielectric withstand voltage: AC 3700V/rms between circuit and case",
      "Dedicated field accessories with 4 auxiliary ground stakes and wire reels",
    ],
    image: "/images/ClampEarthResistanceTeste.png",
  },
  {
    id: "prod-6",
    name: "FR3010E / FR3020 Advanced Grounding & Insulation Resistance Tester",
    category: "Insulation & Grounding",
    code: "RJ-FR3010E",
    model: "FR3010E / FR3020 Series",
    sourceDoc: "catalog 20260729压缩.pdf",
    pdfUrl: "/docs/catalog%2020260729%E5%8E%8B%E7%BC%A9.pdf",
    rdsoCompliant: true,
    description: "Heavy-duty comprehensive earth ground resistance and high-voltage insulation tester designed for railway signaling relays, telecom towers, track equipment enclosures, and traction transformer grounding verification.",
    keyHighlights: [
      "Comprehensive Loop & Grid Testing",
      "Fast Filtering Microprocessor Control",
      "Real-Time Overload & Surge Protection",
      "Built for Harsh Railway Environments",
    ],
    specs: {
      resistanceRange: "0.01Ω - 2000Ω Loop & Grid Ground Resistance",
      voltageRange: "AC 0.0V - 600V Line Voltage",
      currentRange: "0.00mA - 30.0A AC Current",
      display: "High-Resolution Dual-Display LCD Screen with Backlight",
      dataStorage: "500 Groups Data Memory with Date/Time Stamp",
      safetyStandard: "IEC61010-1 CAT III 600V, IEC61557-1",
      powerSupply: "High Capacity Rechargeable Power Cell",
    },
    features: [
      "Real-time dual display of resistance and leakage current synchronously",
      "Automatic alarm warning when exceeding configured safety thresholds",
      "Anti-drop, waterproof, and oil-resistant sealed rugged enclosure",
      "USB data link with PC management software for printing official test certificates",
    ],
    image: "/images/product_fr207.png",
  },
];

export interface GalleryImageItem {
  id: number;
  title: string;
  category: "Instruments" | "Testing & Calibration" | "Production & QA" | "Packaging & Field Kits";
  description: string;
  image: string;
}

export const GALLERY_IMAGES: GalleryImageItem[] = [
  {
    id: 1,
    title: "RailJet Clamp Earth Resistance Tester - Front Display",
    category: "Instruments",
    description: "High-contrast LCD digital screen measuring ground loop resistance with automatic interference filter.",
    image: "/images/imagesj/railjet_gallery_1.jpeg",
  },
  {
    id: 2,
    title: "Precision Calibration & Quality Verification",
    category: "Testing & Calibration",
    description: "Rigorous laboratory testing ensuring 99.99% measurement accuracy under JIS C 1302 standards.",
    image: "/images/imagesj/railjet_gallery_2.jpeg",
  },
  {
    id: 3,
    title: "Heavy-Duty Transit Testing Equipment",
    category: "Instruments",
    description: "Engineered for high-voltage railway substations, traction lines, and signaling earth pits.",
    image: "/images/imagesj/railjet_gallery_3.jpeg",
  },
  {
    id: 4,
    title: "Digital Multi-Parameter Meter Display",
    category: "Instruments",
    description: "Real-time voltage, current, and phase sequence measurement in a compact ergonomic enclosure.",
    image: "/images/imagesj/railjet_gallery_4.jpeg",
  },
  {
    id: 5,
    title: "Precision Sensor Clamp & Measuring Jaws",
    category: "Instruments",
    description: "High-permeability alloy magnetic core designed for non-contact loop resistance testing.",
    image: "/images/imagesj/railjet_gallery_5.jpeg",
  },
  {
    id: 6,
    title: "Industrial Field Protective Casing & Accessories",
    category: "Packaging & Field Kits",
    description: "Shock-proof, dust-proof transport kit with test leads, calibration loops, and user manuals.",
    image: "/images/imagesj/railjet_gallery_6.jpeg",
  },
  {
    id: 7,
    title: "Production Line Calibration & Assembly",
    category: "Production & QA",
    description: "Tokyo precision manufacturing line ensuring flawless build quality and rugged durability.",
    image: "/images/imagesj/railjet_gallery_7.jpeg",
  },
  {
    id: 8,
    title: "Earth Resistance Testing in Operational Field",
    category: "Testing & Calibration",
    description: "Direct on-site railway grounding measurement without driving auxiliary ground spikes.",
    image: "/images/imagesj/railjet_gallery_8.jpeg",
  },
  {
    id: 9,
    title: "Smart Clamp Meter with Bluetooth & Data Logging",
    category: "Instruments",
    description: "Synchronous data storage for up to 500 test groups with wireless mobile application sync.",
    image: "/images/imagesj/railjet_gallery_9.jpeg",
  },
  {
    id: 10,
    title: "True RMS High-Voltage Clamp Multimeter",
    category: "Instruments",
    description: "Capable of measuring up to 1700V DC and 1000A AC/DC inrush current for traction motors.",
    image: "/images/imagesj/railjet_gallery_10.jpeg",
  },
  {
    id: 11,
    title: "Soil Resistivity & Ground Pile Testing System",
    category: "Instruments",
    description: "Wenner 4-pole method soil resistivity calculation for mega-power grids and rail transit.",
    image: "/images/imagesj/railjet_gallery_11.jpeg",
  },
  {
    id: 12,
    title: "High-Resolution Dual Display Interface",
    category: "Instruments",
    description: "Simultaneous resistance and leakage current reading with backlight for low-light environments.",
    image: "/images/imagesj/railjet_gallery_12.jpeg",
  },
  {
    id: 13,
    title: "Comprehensive Ground Grid Diagnostics",
    category: "Testing & Calibration",
    description: "Fast digital filtering for strong anti-interference performance in 500kV substations.",
    image: "/images/imagesj/railjet_gallery_13.jpeg",
  },
  {
    id: 14,
    title: "Phase Sequence & Power Factor Analyzer",
    category: "Instruments",
    description: "Smart 360° phase angle analysis for CT differential protection and transformer wiring.",
    image: "/images/imagesj/railjet_gallery_14.jpeg",
  },
  {
    id: 15,
    title: "Standard Hard-Shell Protective Flight Case",
    category: "Packaging & Field Kits",
    description: "Heavy-duty aluminum-reinforced transport case built for rough transit field engineering.",
    image: "/images/imagesj/railjet_gallery_15.jpeg",
  },
  {
    id: 16,
    title: "Laboratory Calibration & Certificate Compliance",
    category: "Production & QA",
    description: "JIS C 1302 and IEC 61010-1 compliance testing with official calibration verification.",
    image: "/images/imagesj/railjet_gallery_16.jpeg",
  },
  {
    id: 17,
    title: "RailJet Flagship Series Complete Showcase",
    category: "Instruments",
    description: "Complete lineup of precision Japanese electrical testing and measurement instruments.",
    image: "/images/imagesj/railjet_gallery_17.jpeg",
  },
];

