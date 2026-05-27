import type { WorkItem, Testimonial, Service } from "@/types";

export const WORKS: WorkItem[] = [
  {
    id: 1,
    title: "TRIO",
    category: "Photography",
    description: "Model / Fashion",
    imageSrc: "/works/photo-1.jpg",
    aspect: "wide",
    year: "2025",
    gradient:
      "linear-gradient(135deg, #1a0f05 0%, #3d2510 40%, #8b5e2a 100%)",
  },
  {
    id: 2,
    title: "Fantsi",
    category: "Photography",
    description: "Model / Fashion",
    imageSrc: "/works/photo-2.jpg",
    aspect: "wide",
    year: "2025",
    gradient:
      "linear-gradient(135deg, #1a0f05 0%, #3d2510 40%, #8b5e2a 100%)",
  },
  
  {
    id: 4,
    title: "Identity System",
    category: "Design",
    description: "Brand / Visual",
    imageSrc: "/works/design-1.jpg",
    aspect: "square",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #0d0514 0%, #2a0f3d 50%, #5a1f7a 100%)",
  },
   {
    id: 5,
    title: "Identity System",
    category: "Design",
    description: "Brand / Visual",
    imageSrc: "/works/design-2.jpg",
    aspect: "square",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #0d0514 0%, #2a0f3d 50%, #5a1f7a 100%)",
  },
  {
    id: 6,
    title: "MODEL",
    category: "Photography",
    description: "Fun",
    imageSrc: "/works/photo-3.jpg",
    aspect: "square",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #080f08 0%, #162616 50%, #2a4a2a 100%)",
  },
  {
    id: 7,
    title: "BLACK N WHITE",
    category: "Photography",
    description: "Editorial / Fun",
    imageSrc: "/works/photo-4.jpg",
    aspect: "square",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #080f08 0%, #162616 50%, #2a4a2a 100%)",
  },
  {
    id: 8,
    title: "Packaging Suite",
    category: "Design",
    description: "Product",
    imageSrc: "/works/design-3.jpg",
    aspect: "wide",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #14080a 0%, #3d1018 50%, #7a2030 100%)",
  },
  {
    id: 9,
    title: "HEIS",
    category: "Design",
    description: "Artist",
    imageSrc: "/works/design-4.jpg",
    aspect: "wide",
    year: "2024",
    gradient:
      "linear-gradient(135deg, #14080a 0%, #3d1018 50%, #7a2030 100%)",
  },
  
  {
    id: 11,
    title: "EVENTS",
    category: "Photography",
    description: "Commercial / Studio",
    imageSrc: "/works/photo-5.jpg",
    aspect: "wide",
    year: "2023",
    gradient:
      "linear-gradient(135deg, #120e06 0%, #2e2210 50%, #5c4420 100%)",
  },
  {
    id: 12,
    title: " poster",
    category: "Design",
    description: "Digital / Content",
    imageSrc: "/works/design-5.jpg",
    aspect: "square",
    year: "2023",
    gradient:
      "linear-gradient(135deg, #0a0c14 0%, #1a2030 50%, #2a3050 100%)",
  },
  {
    id: 13,
    title: "ICEMAN",
    category: "Design",
    description: "Artist",
    imageSrc: "/works/design-6.jpg",
    aspect: "square",
    year: "2023",
    gradient:
      "linear-gradient(135deg, #0a0c14 0%, #1a2030 50%, #2a3050 100%)",
  },
  {
    id: 14,
    title: "DOPPLE-GANGERS",
    category: "Photography",
    description: "Commercial",
    imageSrc: "/works/photo-6.jpg",
    aspect: "wide",
    year: "2023",
    gradient:
      "linear-gradient(135deg, #120e06 0%, #2e2210 50%, #5c4420 100%)",
  },
    
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adaeze Kalu",
    role: "Fashion Brand Founder",
    text: "The rebrand photography completely transformed how clients perceive us. Our bookings went up significantly within just three months of the new visuals going live.",
  },
  {
    name: "Emeka Okafor",
    role: "Music Artist",
    text: "The video production was cinematic — exactly the elevated look I needed. Professional, fast, and genuinely creative. The final product exceeded every expectation.",
  },
  {
    name: "Tunde Fashola",
    role: "Marketing Director",
    text: "Best creative investment we made this year. The design system was delivered ahead of schedule and exceeded every brief. Highly recommend for serious brands.",
  },
];

export const SERVICES: Service[] = [
  {
    symbol: "◈",
    title: "Photography",
    items: [
      "Portrait & Lifestyle",
      "Commercial & Product",
      "Editorial Sessions",
      "Event Coverage",
    ],
  },
  {
    symbol: "◉",
    title: "Video Production",
    items: [
      "Brand Films & Reels",
      "Music Videos",
      "Commercial Ads",
      "Motion Graphics",
    ],
  },
  {
    symbol: "◎",
    title: "Graphic Design",
    items: [
      "Brand Identity",
      "Packaging Design",
      "Social Media Kits",
      "Print Collateral",
    ],
  },
];
