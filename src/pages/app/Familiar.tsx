import { DisclaimerBanner } from "@/components/DisclaimerBanner";

const cards = [
  {
    titulo: "Apoiar sem se destruir",
    texto: "Você não é responsável pela sobriedade dele(a). Você é responsável pela sua sanidade.",
  },
  {
    titulo: "O que NÃO dizer",
    texto: "'Você prometeu', 'de novo?', 'eu já sabia'. Acusação fecha porta. Pergunta abre.",
  },
  {
    titulo: "Limites sem guerra",
    texto: "Diz o que você vai fazer, não o que ele(a) tem que fazer. 'Se beber, eu durmo em outro lugar.'",
  },
  {
    titulo: "Cuide do seu sono",
    texto: "Familiar sem sono toma decisão ruim. Sua rotina mínima protege a casa toda.",
  },
  {
    titulo: "Procure rede própria",
    texto: "Al-Anon, terapia, amigos fora do tema. Você precisa de oxigênio antes de salvar alguém.",
  },
  {
    titulo: "Não esconda garrafas",
    texto: "Não funciona, e te transforma em fiscal. Foco: o que VOCÊ faz, não o que ele(a) faz.",
  },
];

export default function Familiar() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Trilha Família</p>
        <h1 className="font-display text-3xl">Proteger sem se destruir</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.titulo} className="tactical-card">
            <h3 className="font-display tracking-wide text-primary mb-2">{c.titulo}</h3>
            <p className="text-sm text-foreground/80">{c.texto}</p>
          </div>
        ))}
      </div>

      <DisclaimerBanner compact />
    </div>
  );
}
