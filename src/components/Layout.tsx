import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ShieldIcon } from "./ShieldIcon";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Shield Watermark */}
      <div className="shield-watermark right-4 bottom-4 opacity-[0.02]">
        <ShieldIcon size="xl" showLetters={false} />
      </div>
      
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
