
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <FaExclamationTriangle className="text-orange-500 text-8xl" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-6">Página Não Encontrada</h2>
        
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço. 
          Verifique o URL ou volte para a página inicial.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 py-3 px-8 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaHome /> Voltar para Início
        </Link>
        
        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-white text-lg font-medium mb-3">Você pode estar procurando por:</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/#projects" className="text-blue-400 hover:underline">
                Projetos de Automação
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="text-blue-400 hover:underline">
                Habilidades Técnicas
              </Link>
            </li>
            <li>
              <Link to="/#experience" className="text-blue-400 hover:underline">
                Experiência Profissional
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-blue-400 hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;