import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
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
        
        {/* Logo SVG Only */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="navbar-logo-icon">
            <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2905_557)">
                <path d="M12.8699 1H11.0343C11.0343 2.15566 11.0343 2.8329 11.0343 3.98856M12.8699 1H14.7449M12.8699 1V3.95926M12.8699 17.2524V3.95926M11.0343 17.2524C11.0343 12.092 11.0343 9.14899 11.0343 3.98856M11.0343 3.98856L6.80469 3.95926C6.80469 9.94354 6.80469 13.2987 6.80469 19.283V19.7517M12.8699 3.95926L15.0086 3.98856" stroke="white"/>
                <path d="M15.0156 16.7668C18.5432 16.7668 21.4029 13.9071 21.4029 10.3795C21.4029 6.85189 18.5432 3.99219 15.0156 3.99219" stroke="white"/>
                <path d="M14.7483 1H15.012C20.1902 1 24.3879 5.19772 24.3879 10.3759C24.3879 15.554 20.1902 19.7517 15.012 19.7517H6.80812H5V3.5438" stroke="white"/>
              </g>
              <defs>
                <filter id="filter0_d_2905_557" x="0.5" y="0.5" width="28.3906" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2905_557"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2905_557" result="shape"/>
                </filter>
              </defs>
            </svg>
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
                        <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_2905_557_mobile)">
                            <path d="M12.8699 1H11.0343C11.0343 2.15566 11.0343 2.8329 11.0343 3.98856M12.8699 1H14.7449M12.8699 1V3.95926M12.8699 17.2524V3.95926M11.0343 17.2524C11.0343 12.092 11.0343 9.14899 11.0343 3.98856M11.0343 3.98856L6.80469 3.95926C6.80469 9.94354 6.80469 13.2987 6.80469 19.283V19.7517M12.8699 3.95926L15.0086 3.98856" stroke="white"/>
                            <path d="M15.0156 16.7668C18.5432 16.7668 21.4029 13.9071 21.4029 10.3795C21.4029 6.85189 18.5432 3.99219 15.0156 3.99219" stroke="white"/>
                            <path d="M14.7483 1H15.012C20.1902 1 24.3879 5.19772 24.3879 10.3759C24.3879 15.554 20.1902 19.7517 15.012 19.7517H6.80812H5V3.5438" stroke="white"/>
                          </g>
                          <defs>
                            <filter id="filter0_d_2905_557_mobile" x="0.5" y="0.5" width="28.3906" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2905_557"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2905_557" result="shape"/>
                            </filter>
                          </defs>
                        </svg>
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