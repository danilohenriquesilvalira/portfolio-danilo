import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCog } from 'react-icons/fa';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';

// Import modular components
import CipSystemLayout from '@/components/hmi_Cip/CipSystemLayout';
import CipDashboard from '@/components/hmi_Cip/CipDashboard';
import ParametersModal from '@/components/hmi_Cip/ParametersModal';
import SystemDescription from '@/components/hmi_Cip/SystemDescription';
import ControlButtons from '@/components/hmi_Cip/ControlButtons';

// Animation variants
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

// Interface for CIP parameters
interface CipParameters {
  temperature: number;
  flowRate: number;
  cleaningTime: number;
}

// Interface for component positions
interface ComponentPositions {
  mainTank: { top: number; left: number; };
  valves: {
    [key: string]: { top: number; left: number; rotation: number; };
  };
  modulatingValves: {
    [key: string]: { top: number; left: number; rotation: number; };
  };
  pumps: {
    [key: string]: { top: number; left: number; rotation: number; };
  };
  instruments: {
    temperature: { top: number; left: number; };
    pressure: { top: number; left: number; };
    flow: { top: number; left: number; };
    level: { top: number; left: number; };
  };
}

const HmiCipPage = () => {
  // CIP system states
  const [isSystemRunning, setIsSystemRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'idle' | 'pre-rinse' | 'caustic' | 'intermediate' | 'acid' | 'final-rinse'>('idle');
  const [phaseTime, setPhaseTime] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  
  // System parameters
  const [cipParameters, setCipParameters] = useState<CipParameters>({
    temperature: 75,
    flowRate: 120,
    cleaningTime: 30
  });

  // Component states
  const [tankLevel, setTankLevel] = useState(70);
  
  const [valveStates, setValveStates] = useState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
    v8: false,
    v9: false
  });
  
  // Modulating valve states (0: closed, 1: open, 2: error)
  const [modulatingValveStates, setModulatingValveStates] = useState({
    mv1: 0,
    mv2: 0
  });
  
  const [pumpStates, setPumpStates] = useState({
    pump1: false,
    pump2: false
  });

  // Edit mode for positioning
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Component positions - can be adjusted to move components in the interface
  const [componentPositions, setComponentPositions] = useState<ComponentPositions>({
    mainTank: { top: 150, left: 500 },
    valves: {
      v1: { top: 400, left: 450, rotation: 90 },
      v2: { top: 400, left: 600, rotation: 90 },
      v3: { top: 406, left: 200, rotation: 0 },
      v4: { top: 406, left: 60, rotation: 0 },
      v5: { top: 330, left: 136, rotation: 90 },
      v6: { top: 192, left: 200, rotation: 0 },
      v7: { top: 220, left: 420, rotation: 0 },
      v8: { top: 260, left: 620, rotation: 0 },
      v9: { top: 70, left: 532, rotation: 90 },
    },
    modulatingValves: {
      mv1: { top: 300, left: 350, rotation: 0 },
      mv2: { top: 150, left: 620, rotation: 90 }
    },
    pumps: {
      pump1: { top: 415, left: 300, rotation: 0 },
      pump2: { top: 200, left: 300, rotation: 0 }
    },
    instruments: {
      temperature: { top: 100, left: 700 },
      pressure: { top: 100, left: 800 },
      flow: { top: 100, left: 900 },
      level: { top: 100, left: 1000 },
    }
  });

  // Start the cleaning cycle
  const startCycle = () => {
    if (isSystemRunning) return;
    
    setIsSystemRunning(true);
    setCurrentPhase('pre-rinse');
    setPhaseTime(0);
    
    // Start pumps
    setPumpStates({
      pump1: true,
      pump2: false
    });
    
    // Open initial valves
    setValveStates({
      ...valveStates,
      v1: true,
      v4: true
    });
    
    // Configure modulating valves
    setModulatingValveStates({
      mv1: 1, // Open
      mv2: 0  // Closed
    });
  };

  // Restart the cycle
  const restartCycle = () => {
    stopCycle();
    setTimeout(() => startCycle(), 100);
  };

  // Stop the cycle
  const stopCycle = () => {
    setIsSystemRunning(false);
    setCurrentPhase('idle');
    
    // Stop pumps
    setPumpStates({
      pump1: false,
      pump2: false
    });
    
    // Close all valves
    setValveStates({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false,
      v7: false,
      v8: false,
      v9: false
    });
    
    // Close modulating valves
    setModulatingValveStates({
      mv1: 0,
      mv2: 0
    });
  };

  // Simulate the CIP cycle progression
  useEffect(() => {
    if (!isSystemRunning) return;
    
    const timer = setInterval(() => {
      setPhaseTime(prevTime => {
        const newTime = prevTime + 1;
        
        // Logic for transitioning between phases
        if (currentPhase === 'pre-rinse' && newTime >= 10) {
          setCurrentPhase('caustic');
          
          // Adjust valves for caustic phase
          setValveStates({
            v1: false,
            v2: true,
            v3: false,
            v4: false,
            v5: true,
            v6: false,
            v7: true,
            v8: false,
            v9: false
          });
          
          // Adjust modulating valves
          setModulatingValveStates({
            mv1: 0, // Closed
            mv2: 1  // Open
          });
          
          return 0;
        }
        else if (currentPhase === 'caustic' && newTime >= 15) {
          setCurrentPhase('intermediate');
          
          // Adjust valves for intermediate rinse
          setValveStates({
            v1: true,
            v2: false,
            v3: false,
            v4: true,
            v5: false,
            v6: false,
            v7: false,
            v8: true,
            v9: false
          });
          
          // Simulate failure in modulating valve
          setModulatingValveStates({
            mv1: 2, // Error
            mv2: 0  // Closed
          });
          
          return 0;
        }
        else if (currentPhase === 'intermediate' && newTime >= 8) {
          setCurrentPhase('acid');
          
          // Adjust valves for acid phase
          setValveStates({
            v1: false,
            v2: false,
            v3: true,
            v4: false,
            v5: false,
            v6: true,
            v7: false,
            v8: false,
            v9: true
          });
          
          // Start second pump
          setPumpStates({
            pump1: true,
            pump2: true
          });
          
          // Restore modulating valve
          setModulatingValveStates({
            mv1: 1, // Open
            mv2: 1  // Open
          });
          
          return 0;
        }
        else if (currentPhase === 'acid' && newTime >= 12) {
          setCurrentPhase('final-rinse');
          
          // Adjust valves for final rinse
          setValveStates({
            v1: true,
            v2: false,
            v3: false,
            v4: true,
            v5: false,
            v6: false,
            v7: false,
            v8: false,
            v9: false
          });
          
          // Stop second pump
          setPumpStates({
            pump1: true,
            pump2: false
          });
          
          // Configure modulating valves for final rinse
          setModulatingValveStates({
            mv1: 1, // Open
            mv2: 0  // Closed
          });
          
          return 0;
        }
        else if (currentPhase === 'final-rinse' && newTime >= 10) {
          // End cycle
          stopCycle();
          return 0;
        }
        
        return newTime;
      });
      
      // Simulate tank level changes
      if (isSystemRunning) {
        setTankLevel(prev => {
          // Level varies between 60% and 80%
          if (prev > 78) return prev - 0.5;
          if (prev < 62) return prev + 0.5;
          
          return prev + (Math.random() > 0.5 ? 0.5 : -0.5);
        });
      }
      
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isSystemRunning, currentPhase]);

  // Update CIP parameters
  const updateParameters = (newParams: Partial<CipParameters>) => {
    setCipParameters(prev => ({
      ...prev,
      ...newParams
    }));
  };

  // Handle component clicks
  const handleComponentClick = (componentId: string) => {
    console.log(`Component clicked: ${componentId}`);
    
    // Check if the click was on a modulating valve
    if (componentId.startsWith('modulatingValve-')) {
      const valveId = componentId.split('-')[1];
      
      // Cycle through states for the clicked modulating valve
      setModulatingValveStates(prev => {
        const currentState = prev[valveId as keyof typeof prev];
        let newState = 0;
        
        // Cycle: 0 (closed) -> 1 (open) -> 2 (error) -> 0 (closed)
        if (currentState === 0) newState = 1;
        else if (currentState === 1) newState = 2;
        else newState = 0;
        
        return {
          ...prev,
          [valveId]: newState
        };
      });
    } else {
      // For other components, show the parameters dialog
      setShowDialog(true);
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // Get the name of the current phase for display
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

  // Determine fluid color based on current phase
  const getFluidColor = () => {
    switch (currentPhase) {
      case 'pre-rinse':
      case 'intermediate':
      case 'final-rinse':
        return '#3B82F6'; // blue for water
      case 'caustic':
        return '#FBBF24'; // yellow for caustic
      case 'acid':
        return '#EF4444'; // red for acid
      default:
        return '#9CA3AF'; // gray for inactive
    }
  };

  // Helper function to get text for modulating valve status
  const getValveStatusText = (status: number): string => {
    switch (status) {
      case 0: return 'Fechada';
      case 1: return 'Aberta';
      case 2: return 'Falha';
      default: return 'Desconhecida';
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
          
          {/* Back button */}
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

          {/* Header */}
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
            {/* Dashboard with system information */}
            <div className="mb-8">
              <CipDashboard 
                isSystemRunning={isSystemRunning}
                currentPhase={currentPhase}
                phaseTime={phaseTime}
                cipParameters={cipParameters}
                tankLevel={tankLevel}
                pumpStates={pumpStates}
                modulatingValveStates={modulatingValveStates}
                getPhaseName={getPhaseName}
                getValveStatusText={getValveStatusText}
              />
            </div>
            
            {/* Edit mode and parameter buttons */}
            <div className="flex justify-end mb-6 gap-4">
              <button
                onClick={toggleEditMode}
                className={`px-4 py-2 ${isEditMode ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-lg transition-colors`}
              >
                {isEditMode ? 'Desativar Modo de Edição' : 'Ativar Modo de Edição'}
              </button>
              
              <button
                onClick={() => setShowDialog(true)}
                className="px-4 py-2 bg-gradient-to-r from-tech-blue to-industry-green text-white rounded-lg hover:opacity-90 shadow-md transition-all flex items-center gap-2"
              >
                <FaCog className="h-5 w-5" />
                Ajustar Parâmetros
              </button>
            </div>
            
            {/* CIP System Layout */}
            <div className="bg-black-200 p-2 rounded-xl shadow-xl mb-8">
              <CipSystemLayout 
                isSystemRunning={isSystemRunning}
                currentPhase={currentPhase}
                phaseTime={phaseTime}
                tankLevel={tankLevel}
                valveStates={valveStates}
                modulatingValveStates={modulatingValveStates}
                pumpStates={pumpStates}
                componentPositions={componentPositions}
                isEditMode={isEditMode}
                handleComponentClick={handleComponentClick}
                getFluidColor={getFluidColor}
                getPhaseName={getPhaseName}
              />
            </div>
            
            {/* Edit mode instructions */}
            {isEditMode && (
              <div className="mb-4 p-4 bg-black-200 rounded-lg text-white">
                <h3 className="text-lg font-bold mb-2">Instruções de Edição</h3>
                <p className="text-sm text-secondary mb-2">
                  Para ajustar as posições dos componentes, edite diretamente os valores 
                  na variável <code>componentPositions</code> no código fonte.
                </p>
                <p className="text-sm text-secondary">
                  Cada componente mostra suas coordenadas atuais para facilitar o posicionamento no código.
                </p>
              </div>
            )}
            
            {/* Control buttons */}
            <ControlButtons 
              isSystemRunning={isSystemRunning}
              startCycle={startCycle}
              stopCycle={stopCycle}
            />
          </div>
          
          {/* System description */}
          <SystemDescription />
          
          {/* Parameters modal */}
          <ParametersModal 
            isOpen={showDialog}
            onClose={() => setShowDialog(false)}
            cipParameters={cipParameters}
            updateParameters={updateParameters}
          />
        </div>
      </motion.div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HmiCipPage;