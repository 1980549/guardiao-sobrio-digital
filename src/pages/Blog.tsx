import { useState } from "react";
import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { blogPosts, categories } from "@/data/blogPosts";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Estratégias práticas para atravessar a vontade de beber, proteger a casa e construir sobriedade. 
              Sem promessas vazias. Sem teatro.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-4 py-2 rounded text-sm font-medium transition-colors",
                  !selectedCategory 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded text-sm font-medium transition-colors",
                    selectedCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado com esses filtros.
              </p>
            </div>
          )}

          {/* Newsletter */}
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Receba protocolos — sem teatro
            </h2>
            <p className="text-muted-foreground mb-6">
              Um e-mail por semana com estratégias práticas.
            </p>
            <NewsletterCapture />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
