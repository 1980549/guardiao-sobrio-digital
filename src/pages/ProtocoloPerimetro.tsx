import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { ArrowLeft, Clock, Users, AlertTriangle, Shield, MessageSquare, Home, Phone, Heart, CheckCircle } from "lucide-react";

const ProtocoloPerimetro = () => {
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
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users size={32} className="text-primary" />
                </div>
                <div>
                  <h1 className="font-display text-3xl md:text-4xl text-foreground">
                    Protocolo Perímetro—24h
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Clock size={16} />
                    <span className="text-sm">Duração: 24 horas (renovável)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground tactical-border">
                Para quem vive com alguém que bebe. O objetivo não é curar a outra pessoa—isso está 
                fora do seu alcance. O objetivo é proteger a casa, manter limites claros e preservar 
                sua sanidade sem declarar guerra.
              </p>
            </header>

            {/* When to Use */}
            <div className="tactical-card mb-8">
              <h2 className="font-display text-xl text-foreground mb-4">Quando usar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Convive com alguém que bebe regularmente
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Situação em casa está ficando caótica
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  Precisa estabelecer limites sem explodir
                </li>
              </ul>
            </div>

            {/* Oath */}
            <div className="bg-secondary border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <h2 className="font-display text-xl text-foreground mb-4">O Juramento</h2>
              <blockquote className="text-lg text-foreground italic leading-relaxed">
                "Não negocio com caos. Fecho perímetro. Protejo o que importa."
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
                    Defina o que você não faz mais. Isso não é abandono—é sobrevivência.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Não converso quando a pessoa está alterada</li>
                    <li>• Não financio o caos (dinheiro, desculpas, coberturas)</li>
                    <li>• Priorizo a segurança—minha e de quem depende de mim</li>
                  </ul>
                </div>
              </div>

              {/* Mission 2 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">2. Linha Vermelha</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Escolha UMA regra clara. Só uma para começar. Mantenha-a com consistência.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-card border border-border rounded p-3 text-sm text-muted-foreground">
                      "Não discuto depois das 20h"
                    </div>
                    <div className="bg-card border border-border rounded p-3 text-sm text-muted-foreground">
                      "Não respondo provocação quando você bebeu"
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 3 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">3. Frases Prontas</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Quando a situação esquentar, você não precisa inventar. Use as prontas:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                      "Não discuto assim. Amanhã conversamos."
                    </div>
                    <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                      "Vou me recolher agora."
                    </div>
                    <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                      "Não minto por você."
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Não explique. Não justifique. Fale e saia de cena.
                  </p>
                </div>
              </div>

              {/* Mission 4 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Home size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">4. Bunker Pessoal</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Tenha um espaço seguro na casa. Quando a situação escapar, você vai para lá.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Comida e água acessíveis</li>
                    <li>• Ambiente separado (quarto, escritório)</li>
                    <li>• Celular carregado</li>
                    <li>• Porta que fecha</li>
                  </ul>
                </div>
              </div>

              {/* Mission 5 */}
              <div className="protocol-mission">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">5. Rede de Apoio</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Uma pessoa que sabe. Uma mensagem pronta.
                  </p>
                  <div className="bg-card border border-border rounded p-3 text-sm text-foreground">
                    "Tá difícil aqui. Se eu sumir, me chama. 24h."
                  </div>
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
                    Quando você estiver no limite, antes de explodir, use o reparo para si:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 2 copos d'água</li>
                    <li>• 10 respirações profundas</li>
                    <li>• Mudar de posição (sair do ambiente)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Daily Report */}
            <div className="tactical-card mb-12">
              <h2 className="font-display text-xl text-foreground mb-4">Relatório do Dia</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  O perímetro foi mantido hoje?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual foi o momento mais perigoso?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Abri exceção em algo? Por quê?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  Qual proteção funcionou?
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-border rounded flex-shrink-0"></div>
                  O que precisa mudar amanhã?
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
                    acompanhamento médico, psicológico ou psiquiátrico.</strong> Se houver risco físico, saia imediatamente e 
                    busque ajuda. Nenhuma conversa vale sua integridade. Em caso de emergência, ligue 190. 
                    O "tático" é metáfora de disciplina, nunca promessa de cura.
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

export default ProtocoloPerimetro;
