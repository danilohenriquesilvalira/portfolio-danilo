import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { title: 'Início', id: 'home', path: '/' },
  { title: 'Experiência', id: 'experience', path: '/experiencia' },
  { title: 'Projetos', id: 'projects', path: '/projetos' },
  { title: 'Contato', id: 'contact', path: '/contato' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  // Atualizar aba ativa baseada na rota atual
  useEffect(() => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find(link => {
      if (link.path === '/') {
        return currentPath === '/'; // Link 'Início' ativo APENAS se a rota for EXATAMENTE '/'
      } else {
        return currentPath.startsWith(link.path); // Outros links ativos se a rota começar com o path
      }
    });

    setActive(activeLink ? activeLink.id : '');
  }, [location]);

  const handleLinkClick = (id: string) => {
    setActive(id);
    setToggle(false); // Fecha o menu mobile ao clicar em um link
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full flex items-center py-5 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // Removido setActive('') daqui.
            // O useEffect já cuidará de definir 'home' como ativo se a rota for '/',
            // ou de remover a ativação se a rota mudar.
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
              Automação Industrial &amp; Indústria 4.0
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <Link 
                to={link.path}
                className={`${
                  active === link.id ? 'text-white' : 'text-gray-300'
                } hover:text-white text-[16px] font-medium transition-colors duration-200`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.title}
                {active === link.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500" />
                )}
              </Link>
            </li>
          ))}
          
          <div className="ml-6 flex gap-3 items-center border-l border-gray-700 pl-6">
            <a 
              href="https://linkedin.com/in/danilo-lira-82b17516b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 hover:bg-opacity-50"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/danilohenriquesilvalira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 hover:bg-opacity-50"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="mailto:contato@danilolira.com"
              className="text-gray-300 hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 hover:bg-opacity-50"
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
            className={`relative w-12 h-12 rounded-2xl flex justify-center items-center backdrop-blur-lg transition-all duration-300 ${
              toggle 
                ? 'bg-blue-500 bg-opacity-90 scale-95' 
                : 'bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex flex-col justify-center items-center w-5 h-5 relative">
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                toggle ? 'rotate-45 translate-y-0.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 mt-1 ${
                toggle ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 mt-1 ${
                toggle ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>

          {toggle && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                onClick={() => setToggle(false)}
              ></div>
              
              {/* Menu */}
              <div className="fixed top-0 right-0 h-screen w-80 bg-gray-900 bg-opacity-95 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-out">
                <div className="flex flex-col h-full">
                  {/* Header do menu */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">DL</span>
                      </div>
                      <span className="text-white font-semibold">Menu</span>
                    </div>
                    <button
                      onClick={() => setToggle(false)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>
                  
                  {/* Links de navegação */}
                  <div className="flex-1 px-6 py-8">
                    <ul className="space-y-6">
                      {navLinks.map((link, index) => (
                        <li key={link.id}>
                          <Link
                            to={link.path}
                            className={`block py-3 px-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                              active === link.id
                                ? 'text-white bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-30'
                                : 'text-gray-300 hover:text-white hover:bg-gray-800 hover:bg-opacity-50'
                            }`}
                            onClick={() => handleLinkClick(link.id)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <span className="flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full transition-colors ${
                                active === link.id ? 'bg-blue-400' : 'bg-gray-600'
                              }`}></span>
                              {link.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Footer com redes sociais */}
                  <div className="p-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-4 text-center">Conecte-se comigo</p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="https://linkedin.com/in/danilo-lira-82b17516b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-gray-800 bg-opacity-50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200 backdrop-blur-sm"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a 
                        href="https://github.com/danilohenriquesilvalira" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-gray-800 bg-opacity-50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200 backdrop-blur-sm"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a 
                        href="mailto:contato@danilolira.com"
                        className="w-12 h-12 rounded-xl bg-gray-800 bg-opacity-50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-200 backdrop-blur-sm"
                        aria-label="Email"
                      >
                        <FaEnvelope size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;