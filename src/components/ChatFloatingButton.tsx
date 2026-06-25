import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Botão flutuante global do Companheiro de Apoio.
 * Posicionado acima do SOS (que fica em bottom-6 right-6).
 */
export function ChatFloatingButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Não exibe em /auth nem nas próprias telas de chat
  if (pathname.startsWith("/auth") || pathname.startsWith("/chat")) return null;

  return (
    <button
      onClick={() => navigate("/chat")}
      aria-label="Abrir Companheiro de Apoio"
      className={cn(
        "fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full",
        "bg-primary text-primary-foreground shadow-lg",
        "flex items-center justify-center transition-transform hover:scale-105",
        "border border-primary/40"
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="sr-only">Conversar com o Companheiro</span>
    </button>
  );
}
