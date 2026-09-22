import { Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data";

export default function Hero() {
  const years = Math.floor(
    (Date.now() - personalInfo.experienceStart.getTime()) / 31557600000
  );
  const bio = personalInfo.bio.replace("{years}", String(years));

  return (
    <section id="overview" className="section" style={{ paddingTop: "clamp(4rem, 10vh, 8rem)" }}>
      <div className="container" style={{ position: "relative" }}>
        <img
          src="https://avatars.githubusercontent.com/u/28998715?v=4"
          alt="Emmanuel Mathew"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginBottom: "var(--stack-md)",
            border: "1px solid var(--border-light)",
          }}
        />
        <h1 style={{ maxWidth: "16ch" }}>
          Emmanuel <span className="italic-accent">Mathew</span>
        </h1>
        <p
          style={{
            marginTop: "var(--stack-lg)",
            maxWidth: "55ch",
            color: "var(--muted-earth)",
          }}
        >
          {bio}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "var(--stack-lg)",
            flexWrap: "wrap",
          }}
        >
          <a href="#contact" className="btn-primary">
            Say Hi <Send size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
