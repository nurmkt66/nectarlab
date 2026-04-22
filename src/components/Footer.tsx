import { Instagram, Facebook, Linkedin } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";
import logo from "@/assets/nectarlab-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Nectar Lab" width={180} height={48} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Creamos estrategias que venden. Marketing digital con foco en resultados medibles.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Síguenos</h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" target="_blank" rel="noopener noreferrer" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</h4>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm hover:text-primary transition-smooth">
            WhatsApp directo →
          </a>
          <a href="#contacto" className="mt-2 block text-sm text-muted-foreground hover:text-primary transition-smooth">
            Formulario de contacto
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nectar Lab. Todos los derechos reservados.
      </div>
    </footer>
  );
}