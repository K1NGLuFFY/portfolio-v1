import { cookies } from "next/headers";
import { AdminLogin } from "@/components/AdminLogin";
import { Dashboard } from "@/components/Dashboard";

export default function AdminPage() {
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.get("admin_session");

    if (!isAuthenticated) {
        return <AdminLogin />;
    }

    return <Dashboard />;
}
