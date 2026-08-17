export default function ProjectCard({ title, tagline, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-surface/15 border border-surface/40 hover:border-accent/60 rounded-lg transition-all group block space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-white text-sm font-medium font-mono">
          {title}
        </span>
        <span className="text-accent group-hover:translate-x-0.5 transition-transform text-xs">
          ↗
        </span>
      </div>
      <p className="text-xs text-muted/70 leading-relaxed">{description}</p>
    </a>
  );
}
