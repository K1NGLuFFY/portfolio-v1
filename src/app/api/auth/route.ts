import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const body = await request.json();
    const { password } = body;

    // Simple hardcoded check for demonstration
    // In production, use Environment Variables: process.env.ADMIN_PASSWORD
    if (password === "admin123") {
        cookies().set("admin_session", "true", { httpOnly: true, path: "/" });
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
