import React from 'react';

const SystemDescription: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
        Sobre o Sistema CIP
      </h2>
      
      <div className="bg-black-100 p-8 rounded-xl shadow-lg mb-10">
        <h3 className="text-2xl font-bold text-white mb-4">Como Funciona?</h3>
        <p className="text-secondary mb-6">
          O sistema CIP (Clean-in-Place) permite a limpeza automática de equipamentos industriais sem desmontagem.
          Este simulador demonstra as diferentes fases do processo de limpeza, incluindo pré-enxágue, limpeza cáustica,
          enxágue intermediário, limpeza ácida e enxágue final.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Componentes do Sistema:</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue mt-1"></div>
                <div>
                  <p className="text-white font-medium">Tanque Principal</p>
                  <p className="text-secondary">Armazena a solução durante o processo de limpeza.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-industry-green mt-1"></div>
                <div>
                  <p className="text-white font-medium">Válvulas de Controle</p>
                  <p className="text-secondary">9 válvulas on/off e 2 moduladoras para controle fino de fluxo.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-automation-orange mt-1"></div>
                <div>
                  <p className="text-white font-medium">2 Bombas Centrífugas</p>
                  <p className="text-secondary">Responsáveis pela circulação das soluções de limpeza pelo sistema.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-500 mt-1"></div>
                <div>
                  <p className="text-white font-medium">Instrumentação</p>
                  <p className="text-secondary">Medição de temperatura, pressão, vazão e nível para controle do processo.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Fases do Processo:</h4>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">1</div>
                <p className="text-secondary">Pré-enxágue: Remoção de resíduos grosseiros com água.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">2</div>
                <p className="text-secondary">Limpeza Cáustica: Remoção de gorduras e proteínas com solução alcalina.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">3</div>
                <p className="text-secondary">Enxágue Intermediário: Eliminação de resíduos cáusticos.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">4</div>
                <p className="text-secondary">Limpeza Ácida: Remoção de minerais e incrustações inorgânicas.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold">5</div>
                <p className="text-secondary">Enxágue Final: Remoção de todos os resíduos químicos do sistema.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDescription;