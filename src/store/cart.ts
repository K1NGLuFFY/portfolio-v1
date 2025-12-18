import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types';

interface CartState {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
    total: number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            total: 0,
            addItem: (product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === product.id);

                if (existingItem) {
                    const updatedItems = currentItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                    set({ items: updatedItems, total: get().total + product.price });
                } else {
                    set({
                        items: [...currentItems, { ...product, quantity: 1 }],
                        total: get().total + product.price,
                    });
                }
            },
            removeItem: (productId) => {
                const currentItems = get().items;
                const itemToRemove = currentItems.find((item) => item.id === productId);

                if (!itemToRemove) return;

                if (itemToRemove.quantity > 1) {
                    const updatedItems = currentItems.map((item) =>
                        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                    set({ items: updatedItems, total: get().total - itemToRemove.price });
                } else {
                    set({
                        items: currentItems.filter((item) => item.id !== productId),
                        total: get().total - itemToRemove.price,
                    });
                }
            },
            clearCart: () => set({ items: [], total: 0 }),
        }),
        {
            name: 'portfolio-cart',
        }
    )
);
