"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import type { ThemeMode } from "@/lib/theme";

const options: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon },
];

export default function ThemeToggle() {
  const { mode, resolved, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const activeIndex = options.findIndex((opt) => opt.value === mode);
    itemRefs.current[activeIndex >= 0 ? activeIndex : 1]?.focus();
  }, [open, mode]);

  function onMenuKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const current = options.findIndex((opt) => opt.value === mode);
    let next = current;
    if (event.key === "ArrowDown") next = (current + 1) % options.length;
    else if (event.key === "ArrowUp") next = (current - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else next = options.length - 1;
    itemRefs.current[next]?.focus();
  }

  const TriggerIcon = resolved === "dark" ? Moon : Sun;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        aria-label="Change theme"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((openState) => !openState)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--ink)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.25rem",
          lineHeight: 1,
        }}
      >
        <TriggerIcon size={20} strokeWidth={1.5} aria-hidden />
      </button>
      {open && (
        <div
          role="menu"
          onKeyDown={onMenuKeyDown}
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 0.5rem)",
            zIndex: 40,
            width: "9.5rem",
            background: "var(--parchment)",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius)",
            padding: "0.25rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
          }}
        >
          {options.map((opt) => {
            const active = mode === opt.value;
            const Icon = opt.icon;
            return (
              <button
                key={opt.value}
                ref={(el) => {
                  itemRefs.current[options.indexOf(opt)] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setMode(opt.value);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.375rem 0.5rem",
                  background: active ? "var(--surface-container)" : "none",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  color: active ? "var(--terracotta)" : "var(--ink)",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  textAlign: "left",
                }}
              >
                <Icon size={15} strokeWidth={1.5} aria-hidden />
                <span style={{ flex: 1 }}>{opt.label}</span>
                {active && <Check size={15} strokeWidth={1.5} aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
