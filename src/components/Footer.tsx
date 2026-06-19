import { personalInfo } from "@/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-light)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span className="mono-label">&copy; {new Date().getFullYear()} {personalInfo.name}</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label"
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mono-label"
            style={{ textDecoration: "none" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
