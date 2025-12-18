"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPct = clientX / innerWidth - 0.5;
        const yPct = clientY / innerHeight - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const xSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const textX = useTransform(xSpring, [-0.5, 0.5], ["-5%", "5%"]);
    const textY = useTransform(ySpring, [-0.5, 0.5], ["-5%", "5%"]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        >
            <motion.div
                style={{ y, x: textX, translateY: textY }}
                className="relative z-10 flex flex-col items-center select-none"
            >
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center mix-blend-difference text-white"
                    >
                        DIGITAL
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center mix-blend-difference text-white"
                    >
                        ARCHITECT
                    </motion.h1>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-0 right-0 flex justify-between px-8 text-sm text-gray-400 font-mono tracking-widest uppercase"
            >
                <div>Based in The Matrix</div>
                <div className="animate-pulse">Scroll to Explore</div>
                <div>2024 Edition</div>
            </motion.div>
        </section>
    );
}
