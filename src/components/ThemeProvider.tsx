"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, getThemeMode, type Theme, type ThemeMode } from "@/lib/themes";

interface ThemeContextType {
  activeTheme: Theme;
  setActiveTheme: (id: string) => void;
  themes: Theme[];
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "rethink-theme-id";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveThemeState] = useState<Theme>(themes[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const found = themes.find((t) => t.id === saved);
      if (found) setActiveThemeState(found);
    }
  }, []);

  const setActiveTheme = (id: string) => {
    const found = themes.find((t) => t.id === id);
    if (found) {
      setActiveThemeState(found);
      localStorage.setItem(STORAGE_KEY, id);
    }
  };

  const mode = getThemeMode(activeTheme.background);

  const cssVariables = mounted
    ? `:root {
  --background: ${activeTheme.background};
  --foreground: ${activeTheme.foreground};
  --accent: ${activeTheme.accent};
  --accent-foreground: ${activeTheme.accentForeground};
  --secondary: ${activeTheme.secondary};
  --muted: ${activeTheme.muted};
  --border: ${activeTheme.border};
}`
    : "";

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, themes, mode }}
    >
      {mounted && <style dangerouslySetInnerHTML={{ __html: cssVariables }} />}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
