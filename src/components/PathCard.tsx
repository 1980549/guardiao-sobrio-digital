import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface PathCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export const PathCard = ({ title, description, href, icon }: PathCardProps) => {
  return (
    <Link
      to={href}
      className="tactical-card group block text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
        {icon}
      </div>
      
      <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4">
        {description}
      </p>
      
      <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
        Acessar
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
};
