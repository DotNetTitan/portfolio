"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getThemeSnapshot,
  initTheme,
  setThemeMode,
  subscribeTheme,
  themeServerSnapshot,
  type ResolvedTheme,
  type ThemeMode,
} from "./theme";

interface ThemeContextValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => themeServerSnapshot,
  );

  useEffect(() => {
    initTheme();
  }, []);

  const setMode = useCallback((next: ThemeMode) => setThemeMode(next), []);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode: snapshot.mode, resolved: snapshot.resolved, setMode }),
    [snapshot.mode, snapshot.resolved, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}