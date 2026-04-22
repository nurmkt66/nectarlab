import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-radial-amber" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Agencia de marketing digital
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Impulsamos marcas con{" "}
            <span className="text-amber-glow">estrategia</span>{" "}
            y resultados.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Publicidad en Google, Meta y TikTok con diseño y video que convierte.
            Trabajamos con empresas que buscan crecer con datos, creatividad y ejecución impecable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-7 py-4 text-base font-semibold text-primary-foreground shadow-amber transition-smooth hover:scale-[1.03]"
            >
              Hablar por WhatsApp
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-smooth hover:bg-card hover:border-primary/40"
            >
              Ver portafolio
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><span className="text-primary text-lg font-bold">+50</span> marcas activas</div>
            <div className="flex items-center gap-2"><span className="text-primary text-lg font-bold">+300%</span> ROI promedio</div>
            <div className="flex items-center gap-2"><span className="text-primary text-lg font-bold">+500</span> leads generados</div>
          </div>
        </div>
      </div>
    </section>
  );
}