import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Ícones e logo (substitua pelos seus próprios)
import { FaBars, FaTimes } from 'react-icons/fa';

// Links da navegação
const navLinks = [
  { title: 'Início', id: 'home', path: '/' },
  { title: 'Sobre', id: 'about', path: '/#about' },
  { title: 'Experiência', id: 'experience', path: '/#experience' },
  { title: 'Habilidades', id: 'skills', path: '/#skills' },
  { title: 'Projetos', id: 'projects', path: '/#projects' },
  { title: 'Contato', id: 'contact', path: '/#contact' },
];

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manipula cliques nos links
  const handleLinkClick = (id: string) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary shadow-card' : 'bg-transparent'
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
          {/* Logo aqui */}
          <img src="/src/assets/images/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Danilo &nbsp;<span className="sm:block hidden">| Automação Industrial</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => handleLinkClick(link.id)}
            >
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] flex justify-center items-center"
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          >
            {toggle ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
          </button>

          {/* Mobile Menu */}
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    <a href={link.path}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;