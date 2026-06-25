import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ShieldIcon } from "@/components/ShieldIcon";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";

export default function Auth() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const redirectTo = params.get("redirect") || "/chat";
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password: pwd,
          options: {
            emailRedirectTo: `${window.location.origin}${redirectTo}`,
            data: { display_name: name || null },
          },
        });
        if (error) throw error;
        toast.success("Conta criada. Você já pode entrar.");
        // Tenta logar direto
        const { error: e2 } = await supabase.auth.signInWithPassword({ email, password: pwd });
        if (!e2) navigate(redirectTo);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password: pwd });
        if (error) throw error;
        navigate(redirectTo);
      }
    } catch (err: any) {
      toast.error(err.message || "Erro ao autenticar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Seo title="Entrar — Guardião Sóbrio" description="Acesse seu Companheiro de Apoio." />
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-3">
          <ShieldIcon size="md" />
          <h1 className="font-display text-2xl">
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Seu Companheiro de Apoio é privado. Só você vê suas conversas.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="name">Como quer ser chamado(a)? <span className="text-muted-foreground">(opcional)</span></Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="pwd">Senha</Label>
            <Input id="pwd" type="password" required minLength={6} value={pwd} onChange={(e) => setPwd(e.target.value)} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "..." : mode === "signin" ? "Entrar" : "Criar conta"}
          </Button>
        </form>

        <div className="text-sm text-center text-muted-foreground">
          {mode === "signin" ? (
            <>Sem conta?{" "}
              <button className="text-primary underline" onClick={() => setMode("signup")}>Criar uma</button>
            </>
          ) : (
            <>Já tem conta?{" "}
              <button className="text-primary underline" onClick={() => setMode("signin")}>Entrar</button>
            </>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Em risco grave, ligue <strong>CVV 188</strong> ou <strong>SAMU 192</strong>.<br />
          O Companheiro não substitui ajuda profissional.
        </p>

        <div className="text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">← Voltar ao site</Link>
        </div>
      </Card>
    </div>
  );
}
