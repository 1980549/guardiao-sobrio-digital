import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { BlogCard } from "@/components/BlogCard";
import { ShieldIcon } from "@/components/ShieldIcon";
import { blogPosts } from "@/data/blogPosts";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Flame,
  Heart,
  Droplets,
  Wind,
  Footprints,
  CheckCircle,
  MapPin,
  Zap,
  Shield as ShieldLucide,
  Compass,
} from "lucide-react";

type Step = { icon: typeof Droplets; text: string; detail: string };

type Trilha = {
  title: string;
  subtitle: string;
  urgency?: "critical" | "building" | "protect";
  whereYouAre: string;
  description: string;
  icon: typeof RefreshCw;
  protocol: { title: string; href: string; reason: string };
  articles: string[];
  immediateAction?: { title: string; steps: Step[] };
  checklist?: string[];
  phrases?: string[];
  nextStep: { title: string; description: string; href: string; cta: string };
};

const trilhasData: Record<string, Trilha> = {
  recuperacao: {
    title: "Estou em Recuperação",
    subtitle: "Construindo sobriedade dia após dia",
    urgency: "building",
    whereYouAre:
      "Você não está mais na crise aguda. Está construindo a estrutura — o trabalho silencioso que ninguém aplaude e que sustenta tudo.",
    description:
      "A recuperação não é um momento — é um caminho. Cada dia é uma vitória. Cada semana é uma fortaleza. Aqui estão os recursos para construir consistência.",
    icon: RefreshCw,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h",
      reason:
        "Use como base. Reaplique a estrutura sempre que sentir que a casa está afrouxando.",
    },
    articles: ["1", "3", "5", "9", "10", "12"],
    checklist: [
      "Perímetro da casa fechado (sem álcool)",
      "Água visível em 3 pontos",
      "Rotina de bunker noturno definida",
      "Uma pessoa de confiança avisada",
      "Protocolo 3-3-3 memorizado",
      "Relatório diário feito",
    ],
    nextStep: {
      title: "Um protocolo prático por semana",
      description:
        "Consistência se constrói com estrutura. Entre no Protocolo Semanal e receba 1 missão prática por semana — direto na sua caixa. Sem spam. Sem teatro.",
      href: "/produtos",
      cta: "Quero o Protocolo Semanal",
    },
  },
  "vontade-hoje": {
    title: "Hoje Bateu Vontade de Beber",
    subtitle: "Ação imediata para atravessar",
    urgency: "critical",
    whereYouAre:
      "A vontade está aqui, agora. Não é hora de pensar — é hora de executar. Os 3 passos abaixo são para os próximos minutos.",
    description:
      "A fissura não dura para sempre. Em geral, o pico passa em 20 a 40 minutos se você não alimentar o ciclo. O objetivo não é vencer pela vontade — é atravessar pela ação.",
    icon: Flame,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h",
      reason:
        "Quando os 3 passos forem executados, abra o Escudo para sustentar as próximas horas.",
    },
    articles: ["1", "6", "8", "10", "11"],
    immediateAction: {
      title: "Ação imediata — próximos 3 minutos",
      steps: [
        {
          icon: Droplets,
          text: "3 copos d'água. Agora.",
          detail:
            "Não dois. Três. A hidratação altera a química e cria 2 minutos de pausa.",
        },
        {
          icon: Wind,
          text: "Respiração ou frio.",
          detail:
            "10 respirações profundas OU água fria no rosto por 30 segundos.",
        },
        {
          icon: Footprints,
          text: "Mude de ambiente.",
          detail:
            "Levante e vá para outro cômodo. Movimento quebra o ciclo da fissura.",
        },
      ],
    },
    nextStep: {
      title: "Atravessou? Ancore as próximas 72h",
      description:
        "Vontade isolada vira recaída quando vira rotina. Abra o Protocolo Escudo e estruture as próximas 72 horas antes que a próxima onda chegue.",
      href: "/protocolos/escudo-72h",
      cta: "Abrir Protocolo Escudo—72h",
    },
  },
  familiar: {
    title: "Sou Familiar — Proteger a Casa",
    subtitle: "Limites sem guerra",
    urgency: "protect",
    whereYouAre:
      "Você não é o terapeuta. Não é sua função curar. Sua função é proteger — a si, aos dependentes e à sua sanidade. Isso não é abandono. É sobrevivência.",
    description:
      "Familiares carregam um peso invisível. Esta trilha existe para você não desabar enquanto a outra pessoa decide o caminho dela.",
    icon: Heart,
    protocol: {
      title: "Protocolo Perímetro—24h",
      href: "/protocolos/perimetro-24h",
      reason:
        "Use nas próximas 24 horas para fechar o perímetro emocional e prático da casa.",
    },
    articles: ["2", "4", "7"],
    phrases: [
      "Não discuto assim. Amanhã conversamos.",
      "Vou me recolher agora.",
      "Não minto por você.",
      "Estou aqui, mas não nessas condições.",
    ],
    nextStep: {
      title: "Orientação semanal para familiares",
      description:
        "Proteger a casa exige reposição. Entre no Protocolo Semanal — 1 protocolo por semana, com trilha específica para familiares. Direto na sua caixa. Sem spam.",
      href: "/produtos",
      cta: "Quero o Protocolo Semanal",
    },
  },
};

