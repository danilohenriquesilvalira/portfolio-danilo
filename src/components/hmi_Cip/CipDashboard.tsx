import React from 'react';

interface CipParameters {
  temperature: number;
  flowRate: number;
  cleaningTime: number;
}

interface CipDashboardProps {
  isSystemRunning: boolean;
  currentPhase: string;
  phaseTime: number;
  cipParameters: CipParameters;
  tankLevel: number;
  pumpStates: {
    pump1: boolean;
    pump2: boolean;
  };
  modulatingValveStates: {
    [key: string]: 0 | 1 | 2;
  };
  getPhaseName: () => string;
  getValveStatusText: (status: number) => string;
}

const CipDashboard: React.FC<CipDashboardProps> = ({
  isSystemRunning,
  currentPhase,
  phaseTime,
  cipParameters,
  tankLevel,
  pumpStates,
  modulatingValveStates,
  getPhaseName,
  getValveStatusText
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        <div className="p-4 grid grid-cols-4 gap-4">
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
          
          {/* Status da válvula moduladora principal */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-200 mb-2">
              <span className={`font-bold ${
                modulatingValveStates.mv1 === 0 ? 'text-gray-500' : 
                modulatingValveStates.mv1 === 1 ? 'text-green-500' : 
                'text-red-500'
              }`}>VM1</span>
            </div>
            <span className="text-xs text-secondary">
              {getValveStatusText(modulatingValveStates.mv1)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Card de Bombas e Componentes */}
      <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-automation-orange px-4 py-2 text-white font-medium">
          Estado dos Componentes
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-white">Bomba 1:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${pumpStates.pump1 ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
              {pumpStates.pump1 ? 'Ativa' : 'Inativa'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white">Bomba 2:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${pumpStates.pump2 ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
              {pumpStates.pump2 ? 'Ativa' : 'Inativa'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white">Tanque:</span>
            <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">{tankLevel.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipDashboard;