import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = () => {
  const location = useLocation();
  
  // Rolar para o topo quando a rota muda
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      {/* Navbar fixa no topo */}
      <Navbar />
      
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Botão de voltar ao topo */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;