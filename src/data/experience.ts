import { Experience, Education, Certification, Skill } from '../types/experience';

// Experiências profissionais (dados atualizados)
export const experiences: Experience[] = [
  {
    title: "Técnico de automação",
    company: "RLS automação",
    icon: "/src/assets/icons/rls.png",
    iconBg: "#E6DEDD",
    date: "jun de 2024 - o momento (10 meses)",
    points: [
      "Desenvolvimento e implementação de projetos de automação industrial, otimizando processos e elevando a eficiência operacional.",
      "Configuração e integração de sistemas de controle e monitoramento baseados em Siemens S7-1500, garantindo alta precisão e confiabilidade.",
      "Programação de interfaces HMI (Human Machine Interface) com foco em usabilidade, promovendo uma operação intuitiva.",
      "Integração de sistemas SCADA com bancos de dados robustos para análise de desempenho e suporte à tomada de decisão.",
      "Desenvolvimento de soluções IIoT para conectar dispositivos e automatizar processos industriais de forma inteligente."
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
      "Realização de manutenção corretiva e preventiva em linhas de produção de alta velocidade, assegurando continuidade e segurança operacional.",
      "Diagnóstico avançado e resolução de problemas em sistemas automatizados, minimizando paradas não programadas.",
      "Implementação de melhorias que elevaram o OEE dos processos produtivos em 12%.",
      "Configuração e otimização de parâmetros em equipamentos de envase, promovendo maior qualidade e eficiência.",
      "Coordenação com equipes de produção para reduzir tempos de inatividade e maximizar a produtividade."
    ],
    location: "Vialonga, Portugal",
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
      "Manutenção e calibração de equipamentos em linhas de produção de bebidas, assegurando desempenho consistente.",
      "Implementação de sistemas de instrumentação para monitoramento preciso e controle da qualidade do produto.",
      "Desenvolvimento e padronização de procedimentos de manutenção preventiva, reduzindo a ocorrência de falhas.",
      "Diagnóstico e resolução de problemas complexos em sistemas automatizados, garantindo continuidade operacional.",
      "Capacitação e treinamento de operadores para o uso seguro e eficiente dos equipamentos."
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
      "Planejamento e execução de projetos de automação focados na otimização dos processos industriais.",
      "Programação e configuração de PLCs utilizando linguagens Ladder e Structured Text, garantindo robustez e flexibilidade.",
      "Desenvolvimento de interfaces SCADA para monitoramento em tempo real e visualização de dados críticos.",
      "Integração de sensores, atuadores e dispositivos de rede para sistemas de controle integrados.",
      "Realização de comissionamento e testes rigorosos, assegurando a confiabilidade dos sistemas automatizados."
    ],
    location: "São Paulo, Brasil",
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
      "Manutenção e reparo de equipamentos em linhas de produção de alta velocidade, maximizando a produtividade.",
      "Implementação de iniciativas de melhoria contínua, elevando os índices de eficiência operacional.",
      "Programação e ajustes em sistemas de controle Allen-Bradley utilizando RSLogix e Studio 5000 para otimização de processos.",
      "Diagnóstico e resolução de problemas complexos em ambientes industriais, reduzindo paradas e perdas.",
      "Liderança e coordenação de projetos de modernização, introduzindo novas tecnologias e métodos avançados de automação."
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
    description: "Formação em TI com foco em Sistemas da Informação, desenvolvendo competências em análise de dados, bancos SQL e integração de sistemas, com projeto final voltado para a convergência entre ambientes industriais e corporativos.",
    icon: "/src/assets/icons/estacio.png",
    iconBg: "#E6DEDD"
  },
  {
    degree: "Técnico Eletromecânico / Automação",
    institution: "SENAI Pernambuco",
    date: "2012 - 2014",
    description: "Curso técnico com ênfase em eletromecânica e automação industrial, abrangendo pneumática, hidráulica, manutenção preventiva, programação de PLCs e redes industriais, com forte aplicação prática.",
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
    name: "Structured Text (SCL)",
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
