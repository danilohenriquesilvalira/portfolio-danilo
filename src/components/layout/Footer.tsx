import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

// Componente de Link para navegação
const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-secondary hover:text-white transition-colors flex items-center gap-2 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-tech-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {label}
      </a>
    </li>
  );
};

// Componente de ícone social
const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-tech-blue transition-colors group"
      aria-label={label}
    >
      <div className="relative">
        {icon}
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-tech-blue text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      </div>
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scrollar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-black-100 pt-16 pb-8">
      {/* Botão para voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-tech-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-button"
        aria-label="Voltar para o topo"
      >
        <FaArrowUp className="text-white" />
      </button>

      {/* Gradiente decorativo no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue via-industry-green to-automation-orange"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-tech-blue">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">Danilo Lira</h3>
                <p className="text-xs text-secondary">Automação Industrial</p>
              </div>
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              Especialista em automação industrial e indústria 4.0 com mais de 10 anos de experiência. 
              Transformando processos industriais com tecnologia de ponta.
            </p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon 
                href="https://www.linkedin.com/in/danilo-lira-82b17516b" 
                icon={<FaLinkedin size={24} />}
                label="LinkedIn"
              />
              <SocialIcon 
                href="https://github.com/danilohenriquesilvalira" 
                icon={<FaGithub size={24} />}
                label="GitHub"
              />
              <SocialIcon 
                href="mailto:contato@danilolira.com" 
                icon={<FaEnvelope size={24} />}
                label="Email"
              />
              <SocialIcon 
                href="https://wa.me/+351935479757" 
                icon={<FaWhatsapp size={24} />}
                label="WhatsApp"
              />
            </div>
          </motion.div>

          {/* Links de navegação */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-tech-blue"></div>
              Navegação
            </h3>
            <ul className="space-y-2">
              <NavLink href="#home" label="Início" />
              <NavLink href="#about" label="Sobre" />
              <NavLink href="#experience" label="Experiência" />
              <NavLink href="#skills" label="Habilidades" />
              <NavLink href="#projects" label="Projetos" />
              <NavLink href="#contact" label="Contato" />
            </ul>
          </motion.div>

          {/* Especialidades */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-industry-green"></div>
              Especialidades
            </h3>
            <ul className="space-y-2">
              <NavLink href="#skills" label="Automação Industrial" />
              <NavLink href="#skills" label="Indústria 4.0" />
              <NavLink href="#skills" label="Sistemas SCADA" />
              <NavLink href="#skills" label="Programação PLC" />
              <NavLink href="#skills" label="Integração de Sistemas" />
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-automation-orange"></div>
              Contato
            </h3>
            <div className="space-y-3 text-secondary text-sm">
              <p>
                <span className="block text-white">Email:</span>
                contato@danilolira.com
              </p>
              <p>
                <span className="block text-white">Telefone:</span>
                +351 935 479 757
              </p>
              <p>
                <span className="block text-white">Localização:</span>
                Sintra, Portugal
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-2 py-2 px-4 bg-tech-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Enviar mensagem
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gray-800 w-full my-8"></div>

        {/* Copyright e créditos */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-secondary text-xs">
            &copy; {currentYear} Danilo Lira. Todos os direitos reservados.
          </p>
          <p className="text-secondary text-xs mt-2 sm:mt-0">
            Desenvolvido com React, TypeScript, Tailwind CSS e Vite
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;