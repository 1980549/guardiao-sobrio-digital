import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { Book, Users, Crown, Mail, ArrowRight, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "disponivel" | "em-breve" | "lista-espera";

const statusMeta: Record<Status, { label: string; color: string }> = {
  disponivel: { label: "Disponivel agora", color: "text-primary border-primary/40 bg-primary/10" },
  "em-breve": { label: "Em breve", color: "text-muted-foreground border-border bg-secondary" },
  "lista-espera": { label: "Lista de espera", color: "text-foreground border-foreground/30 bg-foreground/5" },
};

const produtos = [
  {
    id: "ebook",
    num: "01",
    title: "Manual dos 90 Dias",
    subtitle: "E-book — Protocolo do Escudo",
    description:
      "O guia completo para os primeiros 90 dias de sobriedade. Protocolos diarios, checklists e guias para situacoes de crise.",
    icon: Book,
    features: [
      "Protocolo dia-a-dia para 90 dias",
      "Checklists imprimiveis",
      "Guia de situacoes de crise",
      "Relatorios semanais de front",
    ],
    status: "em-breve" as Status,
    cta: "Entrar na lista",
    ctaHref: "/comece-aqui",
    forWho: "Para quem esta nos primeiros 90 dias e precisa de estrutura diaria.",
  },
  {
    id: "comunidade",
    num: "02",
    title: 'Comunidade \"A Base\"',
    subtitle: "Suporte entre pares",
    description:
      "Um espaco sem gurus e sem religiao. Pessoas reais navegando o mesmo processo, com moderacao ativa.",
    icon: Users,
    features: [
      "Canais por situacao (recuperacao, familia, crise)",
      "Suporte entre pares",
      "Encontros semanais de check-in",
      "Moderacao ativa, sem gurus",
    ],
    status: "em-breve" as Status,
    cta: "Entrar na lista",
    ctaHref: "/comece-aqui",
    forWho: "Para quem precisa de suporte real sem julgamento.",
  },
  {
    id: "mentoria",
    num: "03",
    title: "Mentoria 1:1",
    subtitle: "Acompanhamento individual",
    description:
      "Sessoes individuais com Luis Vanzer. Plano tatico personalizado para a sua situacao especifica.",
    icon: Crown,
    features: [
      "Sessoes individuais por video",
      "Plano tatico personalizado",
      "Suporte por mensagem entre sessoes",
      "Vagas limitadas por trimestre",
    ],
    status: "lista-espera" as Status,
    cta: "Solicitar vaga",
    ctaHref: "/comece-aqui",
    forWho: "Para quem quer atencao individual e um plano feito para o seu caso.",
  },
];

const Produtos = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Produtos
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Ferramentas para quem{" "}
              <em className="text-primary not-italic">esta no processo</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Nao sao cursos de motivacao. Sao instrumentos praticos para atravessar
              os momentos especificos que o vicio cria.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUTOS GRID ────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O funil</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {produtos.map((p) => {
              const meta = statusMeta[p.status];
              return (
                <div key={p.id} className="tactical-card flex flex-col p-7">

                  {/* header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span className="font-mono text-xs text-muted-foreground/50 block mb-1">{p.num}</span>
                      <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono ${meta.color}`}>
                        <Clock size={10} />
                        {meta.label}
                      </div>
                    </div>
                    <p.icon size={20} className="text-primary/40 mt-1" />
                  </div>

                  {/* content */}
                  <div className="section-divider mb-6" />
                  <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/60 mb-4">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* for who */}
                  <p className="text-xs text-muted-foreground/60 border-l border-border pl-3 mb-6 leading-relaxed">
                    {p.forWho}
                  </p>

                  {/* cta */}
                  <Link
                    to={p.ctaHref}
                    className="tactical-button-outline flex items-center justify-center gap-2 mt-auto"
                  >
                    {p.cta} <ArrowRight size={14} />
                  </Link>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FUNIL EXPLICADO ──────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Como funciona</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-6">
            Cada produto serve um momento diferente
          </h2>
          <div className="space-y-6">
            {[
              { fase: "Fase 1", texto: "Manual dos 90 Dias: estrutura e protocolo para atravessar os primeiros meses." },
              { fase: "Fase 2", texto: "Comunidade A Base: suporte continuo sem julgamento para o dia a dia da sobriedade." },
              { fase: "Fase 3", texto: "Mentoria 1:1: para quem precisa de um plano especifico e acompanhamento direto." },
            ].map((item) => (
              <div key={item.fase} className="flex gap-6 items-start">
                <span className="font-mono text-xs text-primary/60 mt-1 w-14 flex-shrink-0">{item.fase}</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 border-l border-border pl-3 mt-10 leading-relaxed">
            Quando os produtos forem lancados, os precos e condicoes serao divulgados primeiro
            para a lista do Protocolo Semanal.
          </p>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Seja avisado primeiro</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Fique na lista
          </h2>
          <p className="text-muted-foreground mb-8">
            Lancamentos, vagas e conteudo tatico direto na sua caixa de entrada.
          </p>
          <NewsletterCapture />
        </div>
      </section>

    </Layout>
  );
};

export default Produtos;
