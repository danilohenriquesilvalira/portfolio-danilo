import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiTypescript, SiDocker, SiPython, SiNodedotjs, SiSiemens, SiGo, SiGrafana } from 'react-icons/si';
import { 
  FaIndustry, 
  FaCode, 
  FaServer, 
  FaPalette, 
  FaCloud, 
  FaRobot, 
  FaTachometerAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCertificate, 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaTools
} from 'react-icons/fa';
import '../style/about.css';
import ExperienceSection from '../components/sections/ExperienceSection';

// Interfaces
interface Skill {
  name: string;
  level: string;
  percentage: number;
  categories: string[];
  icon: React.ReactNode;
  description: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  iconBg: string;
  points: string[];
  technologies: string[];
  categories?: string[];
}

interface Education {
  degree: string;
  institution: string;
  date: string;
  description: string;
  iconBg: string;
}

interface Certification {
  icon: string;
  organization: string;
  title: string;
  date: string;
  credentialUrl?: string;
}

// Dados de exemplo 
const experiences: Experience[] = [
  {
    title: "Especialista em Automação Industrial",
    company: "RLS Automação Industrial",
    location: "Lisboa, Portugal",
    date: "Fev 2023 - Presente",
    iconBg: "#0F054C",
    categories: ["automacao", "industria"],
    points: [
      "Implementação de soluções de automação para indústrias de diversos segmentos em Portugal.",
      "Desenvolvimento de projetos de integração entre sistemas legados e novas tecnologias IoT.",
      "Otimização de linhas de produção utilizando tecnologias da Indústria 4.0 e análise de dados.",
      "Consultoria especializada em automação e digitalização de processos industriais."
    ],
    technologies: ["Siemens S7", "Node-RED", "Python", "OPC-UA", "Docker", "Grafana", "Azure IoT"]
  },
  {
    title: "Engenheiro de Automação",
    company: "Heineken",
    location: "Porto, Portugal",
    date: "Jun 2021 - Jan 2023",
    iconBg: "#0F054C",
    categories: ["automacao", "industria"],
    points: [
      "Implementação de sistemas de automação nas linhas de produção da cervejaria Sagres.",
      "Desenvolvimento de soluções para monitoramento em tempo real da eficiência dos equipamentos.",
      "Otimização de processos para redução de perdas e aumento da produtividade.",
      "Integração de sistemas MES com ERPs para melhor rastreabilidade e controle de qualidade."
    ],
    technologies: ["Allen Bradley", "Siemens", "Ignition SCADA", "SQL Server", "Python", "Power BI"]
  },
  {
    title: "Engenheiro de Controle e Automação",
    company: "Grupo Damm",
    location: "Lisboa, Portugal",
    date: "Mar 2020 - Mai 2021",
    iconBg: "#0F054C",
    categories: ["automacao", "industria"],
    points: [
      "Participação na transição tecnológica após a aquisição da Fontsalem pelo Grupo Damm.",
      "Implementação de sistemas de controle distribuído nas linhas de envase.",
      "Desenvolvimento de dashboards e sistemas de monitoramento em tempo real.",
      "Integração de sistemas legados com novas plataformas de automação."
    ],
    technologies: ["Siemens S7", "WinCC", "MQTT", "Node-RED", "Grafana", "PostgreSQL"]
  },
  {
    title: "Especialista em Automação Industrial",
    company: "Tecnale",
    location: "São Paulo, SP",
    date: "Fev 2018 - Fev 2020",
    iconBg: "#0F054C",
    categories: ["automacao", "desenvolvimento", "industria"],
    points: [
      "Desenvolvimento de soluções personalizadas de automação para clientes do setor industrial.",
      "Implementação de sistemas SCADA e interfaces homem-máquina para diversas aplicações.",
      "Integração de equipamentos industriais com sistemas gerenciais corporativos.",
      "Consultoria especializada para modernização de plantas industriais."
    ],
    technologies: ["Siemens S7", "Allen Bradley", "SCADA", "HMI", "Node.js", "React", "C#"]
  },
  {
    title: "Engenheiro de Automação",
    company: "Ambev",
    location: "Rio de Janeiro, RJ",
    date: "Mar 2015 - Jan 2018",
    iconBg: "#0F054C",
    categories: ["automacao", "industria"],
    points: [
      "Implementação e manutenção de sistemas de controle nas linhas de produção da maior cervejaria das Américas.",
      "Desenvolvimento de soluções para aumento de eficiência operacional.",
      "Participação em projetos de modernização de linhas de envase e processos de fabricação.",
      "Suporte técnico especializado para equipes de produção e manutenção."
    ],
    technologies: ["Rockwell", "Allen Bradley", "FactoryTalk", "SQL", "VBA", "Python"]
  }
];

