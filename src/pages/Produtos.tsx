import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { Book, Users, Crown, ArrowRight, AlertTriangle } from "lucide-react";

const produtos = [
  {
    id: "ebook",
    title: 'E-book "Protocolo do Escudo"',
    subtitle: "Manual 90 dias",
    description: "O guia completo para os primeiros 90 dias de sobriedade. Protocolos diários, checklists, relatórios do front e estratégias para cada fase do processo.",
    icon: Book,
    features: [
      "Protocolo dia-a-dia para 90 dias",
      "Checklists imprimíveis",
      "Relatórios de front semanais",
      "Guia de situações de crise"
    ]
  },
  {
    id: "comunidade",
    title: 'Comunidade "A Base"',
    subtitle: "Discord privado",
    description: "Espaço de suporte entre pares. Não é grupo de terapia—é trincheira compartilhada. Guardiões que entendem a batalha trocando experiências e estratégias.",
    icon: Users,
    features: [
      "Acesso ao Discord privado",
      "Canais por situação (recuperação, família, crise)",
      "Suporte entre pares 24/7",
      "Encontros semanais de check-in"
    ]
  },
  {
    id: "mentoria",
    title: 'Mentoria "Guardião de Elite"',
    subtitle: "Direção individual",
    description: "Acompanhamento personalizado para quem precisa de direção mais próxima. Não é plantão médico—é mentoria tática baseada em experiência prática.",
    icon: Crown,
    features: [
      "Sessões individuais por vídeo",
      "Plano tático personalizado",
      "Suporte via mensagem entre sessões",
      "Acesso vitalício à comunidade"
    ]
  }
];

const Produtos = () => {
  return (
    <Layout>
      {/* Header — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Produtos
            </h1>
            <p className="text-lg text-muted-foreground">
              Ferramentas táticas para fortalecer sua jornada. Cada produto foi desenhado 
              para dar suporte prático—sem promessas vazias, sem teatro.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Products Grid — par */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {produtos.map((produto) => (
              <div key={produto.id} className="tactical-card flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <produto.icon size={28} className="text-primary" />
                </div>
                
                <h2 className="font-display text-xl text-foreground mb-1">
                  {produto.title}
                </h2>
                <p className="text-sm text-primary mb-4">{produto.subtitle}</p>
                
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {produto.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {produto.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="tactical-button-outline w-full mt-auto">
                  Consultar informações
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Info Box & Disclaimer — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="tactical-card text-center mb-8">
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Detalhes e preço:</strong> consultar informações de produto.
              </p>
              <p className="text-sm text-muted-foreground">
                Entre em contato para receber detalhes completos sobre cada produto.
              </p>
            </div>

            <div className="alert-box">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Aviso importante:</strong> Os produtos do Guardião Sóbrio oferecem 
                  orientação e suporte baseados em experiência prática. <strong>Não substituem acompanhamento médico, 
                  psicológico ou psiquiátrico.</strong> A mentoria é direção tática, não plantão médico. Em caso de crise, 
                  risco ou abstinência intensa, procure ajuda profissional imediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
