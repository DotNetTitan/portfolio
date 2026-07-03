"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Mode = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode: Mode) {
  const theme = mode === "system" ? getSystemTheme() : mode;
  document.documentElement.setAttribute("data-theme", theme);
}

const NEXT: Record<Mode, Mode> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const LABELS: Record<Mode, string> = {
  light: "Switch to dark mode",
  dark: "Switch to system mode",
  system: "Switch to light mode",
};

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Mode | null;
    const initial: Mode = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    setMode(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  function toggle() {
    setMode((prev) => {
      const next = NEXT[prev];
      localStorage.setItem("theme", next);
      applyTheme(next);
      return next;
    });
  }

  return (
    <button
      onClick={toggle}
      aria-label={LABELS[mode]}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--ink)",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
      }}
    >
      {mode === "light" ? <Sun size={20} /> : mode === "dark" ? <Moon size={20} /> : <Monitor size={20} />}
    </button>
  );
}
