import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TransportSystem from '@/components/hmi_Transporte/TransportSystem';
import ParameterControls from '@/components/hmi_Transporte/ParameterControls';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Estados possíveis para um palete
type PalletState = {
  id: number;
  position: number; // Posição em pixels
  state: "entering" | "atSensor1" | "movingToSensor2" | "atSensor2" | "exiting" | "exited";
  stateStartTime: number; // Timestamp de quando entrou no estado atual
};

// Variantes de animação
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const HmiPage = () => {
  // Parâmetros ajustáveis
  const [transportSpeed, setTransportSpeed] = useState(2);
  const [customMoveDuration, setCustomMoveDuration] = useState(5000);
  const [customWaitDuration, setCustomWaitDuration] = useState(3000);

  // Diálogo de parâmetros
  const [showDialog, setShowDialog] = useState(false);

  // Controle do ciclo
  const [isCycleRunning, setIsCycleRunning] = useState(false);

  // Paletes no sistema
  const [pallets, setPallets] = useState<PalletState[]>([]);
  
  // Flags para controlar a sequência
  const [canReleasePallet2, setCanReleasePallet2] = useState(false);
  const [canReleasePallet3, setCanReleasePallet3] = useState(false);
  
  // Contador de paletes
  const nextPalletId = useRef(1);
  const totalPalletsCreated = useRef(0);
  const [palletCounter, setPalletCounter] = useState(0);

  // Posições fixas (em px) - Ajustadas para a direita
  const offsetX = 150; // Deslocamento geral para a direita
  const entryPoint = 0 + offsetX;
  const sensor1Pos = 400 + offsetX;
  const sensor2Pos = 800 + offsetX;
  const sensor3Pos = 1200 + offsetX; // Posição do novo sensor 3
  const exitPoint = 1600 + offsetX; // Ajustado para acomodar o terceiro transportador
  
  // Tamanho do palete (para garantir distância)
  const palletWidth = 200;

  // Função para iniciar o ciclo
  const startCycle = () => {
    setIsCycleRunning(true);
    const now = Date.now();
    
    // Adiciona o primeiro palete ao iniciar o ciclo
    if (pallets.length === 0) {
      const newPallet = {
        id: nextPalletId.current++,
        position: entryPoint,
        state: "entering" as const,
        stateStartTime: now
      };
      
      setPallets([newPallet]);
      totalPalletsCreated.current++;
      setPalletCounter(totalPalletsCreated.current);
    }
  };

  // Função para reiniciar o ciclo
  const restartCycle = () => {
    setIsCycleRunning(false);
    setPallets([]);
    setCanReleasePallet2(false);
    setCanReleasePallet3(false);
    nextPalletId.current = 1;
    totalPalletsCreated.current = 0;
    setPalletCounter(0);
    setTimeout(() => startCycle(), 100);
  };

  // Função para parar o ciclo
  const stopCycle = () => {
    setIsCycleRunning(false);
  };

  // Função para lidar com o clique no motor (parâmetro não utilizado)
  const handleMotorClick = (_motorId: number) => {
    setShowDialog(true);
  };

  // Atualiza o ciclo a cada 50ms
  useEffect(() => {
    if (!isCycleRunning) return;

    const interval = setInterval(() => {
      const now = Date.now();
      
      // Atualiza o estado de cada palete
      setPallets(prevPallets => {
        let updatedPallets = [...prevPallets];
        
        // Atualiza posição e estado de cada palete
        updatedPallets = updatedPallets.map(pallet => {
          let { position, state, stateStartTime } = pallet;
          let newState = state;
          let newStateStartTime = stateStartTime;
          
          if (state === "entering") {
            const elapsed = now - stateStartTime;
            const progress = elapsed / customMoveDuration;
            position = entryPoint + Math.min(progress, 1) * (sensor1Pos - entryPoint);
            if (progress >= 1) {
              newState = "atSensor1";
              newStateStartTime = now;
              setCanReleasePallet2(true);
            }
          } 
          else if (state === "atSensor1") {
            const elapsed = now - stateStartTime;
            if (elapsed >= customWaitDuration) {
              newState = "movingToSensor2";
              newStateStartTime = now;
            }
          }
          else if (state === "movingToSensor2") {
            const elapsed = now - stateStartTime;
            const progress = elapsed / customMoveDuration;
            position = sensor1Pos + Math.min(progress, 1) * (sensor2Pos - sensor1Pos);
            if (progress >= 1) {
              newState = "atSensor2";
              newStateStartTime = now;
              setCanReleasePallet3(true);
            }
          }
          else if (state === "atSensor2") {
            const elapsed = now - stateStartTime;
            if (elapsed >= customWaitDuration) {
              newState = "exiting";
              newStateStartTime = now;
            }
          }
          else if (state === "exiting") {
            const elapsed = now - stateStartTime;
            const progress = elapsed / customMoveDuration;
            position = sensor2Pos + Math.min(progress, 1) * (exitPoint - sensor2Pos);
            if (progress >= 1) {
              newState = "exited";
            }
          }
          
          return {
            ...pallet,
            position,
            state: newState,
            stateStartTime: newStateStartTime
          };
        });
        
        // Remove paletes que saíram completamente
        updatedPallets = updatedPallets.filter(p => p.state !== "exited");
        
        // Verifica se podemos adicionar novos paletes
        const hasSensor1Pallet = updatedPallets.some(p => p.state === "atSensor1" || p.state === "movingToSensor2");
        const hasEnteringPallet = updatedPallets.some(p => p.state === "entering");
        
        if (canReleasePallet2 && !hasEnteringPallet && !hasSensor1Pallet) {
          updatedPallets.push({
            id: nextPalletId.current++,
            position: entryPoint,
            state: "entering",
            stateStartTime: now
          });
          setCanReleasePallet2(false);
          totalPalletsCreated.current++;
          setPalletCounter(totalPalletsCreated.current);
        }
        else if (canReleasePallet3 && !hasEnteringPallet && !hasSensor1Pallet) {
          updatedPallets.push({
            id: nextPalletId.current++,
            position: entryPoint,
            state: "entering",
            stateStartTime: now
          });
          setCanReleasePallet3(false);
          totalPalletsCreated.current++;
          setPalletCounter(totalPalletsCreated.current);
        }
        
        return updatedPallets;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isCycleRunning, customMoveDuration, customWaitDuration, canReleasePallet2, canReleasePallet3]);

  // Status dos motores
  const motor1Ligado = pallets.some(p => p.state === "entering" || p.state === "movingToSensor2");
  const motor2Ligado = pallets.some(p => p.state === "movingToSensor2" || p.state === "exiting");
  const motor3Ligado = pallets.some(p => p.state === "exiting" && p.position > sensor2Pos + 100);

  // Cores dos motores
  const motor1Cor = motor1Ligado ? 'verde' as const : 'cinza' as const;
  const motor2Cor = motor2Ligado ? 'verde' as const : 'cinza' as const;
  const motor3Cor = motor3Ligado ? 'verde' as const : 'cinza' as const;

  // Status dos sensores
  const sensor1Ativo = pallets.some(p => p.state === "atSensor1");
  const sensor2Ativo = pallets.some(p => p.state === "atSensor2");
  const sensor3Ativo = pallets.some(p => p.state === "exiting" && Math.abs(p.position - sensor3Pos) < 20);

  return (
    <>
      <Navbar />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen pt-28 pb-16 relative bg-gradient-to-br from-primary via-primary to-tertiary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Botão de volta */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link to="/projeto/transporte-paletes" className="flex items-center gap-2 text-tech-blue hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center group-hover:bg-tech-blue transition-colors">
                <FaArrowLeft className="text-tech-blue group-hover:text-white transition-colors" />
              </div>
              <span>Voltar para Detalhes do Projeto</span>
            </Link>
          </motion.div>

          {/* Cabeçalho */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Simulação de Transporte de Paletes
            </h1>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Demonstração interativa de um sistema de automação para transporte de paletes com controle em tempo real.
            </p>
          </motion.div>

          <div className="bg-black-100 p-6 rounded-xl shadow-lg mb-10">
            {/* Dashboard redesenhado com cards modernos */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Card de Status do Sistema */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-tech-blue px-4 py-2 text-white font-medium">
                  Status do Sistema
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Ciclo:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isCycleRunning ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                      {isCycleRunning ? 'Em execução' : 'Parado'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Total de Paletes:</span>
                    <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">
                      {palletCounter}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Paletes Ativos:</span>
                    <span className="font-mono bg-black-200 px-3 py-1 rounded text-white">
                      {pallets.length}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Card de Status dos Transportadores */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden md:col-span-2">
                <div className="bg-industry-green px-4 py-2 text-white font-medium">
                  Status dos Transportadores
                </div>
                <div className="p-4 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${motor1Ligado ? 'bg-green-500' : 'bg-gray-700'} mb-2`}>
                      <span className="text-white font-bold">M1</span>
                    </div>
                    <span className={`text-xs ${motor1Ligado ? 'text-green-400' : 'text-gray-400'}`}>
                      {motor1Ligado ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${motor2Ligado ? 'bg-green-500' : 'bg-gray-700'} mb-2`}>
                      <span className="text-white font-bold">M2</span>
                    </div>
                    <span className={`text-xs ${motor2Ligado ? 'text-green-400' : 'text-gray-400'}`}>
                      {motor2Ligado ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${motor3Ligado ? 'bg-green-500' : 'bg-gray-700'} mb-2`}>
                      <span className="text-white font-bold">M3</span>
                    </div>
                    <span className={`text-xs ${motor3Ligado ? 'text-green-400' : 'text-gray-400'}`}>
                      {motor3Ligado ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Card de Status dos Sensores */}
              <div className="bg-gradient-to-br from-tertiary to-black-200 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-automation-orange px-4 py-2 text-white font-medium">
                  Status dos Sensores
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">S1:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${sensor1Ativo ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                      {sensor1Ativo ? 'Detectado' : 'Livre'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">S2:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${sensor2Ativo ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                      {sensor2Ativo ? 'Detectado' : 'Livre'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">S3:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${sensor3Ativo ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                      {sensor3Ativo ? 'Detectado' : 'Livre'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botão de Parâmetros */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowDialog(true)}
                className="px-4 py-2 bg-gradient-to-r from-tech-blue to-industry-green text-white rounded-lg hover:opacity-90 shadow-md transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Ajustar Parâmetros
              </button>
            </div>
            
            {/* Área de Transporte */}
            <div className="bg-black-200 p-2 rounded-xl shadow-xl mb-8">
              <TransportSystem
                offsetX={offsetX}
                entryPoint={entryPoint}
                sensor1Pos={sensor1Pos}
                sensor2Pos={sensor2Pos}
                sensor3Pos={sensor3Pos}
                exitPoint={exitPoint}
                palletWidth={palletWidth}
                pallets={pallets}
                sensor1Ativo={sensor1Ativo}
                sensor2Ativo={sensor2Ativo}
                sensor3Ativo={sensor3Ativo}
                motor1Cor={motor1Cor}
                motor2Cor={motor2Cor}
                motor3Cor={motor3Cor}
                onMotorClick={handleMotorClick}
              />
            </div>
            
            {/* Botões de controle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={startCycle}
                disabled={isCycleRunning}
                className={`w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isCycleRunning 
                    ? 'bg-blue-800 opacity-50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-tech-blue to-blue-600 hover:opacity-90'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Iniciar Ciclo
              </button>
              <button
                onClick={restartCycle}
                className="w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg bg-gradient-to-r from-industry-green to-green-600 hover:opacity-90 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Reiniciar Ciclo
              </button>
              <button
                onClick={stopCycle}
                disabled={!isCycleRunning}
                className={`w-40 py-3 rounded-lg text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                  !isCycleRunning 
                    ? 'bg-red-800 opacity-50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
                Parar Ciclo
              </button>
            </div>
          </div>
          
          {/* Explicação do Projeto */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Sobre o Sistema
            </h2>
            
            <div className="bg-black-100 p-8 rounded-xl shadow-lg mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">Como Funciona?</h3>
              <p className="text-secondary mb-6">
                Este sistema demonstra um transporte automático de paletes através de três estações de trabalho, utilizando sensores para detecção e motores para movimentação. 
                O sistema foi desenvolvido utilizando React e simula fielmente a lógica de controle de um PLC real.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Componentes do Sistema:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue mt-1"></div>
                      <div>
                        <p className="text-white font-medium">3 Transportadores</p>
                        <p className="text-secondary">Responsáveis pela movimentação dos paletes entre as estações.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-industry-green mt-1"></div>
                      <div>
                        <p className="text-white font-medium">3 Sensores</p>
                        <p className="text-secondary">Detectam a presença de paletes em pontos estratégicos do sistema.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-automation-orange mt-1"></div>
                      <div>
                        <p className="text-white font-medium">3 Motores</p>
                        <p className="text-secondary">Controlam a movimentação de cada transportador individualmente.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Sequência de Operação:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">1</div>
                      <p className="text-secondary">O primeiro palete entra no sistema e é transportado até o Sensor 1.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">2</div>
                      <p className="text-secondary">Após um tempo de espera no Sensor 1, o palete avança para o Sensor 2.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">3</div>
                      <p className="text-secondary">Após outro tempo de espera no Sensor 2, o palete segue para a saída, passando pelo Sensor 3.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">4</div>
                      <p className="text-secondary">Novos paletes são liberados automaticamente conforme a sequência de movimentação permite.</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          {/* Diálogo de Parâmetros */}
          <ParameterControls
            open={showDialog}
            onClose={() => setShowDialog(false)}
            transportSpeed={transportSpeed}
            customMoveDuration={customMoveDuration}
            customWaitDuration={customWaitDuration}
            setTransportSpeed={setTransportSpeed}
            setCustomMoveDuration={setCustomMoveDuration}
            setCustomWaitDuration={setCustomWaitDuration}
          />
        </div>
      </motion.div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HmiPage;
