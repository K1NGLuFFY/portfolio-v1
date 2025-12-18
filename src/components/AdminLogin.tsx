"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.refresh(); // Refresh to trigger server component re-render check
        } else {
            setError(true);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-sm p-8 border border-white/20">
                <h2 className="text-2xl font-black uppercase mb-8 text-center">Restricted Area</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none text-center font-mono tracking-widest"
                            placeholder="ENTER PASSCODE"
                            autoFocus
                        />
                    </div>
                    {error && <div className="text-red-500 text-xs font-mono text-center">ACCESS DENIED</div>}
                    <button className="w-full bg-white text-black py-3 font-bold uppercase hover:opacity-90">
                        Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
}
