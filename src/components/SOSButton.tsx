import { Link, useLocation } from "react-router-dom";
import { LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";

export const SOSButton = () => {
  const location = useLocation();
  if (location.pathname === "/app/sos") return null;
  return (
    <Link
      to="/app/sos"
      aria-label="Protocolo de Emergência SOS"
      className={cn(
        "fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40",
        "bg-destructive text-destructive-foreground rounded-full shadow-2xl",
        "h-16 w-16 flex flex-col items-center justify-center",
        "hover:scale-105 transition-transform border-2 border-destructive-foreground/20"
      )}
    >
      <LifeBuoy size={22} />
      <span className="text-[10px] font-display tracking-widest mt-0.5">SOS</span>
    </Link>
  );
};
