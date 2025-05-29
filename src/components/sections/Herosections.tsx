import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

// Tipos TypeScript
interface TechLogo {
    name: string;
    src: string;
}

interface TechItemProps {
    logo: TechLogo;
}

// Animações
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Herosections = () => {
  // Array de tecnologias com caminhos corretos
  const techLogos: TechLogo[] = [
      { name: 'React', src: '/portfolio-danilo/About/Logo_React.svg' },
      { name: 'TypeScript', src: '/portfolio-danilo/About/Logo_TypeScript.svg' },
      { name: 'Python', src: '/portfolio-danilo/About/Logo_Python.svg' },
      { name: 'JavaScript', src: '/portfolio-danilo/About/Logo_JavaScript.svg' },
      { name: 'Docker', src: '/portfolio-danilo/About/Logo_Docker.svg' },
      { name: 'Siemens', src: '/portfolio-danilo/About/Logo_Siemens.svg' },
      { name: 'Go', src: '/portfolio-danilo/About/Logo_Go.svg' },
      { name: 'Grafana', src: '/portfolio-danilo/About/Logo_Grafana.svg' },
      { name: 'PostgreSQL', src: '/portfolio-danilo/About/Logo_Postgresql.svg' },
      { name: 'Node-RED', src: '/portfolio-danilo/About/Logo_NodeRed.svg' }
  ];

  // CSS do carrossel - RESPONSIVO
  React.useEffect(() => {
      const style = document.createElement('style');
      style.textContent = `
          @keyframes scroll-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          
          .tech-carousel-container:hover .tech-carousel-track {
              animation-play-state: paused;
          }
          
          .tech-carousel-item:hover {
              opacity: 1 !important;
              transform: scale(1.1) !important;
          }
          
          /* Responsividade melhorada */
          @media (max-width: 768px) {
              .tech-carousel-track {
                  animation-duration: 25s !important;
                  gap: 20px !important;
              }
              
              .tech-carousel-item {
                  width: 35px !important;
                  height: 35px !important;
              }
          }
      `;
      document.head.appendChild(style);
      
      return () => {
          if (document.head.contains(style)) {
              document.head.removeChild(style);
          }
      };
  }, []);

  const TechItem: React.FC<TechItemProps> = ({ logo }) => {
      return (
          <div 
              className="tech-carousel-item"
              style={{
                  flexShrink: 0,
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: 0.8
              }}
              title={logo.name}
          >
              <img 
                  src={logo.src} 
                  alt={logo.name}
                  style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                  }}
              />
          </div>
      );
  };

  return (
    <section className="relative w-full h-screen mx-auto flex items-center bg-primary">
      {/* Background SVG - APENAS para DESKTOP (md e maiores) */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:flex items-center justify-end">
        <div className="w-full h-full transform translate-x-16 lg:translate-x-24 xl:translate-x-[30rem] scale-100">
          <img
            src="/portfolio-danilo/images/hero_inicial.svg"
            alt="Background"
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      </div>
      
      {/* Gradiente para desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent z-5 hidden md:block"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* LAYOUT MOBILE: Imagem em cima, texto embaixo - POSIÇÃO ORIGINAL */}
        <div className="flex md:hidden flex-col items-center justify-center w-full h-full gap-4">
          {/* Imagem ACIMA do texto em mobile - MAIOR */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="w-80 h-80 xs:w-96 xs:h-96 sm:w-[26rem] sm:h-[26rem]"
          >
            <img
              src="/portfolio-danilo/images/hero_inicial.svg"
              alt="Danilo Lira"
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Conteúdo de texto EMBAIXO da imagem em mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col gap-4 text-center max-w-sm xs:max-w-md"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full bg-tech-blue"></div>
              <p className="text-white font-medium text-base xs:text-lg sm:text-xl">Olá, sou Danilo Lira</p>
            </div>
            
            <h1 className="text-white font-black text-[24px] xs:text-[28px] sm:text-[32px] leading-tight">
              Especialista em{" "}
              <span className="text-tech-blue">Automação Industrial</span>
            </h1>
            
            <p className="text-secondary font-medium text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed">
              Profissional com mais de 10 anos de experiência em grandes empresas do setor de bebidas.
              Desenvolvendo soluções de automação e transformando processos industriais para a era da Indústria 4.0.
            </p>
            
            <div className="flex flex-col gap-3 mt-4 w-full">
              <Link
                to="/projetos"
                className="py-3 px-6 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300 text-center text-base"
              >
                Ver Projetos
              </Link>
              <Link
                to="/contato"
                className="py-3 px-6 rounded-xl outline-none border-2 border-tech-blue text-white font-bold shadow-md hover:bg-tech-blue/10 transition-all duration-300 text-center text-base"
              >
                Contato
              </Link>
            </div>
            
            {/* Carrossel de Tecnologias para MOBILE - DEPOIS dos botões */}
            <div 
                className="tech-carousel-container"
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    padding: '15px 0',
                    margin: '20px 0 0 0'
                }}
            >
                <div 
                    className="tech-carousel-track"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '25px',
                        animation: 'scroll-infinite 30s linear infinite',
                        width: 'max-content'
                    }}
                >
                    {/* Primeira passada dos logos */}
                    {techLogos.map((logo, index) => (
                        <TechItem key={`first-${index}`} logo={logo} />
                    ))}
                    {/* Segunda passada para loop infinito */}
                    {techLogos.map((logo, index) => (
                        <TechItem key={`second-${index}`} logo={logo} />
                    ))}
                </div>
            </div>
          </motion.div>
        </div>

        {/* LAYOUT DESKTOP: Grid de 2 colunas como antes */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text content para desktop */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col gap-6 mt-32"
          >
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-tech-blue"></div>
              <p className="text-white font-medium text-xl">Olá, sou Danilo Lira</p>
            </div>
            
            <h1 className="text-white font-black text-[48px] lg:text-[62px] leading-tight">
              Especialista em <br />
              <span className="text-tech-blue">Automação Industrial</span>
            </h1>
            
            <p className="text-secondary font-medium text-[16px] lg:text-xl leading-relaxed mt-2 max-w-3xl">
              Profissional com mais de 10 anos de experiência em grandes empresas do setor de bebidas.
              Desenvolvendo soluções de automação e transformando processos industriais para a era da Indústria 4.0.
            </p>
            
            <div className="flex gap-4 mt-4">
              <Link
                to="/projetos"
                className="py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
              >
                Ver Projetos
              </Link>
              <Link
                to="/contato"
                className="py-3 px-8 rounded-xl outline-none border-2 border-tech-blue text-white font-bold shadow-md hover:bg-tech-blue/10 transition-all duration-300"
              >
                Contato
              </Link>
            </div>
            
            {/* Carrossel de Tecnologias para DESKTOP - DEPOIS dos botões */}
            <div 
                className="tech-carousel-container"
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    padding: '20px 0',
                    margin: '60px 0 0 0'
                }}
            >
                <div 
                    className="tech-carousel-track"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '25px',
                        animation: 'scroll-infinite 30s linear infinite',
                        width: 'max-content'
                    }}
                >
                    {/* Primeira passada dos logos */}
                    {techLogos.map((logo, index) => (
                        <TechItem key={`first-${index}`} logo={logo} />
                    ))}
                    {/* Segunda passada para loop infinito */}
                    {techLogos.map((logo, index) => (
                        <TechItem key={`second-${index}`} logo={logo} />
                    ))}
                </div>
            </div>
          </motion.div>
          
          {/* Espaço vazio na coluna direita para desktop */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="hidden lg:block"
          >
            {/* Esta coluna está vazia, pois o SVG está no background */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosections;