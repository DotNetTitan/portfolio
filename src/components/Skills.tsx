import { Code2, Layers, GitBranch, Cloud, Container, Sparkles } from "lucide-react";
import { skills } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Layers, GitBranch, Cloud, Container, Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label">SKILLS</p>
          <h2>
            Tools of the <span className="italic-accent">trade</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--stack-lg)",
          }}
        >
          {skills.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <div key={group.category}>
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--terracotta)",
                    marginBottom: "var(--stack-md)",
                  }}
                >
                  {Icon && <Icon size={16} />}
                  {group.category}
                </h3>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
