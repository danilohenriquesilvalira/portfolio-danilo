import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

// Componente 3D para o fundo (opcional)
import AutomationCanvas from '@/components/canvas/AutomationCanvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className="absolute inset-0 top-[120px]">
        <AutomationCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start gap-5">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center py-1 px-4 bg-opacity-20 bg-tertiary rounded-lg mb-2 w-max"
          >
            <div className="w-5 h-5 rounded-full bg-automation-orange mr-2" />
            <p className="text-white font-medium sm:text-xl">Olá, sou Danilo</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-black lg:text-[62px] sm:text-[52px] xs:text-[42px] text-[32px] lg:leading-[98px] mt-2"
          >
            Especialista em <br className="hidden md:block" />
            <span className="text-gradient blue-text-gradient">Automação Industrial</span> e <br className="hidden md:block" />
            <span className="text-gradient green-text-gradient">Indústria 4.0</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-secondary font-medium lg:text-xl text-[16px] lg:leading-[30px] mt-4 max-w-3xl"
          >
            Técnico de automação com mais de 10 anos de experiência em grandes empresas do setor de bebidas.
            Especialista em PLCs Siemens e Allen-Bradley, manutenção de equipamentos, automação de processos 
            e controle industrial. Atualmente baseado em Sintra, Portugal, com foco no desenvolvimento de 
            projetos de automação industrial.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 mt-4"
        >
          <Link
            to="/#projects"
            className="py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            Ver Projetos
          </Link>
          <Link
            to="/#contact"
            className="py-3 px-8 rounded-xl outline-none border-2 border-tech-blue text-white font-bold shadow-md hover:bg-tech-blue/10 transition-colors"
          >
            Contato
          </Link>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
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