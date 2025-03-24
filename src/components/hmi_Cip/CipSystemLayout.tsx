import React from 'react';
import Tank from './Tank';
import Valve from './Valve';
import Pump from './Pump';
import InstrumentGauge from './InstrumentGauge';
import ModulatingValve from './ModulatingValve';

// Interfaces
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

interface CipSystemLayoutProps {
  // System states
  isSystemRunning: boolean;
  currentPhase: 'idle' | 'pre-rinse' | 'caustic' | 'intermediate' | 'acid' | 'final-rinse';
  phaseTime: number;
  tankLevel: number;
  
  // Component states
  valveStates: { [key: string]: boolean };
  modulatingValveStates: { [key: string]: 0 | 1 | 2 };
  pumpStates: { [key: string]: boolean };
  
  // Positions and edit mode
  componentPositions: ComponentPositions;
  isEditMode: boolean;
  
  // Event handlers
  handleComponentClick: (componentId: string) => void;
  
  // Helper functions
  getFluidColor: () => string;
  getPhaseName: () => string;
}

const CipSystemLayout: React.FC<CipSystemLayoutProps> = ({
  isSystemRunning,
  currentPhase,
  phaseTime,
  tankLevel,
  valveStates,
  modulatingValveStates,
  pumpStates,
  componentPositions,
  isEditMode,
  handleComponentClick,
  getFluidColor,
  getPhaseName
}) => {
  return (
    <div className="w-full h-[600px] relative bg-slate-900 rounded-lg overflow-hidden">
      {/* Container for the entire system */}
      <div className="absolute inset-0 p-4">
        <div className="relative w-full h-full border border-slate-700 rounded-lg bg-slate-800 overflow-hidden">
          
          {/* Header with system name */}
          <div className="absolute top-0 left-0 right-0 bg-slate-700 p-2 text-white text-center font-bold">
            Sistema CIP {isEditMode && '- MODO DE EDIÇÃO'}
          </div>
          
          {/* Main Tank */}
          <div className="absolute" style={{ 
            top: `${componentPositions.mainTank.top}px`, 
            left: `${componentPositions.mainTank.left}px` 
          }}>
            <div className={isEditMode ? 'border-2 border-dashed border-blue-500 p-2' : ''}>
              <div className="text-xs text-white mb-1 text-center">
                {isEditMode && `top: ${componentPositions.mainTank.top}, left: ${componentPositions.mainTank.left}`}
              </div>
              <Tank 
                level={tankLevel}
                color={getFluidColor()}
                label="Tanque Principal"
                onClick={() => handleComponentClick('tank-main')}
                className="transform scale-50 origin-top-left"
              />
            </div>
          </div>

          {/* Valves */}
          {Object.entries(componentPositions.valves).map(([valveId, position]) => (
            <div key={valveId} className="absolute" style={{ 
              top: `${position.top}px`, 
              left: `${position.left}px` 
            }}>
              <div className={isEditMode ? 'border-2 border-dashed border-purple-500 p-2' : ''}>
                <div className="text-xs text-white mb-1 text-center">
                  {isEditMode && `top: ${position.top}, left: ${position.left}, rot: ${position.rotation}`}
                </div>
                <Valve 
                  status={valveStates[valveId] ? 1 : 0} 
                  label={`${valveId.toUpperCase()} - Válvula`} 
                  onClick={() => handleComponentClick(`valve-${valveId}`)}
                  rotation={position.rotation}
                />
              </div>
            </div>
          ))}
          
          {/* Modulating Valves */}
          {Object.entries(componentPositions.modulatingValves).map(([valveId, position]) => (
            <div key={valveId} className="absolute" style={{ 
              top: `${position.top}px`, 
              left: `${position.left}px`,
              transform: `rotate(${position.rotation}deg)`
            }}>
              <div className={isEditMode ? 'border-2 border-dashed border-green-500 p-2' : ''}>
                <div className="text-xs text-white mb-1 text-center">
                  {isEditMode && `top: ${position.top}, left: ${position.left}, rot: ${position.rotation}`}
                </div>
                <ModulatingValve 
                  status={modulatingValveStates[valveId]} 
                  label={`${valveId.toUpperCase()} - Moduladora`} 
                  onClick={() => handleComponentClick(`modulatingValve-${valveId}`)}
                />
              </div>
            </div>
          ))}

          {/* Pumps */}
          {Object.entries(componentPositions.pumps).map(([pumpId, position]) => (
            <div key={pumpId} className="absolute" style={{ 
              top: `${position.top}px`, 
              left: `${position.left}px` 
            }}>
              <div className={isEditMode ? 'border-2 border-dashed border-orange-500 p-2' : ''}>
                <div className="text-xs text-white mb-1 text-center">
                  {isEditMode && `top: ${position.top}, left: ${position.left}, rot: ${position.rotation}`}
                </div>
                <Pump 
                  isRunning={pumpStates[pumpId]} 
                  label={pumpId === 'pump1' ? 'Bomba 1' : 'Bomba 2'}
                  onClick={() => handleComponentClick(`pump-${pumpId}`)}
                  rotation={position.rotation}
                />
              </div>
            </div>
          ))}

          {/* Instruments */}
          <div className="absolute" style={{ 
            top: `${componentPositions.instruments.temperature.top}px`, 
            left: `${componentPositions.instruments.temperature.left}px` 
          }}>
            <div className={isEditMode ? 'border-2 border-dashed border-indigo-500 p-2' : ''}>
              <div className="text-xs text-white mb-1 text-center">
                {isEditMode && `top: ${componentPositions.instruments.temperature.top}, left: ${componentPositions.instruments.temperature.left}`}
              </div>
              <InstrumentGauge
                tag="TIT-101"
                value={currentPhase === 'caustic' ? 75 : currentPhase === 'acid' ? 65 : 25}
                minValue={0}
                maxValue={100}
                unit="°C"
                onClick={() => handleComponentClick('instrument-temperature')}
              />
            </div>
          </div>

          <div className="absolute" style={{ 
            top: `${componentPositions.instruments.pressure.top}px`, 
            left: `${componentPositions.instruments.pressure.left}px` 
          }}>
            <div className={isEditMode ? 'border-2 border-dashed border-indigo-500 p-2' : ''}>
              <div className="text-xs text-white mb-1 text-center">
                {isEditMode && `top: ${componentPositions.instruments.pressure.top}, left: ${componentPositions.instruments.pressure.left}`}
              </div>
              <InstrumentGauge
                tag="PIT-101"
                value={pumpStates.pump1 ? 546.0 : 0}
                minValue={0}
                maxValue={700}
                unit="kPa"
                onClick={() => handleComponentClick('instrument-pressure')}
              />
            </div>
          </div>

          <div className="absolute" style={{ 
            top: `${componentPositions.instruments.flow.top}px`, 
            left: `${componentPositions.instruments.flow.left}px` 
          }}>
            <div className={isEditMode ? 'border-2 border-dashed border-indigo-500 p-2' : ''}>
              <div className="text-xs text-white mb-1 text-center">
                {isEditMode && `top: ${componentPositions.instruments.flow.top}, left: ${componentPositions.instruments.flow.left}`}
              </div>
              <InstrumentGauge
                tag="FIT-101"
                value={pumpStates.pump1 ? 1809 : 0}
                minValue={0}
                maxValue={2000}
                unit="L/s"
                onClick={() => handleComponentClick('instrument-flow')}
              />
            </div>
          </div>

          <div className="absolute" style={{ 
            top: `${componentPositions.instruments.level.top}px`, 
            left: `${componentPositions.instruments.level.left}px` 
          }}>
            <div className={isEditMode ? 'border-2 border-dashed border-indigo-500 p-2' : ''}>
              <div className="text-xs text-white mb-1 text-center">
                {isEditMode && `top: ${componentPositions.instruments.level.top}, left: ${componentPositions.instruments.level.left}`}
              </div>
              <InstrumentGauge
                tag="LIT-101"
                value={tankLevel}
                minValue={0}
                maxValue={100}
                unit="%"
                onClick={() => handleComponentClick('instrument-level')}
              />
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-slate-900 rounded-md p-2">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${isSystemRunning ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-white text-sm">Status: {isSystemRunning ? 'Em Operação' : 'Parado'}</span>
            </div>
            <div className="text-white text-sm">
              Fase: <span className="font-bold">{getPhaseName()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipSystemLayout;