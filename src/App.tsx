import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComeceAqui from "./pages/ComeceAqui";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Protocolos from "./pages/Protocolos";
import ProtocoloEscudo from "./pages/ProtocoloEscudo";
import ProtocoloPerimetro from "./pages/ProtocoloPerimetro";
import Trilhas from "./pages/Trilhas";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import AppLanding from "./pages/AppLanding";
import { AppLayout } from "./app/AppLayout";
import Hoje from "./pages/app/Hoje";
import Espelho from "./pages/app/Espelho";
import Tatica from "./pages/app/Tatica";
import Escudo from "./pages/app/Escudo";
import SOS from "./pages/app/SOS";
import Familiar from "./pages/app/Familiar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comece-aqui" element={<ComeceAqui />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/protocolos" element={<Protocolos />} />
          <Route path="/protocolos/escudo-72h" element={<ProtocoloEscudo />} />
          <Route path="/protocolos/perimetro-24h" element={<ProtocoloPerimetro />} />
          <Route path="/trilhas/:trilhaId" element={<Trilhas />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/app" element={<AppLanding />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="hoje" element={<Hoje />} />
            <Route path="espelho" element={<Espelho />} />
            <Route path="tatica" element={<Tatica />} />
            <Route path="escudo" element={<Escudo />} />
            <Route path="familiar" element={<Familiar />} />
            <Route path="sos" element={<SOS />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
