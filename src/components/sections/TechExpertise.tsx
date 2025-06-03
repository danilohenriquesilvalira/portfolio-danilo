import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProfessionalJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Career journey data with professionally relevant steps
  const processSteps = [
    {
      letter: "A",
      title: "Início da Carreira",
      subtitle: "Ambev Brasil (2013-2014)",
      description: "Entrada como estagiário técnico em automação industrial na maior cervejaria da América Latina, com foco em instrumentação e elétrica.",
      color: "#8B7DD1", // Roxo
      iconColor: "#8B7DD1",
      icon: "brewery"
    },
    {
      letter: "B",
      title: "Efetivação Técnica",
      subtitle: "Ambev Brasil (2014-2018)",
      description: "Efetivado como técnico em automação industrial, aplicando conhecimentos em manutenção preventiva e corretiva nos processos cervejeiros.",
      color: "#9B6FDD", // Roxo mais escuro
      iconColor: "#9B6FDD",
      icon: "automation"
    },
    {
      letter: "C",
      title: "Evolução Sênior",
      subtitle: "Ambev Brasil (2018-2020)",
      description: "Promoção a técnico sênior, liderando diretrizes técnicas e implementando melhorias contínuas nos processos industriais.",
      color: "#F4C22B", // Amarelo
      iconColor: "#F4C22B",
      icon: "engineering"
    },
    {
      letter: "D",
      title: "Formação Tecnológica",
      subtitle: "Análise e Desenvolvimento (2020-2023)",
      description: "Graduação em ADS com desenvolvimento de habilidades em Python, Go, Java, C/C++, React e JavaScript, aplicando tecnologias da Indústria 4.0.",
      color: "#F5A623", // Laranja
      iconColor: "#F5A623",
      icon: "coding"
    },
    {
      letter: "E",
      title: "Expansão Internacional",
      subtitle: "Font Salem Portugal (2023)",
      description: "Mudança para Portugal e desenvolvimento do sistema de auto flush e controle de qualidade na linha de envase da Font Salem (Grupo Damm).",
      color: "#E53E3E", // Vermelho
      iconColor: "#E53E3E",
      icon: "bottleLine"
    },
    {
      letter: "F",
      title: "Heineken Portugal",
      subtitle: "Sagres (2023)",
      description: "Experiência em manutenção preventiva e corretiva em uma das maiores cervejarias do mundo, com foco em disponibilidade e eficiência.",
      color: "#38D9A9", // Verde
      iconColor: "#38D9A9",
      icon: "heineken"
    },
    {
      letter: "G", 
      title: "Projetos Internacionais",
      subtitle: "RLS Automação - Portugal",
      description: "Desenvolvimento de soluções de automação industrial em Portugal, integrando sistemas clássicos com tecnologias da Indústria 4.0.",
      color: "#68B5E8", // Azul claro
      iconColor: "#68B5E8",
      icon: "automationProject"
    },
    {
      letter: "H", 
      title: "Expansão Continental",
      subtitle: "RLS Automação - Espanha e Moçambique",
      description: "Ampliação para projetos na Espanha e Moçambique, consolidando expertise internacional em automação e transformação digital.",
      color: "#4299E1", // Azul
      iconColor: "#4299E1",
      icon: "globalTech"
    }
  ];

  // Componente de ícones SVG específicos para cada etapa da carreira
  const ProcessIcon = ({ type, color }: { type: string; color: string }) => {
    const iconProps = {
      width: "40",
      height: "40",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    };

    switch (type) {
      case "brewery": // Ícone de fábrica de cerveja/estágio inicial
        return (
          <svg {...iconProps}>
            <path d="M19 21H5C4.44772 21 4 20.5523 4 20V10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10V20C20 20.5523 19.5523 21 19 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 13H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 17H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 9V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "automation": // Ícone específico de automação industrial
        return (
          <svg {...iconProps}>
            <path d="M16 8H8V16H16V8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 4H4V20H20V4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L8 8M20 20L16 16M4 20L8 16M20 4L16 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="1" fill={color}/>
          </svg>
        );
      case "engineering": // Ícone para técnico sênior/engenheiro
        return (
          <svg {...iconProps}>
            <path d="M14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z" stroke={color} strokeWidth="2"/>
            <path d="M6.52083 17C7.77881 15.5318 9.75193 14.5 12 14.5C14.2481 14.5 16.2212 15.5318 17.4792 17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 17.6063V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V17.6063C4 18.3811 4.694 18.9443 5.45056 18.7558L6.84943 18.4442C7.48016 18.2902 8.1384 18.409 8.66824 18.7724L8.73372 18.8152C9.41985 19.2554 10.3125 19.2636 11.0066 18.8359L12 18.2L12.9934 18.8359C13.6875 19.2636 14.5802 19.2554 15.2663 18.8152L15.3318 18.7724C15.8616 18.409 16.5198 18.2902 17.1506 18.4442L18.5494 18.7558C19.306 18.9443 20 18.3811 20 17.6063Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "coding": // Ícone de programação/desenvolvimento de sistemas
        return (
          <svg {...iconProps}>
            <path d="M10 16L14 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 16L22 12L18 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L2 12L6 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "bottleLine": // Ícone específico para linha de envase
        return (
          <svg {...iconProps}>
            <path d="M10 3V5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 3V5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 5H15L14 9.5C16.5 10.5 16.5 13 16.5 15V20C16.5 20.5523 16.0523 21 15.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20V15C7.5 13 7.5 10.5 10 9.5L9 5Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M7.5 15H16.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19 12H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 16L5 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19 16L21 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "heineken": // Ícone personalizado para Heineken/cerveja
        return (
          <svg {...iconProps}>
            <path d="M17 9L17 20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22L9 22C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20L7 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 2H15V5H9V2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L12 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 5V9C15 10 14 11 12 11C10 11 9 10 9 9V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "automationProject": // Ícone de projeto de automação
        return (
          <svg {...iconProps}>
            <path d="M3 9H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="15" cy="15" r="2" stroke={color} strokeWidth="2"/>
            <path d="M13 12L17 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 14L15 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "globalTech": // Ícone para expansão internacional com tecnologia
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
            <path d="M12 2C16.4183 7 16.4183 17 12 22" stroke={color} strokeWidth="2"/>
            <path d="M12 2C7.58172 7 7.58172 17 12 22" stroke={color} strokeWidth="2"/>
            <path d="M2 12H22" stroke={color} strokeWidth="2"/>
            <path d="M10 7H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 17H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative z-20 w-full py-16 lg:py-24 bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            TRAJETÓRIA PROFISSIONAL
          </h2>
          <div className="w-24 h-1 bg-tech-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de cards - sem linhas conectoras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              {/* Círculo principal com ícone */}
              <div className="relative mb-8">
                <div 
                  className="w-28 h-28 mx-auto rounded-full border-4 flex items-center justify-center relative bg-white shadow-lg"
                  style={{ borderColor: step.color }}
                >
                  {/* Ícone SVG apropriado */}
                  <ProcessIcon type={step.icon} color={step.color} />
                  
                  {/* Letra no canto superior direito */}
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.letter}
                  </div>
                </div>
              </div>

              {/* Conteúdo com estilo de fonte do HeroSection */}
              <div className="space-y-2">
                <h3 
                  className="font-black text-[20px]"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                
                <h4 className="text-gray-600 font-medium text-[16px]">
                  {step.subtitle}
                </h4>
                
                <p className="text-secondary font-medium text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Conector vertical para mobile */}
              {index < processSteps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8 mb-4">
                  <motion.div 
                    className="w-1 h-12 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${step.color}, ${processSteps[index + 1].color})`
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: 48 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats finais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "+10", label: "Anos de\nExperiência", color: "#8B7DD1" },
            { number: "3", label: "Países de\nAtuação", color: "#E53E3E" },
            { number: "2", label: "Formações\nTécnicas", color: "#F4C22B" },
            { number: "4.0", label: "Indústria e\nTransformação Digital", color: "#4299E1" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div 
                className="font-black text-[32px] lg:text-[42px] mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-secondary font-medium text-[14px] whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Seção adicional para destacar habilidades técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24"
        >
          <h3 className="font-black text-[32px] text-center mb-10 text-gray-800">Expertises Técnicas</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Automação Industrial", icon: "automation", color: "#8B7DD1" },
              { name: "Indústria 4.0", icon: "globalTech", color: "#F4C22B" },
              { name: "Desenvolvimento de APIs", icon: "coding", color: "#E53E3E" },
              { name: "Programação", icon: "coding", color: "#38D9A9" },
              { name: "Integração de Sistemas", icon: "automationProject", color: "#68B5E8" },
              { name: "Transformação Digital", icon: "globalTech", color: "#4299E1" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <ProcessIcon type={skill.icon} color={skill.color} />
                </div>
                <h4 className="font-medium text-[14px] text-gray-700">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfessionalJourney;