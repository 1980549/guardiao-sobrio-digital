import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { getRecentPosts } from "@/data/blogPosts";
import { ArrowRight, Shield, Zap, Eye, Lock } from "lucide-react";

const pathCards = [
  {
    id: "parando",
    label: "01",
    title: "Estou parando agora",
    description: "Primeiras 72h, vontade intensa, abstinencia fisica. Preciso de protocolo imediato.",
    href: "/comece-aqui",
    icon: Shield,
  },
  {
    id: "vontade",
    label: "02",
    title: "Tenho vontade agora",
    description: "A vontade chegou. Nao é fraqueza — e uma onda. Ha um protocolo para isso.",
    href: "/protocolos",
    icon: Zap,
  },
  {
    id: "familia",
    label: "03",
    title: "Protejo alguem em casa",
    description: "Voce nao e o problema. Mas pode ser parte da solucao. Comece por aqui.",
    href: "/comece-aqui",
    icon: Lock,
  },
];

const pillars = [
  {
    word: "Espelho",
    description: "Ver a realidade sem filtro. O primeiro passo e aceitar o que esta acontecendo de verdade.",
  },
  {
    word: "Tatica",
    description: "Protocolos praticos para atravessar os momentos criticos sem negociar com o vicio.",
  },
  {
    word: "Escudo",
    description: "Construir um perimetro de protecao emocional e ambiental para os proximos dias.",
  },
];

const Index = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center">
        {/* background texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">

            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Luis Vanzer — O Guardiao Sobrio
              </span>
            </div>

            {/* headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6">
              A verdade dificil{" "}
              <em className="text-primary not-italic">que devolve</em>{" "}
              a sua vida.
            </h1>

            {/* sub */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Estrategia pratica para atravessar a vontade de beber,
              proteger a casa e construir sobriedade sem teatro.
            </p>

            <p className="text-sm text-muted-foreground/70 max-w-lg mb-10">
              Para quem esta parando de beber, para quem atravessa uma vontade hoje
              e para quem protege alguem em casa.
            </p>

            {/* disclaimer */}
            <p className="text-xs text-muted-foreground/50 max-w-md mb-10 border-l border-border pl-3">
              Este conteudo nao substitui psiquiatras, psicologos ou medicos.
              Em emergencia medica, ligue 192 (SAMU).
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/comece-aqui" className="tactical-button flex items-center justify-center gap-2">
                Comece por aqui
                <ArrowRight size={16} />
              </Link>
              <Link to="/protocolos" className="tactical-button-outline flex items-center justify-center gap-2">
                Ver protocolos
              </Link>
            </div>

          </div>
        </div>

        {/* shield watermark */}
        <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none hidden lg:block">
          <ShieldIcon size="xl" showLetters={false} />
        </div>
      </section>

      {/* ── QUAL E SUA SITUACAO ───────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Ponto de entrada</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Qual e a sua situacao agora?
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
                  Acessar
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRES PILARES ──────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O metodo</span>
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

      {/* ── ANCORA HUMANA ─────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Quem fala</span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-8">
              &ldquo;Sobriedade nao e uma conquista.
              E uma identidade que voce escolhe todo dia.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldIcon size="sm" showLetters={false} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Luis Vanzer</p>
                <p className="text-xs text-muted-foreground">
                  Criador de conteudo sobre sobriedade adulta real.
                  Nao e terapeuta, nao e coach, nao e religioso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ULTIMOS ARTIGOS ───────────────────────────────── */}
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
                  Estrategia sem promessas vazias
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
                    {post.category ?? "Estrategia"}
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

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Missoes semanais</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Protocolo na sua caixa de entrada
          </h2>
          <p className="text-muted-foreground mb-8">
            Uma missao tatica por semana. Sem motivacao vazia, sem religiao, sem julgamento.
          </p>
          <NewsletterCapture />
        </div>
      </section>

    </Layout>
  );
};

export default Index;
