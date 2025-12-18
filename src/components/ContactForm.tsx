"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
    const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("LOADING");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error();

            setStatus("SUCCESS");
        } catch (err) {
            setStatus("ERROR");
        }
    }

    if (status === "SUCCESS") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 border border-white/20 bg-white/5 text-center"
            >
                <h3 className="text-3xl font-black uppercase mb-4">Message Transmitted</h3>
                <p className="text-gray-400 font-mono">I will decode your signal shortly.</p>
                <button
                    onClick={() => setStatus("IDLE")}
                    className="mt-8 text-sm uppercase underline hover:text-white text-gray-500"
                >
                    Send Another
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-gray-400">
                    Identity / Name
                </label>
                <input
                    required
                    name="name"
                    id="name"
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-bold text-xl uppercase"
                    placeholder="NEO ANDERSON"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-400">
                    Digital Frequency / Email
                </label>
                <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-bold text-xl uppercase"
                    placeholder="NEO@MATRIX.NET"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-gray-400">
                    Transmission / Message
                </label>
                <textarea
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-bold text-xl uppercase resize-none"
                    placeholder="I NEED GUNS. LOTS OF GUNS."
                />
            </div>

            <button
                disabled={status === "LOADING"}
                type="submit"
                className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-gray-200 disabled:opacity-50 transition-colors"
            >
                {status === "LOADING" ? "TRANSMITTING..." : "INITIATE SEQUENCE"}
            </button>

            {status === "ERROR" && (
                <p className="text-red-500 font-mono text-xs text-center">TRANSMISSION FAILED. RETRY.</p>
            )}
        </form>
    );
}
