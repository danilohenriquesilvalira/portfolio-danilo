import React from 'react';

interface InstrumentGaugeProps {
  // Tag do instrumento
  tag: string;
  
  // Valor atual e limites
  value: number;
  minValue: number;
  maxValue: number;
  
  // Limites para alertas e alarmes
  warningLow?: number;
  warningHigh?: number;
  alarmLow?: number;
  alarmHigh?: number;
  
  // Unidade
  unit: string;
  
  // Props de estilo
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  backgroundColor?: string;
  
  // Callback
  onClick?: () => void;
}

const InstrumentGauge: React.FC<InstrumentGaugeProps> = ({
  tag,
  value,
  minValue, 
  maxValue,
  warningLow,
  warningHigh,
  alarmLow,
  alarmHigh,
  unit,
  width = 35,
  height = 167,
  style,
  className = '',
  backgroundColor = '#1e293b',
  onClick
}) => {
  // Calcular a posição do ponteiro triangular
  const range = maxValue - minValue;
  const percentage = (value - minValue) / range;
  const invertedPercentage = 1 - percentage; // 0 no topo, 1 na base
  
  // Posição Y do triângulo
  const pointerY = Math.max(0, Math.min(1, invertedPercentage)) * (height - 26) + 13;
  
  // Altura do preenchimento
  const fillHeight = Math.max(0, Math.min(100, percentage * 100));
  
  // Determinar o estado do instrumento
  const getStatus = () => {
    // Verificar alarmes (prioridade mais alta)
    if (alarmLow !== undefined && value <= alarmLow) return 'alarm';
    if (alarmHigh !== undefined && value >= alarmHigh) return 'alarm';
    
    // Verificar alertas (prioridade média)
    if (warningLow !== undefined && value <= warningLow) return 'warning';
    if (warningHigh !== undefined && value >= warningHigh) return 'warning';
    
    // Normal
    return 'normal';
  };
  
  // Obter a cor com base no status
  const getFillColor = () => {
    const status = getStatus();
    if (status === 'alarm') return '#ff0000'; // Vermelho para alarme
    if (status === 'warning') return '#ffcc00'; // Amarelo para alerta
    return '#3498db'; // Azul para normal
  };
  
  // Obter a cor do texto com base no status
  const getTextColor = () => {
    const status = getStatus();
    if (status === 'alarm') return '#ff0000'; // Vermelho para alarme
    if (status === 'warning') return '#ffcc00'; // Amarelo para alerta
    return '#3498db'; // Azul para normal
  };
  
  return (
    <div 
      className={`relative ${className}`} 
      style={style}
      onClick={onClick}
    >
      {/* Tag do instrumento */}
      <div className="text-center font-bold mb-1 text-white">{tag}</div>
      
      <div className="flex items-center">
        {/* SVG contendo o triângulo e o retângulo */}
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo do retângulo */}
          <path d={`M${width-13} ${height-0.5}V1H${width-1}V${height-0.5}H${width-13}Z`} fill={backgroundColor} stroke="black"/>
          
          {/* Preenchimento colorido */}
          <rect 
            x={width-13} 
            y={height-(height-2)*(fillHeight/100)} 
            width={12} 
            height={(height-2)*(fillHeight/100)} 
            fill={getFillColor()} 
          />
          
          {/* Borda do retângulo */}
          <path d={`M${width-13} ${height-0.5}V1H${width-1}V${height-0.5}H${width-13}Z`} stroke="black" fill="none"/>
          
          {/* Triângulo indicador */}
          <path 
            d={`M5.5 ${pointerY-6.5}L${width-15} ${pointerY}L5.5 ${pointerY+6.5}L5.5 ${pointerY-6.5}Z`} 
            fill="#79797A" 
            stroke="black" 
            strokeWidth="0.5"
          />
        </svg>
        
        {/* Valores à direita */}
        <div className="ml-1">
          <div className="text-xs text-white">{maxValue}</div>
          <div 
            className="text-xs font-bold"
            style={{ 
              marginTop: pointerY - 18,
              color: getTextColor()
            }}
          >
            {value}
          </div>
          <div className="text-xs text-white" style={{ marginTop: height - pointerY - 32 }}>{minValue}</div>
        </div>
      </div>
      
      {/* Unidade */}
      <div className="text-center text-xs mt-1 text-gray-400">{unit}</div>
    </div>
  );
};

export default InstrumentGauge;