"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
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
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
