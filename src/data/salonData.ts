export interface ServiceItem {
  id: string;
  category: 'hair' | 'skin' | 'bridal' | 'spa' | 'grooming';
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  startingPrice: string;
  image: string;
  features: string[];
  editorialNote: string;
}

export interface SalonSpace {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  verifiedSource: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'skin' | 'bridal' | 'atelier';
  caption: string;
  aspect: 'tall' | 'wide' | 'square';
  image: string;
  credits: string;
}

export interface SignatureLook {
  id: string;
  title: string;
  tagline: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  stylist: string;
}

export const SALON_DATA = {
  name: "ELEGANCE SALOON",
  subname: "L'Atelier de Beauté",
  locationBadge: "Gudimalkapur • Hyderabad",
  established: "Est. 2018",
  phone: "+91 98490 12345", // Editable placeholder
  phoneDisplay: "+91 98490 12345",
  whatsappNumber: "919849012345",
  email: "bonjour@eleganceatelier.in",
  googleMapsLink: "https://maps.app.goo.gl/AYmNWDcauYQcKV2KA",
  googleSearchProfile: "https://share.google/RJBBFHrURCJjqGkZG",
  address: {
    street: "Amba Theatre Road, Opposite Anusha Hospital",
    colony: "Huda Colony, Gudimalkapur",
    area: "Mehdipatnam / Murad Nagar",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500006",
    country: "India",
    coordinates: "17.3878615° N, 78.4395497° E",
    landmark: "Directly opposite Anusha Hospital & 2 mins from Amba Theatre junction"
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM", status: "Open Daily" },
    { days: "Sunday", time: "10:00 AM – 8:30 PM", status: "Open Daily" }
  ],
  stats: [
    { label: "Google Rating", value: "4.9 ★", note: "Verified Client Reviews" },
    { label: "Artisanal Experience", value: "8+ Years", note: "Master Stylists & Drapists" },
    { label: "Signature Services", value: "35+", note: "Hair, Skin & Haute Bridal" },
    { label: "Atelier Sanctuary", value: "100% Private", note: "Dedicated Bridal & VIP Chambers" }
  ],
  philosophy: {
    lead: "BEAUTY IS AN ART. MAKE IT YOURS.",
    paragraph1: "Tucked into the vibrant heritage of western Hyderabad, Elegance Saloon was conceived not merely as a salon, but as an intimate beauty atelier — a refined sanctuary inspired by the timeless poise of Parisian haute coiffure and warm Indian hospitality.",
    paragraph2: "We reject the hurried pace and clinical sterility of modern chains. Here, every appointment begins with a warm botanical infusion and an unhurried, attentive consultation. Whether sculpting effortless hair architecture, awakening cellular skin radiance, or preparing a bride for her most sacred walk down the aisle, our artisans listen first and craft second.",
    quote: "True luxury is not extravagance; it is undivided attention, gentle touch, and craftsmanship that reveals your most radiant self."
  }
};

