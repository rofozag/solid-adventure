export interface WorkItem {
  id: number;
  title: string;
  category: "Photography" | "Video" | "Design";
  description: string;
  imageSrc: string;
  aspect: "square" | "wide" | "tall";
  year: string;
  gradient: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface Service {
  symbol: string;
  title: string;
  items: string[];
}
