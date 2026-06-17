import { useState } from "react";
import { useGatilhos, usePerimetro } from "@/app/useUserState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

export default function Escudo() {
  const { items, add, remove } = useGatilhos();
  const { regras, save } = usePerimetro();
  const [g, setG] = useState("");
  const [r, setR] = useState("");
  const [nova, setNova] = useState("");

  const addGatilho = () => {
    if (!g.trim() || !r.trim()) return;
    add({ gatilho: g.trim(), resposta: r.trim() });
    setG(""); setR("");
  };

  const addRegra = () => {
    if (!nova.trim()) return;
    save([...regras, nova.trim()]);
    setNova("");
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Pilar Escudo</p>
        <h1 className="font-display text-3xl">Gatilhos & Perímetro</h1>
      </header>

      <section className="space-y-3">
        <h2 className="font-display tracking-wide text-xl">Gatilhos e respostas</h2>
        <p className="text-sm text-muted-foreground">
          Mapeia o gatilho e o que você vai fazer quando ele aparecer.
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          <Input placeholder="Gatilho (ex.: sexta-feira 18h)" value={g} onChange={(e) => setG(e.target.value)} />
          <Input placeholder="Resposta planejada" value={r} onChange={(e) => setR(e.target.value)} />
        </div>
        <Button onClick={addGatilho} disabled={!g.trim() || !r.trim()}>
          <Plus size={16} className="mr-1" /> Adicionar gatilho
        </Button>
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.id} className="bg-secondary/50 border border-border rounded p-3 flex items-start justify-between gap-3">
              <div>
                <div className="font-display tracking-wide text-sm">{it.gatilho}</div>
                <div className="text-sm text-muted-foreground">→ {it.resposta}</div>
              </div>
              <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-destructive">
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display tracking-wide text-xl">Perímetro semanal</h2>
        <p className="text-sm text-muted-foreground">Regras do seu cerco. Edita conforme a semana.</p>
        <ul className="space-y-2">
          {regras.map((re, i) => (
            <li key={i} className="bg-secondary/50 border border-border rounded p-3 flex items-center justify-between gap-3">
              <span className="text-sm">{re}</span>
              <button
                onClick={() => save(regras.filter((_, j) => j !== i))}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Input placeholder="Nova regra de perímetro" value={nova} onChange={(e) => setNova(e.target.value)} />
          <Button onClick={addRegra} disabled={!nova.trim()}>
            <Plus size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
