import React from 'react';

interface TanksProps {
  levels: {
    water: number;
    caustic: number;
    acid: number;
  };
  onTankClick: (tankId: 'water' | 'caustic' | 'acid') => void;
}

const Tanks: React.FC<TanksProps> = ({ levels, onTankClick }) => {
  return (
    <div className="flex flex-col justify-center h-full w-[200px]">
      {/* Water Tank */}
      <div 
        className="mb-8 cursor-pointer group"
        onClick={() => onTankClick('water')}
      >
        <div className="text-center mb-1 text-blue-400 text-sm font-medium">Água</div>
        <div className="relative w-full h-28 border-2 border-blue-500 rounded-md bg-slate-700 overflow-hidden">
          {/* Tank level fill */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-500"
            style={{ height: `${levels.water}%`, opacity: 0.8 }}
          ></div>
          
          {/* Level indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{levels.water}%</span>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      </div>
      
      {/* Caustic Tank */}
      <div 
        className="mb-8 cursor-pointer group"
        onClick={() => onTankClick('caustic')}
      >
        <div className="text-center mb-1 text-yellow-400 text-sm font-medium">Cáustico</div>
        <div className="relative w-full h-28 border-2 border-yellow-500 rounded-md bg-slate-700 overflow-hidden">
          {/* Tank level fill */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-yellow-500 transition-all duration-500"
            style={{ height: `${levels.caustic}%`, opacity: 0.8 }}
          ></div>
          
          {/* Level indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{levels.caustic}%</span>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      </div>
      
      {/* Acid Tank */}
      <div 
        className="cursor-pointer group"
        onClick={() => onTankClick('acid')}
      >
        <div className="text-center mb-1 text-red-400 text-sm font-medium">Ácido</div>
        <div className="relative w-full h-28 border-2 border-red-500 rounded-md bg-slate-700 overflow-hidden">
          {/* Tank level fill */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-red-500 transition-all duration-500"
            style={{ height: `${levels.acid}%`, opacity: 0.8 }}
          ></div>
          
          {/* Level indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{levels.acid}%</span>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
};

export default Tanks;