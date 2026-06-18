import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { getRecentPosts } from "@/data/blogPosts";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

// Cada card aponta para a trilha correta (rota individual)
const pathCards = [
  {
    id: "parando",
    label: "01",
    title: "Estou em recuperação",
    description:
      "Saiu da crise aguda e está construindo estrutura. Aqui estão os recursos para manter.",
    href: "/trilhas/recuperacao",
    icon: Shield,
  },
  {
    id: "vontade",
    label: "02",
    title: "Bateu vontade de beber agora",
    description:
      "Fissura presente. Não é fraqueza — é uma onda. Tem protocolo para os próximos 3 minutos.",
    href: "/trilhas/vontade-hoje",
    icon: Zap,
  },
  {
    id: "familia",
    label: "03",
    title: "Protejo alguém em casa",
    description:
      "Familiar de quem bebe. Não é sua função curar — mas você pode proteger a casa.",
    href: "/trilhas/familiar",
    icon: Lock,
  },
];

const pillars = [
  {
    word: "Espelho",
    description:
      "Ver a realidade sem filtro. O primeiro passo é aceitar o que está acontecendo de verdade.",
  },
  {
    word: "Tática",
    description:
      "Protocolos práticos para atravessar os momentos críticos sem negociar com o vício.",
  },
  {
    word: "Escudo",
    description:
      "Construir um perímetro de proteção emocional e ambiental para os próximos dias.",
  },
];

const Index = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Luis Vanzer — O Guardião Sóbrio
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6">
              A verdade difícil{" "}
              <em className="text-primary not-italic">que devolve</em>{" "}
              a sua vida.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Estratégia prática para atravessar a vontade de beber,
              proteger a casa e construir sobriedade sem teatro.
            </p>

            <p className="text-sm text-muted-foreground/70 max-w-lg mb-10">
              Para quem está em recuperação, para quem bateu vontade hoje
              e para quem protege alguém em casa.
            </p>

            <p className="text-xs text-muted-foreground/50 max-w-md mb-10 border-l border-border pl-3">
              Este conteúdo não substitui psiquiatras, psicólogos ou médicos.
              Em emergência, ligue 192 (SAMU).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/comece-aqui" className="tactical-button flex items-center justify-center gap-2">
                Começar aqui
                <ArrowRight size={16} />
              </Link>
              <Link to="/protocolos" className="tactical-button-outline flex items-center justify-center gap-2">
                Ver protocolos
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none hidden lg:block">
          <ShieldIcon size="xl" showLetters={false} />
        </div>
      </section>

      {/* ── QUAL É SUA SITUAÇÃO ────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Ponto de entrada</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Qual é a sua situação agora?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Cada caminho tem um protocolo. Escolha o que descreve o seu momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pathCards.map((card) => (
              <Link
                key={card.id}
                to={card.href}
                className="tactical-card group block p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-primary/60">{card.label}</span>
                  <card.icon
                    size={18}
                    className="text-primary/40 group-hover:text-primary transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-primary font-medium">
                  Acessar trilha
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRÊS PILARES ───────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O método</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {pillars.map((pillar, i) => (
              <div key={pillar.word} className="group">
                <div className="section-divider mb-8" />
                <span className="font-mono text-xs text-muted-foreground/50 mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
                  {pillar.word}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÂNCORA HUMANA ─────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Quem fala</span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-8">
              &ldquo;Sobriedade não é uma conquista.
              É uma identidade que você escolhe todo dia.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldIcon size="sm" showLetters={false} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Luis Vanzer</p>
                <p className="text-xs text-muted-foreground">
                  Criador de conteúdo sobre sobriedade adulta real.
                  Não é terapeuta, não é coach, não é religioso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÚTIMOS ARTIGOS ────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4">

            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Artigos</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Estratégia sem promessas vazias
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden md:flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="tactical-card group block p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="section-divider mb-5" />
                  <span className="text-xs font-mono text-muted-foreground/50 mb-3 block">
                    {post.category ?? "Estratégia"}
                  </span>
                  <h3 className="font-display text-lg text-foreground mb-3 leading-snug group-hover:text-primary/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    Ler artigo <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Link to="/blog" className="tactical-button-outline w-full flex items-center justify-center gap-2">
                Ver todos os artigos <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* ── NEWSLETTER (MELHORADA) ──────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolo semanal</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Um protocolo por semana.
          </h2>
          <p className="text-muted-foreground mb-2">
            Direto na sua caixa. Sem spam. Sem teatro.
          </p>
          <p className="text-muted-foreground/70 text-sm mb-8">
            Conteúdo para quem está em recuperação ou protegendo alguém em casa.
            Uma missão prática — não só para ler.
          </p>
          <NewsletterCapture />
        </div>
      </section>

    </Layout>
  );
};

export default Index;
