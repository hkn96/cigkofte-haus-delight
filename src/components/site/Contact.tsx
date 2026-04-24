export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Kontakt</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Besuchen Sie <span className="text-primary italic">uns</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir freuen uns auf Ihren Besuch oder Ihre Bestellung.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: "📍", title: "Adresse", lines: ["Musterstraße 12", "10115 Berlin"] },
            { icon: "🕐", title: "Öffnungszeiten", lines: ["Mo–Sa: 11:00 – 22:00", "So: 12:00 – 21:00"] },
            { icon: "📞", title: "Bestellung", lines: ["+49 30 1234 5678", "info@cigkoftehaus.de"] },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">{c.icon}</div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-spice rounded-3xl p-10 sm:p-14 text-center text-primary-foreground shadow-elegant">
          <h3 className="font-display text-3xl sm:text-4xl font-bold">Folgen Sie uns auf Instagram</h3>
          <p className="mt-3 text-primary-foreground/85">Tägliche Eindrücke, neue Kreationen und Aktionen.</p>
          <a
            href="https://www.instagram.com/cigkoftehaus/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-background text-primary px-7 py-4 rounded-full font-semibold shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            @cigkoftehaus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
