import React from 'react';

interface ControlButtonsProps {
  isSystemRunning: boolean;
  startCycle: () => void;
  stopCycle: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isSystemRunning,
  startCycle,
  stopCycle
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        onClick={startCycle}
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
        onClick={startCycle}
        disabled={isSystemRunning}
        className={`w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
          isSystemRunning 
            ? 'bg-green-800 opacity-50 cursor-not-allowed' 
            : 'bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
        Reiniciar Ciclo
      </button>
      
      <button
        onClick={stopCycle}
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
  );
};

export default ControlButtons;