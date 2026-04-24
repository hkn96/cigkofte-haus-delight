import hero from "@/assets/hero-cigkofte.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-warm pt-24">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-leaf/15 blur-3xl" />
        <svg className="absolute top-1/4 right-10 w-24 h-24 text-leaf/30 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3 8 0 13.66-9 13-12-2-1-7.66-.66-4 0z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full py-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf/10 text-leaf border border-leaf/20 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            100% Vegan · Hausgemacht
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-foreground text-balance">
            Der echte <span className="text-primary italic">Çiğköfte</span>-Genuss
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Türkische Tradition trifft auf vegane Küche. Handgeknetet aus Bulgur, feinen
            Gewürzen und frischen Kräutern – nach dem Originalrezept aus der Heimat.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#speisekarte"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Speisekarte entdecken
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#ueber-uns"
              className="inline-flex items-center gap-2 bg-background border border-border text-foreground px-7 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Unsere Geschichte
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "100%", l: "Vegan" },
              { n: "30+", l: "Gewürze" },
              { n: "1.0", l: "Tradition" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full bg-gradient-spice shadow-elegant overflow-hidden">
              <img src={hero} alt="Frisch zubereitete vegane Çiğköfte mit Kräutern" className="w-full h-full object-cover" />
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -left-6 bg-background rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-leaf/15 flex items-center justify-center text-leaf text-lg">🌿</div>
              <div>
                <div className="text-xs text-muted-foreground">Frisch</div>
                <div className="text-sm font-bold text-foreground">Täglich neu</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 bg-background rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary text-lg">🌶️</div>
              <div>
                <div className="text-xs text-muted-foreground">Authentisch</div>
                <div className="text-sm font-bold text-foreground">Türkische Würze</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
