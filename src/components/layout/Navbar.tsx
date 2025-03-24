import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Links da navegação
const navLinks = [
  { title: 'Início', id: 'home', path: '/' },
  { title: 'Sobre', id: 'about', path: '/#about' },
  { title: 'Experiência', id: 'experience', path: '/#experience' },
  { title: 'Habilidades', id: 'skills', path: '/#skills' },
  { title: 'Projetos', id: 'projects', path: '/#projects' },
  { title: 'Contato', id: 'contact', path: '/#contact' },
];

// Animações
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100 
    }
  }
};

const mobileNavVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95,
    transition: { 
      duration: 0.2 
    }
  }
};

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Gerencia o efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Determina o ID de seção ativo com base no scroll
    const handleActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleActiveSection);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  // Manipula cliques nos links
  const handleLinkClick = (id: string) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary bg-opacity-95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-tech-blue">
            <span className="text-white font-bold text-xl">DL</span>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[18px] font-bold leading-tight">
              Danilo Lira
            </p>
            <p className="text-secondary text-[12px] leading-tight hidden sm:block">
              Automação Industrial & Indústria 4.0
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <motion.ul className="list-none hidden md:flex flex-row gap-10 items-center" variants={navVariants}>
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              variants={linkVariants}
              className="relative"
            >
              <a 
                href={link.path}
                className={`${
                  active === link.id 
                    ? 'text-white' 
                    : 'text-secondary'
                } hover:text-white text-[16px] font-medium transition-colors duration-200`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.title}
              </a>
              {active === link.id && (
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-tech-blue"
                  layoutId="activeNavIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
          
          <motion.div variants={linkVariants} className="ml-4 flex gap-3 items-center">
            <a 
              href="https://linkedin.com/in/danilo-lira-82b17516b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/danilohenriquesilvalira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="mailto:contato@danilolira.com"
              className="text-secondary hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </motion.div>
        </motion.ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-tertiary hover:bg-tech-blue transition-colors"
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          >
            {toggle ? <FaTimes size={20} color="#fff" /> : <FaBars size={20} color="#fff" />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 bg-tertiary absolute top-24 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-xl"
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.id ? 'text-white' : 'text-secondary'
                      } font-medium cursor-pointer text-[16px] border-b border-gray-800 pb-2`}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      <a href={link.path}>{link.title}</a>
                    </li>
                  ))}
                  
                  <li className="pt-2 flex justify-between">
                    <a 
                      href="https://linkedin.com/in/danilo-lira-82b17516b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/danilohenriquesilvalira" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href="mailto:contato@danilolira.com"
                      className="text-secondary hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;