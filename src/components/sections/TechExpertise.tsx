import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Factory,
  Settings,
  Code,
  Globe,
  GraduationCap,
  Award,
  Laptop,
  CircuitBoard,
  BrainCircuit,
  Network,
  Database,
  RefreshCw,
  Plane,
  MapPin,
  ArrowRight,
  Wrench,
  Cpu,
  Workflow,
  Rocket,
  Code2
} from 'lucide-react';

type ProcessStep = {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  iconColor: string;
  icon: string;
  companyLogo: string;
  companyName: string;
  location: string;
};

type CompanyData = {
  logo: string;
  name: string;
  color: string;
  period: string;
  duration: string;
};

type EducationType = {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: React.ReactNode;
};

// Componente de Card de processo - extraído para melhorar modularidade
const ProcessCard = ({ 
  step, 
  index, 
  isInView, 
  startIndex = 0,
}: { 
  step: ProcessStep; 
  index: number; 
  isInView: boolean;
  startIndex?: number;
}) => {
  const cardNumber = index + startIndex;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min(0.4 + index * 0.1, 1.2) // Limita para evitar delays muito grandes
      }}
      className="text-center p-5 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
      style={{
        background: `linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)`,
        boxShadow: `0 10px 40px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.05)`
      }}
      role="article"
      aria-labelledby={`career-step-${cardNumber}`}
    >
      {/* Numeração */}
      <div 
        className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs z-20"
        style={{
          background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
          boxShadow: `0 4px 12px ${step.color}40`
        }}
        aria-hidden="true"
      >
        {String(cardNumber).padStart(2, '0')}
      </div>

      {/* Brilho sutil no hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, transparent 0%, ${step.color}40 50%, transparent 100%)`
        }}
        aria-hidden="true"
      ></div>

      {/* Borda lateral colorida */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{
          background: `linear-gradient(180deg, ${step.color} 0%, ${step.color}80 100%)`
        }}
        aria-hidden="true"
      ></div>

      {/* Círculo com ícone e logo */}
      <div className="relative mb-5 sm:mb-6">
        <div
          className="mx-auto rounded-full flex items-center justify-center relative bg-white transition-transform hover:scale-110 duration-300"
          style={{
            width: '110px',
            height: '110px',
            border: `3px solid ${step.color}`,
            boxShadow: `0 8px 24px ${step.color}20`
          }}
          aria-hidden="true"
        >
          {/* Logo da empresa */}
          <div 
            className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full shadow-md border-2 border-gray-100 flex items-center justify-center overflow-hidden"
            style={{
              boxShadow: `0 4px 16px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)`
            }}
          >
            <img 
              src={step.companyLogo} 
              alt={`Logo ${step.companyName}`}
              className="w-5 h-5 object-contain" 
            />
          </div>
          
          {/* Ícone */}
          <ProcessIcon type={step.icon} color={step.color} />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="space-y-2 relative z-10">
        <h3
          id={`career-step-${cardNumber}`}
          className="font-black text-base sm:text-lg leading-tight"
          style={{ color: step.color }}
        >
          {step.title}
        </h3>

        <h4 className="font-semibold text-xs sm:text-sm text-gray-600">
          {step.subtitle}
        </h4>

        <p className="font-medium text-xs sm:text-sm leading-relaxed text-gray-600">
          {step.description}
        </p>
      </div>

      {/* Barra de progresso decorativa */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
        style={{ backgroundColor: `${step.color}20` }}
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 1, delay: Math.min(0.6 + index * 0.1, 1.4) }}
        aria-hidden="true"
      >
        <motion.div 
          className="h-full rounded-b-2xl"
          style={{ 
            background: `linear-gradient(90deg, ${step.color} 0%, ${step.color}80 100%)`
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: '75%' } : { width: 0 }}
          transition={{ duration: 1.2, delay: Math.min(0.8 + index * 0.1, 1.6) }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
};

