import React from 'react';

interface PumpProps {
  isRunning: boolean | number; // booleano ou 0 = desligado, 1 = ligado, 2 = falha
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties; // Added style prop for positioning
  label?: string;
  rotation?: number; // Added rotation option (0, 90, 180, 270 degrees)
}

const Pump: React.FC<PumpProps> = ({ 
  isRunning, 
  onClick, 
  className, 
  style,
  label,
  rotation = 0
}) => {
  // Converter diferentes formatos de entrada para um formato padronizado
  const status = typeof isRunning === 'boolean' 
    ? (isRunning ? 1 : 0) 
    : isRunning;
  
  // Determinar cores com base no status
  const getColor = () => {
    switch(status) {
      case 0: return "#7886A0"; // cinza (desligado)
      case 1: return "#22FF00"; // verde (ligado)
      case 2: return "#FF0000"; // vermelho (falha)
      default: return "#7886A0"; // cinza (default)
    }
  };
  
  // Determinar texto de status para o tooltip
  const getStatusText = () => {
    switch(status) {
      case 0: return "Desligada";
      case 1: return "Ligada";
      case 2: return "Em falha";
      default: return "Desligada";
    }
  };
  
  // Cor principal e animação
  const pumpColor = getColor();
  const hasError = status === 2;

  return (
    <div 
      className={`relative cursor-pointer group ${className || ''} ${hasError ? 'animate-pulse' : ''}`}
      onClick={onClick}
      style={style}
    >
      {/* Pump SVG */}
      <svg 
        width="96" 
        height="76" 
        viewBox="0 0 96 76" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path 
          d="M0.999622 1.46192L56.5381 1.46191L56.5381 26.3081L0.999625 26.3081L0.999622 1.46192Z" 
          fill={pumpColor} 
          stroke="#4F4F50"
        />
        <circle 
          cx="38" 
          cy="38" 
          r="37.5" 
          transform="matrix(-1 8.74228e-08 8.74228e-08 1 96 0)" 
          fill={pumpColor} 
          stroke="#4F4F50"
        />
        <path 
          d="M50.5 37.5C50.5 41.9183 54.0817 45.5 58.5 45.5C62.9183 45.5 66.5 41.9183 66.5 37.5C66.5 33.0817 62.9183 29.5 58.5 29.5C54.0817 29.5 50.5 33.0817 50.5 37.5Z" 
          fill="#D9D9D9" 
          stroke="#4F4F50"
        />
      </svg>
      
      {/* Status indicator */}
      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
        status === 0 ? 'bg-gray-500' : 
        status === 1 ? 'bg-green-500' : 
        'bg-red-500 animate-pulse'
      }`}></div>
      
      {/* Label - adjusts based on rotation */}
      {label && (
        <div className={`absolute text-xs text-white mt-1 whitespace-nowrap ${
          rotation === 90 ? 'left-full ml-2 top-1/2 -translate-y-1/2' :
          rotation === 180 ? 'top-0 -mt-6 left-1/2 -translate-x-1/2' :
          rotation === 270 ? 'right-full mr-2 top-1/2 -translate-y-1/2' :
          'top-full left-1/2 -translate-x-1/2'
        }`}>
          {label}
        </div>
      )}
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10">
        {getStatusText()}
      </div>
      
      {/* Motor animation */}
      {status === 1 && (
        <div className="absolute top-8 left-12 w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Pump;