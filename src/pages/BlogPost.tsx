import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { getPostBySlug, categories } from "@/data/blogPosts";
import { ArrowLeft, Clock, AlertTriangle, Zap, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <Layout>
        <div className="py-16 md:py-24 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find((c) => c.id === post.category);

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} />
              Voltar para o blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {category?.label}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground tactical-border">
                {post.summary}
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-display text-2xl text-foreground mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display text-xl text-foreground mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Action Boxes */}
            <div className="space-y-4 mb-12">
              {post.applicationBox && (
                <div className="action-box">
                  <div className="flex items-start gap-3">
                    <Zap size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-2">Aplicação Sobriedade</h4>
                      <p className="text-muted-foreground text-sm">{post.applicationBox}</p>
                    </div>
                  </div>
                </div>
              )}

              {post.riskBox && (
                <div className="alert-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-2">Risco</h4>
                      <p className="text-muted-foreground text-sm">{post.riskBox}</p>
                    </div>
                  </div>
                </div>
              )}

              {post.plan24h && (
                <div className="tactical-card border-l-2 border-primary">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-2">Plano 24h</h4>
                      <p className="text-muted-foreground text-sm">{post.plan24h}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Newsletter CTA */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Continue recebendo estratégias
              </h2>
              <p className="text-muted-foreground mb-6">
                Um e-mail por semana. Protocolos práticos sem teatro.
              </p>
              <NewsletterCapture />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
