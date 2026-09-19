/**
 * SectionCorners — glowing red corner brackets.
 * Parent must have `position: relative` and `overflow: hidden` (or visible).
 *
 * Props:
 *   size   — bracket size in px (default 56)
 *   strong — brighter glow for "hero-level" sections (default false)
 */
export default function SectionCorners({
  size = 56,
  strong = false,
}: {
  size?: number;
  strong?: boolean;
}) {
  const s = `${size}px`;
  const strongGlow = "3px -3px 16px rgba(204,0,0,0.65), 6px -6px 32px rgba(204,0,0,0.3)";
  const softGlow   = "2px -2px 10px rgba(204,0,0,0.45), 4px -4px 20px rgba(204,0,0,0.2)";

  const topRight = strong ? strongGlow : softGlow;
  const bottomLeft = strong
    ? "-2px 2px 12px rgba(204,0,0,0.4), -4px 4px 22px rgba(204,0,0,0.18)"
    : "-1px 1px 8px rgba(204,0,0,0.28), -2px 2px 14px rgba(204,0,0,0.12)";
  const topLeft = strong
    ? "-2px -2px 10px rgba(204,0,0,0.38), -4px -4px 20px rgba(204,0,0,0.16)"
    : "-1px -1px 7px rgba(204,0,0,0.22), -2px -2px 12px rgba(204,0,0,0.1)";
  const bottomRight = strong
    ? "2px 2px 10px rgba(204,0,0,0.38), 4px 4px 20px rgba(204,0,0,0.16)"
    : "1px 1px 7px rgba(204,0,0,0.22), 2px 2px 12px rgba(204,0,0,0.1)";

  return (
    <>
      {/* ── Top-right (bright) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: s, height: s,
          borderTop: "2px solid #CC0000",
          borderRight: "2px solid #CC0000",
          boxShadow: topRight,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Top-left (subtle) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: s, height: s,
          borderTop: "2px solid rgba(204,0,0,0.45)",
          borderLeft: "2px solid rgba(204,0,0,0.45)",
          boxShadow: topLeft,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Bottom-left (medium) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0, left: 0,
          width: s, height: s,
          borderBottom: "2px solid rgba(204,0,0,0.55)",
          borderLeft: "2px solid rgba(204,0,0,0.55)",
          boxShadow: bottomLeft,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Bottom-right (subtle) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0, right: 0,
          width: s, height: s,
          borderBottom: "2px solid rgba(204,0,0,0.35)",
          borderRight: "2px solid rgba(204,0,0,0.35)",
          boxShadow: bottomRight,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </>
  );
}
