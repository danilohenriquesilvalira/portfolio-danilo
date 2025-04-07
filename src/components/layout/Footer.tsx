
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">Danilo Lira</h3>
                <p className="text-xs text-gray-400">Automação Industrial</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialista em automação industrial e indústria 4.0 com mais de 10 anos de experiência. 
              Transformando processos industriais com tecnologia de ponta.
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/danilo-lira-82b17516b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/danilohenriquesilvalira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="mailto:contato@danilolira.com" 
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href="https://wa.me/+351935479757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Links de navegação */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-blue-500"></div>
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experiência</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-green-500"></div>
              Especialidades
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Automação Industrial</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Indústria 4.0</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Sistemas SCADA</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Programação PLC</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Integração de Sistemas</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-orange-500"></div>
              Contato
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
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
                className="inline-block mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Enviar mensagem
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gray-800 w-full my-8"></div>

        {/* Copyright e créditos */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Danilo Lira. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2 sm:mt-0">
            Desenvolvido com React, TypeScript, Tailwind CSS e Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;