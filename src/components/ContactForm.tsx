import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  email: z.string().trim().email("Correo inválido").max(120),
  business: z.string().trim().min(2, "Ingresa tu negocio").max(80),
  service: z.string().min(1, "Selecciona un servicio"),
});

const services = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Gestión de redes",
  "Página web",
  "CRM",
];

const WHATSAPP_NUMBER = "5219602338505"; // wa.link target

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      business: String(fd.get("business") || ""),
      service: String(fd.get("service") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hola, quiero información sobre sus servicios.\nNombre: ${parsed.data.name}\nNegocio: ${parsed.data.business}\nServicio: ${parsed.data.service}\nCorreo: ${parsed.data.email}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contacto</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Cuéntanos sobre <span className="text-primary">tu marca</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">Te respondemos por WhatsApp con una propuesta inicial.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 grid gap-5 rounded-2xl border border-border bg-card p-8 sm:p-10">
          <Field name="name" label="Nombre" placeholder="Tu nombre" error={errors.name} />
          <Field name="email" label="Correo" placeholder="tu@correo.com" type="email" error={errors.email} />
          <Field name="business" label="Nombre del negocio" placeholder="Tu empresa" error={errors.business} />
          <div>
            <label className="text-sm font-medium">Servicio de interés</label>
            <select
              name="service"
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
            >
              <option value="" disabled>Selecciona una opción</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-amber px-6 py-4 font-semibold text-primary-foreground shadow-amber transition-smooth hover:scale-[1.02]"
          >
            Enviar y abrir WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text", error }: { name: string; label: string; placeholder: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={120}
        className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}