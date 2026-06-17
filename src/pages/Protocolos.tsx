import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProtocolCard } from "@/components/ProtocolCard";
import { ShieldIcon } from "@/components/ShieldIcon";

const Protocolos = () => {
  return (
    <Layout>
      {/* Header — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon size="lg" className="mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Protocolos de Proteção
            </h1>
            <p className="text-lg text-muted-foreground">
              Missões táticas para momentos específicos. Cada protocolo tem um propósito, um tempo e um 
              conjunto de ações claras. O caminho seguro é executar — não negociar.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Protocol Cards — par */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProtocolCard
              title="Protocolo Escudo—72h"
              description="As primeiras 72 horas são o campo minado. Este protocolo é para quem está parando de beber e precisa atravessar a fase mais intensa da vontade."
              duration="72 horas"
              href="/protocolos/escudo-72h"
              icon="shield"
            />
            <ProtocolCard
              title="Protocolo Perímetro—24h"
              description="Para quem vive com alguém que bebe. Proteger a casa, estabelecer limites claros e manter a sanidade — sem declarar guerra."
              duration="24 horas"
              href="/protocolos/perimetro-24h"
              icon="users"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Info Section — ímpar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="alert-box">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Aviso importante:</strong> Os protocolos são orientações baseadas em experiência prática. 
                Não substituem acompanhamento médico, psicológico ou psiquiátrico. Em caso de abstinência intensa 
                (tremores, suor excessivo, confusão), procure ajuda médica imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Protocolos;
