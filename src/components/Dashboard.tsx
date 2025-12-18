export function Dashboard() {
    return (
        <div className="min-h-screen bg-[#050505] flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 p-8 hidden md:block">
                <div className="tacking-tighter font-black text-xl mb-12">ADMIN_OS</div>
                <nav className="space-y-4">
                    <div className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-2">Modules</div>
                    <div className="text-white font-bold cursor-pointer">Projects</div>
                    <div className="text-gray-500 hover:text-white cursor-pointer transition-colors">Products</div>
                    <div className="text-gray-500 hover:text-white cursor-pointer transition-colors">Messages</div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-black uppercase">Dashboard</h1>
                </header>

                <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 p-6 border border-white/10">
                        <div className="text-gray-400 font-mono text-xs uppercase">Total Views</div>
                        <div className="text-3xl font-bold mt-2">12,405</div>
                    </div>
                    <div className="bg-white/5 p-6 border border-white/10">
                        <div className="text-gray-400 font-mono text-xs uppercase">Message Queue</div>
                        <div className="text-3xl font-bold mt-2">3</div>
                    </div>
                    <div className="bg-white/5 p-6 border border-white/10">
                        <div className="text-gray-400 font-mono text-xs uppercase">System Status</div>
                        <div className="text-3xl font-bold mt-2 text-green-500">ONLINE</div>
                    </div>
                </div>

                <div className="border border-dashed border-white/20 h-64 flex items-center justify-center text-gray-500 font-mono text-sm">
                    NO ACTIVE TASKS
                </div>
            </div>
        </div>
    );
}
