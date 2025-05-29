import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TechExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const profileImageVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const expertise = [
    {
      icon: "🏭",
      title: "PLCs",
      desc: "Siemens S7"
    },
    {
      icon: "📊",
      title: "SCADA",
      desc: "WinCC & HMI"
    },
    {
      icon: "🐍",
      title: "Python",
      desc: "Automação"
    },
    {
      icon: "🗄️",
      title: "PostgreSQL",
      desc: "Databases"
    },
    {
      icon: "🐳",
      title: "Docker",
      desc: "Containerização"
    },
    {
      icon: "🔗",
      title: "Integração",
      desc: "Sistemas"
    }
  ];

  return (
    <section className="relative z-20 w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full"
      >
        {/* Container principal ocupando toda a largura da tela */}
        <div className="relative w-full bg-[#2D71B9] shadow-2xl border-t border-b border-slate-600/30 overflow-hidden">

          {/* LAYOUT MOBILE: Imagem no topo, conteúdo embaixo */}
          <div className="block lg:hidden">
            {/* Imagem de perfil para mobile - posicionada no topo */}
            <motion.div
              variants={profileImageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative w-full h-48 sm:h-64 flex justify-center items-end bg-gradient-to-b from-[#2D71B9] to-[#1e4d7a]"
            >
              <img
                src="/portfolio-danilo/About/eu.svg"
                alt="Danilo Lira - Perfil"
                className="h-full w-auto max-w-none object-contain"
                style={{ maxHeight: '100%' }}
              />
            </motion.div>

            {/* Conteúdo para mobile */}
            <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-12 max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h3 className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-tight mb-3">
                  Conectando Chão de Fábrica com Tecnologias Modernas
                </h3>
                <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
                  Expertise Técnica em Automação Industrial & Desenvolvimento
                </p>
              </motion.div>

              {/* Grid de tecnologias - mobile */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
              >
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center text-white group cursor-pointer p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats - mobile */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 sm:gap-6 text-center text-white"
              >
                <div className="p-3">
                  <div className="text-cyan-400 font-black text-2xl sm:text-3xl mb-1">+10</div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-tight">
                    anos de atuação na Automação Industrial
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-cyan-400 font-black text-2xl sm:text-3xl mb-1">+3</div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-tight">
                    países de experiência profissional
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-cyan-400 font-black text-2xl sm:text-3xl mb-1">+50</div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-tight">
                    projetos desenvolvidos em automação
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-cyan-400 font-black text-2xl sm:text-3xl mb-1">∞</div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-tight">
                    soluções criadas para indústria 4.0
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* LAYOUT DESKTOP: Imagem à esquerda, conteúdo à direita */}
          <div className="hidden lg:flex relative min-h-[500px] xl:min-h-[600px] max-w-none">
            {/* Imagem de perfil - desktop */}
            <motion.div
              variants={profileImageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative w-1/3 xl:w-2/5 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[#2D71B9] via-[#2D71B9] to-transparent"
            >
              <img
                src="/portfolio-danilo/About/eu.svg"
                alt="Danilo Lira - Perfil"
                className="h-5/6 w-auto object-contain"
              />
            </motion.div>

            {/* Conteúdo - desktop */}
            <div className="flex-1 flex flex-col justify-center px-8 xl:px-16 py-12 xl:py-16 max-w-4xl">
              <motion.div variants={itemVariants} className="mb-8 xl:mb-12">
                <h3 className="text-white font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-4">
                  Conectando Chão de Fábrica com Tecnologias Modernas
                </h3>
                <p className="text-slate-300 font-medium text-base lg:text-lg xl:text-xl leading-relaxed">
                  Expertise Técnica em Automação Industrial & Desenvolvimento
                </p>
              </motion.div>

              {/* Grid de tecnologias - desktop */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-8 xl:mb-12"
              >
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center text-white group cursor-pointer p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl xl:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-base xl:text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm xl:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats - desktop */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 text-center text-white"
              >
                <div>
                  <div className="text-cyan-400 font-black text-4xl xl:text-5xl leading-tight mb-2">+10</div>
                  <div className="text-slate-300 font-medium text-sm xl:text-base leading-relaxed">
                    anos de atuação na<br/>Automação Industrial
                  </div>
                </div>
                <div>
                  <div className="text-cyan-400 font-black text-4xl xl:text-5xl leading-tight mb-2">+3</div>
                  <div className="text-slate-300 font-medium text-sm xl:text-base leading-relaxed">
                    países de experiência<br/>profissional
                  </div>
                </div>
                <div>
                  <div className="text-cyan-400 font-black text-4xl xl:text-5xl leading-tight mb-2">+50</div>
                  <div className="text-slate-300 font-medium text-sm xl:text-base leading-relaxed">
                    projetos desenvolvidos<br/>em automação
                  </div>
                </div>
                <div>
                  <div className="text-cyan-400 font-black text-4xl xl:text-5xl leading-tight mb-2">∞</div>
                  <div className="text-slate-300 font-medium text-sm xl:text-base leading-relaxed">
                    soluções criadas para<br/>indústria 4.0
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechExpertise;