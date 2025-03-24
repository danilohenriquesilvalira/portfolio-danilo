import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-6 flex justify-center">
          <FaExclamationTriangle className="text-automation-orange text-8xl" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-6">Página Não Encontrada</h2>
        
        <p className="text-secondary mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço. 
          Verifique o URL ou volte para a página inicial.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 py-3 px-8 bg-tech-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaHome /> Voltar para Início
        </Link>
        
        <div className="mt-12 p-6 bg-tertiary rounded-lg">
          <h3 className="text-white text-lg font-medium mb-3">Você pode estar procurando por:</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/#projects" className="text-tech-blue hover:underline">
                Projetos de Automação
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="text-tech-blue hover:underline">
                Habilidades Técnicas
              </Link>
            </li>
            <li>
              <Link to="/#experience" className="text-tech-blue hover:underline">
                Experiência Profissional
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-tech-blue hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;