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
  name: "RailJet Pvt. Ltd.",
  tagline: "Pioneering Railway Testing Instruments, Earth Resistance & Electrical Power Solutions",
  milestone: "₹1,000+ Crore",
  milestoneDesc: "On the verge of achieving a landmark ₹1000 Crore business milestone, reflecting relentless customer trust, innovation and high-precision testing instruments for Indian Railways.",
  address: "1119/05, Amarsanda, Tehsil Fatehpur, Kursi Road, Barabanki, Lucknow, Uttar Pradesh - 225302",
  phone: "+91 7084711000",
  whatsapp: "+917084711000",
  emails: {
    staff: "railjetpvtltd@gmail.com",
    sales: "railjetsales@gmail.com",
  },
  website: "https://railjetpvtltd.com",
  mainDistributor: {
    name: "Rudra Rail Services",
    role: "Main Marketing & Distribution Partner (Mkt By)",
    address: "1119/05, Amarsanda, Tehsil Fatehpur, Kursi Road, Barabanki, Uttar Pradesh",
    description: "Primary authorized marketing & supply partner for Indian Railways procurement and railway divisional supplies.",
  },
  manufacturingUnit: {
    name: "RAILJET (Tokyo, Japan)",
    address: "2-chome, Chiyoda-ku, Tokyo 101-0048, Japan",
    origin: "Made in Japan",
  },
  operatingZones: [
    { name: "Northern Railways (NR)", hub: "New Delhi / Lucknow", status: "Primary Supplier" },
    { name: "Western Railways (WR)", hub: "Mumbai / Vadodara", status: "Approved Vendor" },
    { name: "Eastern Railways (ER)", hub: "Kolkata / Asansol", status: "Approved Vendor" },
    { name: "Southern Railways (SR)", hub: "Chennai / Perambur", status: "Active Procurement" },
    { name: "Central Railways (CR)", hub: "Mumbai CSMT / Pune", status: "Approved Vendor" },
    { name: "North Central Railways (NCR)", hub: "Prayagraj / Kanpur", status: "Active Supplier" },
  ],
  stats: [
    { label: "Business Trajectory", value: "₹1,000+ Cr", subtext: "Contract & Order Pipeline" },
    { label: "Railway Divisions", value: "8+", subtext: "Pan-India Zonal Network" },
    { label: "Testing Instruments", value: "6 Core", subtext: "IEC / RDSO Compliant" },
    { label: "Testing Reliability", value: "99.9%", subtext: "High Precision Calibration" },
  ],
};

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
    description: "High-precision clamp ground loop resistance & leakage current tester engineered with Japanese precision technology. Marketed in India by Rudra Rail Services for Indian Railways traction & signalling earth pits.",
    keyHighlights: [
      "Model: R1+ (Made in Japan)",
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
      safetyStandard: "IEC61010-1 (CAT III 300V, CAT IV 150V), IEC61010-031, IEC61557-1",
      powerSupply: "DC 6V (4 × AA Alkaline Dry Batteries)",
      accuracy: "High Accuracy ±1% with Auto Interference Noise Detection",
    },
    features: [
      "Precision engineered by RAILJET (2-chome, Chiyoda-ku, Tokyo, Japan)",
      "Marketed by Rudra Rail Services (1119/05, Amarsanda, Tehsil Fatehpur, Kursi Road, Barabanki)",
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
