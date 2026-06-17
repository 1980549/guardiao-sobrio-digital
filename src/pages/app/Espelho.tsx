import { useState } from "react";
import { useDiario, todayKey } from "@/app/useUserState";
import { promptDoDia } from "@/data/espelhoPrompts";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Espelho() {
  const { entries, add } = useDiario();
  const [texto, setTexto] = useState("");
  const prompt = promptDoDia();

  const salvar = () => {
    if (!texto.trim()) return;
    add({ data: todayKey(), prompt, texto: texto.trim() });
    setTexto("");
    toast.success("Entrada registrada no espelho.");
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Pilar Espelho</p>
        <h1 className="font-display text-3xl">Diário guiado</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Você não precisa saber o que escrever. Responde a pergunta de hoje.
        </p>
      </header>

      <div className="tactical-card space-y-3">
        <p className="text-primary font-display tracking-wide">Pergunta de hoje</p>
        <p className="text-lg">{prompt}</p>
        <textarea
          className="w-full bg-background border border-border rounded p-3 min-h-32 text-sm focus:outline-none focus:border-primary"
          placeholder="Escreva sem filtro. Isso fica só com você, neste aparelho."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <Button onClick={salvar} disabled={!texto.trim()}>Registrar</Button>
      </div>

      {entries.length > 0 && (
        <section>
          <h2 className="font-display tracking-wide mb-3">Últimas entradas</h2>
          <ul className="space-y-3">
            {entries.slice(0, 10).map((e, i) => (
              <li key={i} className="bg-secondary/50 border border-border rounded p-4">
                <div className="text-xs text-muted-foreground mb-1">{e.data}</div>
                <div className="text-sm italic text-muted-foreground mb-2">{e.prompt}</div>
                <div className="text-sm whitespace-pre-wrap">{e.texto}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
