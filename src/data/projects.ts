export interface ProjectType {
  id: number;
  title: string;
  about: string;
  tech: string[];
  filter: string[];
  thumbnail: string;
  github: string;
  link?: string | null;
}

export const projects: ProjectType[] = [
  // PROJETOS REAIS - PRIMEIROS
  {
    id: 1,
    title: "Sistema Radar Industrial SICK RMS1000",
    about: "Sistema web/PLC para configuração radar SICK RMS1000 com áreas por amplitude. Monitora objetos específicos como barcos em eclusas. Integração S7 e interface real-time.",
    tech: ["Go", "NATS", "WebSocket", "React", "TypeScript", "Tailwind", "SVG/Figma", "Siemens S7"],
    filter: ["All", "Automação"],
    thumbnail: "/portfolio-danilo/images/Projeto_Radar.svg",
    github: "https://github.com/danilohenriquesilvalira/RADAR_COLETAS",
    link: null
  },
  {
    id: 2,
    title: "Multi-PLC Communication System TCP/IP",
    about: "Sistema robusto de comunicação entre múltiplos PLCs Siemens via TSEND_C/TRCV_C TCP/IP. Troca dinâmica de sinais e dados em tempo real com controle de erro automático.",
    tech: ["STEP 7", "TIA Portal", "SCL", "TSEND_C/TRCV_C", "TCP/IP", "PROFINET", "S7-1500", "HMI"],
    filter: ["All", "Automação"],
    thumbnail: "/portfolio-danilo/images/Projeto_Send_Receive.svg",
    github: "https://github.com/DaniloHenriqueLira/Automacao",
    link: null
  },
  
  // PROJETOS EM CONSTRUÇÃO - DEPOIS DOS REAIS
  {
    id: 3,
    title: "Dashboard IoT Indústria 4.0",
    about: "Plataforma web para visualização de dados de sensores IoT em tempo real com alertas automáticos, relatórios detalhados e análise preditiva para manufatura inteligente.",
    tech: ["React", "Node.js", "MongoDB", "MQTT", "InfluxDB", "Grafana"],
    filter: ["All", "IoT", "Web Development"],
    thumbnail: "/portfolio-danilo/images/project-placeholder-iot.jpg",
    github: "#",
    link: "#"
  },
  {
    id: 4,
    title: "App Mobile Manutenção Industrial",
    about: "Aplicativo mobile para registro e acompanhamento de ordens de manutenção preventiva e corretiva com notificações push, relatórios e integração com sistemas ERP.",
    tech: ["React Native", "Firebase", "TypeScript", "Push Notifications"],
    filter: ["All", "Mobile"],
    thumbnail: "/portfolio-danilo/images/project-placeholder-mobile.jpg",
    github: "#",
    link: "#"
  },
  {
    id: 5,
    title: "API Sistema ERP Industrial",
    about: "API robusta para integração de sistemas ERP com equipamentos de automação industrial. Autenticação JWT, documentação completa e alta disponibilidade.",
    tech: ["Node.js", "PostgreSQL", "Docker", "JWT", "Swagger", "Redis"],
    filter: ["All", "Backend"],
    thumbnail: "/portfolio-danilo/images/project-placeholder-backend.jpg",
    github: "#",
    link: "#"
  },
  {
    id: 6,
    title: "Portal Gestão Industrial",
    about: "Portal web completo para gestão de produção, qualidade e manutenção de equipamentos industriais com dashboards interativos e relatórios em tempo real.",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Chart.js", "Material-UI"],
    filter: ["All", "Web Development"],
    thumbnail: "/portfolio-danilo/images/project-placeholder-web.jpg",
    github: "#",
    link: "#"
  },
  {
    id: 7,
    title: "Rede PROFINET Cervejaria",
    about: "Projeto de rede industrial PROFINET para controle de processo automatizado em cervejaria com HMI touchscreen, redundância e supervisão completa.",
    tech: ["PROFINET", "TIA Portal", "HMI", "SIMATIC", "WinCC", "SCADA"],
    filter: ["All", "Automação"],
    thumbnail: "/portfolio-danilo/images/project-placeholder-automacao.jpg",
    github: "#",
    link: "#"
  }
];