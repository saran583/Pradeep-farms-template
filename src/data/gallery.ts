export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  date: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "award-2023",
    title: "Innovation Excellence Award 2023",
    category: "Awards",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
    description: "Recognized for groundbreaking advancements in technology solutions, our team received the prestigious Innovation Excellence Award at the Global Tech Summit 2023.",
    date: "November 2023"
  },
  {
    id: "conference-2023",
    title: "Annual Tech Conference Keynote",
    category: "Speeches",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    description: "Our CEO delivered an inspiring keynote speech about the future of technology and our vision for sustainable innovation at the International Tech Conference.",
    date: "September 2023"
  },
  {
    id: "team-award",
    title: "Best Workplace Culture Award",
    category: "Awards",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    description: "Celebrated our recognition as one of the top companies for workplace culture and employee satisfaction, reflecting our commitment to fostering an innovative and inclusive environment.",
    date: "July 2023"
  },
  {
    id: "community-event",
    title: "Community Impact Celebration",
    category: "Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description: "A memorable ceremony celebrating our successful community outreach programs and the positive impact we've made in local technology education initiatives.",
    date: "May 2023"
  },
  {
    id: "product-launch",
    title: "Revolutionary Product Launch",
    category: "Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    description: "The grand launch ceremony of our flagship product, marking a new era in technological innovation and user experience design.",
    date: "March 2023"
  }
];