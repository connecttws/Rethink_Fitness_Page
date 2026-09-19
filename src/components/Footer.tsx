import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function Footer() {
  const { brand, footer } = contentData.global;
  return (
    <footer className="bg-[var(--background)] border-t border-[rgba(204,0,0,0.25)] pt-16 pb-8 md:pt-20 md:pb-10 relative overflow-hidden"
      style={{ boxShadow: "0 -1px 30px rgba(204,0,0,0.06)" }}>
      <SectionCorners size={44} />
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center">
                <img src={brand.logoUrl} alt={`${brand.name} Logo`} className="h-8 w-auto object-contain" />
              </div>
              <span className="text-sm font-[700] tracking-[0.12em] font-[Oswald] text-[var(--foreground)]">
                {brand.name}
              </span>
            </div>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed max-w-[200px]">
              {footer.subtitle}
            </p>
          </div>

          {footer.sections.map((section, idx) => (
            <div key={idx}>
              <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--foreground)] uppercase mb-4">
                {section.title}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--muted)]">
            {footer.copyright}
          </p>
          <div className="flex gap-6">
            {footer.bottomLinks.map((item) => (
              <a key={item} href="#" className="text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
