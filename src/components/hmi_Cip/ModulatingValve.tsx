import React from 'react';

interface ModulatingValveProps {
  status: 0 | 1 | 2; // 0: inactive (gray), 1: active (green), 2: error (red)
  onClick?: () => void;
  label?: string;
  className?: string;
}

const ModulatingValve: React.FC<ModulatingValveProps> = ({ 
  status, 
  onClick, 
  label, 
  className 
}) => {
  // Determine color based on status
  const getColor = () => {
    switch(status) {
      case 0: return "#808080"; // gray - inactive
      case 1: return "#00FF09"; // green - active
      case 2: return "#FF0000"; // red - error
      default: return "#808080"; // default to gray
    }
  };

  // Get status text for tooltip
  const getStatusText = () => {
    switch(status) {
      case 0: return "Fechada";
      case 1: return "Aberta";
      case 2: return "Em falha";
      default: return "Desconhecida";
    }
  };

  const color = getColor();
  const hasError = status === 2;

  return (
    <div 
      className={`relative cursor-pointer group ${className || ''} ${hasError ? 'animate-pulse' : ''}`}
      onClick={onClick}
    >
      {/* Modulating Valve SVG */}
      <svg 
        width="46" 
        height="45" 
        viewBox="0 0 46 45" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <path 
          d="M20.366 6.18897L11.3784 21.7559L2.39087 6.18896L20.366 6.18897Z" 
          fill={color} 
          stroke="black"
        />
        <path 
          d="M2.39038 38.1255L11.3779 22.5586L20.3655 38.1255H2.39038Z" 
          fill={color} 
          stroke="black"
        />
        <path 
          d="M11.3775 22.1562L28.145 22.1562" 
          stroke="black"
        />
        <path 
          d="M28.302 34.6805L28.302 8.99121C28.302 8.99121 40.5044 10.1589 40.5044 21.8359C40.5044 33.5128 28.302 34.6805 28.302 34.6805Z" 
          fill={color} 
          stroke="black"
        />
        <path 
          d="M11.925 22.4785L29.964 40.5175C30.339 40.8926 30.8478 41.1033 31.3782 41.1033L43 41.1033C44.1046 41.1033 45 40.2078 45 39.1033L45 24.4785C45 23.3739 44.1046 22.4785 43 22.4785L40.1833 22.4785" 
          stroke="black"
        />
      </svg>
      
      {/* Status indicator */}
      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
        status === 0 ? 'bg-gray-500' : 
        status === 1 ? 'bg-green-500' : 
        'bg-red-500 animate-pulse'
      }`}></div>
      
      {/* Label */}
      {label && (
        <div className="text-center text-xs text-white mt-1">{label}</div>
      )}
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10">
        Válvula Moduladora: {getStatusText()}
      </div>
    </div>
  );
};

export default ModulatingValve;