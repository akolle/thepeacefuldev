export default function Header() {
  return (
    <header className="w-full flex justify-between items-center border-b border-surface/30 pb-6">
      <div className="flex items-center space-x-3">
        <div className="w-2.5 h-2.5 rounded-full bg-coral opacity-80 shadow-[0_0_10px_rgba(255,123,84,0.3)]"></div>
        <span className="text-sm uppercase tracking-[0.2em] text-accent/80 font-semibold font-mono">
          The Peaceful Dev
        </span>
      </div>

      <nav className="hidden sm:flex items-center space-x-6 text-xs font-mono tracking-wider">
        <a href="#utilities" className="hover:text-white transition-colors">
          Utilities
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
