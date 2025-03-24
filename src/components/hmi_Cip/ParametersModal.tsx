import React from 'react';

interface CipParameters {
  temperature: number;
  flowRate: number;
  cleaningTime: number;
}

interface ParametersModalProps {
  isOpen: boolean;
  onClose: () => void;
  cipParameters: CipParameters;
  updateParameters: (params: Partial<CipParameters>) => void;
}

const ParametersModal: React.FC<ParametersModalProps> = ({
  isOpen,
  onClose,
  cipParameters,
  updateParameters
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-tertiary rounded-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-white mb-6">Ajustar Parâmetros</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Temperatura (°C)</label>
            <input 
              type="range"
              min="50"
              max="95"
              value={cipParameters.temperature}
              onChange={(e) => updateParameters({ temperature: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>50°C</span>
              <span>{cipParameters.temperature}°C</span>
              <span>95°C</span>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Vazão (L/min)</label>
            <input 
              type="range"
              min="60"
              max="200"
              value={cipParameters.flowRate}
              onChange={(e) => updateParameters({ flowRate: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>60 L/min</span>
              <span>{cipParameters.flowRate} L/min</span>
              <span>200 L/min</span>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Tempo de Limpeza (min)</label>
            <input 
              type="range"
              min="15"
              max="60"
              value={cipParameters.cleaningTime}
              onChange={(e) => updateParameters({ cleaningTime: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>15 min</span>
              <span>{cipParameters.cleaningTime} min</span>
              <span>60 min</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-tech-blue text-white rounded-md"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParametersModal;