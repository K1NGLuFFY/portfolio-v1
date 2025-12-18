export interface Project {
    id: string;
    slug: string;
    title: string;
    category: "DEV" | "DESIGN";
    image: string;
    description: string;
    content: string;
    stack: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "cyber-commerce",
        title: "CYBER COMMERCE",
        category: "DEV",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        description: "A headless e-commerce solution built for the metaverse era.",
        content: `
  # The Vision
  To create a shopping experience that feels like a glitch in the matrix. We moved away from traditional white-space heavy designs to a dark, immersive interface.
  
  ## The Stack
  Built with **Next.js 14**, **Shopify Storefront API**, and **WebGL** shaders.
  
  ## Challenges
  Optimizing 3D model loaders while maintaining core web vitals was the primary hurdle. We utilized Draco compression and lazy loading.
      `,
        stack: ["Next.js", "WebGL", "Shopify", "Tailwind"],
        link: "https://example.com"
    },
    {
        id: "2",
        slug: "neon-branding",
        title: "NEON BRANDING",
        category: "DESIGN",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
        description: "Brand identity refresh for a night-life logistics company.",
        content: `
  # Concept
  Fluorescent lights against wet pavement. The identity reflects movement, speed, and the urban night.
  
  ## Deliverables
  - Logo System
  - Voice & Tone Guidelines
  - Motion Assets
  - Social Media Kit
      `,
        stack: ["Figma", "After Effects", "Illustrator"],
    },
    {
        id: "3",
        slug: "minimal-folio",
        title: "MINIMAL FOLIO",
        category: "DEV",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
        description: "A portfolio template used by over 500 designers.",
        content: `
  # Philosophy
  "Less, but better." This project strips away all non-essential elements to focus purely on the work.
  
  ## Features
  - Markdown-based content
  - Zero-config dark mode
  - Sub-100ms page loads
      `,
        stack: ["Astro", "Tailwind", "Vercel"],
    }
];
