export type Project = {
  number: string;
  title: string;
  category: string;
  overview: string;
  concept?: string;
  role: string[];
  keyPoints: string[];
  tags: string[];
  images: { src: string; label: string }[];
};

export const architectureProjects: Project[] = [
  {
    number: "01",
    title: "Future Hospitality Hotel",
    category: "Archathon Competition · Featured Project",
    overview: "A future-oriented luxury hospitality destination built around time travel. Each floor represents a distinct historical era, with its own architectural language, atmosphere, culture, and guest experience.",
    concept: "A futuristic capsule replaces the traditional elevator, transporting guests vertically between historical periods and turning circulation into an immersive part of the journey.",
    role: ["Concept Development", "Architectural Design", "Space Planning", "Experience Design", "Presentation Development"],
    keyPoints: ["Era-based floor organization", "Capsule transportation system", "Podium + tower massing", "500-room destination hotel", "Integrated wellness, dining & entertainment"],
    tags: ["Hospitality", "Competition", "Experience"],
    images: [
      { src: "/projects/architecture/future-hospitality-hotel/massing-proposals.jpg", label: "Hotel massing proposals and future identity" },
      { src: "/projects/architecture/future-hospitality-hotel/functional-program.jpg", label: "Functional program and planning strategy" },
      { src: "/projects/architecture/future-hospitality-hotel/hotel-concept-500-rooms.jpg", label: "500-room luxury hotel concept" },
    ],
  },
  {
    number: "02",
    title: "National Library Landscape Design",
    category: "Landscape Architecture",
    overview: "A welcoming and cohesive public realm for the National Library, supporting cultural, educational, and social life through considered movement, gathering, and planting systems.",
    concept: "The proposal strengthens the relationship between building, landscape, and people while improving accessibility, environmental quality, and the identity of the site.",
    role: ["Landscape Design", "Site Planning", "Public Space Development", "Planting Strategy", "Presentation Development"],
    keyPoints: ["Clear pedestrian circulation", "Gathering and seating areas", "Softscape strategy", "Building–site integration", "Accessible public realm"],
    tags: ["Landscape", "Public Realm", "Planning"],
    images: [
      { src: "/projects/architecture/national-library-landscape/landscape-rendering.jpg", label: "National Library landscape and public realm" },
      { src: "/projects/architecture/national-library-landscape/presentation-boards.jpg", label: "Site planning and landscape presentation boards" },
    ],
  },
  {
    number: "03",
    title: "Landmark Train Station Terminal",
    category: "Architecture / Transportation",
    overview: "A large-scale transportation hub designed to bring passenger circulation, commercial activity, public movement, and rail infrastructure together within a clear landmark destination.",
    concept: "The proposal balances an expressive terminal identity with legible zoning and movement. Transparent public halls, generous arrival space, and a structured relationship to the rail platforms make technical planning part of the passenger experience.",
    role: ["Architectural Design", "Spatial Planning", "Passenger Circulation", "Technical Drawings"],
    keyPoints: ["Clear passenger movement", "Integrated commercial program", "Rail and public-space connection", "Legible functional zoning", "Landmark terminal identity"],
    tags: ["Transportation", "Planning", "Technical"],
    images: [
      { src: "/projects/architecture/landmark-train-station/main-terminal-visual.jpg", label: "Landmark terminal and rail infrastructure" },
      { src: "/projects/architecture/landmark-train-station/plans-sections.jpg", label: "Main façade and terminal identity" },
    ],
  },
];

export const graphicProjects: Project[] = [
  {
    number: "01",
    title: "Syrian Arab Archery Federation",
    category: "Visual Identity & Branding · Featured Project",
    overview: "A complete identity system designed to give the federation a professional, consistent, and recognizable presence rooted in sporting excellence and institutional credibility.",
    concept: "The visual language translates precision, focus, discipline, and strength into a modern official sports identity, connecting archery-inspired forms with a flexible communication system.",
    role: ["Visual Identity Design", "Brand Development", "Social Media Design", "Brand Guidelines", "Digital Assets"],
    keyPoints: ["Logo usage system", "Arabic & English typography", "Defined color palette", "Instagram identity", "Social templates & highlights"],
    tags: ["Branding", "Identity", "Sports"],
    images: [
      { src: "/projects/graphic-design/archery-federation/brand-identity-board.jpg", label: "Complete federation brand identity system" },
      { src: "/projects/graphic-design/archery-federation/instagram-preview.jpg", label: "Digital campaign application" },
      { src: "/projects/graphic-design/archery-federation/highlight-covers.jpg", label: "Instagram highlight cover system" },
    ],
  },
  {
    number: "02",
    title: "Al-Dandashi Educational Foundation",
    category: "Media, Graphic Design & Visual Communication",
    overview: "An ongoing visual communication system for educational, social, and community initiatives—from campaigns and awareness content to event coverage and promotional materials.",
    concept: "A clear, accessible visual direction that organizes information with care while maintaining the professional tone of an educational institution.",
    role: ["Graphic Design", "Social Media Design", "Visual Communication", "Content Creation", "Media Production"],
    keyPoints: ["Campaign design", "Awareness materials", "Event media", "Clear hierarchy", "Consistent multi-format communication"],
    tags: ["Social Impact", "Content", "Campaigns"],
    images: [
      { src: "/projects/graphic-design/dandashi-foundation/main.jpg", label: "Campaign direction" },
      { src: "/projects/graphic-design/dandashi-foundation/media.jpg", label: "Selected communication assets" },
    ],
  },
  {
    number: "03",
    title: "Selected Graphic Design Works",
    category: "Graphic Design / Visual Communication",
    overview: "A curated edit of social media designs, branding studies, TEDxAlqassa-related work, posters, and visual communication materials.",
    role: ["Art Direction", "Graphic Design", "Content Design"],
    keyPoints: ["Posters", "Editorial layouts", "Social content"],
    tags: ["Selected Works", "Posters", "Digital"],
    images: [
      { src: "/projects/graphic-design/selected/work-01.jpg", label: "Selected work 01" },
      { src: "/projects/graphic-design/selected/work-02.jpg", label: "Selected work 02" },
      { src: "/projects/graphic-design/selected/work-03.jpg", label: "Selected work 03" },
    ],
  },
];
