import { WHATSAPP_URL } from "./WhatsAppFloat";

export function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-12 sm:p-16 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-radial-amber opacity-60" />
        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            ¿Listo para hacer crecer<br />
            <span className="text-amber-glow">tu negocio?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Una conversación de 15 minutos puede cambiar tu próximo trimestre.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-amber px-10 py-5 text-lg font-semibold text-primary-foreground shadow-amber transition-smooth hover:scale-105"
          >
            Agenda por WhatsApp
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}