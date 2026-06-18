# Revisão Estratégica — Guardião Sóbrio

Analisei a estrutura atual. Abaixo, o que preservo, o que mudo e como.

## Diagnóstico (estado atual)

**Bom — preservar:**
- Headline da home, segmentação por situação, página Sobre, tom anti-promessa, disclaimers, estrutura `/comece-aqui`.
- Estética Noir já corrigida (paleta carvão, dourado fosco, divisores brancos 8%).
- Páginas de protocolos individuais (`/protocolos/escudo-72h`, `/perimetro-24h`) — conteúdo robusto.
- Trilhas dinâmicas em `/trilhas/:trilhaId` — dados existem, só falta refinamento.

**Problemas concretos:**
1. `/produtos`: 3 cards com preços inventados (R$ 47, R$ 39,90, R$ 997) e CTA "QUERO O E-BOOK" que joga em `/contato`. Atrito alto, sem coerência com fase atual do projeto.
2. `/protocolos`: apenas 2 cards soltos. Falta sensação de "sistema/método".
3. `/trilhas/:id`: já é razoável, mas não tem "onde estou → o que fazer agora → próximo passo" explícito.
4. `Header → Abrir App`: leva direto a `/app` (área incompleta) — desonesto.
5. Newsletter: copy genérico ("Receba protocolos — sem teatro"), sem oferta concreta.
6. Inconsistência "Guardião Sóbrio" vs "O Guardião Sóbrio".
7. Home: protocolos e trilhas competem; faltam âncoras de conversão claras.

## Decisão de marca

Padronizar **"Guardião Sóbrio"** (sem artigo) em UI, navegação, footer, OG. Manter "O Guardião Sóbrio" apenas em frases narrativas longas (página Sobre, primeira pessoa).

## Mudanças por página

### 1. `/produtos` — reestruturação completa
- Remover preços fixos (não há checkout). Reorganizar em 3 estados claros:
  - **Disponível agora:** "Protocolo Semanal" (newsletter tática) — CTA: *Entrar na lista*.
  - **Em construção / acesso antecipado:** E-book "Manual dos 90 Dias", Comunidade "A Base" — badge `EM BREVE`, CTA: *Quero ser avisado* (mesmo formulário, com tag de interesse).
  - **Mentoria:** badge `LISTA DE ESPERA`, CTA: *Pedir acesso* → `/contato?produto=mentoria`.
- Hierarquia: card destacado (Protocolo Semanal) + 3 cards complementares.
- Substituir bloco de preço por linha de status (`Disponível` / `Em breve` / `Lista de espera`).

### 2. `/protocolos` — estrutura de método
Dividir em 3 blocos visuais:
- **Protocolo Principal:** Escudo—72h (card destaque).
- **Protocolos Complementares:** Perímetro—24h + 1 novo card "Protocolo Bunker Noturno" (rotina de sono sóbrio, derivado de conteúdo já existente — link para artigo do blog até virar página própria).
- **Em desenvolvimento:** 3 cards `EM BREVE` com nome, propósito e público (ex: Protocolo Reentrada Social 7d, Protocolo Recaída—Primeira Hora, Protocolo Família Estendida). Sem link, badge claro.
Adicionar legenda "Para quem é / Quando usar / Duração" em cada card. Manter aviso médico.

### 3. `/trilhas/:trilhaId` — orientação de crise
Reescrever cabeçalho com bloco fixo de 4 passos visuais:
- **1. Onde você está** (resumo da situação)
- **2. O que fazer agora** (1-3 ações imediatas — usa o `immediateAction` existente)
- **3. Protocolo recomendado** (link tático)
- **4. Próximo passo** (próxima trilha, próximo artigo, ou newsletter)
Aplicar para `recuperacao`, `vontade-hoje`, `familiar`. Manter checklist/frases/artigos como suporte abaixo.

### 4. `/app` — transição honesta
Criar página `/app` standalone (substitui rota atual) explicando:
- O que é o app (módulos: Espelho, Tática, Escudo, SOS, Familiar).
- Status: **acesso antecipado em construção**.
- CTA: *Quero acesso antecipado* → newsletter com tag `app-early-access`.
- Link discreto "explorar protótipo" → para `/app/hoje` (rota atual interna), com banner avisando que é WIP.
Header CTA muda de "Abrir App" para **"Acesso antecipado"**.

### 5. Newsletter — oferta concreta
Reescrever `NewsletterCapture` + bloco da home:
- Headline: *"Protocolo Semanal — orientação prática direto na sua caixa."*
- Bullets curtos: 1 protocolo prático/semana · zero spam · sair com 1 clique.
- Microcopy de confiança: "Usado por familiares, pessoas em recuperação e profissionais."
- CTA: **Entrar na lista**.
- Adicionar prop opcional `tag` para uso em `/produtos` e `/app` (segmentação futura).

### 6. Home `/`
- Hero: manter headline; sub adicionar microlinha "Para quem para de beber, atravessa uma vontade ou protege a casa".
- Reordenar seções: Hero → 3 trilhas → Protocolos (com link "ver método completo") → Sobre (mini) → Newsletter → Artigos.
- Remover repetição visual entre trilhas e protocolos.

### 7. Consistência de marca
Buscar/substituir "O Guardião Sóbrio" → "Guardião Sóbrio" em Header, Footer, títulos de página, OG. Preservar nas frases narrativas em `/sobre`.

## Fora do escopo desta etapa (pendências declaradas)
- Persistência real de e-mails (precisa Lovable Cloud) — segue mock por enquanto.
- Páginas próprias para "Protocolo Bunker" e os 3 novos protocolos `EM BREVE`.
- Checkout/pagamento dos produtos.
- Conteúdo profundo dentro do `/app` (módulos seguem WIP).

## Detalhes técnicos
- Sem novas dependências.
- Novos arquivos: `src/pages/AppLanding.tsx` (substitui index do `AppLayout` na rota `/app`, move atual para `/app/hoje` como rota nomeada).
- `src/App.tsx`: ajustar rotas — `/app` agora renderiza `AppLanding`; rotas internas continuam em `/app/*` via `AppLayout` (mover layout para wrapper só dos filhos: `/app/hoje`, `/app/espelho` etc.).
- `Header.tsx`: trocar label e destino do CTA para `/app` (landing).
- `NewsletterCapture.tsx`: aceitar props `headline`, `cta`, `tag`.
- `Produtos.tsx`, `Protocolos.tsx`, `Trilhas.tsx`, `Index.tsx`: reescrita parcial.
- Sem alteração de design tokens (paleta atual preservada).

Aprove para eu implementar nesta ordem: marca → newsletter → /app landing → produtos → protocolos → trilhas → home.