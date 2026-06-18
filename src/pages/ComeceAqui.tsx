import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { ArrowRight, Shield, Zap, Lock, ChevronDown } from "lucide-react";

const passos = [
  {
    num: "01",
    title: "Escolha o seu ponto de entrada",
    body: "Existem tres situacoes diferentes que trazem pessoas aqui. Cada uma tem um caminho especifico. Identifique a sua antes de continuar.",
  },
  {
    num: "02",
    title: "Leia o protocolo do seu momento",
    body: "Nao comece pelo inicio. Comece pelo que e urgente. Cada protocolo foi escrito para uma situacao especifica — vontade agora, primeiras horas, proteger a casa.",
  },
  {
    num: "03",
    title: "Execute. Nao negocie.",
    body: "O protocolo so funciona se voce executar antes de tomar uma decisao. A ideia e criar um espaco entre o impulso e a acao.",
  },
  {
    num: "04",
    title: "Fique na lista para suporte continuo",
    body: "Uma missao tatica por semana direto no seu email. Sem motivacao vazia. Apenas estrategia.",
  },
];

const faqs = [
  {
    q: "Isso substitui terapia ou psiquiatra?",
    a: "Nao. Este conteudo e complementar, nunca substituto. Se voce esta em crise grave ou com pensamentos de autolesao, procure um profissional de saude ou ligue 192 (SAMU).",
  },
  {
    q: "Funciona para quem recaiu?",
    a: "Sim. Recaida nao e fracasso — e informacao. Os protocolos foram escritos sem julgamento sobre o historico de quem os usa.",
  },
  {
    q: "Preciso me cadastrar em alguma coisa?",
    a: "Nao para acessar o conteudo gratuito. O cadastro na lista e opcional e so serve para receber missoes semanais por email.",
  },
  {
    q: "E para mulheres tambem?",
    a: "Sim. A linguagem e o metodo se aplicam a adultos em geral. O publico principal e 36-54 anos, mas o conteudo nao tem restricao de genero.",
  },
];

const ComeceAqui = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Ponto de partida
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Por onde{" "}
              <em className="text-primary not-italic">voce comeca</em>
              {" "}depende de onde voce esta.
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Nao existe um unico caminho. Existe o seu caminho, no seu momento.
              Escolha abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRES ENTRADAS ────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Sua situacao</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                num: "01",
                title: "Estou parando agora",
                desc: "Primeiras 72h, abstinencia, vontade intensa. Protocolo imediato.",
                href: "/protocolos",
                label: "Protocolo Escudo-72h",
              },
              {
                icon: Zap,
                num: "02",
                title: "Tenho vontade agora",
                desc: "A onda chegou. Existe um protocolo especifico para atravessar sem ceder.",
                href: "/protocolos",
                label: "Ver protocolos",
              },
              {
                icon: Lock,
                num: "03",
                title: "Protejo alguem em casa",
                desc: "Familiar ou parceiro com problema. Ha um caminho para voce tambem.",
                href: "/protocolos",
                label: "Estrategia para familia",
              },
            ].map((item) => (
              <Link
                key={item.num}
                to={item.href}
                className="tactical-card group block p-7 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-primary/60">{item.num}</span>
                  <item.icon size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <div className="section-divider mb-5" />
                <h3 className="font-display text-xl text-foreground mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-primary font-mono">
                  {item.label}
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Como usar</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            Quatro passos. Nessa ordem.
          </h2>
          <div className="space-y-0">
            {passos.map((p) => (
              <div key={p.num} className="flex gap-8 py-7 border-b border-border/50">
                <span className="font-mono text-xs text-primary/50 mt-1 w-8 flex-shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Perguntas</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-10">
            Duvidas frequentes
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-primary/60 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="text-sm text-muted-foreground leading-relaxed pb-5 pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Suporte continuo</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Missao tatica toda semana
          </h2>
          <p className="text-muted-foreground mb-8">
            Sem motivacao. Sem religiao. Sem julgamento. So estrategia.
          </p>
          <NewsletterCapture />
        </div>
      </section>

    </Layout>
  );
};

export default ComeceAqui;
