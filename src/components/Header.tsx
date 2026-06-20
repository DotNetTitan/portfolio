"use client";

import { useState, useEffect } from "react";
import { Menu, X, Compass, Briefcase, Code2, Wrench, Pen, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data";
import ThemeToggle from "./ThemeToggle";

const sections = ["overview", "experience", "projects", "skills", "writing", "contact"] as const;

const sectionIcons: Record<string, React.ElementType> = {
  overview: Compass,
  experience: Briefcase,
  projects: Code2,
  skills: Wrench,
  writing: Pen,
  contact: MessageCircle,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          setActive(intersecting[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border-light)",
        position: "sticky",
        top: 0,
        background: "var(--parchment)",
        zIndex: 50,
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            fontWeight: 700,
          }}
        >
          {personalInfo.name}
        </a>

        <div
          className="menu-toggle"
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink)",
              display: "flex",
              padding: 0,
              marginRight: "calc(-0.5 * var(--margin-page))",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`nav-links ${open ? "nav-links--open" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                color: active === id ? "var(--terracotta)" : "var(--ink)",
                transition: "color 0.15s",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>

      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            padding: "1rem var(--margin-page)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
          className="mobile-menu"
        >
          {sections.map((id) => {
            const Icon = sectionIcons[id];
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: active === id ? "var(--terracotta)" : "var(--ink)",
                }}
              >
                {Icon && <Icon size={16} />}
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
