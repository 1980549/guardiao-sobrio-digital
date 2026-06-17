import { useCallback, useEffect, useState } from "react";

export type Persona = "caos" | "fragil" | "familiar";

export interface UserProfile {
  nome: string;
  persona: Persona;
  dataInicio?: string; // ISO date
  horarioRisco: string; // "HH:MM"
  aceiteDisclaimer: boolean;
  criadoEm: string;
}

export interface ChecklistDia {
  sono: boolean;
  agua: boolean;
  alimentacao: boolean;
  movimento: boolean;
  conexao: boolean;
  concluido?: boolean;
}

export interface DiarioEntry {
  data: string; // YYYY-MM-DD
  prompt: string;
  texto: string;
}

export interface Gatilho {
  id: string;
  gatilho: string;
  resposta: string;
}

export interface ContatoSOS {
  id: string;
  nome: string;
  telefone: string;
}

const KEYS = {
  profile: "gs.profile",
  checklist: "gs.checklist", // map data -> ChecklistDia
  diario: "gs.diario", // array DiarioEntry
  gatilhos: "gs.gatilhos",
  perimetro: "gs.perimetro", // string[]
  contatos: "gs.contatos",
};

function read<T>(k: string, fallback: T): T {
  try {
    const v = localStorage.getItem(k);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write<T>(k: string, v: T) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}

export const todayKey = () => new Date().toISOString().slice(0, 10);

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(() =>
    read<UserProfile | null>(KEYS.profile, null)
  );
  const save = useCallback((p: UserProfile) => {
    write(KEYS.profile, p);
    setProfile(p);
  }, []);
  const clear = useCallback(() => {
    localStorage.removeItem(KEYS.profile);
    setProfile(null);
  }, []);
  return { profile, save, clear };
}

const emptyChecklist: ChecklistDia = {
  sono: false,
  agua: false,
  alimentacao: false,
  movimento: false,
  conexao: false,
};

export function useChecklist(dateKey = todayKey()) {
  const [all, setAll] = useState<Record<string, ChecklistDia>>(() =>
    read<Record<string, ChecklistDia>>(KEYS.checklist, {})
  );
  const dia = all[dateKey] ?? emptyChecklist;
  const update = (patch: Partial<ChecklistDia>) => {
    const next = { ...all, [dateKey]: { ...dia, ...patch } };
    setAll(next);
    write(KEYS.checklist, next);
  };
  const progress = (["sono", "agua", "alimentacao", "movimento", "conexao"] as const).filter(
    (k) => dia[k]
  ).length;
  return { dia, update, progress, total: 5, all };
}

export function useDiario() {
  const [entries, setEntries] = useState<DiarioEntry[]>(() =>
    read<DiarioEntry[]>(KEYS.diario, [])
  );
  const add = (e: DiarioEntry) => {
    const next = [e, ...entries].slice(0, 100);
    setEntries(next);
    write(KEYS.diario, next);
  };
  return { entries, add };
}

export function useGatilhos() {
  const [items, setItems] = useState<Gatilho[]>(() => read<Gatilho[]>(KEYS.gatilhos, []));
  const add = (g: Omit<Gatilho, "id">) => {
    const next = [{ ...g, id: crypto.randomUUID() }, ...items];
    setItems(next);
    write(KEYS.gatilhos, next);
  };
  const remove = (id: string) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    write(KEYS.gatilhos, next);
  };
  return { items, add, remove };
}

export function usePerimetro() {
  const [regras, setRegras] = useState<string[]>(() =>
    read<string[]>(KEYS.perimetro, [
      "Celular fora do quarto após 22h",
      "Não passar nas ruas/lugares de risco",
      "Avisar uma pessoa quando bater vontade",
    ])
  );
  const save = (r: string[]) => {
    setRegras(r);
    write(KEYS.perimetro, r);
  };
  return { regras, save };
}

export function useContatos() {
  const [contatos, setContatos] = useState<ContatoSOS[]>(() =>
    read<ContatoSOS[]>(KEYS.contatos, [])
  );
  const add = (c: Omit<ContatoSOS, "id">) => {
    const next = [...contatos, { ...c, id: crypto.randomUUID() }];
    setContatos(next);
    write(KEYS.contatos, next);
  };
  const remove = (id: string) => {
    const next = contatos.filter((c) => c.id !== id);
    setContatos(next);
    write(KEYS.contatos, next);
  };
  return { contatos, add, remove };
}

export function diasSobrios(dataInicio?: string): number | null {
  if (!dataInicio) return null;
  const start = new Date(dataInicio);
  const now = new Date();
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

// Force re-read for SSR safety not needed; localStorage only in browser.
export function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}
