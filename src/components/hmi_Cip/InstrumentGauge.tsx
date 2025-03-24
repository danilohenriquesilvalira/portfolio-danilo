import React, { useMemo } from 'react';

interface InstrumentGaugeProps {
  // Tipo de instrumento (PIT, FIT, TIT, etc.)
  type: string;
  
  // Valor atual do instrumento
  value: number;
  
  // Valores de escala
  minValue: number;
  maxValue: number;
  
  // Valores aceitáveis (determinam as cores)
  acceptableMin?: number;
  acceptableMax?: number;
  
  // Unidade de medida (°C, psi, etc.)
  unit: string;
  
  // Dimensões personalizáveis
  width?: number;
  height?: number;
  
  // Props opcionais
  showLabels?: boolean;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Componente para visualização de instrumentos com indicação de escala e status
 */
const InstrumentGauge: React.FC<InstrumentGaugeProps> = ({
  type,
  value,
  minValue,
  maxValue,
  acceptableMin,
  acceptableMax,
  unit,
  width = 35,
  height = 167,
  showLabels = true,
  showArrow = true,
  className = '',
  onClick
}) => {
  // Definir valores aceitáveis padrão se não forem fornecidos
  const actualAcceptableMin = acceptableMin ?? minValue;
  const actualAcceptableMax = acceptableMax ?? maxValue;
  
  // Garantir que o valor esteja dentro dos limites da escala
  const clampedValue = Math.max(minValue, Math.min(maxValue, value));
  
  // Calcular a posição vertical da seta e preenchimento
  const valueRange = maxValue - minValue;
  const valuePosition = (1 - ((clampedValue - minValue) / valueRange)) * 0.8 * height + 0.1 * height;
  
  // Calcular os valores para as cores de preenchimento
  const normalizedValue = (clampedValue - minValue) / valueRange;
  const normalizedAcceptableMin = (actualAcceptableMin - minValue) / valueRange;
  const normalizedAcceptableMax = (actualAcceptableMax - minValue) / valueRange;
  
  // Determinar a cor com base nos limiares
  const getColor = (value: number, min: number, max: number): string => {
    const deviation = (max - min) * 0.1; // 10% de desvio
    
    if (value <= max) return '#87CEEB'; // Azul para valores aceitáveis
    if (value <= max + deviation) return '#FFD700'; // Amarelo para desvio até 10%
    return '#FF6347'; // Vermelho para desvio maior que 10%
  };
  
  // Calcular as alturas dos segmentos coloridos
  const segments = useMemo(() => {
    // Altura total do medidor (excluindo uma pequena margem)
    const gaugeHeight = height * 0.8;
    const startY = height * 0.1;
    
    // Calcular os limites de cada segmento
    const top = startY;
    const bottom = startY + gaugeHeight;
    
    // Definir segmento mínimo (abaixo do aceitável)
    const minSegment = {
      y: bottom - (normalizedAcceptableMin * gaugeHeight),
      height: normalizedAcceptableMin * gaugeHeight,
      color: '#D3D3D3' // Cinza claro
    };
    
    // Segmento aceitável (entre min e max aceitáveis)
    const normalSegment = {
      y: bottom - (normalizedAcceptableMax * gaugeHeight),
      height: (normalizedAcceptableMax - normalizedAcceptableMin) * gaugeHeight,
      color: '#87CEEB' // Azul claro
    };
    
    // Segmento de alerta (10% acima do aceitável)
    const deviation = (normalizedAcceptableMax - normalizedAcceptableMin) * 0.1;
    const warningSegment = {
      y: bottom - ((normalizedAcceptableMax + deviation) * gaugeHeight),
      height: deviation * gaugeHeight,
      color: '#FFD700' // Amarelo
    };
    
    // Segmento crítico (acima de 10% do aceitável)
    const criticalSegment = {
      y: top,
      height: (normalizedAcceptableMax + deviation < 1) 
        ? (1 - normalizedAcceptableMax - deviation) * gaugeHeight
        : 0,
      color: '#FF6347' // Vermelho
    };
    
    return { minSegment, normalSegment, warningSegment, criticalSegment, top, bottom, gaugeHeight };
  }, [height, normalizedAcceptableMin, normalizedAcceptableMax]);
  
  // Calcular a altura do preenchimento
  const fillHeight = (1 - normalizedValue) * segments.gaugeHeight;
  const fillY = segments.top + fillHeight;
  
  // Cor atual do valor
  const currentColor = getColor(clampedValue, actualAcceptableMin, actualAcceptableMax);
  
  return (
    <div 
      className={`relative ${className}`}
      onClick={onClick}
      style={{width: `${width + 60}px`, height: `${height + 40}px`}}
    >
      {/* Título do instrumento */}
      <div className="absolute text-center font-bold text-gray-700" style={{top: 0, left: 0, width: width + 60}}>
        {type}
      </div>
      
      <svg 
        width={width + 60} 
        height={height + 20} 
        viewBox={`0 0 ${width + 60} ${height + 20}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-5"
      >
        {/* Retângulo principal (escala) */}
        <rect 
          x={width / 2 + 5} 
          y={segments.top} 
          width={width - 10} 
          height={segments.gaugeHeight} 
          stroke="black" 
          fill="none"
        />
        
        {/* Segmentos coloridos de fundo */}
        {/* Segmento Mínimo */}
        <rect 
          x={width / 2 + 5} 
          y={segments.minSegment.y} 
          width={width - 10} 
          height={segments.minSegment.height} 
          fill={segments.minSegment.color} 
          stroke="none" 
        />
        
        {/* Segmento Normal */}
        <rect 
          x={width / 2 + 5} 
          y={segments.normalSegment.y} 
          width={width - 10} 
          height={segments.normalSegment.height} 
          fill={segments.normalSegment.color} 
          stroke="none" 
        />
        
        {/* Segmento de Alerta */}
        <rect 
          x={width / 2 + 5} 
          y={segments.warningSegment.y} 
          width={width - 10} 
          height={segments.warningSegment.height} 
          fill={segments.warningSegment.color} 
          stroke="none" 
        />
        
        {/* Segmento Crítico */}
        <rect 
          x={width / 2 + 5} 
          y={segments.criticalSegment.y} 
          width={width - 10} 
          height={segments.criticalSegment.height} 
          fill={segments.criticalSegment.color} 
          stroke="none" 
        />
        
        {/* Seta indicadora */}
        {showArrow && (
          <path 
            d={`M5.5 ${valuePosition}L${width / 2} ${valuePosition - 5}L${width / 2} ${valuePosition + 5}L5.5 ${valuePosition}Z`} 
            fill="#79797A" 
            stroke="black" 
            strokeWidth="0.5"
          />
        )}
        
        {/* Valor atual */}
        <text 
          x={width + 15} 
          y={valuePosition + 5} 
          fontSize="14" 
          fontWeight="bold" 
          fill="#0000AA"
        >
          {value}
        </text>
        
        {/* Marcações de escala */}
        {showLabels && (
          <>
            {/* Valor máximo */}
            <text 
              x={width + 15} 
              y={segments.top + 5} 
              fontSize="12" 
              fill="#444"
            >
              {maxValue}
            </text>
            
            {/* Valor aceitável máximo */}
            <text 
              x={width + 15} 
              y={segments.normalSegment.y + 5} 
              fontSize="12" 
              fill="#444"
            >
              {actualAcceptableMax}
            </text>
            
            {/* Valor aceitável mínimo (se diferente do mínimo) */}
            {actualAcceptableMin !== minValue && (
              <text 
                x={width + 15} 
                y={segments.minSegment.y + 5} 
                fontSize="12" 
                fill="#444"
              >
                {actualAcceptableMin}
              </text>
            )}
            
            {/* Valor mínimo */}
            <text 
              x={width + 15} 
              y={segments.bottom + 5} 
              fontSize="12" 
              fill="#444"
            >
              {minValue}
            </text>
          </>
        )}
        
        {/* Unidade de medida */}
        <text 
          x={width / 2 + (width - 10) / 2} 
          y={segments.bottom + 20} 
          fontSize="12" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="#444"
        >
          {unit}
        </text>
      </svg>
    </div>
  );
};

export default InstrumentGauge;