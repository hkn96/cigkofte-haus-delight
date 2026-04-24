export function VeganBanner() {
  const items = ["100% Pflanzlich", "Ohne Fleisch", "Glutenarm", "Frische Kräuter", "Hausgemacht", "Türkische Tradition"];
  return (
    <section id="vegan" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-leaf blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-spice blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf/20 border border-leaf/40 text-xs font-semibold uppercase tracking-wider">
          <span className="text-lg">🌱</span> Vegan Versprechen
        </div>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl font-black leading-tight max-w-4xl mx-auto text-balance">
          Genuss ohne Kompromisse – <span className="italic text-cream">rein pflanzlich</span> seit Generationen.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/85 leading-relaxed">
          Çiğköfte war ursprünglich ein Fleischgericht. Wir folgen der modernen, veganen
          Tradition – mit demselben intensiven Geschmack, nur ehrlicher und gesünder.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {items.map((i) => (
            <span key={i} className="px-5 py-2.5 rounded-full bg-background/10 backdrop-blur border border-background/20 text-sm font-medium">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
