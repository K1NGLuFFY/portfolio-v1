"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const filters = ["ALL", "DEV", "DESIGN"];

export function ProjectGrid() {
    const [filter, setFilter] = useState("ALL");

    const filteredProjects = projects.filter(
        (p) => filter === "ALL" || p.category === filter
    );

    return (
        <section id="work" className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-baseline mb-16 border-b border-white/10 pb-6">
                <h2 className="text-6xl font-black tracking-tighter uppercase">Selected Work</h2>

                <div className="flex gap-4" role="tablist" aria-label="Project filters">
                    {filters.map((f) => (
                        <button
                            key={f}
                            role="tab"
                            aria-selected={filter === f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "text-sm font-mono uppercase tracking-widest px-4 py-2 border border-transparent transition-all",
                                filter === f
                                    ? "border-white bg-white text-black"
                                    : "hover:border-white/50 text-gray-400"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.slug}`}>
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[4/3] bg-white/5 overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:scale-105 transition-transform duration-700 ease-out z-10" />

                                <Image
                                    src={project.image}
                                    alt={`Cover image for ${project.title}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
                                    <span className="text-xs font-mono text-gray-300 mt-2">{project.category}</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
