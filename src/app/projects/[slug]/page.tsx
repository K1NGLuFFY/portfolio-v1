import { projects } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <article className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
                <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Work
                </Link>

                <header className="mb-16">
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">{project.description}</p>
                </header>

                <div className="aspect-video w-full bg-white/5 mb-16 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    <aside>
                        <h3 className="font-bold uppercase tracking-widest mb-4 text-sm">Tech Stack</h3>
                        <ul className="space-y-2 font-mono text-sm text-gray-400">
                            {project.stack.map(tech => <li key={tech}>{tech}</li>)}
                        </ul>

                        {project.link && (
                            <div className="mt-8">
                                <a href={project.link} target="_blank" className="inline-block bg-white text-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-gray-200">
                                    Visit Site
                                </a>
                            </div>
                        )}
                    </aside>

                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Render markdown content simply for now. In a real app, use ReactMarkdown */}
                        <div className="whitespace-pre-wrap font-sans text-gray-300">
                            {project.content}
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
