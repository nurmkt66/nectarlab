import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nectar Lab — Agencia de marketing digital con resultados" },
      { name: "description", content: "Impulsamos marcas con estrategia y resultados. Google Ads, Meta, TikTok, diseño y video que convierte. Habla con nosotros por WhatsApp." },
      { property: "og:title", content: "Nectar Lab — Marketing digital que vende" },
      { property: "og:description", content: "Publicidad en Google, Meta y TikTok con diseño y video que convierte." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Portfolio />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
