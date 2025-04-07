
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCog } from 'react-icons/fa';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';

const HmiPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen pt-28 pb-16 relative bg-gradient-to-br from-primary via-primary to-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/projeto/seu-projeto" 
              className="flex items-center gap-2 text-tech-blue hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center group-hover:bg-tech-blue transition-colors">
                <FaArrowLeft className="text-tech-blue group-hover:text-white transition-colors" />
              </div>
              <span>Voltar para Detalhes do Projeto</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Nome do Projeto</h1>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Descrição do projeto aqui.
            </p>
          </div>

          <div className="bg-black-100 p-6 rounded-xl shadow-lg mb-10">
            {/* Dashboard com painéis de status */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Painel 1 */}
                <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-tech-blue px-4 py-2 text-white font-medium">
                    Status do Sistema
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Estado:</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-red-100">
                        Parado
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Fase Atual:</span>
                      <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">Inativo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Tempo na Fase:</span>
                      <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">0s</span>
                    </div>
                  </div>
                </div>
                
                {/* Painel 2 */}
                <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden md:col-span-2">
                  <div className="bg-industry-green px-4 py-2 text-white font-medium">
                    Parâmetros do Sistema
                  </div>
                  <div className="p-4 grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                        <span className="text-industry-green font-bold">75°C</span>
                      </div>
                      <span className="text-xs text-secondary">Temperatura</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                        <span className="text-industry-green font-bold">120<span className="text-xs">L/min</span></span>
                      </div>
                      <span className="text-xs text-secondary">Vazão</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                        <span className="text-industry-green font-bold">30<span className="text-xs">min</span></span>
                      </div>
                      <span className="text-xs text-secondary">Tempo Total</span>
                    </div>
                    
                    {/* Outro parâmetro */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                        <span className="font-bold text-gray-500">VM1</span>
                      </div>
                      <span className="text-xs text-secondary">
                        Fechada
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Painel 3 */}
                <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-automation-orange px-4 py-2 text-white font-medium">
                    Estado dos Componentes
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Bomba 1:</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-red-100">
                        Inativa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Bomba 2:</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-red-100">
                        Inativa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Tanque:</span>
                      <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">70.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botões de modo de edição e parâmetros */}
            <div className="flex justify-end mb-6 gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors"
              >
                Ativar Modo de Edição
              </button>
              
              <button
                className="px-4 py-2 bg-gradient-to-r from-tech-blue to-industry-green text-white rounded-lg hover:opacity-90 shadow-md transition-all flex items-center gap-2"
              >
                <FaCog className="h-5 w-5" />
                Ajustar Parâmetros
              </button>
            </div>
            
            {/* Área principal vazia - sem conteúdo do CIP */}
            <div className="bg-black-200 p-2 rounded-xl shadow-xl mb-8 relative" style={{ height: "600px" }}>
              {/* Área completamente vazia para seu novo projeto */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-slate-900 rounded-md p-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
                  <span className="text-white text-sm">Status: Parado</span>
                </div>
                <div className="text-white text-sm">
                  Fase: <span className="font-bold">Inativo</span>
                </div>
              </div>
            </div>
            
            {/* Botões de controle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-tech-blue to-blue-600 hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Iniciar Ciclo
              </button>
              
              <button
                className="w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Reiniciar Ciclo
              </button>
              
              <button
                className="w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 bg-red-800 opacity-50 cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
                Parar Ciclo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HmiPage;