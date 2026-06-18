import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
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
    whereYouAre:
      "Você não está mais na crise aguda. Está construindo a estrutura — o trabalho silencioso que ninguém aplaude e que sustenta tudo.",
    description:
      "A recuperação não é um momento — é um caminho. Cada dia é uma vitória. Cada semana é uma fortaleza. Aqui estão os recursos para construir consistência.",
    icon: RefreshCw,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h",
      reason: "Use como base. Reaplique a estrutura sempre que sentir que a casa está afrouxando.",
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
      title: "Receber 1 protocolo prático por semana",
      description:
        "Consistência se constrói com lembrete. Entre no Protocolo Semanal e receba 1 missão prática por semana.",
      href: "/produtos",
      cta: "Entrar no Protocolo Semanal",
    },
  },
  "vontade-hoje": {
    title: "Hoje Bateu Vontade de Beber",
    subtitle: "Ação imediata para atravessar",
    whereYouAre:
      "A vontade está aqui, agora. Não é hora de pensar — é hora de executar. Os 3 passos abaixo são para os próximos minutos.",
    description:
      "A fissura não dura para sempre. Em geral, o pico passa em 20 a 40 minutos se você não alimentar o ciclo. O objetivo não é vencer pela vontade — é atravessar pela ação.",
    icon: Flame,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h",
      reason: "Quando os 3 passos forem executados, abra o Escudo para sustentar as próximas horas.",
    },
    articles: ["1", "6", "8", "10", "11"],
    immediateAction: {
      title: "Ação imediata (3 minutos)",
      steps: [
        {
          icon: Droplets,
          text: "3 copos d'água. Agora.",
          detail: "Não dois. Três. A hidratação altera a química e cria 2 minutos de pausa.",
        },
        {
          icon: Wind,
          text: "Respiração ou frio.",
          detail: "10 respirações profundas OU água fria no rosto por 30 segundos.",
        },
        {
          icon: Footprints,
          text: "Mude de ambiente.",
          detail: "Levante e vá para outro cômodo. Movimento quebra o ciclo da fissura.",
        },
      ],
    },
    nextStep: {
      title: "Atravessou? Estabilize as próximas 72h",
      description:
        "Vontade isolada vira recaída quando vira rotina. Entre no Protocolo Escudo e ancore as próximas 72 horas.",
      href: "/protocolos/escudo-72h",
      cta: "Ir para Protocolo Escudo—72h",
    },
  },
  familiar: {
    title: "Sou Familiar — Proteger a Casa",
    subtitle: "Limites sem guerra",
    whereYouAre:
      "Você não é o terapeuta. Não é sua função curar. Sua função é proteger — a si, aos dependentes e à sua sanidade. Isso não é abandono. É sobrevivência.",
    description:
      "Familiares carregam um peso invisível. Esta trilha existe para você não desabar enquanto a outra pessoa decide o caminho dela.",
    icon: Heart,
    protocol: {
      title: "Protocolo Perímetro—24h",
      href: "/protocolos/perimetro-24h",
      reason: "Use nas próximas 24 horas para fechar o perímetro emocional e prático da casa.",
    },
    articles: ["2", "4", "7"],
    phrases: [
      "Não discuto assim. Amanhã conversamos.",
      "Vou me recolher agora.",
      "Não minto por você.",
      "Estou aqui, mas não nessas condições.",
    ],
    nextStep: {
      title: "Receber orientação semanal para familiares",
      description:
        "Proteger a casa exige reposição. Entre no Protocolo Semanal — você recebe 1 protocolo prático por semana, com trilha específica para familiares.",
      href: "/produtos",
      cta: "Entrar no Protocolo Semanal",
    },
  },
};

const Trilhas = () => {
  const { trilhaId } = useParams<{ trilhaId: string }>();
  const trilha = trilhasData[trilhaId ?? ""];

  if (!trilha) {
    return (
      <Layout>
        <div className="py-16 md:py-24 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Trilha não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar para o início
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = trilha.icon;
  const filteredPosts = blogPosts.filter((post) => trilha.articles.includes(post.id));

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>

            {/* Header */}
            <header className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={40} className="text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                {trilha.title}
              </h1>
              <p className="text-lg text-primary mb-4">{trilha.subtitle}</p>
              <p className="text-muted-foreground max-w-2xl mx-auto">{trilha.description}</p>
            </header>

            {/* 4 passos: orientação de crise */}
            <div className="space-y-6 mb-16">
              {/* 1. Onde você está */}
              <div className="tactical-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      01 · Onde você está
                    </p>
                    <p className="text-foreground">{trilha.whereYouAre}</p>
                  </div>
                </div>
              </div>

              {/* 2. O que fazer agora */}
              <div className="tactical-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      02 · O que fazer agora
                    </p>
                    <p className="font-display text-lg text-foreground">
                      {trilha.immediateAction?.title ?? "Ações imediatas"}
                    </p>
                  </div>
                </div>

                {trilha.immediateAction ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {trilha.immediateAction.steps.map((step, index) => (
                      <div key={index} className="bg-secondary/40 rounded p-4">
                        <step.icon size={28} className="text-primary mb-3" />
                        <h3 className="font-display text-base text-foreground mb-1">
                          {step.text}
                        </h3>
                        <p className="text-sm text-muted-foreground">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                ) : trilha.checklist ? (
                  <ul className="space-y-2">
                    {trilha.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : trilha.phrases ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {trilha.phrases.map((phrase) => (
                      <div
                        key={phrase}
                        className="bg-secondary/40 border border-border rounded p-3"
                      >
                        <p className="text-foreground text-sm">"{phrase}"</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* 3. Protocolo recomendado */}
              <Link to={trilha.protocol.href} className="tactical-card group block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldLucide size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      03 · Protocolo recomendado
                    </p>
                    <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {trilha.protocol.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {trilha.protocol.reason}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-primary group-hover:translate-x-1 transition-transform mt-2"
                  />
                </div>
              </Link>

              {/* 4. Próximo passo */}
              <Link to={trilha.nextStep.href} className="tactical-card group block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Compass size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      04 · Próximo passo
                    </p>
                    <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {trilha.nextStep.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {trilha.nextStep.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-3 group-hover:gap-3 transition-all">
                      {trilha.nextStep.cta}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Suporte adicional: checklist/frases extras quando já não foram usadas em "agora" */}
            {trilha.immediateAction && trilha.checklist && (
              <div className="tactical-card mb-12">
                <h2 className="font-display text-xl text-foreground mb-4">
                  Checklist de base
                </h2>
                <ul className="space-y-3">
                  {trilha.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Articles */}
            {filteredPosts.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Artigos relacionados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trilhas;
