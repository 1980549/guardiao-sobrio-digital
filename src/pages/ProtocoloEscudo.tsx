import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { ArrowLeft, Clock, Shield, AlertTriangle, Droplets, Thermometer, Footprints, Moon, MessageCircle, Heart, CheckCircle } from "lucide-react";

const ProtocoloEscudo = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link to="/protocolos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} />
              Voltar para protocolos
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <ShieldIcon size="lg" />
                <div>
                  <h1 className="font-display text-3xl md:text-4xl text-foreground">
                    Protocolo Escudo—72h
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Clock size={16} />
                    <span className="text-sm">Duração: 72 horas</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground tactical-border">
                As primeiras 72 horas são as mais brutais. O corpo grita, a mente negocia. 
                Este protocolo existe para atravessar esse campo minado com estratégia, não com heroísmo.
              </p>
            </header>

            {/* When to Use */}
            <div className="tactical-card mb-8">
              <h2 className="font-display text-xl text-foreground mb-4">Quando usar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Primeiros dias sem álcool
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Depois de um escorregão—recomeçando
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Período de alta vulnerabilidade identificado
                </li>
              </ul>
            </div>

            {/* Oath */}
            <div className="bg-secondary border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <h2 className="font-display text-xl text-foreground mb-4">O Juramento</h2>
              <blockquote className="text-lg text-foreground italic leading-relaxed">
                "Não vou vencer na emoção. Vou vencer com estratégia. 
                Não negocio com fissura. Eu atravesso."
              </blockquote>
            </div>

            {/* Missions */}
            <div className="space-y-6 mb-12">
              <h2 className="font-display text-2xl text-foreground">As Missões</h2>

              {/* Mission 1 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">1. Fechar Perímetro</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Elimine todo álcool do seu espaço. Não "guarde para visitas"—isso é mentira para você mesmo.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Remover todo álcool da casa</li>
                    <li>• Cortar rotas perigosas (bares no caminho)</li>
                    <li>• Água visível em vários pontos</li>
                    <li>• Dinheiro justo—sem sobra para tentação</li>
                  </ul>
                </div>
              </div>

              {/* Mission 2 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">2. Linhas Vermelhas</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Três regras que não se quebram. Não importa o que aconteça.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Não dirigir quando vulnerável</li>
                    <li>• Não entrar em discussão gatilho</li>
                    <li>• Não passar fome (comer a cada 4h)</li>
                  </ul>
                </div>
              </div>

              {/* Mission 3 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">3. Honestidade Tática</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Uma mensagem. Uma pessoa. 20 segundos.
                  </p>
                  <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                    "Hoje não vou beber. Se eu sumir, me chama."
                  </div>
                </div>
              </div>

              {/* Mission 4 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Droplets size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">4. Protocolo 3-3-3</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Quando a onda de fissura bater, execute em sequência:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-card border border-border rounded p-3 text-center">
                      <Droplets size={24} className="text-primary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Água</span>
                      <p className="font-display text-foreground">3 copos</p>
                    </div>
                    <div className="bg-card border border-border rounded p-3 text-center">
                      <Thermometer size={24} className="text-primary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Frio</span>
                      <p className="font-display text-foreground">3 min</p>
                    </div>
                    <div className="bg-card border border-border rounded p-3 text-center">
                      <Footprints size={24} className="text-primary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Ação</span>
                      <p className="font-display text-foreground">20 min</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Ação = caminhar, comer, áudio de 20s para alguém
                  </p>
                </div>
              </div>

              {/* Mission 5 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Moon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">5. Bunker Noite</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A noite é o território mais perigoso. Prepare o bunker antes das 20h.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Até 20h: comida feita + banho tomado</li>
                    <li>• 20h-23h: ambiente previsível, nada novo</li>
                    <li>• Cama cedo—quanto menos horas acordado no perigo, melhor</li>
                  </ul>
                </div>
              </div>

              {/* Mission 6 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">6. Reparo</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Se a situação esquentar com alguém, use a frase de reparo e saia de cena:
                  </p>
                  <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                    "Estou instável. Não quero brigar. Vou me recolher."
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Report */}
            <div className="tactical-card mb-12">
              <h2 className="font-display text-xl text-foreground mb-4">Relatório do Front (fazer todo dia)</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Bebi álcool hoje?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual foi o horário mais perigoso?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual gatilho apareceu?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual proteção funcionou?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual é o plano para amanhã?
                </li>
              </ul>
            </div>

            {/* Warning */}
            <div className="alert-box">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-foreground mb-2">Aviso Importante</h3>
                  <p className="text-sm text-muted-foreground">
                    O Guardião Sóbrio oferece orientação baseada em experiência prática. <strong className="text-foreground">Não substitui 
                    acompanhamento médico, psicológico ou psiquiátrico.</strong> Se você estiver experimentando abstinência intensa 
                    (tremores, suor excessivo, confusão, alucinações), isso é emergência médica—procure ajuda profissional 
                    imediatamente. O "tático" é metáfora de disciplina, nunca promessa de cura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProtocoloEscudo;
