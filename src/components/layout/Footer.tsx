import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Separator Line - Now at the top */}
        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row mt-8"> {/* Added mt-8 for spacing below the line */}

          {/* Copyright & Core Info */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Danilo Lira. Especialista em Automação Industrial.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Transformando a indústria com tecnologia em Portugal 🇵🇹.
            </p>
          </div>

          {/* Social Links & Call to Connect */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 text-sm hidden sm:block">Vamos nos conectar:</span>
            <a
              href="https://github.com/danilohenriquelira"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/danilo-lira-82b17516b"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:contato@danilolira.com"
              rel="noreferrer"
              aria-label="Email"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;