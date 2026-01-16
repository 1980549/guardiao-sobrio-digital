import { cn } from "@/lib/utils";

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
      <svg
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M20 2L4 10V22C4 33.05 10.4 43.22 20 46C29.6 43.22 36 33.05 36 22V10L20 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-primary"
        />
      </svg>
      {showLetters && (
        <span className={cn("absolute font-display text-primary", textSizes[size])}>
          GS
        </span>
      )}
    </div>
  );
};
