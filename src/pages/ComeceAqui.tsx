import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { ArrowRight, Target, Play, RotateCcw } from "lucide-react";

const ComeceAqui = () => {
  return (
    <Layout>
      {/* Header — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Comece Por Aqui
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Três passos simples. Escolha o caminho, execute o protocolo hoje, construa a rotina.
              Sem heroísmo. Com estratégia.
            </p>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      {/* Step 1 — par */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="tactical-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-primary uppercase tracking-wider mb-2 block">Passo 1</span>
                  <h2 className="font-display text-2xl text-foreground mb-3">
                    Escolha seu caminho
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Cada situação pede uma abordagem. Identifique onde você está agora e siga a trilha certa.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/trilhas/recuperacao" className="p-4 bg-secondary rounded border border-border hover:border-primary transition-colors group">
                      <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Em recuperação</h3>
                      <p className="text-sm text-muted-foreground">Construindo dia após dia</p>
                    </Link>
                    <Link to="/trilhas/vontade-hoje" className="p-4 bg-secondary rounded border border-border hover:border-primary transition-colors group">
                      <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Vontade de beber hoje</h3>
                      <p className="text-sm text-muted-foreground">Ação imediata</p>
                    </Link>
                    <Link to="/trilhas/familiar" className="p-4 bg-secondary rounded border border-border hover:border-primary transition-colors group">
                      <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Sou familiar</h3>
                      <p className="text-sm text-muted-foreground">Proteger a casa</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      {/* Step 2 — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="tactical-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Play size={24} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-primary uppercase tracking-wider mb-2 block">Passo 2</span>
                  <h2 className="font-display text-2xl text-foreground mb-3">
                    Execute o protocolo hoje
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Não amanhã. Hoje. Escolha um protocolo compatível com sua situação e execute as missões.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/protocolos/escudo-72h" className="p-4 bg-secondary rounded border border-primary/50 hover:border-primary transition-colors group flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-display font-bold">72h</span>
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">Escudo 72h</h3>
                        <p className="text-sm text-muted-foreground">Primeiras 72 horas</p>
                      </div>
                    </Link>
                    <Link to="/protocolos/perimetro-24h" className="p-4 bg-secondary rounded border border-border hover:border-primary transition-colors group flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-display font-bold">24h</span>
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">Perímetro 24h</h3>
                        <p className="text-sm text-muted-foreground">Para familiares</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      {/* Step 3 — par */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="tactical-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <RotateCcw size={24} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-primary uppercase tracking-wider mb-2 block">Passo 3</span>
                  <h2 className="font-display text-2xl text-foreground mb-3">
                    Construa a rotina
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Depois do protocolo inicial, vem a rotina mínima. Não perfeição — consistência.
                    Os artigos do blog aprofundam cada aspecto.
                  </p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mb-8">
                    Explorar artigos
                    <ArrowRight size={16} />
                  </Link>
                  {/* Captacao de email */}
                  <div className="mt-6 p-4 bg-secondary rounded border border-border">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">Receba a rotina semanal direto no e-mail</p>
                    <p className="text-sm text-muted-foreground mb-4">Um protocolo por semana. Sem spam. Cancele quando quiser.</p>
                    <NewsletterCapture />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      {/* Bottom CTA — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              O caminho seguro é este. Não existe atalho. Existe método.
            </p>
            <Link to="/protocolos" className="tactical-button inline-flex items-center gap-2">
              Ver protocolos completos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ComeceAqui;
