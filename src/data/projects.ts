import { Project } from '@/types/project';

// Placeholder para imagens, substitua pelos caminhos reais posteriormente
const PLACEHOLDER_IMAGE = '/src/assets/images/placeholder.jpg';

// Para que os objetos possam ter a propriedade "featured", estendemos o tipo Project
export const projects: (Project & { featured?: boolean })[] = [
  {
    id: "transporte-paletes",
    title: "Sistema de Transporte Automatizado de Paletes",
    description:
      "Desenvolvimento de um sistema de automação para transporte de paletes com controle em tempo real, utilizando sensores, atuadores e técnicas de controle industrial.",
    image: "/src/assets/images/transporte-paletes.jpg", // Adicione a imagem correspondente
    tags: ["Automação Industrial", "HMI/SCADA", "PLC", "Sensores"],
    technologies: [
      { name: "Siemens S7-1500", icon: "siemens", color: "#0072BB" },
      { name: "HMI", icon: "hmi", color: "#39B54A" },
      { name: "Sensores", icon: "sensors", color: "#FF5722" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Node-RED", icon: "nodered", color: "#FF0000" }
    ],
    category: "automacao",
    highlights: [
      "Simulação interativa do sistema real",
      "Interface gráfica para monitoramento em tempo real",
      "Controle completo do ciclo de produção",
      "Parâmetros configuráveis de velocidade e tempo de ciclo"
    ],
    demoUrl: "/hmi-transporte", // Link para a simulação HMI
    details: {
      challenge:
        "Desenvolver um sistema de transporte automatizado para paletes em uma linha de produção, garantindo o controle preciso da movimentação entre diferentes estações de trabalho e a integração com outros sistemas da fábrica.",
      solution:
        "Implementação de um sistema de controle baseado em PLC Siemens S7-1500 com sensores de presença estrategicamente posicionados. Foi criada uma interface HMI intuitiva para operação e monitoramento, além de uma simulação interativa para testes e treinamento dos operadores.",
      results:
        "O sistema aumentou a eficiência do transporte em 35%, reduziu paradas não programadas em 25% e melhorou significativamente a visibilidade do processo. A simulação desenvolvida tornou-se uma ferramenta valiosa para treinamento e testes de novos cenários operacionais.",
      images: [
        "/src/assets/images/transporte-paletes.jpg",
        "/src/assets/images/transporte-simulation.jpg",
        "/src/assets/images/transporte-dashboard.jpg"
      ]
    },
    featured: true // Marcado como projeto em destaque
  },
  {
    id: "estacao-cip",
    title: "Estação CIP para Indústria de Bebidas",
    description:
      "Sistema automatizado de limpeza CIP (Clean-in-Place) para indústria de bebidas, otimizando processos de sanitização e reduzindo consumo de água e químicos.",
    image: "/src/assets/images/estacao-cip.jpg", // Adicione a imagem correspondente
    tags: ["Automação Industrial", "CIP", "Indústria 4.0", "Instrumentação"],
    technologies: [
      { name: "Siemens S7-1500", icon: "siemens", color: "#0072BB" },
      { name: "Instrumentação", icon: "instrument", color: "#39B54A" },
      { name: "SCADA", icon: "scada", color: "#6E44FF" },
      { name: "Controle de Processo", icon: "process", color: "#FF5722" },
      { name: "React", icon: "react", color: "#61DAFB" }
    ],
    category: "automacao",
    highlights: [
      "Sistema completo de limpeza CIP multi-fase",
      "Interface gráfica intuitiva para monitoramento em tempo real",
      "Controle avançado de válvulas e bombas",
      "Otimização de consumo de água e produtos químicos"
    ],
    demoUrl: "/hmi-cip", // Link para a simulação HMI
    details: {
      challenge:
        "Desenvolver um sistema automatizado de limpeza CIP para uma linha de produção de bebidas, garantindo sanitização adequada dos equipamentos, reduzindo o consumo de água e produtos químicos, e minimizando o tempo de inatividade da linha durante os processos de limpeza.",
      solution:
        "Implementação de um sistema CIP completo com controle através de PLC Siemens S7-1500, integrando tanques de soluções, bombas, válvulas e instrumentação para monitoramento em tempo real. O sistema foi projetado com cinco etapas sequenciais: pré-enxágue, limpeza cáustica, enxágue intermediário, limpeza ácida e enxágue final, com recuperação e reúso de soluções quando possível.",
      results:
        "O sistema reduziu o consumo de água em 30%, diminuiu o uso de produtos químicos em 25% e aumentou a eficiência do processo de limpeza, reduzindo o tempo total em 20%. A interface de monitoramento permite acompanhar cada fase do processo e realizar ajustes em tempo real quando necessário.",
      images: [
        "/src/assets/images/estacao-cip.jpg",
        "/src/assets/images/cip-dashboard.jpg",
        "/src/assets/images/cip-piping.jpg"
      ]
    },
    featured: true // Marcado como projeto em destaque
  },
  {
    id: "automacao-linha-producao",
    title: "Automação de Linha de Produção Completa",
    description:
      "Sistema de automação completo para linha de produção com integração IoT, coleta de dados em tempo real e dashboard de análise de performance.",
    image: PLACEHOLDER_IMAGE,
    tags: ["Automação Industrial", "PLC", "SCADA", "IoT", "Indústria 4.0"],
    technologies: [
      { name: "Siemens S7-1500", icon: "siemens", color: "#0072BB" },
      { name: "TIA Portal", icon: "tia", color: "#0072BB" },
      { name: "WinCC", icon: "wincc", color: "#0072BB" },
      { name: "OPC UA", icon: "opcua", color: "#4CAF50" },
      { name: "Node-RED", icon: "nodered", color: "#FF0000" },
      { name: "InfluxDB", icon: "influxdb", color: "#22ADF6" },
      { name: "Grafana", icon: "grafana", color: "#F46800" }
    ],
    category: "industria40",
    highlights: [
      "Aumento de 25% na eficiência produtiva",
      "Redução de 30% no tempo de inatividade",
      "Coleta e análise de dados em tempo real",
      "Implementação de manutenção preditiva com ML"
    ],
    details: {
      challenge:
        "A planta de produção enfrentava problemas de eficiência, com frequentes paradas não programadas e falta de visibilidade do processo produtivo. Era necessário modernizar a linha para atender aos padrões da Indústria 4.0.",
      solution:
        "Implementação de um sistema completo de automação com PLCs Siemens S7-1500, integração via OPC UA, coleta de dados em bancos temporais e dashboard de análise com KPIs de produção. Desenvolvimento de algoritmos de manutenção preditiva baseados em machine learning.",
      results:
        "Aumento significativo da eficiência produtiva, redução de paradas não programadas, implementação bem-sucedida de manutenção preditiva e criação de uma infraestrutura de dados para análises avançadas.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  },
  {
    id: "sistema-scada-distribuido",
    title: "Sistema SCADA Distribuído para Monitoramento Multi-planta",
    description:
      "Implementação de sistema SCADA distribuído para monitoramento e controle de múltiplas plantas industriais com sincronização em nuvem.",
    image: PLACEHOLDER_IMAGE,
    tags: ["SCADA", "Automação Distribuída", "Cloud", "Monitoramento Remoto"],
    technologies: [
      { name: "InTouch", icon: "intouch", color: "#00A4E4" },
      { name: "System Platform", icon: "wonderware", color: "#00A4E4" },
      { name: "SQL Server", icon: "sqlserver", color: "#CC2927" },
      { name: "Azure", icon: "azure", color: "#0089D6" },
      { name: "OPC UA", icon: "opcua", color: "#4CAF50" }
    ],
    category: "scada",
    highlights: [
      "Monitoramento centralizado de 5 plantas",
      "Sincronização de dados em tempo real",
      "Acesso remoto seguro via web e mobile",
      "Histórico completo de operações"
    ],
    details: {
      challenge:
        "A empresa precisava de uma forma centralizada de monitorar várias plantas geograficamente distribuídas, mantendo a confiabilidade dos dados e permitindo acesso remoto seguro.",
      solution:
        "Desenvolvimento de uma arquitetura SCADA distribuída utilizando Wonderware System Platform, com redundância de servidores, sincronização de dados na nuvem Azure e interfaces de acesso web e mobile customizadas.",
      results:
        "Centralização bem-sucedida do monitoramento de 5 plantas industriais, com acesso seguro de qualquer lugar e melhoria significativa na tomada de decisões operacionais baseadas em dados.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  },
  {
    id: "digital-twin-processo",
    title: "Digital Twin para Otimização de Processo",
    description:
      "Desenvolvimento de um gêmeo digital para simulação e otimização de processos industriais, permitindo testes virtuais antes da implementação física.",
    image: PLACEHOLDER_IMAGE,
    tags: [
      "Digital Twin",
      "Simulação",
      "Otimização",
      "Indústria 4.0",
      "Machine Learning"
    ],
    technologies: [
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00" },
      { name: "Unity 3D", icon: "unity", color: "#000000" },
      { name: "Siemens PLCSim Advanced", icon: "plcsim", color: "#0072BB" },
      { name: "OPC UA", icon: "opcua", color: "#4CAF50" },
      { name: "Azure Digital Twins", icon: "azure", color: "#0089D6" }
    ],
    category: "industria40",
    highlights: [
      "Redução de 45% no tempo de comissionamento",
      "Otimização de parâmetros de processo via simulação",
      "Treinamento virtual de operadores",
      "Integração com sistemas físicos via OPC UA"
    ],
    details: {
      challenge:
        "Necessidade de testar novas configurações e otimizações de processo sem impactar a produção real, além de reduzir o tempo de comissionamento de novos equipamentos.",
      solution:
        "Criação de um gêmeo digital completo do processo produtivo utilizando Unity 3D para visualização, Siemens PLCSim Advanced para emulação de PLCs e algoritmos de machine learning para otimização de parâmetros.",
      results:
        "Redução significativa no tempo de comissionamento, otimização bem-sucedida de parâmetros de processo e criação de uma plataforma de treinamento virtual para operadores.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  },
  {
    id: "retrofit-maquinas-legadas",
    title: "Retrofit de Máquinas Legadas com IIoT",
    description:
      "Projeto de modernização de máquinas antigas com tecnologias de Industrial IoT, permitindo monitoramento avançado sem substituição completa dos equipamentos.",
    image: PLACEHOLDER_IMAGE,
    tags: [
      "Retrofit",
      "IIoT",
      "Edge Computing",
      "Máquinas Legadas",
      "Indústria 4.0"
    ],
    technologies: [
      { name: "Raspberry Pi", icon: "raspberry", color: "#C51A4A" },
      { name: "Arduino", icon: "arduino", color: "#00979D" },
      { name: "MQTT", icon: "mqtt", color: "#660066" },
      { name: "Node-RED", icon: "nodered", color: "#FF0000" },
      { name: "Modbus", icon: "modbus", color: "#00979D" },
      { name: "AWS IoT", icon: "aws", color: "#FF9900" }
    ],
    category: "industria40",
    highlights: [
      "Modernização de 12 máquinas legadas",
      "ROI de 280% em 18 meses",
      "Monitoramento avançado sem substituição completa",
      "Implementação de OEE em tempo real"
    ],
    details: {
      challenge:
        "A empresa possuía diversas máquinas antigas ainda em bom estado de funcionamento, mas sem capacidade de monitoramento digital. Era necessário modernizá-las sem um grande investimento em substituição completa.",
      solution:
        "Desenvolvimento de módulos IoT baseados em Raspberry Pi e Arduino para retrofit, coletando dados via sensores adicionais e protocolos industriais como Modbus. Implementação de edge computing para processamento local e transmissão para nuvem via MQTT.",
      results:
        "Modernização bem-sucedida de 12 máquinas legadas, implementação de monitoramento OEE em tempo real e extensão significativa da vida útil dos equipamentos, com excelente retorno sobre investimento.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  },
  {
    id: "sistema-controle-batch",
    title: "Sistema de Controle em Batelada para Indústria Química",
    description:
      "Implementação de sistema de controle de produção em batelada seguindo padrão ISA-88 para processos químicos complexos.",
    image: PLACEHOLDER_IMAGE,
    tags: ["Batch Control", "ISA-88", "Indústria Química", "PLC", "DCS"],
    technologies: [
      { name: "Allen-Bradley ControlLogix", icon: "rockwell", color: "#E30022" },
      { name: "FactoryTalk Batch", icon: "factorytalk", color: "#E30022" },
      { name: "SQL Server", icon: "sqlserver", color: "#CC2927" },
      { name: "ISA-88", icon: "isa88", color: "#1A7DC1" }
    ],
    category: "plc",
    highlights: [
      "Automação completa do processo em batelada",
      "Conformidade com normas ISA-88",
      "Rastreabilidade total de lotes",
      "Flexibilidade para novos produtos"
    ],
    details: {
      challenge:
        "A indústria química necessitava de um sistema flexível de controle em batelada que permitisse a produção de diferentes produtos, mantendo rastreabilidade completa e conformidade com normas regulatórias.",
      solution:
        "Implementação de sistema de controle em batelada baseado nas normas ISA-88, utilizando ControlLogix e FactoryTalk Batch, com gestão de receitas, rastreabilidade completa e relatórios automáticos de produção.",
      results:
        "Automação completa do processo em batelada, permitindo a produção de diferentes produtos com mínima intervenção, garantindo qualidade consistente e atendendo a todos os requisitos regulatórios do setor químico.",
      images: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]
    }
  }
];