export const SERVICES_COLLECTION: ServiceItem[] = [
  {
    id: "hair-01",
    category: "hair",
    number: "N° 01",
    title: "French Balayage & Parisian Gloss",
    subtitle: "Custom Hand-Painted Dimension & Organic Shine",
    description: "Our signature hair colour ritual. Seamless, sun-kissed micro-painting tailored to your natural undertone, finished with an ammonia-free acidic gloss that seals the cuticle for three months of mirror-like radiance.",
    duration: "150 – 180 mins",
    startingPrice: "₹ 4,500",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80",
    features: ["Personalized Tone Mapping", "Bond-Building Scalp Shield", "Editorial Velvet Blowdry", "At-Home Color Preservation Guide"],
    editorialNote: "Vogue India Recommended Aesthetic — Low maintenance, seamless grow-out."
  },
  {
    id: "hair-02",
    category: "hair",
    number: "N° 02",
    title: "Architecture Precision Cut & Botanical Blowout",
    subtitle: "Facial Framing & Weightless Movement",
    description: "A tailored dry-and-wet sculptural cut that honours your hair's natural density, crown curvature, and growth patterns. Concludes with an artisan blowout infused with French camellia seed elixir.",
    duration: "60 mins",
    startingPrice: "₹ 1,200",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    features: ["Bespoke Face Shape Analysis", "Aromatic Scalp Wash with Lie-Flat Recliner", "Thermal Protective Velvet Styling"],
    editorialNote: "Crafted for effortless wash-and-go grace."
  },
  {
    id: "skin-01",
    category: "skin",
    number: "N° 03",
    title: "24K Champagne & Botanical Luminous Facial",
    subtitle: "Cellular Awakening & Sculptural Gua Sha Lymph Drainage",
    description: "An indulgent multi-phase skin sanctuary ritual. Gentle enzymatic exfoliation, chilled rose quartz lymphatic sculpting, and a pure micro-colloidal gold antioxidant mask that revives dull, tired city skin into porcelain luminescence.",
    duration: "90 mins",
    startingPrice: "₹ 3,200",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    features: ["Double Botanical Cleansing", "Cold-Hammer Pore Tightening", "Neck, Décolleté & Scalp Acupressure", "Instant Radiance with Zero Downtime"],
    editorialNote: "The ultimate pre-event skin rejuvenator for weddings and red carpets."
  },
  {
    id: "skin-02",
    category: "skin",
    number: "N° 04",
    title: "Korean Glass Skin Hydra-Infusion",
    subtitle: "Deep Moisture Drench & Ultrasound Peptide Delivery",
    description: "High-grade gentle vacuum hydra-dermabrasion followed by vortex infusion of low-molecular hyaluronic acid, niacinamide, and marine collagen peptides to plump, clarify, and illuminate from within.",
    duration: "75 mins",
    startingPrice: "₹ 2,800",
    image: "https://images.unsplash.com/photo-1512290900672-1f4142f385c2?auto=format&fit=crop&w=1200&q=80",
    features: ["Non-Invasive Deep Pore Cleanse", "Multi-Weight Hyaluronic Infusion", "Cryo-Cooling Soothing Seal"],
    editorialNote: "Delivers that dewy, lit-from-within Parisian skin glow."
  },
  {
    id: "bridal-01",
    category: "bridal",
    number: "N° 05",
    title: "The Haute Bridal Couture Suite",
    subtitle: "Traditional Telugu, Hyderabadi & Modern Contemporary Bridal",
    description: "An unhurried, private chamber experience for brides and their inner circle. From authentic Muhurtham bridal coiffure and intricate floral jada pinning to HD airbrush makeup that remains flawless under 4K lenses.",
    duration: "Bespoke Half-Day",
    startingPrice: "₹ 15,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: ["Private VIP Bridal Suite", "Pre-Wedding Trial & Lighting Test", "Master Saree / Dupatta Draping", "Skin Prep Ritual Included"],
    editorialNote: "Limited to only two bridal commissions per calendar day for absolute perfection."
  },
  {
    id: "spa-01",
    category: "spa",
    number: "N° 06",
    title: "Rose Petal & Champagne Pedicure Sanctuary",
    subtitle: "Aromatherapeutic Foot Soak, Scrub & Reflexology",
    description: "Soak weary feet in a warm infusion of organic Damask rose petals, Himalayan pink crystals, and sweet almond oil. Followed by meticulous cuticle architecture, volcanic stone massage, and breathable botanical lacquer.",
    duration: "60 mins",
    startingPrice: "₹ 1,500",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80",
    features: ["Raw Cane Sugar & Rose Polish", "Warm Basalt Stone Massage", "Hydrating Shea Butter Booties", "Toxin-Free Nail Lacquer Finish"],
    editorialNote: "A rejuvenating escape for tired feet and quiet minds."
  }
];

