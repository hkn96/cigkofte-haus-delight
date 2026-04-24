import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { VeganBanner } from "@/components/site/VeganBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Çiğköfte Haus – Der echte Çiğköfte-Genuss | 100% Vegan & Hausgemacht" },
      {
        name: "description",
        content:
          "Türkisches Çiğköfte – hausgemacht, 100% vegan und nach Originalrezept. Entdecken Sie den echten Çiğköfte-Genuss bei Çiğköfte Haus.",
      },
      { property: "og:title", content: "Çiğköfte Haus – Der echte Çiğköfte-Genuss" },
      { property: "og:description", content: "Türkisches, veganes Çiğköfte – hausgemacht mit Liebe und Tradition." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <VeganBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
