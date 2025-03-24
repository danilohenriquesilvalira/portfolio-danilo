import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAngleDown, FaTools, FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';

// Importar todas as seções externas
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

// Seção Hero simplificada (sem animações) - mantida inline
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-tertiary"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Texto */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-tech-blue"></div>
              <p className="text-white font-medium sm:text-xl">Olá, sou Danilo Lira</p>
            </div>

            <h1 className="text-white font-black lg:text-[62px] sm:text-[52px] xs:text-[42px] text-[32px] leading-tight">
              Especialista em <br className="hidden md:block" />
              <span className="text-tech-blue">Automação Industrial</span>
            </h1>

            <p className="text-secondary font-medium lg:text-xl text-[16px] leading-relaxed mt-2 max-w-3xl">
              Profissional com mais de 10 anos de experiência em grandes empresas do setor de bebidas.
              Desenvolvendo soluções de automação e transformando processos industriais para a era da Indústria 4.0.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="#projects"
                className="py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="py-3 px-8 rounded-xl outline-none border-2 border-tech-blue text-white font-bold shadow-md hover:bg-tech-blue/10 transition-all duration-300"
              >
                Contato
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              <div className="flex items-center gap-2 py-1 px-3 bg-tertiary bg-opacity-80 rounded-full text-sm text-white">
                <span className="text-tech-blue"><FaTools /></span>
                <span>Automação</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-3 bg-tertiary bg-opacity-80 rounded-full text-sm text-white">
                <span className="text-tech-blue"><FaIndustry /></span>
                <span>Indústria 4.0</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-3 bg-tertiary bg-opacity-80 rounded-full text-sm text-white">
                <span className="text-tech-blue"><FaNetworkWired /></span>
                <span>Redes Industriais</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-3 bg-tertiary bg-opacity-80 rounded-full text-sm text-white">
                <span className="text-tech-blue"><FaRobot /></span>
                <span>PLCs</span>
              </div>
            </div>
          </div>

          {/* Lado direito - Apenas um placeholder circular simples */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Círculo decorativo */}
              <div className="absolute inset-0 rounded-full bg-tech-blue opacity-10 animate-pulse"></div>
              
              {/* Avatar simplificado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full p-2 bg-gradient-to-br from-tech-blue to-industry-green overflow-hidden">
                  <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">DL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seta de scroll */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start py-2 hover:border-white transition-colors">
            <div className="w-3 h-3 rounded-full bg-secondary animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

// Componente Home principal
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

      {/* Seções de conteúdo importadas de arquivos externos */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;