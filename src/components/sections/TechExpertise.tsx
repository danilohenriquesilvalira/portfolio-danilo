import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TechExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Componente do fundo hexagonal OTIMIZADO
  const HexagonBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG Background SIMPLIFICADO - sem animações pesadas */}
        <div className="absolute inset-0 w-full h-full opacity-90">
          <svg 
            className="w-full h-full object-cover"
            viewBox="0 0 1920 1120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Fundo base */}
            <rect width="1920" height="1120" fill="url(#paint0_linear_2566_209)" />
            
            {/* Hexágono Central Grande - SEM MASK */}
            <path 
              d="M481.03 270.973L643.603 364.884L806.177 458.795V646.616V834.438L643.603 928.348L481.03 1022.26L318.456 928.348L155.883 834.438V646.616V458.795L318.456 364.884L481.03 270.973Z" 
              fill="url(#paint1_linear_2566_209)"
              opacity="0.7"
            />
            
            {/* Hexágonos menores simplificados */}
            <path 
              d="M0 0L537.956 0L602.173 37.0945V242.671L424.232 551.035L246.29 653.823L68.3487 551.035L0 511.553V0Z" 
              fill="url(#paint2_linear_2566_209)"
              opacity="0.5"
            />
            
            <path 
              d="M0 381.769L57.5866 348.504L220.16 442.415L382.733 536.326V724.147L220.16 1005.88L57.5866 1099.79L0 1066.53V381.769Z" 
              fill="url(#paint3_linear_2566_209)"
              opacity="0.5"
            />
            
            <path 
              d="M0 949.374L159.026 857.513L321.6 763.602L484.173 857.513L646.747 951.423V1120H0V949.374Z" 
              fill="url(#paint4_linear_2566_209)"
              opacity="0.5"
            />
            
            {/* Detalhes ciano simples */}
            <path 
              d="M564.458 37.0945V448.247L424.233 551.035L602.174 448.247V37.0945L537.957 0H500.241L564.458 37.0945Z" 
              fill="#39D5FF"
              opacity="0.6"
            />
            
            <path 
              d="M768.459 458.793V834.436L643.602 928.346L806.176 834.436V458.793L643.602 364.882L768.459 458.793Z" 
              fill="#39D5FF"
              opacity="0.6"
            />
            
            {/* Gradientes simplificados */}
            <defs>
              <linearGradient id="paint0_linear_2566_209" x1="0" y1="0" x2="1920" y2="1120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#001E87" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#000E3E" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2566_209" x1="300" y1="400" x2="700" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000E3E" stopOpacity="0.9"/>
                <stop offset="1" stopColor="#19B5FE" stopOpacity="0.5"/>
              </linearGradient>
              <linearGradient id="paint2_linear_2566_209" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#004790" stopOpacity="0.6"/>
                <stop offset="1" stopColor="#19B5FE" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="paint3_linear_2566_209" x1="0" y1="400" x2="400" y2="1000" gradientUnits="userSpaceOnUse">
                <stop stopColor="#003C78" stopOpacity="0.6"/>
                <stop offset="1" stopColor="#19B5FE" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="paint4_linear_2566_209" x1="0" y1="800" x2="600" y2="1120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#004790" stopOpacity="0.6"/>
                <stop offset="1" stopColor="#19B5FE" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  };

  // Dados das peças do quebra-cabeça
  const puzzleData = [
    {
      id: "01",
      title: "Automação",
      subtitle: "Controle",
      icon: "/portfolio-danilo/About/icone_controle.svg",
      description: "Sistemas de controle e automação industrial"
    },
    {
      id: "02", 
      title: "Integração",
      subtitle: "Processamento",
      icon: "/portfolio-danilo/About/icone_integração.svg",
      description: "Integração de sistemas e processamento de dados"
    },
    {
      id: "03",
      title: "Supervisão", 
      subtitle: "Visualização",
      icon: "/portfolio-danilo/About/icone_supervisao.svg",
      description: "Monitoramento e interfaces visuais"
    },
    {
      id: "04",
      title: "Conectividade",
      subtitle: "Gestão", 
      icon: "/portfolio-danilo/About/icone_conectividade.svg",
      description: "Dados e gestão de informações"
    }
  ];

  // Componente do quebra-cabeça OTIMIZADO
  const PuzzleComponent = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        {/* SVG do quebra-cabeça OTIMIZADO - sem animações pathLength */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <svg 
            width="120" 
            height="360" 
            viewBox="0 0 442 1321" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl sm:w-[140px] sm:h-[420px] lg:w-[160px] lg:h-[480px]"
          >
            {/* Peça 1 - Vermelha - SEM ANIMAÇÃO PESADA */}
            <path 
              d="M273.156 437.882C253.49 437.967 233.77 425.067 231.174 399.233C230.252 387.507 234.64 375.807 242.231 367.732C244.878 363.859 247.674 360.121 250.249 356.495C260.276 342.328 250.723 334.876 241.278 332.76H109.255V200.736C107.138 191.291 99.6872 181.738 85.5202 191.765C81.8952 194.34 78.1562 197.136 74.2832 199.783C66.2082 207.374 54.5082 211.761 42.7822 210.84C16.9472 208.245 4.04724 188.524 4.13324 168.858V168.856V168.854C4.04824 149.188 16.9482 129.468 42.7822 126.872C54.5082 125.95 66.2082 130.338 74.2832 137.929C78.1562 140.576 81.8942 143.372 85.5202 145.947C99.6872 155.974 107.139 146.421 109.255 136.976V4.95312H241.276C250.721 7.07013 260.274 14.5211 250.247 28.6891C247.672 32.3141 244.876 36.0531 242.229 39.9261C234.638 48.0011 230.251 59.7011 231.172 71.4271C233.768 97.2581 253.491 110.164 273.158 110.076C292.825 110.164 312.549 97.2581 315.144 71.4271C316.066 59.7011 311.678 48.0011 304.087 39.9261C301.44 36.0531 298.644 32.3151 296.069 28.6891C286.042 14.5221 295.595 7.07013 305.04 4.95312H437.061V332.759H305.039C295.594 334.876 286.041 342.327 296.068 356.494C298.643 360.12 301.439 363.858 304.086 367.731C311.677 375.806 316.064 387.506 315.143 399.232C312.548 425.067 292.827 437.967 273.161 437.881H273.159L273.156 437.882Z" 
              fill="#F20018" 
              stroke="white" 
              strokeWidth="8" 
              strokeMiterlimit="10"
            />
            
            {/* Peça 2 - Laranja */}
            <path 
              d="M273.16 765.687C292.826 765.772 312.546 752.872 315.142 727.038C316.064 715.312 311.676 703.611 304.085 695.537C301.438 691.664 298.642 687.926 296.067 684.3C286.04 670.133 295.593 662.681 305.038 660.565H437.061V332.758H305.04C295.595 334.875 286.042 342.326 296.069 356.494C298.644 360.119 301.44 363.858 304.087 367.731C311.678 375.806 316.065 387.506 315.144 399.232C312.548 425.063 292.825 437.969 273.158 437.881C253.491 437.969 233.767 425.063 231.172 399.232C230.25 387.506 234.638 375.806 242.229 367.731C244.876 363.858 247.672 360.12 250.247 356.494C260.274 342.327 250.721 334.875 241.276 332.758H109.254V464.779C111.371 474.224 118.822 483.777 132.99 473.75C136.615 471.175 140.354 468.379 144.227 465.732C152.302 458.141 164.002 453.753 175.728 454.675C201.559 457.271 214.465 476.994 214.377 496.661C214.465 516.328 201.559 536.052 175.728 538.647C164.002 539.569 152.302 535.181 144.227 527.59C140.354 524.943 136.616 522.147 132.99 519.572C118.823 509.545 111.371 519.098 109.254 528.543V660.564H241.277C250.722 662.681 260.275 670.132 250.248 684.299C247.673 687.924 244.877 691.663 242.23 695.536C234.639 703.611 230.252 715.311 231.173 727.037C233.768 752.872 253.489 765.772 273.155 765.686H273.157L273.16 765.687Z" 
              fill="#FF9000" 
              stroke="white" 
              strokeWidth="8" 
              strokeMiterlimit="10"
            />
            
            {/* Peça 3 - Roxa */}
            <path 
              d="M273.156 1093.5C253.49 1093.58 233.77 1080.68 231.174 1054.85C230.252 1043.12 234.64 1031.42 242.231 1023.35C244.878 1019.47 247.674 1015.74 250.249 1012.11C260.276 997.942 250.723 990.49 241.278 988.374H109.255V856.35C107.138 846.905 99.6872 837.352 85.5202 847.379C81.8952 849.954 78.1562 852.75 74.2832 855.397C66.2082 862.988 54.5082 867.375 42.7822 866.454C16.9472 863.859 4.04724 844.138 4.13324 824.472V824.47V824.468C4.04824 804.802 16.9482 785.082 42.7822 782.486C54.5082 781.564 66.2082 785.952 74.2832 793.543C78.1562 796.19 81.8942 798.986 85.5202 801.561C99.6872 811.588 107.139 802.035 109.255 792.59V660.566H241.276C250.721 662.683 260.274 670.134 250.247 684.301C247.672 687.926 244.876 691.665 242.229 695.538C234.638 703.613 230.251 715.313 231.172 727.039C233.768 752.87 253.491 765.776 273.158 765.688C292.825 765.776 312.549 752.87 315.144 727.039C316.066 715.313 311.678 703.612 304.087 695.538C301.44 691.665 298.644 687.927 296.069 684.301C286.042 670.134 295.595 662.682 305.04 660.566H437.061V988.372H305.039C295.594 990.489 286.041 997.94 296.068 1012.11C298.643 1015.73 301.439 1019.47 304.086 1023.34C311.677 1031.42 316.064 1043.12 315.143 1054.85C312.548 1080.68 292.827 1093.58 273.161 1093.49H273.159C273.158 1093.5 273.156 1093.5 273.156 1093.5Z" 
              fill="#A064BC" 
              stroke="white" 
              strokeWidth="8" 
              strokeMiterlimit="10"
            />
            
            {/* Peça 4 - Azul/Verde */}
            <path 
              d="M437.064 1316.18H109.258V1184.16C111.375 1174.71 118.826 1165.16 132.994 1175.19C136.619 1177.76 140.358 1180.56 144.231 1183.2C152.306 1190.79 164.006 1195.18 175.732 1194.26C201.563 1191.67 214.469 1171.94 214.381 1152.27C214.469 1132.61 201.563 1112.88 175.732 1110.29C164.006 1109.37 152.305 1113.75 144.231 1121.35C140.358 1123.99 136.62 1126.79 132.994 1129.36C118.827 1139.39 111.375 1129.84 109.258 1120.39V988.371H241.279C250.724 990.488 260.277 997.939 250.25 1012.11C247.675 1015.73 244.879 1019.47 242.232 1023.34C234.641 1031.42 230.254 1043.12 231.175 1054.85C233.771 1080.68 253.494 1093.58 273.161 1093.49C292.828 1093.58 312.552 1080.68 315.147 1054.85C316.069 1043.12 311.681 1031.42 304.09 1023.34C301.443 1019.47 298.647 1015.73 296.072 1012.11C286.045 997.94 295.598 990.488 305.043 988.371H437.064V1316.18Z" 
              fill="#35B7B9" 
              stroke="white" 
              strokeWidth="8" 
              strokeMiterlimit="10"
            />
          </svg>
        </motion.div>

        {/* Textos */}
        <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-5 text-white w-full sm:w-auto">
          {puzzleData.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              {/* Ícone SVG */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-2 rounded-lg bg-white/20">
                <img 
                  src={piece.icon}
                  alt={`${piece.title} icon`}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs sm:text-sm lg:text-base font-black opacity-70 bg-white/20 px-2 py-1 rounded-md">
                    {piece.id}
                  </span>
                  <span className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-white">
                    {piece.title}
                  </span>
                </div>
                <div className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-slate-200 mb-1">
                  {piece.subtitle}
                </div>
                <div className="text-[12px] sm:text-[14px] lg:text-[16px] text-secondary opacity-80 leading-relaxed">
                  {piece.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative z-20 w-full py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full"
      >
        {/* Container principal */}
        <div className="relative w-full bg-gradient-to-b from-[#2331BB] via-[#2330BB] to-[#55BDEF] shadow-2xl border-t border-b border-slate-600/30 overflow-hidden rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
          
          {/* Fundo Hexagonal - APENAS DESKTOP - OTIMIZADO */}
          <div className="hidden sm:block">
            <HexagonBackground />
          </div>
          
          {/* Fundo azul escuro para mobile */}
          <div className="block sm:hidden absolute inset-0 bg-gradient-to-br from-[#0f1e3d] via-[#1a2a4d] to-[#243a5e]" />

          {/* LAYOUT MOBILE */}
          <div className="block sm:hidden relative z-10">
            {/* Header mobile */}
            <div className="px-4 py-6 text-center">
              <h3 className="text-white font-black text-[20px] leading-tight mb-2">
                Conectando Chão de Fábrica com Tecnologias Modernas
              </h3>
              <p className="text-secondary font-medium text-[14px] leading-relaxed">
                Expertise Técnica em Automação Industrial & Desenvolvimento
              </p>
            </div>

            {/* Quebra-cabeça MOBILE */}
            <div className="px-4 pb-6">
              <div className="flex flex-row items-center justify-center gap-3">
                {/* SVG quebra-cabeça mobile OTIMIZADO */}
                <div className="flex-shrink-0">
                  <svg 
                    width="110" 
                    height="300" 
                    viewBox="0 0 442 1321" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-xl"
                  >
                    {/* Peças simplificadas - SEM ANIMAÇÕES */}
                    <path 
                      d="M273.156 437.882C253.49 437.967 233.77 425.067 231.174 399.233C230.252 387.507 234.64 375.807 242.231 367.732C244.878 363.859 247.674 360.121 250.249 356.495C260.276 342.328 250.723 334.876 241.278 332.76H109.255V200.736C107.138 191.291 99.6872 181.738 85.5202 191.765C81.8952 194.34 78.1562 197.136 74.2832 199.783C66.2082 207.374 54.5082 211.761 42.7822 210.84C16.9472 208.245 4.04724 188.524 4.13324 168.858V168.856V168.854C4.04824 149.188 16.9482 129.468 42.7822 126.872C54.5082 125.95 66.2082 130.338 74.2832 137.929C78.1562 140.576 81.8942 143.372 85.5202 145.947C99.6872 155.974 107.139 146.421 109.255 136.976V4.95312H241.276C250.721 7.07013 260.274 14.5211 250.247 28.6891C247.672 32.3141 244.876 36.0531 242.229 39.9261C234.638 48.0011 230.251 59.7011 231.172 71.4271C233.768 97.2581 253.491 110.164 273.158 110.076C292.825 110.164 312.549 97.2581 315.144 71.4271C316.066 59.7011 311.678 48.0011 304.087 39.9261C301.44 36.0531 298.644 32.3151 296.069 28.6891C286.042 14.5221 295.595 7.07013 305.04 4.95312H437.061V332.759H305.039C295.594 334.876 286.041 342.327 296.068 356.494C298.643 360.12 301.439 363.858 304.086 367.731C311.677 375.806 316.064 387.506 315.143 399.232C312.548 425.067 292.827 437.967 273.161 437.881H273.159L273.156 437.882Z" 
                      fill="#F20018" 
                      stroke="white" 
                      strokeWidth="4"
                    />
                    <path 
                      d="M273.16 765.687C292.826 765.772 312.546 752.872 315.142 727.038C316.064 715.312 311.676 703.611 304.085 695.537C301.438 691.664 298.642 687.926 296.067 684.3C286.04 670.133 295.593 662.681 305.038 660.565H437.061V332.758H305.04C295.595 334.875 286.042 342.326 296.069 356.494C298.644 360.119 301.44 363.858 304.087 367.731C311.678 375.806 316.065 387.506 315.144 399.232C312.548 425.063 292.825 437.969 273.158 437.881C253.491 437.969 233.767 425.063 231.172 399.232C230.25 387.506 234.638 375.806 242.229 367.731C244.876 363.858 247.672 360.12 250.247 356.494C260.274 342.327 250.721 334.875 241.276 332.758H109.254V464.779C111.371 474.224 118.822 483.777 132.99 473.75C136.615 471.175 140.354 468.379 144.227 465.732C152.302 458.141 164.002 453.753 175.728 454.675C201.559 457.271 214.465 476.994 214.377 496.661C214.465 516.328 201.559 536.052 175.728 538.647C164.002 539.569 152.302 535.181 144.227 527.59C140.354 524.943 136.616 522.147 132.99 519.572C118.823 509.545 111.371 519.098 109.254 528.543V660.564H241.277C250.722 662.681 260.275 670.132 250.248 684.299C247.673 687.924 244.877 691.663 242.23 695.536C234.639 703.611 230.252 715.311 231.173 727.037C233.768 752.872 253.489 765.772 273.155 765.686H273.157L273.16 765.687Z" 
                      fill="#FF9000" 
                      stroke="white" 
                      strokeWidth="4"
                    />
                    <path 
                      d="M273.156 1093.5C253.49 1093.58 233.77 1080.68 231.174 1054.85C230.252 1043.12 234.64 1031.42 242.231 1023.35C244.878 1019.47 247.674 1015.74 250.249 1012.11C260.276 997.942 250.723 990.49 241.278 988.374H109.255V856.35C107.138 846.905 99.6872 837.352 85.5202 847.379C81.8952 849.954 78.1562 852.75 74.2832 855.397C66.2082 862.988 54.5082 867.375 42.7822 866.454C16.9472 863.859 4.04724 844.138 4.13324 824.472V824.47V824.468C4.04824 804.802 16.9482 785.082 42.7822 782.486C54.5082 781.564 66.2082 785.952 74.2832 793.543C78.1562 796.19 81.8942 798.986 85.5202 801.561C99.6872 811.588 107.139 802.035 109.255 792.59V660.566H241.276C250.721 662.683 260.274 670.134 250.247 684.301C247.672 687.926 244.876 691.665 242.229 695.538C234.638 703.613 230.251 715.313 231.172 727.039C233.768 752.87 253.491 765.776 273.158 765.688C292.825 765.776 312.549 752.87 315.144 727.039C316.066 715.313 311.678 703.612 304.087 695.538C301.44 691.665 298.644 687.927 296.069 684.301C286.042 670.134 295.595 662.682 305.04 660.566H437.061V988.372H305.039C295.594 990.489 286.041 997.94 296.068 1012.11C298.643 1015.73 301.439 1019.47 304.086 1023.34C311.677 1031.42 316.064 1043.12 315.143 1054.85C312.548 1080.68 292.827 1093.58 273.161 1093.49H273.159C273.158 1093.5 273.156 1093.5 273.156 1093.5Z" 
                      fill="#A064BC" 
                      stroke="white" 
                      strokeWidth="4"
                    />
                    <path 
                      d="M437.064 1316.18H109.258V1184.16C111.375 1174.71 118.826 1165.16 132.994 1175.19C136.619 1177.76 140.358 1180.56 144.231 1183.2C152.306 1190.79 164.006 1195.18 175.732 1194.26C201.563 1191.67 214.469 1171.94 214.381 1152.27C214.469 1132.61 201.563 1112.88 175.732 1110.29C164.006 1109.37 152.305 1113.75 144.231 1121.35C140.358 1123.99 136.62 1126.79 132.994 1129.36C118.827 1139.39 111.375 1129.84 109.258 1120.39V988.371H241.279C250.724 990.488 260.277 997.939 250.25 1012.11C247.675 1015.73 244.879 1019.47 242.232 1023.34C234.641 1031.42 230.254 1043.12 231.175 1054.85C233.771 1080.68 253.494 1093.58 273.161 1093.49C292.828 1093.58 312.552 1080.68 315.147 1054.85C316.069 1043.12 311.681 1031.42 304.09 1023.34C301.443 1019.47 298.647 1015.73 296.072 1012.11C286.045 997.94 295.598 990.488 305.043 988.371H437.064V1316.18Z" 
                      fill="#35B7B9" 
                      stroke="white" 
                      strokeWidth="4"
                    />
                  </svg>
                </div>

                {/* Textos MOBILE */}
                <div className="flex flex-col space-y-2 text-white flex-1 min-w-0">
                  {puzzleData.map((piece) => (
                    <div
                      key={piece.id}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-white/10 border border-white/20 min-h-[60px]"
                    >
                      <div className="flex-shrink-0 w-8 h-8 p-1 rounded-lg bg-white/20">
                        <img 
                          src={piece.icon}
                          alt={`${piece.title} icon`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="text-xs font-black bg-white/30 px-1 py-0.5 rounded text-white">{piece.id}</span>
                          <span className="font-bold text-[12px] text-white truncate">{piece.title}</span>
                        </div>
                        <div className="font-semibold text-[14px] text-slate-200 mb-1">{piece.subtitle}</div>
                        <div className="text-[12px] text-secondary leading-tight">{piece.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats mobile */}
            <div className="px-4 pb-6">
              <div className="grid grid-cols-4 gap-3 text-center text-white">
                <div className="p-3">
                  <div className="text-white font-black text-[20px] mb-1">+10</div>
                  <div className="text-secondary text-[12px] leading-tight">anos</div>
                </div>
                <div className="p-3">
                  <div className="text-white font-black text-[20px] mb-1">+3</div>
                  <div className="text-secondary text-[12px] leading-tight">países</div>
                </div>
                <div className="p-3">
                  <div className="text-white font-black text-[20px] mb-1">+50</div>
                  <div className="text-secondary text-[12px] leading-tight">projetos</div>
                </div>
                <div className="p-3">
                  <div className="text-white font-black text-[20px] mb-1">∞</div>
                  <div className="text-secondary text-[12px] leading-tight">soluções</div>
                </div>
              </div>
            </div>
          </div>

          {/* LAYOUT DESKTOP */}
          <div className="hidden md:flex relative min-h-[480px] lg:min-h-[520px] xl:min-h-[540px] max-w-none z-10">
            {/* Imagem de perfil - desktop */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-1/3 lg:w-2/5 flex-shrink-0 flex items-end justify-center bg-gradient-to-r from-[#2331BB] via-[#2431BB] to-transparent pl-4 lg:pl-6 xl:pl-8 pb-4"
            >
              <img
                src="/portfolio-danilo/About/eu_novo.svg"
                alt="Danilo Lira - Perfil"
                className="h-[85%] lg:h-[90%] w-auto object-contain"
              />
            </motion.div>

            {/* Conteúdo - desktop */}
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-8 xl:px-12 py-8 lg:py-12 xl:py-16 max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6 lg:mb-8 xl:mb-10"
              >
                <h3 className="text-white font-black text-[24px] lg:text-[32px] xl:text-[40px] leading-tight mb-3 lg:mb-4">
                  Conectando Chão de Fábrica com Tecnologias Modernas
                </h3>
                <p className="text-secondary font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed">
                  Expertise Técnica em Automação Industrial & Desenvolvimento
                </p>
              </motion.div>

              {/* Quebra-cabeça - desktop */}
              <div className="mb-6 lg:mb-8 xl:mb-10">
                <PuzzleComponent />
              </div>

              {/* Stats - desktop */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 xl:gap-6 text-center text-white"
              >
                <div>
                  <div className="text-white font-black text-[30px] lg:text-[40px] xl:text-[50px] leading-tight mb-2">+10</div>
                  <div className="text-secondary font-medium text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed">
                    anos de atuação na<br/>Automação Industrial
                  </div>
                </div>
                <div>
                  <div className="text-white font-black text-[30px] lg:text-[40px] xl:text-[50px] leading-tight mb-2">+3</div>
                  <div className="text-secondary font-medium text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed">
                    países de experiência<br/>profissional
                  </div>
                </div>
                <div>
                  <div className="text-white font-black text-[30px] lg:text-[40px] xl:text-[50px] leading-tight mb-2">+50</div>
                  <div className="text-secondary font-medium text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed">
                    projetos desenvolvidos<br/>em automação
                  </div>
                </div>
                <div>
                  <div className="text-white font-black text-[30px] lg:text-[40px] xl:text-[50px] leading-tight mb-2">∞</div>
                  <div className="text-secondary font-medium text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed">
                    soluções criadas para<br/>indústria 4.0
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechExpertise;