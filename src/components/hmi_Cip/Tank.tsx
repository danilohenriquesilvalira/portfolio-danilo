import React from 'react';

interface TankProps {
  level: number; // 0-100% do nível do tanque
  color?: string; // cor do líquido
  label?: string; // label do tanque
  onClick?: () => void;
  className?: string;
}

const Tank: React.FC<TankProps> = ({ 
  level, 
  color = '#3B82F6', // azul padrão 
  label, 
  onClick,
  className 
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
          
          {/* Linhas de medição */}
          <line x1="15" y1="333" x2="25" y2="333" stroke="#888" strokeWidth="1" />
          <line x1="15" y1="270" x2="25" y2="270" stroke="#888" strokeWidth="1" />
          <line x1="15" y1="207" x2="25" y2="207" stroke="#888" strokeWidth="1" />
          <line x1="15" y1="144" x2="25" y2="144" stroke="#888" strokeWidth="1" />
          <line x1="15" y1="81" x2="25" y2="81" stroke="#888" strokeWidth="1" />
          
          {/* Textos das medições (0%, 25%, 50%, 75%, 100%) */}
          <text x="30" y="336" fill="#888" fontSize="10">0%</text>
          <text x="30" y="273" fill="#888" fontSize="10">25%</text>
          <text x="30" y="210" fill="#888" fontSize="10">50%</text>
          <text x="30" y="147" fill="#888" fontSize="10">75%</text>
          <text x="30" y="84" fill="#888" fontSize="10">100%</text>
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
      
      {/* Tooltip com detalhes */}
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        Nível: {normalizedLevel}%
      </div>
      
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