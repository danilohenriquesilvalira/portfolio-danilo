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
    return (
      <div 
        className={`absolute ${position} cursor-pointer group`}
        onClick={() => onValveClick(id)}
      >
        {/* Valve body */}
        <div 
          className={`w-12 h-12 rounded-full border-4 ${
            state ? 'border-green-500 bg-green-900' : 'border-gray-500 bg-gray-900'
          } flex items-center justify-center transition-colors duration-300`}
        >
          {/* Valve handle */}
          <div 
            className={`w-8 h-2 ${
              state ? 'bg-green-400' : 'bg-gray-400'
            } rounded transition-all duration-300`}
            style={{ 
              transform: state ? 'rotate(0deg)' : 'rotate(90deg)',
            }}
          ></div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
        </div>
        
        {/* Valve label */}
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
          {label}
        </div>
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