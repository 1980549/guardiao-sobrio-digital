import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { ProtocolCard } from "@/components/ProtocolCard";
import { PathCard } from "@/components/PathCard";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { ShieldIcon } from "@/components/ShieldIcon";
import { getRecentPosts } from "@/data/blogPosts";
import { ArrowRight, RefreshCw, Flame, Heart } from "lucide-react";

const Index = () => {
  const recentPosts = getRecentPosts(6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <ShieldIcon size="lg" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A verdade difícil que devolve a sua vida e a sua família.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Estratégia prática para atravessar a vontade de beber, proteger a minha casa e construir sobriedade sem teatro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/comece-aqui" className="tactical-button flex items-center justify-center gap-2">
                Comece por aqui
                <ArrowRight size={18} />
              </Link>
              <Link to="/blog" className="tactical-button-outline flex items-center justify-center gap-2">
                Ler artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Path Cards Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl text-center text-foreground mb-12">
            Qual é a sua situação agora?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <PathCard
              title="Estou em recuperação"
              description="Construindo sobriedade dia após dia. O caminho da consistência."
              href="/trilhas/recuperacao"
              icon={<RefreshCw size={28} />}
            />
            <PathCard
              title="Hoje bateu vontade de beber"
              description="A fissura está aqui agora. Ação imediata para atravessar."
              href="/trilhas/vontade-hoje"
              icon={<Flame size={28} />}
            />
            <PathCard
              title="Sou familiar—proteger casa"
              description="Vive com quem bebe. Limites e proteção sem guerra."
              href="/trilhas/familiar"
              icon={<Heart size={28} />}
            />
          </div>
        </div>
      </section>

      {/* Protocols Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Protocolos de Proteção
              </h2>
              <p className="text-muted-foreground">
                Missões táticas para momentos específicos. Execute, não negocie.
              </p>
            </div>
            <Link to="/protocolos" className="text-primary flex items-center gap-2 hover:gap-3 transition-all text-sm font-medium">
              Ver todos
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProtocolCard
              title="Protocolo Escudo—72h"
              description="As primeiras 72 horas sem álcool. Juramento, missões e bunker noturno para atravessar o campo minado inicial."
              duration="72 horas"
              href="/protocolos/escudo-72h"
              icon="shield"
            />
            <ProtocolCard
              title="Protocolo Perímetro—24h"
              description="Para quem vive com alguém que bebe. Proteger a casa sem guerra. Limites claros, frases prontas, bunker pessoal."
              duration="24 horas"
              href="/protocolos/perimetro-24h"
              icon="users"
            />
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Artigos Recentes
              </h2>
              <p className="text-muted-foreground">
                Estratégias práticas sem promessas vazias.
              </p>
            </div>
            <Link to="/blog" className="text-primary flex items-center gap-2 hover:gap-3 transition-all text-sm font-medium">
              Ver todos
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Receba protocolos — sem teatro
            </h2>
            <p className="text-muted-foreground mb-8">
              Um e-mail por semana. Estratégias práticas direto na sua caixa de entrada.
            </p>
            <NewsletterCapture />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
