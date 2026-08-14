export type ThemeMode = "light" | "system" | "dark";
export type ResolvedTheme = "light" | "dark";

export const STORAGE_KEY = "theme";
export const MEDIA = "(prefers-color-scheme: dark)";

export function getStoredMode(): ThemeMode {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "light" || value === "dark" || value === "system") return value;
  } catch {
    // ignore storage access errors
  }
  return "system";
}

export function systemPrefersDark(): boolean {
  return typeof window !== "undefined" && window.matchMedia(MEDIA).matches;
}

export function resolveTheme(mode: ThemeMode, systemDark: boolean): ResolvedTheme {
  return mode === "dark" || (mode === "system" && systemDark) ? "dark" : "light";
}

export function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;
}

export interface ThemeSnapshot {
  mode: ThemeMode;
  resolved: ResolvedTheme;
}

export const themeServerSnapshot: ThemeSnapshot = { mode: "system", resolved: "light" };

const listeners = new Set<() => void>();
let mode: ThemeMode = "system";
let systemDark = false;
let cached: ThemeSnapshot = themeServerSnapshot;
let mediaSubscribed = false;

function recompute() {
  cached = { mode, resolved: resolveTheme(mode, systemDark) };
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribeTheme(listener: () => void): () => void {
  listeners.add(listener);
  if (!mediaSubscribed && typeof window !== "undefined") {
    mediaSubscribed = true;
    const media = window.matchMedia(MEDIA);
    const onChange = () => {
      systemDark = media.matches;
      if (mode === "system") {
        recompute();
        applyTheme(cached.resolved);
        emit();
      }
    };
    media.addEventListener("change", onChange);
  }
  return () => {
    listeners.delete(listener);
  };
}

export function getThemeSnapshot(): ThemeSnapshot {
  return cached;
}

export function initTheme() {
  mode = getStoredMode();
  systemDark = systemPrefersDark();
  recompute();
  applyTheme(cached.resolved);
  emit();
}

export function setThemeMode(next: ThemeMode) {
  mode = next;
  recompute();
  applyTheme(cached.resolved);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore storage access errors
  }
  emit();
}