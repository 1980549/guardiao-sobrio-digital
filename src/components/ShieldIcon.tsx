import { cn } from "@/lib/utils";
import escudoAsset from "@/assets/escudo.jpg.asset.json";

interface ShieldIconProps {
  className?: string;
  showLetters?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-8 h-10",
  md: "w-12 h-14",
  lg: "w-16 h-20",
  xl: "w-24 h-28",
};

const textSizes = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
  xl: "text-2xl",
};

export const ShieldIcon = ({ className, showLetters = true, size = "md" }: ShieldIconProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
      <img
        src={escudoAsset.url}
        alt="Escudo Guardião Sóbrio"
        className="w-full h-full object-contain"
      />
      {showLetters && (
        <span className={cn("absolute font-display text-primary drop-shadow-lg", textSizes[size])}>
          GS
        </span>
      )}
    </div>
  );
};
