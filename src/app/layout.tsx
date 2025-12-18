import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Portfolio | Brutalist E-commerce",
    description: "A brutalist, minimalist e-commerce portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased noise-bg overflow-x-hidden")}>
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
