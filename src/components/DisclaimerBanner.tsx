import { AlertTriangle } from "lucide-react";

export const DisclaimerBanner = ({ compact = false }: { compact?: boolean }) => (
  <div className="alert-box flex gap-3 items-start">
    <AlertTriangle className="shrink-0 mt-0.5 text-destructive" size={18} />
    <p className={compact ? "text-xs leading-relaxed" : "text-sm leading-relaxed"}>
      O Guardião Sóbrio é orientação e suporte à sobriedade, baseada em experiência prática.{" "}
      <strong>Não substitui acompanhamento médico, psicológico ou psiquiátrico.</strong> Em crise,
      risco, abstinência intensa ou pensamentos de morte, procure ajuda profissional:{" "}
      <strong>CVV 188</strong> · <strong>SAMU 192</strong>.
    </p>
  </div>
);
