export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  msrp?: number;
  vendorId: string;
  image?: string;
  rating?: number;
  specs?: {
    core?: { [key: string]: any };
    certifications?: { [key: string]: any };
    dimensions?: { [key: string]: any };
    useCases?: { [key: string]: any };
    compatibility?: { [key: string]: any };
    warranty?: { [key: string]: any };
    delivery?: { [key: string]: any };
    aiScore?: { [key: string]: any };
  };
  isAIRecommended?: boolean;
  isPremium?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  aiGenerated?: boolean;
  tags?: string[];
}

const existingProducts: Product[] = [
  // IV Therapy Equipment
  {
    id: "p1",
    name: "Advanced IV Therapy Drip Stand",
    category: "IV Therapy Equipment",
    description: "Heavy-duty IV stand with multi-line ports and stabilizer base.",
    price: 499,
    msrp: 599,
    vendorId: "ven-elite",
    image: "/placeholder.jpg",
    rating: 4.5,
    isNew: true,
    specs: {
      core: {
        material: "Medical-Grade Stainless Steel",
        baseDiameter: "24 inches",
        heightAdjustment: "48 to 85 inches",
      },
      certifications: {
        fda: "Class I Medical Device",
        iso13485: "Certified",
      },
      dimensions: {
        weight: "18 lbs",
        shippingDimensions: "48 x 12 x 12 inches",
      },
      warranty: {
        frame: "5 years",
        components: "1 year",
      },
    },
  },
  {
    id: "p2",
    name: "Precision Infusion Pump",
    category: "IV Therapy Equipment",
    description: "Digital infusion pump for accurate dosage delivery.",
    price: 1299,
    vendorId: "ven-bioregen",
    image: "/placeholder.jpg",
    rating: 4.8,
    isTrending: true,
  },
  // HRT & Hormone Diagnostics
  {
    id: "p3",
    name: "Hormone Panel Analyzer",
    category: "HRT & Hormone Diagnostics",
    description: "Compact, in-clinic blood analyzer for key hormone markers.",
    price: 7500,
    msrp: 8000,
    vendorId: "ven-elite",
    image: "/placeholder.jpg",
    rating: 4.7,
    isAIRecommended: true,
  },
  {
    id: "p4",
    name: "Testosterone Assay Kits (100 pack)",
    category: "HRT & Hormone Diagnostics",
    description: "High-sensitivity ELISA kits for testosterone measurement.",
    price: 850,
    vendorId: "ven-vitalscan",
    image: "/placeholder.jpg",
    rating: 4.2,
  },
  // Regenerative Devices
  {
    id: "p5",
    name: "Acoustic Wave Therapy Device",
    category: "Regenerative Devices",
    description: "Non-invasive treatment for ED and musculoskeletal conditions.",
    price: 14995,
    msrp: 16500,
    vendorId: "ven-cryomax",
    image: "/placeholder.jpg",
    rating: 4.9,
    isAIRecommended: true,
    isPremium: true,
    specs: {
      core: {
        technology: "Electrohydraulic Spark Gap",
        frequency: "1-22 Hz",
        energyFluxDensity: "0.01 - 0.55 mJ/mm²",
      },
      certifications: {
        ceMark: "Approved",
      },
      useCases: {
        primary: "Erectile Dysfunction, Peyronie's Disease",
        secondary: "Plantar Fasciitis, Tendinopathies",
      },
      compatibility: {
        software: "Standalone OS with touch screen",
      },
      aiScore: {
        dataIntegration: "7/10",
        automationPotential: "5/10",
      },
    },
  },
  {
    id: "p6",
    name: "PRP Centrifuge System",
    category: "Regenerative Devices",
    description: "High-speed centrifuge for preparing platelet-rich plasma.",
    price: 3200,
    vendorId: "ven-bioregen",
    image: "/placeholder.jpg",
    rating: 4.6,
    isTrending: true,
  },
  // Cryotherapy & Recovery
  {
    id: "p7",
    name: "Whole Body Cryo Chamber",
    category: "Cryotherapy & Recovery",
    description: "State-of-the-art nitrogen-free cryotherapy chamber.",
    price: 45000,
    vendorId: "ven-cryomax",
    image: "/placeholder.jpg",
    rating: 5.0,
    isPremium: true,
    isTrending: true,
  },
  {
    id: "p8",
    name: "Localized Cryo Unit",
    category: "Cryotherapy & Recovery",
    description: "Handheld device for targeted cold therapy treatments.",
    price: 6800,
    vendorId: "ven-revivex",
    image: "/placeholder.jpg",
    rating: 4.7,
  },
  // Clinic Software Tools
  {
    id: "p9",
    name: "Novalyte EMR/PM Suite",
    category: "Clinic Software Tools",
    description: "Integrated EMR and Practice Management software for men's health.",
    price: 299,
    vendorId: "ven-novalyte",
    image: "/placeholder.jpg",
    rating: 4.9,
    isAIRecommended: true,
    isPremium: true,
  },
  {
    id: "p10",
    name: "AI-Powered Patient Triage",
    category: "Clinic Software Tools",
    description: "Automated patient intake and symptom analysis tool.",
    price: 149,
    vendorId: "ven-novalyte",
    image: "/placeholder.jpg",
    rating: 4.5,
    isAIRecommended: true,
  },
  // Supplements & Wellness
  {
    id: "p11",
    name: "Pharmaceutical Grade Vitamin D3+K2",
    category: "Supplements & Wellness",
    description: "High-potency supplement for bone and cardiovascular health.",
    price: 45,
    vendorId: "ven-titan",
    image: "/placeholder.jpg",
    rating: 4.8,
    isTrending: true,
  },
  {
    id: "p12",
    name: "Testosterone Support Formula",
    category: "Supplements & Wellness",
    description: "Proprietary blend of herbs and minerals for hormone support.",
    price: 75,
    msrp: 89,
    vendorId: "ven-primemen",
    image: "/placeholder.jpg",
    rating: 4.3,
  }
];

