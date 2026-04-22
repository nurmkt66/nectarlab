import { useState } from "react";
import { X } from "lucide-react";
import housen from "@/assets/portfolio-housen.png";
import colombia from "@/assets/portfolio-colombia.jpg";
import iemmi from "@/assets/portfolio-iemmi.jpg";
import contafaq from "@/assets/portfolio-contafaq.png";
import ec from "@/assets/portfolio-ec.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const items = [
  { src: housen, title: "Housen México", tag: "Inmobiliaria · Meta Ads" },
  { src: ec, title: "E+C Arquitectos", tag: "Branding · Diseño" },
  { src: colombia, title: "Viajes Mich", tag: "Turismo · Performance" },
  { src: iemmi, title: "IEEMI", tag: "Educación · Lead Gen" },
  { src: contafaq, title: "Contafaq", tag: "B2B · Google Ads" },
];

export function Portfolio() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="portafolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Portafolio</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Marcas que ya están <span className="text-primary">creciendo</span> con nosotros.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver más proyectos →
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setOpen(p.src)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/50 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/5] transition-smooth duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth">
                <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                <div className="mt-1 font-display text-xl font-semibold">{p.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-6 fade-in-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-smooth"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}