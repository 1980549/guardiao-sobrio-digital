import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { Send, CheckCircle, Loader2, AlertTriangle } from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulated submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <ShieldIcon size="lg" className="mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Contato
              </h1>
              <p className="text-lg text-muted-foreground">
                Dúvidas, sugestões ou mensagens. O caminho de comunicação está aberto.
              </p>
            </header>

            {/* Warning */}
            <div className="alert-box mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-foreground mb-1">Atenção</h3>
                  <p className="text-sm text-muted-foreground">
                    Este canal <strong className="text-foreground">não é para urgências</strong>. Em caso de risco, 
                    abstinência intensa, pensamentos de se machucar ou crise, procure ajuda profissional 
                    e emergência da sua região imediatamente. <strong className="text-foreground">Ligue 190 ou vá ao 
                    hospital mais próximo.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="tactical-card text-center">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h2 className="font-display text-2xl text-foreground mb-2">
                  Mensagem enviada
                </h2>
                <p className="text-muted-foreground mb-6">
                  Recebemos sua mensagem. Retornaremos assim que possível.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="tactical-button-outline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida geral</option>
                    <option value="produtos">Sobre produtos</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="tactical-button w-full flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
