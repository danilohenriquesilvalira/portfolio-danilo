import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importar todas as seções
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const Home = () => {
  const location = useLocation();

  // Manipula o scroll para a seção quando a URL contém um hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # symbol
      const element = document.getElementById(id);
      
      if (element) {
        // Adiciona um pequeno atraso para permitir que o DOM carregue completamente
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // ajuste para compensar o navbar fixo
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Scroll para o topo quando não há hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="relative">
      {/* Hero section com altura 100vh */}
      <div className="relative z-0 bg-primary">
        <Hero />
      </div>

      {/* Seções de conteúdo */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;