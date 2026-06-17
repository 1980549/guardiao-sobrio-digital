import { Link } from "react-router-dom";
import { ShieldIcon } from "./ShieldIcon";
import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Banner de emergência */}
      <div className="border-b border-primary/30 bg-primary/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm font-display text-foreground">Em crise agora?</span>
            </div>
            <Link
              to="/protocolos/escudo-72h"
              className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
            >
              → Acesse o Protocolo Escudo—72h
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <ShieldIcon size="sm" />
              <span className="font-display text-xl tracking-wider">Guardião Sóbrio</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Estratégia prática para atravessar a vontade de beber, proteger a minha casa
              e construir sobriedade sem teatro.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/comece-aqui" className="text-muted-foreground hover:text-primary transition-colors text-sm">Comece Aqui</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/protocolos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Protocolos</Link></li>
              <li><Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Produtos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Suporte</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="alert-box mb-6">
            <p className="text-muted-foreground text-xs leading-relaxed">
              <strong className="text-foreground">Aviso importante:</strong> O Guardião Sóbrio oferece orientação e suporte à sobriedade,
              baseada em experiência prática. <strong>Não substitui acompanhamento médico, psicológico ou psiquiátrico.</strong> Em caso de crise,
              risco, abstinência intensa ou pensamentos de se machucar, procure ajuda profissional e emergência da sua região imediatamente.
              O termo "tático" é uma metáfora de disciplina — nunca uma promessa de cura.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Guardião Sóbrio. Todos os direitos reservados.</p>
            <p>Construindo sobriedade com estratégia, não com promessas vazias.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
