import { useState } from "react";
import { Mail, CheckCircle, Loader2, ShieldCheck } from "lucide-react";

interface NewsletterCaptureProps {
  variant?: "inline" | "popup";
  headline?: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  successMessage?: string;
  /** Tag interna para segmentar a inscrição (ex: app-early-access, produto-ebook). */
  tag?: string;
  /** Microcopy extra abaixo do form (prova social ou tranquilizador). */
  trust?: string;
  compact?: boolean;
}

export const NewsletterCapture = ({
  headline,
  description,
  bullets,
  ctaLabel = "Entrar na lista",
  successMessage = "Você está dentro. Próximo protocolo chega em até 7 dias.",
  tag,
  trust,
  compact = false,
}: NewsletterCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Mock — substituir por integração real (Lovable Cloud) na próxima etapa.
    // Mantém `tag` para segmentação futura.
    void tag;
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <div className={compact ? "" : "space-y-5"}>
      {headline && !compact && (
        <h3 className="font-display text-2xl md:text-3xl text-foreground">{headline}</h3>
      )}
      {description && !compact && (
        <p className="text-muted-foreground">{description}</p>
      )}
      {bullets && bullets.length > 0 && !compact && (
        <ul className="space-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {status === "success" ? (
        <div className="flex items-center gap-3 text-primary border border-primary/30 bg-primary/5 rounded p-4">
          <CheckCircle size={20} className="flex-shrink-0" />
          <span className="text-sm">{successMessage}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              aria-label="Seu e-mail"
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="tactical-button flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : ctaLabel}
          </button>
        </form>
      )}

      {trust && status !== "success" && (
        <p className="text-xs text-muted-foreground">{trust}</p>
      )}
    </div>
  );
};
