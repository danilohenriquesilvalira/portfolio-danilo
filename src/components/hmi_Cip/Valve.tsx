import React from 'react';

interface ValveProps {
  status: 0 | 1 | 2; // 0: desligado, 1: ligado, 2: em falha
  onClick?: () => void;
  label?: string;
  className?: string;
  style?: React.CSSProperties; // Added style prop for positioning
  rotation?: number; // Added rotation option (0, 90, 180, 270 degrees)
}

const Valve: React.FC<ValveProps> = ({ 
  status, 
  onClick, 
  label, 
  className,
  style,
  rotation = 0
}) => {
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
      style={style}
    >
      <svg 
        width="45" 
        height="36" 
        viewBox="0 0 45 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer transition-transform ${status === 2 ? 'animate-pulse' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
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

      {/* Label da válvula - adjusts based on rotation */}
      {label && (
        <div className={`absolute mt-1 text-xs text-gray-300 whitespace-nowrap ${
          rotation === 90 ? 'left-full ml-2 top-1/2 -translate-y-1/2' : 
          rotation === 180 ? 'top-0 -mt-6 left-1/2 -translate-x-1/2' : 
          rotation === 270 ? 'right-full mr-2 top-1/2 -translate-y-1/2' : 
          'top-full left-1/2 -translate-x-1/2'
        }`}>
          {label}
        </div>
      )}
    </div>
  );
};

export default Valve;