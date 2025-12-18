"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { StoreSection } from "@/components/StoreSection";
import { CartDrawer } from "@/components/CartDrawer";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-background">
            <Navigation />
            <Hero />
            <ProjectGrid />
            <ExperienceTimeline />
            <StoreSection />
            <CartDrawer />
        </main>
    );
}
