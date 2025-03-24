// src/components/hmi/ParameterControls.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ParameterControlsProps {
  open: boolean;
  onClose: () => void;
  transportSpeed: number;
  customMoveDuration: number;
  customWaitDuration: number;
  setTransportSpeed: (value: number) => void;
  setCustomMoveDuration: (value: number) => void;
  setCustomWaitDuration: (value: number) => void;
}

const ParameterControls: React.FC<ParameterControlsProps> = ({
  open,
  onClose,
  transportSpeed,
  customMoveDuration,
  customWaitDuration,
  setTransportSpeed,
  setCustomMoveDuration,
  setCustomWaitDuration
}) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  const handleTransportSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransportSpeed(Number(e.target.value));
  };

  const handleMoveDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomMoveDuration(Number(e.target.value));
  };

  const handleWaitDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomWaitDuration(Number(e.target.value));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl max-w-md w-full p-6 relative"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Ajustar Parâmetros</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Velocidade do transportador */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Velocidade do Transportador: <span className="text-primary-400">{transportSpeed}</span>
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">1</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={transportSpeed}
                    onChange={handleTransportSpeedChange}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-gray-400">5</span>
                </div>
              </div>

              {/* Duração do movimento */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Duração do Movimento: <span className="text-primary-400">{customMoveDuration}ms</span>
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">1000</span>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={customMoveDuration}
                    onChange={handleMoveDurationChange}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-gray-400">10000</span>
                </div>
              </div>

              {/* Duração da espera */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Duração da Espera: <span className="text-primary-400">{customWaitDuration}ms</span>
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">1000</span>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={customWaitDuration}
                    onChange={handleWaitDurationChange}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-gray-400">10000</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 shadow-lg transition-all"
                >
                  Aplicar Parâmetros
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParameterControls;