import rolls from "@/assets/cigkofte-rolls.jpeg";
import icli from "@/assets/cigkofte-icli.jpeg";
import wrap from "@/assets/cigkofte-wrap.jpeg";
import platter from "@/assets/cigkofte-platter.jpeg";
import classic from "@/assets/cigkofte-classic.jpeg";
import hero from "@/assets/hero-cigkofte.jpeg";

const dishes = [
  { name: "Klassik Çiğköfte", desc: "Das Original – handgeknetet mit Bulgur, Tomatenmark und feinen Gewürzen.", price: "9,90 €", img: classic, tag: "Klassiker" },
  { name: "Çiğköfte Dürüm", desc: "Im dünnen Lavash-Brot mit Salat, Granatapfelsauce und Zitrone.", price: "8,50 €", img: wrap, tag: "Beliebt" },
  { name: "Çiğköfte Rollen", desc: "Elegante Mini-Rollen, perfekt für Sharing und Vorspeisen.", price: "11,90 €", img: rolls, tag: "Sharing" },
  { name: "İçli Köfte", desc: "Knusprig frittierte Bulgurtaschen mit würziger Füllung.", price: "10,50 €", img: icli, tag: "Spezial" },
  { name: "Çiğköfte Teller", desc: "Großzügige Platte mit Beilagen, eingelegtem Gemüse und Kräutern.", price: "14,90 €", img: platter, tag: "Premium" },
  { name: "Haus-Spezial", desc: "Unsere Empfehlung – die ganze Vielfalt auf einem Teller.", price: "16,90 €", img: hero, tag: "Empfehlung" },
];

export function Menu() {
  return (
    <section id="speisekarte" className="py-24 bg-gradient-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Speisekarte</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Unsere <span className="text-primary italic">Spezialitäten</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Von klassisch bis kreativ – jedes Gericht wird mit Leidenschaft und nach
            traditionellem Rezept zubereitet.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-background/95 backdrop-blur text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {d.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
                  <span className="font-display text-xl font-bold text-primary whitespace-nowrap">{d.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
