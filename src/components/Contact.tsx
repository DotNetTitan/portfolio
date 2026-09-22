import { Mail } from "lucide-react";
import { personalInfo } from "@/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
        color: "var(--parchment)",
        padding: "var(--section-gap) 0",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--stack-lg)",
        }}
      >
        <p className="mono-label" style={{ color: "var(--muted-earth)" }}>
          GET IN TOUCH
        </p>
        <h2 style={{ maxWidth: "15ch", color: "var(--parchment)" }}>
          Let&apos;s build something <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>great</span> together
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ background: "var(--terracotta)", color: "var(--parchment)" }}>
            <Mail size={16} /> Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
