import React from 'react';

interface TankProps {
  level: number; // 0-100% do nível do tanque
  color?: string; // cor do líquido
  label?: string; // label do tanque
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties; // Additional style for positioning
}

const Tank: React.FC<TankProps> = ({ 
  level, 
  color = '#3B82F6', // azul padrão 
  label, 
  onClick,
  className,
  style
}) => {
  // Garantir que o nível esteja entre 0 e 100
  const normalizedLevel = Math.max(0, Math.min(100, level));
  
  // Calcular a altura do preenchimento baseado no nível
  // 295 é aproximadamente a altura útil interna do tanque
  const fillHeight = (normalizedLevel / 100) * 295;
  const fillY = 336 - fillHeight; // posição Y de onde o preenchimento começa (de baixo para cima)
  
  // Determinar a classe de cor baseada no nível do tanque
  const getLevelColorClass = () => {
    if (normalizedLevel < 20) return 'text-red-500';
    if (normalizedLevel < 40) return 'text-orange-500';
    return 'text-green-500';
  };

  return (
    <div 
      className={`relative cursor-pointer group ${className || ''}`}
      onClick={onClick}
      style={style}
    >
      <div className="relative">
        {/* Container do tanque */}
        <svg 
          width="184" 
          height="358" 
          viewBox="0 0 184 358" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Preenchimento do tanque */}
          <path 
            d={`M2 ${fillY}V333.979L91.5009 356L182 333.979V${fillY}H2Z`} 
            fill={color}
            opacity="0.7"
          >
            {/* Animação de ondulação do líquido */}
            <animate
              attributeName="d"
              values={`M2 ${fillY}V333.979L91.5009 356L182 333.979V${fillY}H2Z;
                      M2 ${fillY+3}V333.979L91.5009 356L182 333.979V${fillY+3}H2Z;
                      M2 ${fillY}V333.979L91.5009 356L182 333.979V${fillY}H2Z`}
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Contorno do tanque */}
          <path 
            d="M1 20.6843V333.979L91.5009 356L183 333.979V20.6843L91.5009 2L1 20.6843Z" 
            stroke="black" 
            strokeWidth="2"
            fill="none"
          />
        </svg>
        
        {/* Indicador de nível no centro do tanque */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 px-3 py-2 rounded-lg text-center">
          <div className={`text-xl font-bold ${getLevelColorClass()}`}>
            {normalizedLevel}%
          </div>
        </div>
      </div>
      
      {/* Label do tanque */}
      {label && (
        <div className="text-center text-white font-medium mt-2">{label}</div>
      )}
      
      {/* Alerta para nível baixo */}
      {normalizedLevel < 20 && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-xs">!</span>
        </div>
      )}
    </div>
  );
};

export default Tank;