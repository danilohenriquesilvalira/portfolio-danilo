import React from 'react';
import Tanks from './Tanks';
import Valves from './Valves';
import Pump from './Pump';
import Piping from './Piping';

interface CipSystemProps {
  isRunning: boolean;
  currentPhase: 'idle' | 'pre-rinse' | 'caustic' | 'intermediate' | 'acid' | 'final-rinse';
  valveStates: {
    v1: boolean;
    v2: boolean;
    v3: boolean;
    v4: boolean;
    v5: boolean;
    v6: boolean;
  };
  pumpRunning: boolean;
  tankLevels: {
    water: number;
    caustic: number;
    acid: number;
  };
  onComponentClick: (componentId: string) => void;
}

const CipSystem: React.FC<CipSystemProps> = ({
  isRunning,
  currentPhase,
  valveStates,
  pumpRunning,
  tankLevels,
  onComponentClick
}) => {
  // Determine the active fluid color based on current phase
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
        return '#9CA3AF'; // gray for idle
    }
  };

  // Determine which pipes should show flow based on current phase and valve states
  const getActivePipes = () => {
    if (!isRunning) return [];
    
    const activePipes = [];
    
    // Logic to determine which pipes have flow
    if (valveStates.v1) activePipes.push('water-main');
    if (valveStates.v2) activePipes.push('caustic-main');
    if (valveStates.v3) activePipes.push('acid-main');
    
    if (pumpRunning) {
      activePipes.push('pump-out');
      
      if (valveStates.v4) activePipes.push('system-in');
      if (valveStates.v5) activePipes.push('caustic-return');
      if (valveStates.v6) activePipes.push('acid-return');
    }
    
    return activePipes;
  };

  return (
    <div className="w-full h-[600px] relative bg-slate-900 rounded-lg overflow-hidden">
      {/* This is a placeholder for the CIP system visualization */}
      {/* In the actual implementation, you'll replace this with SVG or HTML components */}
      
      {/* Container for the entire system */}
      <div className="absolute inset-0 p-4">
        <div className="relative w-full h-full border border-slate-700 rounded-lg bg-slate-800 overflow-hidden">
          
          {/* Header with system name */}
          <div className="absolute top-0 left-0 right-0 bg-slate-700 p-2 text-white text-center font-bold">
            Sistema CIP
          </div>
          
          {/* Placeholder for actual CIP visualization components */}
          <div className="mt-10 flex justify-around items-center h-[80%]">
            {/* This is where the Tank, Valve, Pump and Piping components will be placed */}
            {/* For now, we'll just show some placeholder UI elements */}
            
            {/* Tanks */}
            <Tanks 
              levels={tankLevels}
              onTankClick={(tankId) => onComponentClick(`tank-${tankId}`)}
            />
            
            {/* Piping system */}
            <Piping 
              activePipes={getActivePipes()}
              fluidColor={getFluidColor()}
            />
            
            {/* Valves */}
            <Valves 
              states={valveStates}
              onValveClick={(valveId) => onComponentClick(`valve-${valveId}`)}
            />
            
            {/* Pump */}
            <Pump 
              isRunning={pumpRunning}
              onClick={() => onComponentClick('pump')}
            />
          </div>
          
          {/* Status indicator */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-slate-900 rounded-md p-2">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${isRunning ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-white text-sm">Status: {isRunning ? 'Em Operação' : 'Parado'}</span>
            </div>
            <div className="text-white text-sm">
              Fase: <span className="font-bold">{getPhaseDisplayName(currentPhase)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get display name for phases
const getPhaseDisplayName = (phase: string) => {
  switch (phase) {
    case 'idle': return 'Inativo';
    case 'pre-rinse': return 'Pré-enxágue';
    case 'caustic': return 'Limpeza Cáustica';
    case 'intermediate': return 'Enxágue Intermediário';
    case 'acid': return 'Limpeza Ácida';
    case 'final-rinse': return 'Enxágue Final';
    default: return phase;
  }
};

export default CipSystem;