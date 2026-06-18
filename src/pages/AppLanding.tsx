import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import {
  ArrowRight,
  BookOpen,
  Target,
  ShieldCheck,
  Heart,
  LifeBuoy,
  AlertTriangle,
  Construction,
} from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Espelho",
    desc: "Diário diário de 3 minutos: vontade, gatilhos, vitória do dia.",
  },
  {
    icon: Target,
    title: "Tática",
    desc: "Hábitos âncora e missões semanais para construir consistência.",
  },
  {
    icon: ShieldCheck,
    title: "Escudo",
    desc: "Mapa de gatilhos pessoais e contramedidas pré-definidas.",
  },
  {
    icon: Heart,
    title: "Família",
    desc: "Trilha paralela para quem protege a casa de quem ainda bebe.",
  },
  {
    icon: LifeBuoy,
    title: "SOS",
    desc: "Protocolo de emergência em 2 toques. Sempre acessível.",
  },
];

const AppLanding = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 mb-6">
              <Construction size={14} /> Acesso antecipado · em construção
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              O App é o seu posto de comando diário.
            </h1>
            <p className="text-lg text-muted-foreground">
              Não é mais um app de motivação. É a aplicação prática dos protocolos
              do Guardião Sóbrio — um lugar para registrar, executar e proteger,
              dia após dia.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Módulos */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                Cinco módulos. Um sistema.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada módulo cobre uma frente: registro, hábito, defesa, família e crise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m) => (
                <div key={m.title} className="tactical-card">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
                    <m.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Acesso antecipado */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="tactical-card">
              <NewsletterCapture
                headline="Quero acesso antecipado ao App"
                description="Você entra na lista do acesso antecipado e recebe, antes do lançamento público, o convite e o material de preparação. Sem teatro, sem fila falsa."
                bullets={[
                  "Convite antes do lançamento público",
                  "Material de preparação por e-mail",
                  "Pode sair da lista a qualquer momento",
                ]}
                ctaLabel="Entrar no acesso antecipado"
                successMessage="Você está na lista. O convite chega no seu e-mail antes do lançamento."
                tag="app-early-access"
                trust="Sem cobrança. Sem spam. Sem promessas vazias."
              />
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Já é parte do acesso antecipado e quer ver o protótipo?
              </p>
              <Link
                to="/app/hoje"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
              >
                Explorar protótipo (em construção)
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs text-muted-foreground mt-2">
                Funcionalidades incompletas. Os dados ficam apenas no seu navegador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Aviso */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="alert-box flex items-start gap-3">
              <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Aviso importante:</strong> O App é uma
                ferramenta de apoio prático. <strong>Não substitui acompanhamento médico,
                psicológico ou psiquiátrico.</strong> Em caso de crise, abstinência intensa
                ou risco, procure ajuda profissional ou o serviço de emergência da sua
                região imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppLanding;
