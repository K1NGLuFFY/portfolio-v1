"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function StoreSection() {
    return (
        <section id="store" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-white/10">
            <div className="flex justify-between items-baseline mb-16">
                <h2 className="text-6xl font-black tracking-tighter uppercase">Digital Goods</h2>
                <span className="font-mono text-gray-400">[0{products.length}]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
