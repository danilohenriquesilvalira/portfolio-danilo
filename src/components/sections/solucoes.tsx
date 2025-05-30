  import { motion } from 'framer-motion';
  import { useInView } from 'framer-motion';
  import { useRef } from 'react';

  const Solucoes = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Dados das soluções
    const solucoesData = [
      {
        id: 1,
        titulo: "Indústrias",
        subtitulo: "Soluções completas para otimização de processos industriais em todo o ecossistema produtivo.",
        gradiente: "from-orange-400 via-red-500 to-pink-500",
        icone: "🏭",
        detalhes: [
          "Automação de linhas de produção",
          "Sistemas SCADA integrados", 
          "Otimização de processos",
          "Indústria 4.0"
        ]
      },
      {
        id: 2,
        titulo: "Sistemas",
        subtitulo: "Conheça as oportunidades que a integração de sistemas oferece para o desenvolvimento tecnológico.",
        gradiente: "from-purple-400 via-blue-500 to-cyan-500",
        icone: "⚙️",
        detalhes: [
          "Integração PLC/SCADA",
          "Protocolos industriais",
          "Redes de comunicação",
          "Sistemas distribuídos"
        ]
      },
      {
        id: 3,
        titulo: "Empresas",
        subtitulo: "Saiba como podemos aproximar as empresas da inovação e da jornada de transformação digital.",
        gradiente: "from-emerald-400 via-teal-500 to-blue-500",
        icone: "🏢",
        detalhes: [
          "Consultoria especializada",
          "Transformação digital",
          "Gestão de projetos",
          "Treinamentos técnicos"
        ]
      }
    ];

    return (
      <section className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-28 bg-primary overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-block mb-4">
              <span className="bg-tech-blue/20 text-tech-blue text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                O QUE FAZEMOS
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-black text-white leading-tight mb-4">
              Desenvolvemos <span className="text-tech-blue">soluções</span> para facilitar a Automação
            </h2>
            <p className="text-secondary font-medium text-[16px] sm:text-[18px] max-w-3xl mx-auto leading-relaxed">
              para todos e em quaisquer estágios dessa jornada.
            </p>
          </motion.div>

          {/* Cards de Soluções */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16">
            {solucoesData.map((solucao, index) => (
              <motion.div
                key={solucao.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${solucao.gradiente} rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {solucao.icone}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-white mb-4 leading-tight">
                      {solucao.titulo}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/90 text-[14px] sm:text-[16px] leading-relaxed mb-6 flex-grow">
                      {solucao.subtitulo}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-2">
                      {solucao.detalhes.map((detalhe, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + idx * 0.1 }}
                          className="flex items-center text-white/80 text-sm"
                        >
                          <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                          {detalhe}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 py-3 px-6 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
                    >
                      Saiba Mais
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg border border-white/20"
          >
            <h3 className="text-[24px] lg:text-[32px] font-black text-white mb-4">
              Confira as áreas de atuação
            </h3>
            <h4 className="text-[20px] lg:text-[28px] font-bold text-tech-blue mb-4">
              da Automação Industrial
            </h4>
            <p className="text-secondary text-[16px] lg:text-[18px] mb-8">
              Clique nas imagens para conhecer cada detalhe.
            </p>
            
            {/* Decorative Pattern */}
            <div className="flex justify-center items-center space-x-2 opacity-30">
              {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                  className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-tech-blue"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tech-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    );
  };

  export default Solucoes;