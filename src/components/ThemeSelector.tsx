"use client";

import { useState, useRef, useEffect } from "react";
import { Palette, Sun, Moon, SunMoon, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { getThemeMode } from "@/lib/themes";

export default function ThemeSelector() {
  const { activeTheme, setActiveTheme, themes, mode } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const darkThemes = themes.filter((t) => getThemeMode(t.background) === "dark");
  const balancedThemes = themes.filter((t) => getThemeMode(t.background) === "balanced");
  const lightThemes = themes.filter((t) => getThemeMode(t.background) === "light");

  const ModeIcon = mode === "dark" ? Moon : mode === "light" ? Sun : SunMoon;

  return (
    <div className="relative" ref={panelRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border)] bg-[var(--secondary)] hover:border-[var(--accent)] transition-all duration-200 group"
        aria-label="Change theme"
        aria-expanded={open}
      >
        <div
          className="w-4 h-4 rounded-full shadow-inner ring-1 ring-white/20"
          style={{ backgroundColor: activeTheme.accent }}
        />
        <Palette className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
        <ModeIcon className="w-3.5 h-3.5 text-[var(--muted)]" />
      </button>

      {/* Theme Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-[320px] md:w-[360px] rounded-xl border border-[var(--border)] bg-[var(--secondary)] shadow-2xl overflow-hidden z-[100]"
          >
            {/* Header */}
            <div className="p-4 border-b border-[var(--border)]">
              <p className="text-sm font-bold text-[var(--foreground)] tracking-wider font-[Oswald] uppercase">
                Choose Your Vibe
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">
                10 dark · 8 balanced · 6 light themes
              </p>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {/* Dark Themes */}
              <ThemeGroup
                icon={<Moon className="w-3.5 h-3.5" />}
                label="Dark"
                themes={darkThemes}
                activeId={activeTheme.id}
                onSelect={(id) => {
                  setActiveTheme(id);
                  setOpen(false);
                }}
              />

              {/* Balanced Themes */}
              <ThemeGroup
                icon={<SunMoon className="w-3.5 h-3.5" />}
                label="Balanced"
                themes={balancedThemes}
                activeId={activeTheme.id}
                onSelect={(id) => {
                  setActiveTheme(id);
                  setOpen(false);
                }}
              />

              {/* Light Themes */}
              <ThemeGroup
                icon={<Sun className="w-3.5 h-3.5" />}
                label="Light"
                themes={lightThemes}
                activeId={activeTheme.id}
                onSelect={(id) => {
                  setActiveTheme(id);
                  setOpen(false);
                }}
              />
            </div>

            {/* Active theme footer */}
            <div className="p-3 border-t border-[var(--border)]">
              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 ring-2 ring-white/20"
                  style={{ backgroundColor: activeTheme.accent }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[var(--foreground)] truncate">
                    {activeTheme.name}
                  </p>
                  <p className="text-[10px] text-[var(--muted)] capitalize">
                    {mode} mode
                  </p>
                </div>
                <ModeIcon className="w-4 h-4 text-[var(--muted)] flex-shrink-0" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ThemeGroup({
  icon,
  label,
  themes,
  activeId,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  themes: { id: string; name: string; swatch: string; background: string; accent: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="p-4 pb-2">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[var(--muted)]">{icon}</span>
        <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
          {label}
        </p>
        <span className="text-[10px] text-[var(--muted)]/60 ml-auto">
          {themes.length}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {themes.map((theme) => {
          const isActive = activeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={`relative flex flex-col items-center gap-1.5 p-2.5 rounded-lg border transition-all duration-200 hover:scale-105 ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-sm"
                  : "border-transparent hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"
              }`}
              title={theme.name}
              aria-pressed={isActive}
            >
              {/* Dual-ring swatch */}
              <div className="relative w-9 h-9">
                <div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: theme.accent, backgroundColor: theme.background }}
                />
                <div
                  className="absolute inset-[6px] rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-2.5 h-2.5 text-[var(--accent-foreground)]" />
                  </div>
                )}
              </div>
              <span className="text-[9px] text-[var(--muted)] text-center leading-tight truncate w-full">
                {theme.name.split(" ").slice(-1)[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
