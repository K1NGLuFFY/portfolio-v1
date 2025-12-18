import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        LETS<br />TALK
                    </h1>
                    <p className="text-gray-400 text-xl font-mono">
                        Available for freelance projects and high-gravity missions.
                    </p>
                </header>

                <ContactForm />
            </div>
        </main>
    );
}
