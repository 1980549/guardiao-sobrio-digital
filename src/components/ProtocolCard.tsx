import { Link } from "react-router-dom";
import { Shield, Users, ArrowRight, Clock } from "lucide-react";

interface ProtocolCardProps {
  title: string;
  description: string;
  duration: string;
  href: string;
  icon: "shield" | "users";
}

export const ProtocolCard = ({ title, description, duration, href, icon }: ProtocolCardProps) => {
  const Icon = icon === "shield" ? Shield : Users;

  return (
    <Link
      to={href}
      className="tactical-card group block relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <Icon className="w-full h-full text-primary" />
      </div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
            <Icon size={20} className="text-primary" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock size={12} />
            {duration}
          </div>
        </div>
        
        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
          Ver protocolo
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
