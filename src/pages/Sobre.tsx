import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { ArrowRight, ExternalLink } from "lucide-react";

const fundamentos = [
  "Honestidade radical sobre o proprio estado",
  "Separacao entre vontade e identidade",
  "Protocolo antes de decisao",
  "Perimetro como protecao, nao prisao",
  "Recaida nao cancela progresso",
  "Familia precisa de estrategia propria",
  "Sobriedade nao e abstinencia — e construcao",
];

const Sobre = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Sobre
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Nao sou guru.{" "}
              <em className="text-primary not-italic">Sou alguem</em>{" "}
              que atravessou.
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Luis Vanzer. Criador de conteudo sobre sobriedade adulta real.
              Nao e terapeuta, nao e coach, nao e religioso.
            </p>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ────────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">A historia</span>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A sobriedade nao chegou como revelacao. Chegou como necessidade.
                  Depois de anos funcionando como pessoa que bebia
                  — trabalho, familia, aparencias mantidas —
                  chegou um momento em que o custo ficou visivel demais para ignorar.
                </p>
                <p>
                  Nao fui para a AA. Nao fui para a igreja.
                  Fui para dentro, com estrutura, com honestidade e sem performance.
                  Documentei o processo.
                </p>
                <p>
                  O que esta aqui e o que funcionou.
                  Sem promessa de que vai funcionar para todo mundo.
                  Com honestidade sobre o que e dificil e por que e dificil.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O que nao sou</span>
              </div>
              <div className="space-y-3">
                {[
                  "Nao sou terapeuta nem medico",
                  "Nao prometo cura ou resultados garantidos",
                  "Nao tenho vinculo com nenhuma religiao",
                  "Nao sou coach motivacional",
                  "Nao julgo quem recai",
                  "Nao me coloco como heroi que ja resolveu tudo",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-border/50">
                    <span className="text-primary/60 font-mono text-xs mt-0.5">—</span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FUNDAMENTOS ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Os fundamentos</span>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">
              Os principios que guiam o metodo
            </h2>
            <div className="space-y-0">
              {fundamentos.map((f, i) => (
                <div key={f} className="flex items-start gap-6 py-5 border-b border-border/50">
                  <span className="font-mono text-xs text-primary/50 mt-1 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground text-sm leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ─────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Importante</span>
          </div>
          <p className="text-muted-foreground/70 text-sm leading-relaxed border-l border-border pl-4 mb-12">
            Este conteudo nao substitui acompanhamento profissional de psiquiatras,
            psicologos, medicos ou grupos de apoio especializados.
            Em caso de emergencia medica, ligue 192 (SAMU) ou procure a UPA mais proxima.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/comece-aqui" className="tactical-button flex items-center justify-center gap-2">
              Comece por aqui <ArrowRight size={16} />
            </Link>
            <Link to="/protocolos" className="tactical-button-outline flex items-center justify-center gap-2">
              Ver protocolos
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Sobre;
