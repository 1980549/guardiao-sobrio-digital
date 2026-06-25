// Companheiro de Apoio - Streaming chat endpoint
// MI (Entrevista Motivacional) + Prevenção de Recaída (Marlatt & Gordon)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Sinais de risco grave — gatilho para escalonamento imediato
const CRISIS_PATTERNS = [
  /\b(me\s+matar|suicid|tirar\s+(a\s+)?minha\s+vida|n[ãa]o\s+quero\s+(mais\s+)?viver|acabar\s+com\s+tudo|me\s+machucar|me\s+cortar|automutil)/i,
  /\b(overdose|tomei\s+demais|engoli\s+(rem[ée]dio|comprimido)s?)/i,
];

const SYSTEM_PROMPT_BASE = `Você é o Companheiro de Apoio do Guardião Sóbrio — um apoio conversacional para pessoas em recuperação de uso de álcool e outras substâncias.

TOM (Entrevista Motivacional, Miller & Rollnick):
- Caloroso, sem julgar, sem alarmismo, sem soar formulário.
- Faça perguntas abertas, uma de cada vez. Use escuta reflexiva: devolva o que a pessoa disse validando o sentimento, sem validar a ação de uso.
- Respeite a autonomia. A decisão é sempre da pessoa.
- Nunca seja bajulador ("você é incrível!", "estou sempre aqui como seu melhor amigo"). Apoie de verdade — concorde quando é honesto, divirja com gentileza quando precisa.
- Português do Brasil, frases curtas, naturais. Sem emojis de excesso.

ESTRUTURA NA CRISE (Prevenção de Recaída, Marlatt & Gordon):
1. Acolher o sentimento.
2. Entender a situação (onde, com quem, o que disparou, intensidade) — uma pergunta por vez.
3. Apoiar uma ação de enfrentamento concreta (preferindo o que a pessoa já disse que funciona). Janela típica: 15–30 min para o pico passar.
4. Acompanhar e nomear a vitória ao final.

LIMITES INEGOCIÁVEIS:
- Você NÃO é terapia, tratamento ou diagnóstico. Em momentos que pedem ajuda profissional, diga isso com clareza.
- Você é uma ponte para a recuperação e para a rede humana — nunca um substituto. Incentive contato com pessoas e profissionais.
- Nunca prometa cura ou resultado garantido.
- Nunca forneça informação que facilite uso, autoagressão ou desvio de medicação.

ESCALONAMENTO DE CRISE (PRIORIDADE MÁXIMA):
- Se houver qualquer sinal de ideação suicida, autoagressão ou emergência médica, INTERROMPA o fluxo normal.
- Responda com calma, valide o que a pessoa sente e direcione:
  • CVV — 188 (ligação gratuita, 24h, apoio emocional e prevenção do suicídio) ou chat em cvv.org.br
  • SAMU — 192 (emergência médica)
  • CAPS mais próximo (saúde mental pública)
- Não tente "resolver sozinho". Sua função é conectar a ajuda humana.`;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userId = userData.user.id;
    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { conversationId, messages } = (await req.json()) as {
      conversationId: string;
      messages: ChatMessage[];
    };

    if (!conversationId || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "conversationId e messages são obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verifica posse da conversa
    const { data: conv } = await admin
      .from("conversations")
      .select("id, user_id, title")
      .eq("id", conversationId)
      .single();
    if (!conv || conv.user_id !== userId) {
      return new Response(JSON.stringify({ error: "Conversa não encontrada" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userMessage = messages[messages.length - 1];

    // Detecção de crise
    const isCrisis = userMessage.role === "user" && CRISIS_PATTERNS.some((r) => r.test(userMessage.content));
    if (isCrisis) {
      await admin.from("crisis_events").insert({
        user_id: userId,
        conversation_id: conversationId,
        severity: "alto",
        action_taken: "Encaminhamento CVV/SAMU",
      });
    }

    // Persistir mensagem do usuário
    await admin.from("chat_messages").insert({
      conversation_id: conversationId,
      user_id: userId,
      role: "user",
      content: userMessage.content,
    });

    // Carregar contexto: perfil + estratégias + rede
    const [{ data: profile }, { data: strategies }, { data: network }] = await Promise.all([
      admin.from("chat_profiles").select("display_name, age_range, primary_substance").eq("user_id", userId).maybeSingle(),
      admin.from("learned_strategies").select("description, type, effectiveness_score").eq("user_id", userId).order("effectiveness_score", { ascending: false }).limit(8),
      admin.from("support_network").select("name, relationship").eq("user_id", userId).limit(8),
    ]);

    let contextBlock = "\n\nCONTEXTO DO USUÁRIO (use com naturalidade, sem listar; não diga 'segundo meus registros'):";
    if (profile?.display_name) contextBlock += `\n- Nome: ${profile.display_name}`;
    if (profile?.primary_substance) contextBlock += `\n- Substância principal: ${profile.primary_substance}`;
    if (strategies && strategies.length > 0) {
      contextBlock += `\n- Estratégias que já ajudaram: ${strategies.map((s) => s.description).join("; ")}`;
    }
    if (network && network.length > 0) {
      contextBlock += `\n- Rede de apoio mencionada: ${network.map((n) => `${n.name}${n.relationship ? ` (${n.relationship})` : ""}`).join("; ")}`;
    }
    if (!profile?.display_name && (!strategies || strategies.length === 0)) {
      contextBlock += "\n- (sem histórico ainda — esta pode ser a primeira conversa; seja acolhedor e não invasivo).";
    }

    let systemPrompt = SYSTEM_PROMPT_BASE + contextBlock;
    if (isCrisis) {
      systemPrompt += `\n\n[ALERTA INTERNO] A mensagem do usuário contém sinais de risco grave. PRIORIZE acolher e direcionar para CVV 188 e/ou SAMU 192 nesta resposta. Não dê instruções de método, não minimize. Pergunte se ele está seguro agora.`;
    }

    const aiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-20), // janela curta para latência
    ];

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: aiMessages,
        stream: true,
      }),
    });

    if (!aiResp.ok) {
      const text = await aiResp.text();
      if (aiResp.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de uso temporário. Tente em alguns instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiResp.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos esgotados. Avise o administrador." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("AI error", aiResp.status, text);
      return new Response(JSON.stringify({ error: "Erro no modelo" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Stream OpenAI-style SSE -> texto puro pro cliente, e captura para salvar
    let assistantFull = "";
    const encoder = new TextEncoder();
    const reader = aiResp.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data:")) continue;
              const payload = trimmed.slice(5).trim();
              if (payload === "[DONE]") continue;
              try {
                const json = JSON.parse(payload);
                const delta = json.choices?.[0]?.delta?.content;
                if (delta) {
                  assistantFull += delta;
                  controller.enqueue(encoder.encode(delta));
                }
              } catch { /* ignore parse */ }
            }
          }
          controller.close();

          // Persistir resposta + extração de memória em background
          const finalize = async () => {
            if (assistantFull) {
              await admin.from("chat_messages").insert({
                conversation_id: conversationId,
                user_id: userId,
                role: "assistant",
                content: assistantFull,
              });
              await admin.from("conversations").update({ updated_at: new Date().toISOString() }).eq("id", conversationId);

              // Auto-título na primeira troca
              if (!conv.title) {
                const guess = userMessage.content.slice(0, 60);
                await admin.from("conversations").update({ title: guess }).eq("id", conversationId);
              }

              // Extração leve de memória (estratégias + rede)
              try {
                const extractResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Authorization: `Bearer ${LOVABLE_API_KEY}` },
                  body: JSON.stringify({
                    model: "google/gemini-2.5-flash-lite",
                    messages: [
                      {
                        role: "system",
                        content: `Você extrai memórias úteis de uma conversa de apoio em recuperação. Responda SOMENTE com JSON válido no formato:
{"strategies":[{"description":"...","type":"caminhada|ligacao|distracao|respiracao|outro"}],"support":[{"name":"...","relationship":"..."}]}
- strategies: ações concretas que a pessoa disse que ajudam ou que fez para superar fissura.
- support: pessoas mencionadas como apoio (irmã, amigo, mãe, terapeuta).
- Se nada relevante apareceu, retorne arrays vazios. Não invente.`,
                      },
                      {
                        role: "user",
                        content: `USUÁRIO: ${userMessage.content}\nASSISTENTE: ${assistantFull}`,
                      },
                    ],
                    response_format: { type: "json_object" },
                  }),
                });
                if (extractResp.ok) {
                  const data = await extractResp.json();
                  const raw = data.choices?.[0]?.message?.content || "{}";
                  const parsed = JSON.parse(raw);
                  const strats = Array.isArray(parsed.strategies) ? parsed.strategies : [];
                  const supp = Array.isArray(parsed.support) ? parsed.support : [];
                  for (const s of strats) {
                    if (s.description) {
                      await admin.from("learned_strategies").insert({
                        user_id: userId,
                        description: s.description,
                        type: s.type || "outro",
                        source: "inferido",
                      });
                    }
                  }
                  for (const p of supp) {
                    if (p.name) {
                      await admin.from("support_network").insert({
                        user_id: userId,
                        name: p.name,
                        relationship: p.relationship || null,
                        source: "inferido",
                      });
                    }
                  }
                }
              } catch (e) {
                console.error("memory extraction failed", e);
              }
            }
          };
          // @ts-ignore - EdgeRuntime existe no runtime Supabase
          if (typeof EdgeRuntime !== "undefined") EdgeRuntime.waitUntil(finalize());
          else await finalize();
        } catch (e) {
          console.error("stream error", e);
          controller.error(e);
        }
      },
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/plain; charset=utf-8",
        "X-Crisis": isCrisis ? "1" : "0",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
