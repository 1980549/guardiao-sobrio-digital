import { Link } from "react-router-dom";
import { useProfile, useChecklist, diasSobrios } from "@/app/useUserState";
import { promptDoDia } from "@/data/espelhoPrompts";
import { ancoraDoDia } from "@/data/ancoras";
import { BookOpen, Target, ShieldCheck, Clock, LifeBuoy } from "lucide-react";

export default function Hoje() {
  const { profile } = useProfile();
  const { progress, total } = useChecklist();
  if (!profile) return null;
  const dias = diasSobrios(profile.dataInicio);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Hoje</p>
        <h1 className="font-display text-3xl md:text-4xl">Bem-vindo, {profile.nome}.</h1>
        {dias !== null && (
          <p className="mt-2 text-primary font-display text-xl">
            Dia {dias + 1} de sobriedade.
          </p>
        )}
      </header>

      <blockquote className="tactical-border italic text-foreground/90">
        "{ancoraDoDia()}"
      </blockquote>

      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/app/tatica" className="tactical-card group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="text-primary" size={18} />
              <h3 className="font-display tracking-wide">Checklist de hoje</h3>
            </div>
            <span className="text-sm text-muted-foreground">{progress}/{total}</span>
          </div>
          <div className="h-2 bg-secondary rounded overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">Sono · Água · Alimentação · Movimento · Conexão</p>
        </Link>

        <Link to="/app/espelho" className="tactical-card">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="text-primary" size={18} />
            <h3 className="font-display tracking-wide">Espelho de hoje</h3>
          </div>
          <p className="text-sm text-foreground/80">{promptDoDia()}</p>
        </Link>

        <Link to="/app/escudo" className="tactical-card">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="text-primary" size={18} />
            <h3 className="font-display tracking-wide">Escudo</h3>
          </div>
          <p className="text-sm text-muted-foreground">Atualize gatilhos e perímetro semanal.</p>
        </Link>

        <div className="tactical-card">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-primary" size={18} />
            <h3 className="font-display tracking-wide">Risco previsto</h3>
          </div>
          <p className="text-sm text-foreground/80">
            Hoje às <span className="text-primary font-display">{profile.horarioRisco}</span> — ative o bunker.
          </p>
        </div>
      </div>

      <Link
        to="/app/sos"
        className="flex items-center justify-center gap-3 bg-destructive text-destructive-foreground rounded-lg py-4 font-display tracking-widest uppercase hover:bg-destructive/90 transition-colors"
      >
        <LifeBuoy size={20} /> Protocolo de Emergência
      </Link>
    </div>
  );
}
