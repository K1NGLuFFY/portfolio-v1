"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/store/cart";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function CartDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, removeItem, addItem, total } = useCartStore();

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                aria-label={`Open cart, ${items.length} items`}
                className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
                <ShoppingBag size={24} aria-hidden="true" />
                {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                            aria-hidden="true"
                        />
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Shopping Cart"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-white/10 z-[70] p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-black uppercase tracking-tighter">Cart</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:opacity-50"
                                    aria-label="Close cart"
                                >
                                    <X size={24} aria-hidden="true" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-6">
                                {items.length === 0 ? (
                                    <div className="text-gray-500 font-mono text-center mt-20">YOUR CART IS EMPTY</div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4">
                                            <div className="relative w-16 h-16 bg-gray-800 shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold uppercase text-sm">{item.name}</h4>
                                                <div className="text-gray-400 text-xs font-mono mt-1">
                                                    ${(item.price / 100).toFixed(2)}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-1 hover:bg-white/10 rounded"
                                                    aria-label={`Remove one ${item.name}`}
                                                >
                                                    <Minus size={14} aria-hidden="true" />
                                                </button>
                                                <span className="font-mono text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => addItem(item)}
                                                    className="p-1 hover:bg-white/10 rounded"
                                                    aria-label={`Add one more ${item.name}`}
                                                >
                                                    <Plus size={14} aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="border-t border-white/10 pt-6 mt-6">
                                <div className="flex justify-between items-baseline mb-6">
                                    <span className="font-mono text-sm text-gray-400">TOTAL</span>
                                    <span className="text-2xl font-bold">${(total / 100).toFixed(2)}</span>
                                </div>
                                <button
                                    disabled={items.length === 0}
                                    className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Checkout (Stripe)
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
