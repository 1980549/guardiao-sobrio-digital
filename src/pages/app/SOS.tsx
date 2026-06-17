import { useState } from "react";
import { useContatos } from "@/app/useUserState";
import { ancoraDoDia, ancoras } from "@/data/ancoras";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Plus, Trash2, Wind, LogOut } from "lucide-react";

export default function SOS() {
  const { contatos, add, remove } = useContatos();
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [ancoraIdx, setAncoraIdx] = useState(() => ancoras.indexOf(ancoraDoDia()));

  return (
    <div className="space-y-5">
      <header className="bg-destructive/15 border border-destructive/40 rounded p-4">
        <p className="text-xs uppercase tracking-widest text-destructive">Protocolo de Emergência</p>
        <h1 className="font-display text-2xl mt-1">Respira. Você está no escudo.</h1>
      </header>

      <section className="tactical-card">
        <div className="flex items-center gap-2 mb-2">
          <Wind className="text-primary" size={18} />
          <h2 className="font-display tracking-wide">1. Respira 3-3-3</h2>
        </div>
        <p className="text-sm text-foreground/80">
          Inspira 3s · Segura 3s · Solta 3s. Repete por 3 minutos. Conta na ponta dos dedos.
        </p>
      </section>

      <section className="tactical-card space-y-3">
        <div className="flex items-center gap-2">
          <Phone className="text-primary" size={18} />
          <h2 className="font-display tracking-wide">2. Liga para alguém</h2>
        </div>
        {contatos.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Cadastra contatos de confiança agora. Você não vai querer pensar nisso na hora.
          </p>
        )}
        <ul className="space-y-2">
          {contatos.map((c) => (
            <li key={c.id} className="flex items-center justify-between bg-secondary/50 rounded p-3">
              <div>
                <div className="font-display tracking-wide text-sm">{c.nome}</div>
                <div className="text-xs text-muted-foreground">{c.telefone}</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${c.telefone}`}
                  className="bg-primary text-primary-foreground rounded px-3 py-1.5 text-sm font-display tracking-wide"
                >
                  Ligar
                </a>
                <button onClick={() => remove(c.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2">
          <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input placeholder="Telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
          <Button
            onClick={() => {
              if (!nome.trim() || !tel.trim()) return;
              add({ nome: nome.trim(), telefone: tel.trim() });
              setNome(""); setTel("");
            }}
          >
            <Plus size={16} className="mr-1" /> Salvar
          </Button>
        </div>
        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          Emergência pública: <a className="text-primary underline" href="tel:188">CVV 188</a> · <a className="text-primary underline" href="tel:192">SAMU 192</a>
        </div>
      </section>

      <section className="tactical-card">
        <div className="flex items-center gap-2 mb-2">
          <LogOut className="text-primary" size={18} />
          <h2 className="font-display tracking-wide">3. Sai do gatilho físico</h2>
        </div>
        <p className="text-sm text-foreground/80">
          Sai do lugar. Vai pra rua, pro banho, pra cozinha. Muda o cenário em 60 segundos.
        </p>
      </section>

      <section className="tactical-card">
        <h2 className="font-display tracking-wide mb-2">4. Frase-âncora</h2>
        <blockquote className="italic text-lg text-foreground/90 tactical-border">
          "{ancoras[ancoraIdx % ancoras.length]}"
        </blockquote>
        <Button
          variant="outline"
          className="mt-3"
          onClick={() => setAncoraIdx((i) => (i + 1) % ancoras.length)}
        >
          Outra
        </Button>
      </section>

      <DisclaimerBanner />
    </div>
  );
}
