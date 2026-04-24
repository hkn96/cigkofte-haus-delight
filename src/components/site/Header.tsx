import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#vegan", label: "Vegan" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Çiğköfte Haus Logo" className="h-14 w-14 object-contain" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-xl font-bold text-primary">Çiğköfte</div>
            <div className="text-[11px] tracking-[0.3em] text-muted-foreground -mt-0.5">HAUS</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
        >
          Jetzt bestellen
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          aria-label="Menü"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 font-medium">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center">
              Jetzt bestellen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