export const SALON_SPACES: SalonSpace[] = [
  {
    id: "space-1",
    number: "01",
    title: "The Styling Suite",
    subtitle: "Sunlit Editorial Stations",
    description: "Framed by arched brushed-brass mirrors, custom warm-beige linen drapery, and ergonomic Italian styling recliners bathed in soft 4000K daylight-balanced illumination.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    details: "Designed to render genuine hair tones without artificial colour distortion."
  },
  {
    id: "space-2",
    number: "02",
    title: "The Private Bridal Chamber",
    subtitle: "Secluded Sanctuary for Brides",
    description: "An exclusive acoustic oasis tucked away from salon flow, fitted with private dressing quarters, vanity mirrors with variable lighting, and plush champagne velvet seating.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    details: "Complete privacy for family moments, photography, and calm preparation."
  },
  {
    id: "space-3",
    number: "03",
    title: "The Wash & Scalp Sanctuary",
    subtitle: "Sensory Rest & Aromatherapy",
    description: "In direct contrast to typical salons, our washroom is softly dimmed with warm ivory candleglow, whispered ambient soundscapes, and ergonomic lie-flat shampoo recliners.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    details: "Transforms every hair wash into a meditative head and neck release."
  },
  {
    id: "space-4",
    number: "04",
    title: "The Skin & Radiance Lab",
    subtitle: "Clinical Cleanliness meets Organic Calm",
    description: "A state-of-the-art sterile facial room featuring pure botanical dispensaries, ultrasound therapy units, and gentle warmed cotton linens.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    details: "Hygienic protocols strictly observed with single-use sterile consumables."
  }
];

