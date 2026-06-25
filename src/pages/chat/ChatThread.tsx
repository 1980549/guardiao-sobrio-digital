import { useEffect, useRef, useState, FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ShieldIcon } from "@/components/ShieldIcon";
import { Plus, Trash2, ArrowLeft, BookOpen, LogOut, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";

type Msg = { id?: string; role: "user" | "assistant"; content: string };
type Conv = { id: string; title: string | null; updated_at: string };

export default function ChatThread() {
  const { threadId } = useParams<{ threadId: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [threads, setThreads] = useState<Conv[]>([]);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth?redirect=/chat", { replace: true });
  }, [user, authLoading, navigate]);

  // Lista de threads
  const loadThreads = async () => {
    const { data } = await supabase
      .from("conversations")
      .select("id, title, updated_at")
      .order("updated_at", { ascending: false });
    if (data) setThreads(data as Conv[]);
  };

  useEffect(() => {
    if (user) loadThreads();
  }, [user]);

  // Mensagens da thread ativa
  useEffect(() => {
    if (!threadId || !user) return;
    setMessages([]);
    setStreamText("");
    (async () => {
      const { data } = await supabase
        .from("chat_messages")
        .select("id, role, content")
        .eq("conversation_id", threadId)
        .order("created_at");
      if (data) setMessages(data.filter((m) => m.role !== "system") as Msg[]);
    })();
    setTimeout(() => textareaRef.current?.focus(), 50);
  }, [threadId, user]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streamText]);

  const newThread = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("conversations")
      .insert({ user_id: user.id })
      .select("id")
      .single();
    if (error || !data) return;
    await loadThreads();
    navigate(`/chat/${data.id}`);
  };

  const deleteThread = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Apagar esta conversa? Esta ação é permanente.")) return;
    await supabase.from("conversations").delete().eq("id", id);
    await loadThreads();
    if (id === threadId) navigate("/chat");
  };

  const send = async (e?: FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || !threadId || streaming) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setStreaming(true);
    setStreamText("");

    try {
      const { data: sess } = await supabase.auth.getSession();
      const token = sess.session?.access_token;
      const url = `https://tgxgikibcuzvquqogism.supabase.co/functions/v1/chat`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          conversationId: threadId,
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Erro" }));
        toast.error(err.error || "Falha ao responder");
        setStreaming(false);
        return;
      }

      const isCrisis = resp.headers.get("X-Crisis") === "1";
      if (isCrisis) {
        toast.warning("Detectamos sinais de risco. CVV 188 disponível 24h.", { duration: 8000 });
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setStreamText(acc);
      }
      setMessages((m) => [...m, { role: "assistant", content: acc }]);
      setStreamText("");
      loadThreads();
    } catch (err: any) {
      toast.error(err.message || "Erro de rede");
    } finally {
      setStreaming(false);
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  if (authLoading) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Companheiro de Apoio — Guardião Sóbrio" description="Apoio conversacional discreto, baseado em Entrevista Motivacional e Prevenção de Recaída." path="/chat" />

      {/* Topbar */}
      <header className="border-b border-border/40 px-4 py-3 flex items-center gap-3">
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <ShieldIcon size="sm" />
        <div className="flex-1">
          <h1 className="font-display text-base leading-tight">Companheiro de Apoio</h1>
          <p className="text-xs text-muted-foreground">Apoio complementar — não substitui ajuda profissional</p>
        </div>
        <Link to="/chat/memoria">
          <Button variant="ghost" size="sm" className="gap-1">
            <BookOpen className="h-4 w-4" /> <span className="hidden sm:inline">Memória</span>
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={async () => {
            await supabase.auth.signOut();
            navigate("/");
          }}
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar de threads */}
        <aside className="hidden md:flex w-64 border-r border-border/40 flex-col">
          <div className="p-3">
            <Button onClick={newThread} variant="outline" size="sm" className="w-full gap-2">
              <Plus className="h-4 w-4" /> Nova conversa
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
            {threads.map((t) => (
              <div
                key={t.id}
                onClick={() => navigate(`/chat/${t.id}`)}
                className={cn(
                  "group flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-sm hover:bg-muted/50",
                  t.id === threadId && "bg-muted/70"
                )}
              >
                <span className="flex-1 truncate">{t.title || "Nova conversa"}</span>
                <button
                  onClick={(e) => deleteThread(t.id, e)}
                  className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                  aria-label="Apagar"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
            {threads.length === 0 && (
              <p className="text-xs text-muted-foreground p-2">Nenhuma conversa ainda.</p>
            )}
          </div>
        </aside>

        {/* Conversa */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-2xl mx-auto space-y-4">
              {messages.length === 0 && !streaming && (
                <div className="text-center text-muted-foreground py-12 space-y-3">
                  <ShieldIcon size="md" />
                  <p className="text-sm max-w-md mx-auto">
                    Oi. Eu estou aqui para conversar. Não precisa explicar tudo de uma vez — comece de onde estiver.
                  </p>
                </div>
              )}

              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}

              {streaming && (
                <Bubble role="assistant" content={streamText || "…"} />
              )}
            </div>
          </div>

          {/* Composer */}
          <form onSubmit={send} className="border-t border-border/40 p-3">
            <div className="max-w-2xl mx-auto flex gap-2 items-end">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Escreva como está se sentindo agora…"
                rows={2}
                className="resize-none"
                disabled={streaming}
              />
              <Button type="submit" disabled={!input.trim() || streaming}>
                Enviar
              </Button>
            </div>
            <p className="max-w-2xl mx-auto mt-2 text-[11px] text-muted-foreground flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3" />
              Em risco grave, ligue <strong>CVV 188</strong> ou <strong>SAMU 192</strong>. Este apoio não substitui atendimento profissional.
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

function Bubble({ role, content }: { role: "user" | "assistant"; content: string }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-2 max-w-[85%]">
          <p className="whitespace-pre-wrap text-sm">{content}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <div className="prose prose-sm prose-invert max-w-none text-foreground">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
