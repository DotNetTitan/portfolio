import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
            href={`mailto:${personalInfo.email}`}
            className="mono-label"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <Mail size={13} /> Email
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <FaGithub size={13} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <FaLinkedin size={13} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