const aiProductGenerator = (category: string, count: number, namePrefix: string, priceRange: [number, number]) => {
  const generated: Product[] = [];
  for (let i = 1; i <= count; i++) {
    const price = Math.floor(Math.random() * (priceRange[1] - priceRange[0] + 1)) + priceRange[0];
    const name = `AI ${namePrefix} System ${i}`;
    generated.push({
      id: `ai-${namePrefix.toLowerCase().replace(' ', '-')}-${i}`,
      name,
      category,
      description: "This placeholder product was auto-generated for the Novalyte™ AI Marketplace during development.",
      price: price,
      vendorId: "ven-novalyte",
      image: `https://placehold.co/600x400?text=${encodeURIComponent(name)}`,
      rating: parseFloat((3.8 + Math.random() * 1.2).toFixed(1)),
      specs: {
        core: {
          feature: "AI Generated Feature A",
          material: "Simulated Alloy",
          lifespan: "5-7 Years Placeholder",
        },
        certifications: {
          aiSafety: "Certified",
        },
      },
      aiGenerated: true,
      tags: ["ai", "placeholder", "men", "clinic", "recovery"]
    });
  }
  return generated;
};

const aiIvTherapy = aiProductGenerator("IV Therapy Equipment", 15, "IV Drip", [200, 2000]);
const aiHrt = aiProductGenerator("HRT & Hormone Diagnostics", 12, "Hormone Analyzer", [1500, 9000]);
const aiRegen = aiProductGenerator("Regenerative Devices", 18, "Regen Device", [3000, 25000]);
const aiCryo = aiProductGenerator("Cryotherapy & Recovery", 14, "Cryo Unit", [4000, 50000]);
const aiSoftware = aiProductGenerator("Clinic Software Tools", 10, "Clinic App", [99, 499]);
const aiSupplements = aiProductGenerator("Supplements & Wellness", 20, "Wellness Formula", [30, 150]);


export const products: Product[] = [
  ...existingProducts,
  ...aiIvTherapy,
  ...aiHrt,
  ...aiRegen,
  ...aiCryo,
  ...aiSoftware,
  ...aiSupplements,
];

export const recommendedForMenProductIds = ['p12', 'p11', 'p5', 'p7', 'p8', 'p3', 'p6', 'p10', 'p1', 'p2'];
