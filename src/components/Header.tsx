"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data";

const sections = ["overview", "experience", "projects", "skills", "writing", "contact"];

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

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink)",
            display: "none",
          }}
          className="menu-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`nav-links ${open ? "nav-links--open" : ""}`}
          style={{
            display: "flex",
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
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                color: active === id ? "var(--terracotta)" : "var(--ink)",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
