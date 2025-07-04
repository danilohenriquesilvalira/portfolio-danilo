import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../styles/navbar.css';

const navLinks = [
  { title: 'Início', id: 'home', path: '/' },
  { title: 'Projetos', id: 'projects', path: '/projetos' },
  { title: 'Sobre', id: 'about', path: '/sobre' },
  { title: 'Tech Stack', id: 'techstack', path: '/techstack' },
  { title: 'Contatos', id: 'contact', path: '/contatos' },
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
        return currentPath === '/';
      } else {
        return currentPath.startsWith(link.path);
      }
    });

    setActive(activeLink ? activeLink.id : '');
  }, [location]);

  const handleLinkClick = (id: string) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        
        {/* Logo e Título */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="navbar-logo-icon">
            <span>DL</span>
          </div>
          <div className="navbar-logo-text">
            <p className="navbar-name">Danilo Lira</p>
            <p className="navbar-subtitle">Automação Industrial & Indústria 4.0</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-desktop">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar-desktop-item">
              <Link 
                to={link.path}
                className={`navbar-desktop-link ${active === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.title}
                {active === link.id && <div className="navbar-desktop-indicator" />}
              </Link>
            </li>
          ))}
          
          {/* Redes Sociais Desktop */}
          <div className="navbar-social">
            <a 
              href="https://linkedin.com/in/danilo-lira-82b17516b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navbar-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/danilohenriquesilvalira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navbar-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:contato@danilolira.com"
              className="navbar-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile">
          <button
            onClick={() => setToggle(!toggle)}
            className={`navbar-mobile-button ${toggle ? 'active' : ''}`}
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          >
            <div className="navbar-hamburger">
              <span className={toggle ? 'rotate-45' : ''}></span>
              <span className={toggle ? 'opacity-0' : ''}></span>
              <span className={toggle ? '-rotate-45' : ''}></span>
            </div>
          </button>

          {toggle && (
            <>
              {/* Backdrop */}
              <div 
                className="navbar-backdrop"
                onClick={() => setToggle(false)}
              ></div>
              
              {/* Mobile Menu */}
              <div className="navbar-mobile-menu">
                <div className="navbar-mobile-content">
                  
                  {/* Mobile Header */}
                  <div className="navbar-mobile-header">
                    <div className="navbar-mobile-logo">
                      <div className="navbar-logo-icon small">
                        <span>DL</span>
                      </div>
                      <span className="navbar-mobile-title">Menu</span>
                    </div>
                    <button
                      onClick={() => setToggle(false)}
                      className="navbar-mobile-close"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  
                  {/* Mobile Links */}
                  <div className="navbar-mobile-links">
                    <ul>
                      {navLinks.map((link, index) => (
                        <li key={link.id}>
                          <Link
                            to={link.path}
                            className={`navbar-mobile-link ${active === link.id ? 'active' : ''}`}
                            onClick={() => handleLinkClick(link.id)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <span className={`navbar-mobile-indicator ${active === link.id ? 'active' : ''}`}></span>
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Mobile Social */}
                  <div className="navbar-mobile-social">
                    <p className="navbar-mobile-social-title">Conecte-se comigo</p>
                    <div className="navbar-mobile-social-links">
                      <a 
                        href="https://linkedin.com/in/danilo-lira-82b17516b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="navbar-mobile-social-link linkedin"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a 
                        href="https://github.com/danilohenriquesilvalira" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="navbar-mobile-social-link github"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href="mailto:contato@danilolira.com"
                        className="navbar-mobile-social-link email"
                        aria-label="Email"
                      >
                        <FaEnvelope />
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