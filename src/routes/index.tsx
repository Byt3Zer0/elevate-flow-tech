import { createFileRoute } from "@tanstack/react-router";
import { useInView } from "@/hooks/use-in-view";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Instagram,
  MessageCircle,
  Settings,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuralFlow AI — Automatización Inteligente para Empresas" },
      {
        name: "description",
        content:
          "Agencia de automatización con Inteligencia Artificial. Bots para Instagram, asistentes de WhatsApp y automatización interna que ahorran tiempo y aumentan facturación.",
      },
      {
        property: "og:title",
        content: "NeuralFlow AI — Automatización Inteligente para Empresas",
      },
      {
        property: "og:description",
        content:
          "Bots para Instagram, asistentes de WhatsApp y automatización interna con IA. Ahorra horas y escala tu facturación.",
      },
      { name: "twitter:title", content: "NeuralFlow AI — Automatización Inteligente" },
      {
        name: "twitter:description",
        content:
          "Automatiza tu empresa con IA. Bots, WhatsApp y flujos internos que trabajan 24/7.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-violet/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full bg-violet-light/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <Navbar />
      <Hero />
      <TechLogos />
      <Services />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="relative z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-foreground">NeuralFlow</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicios" className="story-link transition-colors hover:text-foreground">
            Servicios
          </a>
          <a href="#beneficios" className="story-link transition-colors hover:text-foreground">
            Beneficios
          </a>
          <a href="#contacto" className="story-link transition-colors hover:text-foreground">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="group inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_-8px_var(--color-violet)] transition-all hover:bg-violet-light hover:shadow-[0_0_32px_-6px_var(--color-violet)]"
        >
          Agendar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8 lg:pt-36 lg:pb-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-sm font-medium text-violet-light">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
            </span>
            Automatización con IA para empresas ambiciosas
          </div>

          <h1 className="animate-fade-in-up delay-100 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Tu empresa trabajando{" "}
            <span className="text-gradient">mientras duermes</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Diseñamos agentes de IA que atienden clientes, cierran ventas y ejecutan procesos internos sin intervención humana. Más tiempo para estrategia, menos para tareas repetitivas.
          </p>

          <div className="animate-fade-in-up delay-300 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_28px_-8px_var(--color-violet)] transition-all hover:bg-violet-light hover:shadow-[0_0_40px_-6px_var(--color-violet)] active:scale-95"
            >
              Agendar consultoría gratis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-surface-elevated"
            >
              Ver servicios
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-surface-elevated text-xs font-semibold text-foreground"
                >
                  {i}K
                </div>
              ))}
            </div>
            <span>
              <strong className="text-foreground">+120 empresas</strong> ya automatizan con nosotros
            </span>
          </div>
        </div>

        <div className="animate-fade-in-scale delay-200 relative">
          <div className="relative mx-auto aspect-square max-w-lg lg:max-w-none">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet/20 to-violet-light/10 opacity-60 blur-2xl" />

            {/* Main dashboard card */}
            <div className="relative flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface-elevated p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet text-primary-foreground shadow-[0_0_20px_-8px_var(--color-violet)]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">Agente NeuralFlow</p>
                    <p className="text-xs text-muted-foreground">Activo · 24/7</p>
                  </div>
                </div>
                <div className="flex h-8 items-center gap-1.5 rounded-full bg-surface px-3 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-hidden rounded-2xl bg-surface/80 p-4">
                <ChatBubble side="left" text="¿En qué puedo ayudarte hoy?" />
                <ChatBubble side="right" text="Necesito automatizar la atención al cliente de mi tienda." />
                <ChatBubble
                  side="left"
                  text="Perfecto. Puedo diseñar un asistente de WhatsApp e Instagram que responda en segundos, califique leads y programe citas."
                />
                <ChatBubble side="right" text="¿Cuánto tiempo se tarda en implementar?" />
                <ChatBubble side="left" text="Entre 5 y 10 días hábiles, dependiendo de tus flujos." />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <StatCard label="Leads captados" value="+38%" />
                <StatCard label="Tiempo ahorrado" value="15h" />
                <StatCard label="Respuesta" value="<1s" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-4 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-foreground">+42%</p>
                  <p className="text-xs text-muted-foreground">Facturación mensual</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-violet">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-foreground">0.8s</p>
                  <p className="text-xs text-muted-foreground">Tiempo de respuesta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ side, text }: { side: "left" | "right"; text: string }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
          side === "right"
            ? "rounded-br-sm bg-violet text-primary-foreground"
            : "rounded-bl-sm border border-border bg-surface-elevated text-foreground"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-3 text-center">
      <p className="font-heading text-lg font-bold text-foreground sm:text-xl">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function TechLogos() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  const logos = [
    { name: "OpenAI", icon: Sparkles },
    { name: "WhatsApp", icon: MessageCircle },
    { name: "Meta", icon: Instagram },
    { name: "Make", icon: Workflow },
    { name: "n8n", icon: Settings },
  ];

  return (
    <section
      ref={ref}
      className="relative z-10 border-y border-border bg-surface/50 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Tecnologías que usamos
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-8 sm:flex sm:flex-wrap sm:gap-12 lg:gap-16">
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              className={`group flex items-center justify-center gap-3 ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: isInView ? `${i * 80}ms` : undefined }}
            >
              <logo.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-violet" />
              <span className="font-heading text-lg font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const services = [
    {
      icon: Instagram,
      title: "Instagram Bot",
      description:
        "Responde comentarios, DM y menciones automáticamente. Captura leads, califica intereses y deriva conversaciones a ventas humanas solo cuando es necesario.",
      features: ["Respuesta automática 24/7", "Calificación de leads", "Integración con CRM"],
    },
    {
      icon: MessageCircle,
      title: "Asistente WhatsApp",
      description:
        "Un agente de WhatsApp que entiende contexto, responde preguntas frecuentes, agenda citas y envía recordatorios. Trabaja como tu mejor vendedor, sin descanso.",
      features: ["Conversaciones naturales", "Agenda integrada", "Notificaciones push"],
    },
    {
      icon: Workflow,
      title: "Automatización Interna",
      description:
        "Conecta tus herramientas y elimina tareas repetitivas: reportes, entrada de datos, seguimiento de proyectos y alertas inteligentes para tu equipo.",
      features: ["Integración con 200+ apps", "Flujos personalizados", "Reportes automáticos"],
    },
  ];

  return (
    <section id="servicios" ref={ref} className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl text-left lg:mb-20">
          <h2
            className={`font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl ${
              isInView ? "animate-fade-in-up" : ""
            }`}
          >
            Servicios que <span className="text-gradient">multiplican resultados</span>
          </h2>
          <p
            className={`mt-5 text-base text-muted-foreground sm:text-lg ${
              isInView ? "animate-fade-in-up delay-100" : ""
            }`}
          >
            Cada solución está diseñada para un objetivo claro: reducir fricción, acelerar respuestas y convertir más clientes sin aumentar tu equipo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-3xl border border-border bg-surface-elevated p-6 card-glow sm:p-8 ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: isInView ? `${150 + i * 120}ms` : undefined }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const benefits = [
    {
      icon: Clock,
      stat: "15h",
      label: "semanales ahorradas",
      description:
        "Elimina tareas repetitivas de respuesta, seguimiento y datos. Tu equipo se enfoca en lo que realmente genera valor.",
    },
    {
      icon: TrendingUp,
      stat: "+40%",
      label: "más facturación",
      description:
        "Responde antes que la competencia, nunca pierdes un lead por demora y cierras más ventas con el mismo equipo.",
    },
    {
      icon: Zap,
      stat: "24/7",
      label: "disponibilidad",
      description:
        "Tus canales nunca cierran. Atiende prospectos en cualquier momento del día, incluso fuera de horario comercial.",
    },
  ];

  return (
    <section id="beneficios" ref={ref} className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center lg:mb-20">
          <h2
            className={`font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl ${
              isInView ? "animate-fade-in-up" : ""
            }`}
          >
            Impacto medible desde el <span className="text-gradient">primer mes</span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg ${
              isInView ? "animate-fade-in-up delay-100" : ""
            }`}
          >
            No hablamos de promesas vagas. Nuestros clientes reportan ahorro de tiempo real, más conversaciones cerradas y operaciones más escalables.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.label}
              className={`relative overflow-hidden rounded-3xl border border-border bg-surface p-8 text-center card-glow ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: isInView ? `${150 + i * 120}ms` : undefined }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-violet/5 to-transparent" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/10 text-violet">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <p className="font-heading text-5xl font-bold text-gradient sm:text-6xl">
                  {benefit.stat}
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {benefit.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="contacto" ref={ref} className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          className={`relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-8 text-center shadow-2xl sm:p-12 lg:p-16 ${
            isInView ? "animate-fade-in-scale" : ""
          }`}
        >
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-violet-light/10" />
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-violet/20 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-light/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet text-primary-foreground shadow-[0_0_30px_-8px_var(--color-violet)]">
              <Calendar className="h-7 w-7" />
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Agendemos una reunión de 30 minutos
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Analizamos tu operación actual, identificamos los procesos que la IA puede automatizar y te entregamos un plan de implementación sin costo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_32px_-8px_var(--color-violet)] transition-all hover:bg-violet-light hover:shadow-[0_0_48px_-6px_var(--color-violet)] active:scale-95"
              >
                Agendar consultoría gratis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hola@neuralflow.ai"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-surface-elevated"
              >
                Escribir por email
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Sin compromiso. Respuesta en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-foreground">NeuralFlow</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NeuralFlow AI. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#servicios" className="transition-colors hover:text-foreground">
            Servicios
          </a>
          <a href="#beneficios" className="transition-colors hover:text-foreground">
            Beneficios
          </a>
          <a href="#contacto" className="transition-colors hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
