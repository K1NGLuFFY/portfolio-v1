import { Product } from "@/types";

export const products: Product[] = [
    {
        id: "prod_1",
        name: "Obsidian UI Kit",
        description: "A dark-mode first component library for rapid prototyping.",
        price: 4900, // in cents
        currency: "usd",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        category: "UI",
    },
    {
        id: "prod_2",
        name: "Neon Icons",
        description: "200+ handcrafted SVG icons with a neon glow effect.",
        price: 2900,
        currency: "usd",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
        category: "ICON",
    },
    {
        id: "prod_3",
        name: "Next.js Starter",
        description: "Production-ready boilerplate with Auth, DB, and Stripe.",
        price: 9900,
        currency: "usd",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        category: "CODE",
    },
];
