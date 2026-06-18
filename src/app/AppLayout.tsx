import { Link, NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { Home, BookOpen, ShieldCheck, Target, Heart, LifeBuoy } from "lucide-react";
import { ShieldIcon } from "@/components/ShieldIcon";
import { SOSButton } from "@/components/SOSButton";
import { useProfile, useHydrated } from "./useUserState";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/app/hoje", label: "Hoje", icon: Home, end: true },
  { to: "/app/espelho", label: "Espelho", icon: BookOpen },
  { to: "/app/tatica", label: "Tática", icon: Target },
  { to: "/app/escudo", label: "Escudo", icon: ShieldCheck },
  { to: "/app/familiar", label: "Família", icon: Heart },
];

export const AppLayout = () => {
  const { profile } = useProfile();
  const hydrated = useHydrated();
  const location = useLocation();

  if (!hydrated) return null;
  if (!profile) return <Navigate to="/onboarding" replace state={{ from: location.pathname }} />;

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-60 border-r border-border bg-card/40 p-4 gap-1">
        <Link to="/" className="flex items-center gap-2 mb-6 px-2 pt-2">
          <ShieldIcon size="sm" />
          <span className="font-display tracking-wider text-lg">Guardião Sóbrio</span>
        </Link>
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded font-display tracking-wide text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )
            }
          >
            <t.icon size={18} />
            <span className="uppercase">{t.label}</span>
          </NavLink>
        ))}
        <NavLink
          to="/app/sos"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-3 py-2.5 rounded font-display tracking-wide text-sm mt-2 border",
              isActive
                ? "bg-destructive text-destructive-foreground border-destructive"
                : "border-destructive/40 text-destructive hover:bg-destructive/10"
            )
          }
        >
          <LifeBuoy size={18} />
          <span className="uppercase">SOS</span>
        </NavLink>
        <div className="mt-auto pt-6 text-xs text-muted-foreground px-2">
          <p>Olá, {profile.nome}</p>
          <Link to="/" className="underline hover:text-foreground">
            ← Voltar ao site
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden flex items-center justify-between px-4 h-14 border-b border-border bg-card/40 sticky top-0 z-30">
        <Link to="/" className="flex items-center gap-2">
          <ShieldIcon size="sm" />
          <span className="font-display tracking-wider">Guardião Sóbrio</span>
        </Link>
        <span className="text-xs text-muted-foreground">{profile.nome}</span>
      </header>

      <main className="flex-1 pb-24 md:pb-8">
        <div className="container mx-auto max-w-3xl px-4 py-6 md:py-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border grid grid-cols-5">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center py-2 gap-1 text-[10px] font-display tracking-wider uppercase",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            <t.icon size={20} />
            <span>{t.label}</span>
          </NavLink>
        ))}
      </nav>

      <SOSButton />
    </div>
  );
};
