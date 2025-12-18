export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    category: "UI" | "ICON" | "CODE";
}

export interface CartItem extends Product {
    quantity: number;
}
