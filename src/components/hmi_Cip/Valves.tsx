import React from 'react';

interface ValvesProps {
  states: {
    v1: boolean;
    v2: boolean;
    v3: boolean;
    v4: boolean;
    v5: boolean;
    v6: boolean;
  };
  onValveClick: (valveId: string) => void;
}

const Valves: React.FC<ValvesProps> = ({ states, onValveClick }) => {
  // Helper function to render a valve
  const renderValve = (id: string, state: boolean, label: string, position: string) => {
    // Determinar a cor baseada no estado
    const color = state ? '#22FF00' : '#808080';
    
    return (
      <div 
        className={`absolute ${position} cursor-pointer group`}
        onClick={() => onValveClick(id)}
      >
        {/* Valve SVG */}
        <svg 
          width="45" 
          height="36" 
          viewBox="0 0 45 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <path 
            d="M6.125 15.8036L21.5025 24.7119L6.125 33.6202L6.125 15.8036Z" 
            fill={color} 
            stroke="black"
          />
          <path 
            d="M38.875 33.6202L23.4975 24.7119L38.875 15.8036L38.875 33.6202Z" 
            fill={color} 
            stroke="black"
          />
          <path 
            d="M22.5 24.7116L22.5 9.15234" 
            stroke="black"
          />
          <rect 
            x="12.6621" 
            y="0.5" 
            width="19.6757" 
            height="8.15251" 
            fill={color} 
            stroke="black"
          />
        </svg>
        
        {/* Hover effect */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        
        {/* Valve label */}
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
          {label}
        </div>
        
        {/* Status indicator */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
          state ? 'bg-green-500' : 'bg-gray-500'
        }`}></div>
      </div>
    );
  };

  return (
    <div className="relative w-[400px] h-full">
      {/* This is a container for all the valves */}
      
      {/* Supply valves (top) */}
      {renderValve('v1', states.v1, 'V1 - Água', 'top-20 left-20')}
      {renderValve('v2', states.v2, 'V2 - Cáustico', 'top-20 left-1/2 -translate-x-1/2')}
      {renderValve('v3', states.v3, 'V3 - Ácido', 'top-20 right-20')}
      
      {/* Process valves (bottom) */}
      {renderValve('v4', states.v4, 'V4 - Processo', 'bottom-40 left-20')}
      {renderValve('v5', states.v5, 'V5 - Retorno Cáustico', 'bottom-40 left-1/2 -translate-x-1/2')}
      {renderValve('v6', states.v6, 'V6 - Retorno Ácido', 'bottom-40 right-20')}
    </div>
  );
};

export default Valves;