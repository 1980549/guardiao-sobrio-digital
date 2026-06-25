import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";

type Strategy = { id: string; description: string; type: string | null; source: string };
type Person = { id: string; name: string; relationship: string | null; source: string };

export default function ChatMemoria() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<{ display_name: string | null; primary_substance: string | null; age_range: string | null }>({
    display_name: "",
    primary_substance: "",
    age_range: "",
  });
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [network, setNetwork] = useState<Person[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate("/auth?redirect=/chat/memoria");
  }, [loading, user, navigate]);

  const reload = async () => {
    const [{ data: p }, { data: s }, { data: n }] = await Promise.all([
      supabase.from("chat_profiles").select("display_name, primary_substance, age_range").maybeSingle(),
      supabase.from("learned_strategies").select("id, description, type, source").order("created_at", { ascending: false }),
      supabase.from("support_network").select("id, name, relationship, source").order("created_at", { ascending: false }),
    ]);
    if (p) setProfile({ display_name: p.display_name || "", primary_substance: p.primary_substance || "", age_range: p.age_range || "" });
    if (s) setStrategies(s as Strategy[]);
    if (n) setNetwork(n as Person[]);
  };

  useEffect(() => {
    if (user) reload();
  }, [user]);

  const saveProfile = async () => {
    if (!user) return;
    await supabase.from("chat_profiles").upsert({
      user_id: user.id,
      display_name: profile.display_name || null,
      primary_substance: profile.primary_substance || null,
      age_range: profile.age_range || null,
    });
    toast.success("Perfil atualizado");
  };

  const delStrategy = async (id: string) => {
    await supabase.from("learned_strategies").delete().eq("id", id);
    reload();
  };
  const delPerson = async (id: string) => {
    await supabase.from("support_network").delete().eq("id", id);
    reload();
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Memória do Companheiro — Guardião Sóbrio" description="Veja, edite e apague o que o Companheiro aprendeu sobre você." />
      <header className="border-b border-border/40 px-4 py-3 flex items-center gap-3">
        <Link to="/chat" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="font-display text-lg">Memória do Companheiro</h1>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
        <p className="text-sm text-muted-foreground">
          Aqui está tudo que o Companheiro guardou sobre você. Você pode editar ou apagar a qualquer momento — nada fica fora do seu controle.
        </p>

        <Card className="p-4 space-y-3">
          <h2 className="font-display text-base">Sobre você</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <Label>Como te chamamos</Label>
              <Input value={profile.display_name || ""} onChange={(e) => setProfile({ ...profile, display_name: e.target.value })} />
            </div>
            <div>
              <Label>Faixa etária</Label>
              <Input placeholder="ex: 30-40" value={profile.age_range || ""} onChange={(e) => setProfile({ ...profile, age_range: e.target.value })} />
            </div>
            <div>
              <Label>Substância</Label>
              <Input placeholder="opcional" value={profile.primary_substance || ""} onChange={(e) => setProfile({ ...profile, primary_substance: e.target.value })} />
            </div>
          </div>
          <Button onClick={saveProfile} size="sm">Salvar</Button>
        </Card>

        <Card className="p-4 space-y-3">
          <h2 className="font-display text-base">O que costuma te ajudar</h2>
          {strategies.length === 0 && <p className="text-sm text-muted-foreground">Nada por aqui ainda. Conforme você conversa, isso é preenchido.</p>}
          <ul className="space-y-2">
            {strategies.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-2 border-b border-border/30 pb-2">
                <div>
                  <p className="text-sm">{s.description}</p>
                  <p className="text-xs text-muted-foreground">{s.type || "—"} · {s.source}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => delStrategy(s.id)} aria-label="Apagar">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4 space-y-3">
          <h2 className="font-display text-base">Rede de apoio mencionada</h2>
          {network.length === 0 && <p className="text-sm text-muted-foreground">Ninguém registrado ainda.</p>}
          <ul className="space-y-2">
            {network.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-2 border-b border-border/30 pb-2">
                <div>
                  <p className="text-sm">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.relationship || "—"} · {p.source}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => delPerson(p.id)} aria-label="Apagar">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        <p className="text-xs text-muted-foreground text-center pb-8">
          Em risco grave, ligue CVV 188 ou SAMU 192. O Companheiro não substitui ajuda profissional.
        </p>
      </main>
    </div>
  );
}
