import { Experience, Education, Certification, Skill } from '../types/experience';

// Experiências profissionais baseadas no LinkedIn de Danilo Lira
export const experiences: Experience[] = [
  {
    title: "Técnico de automação",
    company: "RLS automação",
    icon: "/src/assets/icons/rls.png",
    iconBg: "#E6DEDD",
    date: "jun de 2024 - o momento (10 meses)",
    points: [
      "Desenvolvimento de projetos de automação industrial para clientes de diversos setores",
      "Implementação de sistemas de controle e monitoramento baseados em Siemens S7-1500",
      "Programação de interfaces homem-máquina (HMI) para operação intuitiva",
      "Integração de sistemas SCADA com bancos de dados para análise de desempenho",
      "Desenvolvimento de soluções de Internet das Coisas Industrial (IIoT)"
    ],
    location: "Lisboa, Portugal",
    technologies: ["Siemens S7", "SCADA", "HMI", "OPC UA", "IIoT", "Node-RED", "SQL"],
    categories: ["automacao", "desenvolvimento", "industria40"]
  },
  {
    title: "Técnico Automação / Elétrica",
    company: "Central de Cervejas e Bebidas",
    icon: "/src/assets/icons/centralcervejas.png",
    iconBg: "#383E56",
    date: "dez de 2023 - jun de 2024 (7 meses)",
    points: [
      "Manutenção corretiva e preventiva em linhas de produção de alta velocidade",
      "Diagnóstico e solução de problemas em sistemas de controle automatizados",
      "Implementação de melhorias nos processos produtivos aumentando OEE em 12%",
      "Configuração e otimização de parâmetros em equipamentos de envase",
      "Coordenação com equipes de produção para minimizar tempo de inatividade"
    ],
    location: "Portugal",
    technologies: ["Allen-Bradley", "Siemens S7", "Instrumentação", "Elétrica Industrial", "Manutenção"],
    categories: ["automacao", "industria"]
  },
  {
    title: "Técnico de automação",
    company: "Font Salem Portugal",
    icon: "/src/assets/icons/fontsalem.png",
    iconBg: "#E6DEDD",
    date: "jul de 2023 - dez de 2023 (6 meses)",
    points: [
      "Manutenção de equipamentos em linhas de produção de bebidas",
      "Implementação de sistemas de instrumentação para controle de qualidade",
      "Desenvolvimento de procedimentos de manutenção preventiva",
      "Diagnóstico e solução de problemas complexos em sistemas automatizados",
      "Treinamento de operadores para uso adequado de equipamentos"
    ],
    location: "Santarém, Portugal",
    technologies: ["PLCs", "Instrumentação", "Pneumática", "Hidráulica", "Sensores"],
    categories: ["automacao", "industria"]
  },
  {
    title: "Técnico de automação",
    company: "Tecnale Automação de Sistemas Ltda",
    icon: "/src/assets/icons/tecnale.png",
    iconBg: "#383E56",
    date: "fev de 2023 - mar de 2023 (2 meses)",
    points: [
      "Implementação de projetos de automação para clientes industriais",
      "Programação e configuração de PLCs para controle de processos",
      "Desenvolvimento de interfaces SCADA para monitoramento em tempo real",
      "Integração de sensores e atuadores em sistemas de controle",
      "Comissionamento e testes de sistemas automatizados"
    ],
    location: "Recife, Pernambuco, Brasil",
    technologies: ["Siemens S7", "Allen-Bradley", "SCADA", "Instrumentação", "Redes Industriais"],
    categories: ["automacao", "desenvolvimento"]
  },
  {
    title: "Técnico de automação",
    company: "Ambev",
    icon: "/src/assets/icons/ambev.png",
    iconBg: "#E6DEDD",
    date: "fev de 2014 - jan de 2023 (9 anos)",
    points: [
      "Manutenção e reparo de equipamentos em linhas de produção de alta velocidade",
      "Implementação de melhorias contínuas nos processos produtivos",
      "Programação e modificação de sistemas de controle Allen-Bradley",
      "Diagnóstico e solução de problemas complexos em ambiente industrial",
      "Liderança de projetos de modernização e atualização de equipamentos"
    ],
    location: "Brasil",
    technologies: ["Allen-Bradley ControlLogix", "CompactLogix", "FactoryTalk", "RSLogix", "Studio 5000"],
    categories: ["automacao", "industria"]
  }
];

