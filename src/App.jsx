import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import { utilities } from "./data/utilities";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 md:p-12 max-w-3xl mx-auto font-sans tracking-tight">
      <Header />

      <main className="space-y-16 my-12 md:my-20">
        <Hero />

        {/* Calm Utilities Section */}
        <section
          id="utilities"
          className="space-y-4 border-t border-surface/20 pt-10"
        >
          <h2 className="text-xs uppercase tracking-widest font-mono text-accent/80 font-semibold">
            Calm Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {utilities.map((tool) => (
              <ProjectCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <footer className="w-full border-t border-surface/20 pt-6 text-center text-[11px] font-mono opacity-50 tracking-widest uppercase">
        Human-Centric
      </footer>
    </div>
  );
}
