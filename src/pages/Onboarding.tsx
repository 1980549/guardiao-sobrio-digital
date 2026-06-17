import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldIcon } from "@/components/ShieldIcon";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProfile, type Persona } from "@/app/useUserState";

const personas: { id: Persona; label: string; desc: string }[] = [
  { id: "caos", label: "Estou no caos / primeiros dias", desc: "Acabei de decidir parar ou estou tentando de novo." },
  { id: "fragil", label: "Estou sóbrio, mas frágil", desc: "30–60 dias e o ambiente ainda é o mesmo." },
  { id: "familiar", label: "Sou familiar / cônjuge", desc: "Quero apoiar sem me destruir." },
];

export default function Onboarding() {
  const nav = useNavigate();
  const { save } = useProfile();
  const [step, setStep] = useState(0);
  const [persona, setPersona] = useState<Persona | "">("");
  const [nome, setNome] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [horarioRisco, setHorarioRisco] = useState("18:00");
  const [aceite, setAceite] = useState(false);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  const finalizar = () => {
    if (!persona || !nome || !aceite) return;
    save({
      persona: persona as Persona,
      nome: nome.trim(),
      dataInicio: dataInicio || undefined,
      horarioRisco,
      aceiteDisclaimer: aceite,
      criadoEm: new Date().toISOString(),
    });
    nav("/app", { replace: true });
  };

  return (
    <div className="min-h-screen bunker-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-lg p-6 md:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <ShieldIcon size="md" />
          <div>
            <h1 className="font-display text-2xl tracking-wider">Guardião Sóbrio</h1>
            <p className="text-xs text-muted-foreground">Passo {step + 1} de 5</p>
          </div>
        </div>

        {step === 0 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl">Onde você está agora?</h2>
            <div className="grid gap-3">
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  className={`text-left p-4 rounded border transition-colors ${
                    persona === p.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="font-display tracking-wide">{p.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </button>
              ))}
            </div>
            <Button className="w-full" disabled={!persona} onClick={next}>
              Continuar
            </Button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl">Como você quer ser chamado?</h2>
            <Input
              placeholder="Seu nome ou apelido"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoFocus
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={back}>Voltar</Button>
              <Button className="flex-1" disabled={!nome.trim()} onClick={next}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl">Data da sua sobriedade</h2>
            <p className="text-sm text-muted-foreground">Opcional — para o contador de dias.</p>
            <Input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
            <div className="flex gap-2">
              <Button variant="outline" onClick={back}>Voltar</Button>
              <Button className="flex-1" onClick={next}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl">Horário de maior risco</h2>
            <p className="text-sm text-muted-foreground">
              Em geral é o fim da tarde (17h–20h). Vamos lembrar você do bunker nesse horário.
            </p>
            <Input type="time" value={horarioRisco} onChange={(e) => setHorarioRisco(e.target.value)} />
            <div className="flex gap-2">
              <Button variant="outline" onClick={back}>Voltar</Button>
              <Button className="flex-1" onClick={next}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl">Antes de começar</h2>
            <DisclaimerBanner />
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={aceite}
                onChange={(e) => setAceite(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm">
                Eu entendo que o app é orientação prática e não substitui profissionais de saúde.
              </span>
            </label>
            <div className="flex gap-2">
              <Button variant="outline" onClick={back}>Voltar</Button>
              <Button className="flex-1" disabled={!aceite} onClick={finalizar}>
                Abrir o app
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
