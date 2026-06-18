import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import {
  Book,
  Users,
  Crown,
  Mail,
  ArrowRight,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

type Status = "disponivel" | "em-breve" | "lista-espera";

const statusMeta: Record<Status, { label: string; tone: string }> = {
  disponivel: { label: "Disponível agora", tone: "text-primary border-primary/40 bg-primary/10" },
  "em-breve": { label: "Em breve", tone: "text-muted-foreground border-border bg-secondary" },
  "lista-espera": { label: "Lista de espera", tone: "text-foreground border-foreground/30 bg-foreground/5" },
};

const produtos: Array<{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Book;
  features: string[];
  status: Status;
  cta: string;
  ctaHref: string;
  forWho: string;
}> = [
  {
    id: "ebook",
    title: "Manual dos 90 Dias",
    subtitle: "E-book — Protocolo do Escudo",
    description:
      "O guia completo para os primeiros 90 dias de sobriedade. Protocolos diários, checklists e guias para situações de crise.",
    icon: Book,
    features: [
      "Protocolo dia-a-dia para 90 dias",
      "Checklists imprimíveis",
      "Guia de situações de crise",
      "Relatórios semanais de front",
    ],
    forWho: "Para quem está parando de beber e quer um plano claro do dia 1 ao 90.",
    status: "em-breve",
    cta: "Quero ser avisado",
    ctaHref: "/contato?produto=ebook",
  },
  {
    id: "comunidade",
    title: 'Comunidade "A Base"',
    subtitle: "Espaço privado entre pares",
    description:
      "Trincheira compartilhada — não é grupo de terapia. Pessoas em recuperação, familiares e profissionais trocando estratégias práticas.",
    icon: Users,
    features: [
      "Canais por situação (recuperação, família, crise)",
      "Suporte entre pares",
      "Encontros semanais de check-in",
      "Moderação ativa, sem gurus",
    ],
    forWho: "Para quem precisa de pares — não plateia.",
    status: "em-breve",
    cta: "Quero ser avisado",
    ctaHref: "/contato?produto=comunidade",
  },
  {
    id: "mentoria",
    title: "Mentoria 1:1",
    subtitle: "Direção tática individual",
    description:
      "Acompanhamento pessoal para quem precisa de direção próxima. Não é plantão médico — é mentoria tática baseada em experiência prática.",
    icon: Crown,
    features: [
      "Sessões individuais por vídeo",
      "Plano tático personalizado",
      "Suporte por mensagem entre sessões",
      "Vagas limitadas por trimestre",
    ],
    forWho: "Para quem já tentou sozinho e precisa de método sob medida.",
    status: "lista-espera",
    cta: "Pedir acesso",
    ctaHref: "/contato?produto=mentoria",
  },
];

const Produtos = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Produtos
            </h1>
            <p className="text-lg text-muted-foreground">
              Ferramentas táticas para fortalecer a sua jornada. Sem promessas vazias,
              sem teatro — e nada que substitua acompanhamento profissional.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Produto principal — disponível agora */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span
                className={`text-[11px] uppercase tracking-widest border rounded-full px-3 py-1 ${statusMeta.disponivel.tone}`}
              >
                Disponível agora
              </span>
            </div>
            <div className="tactical-card grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-0">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Protocolo Semanal
                </h2>
                <p className="text-sm text-primary mb-4 uppercase tracking-wider">
                  Newsletter tática · grátis
                </p>
                <p className="text-muted-foreground mb-6">
                  Um protocolo prático por semana. Curto, direto, sem teatro. Pensado para
                  quem está em recuperação, para quem atravessa uma vontade hoje e para
                  quem protege a casa.
                </p>
                <NewsletterCapture
                  ctaLabel="Entrar na lista"
                  successMessage="Você está dentro. O próximo protocolo chega em até 7 dias."
                  tag="protocolo-semanal"
                  trust="1 e-mail por semana · sair com 1 clique · zero spam"
                  bullets={[
                    "1 protocolo prático por semana",
                    "Linguagem firme e útil — sem motivação vazia",
                    "Pode sair da lista a qualquer momento",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Produtos complementares */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                Em construção
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os produtos abaixo estão em desenvolvimento. Entre na lista e seja avisado
                no momento em que estiverem prontos — sem fila falsa, sem urgência fabricada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {produtos.map((p) => {
                const meta = statusMeta[p.status];
                return (
                  <div key={p.id} className="tactical-card flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <p.icon size={22} className="text-primary" />
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-widest border rounded-full px-2.5 py-1 ${meta.tone}`}
                      >
                        {meta.label}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-foreground mb-1">{p.title}</h3>
                    <p className="text-xs text-primary mb-4 uppercase tracking-wider">
                      {p.subtitle}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">{p.description}</p>

                    <div className="text-xs text-muted-foreground border-l-2 border-primary/40 pl-3 mb-4">
                      <strong className="text-foreground">Para quem é:</strong> {p.forWho}
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight
                            size={14}
                            className="text-primary mt-1 flex-shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={p.ctaHref}
                      className="tactical-button-outline w-full mt-auto flex items-center justify-center gap-2 text-center text-sm"
                    >
                      {p.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Disclaimer */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="alert-box">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Aviso importante:</strong> Os produtos do
                  Guardião Sóbrio oferecem orientação e suporte baseados em experiência prática.{" "}
                  <strong>
                    Não substituem acompanhamento médico, psicológico ou psiquiátrico.
                  </strong>{" "}
                  A mentoria é direção tática, não plantão clínico. Em caso de crise, risco ou
                  abstinência intensa, procure ajuda profissional imediatamente.
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6 flex items-center justify-center gap-2">
              <Clock size={12} />
              Quando os produtos forem lançados, os preços e condições serão divulgados
              primeiro para a lista do Protocolo Semanal.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
