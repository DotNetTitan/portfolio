import { skills } from "@/data";

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
          {skills.map((group) => (
            <div key={group.category}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  marginBottom: "var(--stack-md)",
                }}
              >
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
          ))}
        </div>
      </div>
    </section>
  );
}
