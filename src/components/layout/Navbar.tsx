import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manipula cliques nos links
  const handleLinkClick = (id) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900 bg-opacity-95 shadow-md' 
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
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500">
            <span className="text-white font-bold text-xl">DL</span>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[18px] font-bold leading-tight">
              Danilo Lira
            </p>
            <p className="text-gray-400 text-[12px] leading-tight hidden sm:block">
              Automação Industrial & Indústria 4.0
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative"
            >
              <a 
                href={link.path}
                className={`${
                  active === link.id 
                    ? 'text-white' 
                    : 'text-gray-400'
                } hover:text-white text-[16px] font-medium transition-colors duration-200`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.title}
              </a>
              {active === link.id && (
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </li>
          ))}
          
          <div className="ml-4 flex gap-3 items-center">
            <a 
              href="https://linkedin.com/in/danilo-lira-82b17516b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/danilohenriquesilvalira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="mailto:contato@danilolira.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:bg-blue-500 transition-colors"
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          >
            {toggle ? <FaTimes size={20} color="#fff" /> : <FaBars size={20} color="#fff" />}
          </button>

          {/* Mobile Menu */}
          {toggle && (
            <div
              className="p-6 bg-gray-800 absolute top-24 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-xl"
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id ? 'text-white' : 'text-gray-400'
                    } font-medium cursor-pointer text-[16px] border-b border-gray-700 pb-2`}
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
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/danilohenriquesilvalira" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="mailto:contato@danilolira.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;