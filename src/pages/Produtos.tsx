import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  MessageSquare,
  ArrowRight,
  Check,
  Clock,
  Construction,
} from "lucide-react";

const Produtos = () => {
  return (
    <Layout>
      <Seo
        title="Produtos | Guardião Sóbrio"
        description="Newsletter Protocolo Semanal, e-book em desenvolvimento e mentoria por lista de espera. Sem promessas, sem preço inflado."
        path="/produtos"
      />
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-16">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            Recursos práticos
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-5">
            Ferramentas que funcionam
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-prose leading-relaxed">
            Sem títulos. Sem promessas de transformação. Conteúdo direto para quem está
            construindo sobriedade — ou protegendo a família.
          </p>
        </div>

        {/* ── PRODUTO 1: Protocolo Semanal (Newsletter) ─── */}
        <div className="mb-6">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            01 · Começar aqui
          </p>
          <div className="tactical-card border-primary/30 hover:border-primary/60">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-1 rounded-full">
                    Gratuito
                  </span>
                </div>
                <h2 className="font-display text-3xl text-foreground">
                  Protocolo Semanal
                </h2>
              </div>
              <div className="hidden md:flex p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <MessageSquare size={28} />
              </div>
            </div>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
              Um protocolo por semana. Direto na sua caixa. Sem spam. Sem teatro. Conteúdo
              que você aplica na próxima hora, não apenas lê e esquece.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "1 missão prática por semana",
                "Trilha separada para familiares",
                "Aviso quando novos protocolos forem lançados",
                "Sem conteúdo motivacional vazio",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-body text-muted-foreground">
                  <Check size={14} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <EmailCapture />
          </div>
        </div>

        {/* ── PRODUTO 2: E-book ─── */}
        <div className="mb-6">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            02 · Material de base
          </p>
          <div className="tactical-card">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-muted-foreground border border-border bg-secondary px-2.5 py-1 rounded-full">
                    <Construction size={11} /> Em breve
                  </span>
                </div>
                <h2 className="font-display text-3xl text-foreground">
                  Manual do Guardião Sóbrio
                </h2>
              </div>
              <div className="hidden md:flex p-3 rounded-lg bg-secondary text-muted-foreground flex-shrink-0">
                <BookOpen size={28} />
              </div>
            </div>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
              O guia completo de instalação do método: protocolos, frases prontas, plano de
              recaida, rotina de base e guia para familiares. Em desenvolvimento.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Todos os protocolos em formato imprimível",
                "Capítulo dedicado a familiares",
                "Plano de 90 dias estruturado",
                "Frases prontas para situações difíceis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-body text-muted-foreground">
                  <Check size={14} className="text-muted-foreground flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <EmailCapture
              placeholder="Avise-me quando sair"
              cta="Quero ser avisado"
              context="ebook"
            />
          </div>
        </div>

        {/* ── PRODUTO 3: Comunidade ─── */}
        <div className="mb-6">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            03 · Suporte contínuo
          </p>
          <div className="tactical-card opacity-90">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-muted-foreground border border-border bg-secondary px-2.5 py-1 rounded-full">
                    <Construction size={11} /> Em breve
                  </span>
                </div>
                <h2 className="font-display text-3xl text-foreground">
                  Comunidade Guardião
                </h2>
              </div>
              <div className="hidden md:flex p-3 rounded-lg bg-secondary text-muted-foreground flex-shrink-0">
                <Users size={28} />
              </div>
            </div>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              Um grupo fechado para quem está no caminho. Sem júlgamento. Sem marketing.
              Relatos reais, suporte prático e responsabilidade compartilhada.
            </p>
            <p className="text-sm font-body text-muted-foreground/70 mb-5">
              Abrindo para a primeira turma com capacidade limitada.
            </p>
            <EmailCapture
              placeholder="Reservar minha vaga"
              cta="Pedir acesso"
              context="comunidade"
            />
          </div>
        </div>

        {/* ── PRODUTO 4: Mentoria (futura) ─── */}
        <div className="mb-16">
          <p className="text-xs font-body uppercase tracking-widest text-primary/70 mb-4">
            04 · Acompanhamento individual
          </p>
          <div className="tactical-card opacity-70">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center text-xs font-body uppercase tracking-widest text-muted-foreground border border-border bg-secondary px-2.5 py-1 rounded-full">
                    Planejado
                  </span>
                </div>
                <h2 className="font-display text-2xl text-foreground mb-2">
                  Mentoria Individual
                </h2>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Acompanhamento direto para casos complexos. Vagas muito limitadas.
                  Não é um grupo. É uma sessão por sessão, com plano individual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso */}
        <div className="alert-box text-sm text-muted-foreground">
          <strong className="text-foreground">Aviso:</strong> Nenhum produto ou serviço do Guardião Sóbrio
          substitui acompanhamento médico, psicológico ou psiquiátrico. Se você ou alguém
          precisa de ajuda profissional, procure agora. CAPS, AA, ALANON e
          serviços de saúde são complementos, não substitutos.
        </div>

      </div>
    </Layout>
  );
};

// ── Componente interno: captura de email ────────────────────────────────
const EmailCapture = ({
  placeholder = "Seu melhor e-mail",
  cta = "Entrar na lista",
  context = "newsletter",
}: {
  placeholder?: string;
  cta?: string;
  context?: string;
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const input = e.currentTarget.querySelector("input") as HTMLInputElement;
      if (input?.value)
        alert(`Email registrado com sucesso: ${input.value}`);
    }}
    className="flex flex-col sm:flex-row gap-3"
  >
    <input
      type="email"
      required
      placeholder={placeholder}
      className="flex-1 bg-secondary border border-border rounded px-4 py-2.5 text-sm font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
    />
    <button
      type="submit"
      className="tactical-button whitespace-nowrap text-sm inline-flex items-center gap-2"
    >
      {cta} <ArrowRight size={13} />
    </button>
  </form>
);

export default Produtos;