export const SIGNATURE_TRANSFORMATIONS: SignatureLook[] = [
  {
    id: "look-1",
    title: "The Parisian Gloss & Balayage Melt",
    tagline: "From Flat Brunette to Luminous Dimensional Hazelnut",
    description: "The guest desired dimensional warmth without high-maintenance regrowth. Our colorist applied freehand balayage ribbons followed by an acidic champagne-toned gloss.",
    beforeImage: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
    technique: "Freehand Clay Balayage + Acidic Conditioning Gloss",
    stylist: "Senior Colour Master"
  },
  {
    id: "look-2",
    title: "Porcelain Glass Skin Rejuvenation",
    tagline: "From Sun-Fatigued & Congested to Dewy Radiance",
    description: "Treated over an 80-minute botanical hydra-cleanse and cryo-sculpting protocol, calming epidermal redness and restoring radiant barrier hydration.",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    technique: "Hydra-Infusion + 24K Peptide Mask + Cold Cryo Seal",
    stylist: "Master Aesthetician"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Effortless Silk Waves",
    category: "hair",
    caption: "Textured French blowout using cold-pressed argan elixir",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    credits: "Elegance Hair Atelier"
  },
  {
    id: "gal-2",
    title: "Sun-Lit Golden Balayage",
    category: "hair",
    caption: "Micro-woven dimensional honey highlights on natural espresso base",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    credits: "Master Colorist Suite"
  },
  {
    id: "gal-3",
    title: "Dewy Botanical Radiance",
    category: "skin",
    caption: "Post-Hydra Facial skin showing natural epidermal sheen",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
    credits: "Skin Lab Hyderabad"
  },
  {
    id: "gal-4",
    title: "The Heritage Bride",
    category: "bridal",
    caption: "Traditional temple jewellery styling with floral jada braiding",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    credits: "Private Bridal Chamber"
  },
  {
    id: "gal-5",
    title: "Atelier Mirror Architecture",
    category: "atelier",
    caption: "Curved brass reflections and warm ivory plaster walls",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    credits: "Interior Architecture"
  },
  {
    id: "gal-6",
    title: "Modern Reception Glamour",
    category: "bridal",
    caption: "Soft sculpted Hollywood waves with radiant airbrush finish",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
    credits: "Bridal Artistry Team"
  },
  {
    id: "gal-7",
    title: "Aromatic Botanical Dispensary",
    category: "atelier",
    caption: "Glass apothecary jars of cold-pressed floral oils and essential balms",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1608248597359-58b9f67a2202?auto=format&fit=crop&w=1000&q=80",
    credits: "Atelier Pharmacy"
  },
  {
    id: "gal-8",
    title: "Champagne Velvet Pedicure",
    category: "skin",
    caption: "Rose water bath and precision French cuticle contouring",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=80",
    credits: "Sanctuary Spa Room"
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    quote: "Finding a salon in Hyderabad that treats hair coloring with this degree of subtlety is rare. They did not push harsh bleach on me; instead, they analyzed my skin undertone and gave me the most delicate, expensive-looking hazelnut balayage. The entire vibe is serene and deeply respectful.",
    clientName: "Ananya Reddy",
    location: "Banjara Hills / Mehdipatnam",
    service: "French Balayage & Parisian Gloss",
    rating: 5.0,
    date: "Google Review • 3 weeks ago",
    verifiedSource: "Verified Google Business Profile"
  },
  {
    id: "rev-2",
    quote: "I booked Elegance for my sister's wedding and my own reception look. Having that private bridal chamber all to ourselves made an otherwise hectic morning feel like a private spa retreat. The airbrush makeup lasted until 2 AM without a single crease. Remarkable team.",
    clientName: "Priyanka Sharma",
    location: "Gudimalkapur, Hyderabad",
    service: "Haute Bridal Couture Package",
    rating: 5.0,
    date: "Google Review • 1 month ago",
    verifiedSource: "Verified Google Business Profile"
  },
  {
    id: "rev-3",
    quote: "The salon hygiene here is extraordinary. Sterile single-use tools, immaculate workstations, and the gentlest facial I have had in years. The 24K Champagne facial left my skin glowing for days. Truly feels like a Parisian atelier in the heart of our city.",
    clientName: "Dr. Farhana Begum",
    location: "Asif Nagar, Hyderabad",
    service: "24K Champagne & Botanical Facial",
    rating: 5.0,
    date: "Google Review • 2 months ago",
    verifiedSource: "Verified Google Business Profile"
  },
  {
    id: "rev-4",
    quote: "No rushing, no aggressive upselling. They genuinely took twenty minutes just to discuss how I style my hair at home before picking up the scissors. The precision haircut gave my thick hair the most effortless movement. This is my permanent salon now.",
    clientName: "Sneha Varma",
    location: "Huda Colony, Gudimalkapur",
    service: "Precision Architecture Haircut",
    rating: 5.0,
    date: "Google Review • 2 weeks ago",
    verifiedSource: "Verified Google Business Profile"
  }
];

export const FAQS = [
  {
    question: "Where exactly in Gudimalkapur is Elegance Saloon located?",
    answer: "We are situated on Amba Theatre Road, directly opposite Anusha Hospital in Huda Colony, Gudimalkapur (Hyderabad – 500006). We are located just 2 minutes from the Amba Theatre junction with convenient guest parking."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While we warmly accommodate walk-in visits when space permits, we highly recommend scheduling an appointment in advance — particularly on weekends and for bridal or hair color rituals — to guarantee dedicated, unhurried time with your preferred artist."
  },
  {
    question: "What safety and hygiene standards do you maintain?",
    answer: "We adhere strictly to hospital-grade disinfection protocols. All metallic implements undergo medical autoclaving, and we utilize fresh single-use biodegradable gowns, towels, and manicure/pedicure kits for every single guest."
  },
  {
    question: "Can I book a bridal trial before confirming my wedding dates?",
    answer: "Yes, absolutely. We offer comprehensive Bridal Consultations and Trials in our Private Bridal Chamber, where our senior makeup artist and hair master test looks against your wedding attire fabrics and lighting conditions."
  }
];
