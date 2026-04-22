const testimonials = [
  { name: "Luis Alvarado", text: "Excelente servicio, logramos resultados desde el primer mes." },
  { name: "Fernando Ruiz", text: "Profesionales, atentos y enfocados en resultados." },
  { name: "Jessi Cortez", text: "Me ayudaron a escalar mi negocio con campañas efectivas." },
  { name: "Maricela García", text: "Muy buena atención y diseños de alta calidad." },
  { name: "Lizeth Hernández", text: "Superaron mis expectativas completamente." },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Testimonios</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Lo que dicen las marcas que <span className="text-primary">confían</span> en nosotros.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-primary/40 hover:-translate-y-1 ${
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="text-primary font-display text-5xl leading-none">"</div>
              <blockquote className="mt-2 text-foreground/90 leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-amber text-primary-foreground font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Cliente Nectar Lab</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}