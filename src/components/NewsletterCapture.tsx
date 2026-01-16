import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterCaptureProps {
  variant?: "inline" | "popup";
}

export const NewsletterCapture = ({ variant = "inline" }: NewsletterCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulated submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 text-primary">
        <CheckCircle size={20} />
        <span className="text-sm">Protocolos a caminho. Sem teatro.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          required
          className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="tactical-button flex items-center justify-center gap-2 whitespace-nowrap"
      >
        {status === "loading" ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          "Receber protocolos"
        )}
      </button>
    </form>
  );
};
