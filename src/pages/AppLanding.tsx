import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Shield,
  RefreshCw,
  Flame,
  BarChart2,
  Bell,
  ArrowRight,
  Construction,
  Check,
} from "lucide-react";
import { useState } from "react";

const AppLanding = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-widest text-muted-foreground border border-border rounded-full px-4 py-2 mb-10">
          <Construction size={12} />
          Em desenvolvimento
        </div>

        {/* Hero */}
        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-5">
          O app ainda não está pronto.
          <br />
          <span className="text-primary">Isso é intencional.</span>
        </h1>
        <p className="text-muted-foreground font-body text-base leading-relaxed mb-10 max-w-prose">
          Não vamos lançar um app incompleto só para ter algo para mostrar. O Guardião Sóbrio
          chega quando estiver funcional, testado e honesto. Enquanto isso, o site tem tudo
          que você precisa.
        </p>

        {/* O que o app vai ter */}
        <div className="tactical-card mb-10">
          <h2 className="font-display text-2xl text-foreground mb-5">
            O que o app vai ter
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: Shield,
                title: "Protocolos no celular",
                desc: "Acesso offline aos protocolos. Sem depender de sinal em crise.",
              },
              {
                icon: Flame,
                title: "Botão SOS",
                desc: "Ação imediata quando a vontade bater. Protocolo em 1 toque.",
              },
              {
                icon: BarChart2,
                title: "Espelho diário",
                desc: "Registro simples: como foi hoje. Sem julgamento, sem gamificação.",
              },
              {
                icon: Bell,
                title: "Notificações táticas",
                desc: "Lembrete nos horários de maior risco. Configurável por você.",
              },
              {
                icon: RefreshCw,
                title: "Acompanhamento de jornada",
                desc: "Dias consecutivos, padrões de risco e ciclos de recaida identificados.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="p-2 rounded bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm mb-0.5">{item.title}</p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: lista de acesso antecipado */}
        <div className="action-box mb-10">
          <h2 className="font-display text-2xl text-foreground mb-2">
            Acesso antecipado
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
            Quem entrar na lista testa primeiro, dá feedback direto e define como o app
            evolui. Não é promoção — é colaboração real.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 text-sm font-body">
              <Check size={18} className="text-primary" />
              <span className="text-foreground">
                Registrado. Você será o primeiro a saber.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-card border border-border rounded px-4 py-2.5 text-sm font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
              <button
                type="submit"
                className="tactical-button whitespace-nowrap text-sm inline-flex items-center gap-2"
              >
                Garantir vaga <ArrowRight size={13} />
              </button>
            </form>
          )}
        </div>

        {/* Enquanto isso */}
        <div className="mb-16">
          <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-5">
            Enquanto o app não chega
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: "/protocolos/escudo-72h", text: "Protocolo Escudo—72h" },
              { to: "/trilhas", text: "Escolher minha trilha" },
              { to: "/produtos", text: "Protocolo Semanal gratuito" },
              { to: "/comece-aqui", text: "Começar do zero" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/40 group transition-all"
              >
                <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Aviso */}
        <div className="alert-box text-sm text-muted-foreground">
          O Guardião Sóbrio não é substituto de ajuda profissional. Se você está
          em crise, ligue <strong className="text-foreground">192 (SAMU)</strong> ou
          procure o serviço de saúde mais próximo.
        </div>

      </div>
    </Layout>
  );
};

export default AppLanding;