const education: Education[] = [
  {
    degree: "Especialização em Indústria 4.0",
    institution: "Universidade Tecnológica",
    date: "2019 - 2020",
    description: "Especialização focada em tecnologias e métodos para implementação de conceitos da Indústria 4.0, incluindo IoT industrial, manufatura digital e análise de dados industriais.",
    iconBg: "#0F054C"
  },
  {
    degree: "Graduação em Engenharia de Automação",
    institution: "Universidade Federal",
    date: "2012 - 2016",
    description: "Formação em engenharia com foco em sistemas de automação, controle de processos, eletrônica e desenvolvimento de software para aplicações industriais.",
    iconBg: "#0F054C"
  }
];

const certifications: Certification[] = [
  {
    icon: "/portfolio-danilo/About/Logo_Siemens.svg",
    organization: "Siemens",
    title: "Siemens Certified Professional for TIA Portal",
    date: "Dez 2021",
    credentialUrl: "#certificado-siemens"
  },
  {
    icon: "/portfolio-danilo/About/Logo_React.svg",
    organization: "Frontend Masters",
    title: "Modern Frontend Development",
    date: "Jun 2022",
    credentialUrl: "#certificado-frontend"
  },
  {
    icon: "/portfolio-danilo/About/Logo_Docker.svg",
    organization: "Docker",
    title: "Docker Certified Associate",
    date: "Mar 2023",
    credentialUrl: "#certificado-docker"
  }
];