// Índice de trilhas — exibido quando não há :trilhaId
const TrilhasIndex = () => (
  <Layout>
    <Seo
      title="Trilhas | Guardião Sóbrio"
      description="Três caminhos: em recuperação, vontade hoje, ou apoiando alguém. Escolha sua trilha e siga o protocolo certo para o momento."
      path="/trilhas"
    />
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* eyebrow */}
      <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
        Trilhas de orientação
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
        Qual é a sua situação{" "}
        <em className="text-primary not-italic">agora?</em>
      </h1>
      <p className="text-muted-foreground font-body text-base mb-14 max-w-prose">
        Cada trilha orienta um momento diferente. Escolha o que descreve o que você está vivendo agora.
      </p>

      <div className="grid gap-4">
        {[
          {
            id: "recuperacao",
            num: "01",
            Icon: RefreshCw,
            title: "Estou em Recuperação",
            sub: "Construindo sobriedade dia após dia",
            desc: "Para quem já saiu da crise aguda e precisa de estrutura para o dia a dia.",
            urgencyClass: "",
          },
          {
            id: "vontade-hoje",
            num: "02",
            Icon: Flame,
            title: "Hoje Bateu Vontade de Beber",
            sub: "Ação imediata",
            desc: "Para quem está sentindo fissura agora e precisa de protocolo para os próximos minutos.",
            urgencyClass: "border-destructive/40 hover:border-destructive/70",
          },
          {
            id: "familiar",
            num: "03",
            Icon: Heart,
            title: "Sou Familiar — Proteger a Casa",
            sub: "Limites sem guerra",
            desc: "Para cônjuges, pais e filhos adultos que convivem com alguém que bebe.",
            urgencyClass: "",
          },
        ].map((t) => (
          <Link
            key={t.id}
            to={`/trilhas/${t.id}`}
            className={`tactical-card flex items-start gap-5 group ${
              t.urgencyClass ||
              "hover:border-primary/40"
            }`}
          >
            <div className="mt-1 p-2 rounded bg-primary/10 text-primary flex-shrink-0">
              <t.Icon size={22} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-body text-muted-foreground tracking-widest">
                  {t.num}
                </span>
                <span className="text-xs font-body text-muted-foreground">·</span>
                <span className="text-xs font-body text-muted-foreground">{t.sub}</span>
              </div>
              <h2 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                {t.title}
              </h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {t.desc}
              </p>
            </div>
            <ArrowRight
              size={18}
              className="mt-1 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"
            />
          </Link>
        ))}
      </div>

      {/* aviso */}
      <div className="alert-box mt-12 text-sm text-muted-foreground">
        <strong className="text-foreground">Aviso:</strong> Este conteúdo é orientação prática baseada em experiência.
        Não substitui médico, psicólogo ou psiquiatra. Em emergência, ligue{" "}
        <strong>192 (SAMU)</strong>.
      </div>
    </div>
  </Layout>
);

