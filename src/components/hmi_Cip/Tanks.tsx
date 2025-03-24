import React from 'react';
import Tank from './Tank';

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
      <div className="mb-4">
        <Tank 
          level={levels.water}
          color="#3B82F6" // Azul para água
          label="Água"
          onClick={() => onTankClick('water')}
          className="transform scale-50 origin-top"
        />
      </div>
      
      {/* Caustic Tank */}
      <div className="mb-4">
        <Tank 
          level={levels.caustic}
          color="#F59E0B" // Amarelo para solução cáustica
          label="Cáustico"
          onClick={() => onTankClick('caustic')}
          className="transform scale-50 origin-top"
        />
      </div>
      
      {/* Acid Tank */}
      <div>
        <Tank 
          level={levels.acid}
          color="#EF4444" // Vermelho para solução ácida
          label="Ácido"
          onClick={() => onTankClick('acid')}
          className="transform scale-50 origin-top"
        />
      </div>
    </div>
  );
};

export default Tanks;