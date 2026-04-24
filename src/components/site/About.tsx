import classic from "@/assets/cigkofte-classic.jpeg";

export function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-leaf/15 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-primary/10 -z-10" />
          <img
            src={classic}
            alt="Traditionelle vegane Çiğköfte"
            className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/5]"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Über uns</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Eine Spezialität aus <span className="text-primary italic">Anatolien</span> – neu interpretiert.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Çiğköfte ist mehr als ein Gericht – es ist ein Stück türkische Kulturgeschichte.
            Bei uns wird jede Portion mit Liebe, Geduld und ausgewählten Zutaten von Hand
            geknetet. Feiner Bulgur, sonnengereifte Tomaten, scharfe Paprika, frische Petersilie
            und ein geheimes Gewürzbouquet – ganz ohne Fleisch, vollständig pflanzlich.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { t: "Hausgemacht", d: "Täglich frisch in unserer Küche zubereitet." },
              { t: "Vegan & rein", d: "Keine tierischen Produkte, keine Konservierung." },
              { t: "Originalrezept", d: "Überliefert aus Şanlıurfa, der Heimat des Çiğköfte." },
              { t: "Familienliebe", d: "Mit Sorgfalt und türkischer Gastfreundschaft." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{f.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
