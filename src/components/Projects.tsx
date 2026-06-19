import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--surface-container-lowest)" }}>
      <div className="container">
        <div className="section-header">
          <p className="label">PROJECTS</p>
          <h2>
            Personal <span className="italic-accent">Projects</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "var(--gutter)",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.name}
              style={{
                border: "1px solid var(--border-light)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>{project.name}</h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--muted-earth)",
                    marginTop: "0.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                >
                  <Code2 size={14} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
