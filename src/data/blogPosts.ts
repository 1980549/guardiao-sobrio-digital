export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  applicationBox?: string;
  riskBox?: string;
  plan24h?: string;
}

export const categories = [
  { id: "vontade", label: "Vontade de beber" },
  { id: "gatilhos", label: "Gatilhos e perímetro" },
  { id: "rotina", label: "Rotina" },
  { id: "familia", label: "Família" },
  { id: "honestidade", label: "Honestidade tática" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "o-que-fazer-24h-quando-bate-vontade",
    title: "O que fazer nas primeiras 24h quando bate a vontade",
    summary: "A vontade de beber é um tsunami — não se enfrenta, se atravessa. Aqui está o plano tático para as próximas 24 horas.",
    category: "vontade",
    date: "2024-01-15",
    readTime: "6 min",
    content: `A vontade de beber não avisa. Ela chega como maré — primeiro suave, depois avassaladora. O erro mais comum? Tentar enfrentar de peito aberto.

O caminho seguro é diferente: não se luta contra a maré, atravessa-se ela com estratégia.

## O Protocolo das Primeiras 24 Horas

Quando a vontade bater, o cérebro vai tentar te convencer de que "dessa vez é diferente", que "um só não vai fazer mal", que "você merece relaxar". 

Não negocie. Não argumente. Execute o protocolo.

### Passo 1: Água. Agora.

Três copos d'água. Não dois, não um. Três. A hidratação altera a química do corpo e compra tempo. Enquanto você bebe água, não está bebendo outra coisa.

### Passo 2: Frio

Lave o rosto com água gelada. Tome um banho frio de 3 minutos. O choque térmico aciona o sistema nervoso parassimpático — é biologia trabalhando a seu favor.

### Passo 3: Movimento

Caminhe. Nem que seja até a esquina e volte. O corpo em movimento processa a vontade diferente. Ficar parado é dar vantagem para a fissura.

## O Bunker Noturno

A noite é o ponto mais vulnerável. Por isso, até as 20h: comida feita, banho tomado. Das 20h às 23h: ambiente previsível, cama cedo. 

Isso não é fraqueza. É tática.`,
    applicationBox: "Nas próximas 24h: três copos d'água quando bater a vontade, banho frio de 3 minutos, não ficar parado.",
    riskBox: "Não tente 'resistir' sozinho à noite. Ative o bunker: rotina previsível, ambiente seguro, cama cedo.",
    plan24h: "Água (3 copos) → Frio (3 min) → Movimento (caminhada curta) → Bunker noturno a partir das 20h."
  },
  {
    id: "2",
    slug: "fechar-perimetro-casa-decide-sobriedade",
    title: "Fechar perímetro: A casa decide a sobriedade",
    summary: "O ambiente não é neutro. Ele joga contra ou a favor. Veja como transformar sua casa em bunker.",
    category: "gatilhos",
    date: "2024-01-12",
    readTime: "5 min",
    content: `A primeira batalha da sobriedade não é contra você. É contra o ambiente.

A casa com álcool acessível é uma casa armada contra você. Não importa sua força de vontade — se a garrafa está ali, a tentação mora junto.

## O Perímetro de Proteção

Fechar perímetro significa eliminar facilidades. Todo álcool vai embora — não para o armário, para fora de casa. Rotas perigosas são cortadas. Se o bar fica no caminho do trabalho, muda o caminho.

### Água Visível

Garrafas de água ficam onde seus olhos passam: na mesa, na cabeceira, no carro. Quando a vontade bater, o que você vê primeiro define a resposta.

### Ambiente Tático

A sala não pode ter gatilhos visuais. Copos de whisky, abridores de garrafa, fotos de "bons tempos" bebendo — tudo isso vai embora. O ambiente é neutro ou aliado.

## A Casa como Bunker

Pense na sua casa como último reduto. Aqui dentro, você está seguro. Lá fora, campo minado. A função da casa é proteger, não testar.`,
    applicationBox: "Hoje: elimine todo álcool da casa, coloque água visível em 3 pontos, identifique e remova 1 gatilho visual.",
    riskBox: "Guardar 'para visitas' é mentira que você conta para você. O álcool que fica é o álcool que fala.",
    plan24h: "Varredura completa → Água visível → Rota alternativa identificada → Casa em modo bunker."
  },
  {
    id: "3",
    slug: "noite-ponto-fraco-bunker",
    title: "A noite é o ponto fraco: Protocolo Bunker",
    summary: "Entre 20h e meia-noite está o maior campo minado. O bunker noturno é sua trincheira.",
    category: "rotina",
    date: "2024-01-10",
    readTime: "4 min",
    content: `A estatística é clara: a maioria das recaídas acontece entre 20h e meia-noite. O dia acabou, o cansaço bateu, a solidão pesa. O bar parece uma solução.

Não é.

## Por que a Noite é Perigosa

O cortisol — hormônio do estresse — atinge seu pico no fim da tarde e início da noite. Sua capacidade de tomar boas decisões está no mínimo. É biologia, não fraqueza.

## O Bunker Noturno

O protocolo é simples: até as 20h, tudo resolvido. Comida feita. Banho tomado. Casa organizada. Das 20h às 23h, nada novo. Ambiente previsível.

### A Hora de Ouro

Entre 19h e 20h é quando você prepara o bunker. Comer algo substancial. Tomar banho. Arrumar o espaço. Quando der 20h, o único trabalho é passar o tempo até a hora de dormir.

### Cama Cedo

Não é infantil. É tático. Quanto menos horas acordado no período perigoso, menos exposição ao risco. 22h30 na cama não é vergonha — é estratégia.`,
    applicationBox: "Hoje: prepare tudo até 20h. Das 20h às 22h30, modo passivo: filme, livro, qualquer coisa que não exija decisões.",
    riskBox: "Noite + Fome + Cansaço = Combinação mortal. Elimine pelo menos dois desses fatores.",
    plan24h: "17h-19h: Tarefas. 19h-20h: Bunker (comida + banho). 20h-22h30: Modo passivo. 22h30: Cama."
  },
  {
    id: "4",
    slug: "honestidade-tatica-verdade-sem-destruir",
    title: "Honestidade tática: A verdade que não destrói",
    summary: "Mentir corrói. Mas verdade jogada sem estratégia também machuca. O caminho é a honestidade tática.",
    category: "honestidade",
    date: "2024-01-08",
    readTime: "5 min",
    content: `A mentira é combustível da adicção. Cada "não bebi" quando bebeu, cada "foi só um", cada "não vai acontecer de novo" — tudo isso alimenta o ciclo.

Mas a verdade crua, jogada sem cuidado, também destrói. "Você é o culpado pela minha bebida" — isso não é honestidade, é agressão.

## O Que É Honestidade Tática

É dizer a verdade necessária, no momento certo, da forma que protege em vez de destruir. É escolher qual verdade serve à reconstrução.

### A Mensagem de 20 Segundos

Escolha uma pessoa. Mande uma mensagem simples: "Hoje não vou beber. Se eu sumir, me chama." Pronto. 20 segundos. Você criou um fio de responsabilidade que ajuda a te segurar.

### Verdades que Constroem

"Estou instável. Não quero brigar. Vou me recolher." — Isso é honestidade que protege.

"Errei. Estou tentando de novo." — Isso é honestidade que reconstrói.

### Verdades que Destroem

"Você me faz beber." — Isso é acusação disfarçada.

"Não aguento mais essa família." — Isso é bomba, não honestidade.`,
    applicationBox: "Hoje: mande a mensagem de 20 segundos para uma pessoa. Só isso.",
    riskBox: "Honestidade não é desculpa para despejar frustração. Se vai machucar mais do que ajudar, não é o momento.",
    plan24h: "Identifique 1 pessoa de confiança → Mensagem de 20s → Se precisar de reparo, use: 'Estou instável. Vou me recolher.'"
  },
  {
    id: "5",
    slug: "gatilhos-invisiveis-fome-cansaco-isolamento",
    title: "Os gatilhos invisíveis: Fome, cansaço e isolamento",
    summary: "Nem todo gatilho é uma garrafa na mesa. Os piores são os que você não vê chegando.",
    category: "gatilhos",
    date: "2024-01-05",
    readTime: "5 min",
    content: `Você sabe que bar é gatilho. Sabe que festa com álcool é gatilho. Mas os gatilhos mais perigosos são invisíveis: fome, cansaço, isolamento.

## O Trio Mortal

### Fome

Cérebro sem glicose = decisões ruins. O corpo confunde fome com vontade de beber. A solução é simples: nunca fique mais de 4 horas sem comer algo.

### Cansaço

Sono ruim = resistência zero. Uma noite mal dormida equivale a estar levemente embriagado em termos de capacidade de decisão. Priorize o sono como se sua vida dependesse disso — porque depende.

### Isolamento

Sozinho demais = perigoso. A voz na sua cabeça fica mais alta quando não tem ninguém para contestar. Isso não significa estar rodeado de gente o tempo todo — significa ter alguém para chamar quando apertar.

## O Protocolo HALT

Antes de qualquer decisão importante, faça o check: estou com Fome (Hungry)? Irritado (Angry)? Sozinho (Lonely)? Cansado (Tired)?

Se dois ou mais estão ativos, não é hora de decidir nada. É hora de comer, descansar, ligar para alguém.`,
    applicationBox: "Hoje: não passe mais de 4h sem comer. Se sentir vontade de beber, faça o check HALT primeiro.",
    riskBox: "Dois gatilhos invisíveis ativos = zona vermelha. Não tome nenhuma decisão importante.",
    plan24h: "Café da manhã obrigatório → Lanche a cada 4h → Contato com 1 pessoa → Sono às 22h30."
  },
  {
    id: "6",
    slug: "72h-sem-negociar-fissura",
    title: "72 horas sem negociar com a fissura",
    summary: "As primeiras 72 horas são as mais brutais. O Protocolo Escudo existe para atravessar esse campo minado.",
    category: "vontade",
    date: "2024-01-03",
    readTime: "7 min",
    content: `As primeiras 72 horas depois de parar são o território mais perigoso. O corpo grita. A mente negocia. Tudo conspira para você ceder.

O juramento é claro: não vou vencer na emoção. Vou vencer com estratégia.

## A Natureza da Fissura

A fissura é como onda no mar. Ela vem, cresce, atinge o pico — e passa. O tempo médio de uma onda de fissura intensa? 20 minutos. Seu único trabalho é sobreviver esses 20 minutos.

Não negocie. Não argumente com a voz que diz "só um". Não existe "só um". Existe atravessar ou ceder.

## As Missões do Escudo

### 1. Perímetro Fechado

Nada de álcool no raio de alcance. Rotas cortadas. Dinheiro justo — sem sobra para "tentação".

### 2. Linhas Vermelhas

Três regras que não se quebram: não dirigir vulnerável, não entrar em discussão gatilho, não passar fome.

### 3. Protocolo 3-3-3

Água: 3 copos. Frio: 3 minutos. Ação: 20 minutos de qualquer coisa (caminhar, comer, áudio para alguém).

### 4. Bunker Noturno Reforçado

Das 20h até dormir, nada de novidade. Tudo previsível. Tudo seguro.`,
    applicationBox: "Para as próximas 72h: protocolo 3-3-3 a cada onda de fissura. Bunker noturno rígido. Zero negociação.",
    riskBox: "Se a abstinência for intensa (tremores, suor intenso, confusão), isso é emergência médica. Procure ajuda profissional.",
    plan24h: "Manhã: perímetro fechado. Tarde: protocolo 3-3-3 conforme necessário. Noite: bunker às 20h. Repetir por 72h."
  },
  {
    id: "7",
    slug: "familia-limites-sem-guerra",
    title: "Família: Como colocar limites sem declarar guerra",
    summary: "Proteger a casa não é abandonar quem bebe. É escolher não afundar junto.",
    category: "familia",
    date: "2024-01-01",
    readTime: "6 min",
    content: `Amar alguém que bebe é andar em campo minado. Você quer ajudar, mas cada tentativa parece explodir na sua cara. A culpa pesa. A raiva também.

O caminho seguro não é guerra. Também não é capitulação. É perímetro.

## O Que É Fechar Perímetro

Fechar perímetro significa: não converso quando você está alterado. Não financio o caos. Não minto para cobrir. Priorizo a segurança — minha e de quem depende de mim.

Isso não é abandono. É sobrevivência.

## As Linhas Vermelhas

Escolha uma regra clara. Só uma para começar: "Não discuto depois das 20h" ou "Não respondo provocação quando você bebeu" ou "Não empresto dinheiro sem prestação de contas".

Uma regra. Mantida. Consistente.

### Frases Prontas

Quando a situação esquentar, você não precisa inventar respostas. Use as prontas:

- "Não discuto assim. Amanhã conversamos."
- "Vou me recolher agora."
- "Não minto por você."

Não explique. Não justifique. Execute e saia de cena.

## Você Não É o Terapeuta

Seu papel não é curar. É proteger. Quem bebe precisa de ajuda profissional — e essa ajuda não é você.`,
    applicationBox: "Hoje: escolha 1 linha vermelha. Memorize 1 frase pronta. Use na próxima situação.",
    riskBox: "Se houver risco físico, saia. Nenhuma conversa vale sua integridade. Emergência primeiro.",
    plan24h: "Linha vermelha definida → Frase pronta memorizada → Bunker pessoal preparado → Contato de emergência no celular."
  },
  {
    id: "8",
    slug: "so-hoje-e-armadilha",
    title: "'Só hoje' é a armadilha mais antiga",
    summary: "O cérebro é mestre em vender a ideia de exceção. Reconheça o truque antes de cair.",
    category: "vontade",
    date: "2023-12-28",
    readTime: "4 min",
    content: `"Só hoje." "Só um." "Depois de amanhã eu paro." "Mereço relaxar." 

Se você já ouviu essas frases na sua cabeça, parabéns: você conhece a voz da negociação. E ela é muito boa no que faz.

## A Arquitetura da Armadilha

O cérebro adicto é especialista em criar exceções. Ele pega qualquer situação — estresse, comemoração, sexta-feira, segunda-feira, chuva, sol — e transforma em justificativa.

"Hoje é especial" significa "todos os dias são especiais o suficiente para beber".

## Reconhecendo o Truque

Quando a voz aparecer, não discuta. Reconheça: "Essa é a voz da negociação tentando me convencer."

Só isso. Você não precisa argumentar contra. Você precisa identificar o que está acontecendo.

### O Teste da Inversão

Se "só um" fosse verdade, você não precisaria se convencer disso. Ninguém precisa se convencer a beber só um copo de água.

## O Contra-Juramento

Quando a voz disser "só hoje", responda: "Não negocio com fissura. Eu atravesso."

Não é força de vontade. É recusa de entrar na negociação.`,
    applicationBox: "Quando ouvir 'só hoje' na sua cabeça, fale em voz alta: 'Reconheço a negociação. Não vou entrar nela.'",
    riskBox: "A voz fica mais alta quando você está cansado, com fome ou sozinho. Cuide desses três primeiro.",
    plan24h: "Identificar quando a voz aparece → Falar a frase de reconhecimento → Não responder à negociação → Executar ação substituta."
  },
  {
    id: "9",
    slug: "rotina-minima-viavel",
    title: "A rotina mínima que segura os dias",
    summary: "Você não precisa de uma vida perfeita. Precisa de uma estrutura que aguente os dias ruins.",
    category: "rotina",
    date: "2023-12-25",
    readTime: "5 min",
    content: `Rotina não é prisão. É proteção. Nos dias em que a vontade apertar, você não precisa pensar — só executar o que já está decidido.

## O Mínimo Viável

Não tente mudar tudo de uma vez. A rotina mínima tem três pilares:

### 1. Âncora da Manhã

Uma coisa que você faz todo dia ao acordar. Pode ser simples: um copo d'água, 5 minutos de alongamento, uma música específica. O importante é ser automático.

### 2. Check do Meio-Dia

Uma pausa intencional. Comer algo. Verificar como está. Não precisa ser meditação — só um momento de "como estou agora?".

### 3. Bunker Noturno

Das 19h em diante, modo proteção. Comida, banho, ambiente calmo. Nada de decisões importantes.

## Por Que Funciona

O cérebro adora previsibilidade. Quando ele sabe o que vem a seguir, gasta menos energia. Menos energia gasta = mais resistência quando a vontade bater.

## Começando Pequeno

Escolha um pilar. Só um. Faça por uma semana. Depois, adicione o segundo. Perfeição não existe — consistência sim.`,
    applicationBox: "Escolha 1 âncora de manhã. Faça amanhã. Só isso por enquanto.",
    riskBox: "Rotina rígida demais quebra. Comece com o mínimo e vá ajustando.",
    plan24h: "Definir âncora de manhã → Executar amanhã → Repetir por 7 dias → Avaliar e ajustar."
  },
  {
    id: "10",
    slug: "depois-do-escorregao",
    title: "Depois do escorregão: O que fazer agora",
    summary: "Escorregou? O caminho não é se destruir de culpa. É voltar ao protocolo — agora.",
    category: "vontade",
    date: "2023-12-22",
    readTime: "5 min",
    content: `Você bebeu. Pode ter sido ontem, pode ter sido agora há pouco. A vergonha está pesando. A voz na cabeça diz que não adianta tentar de novo.

Essa voz está errada.

## O Que Escorregão Significa

Escorregão não é fracasso final. É dado do processo. A maioria das pessoas em recuperação escorrega em algum momento. O que define o resultado não é o escorregão — é o que você faz depois.

## O Protocolo do Dia Seguinte

### 1. Não Se Destrua

A culpa é combustível para beber mais. "Já que estraguei tudo, tanto faz" é a armadilha seguinte. Não caia nela.

### 2. Hidrate

Água, água, água. O corpo está processando o que você colocou nele. Ajude.

### 3. Coma

Qualquer coisa. Fruta, pão, o que tiver. Estabilize a glicose.

### 4. Volte ao Protocolo

Não amanhã. Agora. Perímetro fechado. Bunker ativado. Mensagem de 20 segundos enviada.

## O Que Muda

Cada vez que você volta depois de escorregar, a volta fica mais forte. Você está treinando o músculo de recomeçar. Isso importa mais do que nunca ter caído.`,
    applicationBox: "Agora: 2 copos d'água, comer algo, mensagem de 20s para alguém. Bunker ativado.",
    riskBox: "Se escorregou várias vezes seguidas, isso pode indicar necessidade de ajuda profissional. Não é fraqueza — é inteligência.",
    plan24h: "Hidratar → Comer → Mensagem 20s → Bunker → Repetir protocolo básico por 72h."
  },
  {
    id: "11",
    slug: "pedir-reforco-20-segundos",
    title: "Pedir reforço em 20 segundos",
    summary: "Você não precisa contar a história toda. Precisa de uma mensagem curta para a pessoa certa.",
    category: "honestidade",
    date: "2023-12-20",
    readTime: "4 min",
    content: `Pedir ajuda parece impossível quando você mais precisa. A vergonha trava. O orgulho atrapalha. A voz diz que ninguém vai entender.

A verdade: você não precisa de uma hora de conversa. Precisa de 20 segundos.

## A Mensagem Mínima

Pense em uma pessoa. Só uma. Alguém que não vai te julgar no momento — vai te ouvir depois, talvez, mas agora só vai estar lá.

A mensagem é simples: "Hoje não vou beber. Se eu sumir, me chama."

Isso é tudo. 20 segundos. Você criou um fio de responsabilidade externa.

## Por Que Funciona

Quando você avisa alguém, cria uma testemunha. A voz da negociação perde força quando existe outra pessoa sabendo do seu compromisso.

### E Se Não Responder?

Não importa se a pessoa responde. O ato de enviar já muda algo. Você saiu do isolamento.

### E Se Eu Escorregar Depois de Enviar?

Envie de novo: "Escorregei. Estou voltando ao protocolo. Me ajuda a segurar."

Honestidade tática não é perfeição. É verdade necessária no momento certo.`,
    applicationBox: "Agora: identifique 1 pessoa. Salve no celular com nome 'REFORÇO'. Mande a mensagem.",
    riskBox: "Se não tem ninguém para mandar, isso é sinal de alerta. Considere grupos de apoio ou ajuda profissional.",
    plan24h: "Escolher pessoa → Salvar como REFORÇO → Enviar mensagem → Repetir toda vez que apertar."
  },
  {
    id: "12",
    slug: "nao-e-forca-e-estrategia",
    title: "Não é força de vontade. É estratégia.",
    summary: "O mito da força de vontade destrói recuperações. O caminho é sistema, não heroísmo.",
    category: "rotina",
    date: "2023-12-18",
    readTime: "5 min",
    content: `"Se você quisesse de verdade, conseguia." Essa frase já destruiu mais recuperações do que qualquer garrafa.

A força de vontade é um músculo que cansa. Depender só dela é garantia de queda — não é questão de se, é questão de quando.

## O Que Funciona de Verdade

Estratégia. Sistema. Ambiente. As três coisas que trabalham enquanto sua força de vontade descansa.

### Ambiente

Se não tem álcool em casa, você não precisa resistir à garrafa na geladeira. A decisão foi tomada antes, quando você removeu. Isso é estratégia.

### Sistema

Se todo dia às 20h você entra em modo bunker, não precisa decidir isso quando está cansado. O sistema decide por você.

### Protocolo

Se quando bate a vontade você tem um passo-a-passo (água, frio, movimento), não precisa inventar o que fazer no momento de crise.

## O Herói Cansa

O herói que resiste sozinho, na força bruta, sem apoio — esse herói existe nos filmes. Na vida real, ele recai.

O guardião que prepara o campo, fecha perímetro, ativa protocolos — esse sobrevive.

Não é sobre ser forte. É sobre ser esperto.`,
    applicationBox: "Hoje: identifique 1 decisão que você pode tomar agora para não precisar decidir depois (ex: remover álcool, definir horário de bunker).",
    riskBox: "Se você está contando só com sua determinação, está em risco. Adicione pelo menos 1 sistema de proteção.",
    plan24h: "1 decisão preventiva tomada → 1 protocolo definido → Ambiente ajustado → Sistema no lugar."
  },
];

export const getPostsByCategory = (categoryId: string) => {
  return blogPosts.filter((post) => post.category === categoryId);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (limit: number = 6) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
