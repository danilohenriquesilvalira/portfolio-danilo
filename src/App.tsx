import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layouts
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import PageTransition from '@/components/common/PageTransition';

// Páginas com lazy loading para otimização
const Home = lazy(() => import('@/pages/Home'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));

// Loading Component Aprimorado
const Loading = () => (
  <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center">
    <div className="canvas-loader"></div>
    <p className="mt-6 text-secondary text-lg">Carregando...</p>
    
    {/* Progress Bar */}
    <div className="w-48 h-1 bg-tertiary rounded-full mt-4 overflow-hidden">
      <motion.div 
        className="h-full bg-tech-blue"
        initial={{ width: 0 }}
        animate={{ 
          width: "100%" 
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
    </div>
  </div>
);

// Cursor personalizado
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Função para atualizar posição do cursor
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Verificar se o cursor está sobre um link ou botão
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.tagName.toLowerCase() === 'button' ||
                     target.closest('a') !== null ||
                     target.closest('button') !== null;
      
      setLinkHovered(isLink);
    };
    
    // Lidar com cliques
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Ocultar cursor quando sai da janela
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    // Só ativar o cursor personalizado em dispositivos não móveis
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseenter', handleMouseEnter);
    }
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  // Só mostrar cursor personalizado em dispositivos não móveis
  if (!window.matchMedia('(pointer: fine)').matches) {
    return null;
  }
  
  return (
    <>
      {/* Cursor externo (anel) */}
      <motion.div
        className="cursor-outer fixed rounded-full pointer-events-none z-50 border-2 border-tech-blue mix-blend-difference"
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          width: "32px",
          height: "32px",
        }}
      />
      
      {/* Cursor interno (ponto) */}
      <motion.div
        className="cursor-inner fixed rounded-full pointer-events-none z-50 bg-white mix-blend-difference"
        animate={{
          scale: clicked ? 1.2 : linkHovered ? 0 : 1,
          opacity: hidden ? 0 : 1,
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          mass: 0.2
        }}
        style={{
          width: "8px",
          height: "8px",
        }}
      />
    </>
  );
};

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  
  // Simulação de loading inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Detectar quando mudanças de rota acontecem para adicionar classes ao body
  useEffect(() => {
    // Adicionar classe específica da página ao body
    const pagePath = location.pathname.split('/')[1] || 'home';
    document.body.className = `page-${pagePath}`;
    
    // Verificar se a página tem fundo escuro ou claro (pode ser personalizado)
    const isDarkPage = true; // todas as páginas são escuras no seu projeto
    document.body.classList.toggle('dark-theme', isDarkPage);
    document.body.classList.toggle('light-theme', !isDarkPage);
    
    // Reset scroll ao mudar de página se não for âncora
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      {/* Cursor personalizado */}
      <CustomCursor />
      
      {/* ScrollToTop component */}
      <ScrollToTop />
      
      {/* Navbar fixo */}
      <Navbar />
      
      {/* Conteúdo principal com transições de página */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/projetos" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/projeto/:id" element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            } />
            <Route path="/contato" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
            <Route path="*" element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            } />
          </Routes>
        </Suspense>
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;