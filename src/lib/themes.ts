/**
 * Rethink Fitness Theme System
 * 
 * Architecture:
 * - Each theme has a "mode" (dark / balanced / light) determined by background luminance
 * - "accent" is the primary brand/action color (buttons, highlights, stats)
 * - "secondary" is for cards, elevated surfaces
 * - "muted" is for secondary text
 * - "border" is for dividers and card borders
 * 
 * Color combinations are chosen with fitness/performance branding in mind:
 * Bold, energetic accents on backgrounds that range from deep darks
 * through sophisticated mid-tones to clean lights.
 */

export interface Theme {
  id: string;
  name: string;
  // A small color swatch to show in the selector
  swatch: string;
  // Core palette
  background: string;
  foreground: string;
  accent: string;
  accentForeground: string;
  secondary: string;
  muted: string;
  border: string;
}

export type ThemeMode = "dark" | "balanced" | "light";

export const themes: Theme[] = [
  // ─── DARK THEMES ─────────────────────────────────────────
  {
    id: "crimson-night",
    name: "Crimson Night",
    swatch: "#FF3333",
    background: "#0D0D0D",
    foreground: "#FAFAFA",
    accent: "#FF3333",
    accentForeground: "#FFFFFF",
    secondary: "#161616",
    muted: "#A1A1A1",
    border: "#262626",
  },
  {
    id: "electric-blue",
    name: "Electric Blue",
    swatch: "#3B82F6",
    background: "#0F1419",
    foreground: "#F8FAFC",
    accent: "#3B82F6",
    accentForeground: "#FFFFFF",
    secondary: "#1E293B",
    muted: "#94A3B8",
    border: "#334155",
  },
  {
    id: "emerald-dark",
    name: "Emerald Power",
    swatch: "#10B981",
    background: "#0A0F0D",
    foreground: "#F0FDF4",
    accent: "#10B981",
    accentForeground: "#FFFFFF",
    secondary: "#1C2B24",
    muted: "#86EFAC",
    border: "#2D4A3E",
  },
  {
    id: "golden-edge",
    name: "Golden Edge",
    swatch: "#F59E0B",
    background: "#111111",
    foreground: "#FAFAFA",
    accent: "#F59E0B",
    accentForeground: "#000000",
    secondary: "#1C1C1C",
    muted: "#A8A29E",
    border: "#2E2E2E",
  },
  {
    id: "purple-surge",
    name: "Purple Surge",
    swatch: "#8B5CF6",
    background: "#0F0B1A",
    foreground: "#F5F3FF",
    accent: "#8B5CF6",
    accentForeground: "#FFFFFF",
    secondary: "#1E1533",
    muted: "#A78BFA",
    border: "#2E2247",
  },
  {
    id: "neon-lime",
    name: "Neon Lime",
    swatch: "#84CC16",
    background: "#0C0C0C",
    foreground: "#FAFAFA",
    accent: "#84CC16",
    accentForeground: "#000000",
    secondary: "#1A1A1A",
    muted: "#A3A3A3",
    border: "#2A2A2A",
  },
  // ─── BALANCED / MEDIUM THEMES ────────────────────────────
  // Mid-tone backgrounds (not too dark, not too light) — sophisticated, easy on the eyes
  {
    id: "slate-ember",
    name: "Slate Ember",
    swatch: "#EF4444",
    background: "#374151",
    foreground: "#F9FAFB",
    accent: "#EF4444",
    accentForeground: "#FFFFFF",
    secondary: "#4B5563",
    muted: "#D1D5DB",
    border: "#6B7280",
  },
  {
    id: "storm-teal",
    name: "Storm Teal",
    swatch: "#14B8A6",
    background: "#1E3A4A",
    foreground: "#F0FDFA",
    accent: "#14B8A6",
    accentForeground: "#FFFFFF",
    secondary: "#2A4D5E",
    muted: "#99F6E4",
    border: "#3B6B7D",
  },
  {
    id: "dusk-violet",
    name: "Dusk Violet",
    swatch: "#A855F7",
    background: "#2E2542",
    foreground: "#FAF5FF",
    accent: "#A855F7",
    accentForeground: "#FFFFFF",
    secondary: "#3D3356",
    muted: "#D8B4FE",
    border: "#5B4A7A",
  },
  {
    id: "warm-steel",
    name: "Warm Steel",
    swatch: "#F97316",
    background: "#3D3530",
    foreground: "#FFF7ED",
    accent: "#F97316",
    accentForeground: "#FFFFFF",
    secondary: "#4D4540",
    muted: "#FDBA74",
    border: "#6B5E56",
  },
  {
    id: "navy-gold",
    name: "Navy Gold",
    swatch: "#EAB308",
    background: "#1E2A4A",
    foreground: "#FEFCE8",
    accent: "#EAB308",
    accentForeground: "#1A1A1A",
    secondary: "#2A3A5E",
    muted: "#FDE047",
    border: "#3D4F72",
  },
  {
    id: "olive-copper",
    name: "Olive Copper",
    swatch: "#D97706",
    background: "#2C3328",
    foreground: "#FEFDF2",
    accent: "#D97706",
    accentForeground: "#FFFFFF",
    secondary: "#3A4334",
    muted: "#BEF264",
    border: "#536349",
  },
  {
    id: "charcoal-rose",
    name: "Charcoal Rose",
    swatch: "#F43F5E",
    background: "#3B3035",
    foreground: "#FFF1F2",
    accent: "#F43F5E",
    accentForeground: "#FFFFFF",
    secondary: "#4D4045",
    muted: "#FDA4AF",
    border: "#6B5560",
  },
  {
    id: "midnight-cyan",
    name: "Midnight Cyan",
    swatch: "#06B6D4",
    background: "#1A2F38",
    foreground: "#ECFEFF",
    accent: "#06B6D4",
    accentForeground: "#000000",
    secondary: "#263F4A",
    muted: "#67E8F9",
    border: "#3A5B68",
  },
  // ─── LIGHT THEMES ────────────────────────────────────────
  {
    id: "clean-red",
    name: "Clean Red",
    swatch: "#DC2626",
    background: "#FAFAFA",
    foreground: "#1A1A1A",
    accent: "#DC2626",
    accentForeground: "#FFFFFF",
    secondary: "#F4F4F5",
    muted: "#71717A",
    border: "#E4E4E7",
  },
  {
    id: "ocean-light",
    name: "Ocean Light",
    swatch: "#0EA5E9",
    background: "#F8FAFC",
    foreground: "#0F172A",
    accent: "#0EA5E9",
    accentForeground: "#FFFFFF",
    secondary: "#F1F5F9",
    muted: "#64748B",
    border: "#E2E8F0",
  },
  {
    id: "warm-orange",
    name: "Warm Orange",
    swatch: "#F97316",
    background: "#FFFBF5",
    foreground: "#1C1917",
    accent: "#F97316",
    accentForeground: "#FFFFFF",
    secondary: "#FFF7ED",
    muted: "#78716C",
    border: "#FED7AA",
  },
  {
    id: "forest-light",
    name: "Forest Light",
    swatch: "#059669",
    background: "#F8FDF9",
    foreground: "#14332A",
    accent: "#059669",
    accentForeground: "#FFFFFF",
    secondary: "#ECFDF5",
    muted: "#6B7280",
    border: "#D1FAE5",
  },
  {
    id: "pearl-indigo",
    name: "Pearl Indigo",
    swatch: "#6366F1",
    background: "#FAFAFF",
    foreground: "#1E1B4B",
    accent: "#6366F1",
    accentForeground: "#FFFFFF",
    secondary: "#EEF2FF",
    muted: "#6B7280",
    border: "#C7D2FE",
  },
  {
    id: "cream-bronze",
    name: "Cream Bronze",
    swatch: "#B45309",
    background: "#FFFDF7",
    foreground: "#292524",
    accent: "#B45309",
    accentForeground: "#FFFFFF",
    secondary: "#FEF3C7",
    muted: "#78716C",
    border: "#FDE68A",
  },
];

/**
 * Determines if a hex background color is dark (luminance < 0.5)
 */
export function isDarkTheme(background: string): boolean {
  const hex = background.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

/**
 * Determines theme mode: dark, balanced, or light
 * - Dark: luminance < 0.2
 * - Balanced: luminance 0.2 - 0.5
 * - Light: luminance > 0.5
 */
export function getThemeMode(background: string): ThemeMode {
  const hex = background.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance < 0.2) return "dark";
  if (luminance <= 0.5) return "balanced";
  return "light";
}
