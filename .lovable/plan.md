## Objetivo

Adaptar o site institucional atual para também ser o **app web** descrito no PRD: estrutura diária de proteção da sobriedade baseada nos 3 pilares **ESPELHO · TÁTICA · ESCUDO**, com checklist diário em <3 min, protocolo de emergência a 2 toques, diário guiado, registro de gatilhos, e trilha para familiares. Mantém o conteúdo institucional (blog, protocolos, produtos, sobre) e adiciona a camada de produto.

## Decisões-chave

- **Single codebase web** (React + Vite atual), responsivo e pronto para "instalar na tela inicial" (manifest-only PWA, sem offline real nesta fase — fica como próximo passo).
- **Sem backend nesta fase**: dados salvos em `localStorage` (checklist diário, entradas do diário, gatilhos, perímetro semanal, onboarding, persona). Quando o usuário pedir login/sincronização, ativamos Lovable Cloud.
- **Sem promessas de cura**: rodapé já existente + disclaimer reforçado nas telas de protocolo de emergência e checklist.
- **Sem 12 passos / sem linguagem religiosa** no método central.
- **Botão flutuante "SOS / Protocolo de Emergência"** acessível de qualquer tela do app (2 toques garantidos).

## Estrutura de navegação (nova)

Duas zonas no mesmo site:

```text
SITE (público)                APP (privado-ish, local)
├─ /                          ├─ /app                (dashboard diário)
├─ /blog                      ├─ /app/espelho        (diário guiado)
├─ /protocolos                ├─ /app/tatica         (checklist diário)
├─ /produtos                  ├─ /app/escudo         (gatilhos + perímetro)
├─ /sobre                     ├─ /app/familiar       (trilha persona 3)
├─ /contato                   ├─ /app/sos            (protocolo emergência)
└─ /comece-aqui  ──► CTA "Abrir o App" ──► /onboarding ──► /app
```

Header ganha botão **"Abrir App"**. Dentro de `/app/*`, layout próprio com bottom-nav (mobile) / sidebar (desktop): Hoje · Espelho · Tática · Escudo · SOS.

## Telas a construir

1. **Onboarding** (`/onboarding`) — máx. 5 perguntas, entrega valor no fim:
   - Persona (caos/primeiros dias · frágil 30-60d · familiar)
   - Nome/apelido
   - Data de início da sobriedade (opcional)
   - Horário de maior risco (default 17-20h)
   - Aceite do disclaimer
   - Salva em `localStorage` e redireciona para `/app`.

2. **Dashboard "Hoje"** (`/app`):
   - Contador de dias (se data informada)
   - Card "Checklist de hoje" (progresso X/5)
   - Card "Espelho de hoje" (prompt do dia)
   - Card "Risco previsto às HH:MM" (lembrete bunker)
   - Botão grande **SOS** sempre visível
   - Frase-âncora do dia

3. **ESPELHO** (`/app/espelho`) — diário guiado:
   - Prompt diário rotativo (pool de ~20)
   - Textarea, salva entrada com data
   - Histórico das últimas entradas (somente local)

4. **TÁTICA** (`/app/tatica`) — checklist diário (5 itens fixos do PRD):
   Sono · Água · Alimentação · Movimento · Conexão. Toggle por item, barra de progresso, "Concluir dia" registra streak.

5. **ESCUDO** (`/app/escudo`):
   - **Gatilhos**: registrar gatilho + resposta planejada (lista)
   - **Perímetro semanal**: 5–7 regras editáveis (ex.: "não passar na Rua X", "celular fora do quarto às 22h")

6. **SOS** (`/app/sos`) — Protocolo de Emergência, 1 tela, sem rolagem longa:
   - Passo 1: Respira 3-3-3
   - Passo 2: Ligar para alguém (lista de contatos salvos localmente)
   - Passo 3: Sair do gatilho físico
   - Passo 4: Frases-âncora rotativas
   - Aviso CVV 188 / SAMU 192 + disclaimer.
   - Botão flutuante global (FAB) leva aqui em 1 toque.

7. **Familiar** (`/app/familiar`) — trilha persona 3: cards de orientação ("Apoiar sem se destruir", limites, o que não dizer, autocuidado).

## Arquivos

**Novos**
- `src/app/AppLayout.tsx` — layout com bottom-nav/sidebar + FAB SOS
- `src/app/useUserState.ts` — hook localStorage (perfil, checklist por data, diário, gatilhos, perímetro, contatos)
- `src/data/espelhoPrompts.ts` — pool de prompts diários
- `src/data/ancoras.ts` — frases-âncora
- `src/pages/Onboarding.tsx`
- `src/pages/app/Hoje.tsx`
- `src/pages/app/Espelho.tsx`
- `src/pages/app/Tatica.tsx`
- `src/pages/app/Escudo.tsx`
- `src/pages/app/SOS.tsx`
- `src/pages/app/Familiar.tsx`
- `src/components/SOSButton.tsx` — FAB global dentro de /app
- `src/components/DisclaimerBanner.tsx` — banner reforçado em SOS/checklist
- `public/manifest.webmanifest` + tags no `index.html` (instalável)

**Editados**
- `src/App.tsx` — novas rotas `/onboarding`, `/app`, `/app/*`
- `src/components/Header.tsx` — botão "Abrir App"
- `src/pages/Index.tsx` e `src/pages/ComeceAqui.tsx` — CTA "Abrir o App"
- `index.html` — manifest + theme-color + apple-touch-icon

## Fora de escopo desta entrega

- Login / sincronização entre dispositivos (será Lovable Cloud quando pedido)
- Notificações push (precisa native/Capacitor)
- Pagamento dentro do app (produtos seguem como vitrine)
- Offline real com service worker (manifest-only por ora)
- App nativo iOS/Android (Capacitor pode vir depois)

## Brand safety (mantido em todas as telas novas)

- Nenhuma promessa de cura/resultado
- Disclaimer no rodapé + banner em SOS e checklist
- CVV 188 e SAMU 192 visíveis no SOS
- Tom de trincheira, sem linguagem religiosa ou de 12 passos
