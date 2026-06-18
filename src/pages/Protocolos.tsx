import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import {
  Shield,
  Users,
  Moon,
  Clock,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  Flame,
  Home,
  Construction,
} from "lucide-react";

const Protocolos = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Protocolos de Proteção
            </h1>
            <p className="text-lg text-muted-foreground">
              Não são dicas. São missões táticas com início, meio e fim. Cada protocolo
              tem um propósito, um público e uma duração — feitos para serem executados,
              não negociados.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-10 grid grid-cols-3 gap-3 text-center">
            <a href="#principal" className="tactical-card py-4 hover:border-primary/50">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">01</p>
              <p className="text-sm text-foreground font-display">Principal</p>
            </a>
            <a href="#complementares" className="tactical-card py-4 hover:border-primary/50">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">02</p>
              <p className="text-sm text-foreground font-display">Complementares</p>
            </a>
            <a href="#desenvolvimento" className="tactical-card py-4 hover:border-primary/50">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">03</p>
              <p className="text-sm text-foreground font-display">Em desenvolvimento</p>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Protocolo Principal */}
      <section id="principal" className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1">
                Protocolo principal
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <Link
              to="/protocolos/escudo-72h"
              className="tactical-card group block relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5 -mr-8 -mt-8">
                <Shield className="w-full h-full text-primary" />
              </div>
              <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                  <Shield size={30} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    Protocolo Escudo—72h
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    As primeiras 72 horas sem álcool são o campo minado. Juramento, missões
                    diárias e bunker noturno para atravessar a fase mais intensa da vontade.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-primary" /> 72 horas
                    </span>
                    <span>
                      <strong className="text-foreground">Para quem:</strong> está parando de beber agora
                    </span>
                    <span>
                      <strong className="text-foreground">Quando usar:</strong> dia 1 ao dia 3
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={24}
                  className="text-primary justify-self-end group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Complementares */}
      <section id="complementares" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1">
                Protocolos complementares
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/protocolos/perimetro-24h"
                className="tactical-card group block"
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Users size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Protocolo Perímetro—24h
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Para quem vive com alguém que bebe. Proteger a casa sem declarar guerra:
                  limites claros, frases prontas, bunker pessoal.
                </p>
                <div className="text-xs text-muted-foreground space-y-1 mb-4">
                  <p>
                    <strong className="text-foreground">Para quem:</strong> familiares e
                    cônjuges
                  </p>
                  <p>
                    <strong className="text-foreground">Quando usar:</strong> primeiras 24h
                    de organização da casa
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Ver protocolo <ArrowRight size={16} />
                </span>
              </Link>

              <div className="tactical-card opacity-90">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <Moon size={22} className="text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest border border-border bg-secondary text-muted-foreground rounded-full px-2.5 py-1">
                    Em breve
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Protocolo Bunker Noturno
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Rotina de fechamento do dia para travar a recaída noturna. Chá, leitura,
                  ritual de luz baixa e regra do "não decidir nada depois das 22h".
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>
                    <strong className="text-foreground">Para quem:</strong> quem recai à noite
                  </p>
                  <p>
                    <strong className="text-foreground">Quando usar:</strong> todas as noites
                    dos primeiros 30 dias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Em desenvolvimento */}
      <section id="desenvolvimento" className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1 inline-flex items-center gap-2">
                <Construction size={12} /> Em desenvolvimento
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="text-muted-foreground mb-8 max-w-2xl">
              Próximos protocolos do método. Não anunciamos data — anunciamos quando está
              pronto. Entre no Protocolo Semanal para ser avisado primeiro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: RefreshCw,
                  title: "Reentrada Social — 7 dias",
                  desc: "Voltar a eventos sociais sem álcool. Frases prontas, regra de saída e plano B.",
                  forWho: "quem evita eventos por medo de recaída",
                  duration: "7 dias",
                },
                {
                  icon: Flame,
                  title: "Recaída — Primeira Hora",
                  desc: "O que fazer na primeira hora depois de uma recaída para impedir o efeito dominó.",
                  forWho: "quem recaiu e precisa retomar agora",
                  duration: "1 hora",
                },
                {
                  icon: Home,
                  title: "Família Estendida",
                  desc: "Para irmãos, pais e filhos adultos: limites e proteção sem assumir o papel de cuidador.",
                  forWho: "família estendida que sustenta a crise",
                  duration: "30 dias",
                },
              ].map((p) => (
                <div key={p.title} className="tactical-card opacity-80">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center">
                      <p.icon size={18} className="text-muted-foreground" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest border border-border bg-secondary text-muted-foreground rounded-full px-2 py-0.5">
                      Em breve
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>
                      <strong className="text-foreground">Para quem:</strong> {p.forWho}
                    </p>
                    <p>
                      <strong className="text-foreground">Duração:</strong> {p.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Aviso */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="alert-box flex items-start gap-3">
              <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Aviso importante:</strong> Os protocolos
                são orientações baseadas em experiência prática.{" "}
                <strong>
                  Não substituem acompanhamento médico, psicológico ou psiquiátrico.
                </strong>{" "}
                Em caso de abstinência intensa (tremores, suor excessivo, confusão,
                alucinações), procure ajuda médica imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Protocolos;
