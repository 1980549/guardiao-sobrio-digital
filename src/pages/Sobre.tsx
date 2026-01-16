import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { ArrowRight, Eye, Home, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="text-center mb-16">
              <ShieldIcon size="xl" className="mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Sobre o Guardião Sóbrio
              </h1>
              <p className="text-lg text-muted-foreground">
                Não sou guru. Não sou terapeuta. Sou alguém que atravessou.
              </p>
            </header>

            {/* Story */}
            <div className="space-y-6 mb-16">
              <div className="tactical-border">
                <p className="text-muted-foreground leading-relaxed">
                  Conheci a vontade de beber por dentro. Sei como ela negocia, como ela disfarça, 
                  como ela convence. Sei porque já caí nessa conversa muitas vezes.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                O que ofereço aqui não é a promessa de uma cura milagrosa. Não existe isso. 
                O que existe é estratégia—método, sistema, proteção. A mesma coisa que me 
                ajudou a atravessar os dias mais difíceis.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                O nome "Guardião" não é por acaso. Minha função não é comandar sua vida. 
                É ajudar você a proteger o que importa: sua sobriedade, sua família, sua sanidade.
              </p>
            </div>

            {/* What I Am / What I'm Not */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="tactical-card">
                <h2 className="font-display text-xl text-foreground mb-4 text-primary">
                  O que sou
                </h2>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Alguém com experiência prática em sobriedade</li>
                  <li>• Um guia com estratégias que funcionaram</li>
                  <li>• Suporte e direção para quem está no caminho</li>
                  <li>• Honesto sobre limitações e realidades</li>
                </ul>
              </div>
              
              <div className="tactical-card">
                <h2 className="font-display text-xl text-foreground mb-4 text-destructive">
                  O que não sou
                </h2>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Médico, psicólogo ou psiquiatra</li>
                  <li>• Prometedor de curas milagrosas</li>
                  <li>• Plantão de emergência</li>
                  <li>• Substituto de tratamento profissional</li>
                </ul>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="mb-16">
              <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                Os Três Pilares
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="tactical-card text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    Espelho da Verdade
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Honestidade sem destruição. A verdade que reconstrói, não a que ataca.
                  </p>
                </div>
                
                <div className="tactical-card text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    Bunker
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Proteção do ambiente e da rotina. O espaço seguro que permite atravessar.
                  </p>
                </div>
                
                <div className="tactical-card text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    Escudo da Família
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Proteger quem depende de você. Limites que preservam, não que destroem.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                O caminho não é fácil. Mas existe. E você pode atravessar.
              </p>
              <Link to="/comece-aqui" className="tactical-button inline-flex items-center gap-2">
                Comece por aqui
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
