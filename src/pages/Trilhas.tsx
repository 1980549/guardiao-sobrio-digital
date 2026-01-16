import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { ShieldIcon } from "@/components/ShieldIcon";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, ArrowRight, RefreshCw, Flame, Heart, Droplets, Wind, Footprints, CheckCircle } from "lucide-react";

const trilhasData = {
  "recuperacao": {
    title: "Estou em Recuperação",
    subtitle: "Construindo sobriedade dia após dia",
    description: "A recuperação não é um momento—é um caminho. Cada dia é uma vitória. Cada semana é uma fortaleza. Aqui estão os recursos para construir consistência.",
    icon: RefreshCw,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h"
    },
    articles: ["1", "3", "5", "9", "10", "12"],
    checklist: [
      "Perímetro da casa fechado (sem álcool)",
      "Água visível em 3 pontos",
      "Rotina de bunker noturno definida",
      "Uma pessoa de confiança avisada",
      "Protocolo 3-3-3 memorizado",
      "Relatório diário feito"
    ]
  },
  "vontade-hoje": {
    title: "Hoje Bateu Vontade de Beber",
    subtitle: "Ação imediata para atravessar",
    description: "A vontade está aqui, agora. Não é hora de pensar—é hora de executar. Siga os passos abaixo imediatamente.",
    icon: Flame,
    protocol: {
      title: "Protocolo Escudo—72h",
      href: "/protocolos/escudo-72h"
    },
    articles: ["1", "6", "8", "10", "11"],
    immediateAction: {
      title: "Ação Imediata (3 minutos)",
      steps: [
        { icon: Droplets, text: "3 copos d'água. Agora.", detail: "Não dois. Três. A hidratação altera a química." },
        { icon: Wind, text: "Respiração ou frio.", detail: "10 respirações profundas OU água fria no rosto por 30 segundos." },
        { icon: Footprints, text: "Mude de ambiente.", detail: "Levante e vá para outro cômodo. Movimento quebra o ciclo." }
      ]
    }
  },
  "familiar": {
    title: "Sou Familiar—Proteger a Casa",
    subtitle: "Limites sem guerra",
    description: "Você não é o terapeuta. Não é sua função curar. Sua função é proteger—a si mesmo, aos dependentes, à sua sanidade. Isso não é abandono. É sobrevivência.",
    icon: Heart,
    protocol: {
      title: "Protocolo Perímetro—24h",
      href: "/protocolos/perimetro-24h"
    },
    articles: ["2", "4", "7"],
    phrases: [
      "Não discuto assim. Amanhã conversamos.",
      "Vou me recolher agora.",
      "Não minto por você.",
      "Estou aqui, mas não nessas condições."
    ]
  }
};

const Trilhas = () => {
  const { trilhaId } = useParams<{ trilhaId: string }>();
  const trilha = trilhasData[trilhaId as keyof typeof trilhasData];

  if (!trilha) {
    return (
      <Layout>
        <div className="py-16 md:py-24 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Trilha não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar para o início
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = trilha.icon;
  const filteredPosts = blogPosts.filter((post) => trilha.articles.includes(post.id));

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>

            {/* Header */}
            <header className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={40} className="text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                {trilha.title}
              </h1>
              <p className="text-lg text-primary mb-4">{trilha.subtitle}</p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {trilha.description}
              </p>
            </header>

            {/* Immediate Action (for vontade-hoje) */}
            {'immediateAction' in trilha && trilha.immediateAction && (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-12">
                <h2 className="font-display text-xl text-foreground mb-6 text-center">
                  {trilha.immediateAction.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {trilha.immediateAction.steps.map((step, index) => (
                    <div key={index} className="bg-card rounded-lg p-4 text-center">
                      <step.icon size={32} className="text-primary mx-auto mb-3" />
                      <h3 className="font-display text-lg text-foreground mb-2">{step.text}</h3>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Protocol Link */}
            <div className="tactical-card mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ShieldIcon size="md" />
                  <div>
                    <h2 className="font-display text-xl text-foreground">Protocolo Recomendado</h2>
                    <p className="text-muted-foreground text-sm">{trilha.protocol.title}</p>
                  </div>
                </div>
                <Link to={trilha.protocol.href} className="tactical-button flex items-center gap-2">
                  Acessar
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Phrases (for familiar) */}
            {'phrases' in trilha && trilha.phrases && (
              <div className="mb-12">
                <h2 className="font-display text-2xl text-foreground mb-6">Frases Prontas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trilha.phrases.map((phrase, index) => (
                    <div key={index} className="bg-secondary border border-border rounded-lg p-4">
                      <p className="text-foreground text-sm">"{phrase}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Checklist (for recuperacao) */}
            {'checklist' in trilha && trilha.checklist && (
              <div className="tactical-card mb-12">
                <h2 className="font-display text-xl text-foreground mb-4">Checklist de Base</h2>
                <ul className="space-y-3">
                  {trilha.checklist.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-5 h-5 border border-border rounded flex-shrink-0 flex items-center justify-center">
                        <CheckCircle size={14} className="text-primary opacity-0 hover:opacity-100 transition-opacity" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Articles */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-6">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trilhas;
