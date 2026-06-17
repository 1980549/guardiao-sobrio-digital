import { useChecklist, type ChecklistDia } from "@/app/useUserState";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Check } from "lucide-react";

const itens: { key: keyof ChecklistDia; label: string; desc: string }[] = [
  { key: "sono", label: "Sono", desc: "Você dormiu o mínimo necessário?" },
  { key: "agua", label: "Água", desc: "Hidratação mínima do dia." },
  { key: "alimentacao", label: "Alimentação", desc: "Comeu de verdade, não só café." },
  { key: "movimento", label: "Movimento", desc: "Caminhada, exercício, qualquer coisa." },
  { key: "conexao", label: "Conexão", desc: "Falou com alguém de confiança." },
];

export default function Tatica() {
  const { dia, update, progress, total } = useChecklist();

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Pilar Tática</p>
        <h1 className="font-display text-3xl">Checklist de proteção</h1>
        <p className="text-sm text-muted-foreground mt-1">
          5 itens. Menos de 3 minutos. Marca o que você fez hoje.
        </p>
      </header>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-secondary rounded overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
        <span className="font-display tracking-wider text-primary">{progress}/{total}</span>
      </div>

      <ul className="space-y-2">
        {itens.map((it) => {
          const ativo = dia[it.key] as boolean;
          return (
            <li key={it.key}>
              <button
                onClick={() => update({ [it.key]: !ativo } as Partial<ChecklistDia>)}
                className={`w-full text-left p-4 rounded border flex items-center gap-4 transition-colors ${
                  ativo
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    ativo ? "bg-primary border-primary" : "border-muted-foreground"
                  }`}
                >
                  {ativo && <Check size={16} className="text-primary-foreground" />}
                </div>
                <div>
                  <div className="font-display tracking-wide">{it.label}</div>
                  <div className="text-xs text-muted-foreground">{it.desc}</div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <DisclaimerBanner compact />
    </div>
  );
}
