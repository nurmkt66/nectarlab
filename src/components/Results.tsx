const stats = [
  { value: "+300%", label: "ROI promedio en campañas" },
  { value: "+500", label: "Leads de alto valor generados" },
  { value: "+50", label: "Marcas impulsadas" },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-amber opacity-50" />
      <div className="relative mx-auto max-w-7xl text-center">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Resultados</span>
        <h2 className="mt-4 mx-auto max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          No vendemos publicidad,<br />
          <span className="text-amber-glow">generamos resultados.</span>
        </h2>

        <div className="mt-20 grid gap-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-amber-glow transition-smooth group-hover:scale-105">
                {s.value}
              </div>
              <div className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}