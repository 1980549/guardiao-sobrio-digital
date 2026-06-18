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
  CheckCircle,
} from "lucide-react";

const Protocolos = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-16">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            O Método
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-5">
            Protocolos de Proteção
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-prose leading-relaxed mb-8">
            Não são dicas. São missões táticas com início, meio e fim. Cada protocolo tem
            um propósito, um público e uma duração — feitos para serem executados, não
            negociados.
          </p>

          {/* Nav por âncora */}
          <nav className="flex flex-wrap gap-3" aria-label="Seções dos protocolos">
            {[
              { href: "#principal", num: "01", label: "Principal" },
              { href: "#complementares", num: "02", label: "Complementares" },
              { href: "#desenvolvimento", num: "03", label: "Em desenvolvimento" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary border border-border hover:border-primary/40 rounded px-4 py-2 transition-all"
              >
                <span className="text-xs tracking-widest text-primary/60">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ── PROTOCOLO PRINCIPAL ─────────────────────────── */}
        <section id="principal" className="mb-16 scroll-mt-20">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-6">
            Protocolo principal
          </p>

          <div className="tactical-card border-primary/30 hover:border-primary/60">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-1 rounded-full">
                    <Shield size={11} /> Ativo
                  </span>
                  <span className="text-xs font-body text-muted-foreground">· 72 horas</span>
                </div>
                <h2 className="font-display text-3xl text-foreground">
                  Protocolo Escudo—72h
                </h2>
              </div>
              <div className="hidden md:flex p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Shield size={28} />
              </div>
            </div>

            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              As primeiras 72 horas sem álcool são o campo minado. Juramento, missões
              diárias e bunker noturno para atravessar a fase mais intensa da vontade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: Clock, text: "72 horas estruturadas" },
                { icon: CheckCircle, text: "Para quem está parando agora" },
                { icon: Shield, text: "Missões diárias e bunker noturno" },
                { icon: AlertTriangle, text: "Protocolo de crise incluído" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 text-sm font-body text-muted-foreground"
                >
                  <item.icon size={15} className="text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            <Link
              to="/protocolos/escudo-72h"
              className="tactical-button inline-flex items-center gap-2"
            >
              Abrir protocolo <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── COMPLEMENTARES ──────────────────────────────── */}
        <section id="complementares" className="mb-16 scroll-mt-20">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-6">
            Protocolos complementares
          </p>

          <div className="space-y-4">
            {/* Perímetro 24h */}
            <div className="tactical-card">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-1 rounded-full">
                      <Shield size={11} /> Ativo
                    </span>
                    <span className="text-xs font-body text-muted-foreground">· 24 horas</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Protocolo Perímetro—24h
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                Para quem vive com alguém que bebe. Proteger a casa sem declarar guerra:
                limites claros, frases prontas, bunker pessoal.
              </p>
              <div className="flex flex-wrap gap-4 mb-5 text-xs font-body text-muted-foreground">
                <span><strong className="text-foreground">Para quem:</strong> familiares e cônjuges</span>
                <span><strong className="text-foreground">Quando usar:</strong> primeiras 24h de organização</span>
              </div>
              <Link
                to="/protocolos/perimetro-24h"
                className="tactical-button-outline inline-flex items-center gap-2 text-sm"
              >
                Ver protocolo <ArrowRight size={13} />
              </Link>
            </div>

            {/* Bunker Noturno — em breve */}
            <div className="tactical-card opacity-75">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-muted-foreground border border-border bg-secondary px-2.5 py-1 rounded-full">
                      <Construction size={11} /> Em breve
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Protocolo Bunker Noturno
                  </h3>
                </div>
                <Moon size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
                Rotina de fechamento do dia para travar a recaída noturna. Chá, leitura,
                ritual de luz baixa e a regra do "não decidir nada depois das 22h".
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-body text-muted-foreground">
                <span><strong className="text-foreground">Para quem:</strong> quem recai à noite</span>
                <span><strong className="text-foreground">Duração:</strong> 30 dias</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── EM DESENVOLVIMENTO ──────────────────────────── */}
        <section id="desenvolvimento" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-xs font-body uppercase tracking-widest text-primary/70">
              Em desenvolvimento
            </p>
            <Construction size={14} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 max-w-prose">
            Próximos protocolos do método. Não anunciamos data — anunciamos quando está
            pronto. Entre no Protocolo Semanal para ser avisado primeiro.
          </p>

          <div className="space-y-3">
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
              <div
                key={p.title}
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-secondary/30 opacity-80"
              >
                <div className="p-2 rounded bg-secondary text-muted-foreground flex-shrink-0">
                  <p.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-body font-semibold text-foreground text-sm">{p.title}</h3>
                    <span className="text-xs font-body text-muted-foreground border border-border rounded-full px-2 py-0.5">
                      Em breve
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mb-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-body text-muted-foreground/70">
                    <span>Para: {p.forWho}</span>
                    <span>·</span>
                    <span>{p.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA newsletter */}
          <div className="mt-8 action-box">
            <p className="font-body text-sm text-foreground mb-3">
              Seja avisado quando um novo protocolo for lançado.
            </p>
            <Link to="/produtos" className="tactical-button-outline inline-flex items-center gap-2 text-sm">
              Entrar no Protocolo Semanal <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* Aviso */}
        <div className="alert-box text-sm text-muted-foreground">
          <strong className="text-foreground">Aviso importante:</strong> Os protocolos são orientações
          baseadas em experiência prática.{" "}
          <strong className="text-foreground">Não substituem acompanhamento médico, psicológico ou
          psiquiátrico.</strong>{" "}
          Em caso de abstinência intensa (tremores, suor excessivo, confusão, alucinações),
          procure ajuda médica imediatamente.
        </div>

      </div>
    </Layout>
  );
};

export default Protocolos;
