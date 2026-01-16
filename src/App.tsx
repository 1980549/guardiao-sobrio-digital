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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
