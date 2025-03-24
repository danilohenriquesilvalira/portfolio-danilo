import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaTools, FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';
import Typed from 'typed.js';

// Removido: import AutomationCanvas from '@/components/canvas/AutomationCanvas';

// Variantes para animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const TechBadge = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-2 py-1 px-3 bg-tertiary bg-opacity-80 backdrop-blur-sm rounded-full text-sm text-white"
    >
      <span className="text-tech-blue">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
};

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animação de digitação para especialidades
    if (typedRef.current) {
      const options = {
        strings: [
          'Automação Industrial',
          'Indústria 4.0',
          'Programação PLC',
          'Sistemas SCADA',
          'Integração de Sistemas'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Gradiente de fundo superior */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary to-transparent z-1"></div>

      {/* Componente 3D Canvas - REMOVIDO */}
      <div className="absolute inset-0 bg-primary">
        {/* Fundo temporário simples em vez do Canvas 3D */}
        <div className="w-full h-full bg-gradient-to-b from-[#111133] to-primary"></div>
      </div>

      {/* Gradiente de overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-primary opacity-40 z-1"></div>

      {/* Conteúdo do Hero */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Texto */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-tech-blue"></div>
              <p className="text-white font-medium sm:text-xl">Olá, sou Danilo Lira</p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white font-black lg:text-[62px] sm:text-[52px] xs:text-[42px] text-[32px] leading-tight"
            >
              Especialista em <br className="hidden md:block" />
              <span className="text-tech-blue typewriter relative inline-block">
                <span ref={typedRef}></span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-secondary font-medium lg:text-xl text-[16px] leading-relaxed mt-2 max-w-3xl"
            >
              Profissional com mais de 10 anos de experiência em grandes empresas do setor de bebidas.
              Desenvolvendo soluções de automação e transformando processos industriais para a era da Indústria 4.0.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 mt-4">
              <Link
                to="/#projects"
                className="py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
              >
                Ver Projetos
              </Link>
              <Link
                to="/#contact"
                className="py-3 px-8 rounded-xl outline-none border-2 border-tech-blue text-white font-bold shadow-md hover:bg-tech-blue/10 transition-all duration-300"
              >
                Contato
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mt-6"
            >
              <TechBadge icon={<FaTools />} text="Automação" />
              <TechBadge icon={<FaIndustry />} text="Indústria 4.0" />
              <TechBadge icon={<FaNetworkWired />} text="Redes Industriais" />
              <TechBadge icon={<FaRobot />} text="PLCs" />
            </motion.div>
          </div>

          {/* Lado direito - Imagem ou ilustração (comentado temporariamente) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Círculo decorativo pulsante */}
              <div className="absolute inset-0 rounded-full bg-tech-blue opacity-10 animate-tech-pulse"></div>
              
              {/* Imagem ou ilustração aqui - comentado temporariamente */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full p-2 bg-gradient-to-br from-tech-blue to-industry-green overflow-hidden">
                  {/* Placeholder em vez da imagem */}
                  <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">DL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Seta de scroll */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start py-2 hover:border-white transition-colors">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;