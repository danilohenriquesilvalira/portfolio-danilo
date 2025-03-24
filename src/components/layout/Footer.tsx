import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo e copyright */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/assets/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              <h3 className="text-white text-lg font-semibold">Danilo Lira</h3>
            </div>
            <p className="text-secondary text-sm">
              &copy; {currentYear} Danilo Lira. Todos os direitos reservados.
            </p>
          </div>

          {/* Navegação */}
          <div className="grid grid-cols-2 gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-secondary hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-secondary hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-secondary hover:text-white transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Especialidades</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="text-secondary hover:text-white transition-colors">
                    Automação Industrial
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-secondary hover:text-white transition-colors">
                    Indústria 4.0
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-secondary hover:text-white transition-colors">
                    Sistemas SCADA
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-secondary hover:text-white transition-colors">
                    Programação PLC
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contato e redes sociais */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/danilo-lira-82b17516b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/danilohenriquesilvalira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:contato@danilolira.com"
                className="text-white hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-secondary text-sm">
              contato@danilolira.com<br />
              Recife, PE - Brasil
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-secondary text-xs">
            Desenvolvido com React, TypeScript, Tailwind CSS e Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;