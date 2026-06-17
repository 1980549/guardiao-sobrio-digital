export const espelhoPrompts: string[] = [
  "O que está pesando mais hoje?",
  "Qual foi o momento mais frágil das últimas 24h?",
  "O que você está evitando admitir?",
  "Quem você precisa procurar hoje, mesmo sem vontade?",
  "Que mentira você está contando para si?",
  "O que te fez sentir orgulho ontem, por menor que seja?",
  "Onde está sua linha vermelha hoje?",
  "Se você bebesse hoje, quem perderia primeiro?",
  "O que seu corpo está pedindo agora — e o que sua cabeça está pedindo?",
  "Qual gatilho apareceu hoje e o que você fez com ele?",
  "Que perímetro você precisa fechar antes da noite?",
  "Quem é a pessoa que segura você quando tudo treme?",
  "O que você quer reparar nesta semana?",
  "O que seria 'cuidar de você' nas próximas 4 horas?",
  "Que pensamento está tentando te convencer de algo perigoso?",
  "Onde você foi honesto hoje, mesmo sendo difícil?",
  "Que ajuda você ainda não pediu, mas deveria?",
  "Como está o seu sono — e o que isso te diz?",
  "Que pequena vitória conta como vitória hoje?",
  "Se hoje fosse o dia que tudo desmonta, o que te seguraria?",
];

export function promptDoDia(date = new Date()): string {
  const seed = date.getFullYear() * 1000 + date.getMonth() * 31 + date.getDate();
  return espelhoPrompts[seed % espelhoPrompts.length];
}
