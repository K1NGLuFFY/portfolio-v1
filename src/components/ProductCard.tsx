"use client";

import { motion } from "framer-motion";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative bg-white/5 overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
        >
            <div className="aspect-square relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                        onClick={() => addItem(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="bg-white text-black px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        <Plus size={16} aria-hidden="true" /> Add to Cart
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold tracking-tight uppercase leading-none">{product.name}</h3>
                    <span className="font-mono text-sm text-gray-400">
                        ${(product.price / 100).toFixed(2)}
                    </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
            </div>
        </motion.div>
    );
}
