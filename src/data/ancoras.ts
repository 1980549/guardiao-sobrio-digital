export const ancoras: string[] = [
  "Só hoje. Só agora. Só este copo que eu não vou levantar.",
  "A vontade passa. Eu não preciso obedecer ela.",
  "Não é força. É estratégia.",
  "Fissura é onda. Eu aguento 20 minutos.",
  "Eu não estou sozinho. Eu só preciso ligar.",
  "Sair do gatilho é vitória. Não é fuga.",
  "Honestidade tática: a verdade que protege.",
  "Hoje a casa decide pela sobriedade.",
  "Bunker. Banho. Cama. Amanhã.",
  "Pedir reforço leva 20 segundos. Beber custa anos.",
];

export function ancoraDoDia(date = new Date()): string {
  const seed = date.getFullYear() * 1000 + date.getMonth() * 31 + date.getDate();
  return ancoras[seed % ancoras.length];
}
