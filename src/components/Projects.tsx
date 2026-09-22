import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label"><Code2 size={13} style={{ verticalAlign: "middle", marginRight: "0.4rem" }} />PROJECTS</p>
          <h2>
            Side <span className="italic-accent">Quests</span>
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
              className="project-card"
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
              {project.demo && (
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                  }}
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
