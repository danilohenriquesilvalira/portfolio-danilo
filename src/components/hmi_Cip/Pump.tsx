import React, { useEffect, useState } from 'react';

interface PumpProps {
  isRunning: boolean;
  onClick: () => void;
}

const Pump: React.FC<PumpProps> = ({ isRunning, onClick }) => {
  const [rotation, setRotation] = useState(0);
  
  // Animate pump rotation when running
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 10) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div 
      className="relative cursor-pointer group"
      onClick={onClick}
    >
      {/* Pump body */}
      <div className="relative w-24 h-24 rounded-lg border-2 border-blue-600 bg-slate-800 flex items-center justify-center overflow-hidden">
        {/* Motor part */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gray-700 border-b border-gray-600"></div>
        
        {/* Pump impeller (rotating part) */}
        <div 
          className="w-16 h-16 rounded-full border-4 border-gray-500 relative flex items-center justify-center"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: isRunning ? 'none' : 'transform 0.5s ease-out' 
          }}
        >
          {/* Impeller blades */}
          <div className="absolute w-12 h-1 bg-gray-400 rounded"></div>
          <div className="absolute w-1 h-12 bg-gray-400 rounded"></div>
          <div className="absolute w-10 h-1 bg-gray-400 rounded transform rotate-45"></div>
          <div className="absolute w-1 h-10 bg-gray-400 rounded transform rotate-45"></div>
        </div>
        
        {/* Running indicator */}
        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
          isRunning ? 'bg-green-500' : 'bg-red-500'
        }`}></div>
        
        {/* Hover effect */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      
      {/* Pump label */}
      <div className="text-center mt-2 text-blue-400 text-sm font-medium">
        Bomba CIP {isRunning ? '(Ligada)' : '(Desligada)'}
      </div>
      
      {/* Connection points (visual only) */}
      <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-gray-500"></div>
      <div className="absolute top-1/2 -right-3 w-3 h-3 rounded-full bg-gray-500"></div>
    </div>
  );
};

export default Pump;