// Componente de educação extraído
const EducationCard = ({ education, isInView, index }: { 
  education: EducationType; 
  isInView: boolean;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: Math.min(3.0 + index * 0.2, 3.4) }}
      role="article"
      aria-labelledby={`education-${index}`}
    >
      <div 
        className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group h-full"
        style={{
          background: `linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)`,
          boxShadow: `0 10px 40px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.05)`
        }}
      >
        {/* Borda lateral */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
          style={{
            background: `linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)`
          }}
          aria-hidden="true"
        ></div>

        <div className="flex items-start gap-6 relative z-10">
          {/* Ícone */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)`,
              boxShadow: `0 8px 24px rgba(59, 130, 246, 0.25)`
            }}
            aria-hidden="true"
          >
            {education.icon}
          </div>

          {/* Conteúdo */}
          <div className="flex-1">
            <h4 
              id={`education-${index}`}
              className="font-black text-xl text-blue-600 mb-2 leading-tight"
            >
              {education.title}
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <Factory className="text-blue-600" size={16} aria-hidden="true" />
              <p className="text-gray-700 font-semibold">
                {education.institution}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-gray-500" size={14} aria-hidden="true" />
              <span className="text-sm font-medium text-gray-600">
                {education.period}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente de ícones - melhorado com ícones mais relevantes para os cards de Portugal
const ProcessIcon = ({ type, color }: { type: string; color: string }) => {
  const iconProps = {
    size: 38,
    color: color,
    strokeWidth: 1.5,
    'aria-hidden': 'true' as const
  };

  switch (type) {
    case "brewery":
      return <GraduationCap {...iconProps} />;
    case "maintenance":
      return <Settings {...iconProps} />;
    case "engineering":
      return <Award {...iconProps} />;
    case "coding":
      return <Laptop {...iconProps} />;
    case "international":
      return <Globe {...iconProps} />;
    case "brewery_industry":
      return <Factory {...iconProps} />;
    case "automationProject":
      return <Cpu {...iconProps} />; // Melhor ícone para automação industrial
    case "opportunities":
      return <Rocket {...iconProps} />; // Melhor ícone para expansão global
    default:
      return null;
  }
};

// Componente principal
const ProfessionalJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  // Career journey data com textos encurtados e cores padronizadas por empresa
  const processSteps: ProcessStep[] = [
    // Experiências no Brasil
    {
      letter: "A",
      title: "Início da Carreira na Ambev",
      subtitle: "Estágio em Automação Industrial (2013–2014)",
      description: "Primeiro contato com automação industrial na maior cervejaria da América Latina. Experiência prática com instrumentação, sistemas elétricos e processos industriais, construindo base sólida em tecnologias de automação.",
      color: "#00448C",
      iconColor: "#00448C",
      icon: "brewery",
      companyLogo: '/portfolio-danilo/About/ambev.svg',
      companyName: "Ambev",
      location: "Brasil"
    },
    {
      letter: "B",
      title: "Consolidação Técnica e Efetivação Profissional",
      subtitle: "Técnico em Automação (2014–2018)",
      description: "Efetivação como técnico de manutenção com foco em sistemas automatizados. Atuação em manutenção preventiva e corretiva, solucionando falhas operacionais e contribuindo para melhorias contínuas nos processos cervejeiros.",
      color: "#00448C",
      iconColor: "#00448C",
      icon: "maintenance",
      companyLogo: '/portfolio-danilo/About/ambev.svg',
      companyName: "Ambev",
      location: "Brasil"
    },
    {
      letter: "C",
      title: "Técnico Especializado em Áreas Críticas",
      subtitle: "Técnico Sênior em Automação (2018–2020)",
      description: "Evolução para técnico sênior em áreas críticas, principalmente envase. Trabalho focado na resolução de falhas complexas e otimização de sistemas específicos, trazendo ganhos significativos de estabilidade e performance.",
      color: "#00448C",
      iconColor: "#00448C",
      icon: "engineering",
      companyLogo: '/portfolio-danilo/About/ambev.svg',
      companyName: "Ambev",
      location: "Brasil"
    },
    {
      letter: "D",
      title: "Transição Estratégica para a Indústria 4.0",
      subtitle: "Desenvolvimento de Sistemas e Integração Digital (2020–2023)",
      description: "Graduação em ADS e migração para área de inovação. Desenvolvimento de projetos conectando máquinas a sistemas inteligentes, criando algoritmos para antecipação de falhas e APIs industriais. Destaque para o projeto NEXT, reconhecido globalmente no grupo AB InBev.",
      color: "#00448C",
      iconColor: "#00448C",
      icon: "coding",
      companyLogo: '/portfolio-danilo/About/ambev.svg',
      companyName: "Ambev",
      location: "Brasil"
    },
    
    // Experiências em Portugal/Europa
    {
      letter: "E",
      title: "Início da Jornada Internacional",
      subtitle: "Técnico de Automação – Font Salem (Grupo Damm, Portugal, 2023)",
      description: "Início da carreira internacional como técnico de automação na Font Salem. Trabalho em linhas de envase de alta performance, realizando manutenções técnicas e contribuindo com melhorias nos processos em ambiente multicultural.",
      color: "#DE252A",
      iconColor: "#DE252A",
      icon: "international",
      companyLogo: '/portfolio-danilo/About/grupo_damm.svg',
      companyName: "Grupo Damm",
      location: "Portugal"
    },
    {
      letter: "F",
      title: "Continuidade Técnica em Multinacional Cervejeira",
      subtitle: "Técnico de Automação – Heineken Portugal (2023)",
      description: "Atuação prática em automação industrial na Heineken. Manutenções preventivas e corretivas em equipamentos de alta complexidade, garantindo confiabilidade operacional conforme padrões globais da marca.",
      color: "#00A650",
      iconColor: "#00A650",
      icon: "brewery_industry",
      companyLogo: '/portfolio-danilo/About/heineken.svg',
      companyName: "Heineken",
      location: "Portugal"
    },
    {
      letter: "G",
      title: "Automação Industrial e Integração de Sistemas",
      subtitle: "RLS Automação – Portugal (2023–Presente)",
      description: "Desenvolvimento de projetos completos de automação industrial com foco em PLCs, HMIs e sistemas supervisórios. Criação de soluções modernas conectando automação clássica à Indústria 4.0 com APIs industriais e IIoT.",
      color: "#38C51F",
      iconColor: "#38C51F",
      icon: "automationProject",
      companyLogo: '/portfolio-danilo/About/rls.svg',
      companyName: "RLS Automação",
      location: "Portugal"
    },
    {
      letter: "H",
      title: "Projeção Internacional e Novas Oportunidades",
      subtitle: "Profissional em Expansão Global",
      description: "Com experiências no Brasil, Portugal, Espanha e Moçambique, busco oportunidades que valorizem capacidade técnica e visão inovadora. Foco em projetos de transformação digital, automação industrial e soluções inteligentes com IA e análise preditiva.",
      color: "#38C51F",
      iconColor: "#38C51F",
      icon: "opportunities",
      companyLogo: '/portfolio-danilo/About/rls.svg',
      companyName: "RLS Automação",
      location: "Portugal"
    }
  ];

  // Dados de educação
  const educationData: EducationType[] = [
    {
      title: "Tecnologia da Informação/Sistemas da Informação",
      institution: "Estácio",
      period: "abr de 2021 - dez de 2023",
      description: "Formação em TI com foco em Sistemas da Informação, desenvolvendo competências avançadas em análise de dados, bancos SQL, desenvolvimento web e integração de sistemas, com projeto final voltado para a convergência entre ambientes industriais e corporativos através de soluções IoT.",
      icon: <Laptop className="text-white" size={32} strokeWidth={1.5} aria-hidden="true" />
    },
    {
      title: "Técnico Eletromecânico / Automação Industrial",
      institution: "SENAI Pernambuco",
      period: "2012 - 2014",
      description: "Curso técnico especializado em eletromecânica e automação industrial, abrangendo pneumática, hidráulica, manutenção preventiva e preditiva, programação avançada de PLCs, redes industriais e instrumentação, com forte ênfase em aplicação prática e projetos reais.",
      icon: <Settings className="text-white" size={32} strokeWidth={1.5} aria-hidden="true" />
    }
  ];

  // Empresas
  const companyData: CompanyData[] = [
    { logo: '/portfolio-danilo/About/ambev.svg', name: "Ambev", color: "#00448C", period: "2013-2023", duration: "10 anos" },
    { logo: '/portfolio-danilo/About/grupo_damm.svg', name: "Grupo Damm", color: "#DE252A", period: "2023", duration: "6 meses" },
    { logo: '/portfolio-danilo/About/heineken.svg', name: "Heineken", color: "#00A650", period: "2023", duration: "7 meses" },
    { logo: '/portfolio-danilo/About/rls.svg', name: "RLS Automação", color: "#38C51F", period: "2023-Presente", duration: "1 ano" }
  ];

  return (
    <section 
      className="relative z-20 w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white text-gray-800"
      style={{
        borderRadius: '40px'
      }}
      role="region"
      aria-label="Trajetória Profissional"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-wide text-gray-800">
            TRAJETÓRIA PROFISSIONAL
          </h2>
          <p className="font-medium text-lg max-w-3xl mx-auto mb-4 text-gray-600">
            Uma década de experiência em automação industrial, desde estágio até liderança técnica em projetos internacionais
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Seção Brasil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8 gap-3">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold flex items-center shadow-lg">
              <MapPin size={18} className="mr-2" aria-hidden="true" />
              BRASIL
            </div>
          </div>
          
          {/* Grid de cards da trajetória no Brasil - usando componente reutilizável */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 mb-12">
            {processSteps.slice(0, 4).map((step, index) => (
              <ProcessCard 
                key={step.letter} 
                step={step} 
                index={index} 
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Elemento de Transição Internacional - com melhor acessibilidade */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Linha de conexão */}
            <div 
              className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500"
              aria-hidden="true"
            ></div>
            
            {/* Card de transição */}
            <div 
              className="relative bg-white py-6 px-8 rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto z-10"
              style={{
                background: `linear-gradient(145deg, #ffffff, #f8fafc)`,
                boxShadow: `0 15px 50px rgba(0,0,0,0.12), 0 10px 30px rgba(0,0,0,0.08)`
              }}
              role="presentation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  <Plane className="text-white" size={32} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-center text-gray-800 mb-3">
                Transição Internacional
              </h3>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                  <MapPin size={14} className="mr-1" aria-hidden="true" />
                  Brasil
                </div>
                <ArrowRight size={20} className="text-purple-500" aria-hidden="true" />
                <div className="flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                  <MapPin size={14} className="mr-1" aria-hidden="true" />
                  Portugal
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-600">
                Em 2023, iniciei uma nova fase de carreira expandindo horizontes para a Europa, 
                aplicando minha expertise em automação industrial em um contexto internacional.
              </p>
            </div>
            
            {/* Elementos decorativos */}
            <div 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <MapPin className="text-white" size={16} />
            </div>
            
            <div 
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-red-600 border-4 border-white shadow-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <MapPin className="text-white" size={16} />
            </div>
          </div>
        </motion.div>

        {/* Seção Portugal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8 gap-3">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold flex items-center shadow-lg">
              <MapPin size={18} className="mr-2" aria-hidden="true" />
              PORTUGAL
            </div>
          </div>
          
          {/* Grid de cards da trajetória em Portugal - usando componente reutilizável */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {processSteps.slice(4).map((step, index) => (
              <ProcessCard 
                key={step.letter} 
                step={step} 
                index={index} 
                isInView={isInView}
                startIndex={5}
              />
            ))}
          </div>
        </motion.div>

        {/* Seção de empresas parceiras - com animação mais eficiente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <h3 className="font-black text-2xl sm:text-3xl mb-8 sm:mb-10 text-gray-800">
            Empresas Onde Atuei
          </h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8 sm:mb-10"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
            {companyData.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: Math.min(2.2 + index * 0.15, 2.8) 
                }}
                className="flex flex-col items-center group"
              >
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl bg-white p-4 shadow-xl flex items-center justify-center border-2 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 relative"
                  style={{ 
                    borderColor: company.color,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.1), 0 4px 16px ${company.color}15`
                  }}
                >
                  {/* Badge de duração */}
                  <div 
                    className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: company.color }}
                  >
                    {company.duration}
                  </div>
                  
                  <img 
                    src={company.logo}
                    alt={`Logo ${company.name}`} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-bold text-gray-800">
                    {company.name}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    {company.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seção de Formação Acadêmica - com componentes reutilizáveis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="font-black text-2xl sm:text-3xl mb-4 text-gray-800">
              Formação Acadêmica
            </h3>
            <p className="font-medium text-lg max-w-2xl mx-auto text-gray-600">
              Base sólida de conhecimento que sustenta a aplicação de soluções inovadoras e eficazes
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Cards de formação - usando componente reutilizável */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {educationData.map((education, index) => (
              <EducationCard 
                key={index}
                education={education}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfessionalJourney;