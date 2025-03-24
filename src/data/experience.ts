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
      "Desenvolvimento de projetos de automação industrial",
      "Implementação de sistemas de controle e monitoramento",
      "Programação de PLCs e interfaces homem-máquina",
      "Automação de processos industriais",
      "Integração de sistemas e equipamentos"
    ],
    location: "Lisboa, Portugal",
    technologies: ["Siemens", "Automação de processos", "Controle industrial", "PLCs", "HMI"]
  },
  {
    title: "Técnico Automação / Elétrica",
    company: "Central de Cervejas e Bebidas",
    icon: "/src/assets/icons/centralcervejas.png",
    iconBg: "#383E56",
    date: "dez de 2023 - jun de 2024 (7 meses)",
    points: [
      "Automação e automação de processos",
      "Manutenção de sistemas de controle",
      "Implementação de melhorias nos processos produtivos",
      "Suporte técnico às linhas de produção",
      "Desenvolvimento e implementação de soluções de automação"
    ],
    location: "Portugal",
    technologies: ["Automação", "Automação de processos", "Elétrica", "PLCs", "Instrumentação"]
  },
  {
    title: "Técnico de automação",
    company: "Font Salem Portugal",
    icon: "/src/assets/icons/fontsalem.png",
    iconBg: "#E6DEDD",
    date: "jul de 2023 - dez de 2023 (6 meses)",
    points: [
      "Manutenção de equipamentos",
      "Instrumentação",
      "Automação de processos industriais",
      "Diagnóstico e resolução de problemas em sistemas automatizados",
      "Implementação de melhorias e otimizações"
    ],
    location: "Santarém, Portugal",
    technologies: ["Manutenção de equipamentos", "Instrumentação", "Automação", "PLCs"]
  },
  {
    title: "Técnico de automação",
    company: "Tecnale Automação de Sistemas Ltda",
    icon: "/src/assets/icons/tecnale.png",
    iconBg: "#383E56",
    date: "fev de 2023 - mar de 2023 (2 meses)",
    points: [
      "Manutenção de equipamentos", 
      "Instrumentação",
      "Programação de PLCs",
      "Implementação de sistemas de automação",
      "Comissionamento de sistemas"
    ],
    location: "Recife, Pernambuco, Brasil",
    technologies: ["Manutenção de equipamentos", "Instrumentação", "Automação", "PLCs", "SCADA"]
  },
  {
    title: "Técnico de automação",
    company: "Ambev",
    icon: "/src/assets/icons/ambev.png",
    iconBg: "#E6DEDD",
    date: "fev de 2014 - jan de 2023 (9 anos)",
    points: [
      "Manutenção de equipamentos",
      "Programação e manutenção de sistemas Allen-Bradley",
      "Implementação de melhorias nos processos industriais",
      "Automação de linhas de produção",
      "Treinamento de equipes técnicas"
    ],
    location: "Brasil",
    technologies: ["Allen-Bradley", "Manutenção de equipamentos", "Automação", "PLCs", "SCADA"]
  }
];

export const education: Education[] = [
  {
    degree: "Tecnologia da Informação/Sistemas da Informação",
    institution: "Estácio",
    date: "abr de 2021 - dez de 2023",
    description: "Formação em Tecnologia da Informação com foco em Sistemas da Informação, desenvolvendo competências em Data Analysis e MySQL.",
    icon: "/src/assets/icons/estacio.png",
    iconBg: "#E6DEDD"
  },
  {
    degree: "Técnico Eletromecânico / Automação",
    institution: "SENAI Pernambuco",
    date: "2012 - 2014",
    description: "Formação técnica em eletromecânica e automação industrial, incluindo pneumática, manutenção preventiva e sistemas de controle.",
    icon: "/src/assets/icons/senai.png",
    iconBg: "#383E56"
  }
];

export const certifications: Certification[] = [
  {
    title: "Técnico de Automação - RLS automação",
    organization: "Siemens",
    date: "2024",
    credentialUrl: "#",
    icon: "/src/assets/icons/siemens.png"
  },
  {
    title: "Especialista em Allen-Bradley",
    organization: "Rockwell Automation",
    date: "2022",
    credentialUrl: "#",
    icon: "/src/assets/icons/rockwell.png"
  },
  {
    title: "Manutenção Preventiva Industrial",
    organization: "SENAI",
    date: "2014",
    credentialUrl: "#",
    icon: "/src/assets/icons/senai.png"
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
  
  // Habilidades de Indústria 4.0
  {
    name: "Automação de Processos",
    icon: "/src/assets/icons/process.png",
    category: "industria40",
    level: "avançado"
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
    name: "Sistemas Elétricos",
    icon: "/src/assets/icons/electrical.png",
    category: "industria40",
    level: "avançado"
  },
  
  // Habilidades de Programação
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
    name: "Ladder Logic",
    icon: "/src/assets/icons/ladder.png",
    category: "programacao",
    level: "especialista"
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