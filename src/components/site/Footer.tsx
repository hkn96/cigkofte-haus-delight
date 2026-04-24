import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Çiğköfte Haus" className="h-12 w-12 object-contain bg-background rounded-full p-1" />
          <div>
            <div className="font-display text-lg font-bold">Çiğköfte Haus</div>
            <div className="text-xs text-background/60">Der echte Çiğköfte-Genuss</div>
          </div>
        </div>
        <p className="text-sm text-background/60 text-center">
          © {new Date().getFullYear()} Çiğköfte Haus. Mit Liebe gemacht – 100% vegan.
        </p>
      </div>
    </footer>
  );
}
