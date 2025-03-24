import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCog } from 'react-icons/fa';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import CipSystem from '@/components/hmi_Cip/CipSystem';

// Variantes de animação
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Interface para parâmetros do sistema CIP
interface CipParameters {
  temperature: number;
  flowRate: number;
  cleaningTime: number;
}

const HmiCipPage = () => {
  // Estados para o sistema CIP
  const [isSystemRunning, setIsSystemRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'idle' | 'pre-rinse' | 'caustic' | 'intermediate' | 'acid' | 'final-rinse'>('idle');
  const [phaseTime, setPhaseTime] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  
  // Parâmetros do sistema
  const [cipParameters, setCipParameters] = useState<CipParameters>({
    temperature: 75,
    flowRate: 120,
    cleaningTime: 30
  });

  // Estados dos componentes
  const [tankLevels, setTankLevels] = useState({
    water: 80,
    caustic: 75,
    acid: 65
  });
  
  const [valveStates, setValveStates] = useState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false
  });
  
  const [pumpRunning, setPumpRunning] = useState(false);

  // Função para iniciar o ciclo de limpeza
  const startCipCycle = () => {
    if (isSystemRunning) return;
    
    setIsSystemRunning(true);
    setCurrentPhase('pre-rinse');
    setPhaseTime(0);
    
    // Iniciar a bomba
    setPumpRunning(true);
    
    // Abrir válvulas iniciais
    setValveStates({
      ...valveStates,
      v1: true,
      v4: true
    });
  };

  // Função para parar o ciclo
  const stopCipCycle = () => {
    setIsSystemRunning(false);
    setCurrentPhase('idle');
    
    // Parar a bomba
    setPumpRunning(false);
    
    // Fechar todas as válvulas
    setValveStates({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false
    });
  };

  // Simulação da progressão do ciclo CIP
  useEffect(() => {
    if (!isSystemRunning) return;
    
    const timer = setInterval(() => {
      setPhaseTime(prevTime => {
        const newTime = prevTime + 1;
        
        // Lógica para transição entre fases
        if (currentPhase === 'pre-rinse' && newTime >= 10) {
          setCurrentPhase('caustic');
          
          // Ajustar válvulas para fase cáustica
          setValveStates({
            v1: false,
            v2: true,
            v3: false,
            v4: false,
            v5: true,
            v6: false
          });
          
          return 0;
        }
        else if (currentPhase === 'caustic' && newTime >= 15) {
          setCurrentPhase('intermediate');
          
          // Ajustar válvulas para enxágue intermediário
          setValveStates({
            v1: true,
            v2: false,
            v3: false,
            v4: true,
            v5: false,
            v6: false
          });
          
          return 0;
        }
        else if (currentPhase === 'intermediate' && newTime >= 8) {
          setCurrentPhase('acid');
          
          // Ajustar válvulas para fase ácida
          setValveStates({
            v1: false,
            v2: false,
            v3: true,
            v4: false,
            v5: false,
            v6: true
          });
          
          return 0;
        }
        else if (currentPhase === 'acid' && newTime >= 12) {
          setCurrentPhase('final-rinse');
          
          // Ajustar válvulas para enxágue final
          setValveStates({
            v1: true,
            v2: false,
            v3: false,
            v4: true,
            v5: false,
            v6: false
          });
          
          return 0;
        }
        else if (currentPhase === 'final-rinse' && newTime >= 10) {
          // Finalizar ciclo
          stopCipCycle();
          return 0;
        }
        
        return newTime;
      });
      
      // Simular mudanças nos níveis dos tanques
      if (isSystemRunning) {
        setTankLevels(prev => {
          const newLevels = { ...prev };
          
          // Reduzir níveis baseado na fase atual
          if (currentPhase === 'pre-rinse' || currentPhase === 'intermediate' || currentPhase === 'final-rinse') {
            newLevels.water = Math.max(prev.water - 0.2, 30);
          }
          else if (currentPhase === 'caustic') {
            newLevels.caustic = Math.max(prev.caustic - 0.3, 25);
          }
          else if (currentPhase === 'acid') {
            newLevels.acid = Math.max(prev.acid - 0.3, 20);
          }
          
          return newLevels;
        });
      }
      
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isSystemRunning, currentPhase, valveStates]);

  // Função para atualizar parâmetros do CIP
  const updateParameters = (newParams: Partial<CipParameters>) => {
    setCipParameters(prev => ({
      ...prev,
      ...newParams
    }));
  };

  // Função para lidar com o clique em componentes
  const handleComponentClick = (componentId: string) => {
    console.log(`Componente clicado: ${componentId}`);
    setShowDialog(true);
  };

  // Obter o nome da fase atual para exibição
  const getPhaseName = () => {
    switch (currentPhase) {
      case 'idle': return 'Inativo';
      case 'pre-rinse': return 'Pré-enxágue';
      case 'caustic': return 'Limpeza Cáustica';
      case 'intermediate': return 'Enxágue Intermediário';
      case 'acid': return 'Limpeza Ácida';
      case 'final-rinse': return 'Enxágue Final';
      default: return 'Desconhecido';
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen pt-28 pb-16 relative bg-gradient-to-br from-primary via-primary to-tertiary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Botão de volta */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <Link 
              to="/projeto/estacao-cip" 
              className="flex items-center gap-2 text-tech-blue hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center group-hover:bg-tech-blue transition-colors">
                <FaArrowLeft className="text-tech-blue group-hover:text-white transition-colors" />
              </div>
              <span>Voltar para Detalhes do Projeto</span>
            </Link>
          </motion.div>

          {/* Cabeçalho */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Sistema CIP de Limpeza</h1>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Simulação de um sistema CIP (Clean-in-Place) industrial para limpeza automática de equipamentos.
            </p>
          </motion.div>

          <div className="bg-black-100 p-6 rounded-xl shadow-lg mb-10">
            {/* Dashboard com informações do sistema */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Card de Status do Sistema */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-tech-blue px-4 py-2 text-white font-medium">
                  Status do Sistema
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Estado:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isSystemRunning ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                      {isSystemRunning ? 'Em execução' : 'Parado'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Fase Atual:</span>
                    <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">{getPhaseName()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Tempo na Fase:</span>
                    <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">{phaseTime}s</span>
                  </div>
                </div>
              </div>
              
              {/* Card de Parâmetros do Sistema */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden md:col-span-2">
                <div className="bg-industry-green px-4 py-2 text-white font-medium">
                  Parâmetros do Sistema
                </div>
                <div className="p-4 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                      <span className="text-industry-green font-bold">{cipParameters.temperature}°C</span>
                    </div>
                    <span className="text-xs text-secondary">Temperatura</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                      <span className="text-industry-green font-bold">{cipParameters.flowRate}<span className="text-xs">L/min</span></span>
                    </div>
                    <span className="text-xs text-secondary">Vazão</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
                      <span className="text-industry-green font-bold">{cipParameters.cleaningTime}<span className="text-xs">min</span></span>
                    </div>
                    <span className="text-xs text-secondary">Tempo Total</span>
                  </div>
                </div>
              </div>
              
              {/* Card de Níveis dos Tanques */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-automation-orange px-4 py-2 text-white font-medium">
                  Níveis dos Tanques
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Água:</span>
                    <div className="w-20 h-4 bg-black-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${tankLevels.water}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-secondary">{tankLevels.water}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Cáustico:</span>
                    <div className="w-20 h-4 bg-black-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${tankLevels.caustic}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-secondary">{tankLevels.caustic}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Ácido:</span>
                    <div className="w-20 h-4 bg-black-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${tankLevels.acid}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-secondary">{tankLevels.acid}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botão de Parâmetros */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowDialog(true)}
                className="px-4 py-2 bg-gradient-to-r from-tech-blue to-industry-green text-white rounded-lg hover:opacity-90 shadow-md transition-all flex items-center gap-2"
              >
                <FaCog className="h-5 w-5" />
                Ajustar Parâmetros
              </button>
            </div>
            
            {/* Área do Sistema CIP */}
            <div className="bg-black-200 p-2 rounded-xl shadow-xl mb-8">
              <CipSystem 
                isRunning={isSystemRunning}
                currentPhase={currentPhase}
                valveStates={valveStates}
                pumpRunning={pumpRunning}
                tankLevels={tankLevels}
                onComponentClick={handleComponentClick}
              />
            </div>
            
            {/* Botões de controle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={startCipCycle}
                disabled={isSystemRunning}
                className={`w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isSystemRunning 
                    ? 'bg-blue-800 opacity-50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-tech-blue to-blue-600 hover:opacity-90'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Iniciar Ciclo
              </button>
              
              <button
                onClick={stopCipCycle}
                disabled={!isSystemRunning}
                className={`w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                  !isSystemRunning 
                    ? 'bg-red-800 opacity-50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
                Parar Ciclo
              </button>
            </div>
          </div>
          
          {/* Explicação do Projeto */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Sobre o Sistema CIP
            </h2>
            
            <div className="bg-black-100 p-8 rounded-xl shadow-lg mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">Como Funciona?</h3>
              <p className="text-secondary mb-6">
                O sistema CIP (Clean-in-Place) permite a limpeza automática de equipamentos industriais sem desmontagem.
                Este simulador demonstra as diferentes fases do processo de limpeza, incluindo pré-enxágue, limpeza cáustica,
                enxágue intermediário, limpeza ácida e enxágue final.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Componentes do Sistema:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue mt-1"></div>
                      <div>
                        <p className="text-white font-medium">3 Tanques de Solução</p>
                        <p className="text-secondary">Armazenam água, solução cáustica e solução ácida para o processo de limpeza.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-industry-green mt-1"></div>
                      <div>
                        <p className="text-white font-medium">6 Válvulas de Controle</p>
                        <p className="text-secondary">Direcionam o fluxo das soluções através do sistema durante as diferentes fases.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-automation-orange mt-1"></div>
                      <div>
                        <p className="text-white font-medium">Bomba Centrífuga</p>
                        <p className="text-secondary">Responsável pela circulação das soluções de limpeza pelo sistema.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Fases do Processo:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">1</div>
                      <p className="text-secondary">Pré-enxágue: Remoção de resíduos grosseiros com água.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">2</div>
                      <p className="text-secondary">Limpeza Cáustica: Remoção de gorduras e proteínas com solução alcalina.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">3</div>
                      <p className="text-secondary">Enxágue Intermediário: Eliminação de resíduos cáusticos.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">4</div>
                      <p className="text-secondary">Limpeza Ácida: Remoção de minerais e incrustações inorgânicas.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">5</div>
                      <p className="text-secondary">Enxágue Final: Remoção de todos os resíduos químicos do sistema.</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal de Parâmetros (a ser implementado completamente) */}
          {showDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-tertiary rounded-xl p-6 w-full max-w-md">
                <h3 className="text-xl font-bold text-white mb-6">Ajustar Parâmetros</h3>
                
                {/* Aqui você irá adicionar controles para os parâmetros */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Temperatura (°C)</label>
                    <input 
                      type="range"
                      min="50"
                      max="95"
                      value={cipParameters.temperature}
                      onChange={(e) => updateParameters({ temperature: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>50°C</span>
                      <span>{cipParameters.temperature}°C</span>
                      <span>95°C</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Vazão (L/min)</label>
                    <input 
                      type="range"
                      min="60"
                      max="200"
                      value={cipParameters.flowRate}
                      onChange={(e) => updateParameters({ flowRate: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>60 L/min</span>
                      <span>{cipParameters.flowRate} L/min</span>
                      <span>200 L/min</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Tempo de Limpeza (min)</label>
                    <input 
                      type="range"
                      min="15"
                      max="60"
                      value={cipParameters.cleaningTime}
                      onChange={(e) => updateParameters({ cleaningTime: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>15 min</span>
                      <span>{cipParameters.cleaningTime} min</span>
                      <span>60 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowDialog(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setShowDialog(false)}
                    className="px-4 py-2 bg-tech-blue text-white rounded-md"
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HmiCipPage;