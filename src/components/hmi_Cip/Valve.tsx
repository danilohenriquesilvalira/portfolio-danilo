import React from 'react';

interface ValveProps {
  status: 0 | 1 | 2; // 0: desligado, 1: ligado, 2: em falha
  onClick?: () => void;
  label?: string;
  className?: string;
}

const Valve: React.FC<ValveProps> = ({ status, onClick, label, className }) => {
  // Determinar a cor baseada no status
  const getColor = () => {
    switch (status) {
      case 0: return "#808080"; // cinza - desligado
      case 1: return "#22FF00"; // verde - ligado
      case 2: return "#FF0000"; // vermelho - em falha
      default: return "#808080";
    }
  };

  return (
    <div 
      className={`relative ${className || ''}`}
      onClick={onClick}
    >
      <svg 
        width="45" 
        height="36" 
        viewBox="0 0 45 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${status === 2 ? 'animate-pulse' : ''}`}
      >
        <path 
          d="M6.125 15.8036L21.5025 24.7119L6.125 33.6202L6.125 15.8036Z" 
          fill={getColor()} 
          stroke="black"
        />
        <path 
          d="M38.875 33.6202L23.4975 24.7119L38.875 15.8036L38.875 33.6202Z" 
          fill={getColor()} 
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
          fill={getColor()} 
          stroke="black"
        />
      </svg>

      {/* Label da válvula */}
      {label && (
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
          {label}
        </div>
      )}
    </div>
  );
};

export default Valve;