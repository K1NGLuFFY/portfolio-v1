"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "TechGiant Corp",
        date: "2022 - Present",
        description: "Leading the design system team and migrating legacy apps to Next.js.",
        stack: ["React", "TypeScript", "GraphSQL"],
    },
    {
        id: 2,
        role: "UI/UX Designer",
        company: "Creative Studio",
        date: "2020 - 2022",
        description: "Designed award-winning interfaces for fintech and crypto startups.",
        stack: ["Figma", "Protopie", "Webflow"],
    },
    {
        id: 3,
        role: "Freelance Developer",
        company: "Self-Employed",
        date: "2018 - 2020",
        description: "Built custom e-commerce solutions for direct-to-consumer brands.",
        stack: ["Shopify", "Liquid", "JS"],
    },
];

export function ExperienceTimeline() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto w-full border-t border-white/10">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">Experience</h2>

            <div className="relative border-l border-white/20 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-black border border-white rounded-full" />

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                            <h3 className="text-2xl font-bold uppercase">{exp.role}</h3>
                            <span className="font-mono text-sm text-gray-400">{exp.company} | {exp.date}</span>
                        </div>

                        <p className="text-gray-400 mb-4">{exp.description}</p>

                        <div className="flex gap-2 flex-wrap">
                            {exp.stack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-white/5 text-xs font-mono rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
