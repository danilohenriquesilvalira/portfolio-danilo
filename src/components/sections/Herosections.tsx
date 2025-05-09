import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <section className="relative w-full h-screen mx-auto flex items-center bg-[#0b1033]">
      {/* Background SVG - sem overlay para preservar o brilho original */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full">
          <img 
            src="/portfolio-danilo/images/Herosection.svg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Removido o overlay que estava ofuscando o SVG */}
      {/* Apenas um gradiente sutil atrás do texto para garantir legibilidade se necessário */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent z-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col gap-6"
          >
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
          </motion.div>

          {/* Espaço vazio na coluna direita para layout de 2 colunas */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="hidden lg:block"
          >
            {/* Esta coluna está vazia agora, pois o SVG foi movido para o background */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosections;