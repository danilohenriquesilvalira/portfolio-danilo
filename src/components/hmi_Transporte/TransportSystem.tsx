// src/components/hmi/TransportSystem.tsx
import React from 'react';

// Importações dos componentes
import Motors from "@/components/hmi_Transporte/Motors";
import Pallets from "@/components/hmi_Transporte/Pallets";
import Sensors from "@/components/hmi_Transporte/Sensors";

// Em vez de importar SVGs diretamente, use caminhos URL para a pasta public
// Não precisamos importar arquivos da pasta public - usamos os caminhos diretos
const transporteSVGPath = "/portfolio-danilo/hmi_Transporte/transporters/Transporte.svg";
const transporte2SVGPath = "/portfolio-danilo/hmi_Transporte/transporters/Transporte2.svg";
const transporte3SVGPath = "/portfolio-danilo/hmi_Transporte/transporters/Transporte3.svg";

type PalletState = {
  id: number;
  position: number;
  state: "entering" | "atSensor1" | "movingToSensor2" | "atSensor2" | "exiting" | "exited";
  stateStartTime: number;
};

type TransportSystemProps = {
  offsetX: number;
  entryPoint: number;
  sensor1Pos: number;
  sensor2Pos: number;
  sensor3Pos: number;
  exitPoint: number;
  palletWidth: number;
  pallets: PalletState[];
  sensor1Ativo: boolean;
  sensor2Ativo: boolean;
  sensor3Ativo: boolean;
  motor1Cor: 'cinza' | 'vermelho' | 'verde' | 'azul';
  motor2Cor: 'cinza' | 'vermelho' | 'verde' | 'azul';
  motor3Cor: 'cinza' | 'vermelho' | 'verde' | 'azul';
  onMotorClick: (motorId: number) => void;
};

const TransportSystem: React.FC<TransportSystemProps> = ({
  offsetX,
  entryPoint,
  sensor1Pos,
  sensor2Pos,
  sensor3Pos,
  exitPoint,
  palletWidth,
  pallets,
  sensor1Ativo,
  sensor2Ativo,
  sensor3Ativo,
  motor1Cor,
  motor2Cor,
  motor3Cor,
  onMotorClick
}) => {
  // Usando entryPoint para evitar o warning "declared but never read"
  const systemWidth = exitPoint - entryPoint + 300;
  
  return (
    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 relative h-96 flex justify-start items-center overflow-x-auto">
      <div style={{ position: "relative", width: `${systemWidth}px`, height: "100%" }}>
        {/* Transportadores - Posicionados com deslocamento */}
        <div className="flex absolute left-0 top-1/2 transform -translate-y-1/2" style={{ left: `${offsetX - 140}px` }}>
          <img src={transporteSVGPath} alt="Transportador 1" className="h-full" />
          <img src={transporte2SVGPath} alt="Transportador 2" className="h-full" />
          <img src={transporte3SVGPath} alt="Transportador 3" className="h-full" />
        </div>
        
        {/* Sensores - Usando o componente Sensors */}
        <Sensors
          sensors={[
            { id: 1, position: { left: sensor1Pos, top: '3%' }, active: sensor1Ativo },
            { id: 2, position: { left: sensor2Pos, top: '3%' }, active: sensor2Ativo },
            { id: 3, position: { left: sensor3Pos, top: '3%' }, active: sensor3Ativo }
          ]}
        />
        
        {/* Paletes - Usando o componente Pallets */}
        <Pallets
          pallets={pallets}
          palletWidth={palletWidth}
        />
        
        {/* Motores - Usando o componente Motors */}
        <Motors
          motors={[
            { id: 1, position: { left: (entryPoint + sensor1Pos) / 2, top: '75%' }, state: motor1Cor, onClick: () => onMotorClick(1) },
            { id: 2, position: { left: (sensor1Pos + sensor2Pos) / 2, top: '75%' }, state: motor2Cor, onClick: () => onMotorClick(2) },
            { id: 3, position: { left: (sensor2Pos + exitPoint) / 2, top: '75%' }, state: motor3Cor, onClick: () => onMotorClick(3) }
          ]}
        />
      </div>
    </div>
  );
};

export default TransportSystem;