// Componente Principal
const About: React.FC = () => {
  // Refs e estados com nomes otimizados
  const skillsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('perfil');
  const [experienceFilter, setExperienceFilter] = useState<string>('all');
  
  // Efeito para autoplay do carrossel de habilidades - mantido mas otimizado
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveSkillIndex(prev => (prev + 1) % featuredSkills.length);
      }, 8000); // Aumentado para reduzir mudanças frequentes
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Categorias de habilidades
  const categories: Category[] = [
    { 
      id: 'all', 
      name: 'Todas', 
      icon: <FaCode size={24} />,
      color: '#FFD700'
    },
    { 
      id: 'industrial', 
      name: 'Automação', 
      icon: <FaIndustry size={24} />,
      color: '#00E5FF'
    },
    { 
      id: 'frontend', 
      name: 'Frontend', 
      icon: <SiReact size={24} />,
      color: '#61DAFB'
    },
    { 
      id: 'backend', 
      name: 'Backend', 
      icon: <FaServer size={24} />,
      color: '#7DF9FF'
    },
    { 
      id: 'uiux', 
      name: 'UI/UX', 
      icon: <FaPalette size={24} />,
      color: '#FF6B6B'
    },
    { 
      id: 'devops', 
      name: 'DevOps', 
      icon: <FaCloud size={24} />,
      color: '#9C27B0'
    },
  ];

  // Skills em destaque para o carrossel - Atualizada com novas tecnologias
  const featuredSkills: Skill[] = [
    {
      name: 'Siemens TIA Portal & PLCs',
      level: 'Especialista',
      percentage: 95,
      categories: ['industrial'],
      icon: <SiSiemens size={64} />,
      description: 'Especialista em programação de PLCs Siemens, incluindo S7-1200/1500, configuração de redes industriais Profinet/Profibus e integração com sistemas MES/ERP.'
    },
    {
      name: 'React & TypeScript',
      level: 'Avançado',
      percentage: 90,
      categories: ['frontend'],
      icon: <SiReact size={64} />,
      description: 'Desenvolvimento de interfaces modernas e responsivas com React, utilizando TypeScript para garantir código robusto e manutenível em aplicações industriais.'
    },
    {
      name: 'UX/UI para HMIs Industriais',
      level: 'Especialista',
      percentage: 92,
      categories: ['uiux', 'industrial'],
      icon: <FaPalette size={64} />,
      description: 'Design de interfaces para HMIs seguindo padrões ISA 101 e IEC 61355, criando experiências intuitivas para operadores em ambientes industriais complexos.'
    },
    {
      name: 'Node.js & Go APIs',
      level: 'Avançado',
      percentage: 88,
      categories: ['backend'],
      icon: <SiGo size={64} />,
      description: 'Desenvolvimento de APIs de alta performance com Go e Node.js, microserviços para IoT industrial, integração com protocolos OPC-UA e MQTT.'
    },
    {
      name: 'Node-RED & Python',
      level: 'Especialista',
      percentage: 93,
      categories: ['backend', 'industrial'],
      icon: <SiPython size={64} />,
      description: 'Automação de processos industriais com Node-RED e Python, desenvolvimento de soluções IoT, machine learning para manutenção preditiva e análise de dados.'
    },
    {
      name: 'Grafana & DevOps',
      level: 'Avançado',
      percentage: 87,
      categories: ['devops', 'uiux'],
      icon: <SiGrafana size={64} />,
      description: 'Criação de dashboards industriais com Grafana, implementação de pipelines CI/CD com Docker, monitoramento de sistemas e alertas em tempo real.'
    },
  ];
  
  // Todas as habilidades
  const skills: Skill[] = [
    ...featuredSkills,
    // Novas tecnologias da Indústria 4.0
    {
      name: 'Edge Computing & IoT',
      level: 'Avançado',
      percentage: 85,
      categories: ['industrial', 'devops'],
      icon: <FaRobot size={64} />,
      description: 'Implementação de soluções edge computing para processamento local de dados industriais, reduzindo latência e dependência de conectividade.'
    },
    {
      name: 'Digital Twin & SCADA',
      level: 'Avançado',
      percentage: 89,
      categories: ['industrial', 'uiux'],
      icon: <FaTachometerAlt size={64} />,
      description: 'Desenvolvimento de gêmeos digitais para simulação e monitoramento em tempo real, sistemas SCADA modernos com alarmes inteligentes.'
    }
  ];
  
  // Filtrar habilidades com base na categoria selecionada
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(selectedCategory));

  // Filtrar experiências com base no filtro selecionado
  const filteredExperiences = experienceFilter === 'all' 
    ? experiences 
    : experiences.filter((exp: Experience) => exp.categories?.includes(experienceFilter));

  // Função para mudar a habilidade do carrossel
  const goToSkill = (index: number) => {
    setActiveSkillIndex(index);
    setIsAutoplay(false);
    
    // Restaura o autoplay após 15 segundos de inatividade (aumentado de 10 para reduzir atualizações)
    setTimeout(() => setIsAutoplay(true), 15000);
  };

  // Logos das tecnologias para o carrossel - Atualizada
  const techLogos = [
    { name: 'Siemens', src: '/portfolio-danilo/About/Logo_Siemens.svg' },
    { name: 'React', src: '/portfolio-danilo/About/Logo_React.svg' },
    { name: 'TypeScript', src: '/portfolio-danilo/About/Logo_TypeScript.svg' },
    { name: 'Node-RED', src: '/portfolio-danilo/About/Logo_NodeRed.svg' },
    { name: 'Python', src: '/portfolio-danilo/About/Logo_Python.svg' },
    { name: 'Docker', src: '/portfolio-danilo/About/Logo_Docker.svg' },
    { name: 'Grafana', src: '/portfolio-danilo/About/Logo_Grafana.svg' },
    { name: 'JavaScript', src: '/portfolio-danilo/About/Logo_JavaScript.svg' },
    { name: 'Go', src: '/portfolio-danilo/About/Logo_Go.svg' },
    { name: 'PostgreSQL', src: '/portfolio-danilo/About/Logo_Postgresql.svg' }
  ];

  // Componente para Filtro de Experiência - Animações otimizadas
  const ExperienceFilter = ({ active, onFilterChange }: { active: string; onFilterChange: (filter: string) => void }) => {
    const filters = [
      { id: 'all', label: 'Todas' },
      { id: 'automacao', label: 'Automação' },
      { id: 'industria', label: 'Indústria' },
      { id: 'desenvolvimento', label: 'Desenvolvimento' },
    ];
    
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === filter.id 
                ? 'bg-[#FFD700] text-[#00158E] shadow-lg' 
                : 'bg-[#00158E] text-gray-300 hover:text-white border border-[#FFD700]/30'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    );
  };

  // Card da Timeline para Experiência Profissional - Animações otimizadas
  const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
      <div className="mb-12 relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-[#FFD700] bg-opacity-30"></div>
        
        <div className="flex gap-6">
          {/* Ícone */}
          <div
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: experience.iconBg }}
          >
            <FaBriefcase className="w-8 h-8 text-[#FFD700]" />
          </div>
          
          {/* Conteúdo */}
          <div className="flex-1">
            <div className="bg-[#00158E] rounded-xl p-6 shadow-lg border border-[#FFD700]/30 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-xl font-bold">{experience.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <FaBuilding className="text-[#FFD700]" />
                <p className="text-gray-300 text-base font-semibold">
                  {experience.company}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>{experience.location}</span>
                <span className="mx-2">•</span>
                <FaCalendarAlt className="text-gray-400" />
                <span>{experience.date}</span>
              </div>

              <ul className="mt-5 list-disc list-inside space-y-2">
                {experience.points.map((point: string, index: number) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-[#FFD700]/30">
                <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                  <FaTools className="text-[#FFD700]" />
                  Ferramentas & Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string, index: number) => (
                    <span
                      key={`tech-${index}`}
                      className="bg-[#0F054C] px-3 py-1 rounded-md text-xs text-white border border-[#FFD700]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card da Timeline para Formação Acadêmica - Animações otimizadas
  const EducationCard = ({ education }: { education: Education }) => {
    return (
      <div className="mb-12 relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-[#FFD700] bg-opacity-30"></div>
        
        <div className="flex gap-6">
          {/* Ícone */}
          <div
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: education.iconBg }}
          >
            <FaGraduationCap className="w-8 h-8 text-[#FFD700]" />
          </div>
          
          {/* Conteúdo */}
          <div className="flex-1">
            <div className="bg-[#00158E] rounded-xl p-6 shadow-lg border border-[#FFD700]/30 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-xl font-bold">{education.degree}</h3>
              <div className="flex items-center gap-2 mt-1">
                <FaBuilding className="text-[#FFD700]" />
                <p className="text-gray-300 text-base font-semibold">
                  {education.institution}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-2 text-gray-400 text-sm">
                <FaCalendarAlt className="text-gray-400" />
                <span>{education.date}</span>
              </div>

              <p className="text-white text-sm mt-5 leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card para Certificações - Animações otimizadas
  const CertificationCard = ({ certification }: { certification: Certification }) => {
    return (
      <div className="bg-[#00158E] p-6 rounded-2xl shadow-lg border border-[#FFD700]/30 hover:shadow-xl transition-shadow duration-300 w-full sm:w-[300px] lg:w-[350px]">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0F054C] border border-[#FFD700]/30">
            <img 
              src={certification.icon} 
              alt={certification.organization} 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"/></svg>';
              }}
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{certification.title}</h3>
            <p className="text-gray-300 text-sm">{certification.organization}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <FaCalendarAlt className="text-gray-400" />
          <span>Emitido em: {certification.date}</span>
        </div>

        <div className="bg-[#0F054C] p-3 rounded-lg flex items-center justify-between border border-[#FFD700]/30">
          <div className="flex items-center gap-2">
            <FaCertificate className="text-[#FFD700]" />
            <span className="text-white text-sm">Credencial</span>
          </div>
          {certification.credentialUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-white text-sm hover:underline transition-colors"
            >
              Ver certificado
            </a>
          ) : (
            <span className="text-gray-400 text-sm">Disponível mediante solicitação</span>
          )}
        </div>
      </div>
    );
  };

  // Definir renderização do conteúdo baseado na aba ativa
  const renderTabContent = () => {
    switch (activeTab) {
      case 'perfil':
        return (
          <div className="flex flex-col h-full gap-8 p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="profile-image-container mb-6">
                  <img 
                    src="/portfolio-danilo/About/DaniloLira.png" 
                    alt="Danilo Lira - Especialista em Automação Industrial" 
                    className="profile-image" 
                  />
                </div>
                
                <p className="text-[#FFD700] font-semibold text-lg md:text-xl mb-4">
                  Especialista em Automação Industrial
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm font-medium border border-[#FFD700]/30 shadow-md">
                    10+ anos de experiência
                  </span>
                  <span className="px-4 py-2 bg-[#0F054C] text-white rounded-full text-sm font-medium border border-[#FFD700]/30 shadow-md">
                    Indústria 4.0
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-5 text-gray-200 text-justify">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="text-[#FFD700] mr-3">Minha</span> Trajetória
                </h3>
                
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Sou Técnico em Automação Industrial e Desenvolvedor de Software com mais de 10 anos 
                  de experiência em integração de sistemas industriais e desenvolvimento 
                  de soluções para a <span className="text-[#FFD700]">Indústria 4.0</span>.
                </p>
                
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Com expertise em <span className="text-[#FFD700]">conectividade industrial</span>, transformo dados em informações acionáveis 
                  através de plataformas que integram o chão de fábrica ao nível gerencial, utilizando 
                  tecnologias como <span className="text-[#FFD700]">Node-RED, Go e Python</span>.
                </p>
                
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Crio HMIs e supervisórios modernos seguindo o padrão <span className="text-[#FFD700]">ISA 101</span>, acessíveis via navegador 
                  ou dispositivos móveis, utilizando <span className="text-[#FFD700]">Grafana e React</span> para eliminar dependências 
                  de soluções tradicionais.
                </p>
              </div>
            </div>
            
            {/* Carrossel de tecnologias - Simplificado */}
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
                Tecnologias que <span className="text-[#FFD700]">Domino</span>
              </h3>
              
              <div className="tech-carousel-container">
                <div className="tech-carousel-track">
                  {[...Array(2)].map((_, groupIndex) => (
                    <React.Fragment key={`group-${groupIndex}`}>
                      {techLogos.map((logo, index) => (
                        <div 
                          key={`${groupIndex}-${index}`}
                          className="tech-carousel-item"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'competencias':
        return (
          <div className="p-6 md:p-10 h-full">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Principais <span className="text-[#FFD700]">Competências</span>
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm">
                Combinação de conhecimentos em automação industrial e desenvolvimento de software
              </p>
            </div>
            
            {/* Filtros de categorias - Simplificado */}
            <div className="overflow-x-auto py-4 mb-8">
              <div className="flex gap-2 md:gap-3 min-w-max px-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative overflow-hidden flex items-center gap-2 px-3 py-2 rounded-xl transition-all shadow-md text-xs md:text-sm border
                      ${selectedCategory === category.id 
                        ? 'bg-gradient-to-r from-[#FFD700] to-[#FFD700]/80 text-[#00158E] border-[#FFD700]/30 shadow-lg' 
                        : 'bg-[#00158E] text-white hover:bg-[#00158E]/80 border-[#FFD700]/30 shadow-sm'
                      }`}
                  >
                    <span className="text-base">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Carrossel/Display de Skills - Simplificado */}
            <div className="relative mb-6" ref={carouselRef}>
              <div
                className="bg-[#00158E] rounded-3xl p-6 shadow-xl border border-[#FFD700]/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#0F054C] flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]/30 shadow-lg">
                      {featuredSkills[activeSkillIndex].icon}
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3">{featuredSkills[activeSkillIndex].name}</h4>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border shadow-md
                        ${featuredSkills[activeSkillIndex].level === 'Especialista' ? 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30' : 
                          'bg-[#0F054C] text-blue-300 border-[#FFD700]/30'}`
                      }>
                        {featuredSkills[activeSkillIndex].level}
                      </span>
                      <div className="flex-1 h-2 bg-[#0F054C] rounded-full overflow-hidden ml-2 border border-[#FFD700]/30 shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-[#FFD700]/80 to-[#FFD700]"
                          style={{ width: `${featuredSkills[activeSkillIndex].percentage}%` }}
                        />
                      </div>
                      <span className="text-[#FFD700] font-medium">
                        {featuredSkills[activeSkillIndex].percentage}%
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      {featuredSkills[activeSkillIndex].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredSkills[activeSkillIndex].categories.map(cat => {
                        const category = categories.find(c => c.id === cat);
                        return category ? (
                          <span 
                            key={cat} 
                            className="px-3 py-1 rounded-full text-xs border shadow-sm"
                            style={{ 
                              backgroundColor: `${category.color}15`, 
                              color: category.color,
                              borderColor: `${category.color}30`
                            }}
                          >
                            {category.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Botões de navegação */}
              <div className="flex justify-center gap-2 mt-4">
                {featuredSkills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSkill(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeSkillIndex 
                        ? 'bg-[#FFD700] w-6' 
                        : 'bg-gray-600 hover:bg-gray-500 w-2'
                    }`}
                    aria-label={`Ver habilidade ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Setas de navegação */}
              <button
                className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0F054C] border-2 border-[#FFD700]/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#00158E] transition-colors shadow-lg"
                onClick={() => goToSkill((activeSkillIndex - 1 + featuredSkills.length) % featuredSkills.length)}
              >
                ←
              </button>
              
              <button
                className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0F054C] border-2 border-[#FFD700]/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#00158E] transition-colors shadow-lg"
                onClick={() => goToSkill((activeSkillIndex + 1) % featuredSkills.length)}
              >
                →
              </button>
            </div>
            
            {/* Grid de Skills - Simplificado */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {filteredSkills.slice(0, 6).map((skill, index) => {
                let colorClass = '';
                if (skill.percentage >= 90) {
                  colorClass = 'from-[#FFD700] to-[#FFC800]'; // Especialista
                } else if (skill.percentage >= 75) {
                  colorClass = 'from-[#FFD700]/80 to-[#FFD700]'; // Avançado
                } else {
                  colorClass = 'from-[#FFD700]/60 to-[#FFD700]/80'; // Intermediário
                }
                
                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="skill-card-individual bg-[#00158E] border border-[#FFD700]/30 rounded-xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0F054C] flex-shrink-0 flex items-center justify-center text-[#FFD700] border border-[#FFD700]/30 shadow-md">
                        {React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-white mb-1">{skill.name}</h4>
                        <p className="text-xs text-gray-300">{skill.level}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Proficiência</span>
                        <span className="text-[#FFD700] font-medium">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#0F054C] rounded-full overflow-hidden border border-[#FFD700]/30 shadow-inner">
                        <div
                          className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
        
case 'experiencia':
  return (
    <div className="p-6 md:p-8 h-full">
      <ExperienceSection 
        experiences={experiences}
        education={education}
        certifications={certifications}
      />
    </div>

        );
        
      default:
        return null;
    }
  };

  return (
    <div id="about" className="relative w-full overflow-hidden bg-[#0F054C] py-16 md:py-24">
      {/* Background simples (otimizado para performance) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#00158E]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#00158E]/30 to-transparent"></div>
      </div>
      
      {/* Container principal - Adequado para telas grandes */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] 4xl:max-w-[3000px]">
        {/* Cabeçalho - Simplificado */}
        <header className="text-center mb-12 md:mb-16">
         
          
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light">
            Automação industrial e desenvolvimento para a <span className="text-[#FFD700] font-medium">Indústria 4.0</span>
          </p>
        </header>

        {/* Card principal com abas - Otimizado para telas grandes */}
          <div className="w-full bg-[#00158E] rounded-3xl shadow-2xl shadow-[#00158E]/30 border border-[#FFD700]/30 overflow-hidden mx-auto xl:max-w-6xl screen-2xl-width-85 screen-3xl-width-80 screen-4xl-width-75 mb-16">
          {/* Abas na parte superior */}
          <div className="flex border-b border-[#FFD700]/30">
            <button 
              className={`px-6 py-4 text-center flex-1 transition-all ${
                activeTab === 'perfil' 
                ? 'bg-[#0F054C] text-[#FFD700] font-medium border-b-2 border-[#FFD700]' 
                : 'text-gray-300 hover:bg-[#0F054C]/50'
              }`}
              onClick={() => setActiveTab('perfil')}
            >
              <span className="inline-block mr-2">👨‍💻</span> Perfil
            </button>
            
            <button 
              className={`px-6 py-4 text-center flex-1 transition-all ${
                activeTab === 'competencias' 
                ? 'bg-[#0F054C] text-[#FFD700] font-medium border-b-2 border-[#FFD700]' 
                : 'text-gray-300 hover:bg-[#0F054C]/50'
              }`}
              onClick={() => setActiveTab('competencias')}
            >
              <span className="inline-block mr-2">🚀</span> Competências
            </button>
            
            <button 
              className={`px-6 py-4 text-center flex-1 transition-all ${
                activeTab === 'experiencia' 
                ? 'bg-[#0F054C] text-[#FFD700] font-medium border-b-2 border-[#FFD700]' 
                : 'text-gray-300 hover:bg-[#0F054C]/50'
              }`}
              onClick={() => setActiveTab('experiencia')}
            >
              <span className="inline-block mr-2">📈</span> Experiência
            </button>
          </div>
          
               {/* Conteúdo das abas - Altura ajustável para diferentes tamanhos de tela */}
              <div className="min-h-[700px] lg:min-h-[750px] xl:min-h-[800px] 2xl:min-h-[850px] screen-3xl-min-height screen-4xl-min-height max-h-screen overflow-y-auto">
               {renderTabContent()}
             </div>
              </div>
        
        {/* CTA */}
        <div className="text-center">
          <a 
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-[#FFD700] text-[#00158E] font-medium text-base md:text-lg rounded-full hover:bg-white transition-all shadow-lg shadow-[#FFD700]/30 border-2 border-[#FFD700]/30"
          >
            Ver meus projetos
            <span>→</span>
          </a>
        </div>
      </div>
      
      {/* Botão mobile menu - Simplificado */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 rounded-full bg-[#FFD700] text-[#00158E] flex items-center justify-center text-2xl shadow-lg shadow-[#FFD700]/30 border-2 border-[#FFD700]/30"
        >
          {isMobileMenuOpen ? '×' : '≡'}
        </button>
        
        {isMobileMenuOpen && (
          <div
            className="absolute bottom-16 right-0 w-64 bg-[#00158E] rounded-xl shadow-xl shadow-[#00158E]/40 border border-[#FFD700]/30 p-4"
          >
            <nav>
              <div className="space-y-1">
                <a href="#home" className="block px-4 py-2 text-white hover:bg-[#0F054C] rounded border-b border-[#FFD700]/30">Início</a>
                <a href="#about" className="block px-4 py-2 bg-[#FFD700] text-[#00158E] font-medium rounded">Sobre</a>
                <a href="#experience" className="block px-4 py-2 text-white hover:bg-[#0F054C] rounded border-b border-[#FFD700]/30">Experiência</a>
                <a href="#projetos" className="block px-4 py-2 text-white hover:bg-[#0F054C] rounded border-b border-[#FFD700]/30">Projetos</a>
                <a href="#contato" className="block px-4 py-2 text-white hover:bg-[#0F054C] rounded">Contato</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;