export const education: Education[] = [
  {
    degree: "Tecnologia da Informação/Sistemas da Informação",
    institution: "Estácio",
    date: "abr de 2021 - dez de 2023",
    description: "Formação em Tecnologia da Informação com foco em Sistemas da Informação, desenvolvendo competências em análise de dados, bancos de dados SQL e integração de sistemas. Projeto final focado na integração entre sistemas industriais e corporativos.",
    icon: "/src/assets/icons/estacio.png",
    iconBg: "#E6DEDD"
  },
  {
    degree: "Técnico Eletromecânico / Automação",
    institution: "SENAI Pernambuco",
    date: "2012 - 2014",
    description: "Formação técnica em eletromecânica e automação industrial, abrangendo pneumática, hidráulica, manutenção preventiva, programação de PLCs, redes industriais e sistemas de controle. Curso com forte ênfase em aplicações práticas em ambiente industrial.",
    icon: "/src/assets/icons/senai.png",
    iconBg: "#383E56"
  }
];

export const certifications: Certification[] = [
  {
    title: "Especialista em Programação Siemens",
    organization: "Siemens",
    date: "2024",
    credentialUrl: "#",
    icon: "/src/assets/icons/siemens.png"
  },
  {
    title: "Programador Certificado Allen-Bradley",
    organization: "Rockwell Automation",
    date: "2022",
    credentialUrl: "#",
    icon: "/src/assets/icons/rockwell.png"
  },
  {
    title: "Especialista em Manutenção Preventiva",
    organization: "SENAI",
    date: "2014",
    credentialUrl: "#",
    icon: "/src/assets/icons/senai.png"
  },
  {
    title: "Redes e Protocolos Industriais",
    organization: "Profibus Internacional",
    date: "2019",
    credentialUrl: "#",
    icon: "/src/assets/icons/profibus.png"
  },
  {
    title: "Técnico em Sensores e Instrumentação",
    organization: "IFM",
    date: "2018",
    credentialUrl: "#",
    icon: "/src/assets/icons/ifm.png"
  },
  {
    title: "Fundamentos de Indústria 4.0",
    organization: "FIEMG",
    date: "2021",
    credentialUrl: "#",
    icon: "/src/assets/icons/fiemg.png"
  }
];

export const skills: Skill[] = [
  // Habilidades de Automação
  {
    name: "Siemens PLCs",
    icon: "/src/assets/icons/siemens.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Allen-Bradley",
    icon: "/src/assets/icons/rockwell.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "HMI/IHM",
    icon: "/src/assets/icons/hmi.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "Controle Industrial",
    icon: "/src/assets/icons/control.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Manutenção de Equipamentos",
    icon: "/src/assets/icons/maintenance.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Redes Industriais",
    icon: "/src/assets/icons/network.png",
    category: "automacao",
    level: "avançado"
  },
  
  // Habilidades de Indústria 4.0
  {
    name: "Automação de Processos",
    icon: "/src/assets/icons/process.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "IIoT",
    icon: "/src/assets/icons/iot.png",
    category: "industria40",
    level: "intermediário"
  },
  {
    name: "Instrumentação",
    icon: "/src/assets/icons/instrument.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "SCADA",
    icon: "/src/assets/icons/scada.png",
    category: "industria40",
    level: "intermediário"
  },
  {
    name: "Pneumática",
    icon: "/src/assets/icons/pneumatic.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "Digital Twin",
    icon: "/src/assets/icons/digital-twin.png",
    category: "industria40",
    level: "básico"
  },
  {
    name: "Sistemas Elétricos",
    icon: "/src/assets/icons/electrical.png",
    category: "industria40",
    level: "avançado"
  },
  
  // Habilidades de Programação
  {
    name: "Ladder Logic",
    icon: "/src/assets/icons/ladder.png",
    category: "programacao",
    level: "especialista"
  },
  {
    name: "Structured Text",
    icon: "/src/assets/icons/structured-text.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "Data Analysis",
    icon: "/src/assets/icons/dataanalysis.png",
    category: "programacao",
    level: "intermediário"
  },
  {
    name: "MySQL",
    icon: "/src/assets/icons/mysql.png",
    category: "programacao",
    level: "intermediário"
  },
  {
    name: "Node-RED",
    icon: "/src/assets/icons/nodered.png",
    category: "programacao",
    level: "intermediário"
  },
  {
    name: "Sistemas de Automação",
    icon: "/src/assets/icons/automation.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "Desenvolvimento de Projetos",
    icon: "/src/assets/icons/project.png",
    category: "programacao",
    level: "avançado"
  }
];