import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost, categories } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const category = categories.find((c) => c.id === post.category);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        "tactical-card group block",
        featured && "md:col-span-2"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {category?.label}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>
        
        <h3 className={cn(
          "font-display text-foreground mb-3 group-hover:text-primary transition-colors",
          featured ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm flex-1 mb-4">
          {post.summary}
        </p>
        
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
          Ler artigo
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
