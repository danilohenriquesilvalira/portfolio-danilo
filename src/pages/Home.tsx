import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTools, FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';

// Importar componentes
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen mx-auto flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-tertiary"></div>
        
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
            </motion.div>

            {/* Hero image or animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-80 h-80">
                {/* Círculo decorativo pulsante */}
                <div className="absolute inset-0 rounded-full bg-tech-blue opacity-10 animate-pulse"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full p-2 bg-gradient-to-br from-tech-blue to-industry-green overflow-hidden">
                    <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">DL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
          <a href="#featured">
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

      {/* Featured Projects Section */}
      <section id="featured" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Projetos Destacados</h2>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Conheça alguns dos meus principais projetos em automação industrial, 
              integração de sistemas e indústria 4.0.
            </p>
          </motion.div>

          <FeaturedProjects />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <Link 
              to="/projetos" 
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-tertiary text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Ver Todos os Projetos <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Home;