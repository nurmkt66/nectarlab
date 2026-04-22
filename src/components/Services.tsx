import { Search, Target, Music2, Share2, Film, Globe, Database } from "lucide-react";

const services = [
  { icon: Search, title: "Google Ads", desc: "Capturamos demanda activa con campañas de búsqueda y performance optimizadas para ROAS." },
  { icon: Target, title: "Meta Ads", desc: "Generamos leads y ventas en Facebook e Instagram con creatividades que detienen el scroll." },
  { icon: Music2, title: "TikTok Ads", desc: "Escalamos marcas con contenido nativo y pauta que convierte audiencias en clientes." },
  { icon: Share2, title: "Gestión de redes", desc: "Estrategia de contenido, comunidad y crecimiento orgánico con foco en marca y ventas." },
  { icon: Film, title: "Diseño y video", desc: "Producción audiovisual y diseño que comunica autoridad y aumenta tasa de conversión." },
  { icon: Globe, title: "Desarrollo web", desc: "Sitios y landing pages rápidas, optimizadas para SEO y diseñadas para vender." },
  { icon: Database, title: "CRM", desc: "Automatización y seguimiento de leads para que ningún cliente potencial se pierda." },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Servicios</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Una agencia. <span className="text-primary">Todo</span> lo que tu marca necesita.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Estrategia, creatividad y datos integrados en un solo equipo para acelerar tu crecimiento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-primary/50 hover:-translate-y-1 hover:shadow-amber"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-amber group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}