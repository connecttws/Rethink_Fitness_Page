export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="section-divider">
      <div className="section-divider-center">
        <div className="section-divider-diamond" />
        {label && (
          <span
            className="text-[9px] font-bold tracking-[0.4em] uppercase"
            style={{ color: "rgba(204,0,0,0.6)" }}
          >
            {label}
          </span>
        )}
        <div className="section-divider-diamond" />
      </div>
    </div>
  );
}
