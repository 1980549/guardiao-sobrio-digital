import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

/**
 * Resolve a entrada em /chat:
 * - sem login → /auth
 * - com login → última conversa ou cria uma nova
 */
export default function ChatIndex() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/auth?redirect=/chat", { replace: true });
      return;
    }
    (async () => {
      const { data: existing } = await supabase
        .from("conversations")
        .select("id")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (existing) {
        navigate(`/chat/${existing.id}`, { replace: true });
      } else {
        const { data: created, error } = await supabase
          .from("conversations")
          .insert({ user_id: user.id })
          .select("id")
          .single();
        if (!error && created) navigate(`/chat/${created.id}`, { replace: true });
      }
    })();
  }, [loading, user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">
      Carregando…
    </div>
  );
}