const Trilhas = () => {
  const { trilhaId } = useParams<{ trilhaId: string }>();

  // Sem parâmetro: mostra o índice das trilhas
  if (!trilhaId) return <TrilhasIndex />;

  const trilha = trilhasData[trilhaId ?? ""];

  if (!trilha) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-6">Trilha não encontrada</h1>
          <Link to="/trilhas" className="tactical-button inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Ver todas as trilhas
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = trilha.icon;

  const urgencyBadge =
    trilha.urgency === "critical"
      ? { label: "Ação imediata", cls: "text-destructive border-destructive/40 bg-destructive/10" }
      : trilha.urgency === "protect"
      ? { label: "Proteger a casa", cls: "text-primary border-primary/40 bg-primary/10" }
      : { label: "Construção diária", cls: "text-muted-foreground border-border bg-secondary" };

  const filteredPosts = blogPosts.filter((post) =>
    trilha.articles.includes(post.id)
  );

  return (
    <Layout>
      <Seo
        title={`${trilha.title} | Trilhas Guardião Sóbrio`}
        description={trilha.subtitle}
        path={`/trilhas/${trilhaId}`}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/trilhas"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 font-body"
        >
          <ArrowLeft size={14} /> Todas as trilhas
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full border ${
                urgencyBadge.cls
              }`}
            >
              <Icon size={12} />
              {urgencyBadge.label}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-3">
            {trilha.title}
          </h1>
          <p className="text-muted-foreground font-body text-base">
            {trilha.subtitle}
          </p>
        </div>

        {/* Passos de orientação */}
        <div className="space-y-8">

          {/* 01 — Onde você está */}
          <section>
            <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
              01 · Onde você está
            </p>
            <div className="action-box">
              <p className="text-base font-body text-foreground leading-relaxed">
                {trilha.whereYouAre}
              </p>
            </div>
          </section>

          {/* 02 — O que fazer agora */}
          <section>
            <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
              02 · O que fazer agora
            </p>
            <h2 className="font-display text-2xl text-foreground mb-5">
              {trilha.immediateAction?.title ?? "Ações imediatas"}
            </h2>

            {trilha.immediateAction ? (
              <div className="space-y-4">
                {trilha.immediateAction.steps.map((step, index) => (
                  <div key={index} className="protocol-mission">
                    <div className="p-2 rounded bg-primary/10 text-primary flex-shrink-0">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground mb-0.5">
                        {step.text}
                      </p>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : trilha.checklist ? (
              <ul className="space-y-3">
                {trilha.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-foreground">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : trilha.phrases ? (
              <div className="space-y-3">
                {trilha.phrases.map((phrase) => (
                  <blockquote
                    key={phrase}
                    className="border-l-2 border-primary pl-4 font-display text-lg text-foreground italic"
                  >
                    "{phrase}"
                  </blockquote>
                ))}
              </div>
            ) : null}
          </section>

          {/* 03 — Protocolo recomendado */}
          <section>
            <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
              03 · Protocolo recomendado
            </p>
            <Link
              to={trilha.protocol.href}
              className="tactical-card block group hover:border-primary/60"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {trilha.protocol.title}
                </h3>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {trilha.protocol.reason}
              </p>
            </Link>
          </section>

          {/* 04 — Próximo passo */}
          <section>
            <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
              04 · Próximo passo
            </p>
            <div className="tactical-card border-primary/20">
              <h3 className="font-display text-2xl text-foreground mb-2">
                {trilha.nextStep.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                {trilha.nextStep.description}
              </p>
              <Link
                to={trilha.nextStep.href}
                className="tactical-button inline-flex items-center gap-2"
              >
                {trilha.nextStep.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* Checklist extra (quando immediateAction já foi usada) */}
          {trilha.immediateAction && trilha.checklist && (
            <section>
              <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-3">
                Checklist de base
              </p>
              <ul className="space-y-3">
                {trilha.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-foreground">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Aviso ético */}
        <div className="alert-box mt-12 text-sm text-muted-foreground">
          <strong className="text-foreground">Aviso:</strong> Este conteúdo é orientação prática baseada em
          experiência. Não substitui médico, psicólogo ou psiquiatra.{" "}
          Em caso de abstinência intensa (tremores, suor excessivo, confusão), procure ajuda médica
          imediatamente. Emergência: <strong>192 (SAMU)</strong>.
        </div>

        {/* Artigos relacionados */}
        {filteredPosts.length > 0 && (
          <div className="mt-16">
            <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-6">
              Artigos relacionados
            </p>
            <div className="grid gap-4">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Trilhas;
