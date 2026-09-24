export interface ProductItem {
  id: string;
  name: string;
  category: "Earth Clamp Testers" | "Phase & Power Meters" | "Digital Multimeters" | "Soil Resistivity Testers" | "Insulation & Grounding";
  code: string;
  model: string;
  sourceDoc: string;
  pdfUrl: string;
  isCatalogAvailable?: boolean;
  jisCompliant: boolean;
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
  tagline: "High-Precision Japanese Industrial & Transit Testing Instruments & Electrical Safety Solutions",
  taglineJp: "高精度 試験計測機器・接地抵抗測定ソリューション",
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
    { label: "Industry Legacy", value: "20–25 Yrs", subtext: "Continuous Engineering Excellence" },
    { label: "Global Order Scale", value: "¥180B+", subtext: "International Transit Pipeline" },
    { label: "Tokyo Engineering Team", value: "20+", subtext: "Precision Specialists & R&D Staff" },
    { label: "Testing Reliability", value: "99.99%", subtext: "Tokyo Calibration Certified" },
  ],
};

export interface EmployeeItem {
  id: number;
  nameEn: string;
  nameJp: string;
  role: string;
  department: string;
  email: string;
  experience: string;
}

export const JAPAN_EMPLOYEES: EmployeeItem[] = [
  {
    id: 1,
    nameEn: "Kenji Takahashi",
    nameJp: "高橋 健二",
    role: "Chief Executive Officer & Founder",
    department: "Executive Management",
    email: "k.takahashi@railjet-global.jp",
    experience: "25 Years Exp."
  },
  {
    id: 2,
    nameEn: "Hiroshi Tanaka",
    nameJp: "田中 浩",
    role: "Chief Technical Officer (CTO)",
    department: "R&D & Engineering",
    email: "h.tanaka@railjet-global.jp",
    experience: "24 Years Exp."
  },
  {
    id: 3,
    nameEn: "Daiki Sato",
    nameJp: "佐藤 大樹",
    role: "Head of Hardware Architecture",
    department: "R&D & Hardware",
    email: "d.sato@railjet-global.jp",
    experience: "22 Years Exp."
  },
  {
    id: 4,
    nameEn: "Kazuki Watanabe",
    nameJp: "渡辺 一樹",
    role: "Lead Sensor Design Engineer",
    department: "Precision Sensor Lab",
    email: "k.watanabe@railjet-global.jp",
    experience: "20 Years Exp."
  },
  {
    id: 5,
    nameEn: "Takashi Ito",
    nameJp: "伊藤 貴司",
    role: "Principal Calibration Specialist",
    department: "JIS Quality Lab",
    email: "t.ito@railjet-global.jp",
    experience: "21 Years Exp."
  },
  {
    id: 6,
    nameEn: "Naoki Yamamoto",
    nameJp: "山本 直樹",
    role: "High-Voltage Isolation Engineer",
    department: "Safety & Compliance",
    email: "n.yamamoto@railjet-global.jp",
    experience: "19 Years Exp."
  },
  {
    id: 7,
    nameEn: "Shinji Nakamura",
    nameJp: "中村 慎二",
    role: "Embedded Firmware Architect",
    department: "Firmware & Software",
    email: "s.nakamura@railjet-global.jp",
    experience: "18 Years Exp."
  },
  {
    id: 8,
    nameEn: "Yuki Kobayashi",
    nameJp: "小林 勇樹",
    role: "DSP & Noise Filtering Specialist",
    department: "R&D & Signal Processing",
    email: "y.kobayashi@railjet-global.jp",
    experience: "16 Years Exp."
  },
  {
    id: 9,
    nameEn: "Kenta Kato",
    nameJp: "加藤 健太",
    role: "Microprocessor & PCB Engineer",
    department: "Hardware Engineering",
    email: "k.kato@railjet-global.jp",
    experience: "15 Years Exp."
  },
  {
    id: 10,
    nameEn: "Ryota Yoshida",
    nameJp: "吉田 亮太",
    role: "Production & Cleanroom Manager",
    department: "Tokyo Manufacturing Plant",
    email: "r.yoshida@railjet-global.jp",
    experience: "20 Years Exp."
  },
  {
    id: 11,
    nameEn: "Akira Yamada",
    nameJp: "山田 彰",
    role: "QA & Reliability Lead",
    department: "Quality Assurance",
    email: "a.yamada@railjet-global.jp",
    experience: "17 Years Exp."
  },
  {
    id: 12,
    nameEn: "Souta Sasaki",
    nameJp: "佐々木 颯太",
    role: "Environmental Testing Specialist",
    department: "Environmental & Stress QA",
    email: "s.sasaki@railjet-global.jp",
    experience: "14 Years Exp."
  },
  {
    id: 13,
    nameEn: "Masato Yamaguchi",
    nameJp: "山口 正人",
    role: "Senior Metrology Technician",
    department: "Tokyo Calibration Lab",
    email: "m.yamaguchi@railjet-global.jp",
    experience: "19 Years Exp."
  },
  {
    id: 14,
    nameEn: "Tatsuya Matsumoto",
    nameJp: "松本 達也",
    role: "Grounding Diagnostics Engineer",
    department: "Transit & Infrastructure Applications",
    email: "t.matsumoto@railjet-global.jp",
    experience: "15 Years Exp."
  },
  {
    id: 15,
    nameEn: "Yuto Inoue",
    nameJp: "井上 悠斗",
    role: "Bluetooth Telematics Engineer",
    department: "Smart IoT & Cloud Tech",
    email: "y.inoue@railjet-global.jp",
    experience: "12 Years Exp."
  },
  {
    id: 16,
    nameEn: "Shohei Kimura",
    nameJp: "木村 翔平",
    role: "Substation Systems Application Lead",
    department: "Field Technical Support",
    email: "s.kimura@railjet-global.jp",
    experience: "16 Years Exp."
  },
  {
    id: 17,
    nameEn: "Kenichi Hayashi",
    nameJp: "林 健一",
    role: "International Supply Chain Director",
    department: "Global Operations",
    email: "k.hayashi@railjet-global.jp",
    experience: "22 Years Exp."
  },
  {
    id: 18,
    nameEn: "Keisuke Shimizu",
    nameJp: "清水 圭介",
    role: "Global Procurement & Logistics Head",
    department: "Logistics & Supply Chain",
    email: "k.shimizu@railjet-global.jp",
    experience: "18 Years Exp."
  },
  {
    id: 19,
    nameEn: "Haruto Saito",
    nameJp: "斉藤 陽斗",
    role: "International Client Solutions Manager",
    department: "Global Sales & Support",
    email: "h.saito@railjet-global.jp",
    experience: "14 Years Exp."
  },
  {
    id: 20,
    nameEn: "Tomoya Mori",
    nameJp: "森 智也",
    role: "Compliance & Standards Officer (JIS/IEC)",
    department: "Regulatory Compliance",
    email: "t.mori@railjet-global.jp",
    experience: "21 Years Exp."
  },
];

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
    id: "prod-rr",
    name: "RailJet Clamp Earth Resistance Tester (Model: RR)",
    category: "Earth Clamp Testers",
    code: "RJ-RR",
    model: "Model: RR",
    sourceDoc: "RALIJET CLAMP EARTH RESISTANCE MENU.pdf",
    pdfUrl: "/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "High-precision clamp ground loop resistance tester engineered with authentic Japanese precision technology (Made in Japan) for transit traction, power grid substations, and signaling earth pits.",
    keyHighlights: [
      "Model: RR",
      "Resistance: 0.010Ω - 200Ω",
      "Loop Earth Resistance Testing",
      "Marketed by: Rudra Rail Services",
    ],
    specs: {
      resistanceRange: "0.010Ω - 200Ω (Resolution: 0.001Ω, Accuracy: ±1% + 0.01Ω)",
      jawSize: "55mm × 32mm Long Jaw",
      display: "4-Digit High-Contrast LCD Screen (46mm × 29mm)",
      dataStorage: "300 Groups with 'MEM' Storage Indication",
      safetyStandard: "IEC61010-1 (CAT III 300V, CAT IV 150V), JIS C 1302",
      powerSupply: "DC 6V (4 × AA Alkaline Dry Batteries)",
      accuracy: "High Accuracy ±1% with Auto Noise Suppression",
    },
    features: [
      "Non-contact loop resistance testing without driving auxiliary earth spikes",
      "Sound & light alarm prompt when exceeding configured threshold",
      "Automatic identification of interference signals with 'NOISE' prompt",
      "Precision engineered & manufactured by RAILJET Tokyo, Japan",
    ],
    image: "/images/RR.png",
  },
  {
    id: "prod-rr-plus",
    name: "RailJet Clamp Earth Resistance & Current Tester (Model: RR+)",
    category: "Earth Clamp Testers",
    code: "RJ-RR+",
    model: "Model: RR+",
    sourceDoc: "RALIJET CLAMP EARTH RESISTANCE MENU.pdf",
    pdfUrl: "/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "Dual-capability clamp ground loop resistance and AC leakage current tester with fast digital filtering and noise suppression for substation earth grid monitoring.",
    keyHighlights: [
      "Model: RR+",
      "Resistance: 0.010Ω - 200Ω",
      "Leakage Current: 0.00mA - 20.0A",
      "Auto Noise Filter Detection",
    ],
    specs: {
      resistanceRange: "0.010Ω - 200Ω (Resolution: 0.001Ω, Accuracy: ±1% + 0.01Ω)",
      currentRange: "0.00mA - 20.0A (Resolution: 0.01mA, Accuracy: ±2.5% + 1mA)",
      jawSize: "55mm × 32mm Long Jaw",
      display: "4-Digit High-Contrast LCD Screen",
      dataStorage: "300 Groups Data Memory",
      safetyStandard: "IEC61010-1 CAT III 300V, CAT IV 150V",
      powerSupply: "DC 6V (4 × AA Alkaline Dry Batteries)",
      accuracy: "±1% Resistance / ±2.5% Current Accuracy",
    },
    features: [
      "Simultaneous ground loop resistance and leakage current monitoring",
      "Automatic identification of interference signals with 'NOISE' prompt",
      "Low battery indicator and auto power-off after 5 minutes idle",
      "Marketed globally by Rudra Rail Services",
    ],
    image: "/images/RR+.png",
  },
  {
    id: "prod-r1",
    name: "RailJet Clamp Earth Resistance & Leakage Tester (Model: R1)",
    category: "Earth Clamp Testers",
    code: "RJ-R1",
    model: "Model: R1",
    sourceDoc: "RALIJET CLAMP EARTH RESISTANCE MENU.pdf",
    pdfUrl: "/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "Extended-range clamp ground resistance and leakage current tester with 0.010Ω - 500Ω loop measurement range designed for transit OHE and traction substations.",
    keyHighlights: [
      "Model: R1",
      "Resistance: 0.010Ω - 500Ω",
      "Leakage Current: 0.00mA - 20.0A",
      "High Noise Immunity",
    ],
    specs: {
      resistanceRange: "0.010Ω - 500Ω (Resolution: 0.001Ω, Accuracy: ±1% + 0.01Ω)",
      currentRange: "0.00mA - 20.0A (Resolution: 0.01mA, Accuracy: ±2.5% + 1mA)",
      jawSize: "55mm × 32mm Long Jaw",
      display: "4-Digit High-Definition LCD Display",
      dataStorage: "300 Groups with 'MEM' Indication",
      safetyStandard: "IEC61010-1 CAT III 300V, CAT IV 150V, JIS C 1302",
      powerSupply: "DC 6V (4 × AA Alkaline Dry Batteries)",
      accuracy: "High Accuracy ±1% with Digital Filtering",
    },
    features: [
      "High noise immunity in electrified transit overhead line environments",
      "Audible and visual threshold limit alarms",
      "Data hold and historical record recall functions",
      "Marketed by Rudra Rail Services with Tokyo calibration standards",
    ],
    image: "/images/R1.png",
  },
  {
    id: "prod-r1-plus",
    name: "RailJet Clamp Earth Resistance Tester (Model: R1+)",
    category: "Earth Clamp Testers",
    code: "RJ-R1+",
    model: "Model: R1+",
    sourceDoc: "RALIJET CLAMP EARTH RESISTANCE MENU.pdf",
    pdfUrl: "/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf",
    isCatalogAvailable: true,
    jisCompliant: true,
    description: "Flagship high-precision clamp ground loop resistance & leakage current tester engineered with authentic Japanese precision technology (Made in Japan) with luxury high-contrast black screen display.",
    keyHighlights: [
      "Model: R1+ (Made in Japan / 日本製)",
      "Black Screen Luxury Display",
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
    id: "prod-r2",
    name: "RailJet Ground Pile Clamp Earth Resistance Tester (Model: R2)",
    category: "Earth Clamp Testers",
    code: "RJ-R2",
    model: "Model: R2",
    sourceDoc: "ES3022 Series user manual.pdf",
    pdfUrl: "/docs/ES3022%20Series%20user%20manual.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "Multi-functional 2.4-inch color LCD ground pile clamp tester supporting Clamp Method, 2/3/4-Wire Method, AC Current, and Ground Voltage testing with USB PC software.",
    keyHighlights: [
      "Model: R2",
      "2.4-inch Color LCD Display",
      "Dual Clamp & 3/4-Wire Methods",
      "USB PC Interface & Software",
    ],
    specs: {
      resistanceRange: "0.01Ω - 2000Ω (Clamp method: 0.02Ω-2000Ω; 3/4-Wire: 0.01Ω-30kΩ)",
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
      "2.4-inch color TFT screen with rich diagnostic telemetry",
      "Supports both clamp loop testing and auxiliary electrode 3/4-wire methods",
      "USB connection with dedicated Windows PC analysis suite",
      "Rugged shock-proof, dust-proof & moisture-proof industrial enclosure",
    ],
    image: "/images/R2.png",
  },
  {
    id: "prod-r3",
    name: "RailJet Multi-Functional Soil Resistivity & Grounding Tester (Model: R3)",
    category: "Soil Resistivity Testers",
    code: "RJ-R3",
    model: "Model: R3",
    sourceDoc: "ES3022 Series user manual.pdf",
    pdfUrl: "/docs/ES3022%20Series%20user%20manual.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "Advanced ground pile clamp & soil resistivity tester supporting Wenner 4-pole calculation, 2/3/4-wire earth resistance, selection method, and leakage current measurement.",
    keyHighlights: [
      "Model: R3",
      "Soil Resistivity: 0.00Ωm ~ 9999kΩm",
      "4-Pole Wenner Method (ρ = 2πaR)",
      "Selection Method Testing",
    ],
    specs: {
      resistanceRange: "0.01Ω - 30.0kΩ (Resolution: 0.01Ω, Accuracy: ±2%rdg±0.2Ω)",
      currentRange: "AC 0.100mA - 60.0A (True RMS)",
      voltageRange: "1.00V - 600V AC Earth Voltage",
      display: "2.4-inch Color TFT LCD Screen with Bargraph",
      dataStorage: "500 Sets Test Memory with USB Interface",
      safetyStandard: "IEC61010-1, IEC61557-1, CAT IV 600V",
      powerSupply: "DC 3.7V Lithium Battery with Power Indicator",
      accuracy: "±2% rdg ± 0.2Ω",
    },
    features: [
      "Automatic calculation of soil resistivity ρ based on electrode spacing distance",
      "Selection method testing without tripping parallel grounding systems",
      "Wenner 4-pole method soil resistivity calculation (ρ = 2πaR)",
      "Dedicated field accessories with 4 auxiliary ground stakes and wire reels",
    ],
    image: "/images/R3.png",
  },
  {
    id: "prod-r3-plus",
    name: "RailJet Advanced Smart Soil Resistivity & Clamp Tester (Model: R3+)",
    category: "Soil Resistivity Testers",
    code: "RJ-R3+",
    model: "Model: R3+",
    sourceDoc: "ES3022 Series user manual.pdf",
    pdfUrl: "/docs/ES3022%20Series%20user%20manual.pdf",
    isCatalogAvailable: false,
    jisCompliant: true,
    description: "Top-tier flagship smart clamp ground pile & soil resistivity tester featuring integrated Bluetooth Mobile App connectivity, USB PC software, Wenner 4-pole calculation, and FFT digital filtering.",
    keyHighlights: [
      "Model: R3+ (Flagship)",
      "Bluetooth Mobile App + USB Port",
      "Soil Resistivity: 0.00Ωm ~ 9999kΩm",
      "Dual Clamp & 3/4-Wire Precision",
    ],
    specs: {
      resistanceRange: "0.01Ω - 30.0kΩ (Dual clamp non-contact & 4-wire precision)",
      currentRange: "0.100mA - 60.0A AC (Resolution: 0.001mA, True RMS)",
      voltageRange: "1.00V - 600V AC Ground Voltage (Resolution: 0.01V)",
      jawSize: "68mm Extra-Large Clamp Aperture",
      display: "2.4-inch Color TFT LCD Screen (46mm × 29mm)",
      dataStorage: "500 Groups with Real-Time Waveform & App Sync",
      safetyStandard: "IEC61010-1 (CAT III 300V, CAT IV 600V), IP54 Enclosure",
      powerSupply: "DC 3.7V High-Capacity Rechargeable Lithium Battery",
      accuracy: "±2% rdg ± 0.1Ω (FFT Filter Technology)",
    },
    features: [
      "Bluetooth mobile connectivity (PIN: 123456) for remote live field monitoring & cloud reporting",
      "Wenner 4-pole method soil resistivity calculation (ρ = 2πaR)",
      "Selection method testing without disconnecting parallel ground cables",
      "Engineered for high-speed rail corridors, metro systems & EHV substations",
    ],
    image: "/images/R3+.png",
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
    description: "Engineered for high-voltage substations, traction lines, and signaling earth pits.",
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
    description: "Direct on-site grounding measurement without driving auxiliary ground spikes.",
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

