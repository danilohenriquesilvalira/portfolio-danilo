import { Experience, Education, Certification, Skill } from '../types/experience';

// Experiências profissionais (dados atualizados)
export const experiences: Experience[] = [
  {
    title: "Especialista em Automação Industrial & Desenvolvedor Full-Stack",
    company: "RLS Automação",
    icon: "/src/assets/icons/rls.png",
    iconBg: "#E6DEDD",
    date: "jun de 2024 - o momento ( 1 ano )",
    points: [
      "Desenvolvimento e implementação de projetos completos de automação industrial para diversos segmentos em Portugal, Espanha e Moçambique, abrangendo desde sistemas básicos de controle até soluções complexas como eclusas de navegação, ETEI, sistemas de pulverização e processos alimentícios.",
      "Programação e comissionamento avançado em múltiplas plataformas de PLC: Siemens S7, Rockwell Allen-Bradley, Schneider Electric e Omron, garantindo soluções personalizadas e flexíveis para cada cliente internacional.",
      "Desenvolvimento especializado de supervisórios industriais utilizando WinCC, iFIX e Wonderware, criando interfaces modernas e intuitivas com gráficos avançados, alarmes e relatórios integrados aos sistemas de automação para projetos em três países.",
      "Configuração e implementação de redes industriais com múltiplos protocolos: Profinet, Ethernet/IP, Profibus, DeviceNet, Modbus TCP/RTU, AS-i e CAN, garantindo comunicação robusta entre dispositivos em projetos nacionais e internacionais.",
      "Execução de projetos internacionais incluindo viagens técnicas para Espanha e Moçambique para comissionamento, startup e treinamento local de equipes em sistemas de automação complexos.",
      "Integração completa de sensores industriais especializados (Sick, IFM) abrangendo sensores de pressão, radar, ultrassônicos, temperatura e instrumentação de precisão para monitoramento e controle em tempo real.",
      "Dimensionamento e desenvolvimento de projetos para diversos processos industriais incluindo sistemas CIP, xaroparia, cervejaria, linhas de produção automatizadas e melhorias de processos existentes.",
      "Programação simultânea de PLCs e desenvolvimento de supervisórios com interfaces gráficas avançadas, garantindo integração perfeita entre controle de campo e interface operacional.",
      "Criação de soluções IIoT avançadas integrando automação tradicional com tecnologias web modernas utilizando React, TypeScript, JavaScript e frameworks atuais para interfaces responsivas.",
      "Desenvolvimento full-stack de HMIs web e supervisórios modernos com arquiteturas escaláveis, utilizando backend robusto em Python, Go e Java para processamento de dados industriais.",
      "Implementação de infraestrutura de TI industrial completa: configuração de servidores Linux, bancos de dados PostgreSQL/MySQL e integração bidirecional PLC-database para coleta e análise de dados em tempo real.",
      "Desenvolvimento de dashboards inteligentes com IA integrada e sistemas WebSocket para monitoramento instantâneo, análise preditiva de processos e geração de relatórios automáticos para tomada de decisão."
    ],
    location: "Lisboa, Portugal",
    technologies: [
      // PLCs e Automação
      "Siemens S7-1200/1500", "Allen-Bradley ControlLogix", "Schneider Electric", "Omron PLCs",
      // Supervisórios
      "WinCC", "iFIX", "Wonderware", "SCADA", "HMI Industrial",
      // Redes Industriais 
      "Profinet", "Ethernet/IP", "Profibus", "DeviceNet", "Modbus TCP/RTU", "AS-i", "CAN", "OPC UA",
      // Sensores e Instrumentação
      "Sick Sensors", "IFM Sensors", "Sensores Radar", "Instrumentação",
      // Desenvolvimento Web/TI
      "React", "TypeScript", "JavaScript", "Python", "Go", "Java", "PostgreSQL", "MySQL",
      // Tecnologias Modernas
      "IIoT", "Node-RED", "WebSocket", "IA/ML", "Docker", "Linux Server", "Tailwind CSS"
    ],
    categories: ["automacao", "desenvolvimento", "industria"]
  },
  {
    title: "Técnico de Manutenção Elétrica & Automação Industrial",
    company: "Central de Cervejas e Bebidas (Sagres)",
    icon: "/src/assets/icons/centralcervejas.png",
    iconBg: "#383E56",
    date: "dez de 2023 - jun de 2024 (7 meses)",
    points: [
      "Manutenção especializada em sistemas Siemens S7-1200/1500 e S7-300 integrando toda a linha de produção cervejeira: enchedoras Krones, pasteurizador túnel, rotuladoras KHS, empacotadoras, paletizadoras e despaletizadoras automáticas.",
      "Intervenção em inversores de frequência Danfoss VLT e Siemens SINAMICS, otimizando controle de velocidade em transportadores Krones, sistemas de envase e equipamentos de alta precisão da linha de produção da Sagres.",
      "Manutenção elétrica preventiva e corretiva em painéis de comando, quadros de distribuição 400V, sistemas de acionamento e proteção elétrica de equipamentos críticos em ambiente industrial de grande porte.",
      "Troubleshooting avançado em redes Profinet e Ethernet, solucionando falhas de comunicação entre PLCs Siemens, HMIs industriais e dispositivos de campo em linhas de alta velocidade de produção contínua.",
      "Manutenção de inspetores eletrônicos de garrafas vazias e cheias, datadores inkjet, sistemas de visão artificial e equipamentos de controle de qualidade integrados à linha de envase.",
      "Intervenção em sistemas complexos de transporte automático Krones e KHS: esteiras modulares, elevadores, acumuladores dinâmicos e sistemas de orientação de garrafas com controle de posicionamento servo-assistido.",
      "Calibração e manutenção de instrumentação cervejeira crítica: sensores de nível, pressão, temperatura, medidores de CO₂, turbidez e sistemas de monitoramento de processo em tanques de armazenamento.",
      "Manutenção de sistemas pneumáticos Festo e SMC em equipamentos de envase, incluindo válvulas proporcionais, cilindros rotativos e sistemas de vácuo para manipulação de garrafas e embalagens.",
      "Implementação de melhorias que elevaram o OEE da linha de produção em 12% através de otimização de parâmetros de processo e redução significativa de paradas por falhas elétricas e de automação.",
      "Manutenção de pasteurizador túnel com controle Siemens: sistemas de aquecimento, bombas de circulação, válvulas de controle de temperatura e instrumentação de segurança para garantia da qualidade microbiológica.",
      "Coordenação de paradas programadas para manutenção preventiva de toda a linha, incluindo substituição de componentes críticos, updates de firmware Siemens e sincronização de equipamentos para máxima eficiência produtiva."
    ],
    location: "Vialonga, Portugal",
    technologies: [
      "Siemens S7-1200", "Siemens S7-1500", "Siemens S7-300", "SIMATIC HMI", 
      "SINAMICS Drives", "Danfoss VLT", "Profinet", "Ethernet Industrial", 
      "Krones Machinery", "KHS Equipment", "Inspetores Eletrônicos", "Datadores Inkjet",
      "Sistemas de Visão", "Pasteurizador Túnel", "Transportes Automáticos", 
      "Pneumática Festo", "SMC Pneumatics", "Instrumentação Cervejeira", 
      "Sensores Siemens", "Válvulas de Processo", "Sistemas de Vácuo",
      "Manutenção Preditiva", "TIA Portal", "WinCC", "Step 7"
    ],
    categories: ["automacao", "industria"]
  },
  {
    title: "Técnico de Automação Industrial",
    company: "Font Salem Portugal (Grupo Damm)",
    icon: "/src/assets/icons/fontsalem.png",
    iconBg: "#E6DEDD",
    date: "jul de 2023 - dez de 2023 (6 meses)",
    points: [
      "Programação avançada de PLCs Siemens S7-1200/1500 para controle de processo cervejeiro: automação de brassagem em sala de cozimento, controle de mash-tun, whirlpool, trocadores de calor e sistemas de trasfegas automatizadas.",
      "Automação de adegas cervejeiras: programação de controle automático de tanques de fermentação e maturação, sistemas de cooling com glicol, controle de pressão e temperatura, válvulas automáticas para transferências e sistemas CIP integrados.",
      "Desenvolvimento de receitas automatizadas para brassagem: programação de rampas de temperatura, controle de timing, dosagem automática de adjuntos e lúpulo, com sequenciamento automático de válvulas e bombas de processo.",
      "Programação de linha de envase: automação de enchedoras isobarométricas, seladora de cápsulas, rotuladora automática, datadora inkjet e sistemas de inspeção de garrafas com rejeição automática por peso e pressão.",
      "Automação de sistemas de filtração cervejeira: controle de filtros de terras diatomáceas, sistemas de dosagem de adjuvantes, controle de turbidez e sistemas de lavagem automática com sequenciamento de válvulas.",
      "Implementação de supervisório SCADA para monitoramento integrado: visualização em tempo real de processo e envase, controle de receitas, alarmes críticos e relatórios de produção automáticos.",
      "Programação de sistemas de utilities: controle automático de geração de vapor, sistemas de água gelada, compressores de CO₂, tratamento de água e distribuição automática de utilities para processo e envase.",
      "Automação de controle de qualidade: programação de sistemas de amostragem automática, controle de pH, densidade, amargor e teor alcoólico com integração ao sistema de liberação de lotes.",
      "Desenvolvimento de sistemas de rastreabilidade completa: integração de códigos de lote desde matérias-primas até envase, controle automático de inventário e sistemas de recall automatizado.",
      "Programação de intertravamentos de segurança: sistemas de proteção de tanques contra sobrepressão, paradas de emergência automatizadas, controle de atmosfera inerte e proteção térmica de equipamentos críticos.",
      "Integração de sistemas MES: comunicação PLC-ERP para controle de produção, coleta automática de dados de processo e envase, e geração de relatórios de eficiência em tempo real."
    ],
    location: "Santarém, Portugal",
    technologies: [
      "Siemens S7-1200/1500", "TIA Portal", "WinCC SCADA", "Step 7", 
      "Automação de Brassagem", "Controle de Adegas", "Sistemas CIP", 
      "Enchedoras Isobarométricas", "Linha de Envase", "Rotuladora Automática",
      "Filtração de Terras", "Controle de Turbidez", "Sistemas de Utilities",
      "Instrumentação Cervejeira", "Sensores PT100", "Transmissores 4-20mA",
      "Válvulas Automáticas", "Controle MES", "Rastreabilidade", "Profinet"
    ],
    categories: ["automacao", "industria"]
  },
  {
    title: "Especialista em Automação de Sistemas Cervejeiros",
    company: "Tecnale Automação de Sistemas Ltda",
    icon: "/src/assets/icons/tecnale.png",
    iconBg: "#383E56",
    date: "fev de 2023 - mar de 2023 (2 meses)",
    points: [
      "Desenvolvimento completo de projeto de automação para sistema de desalcoolização cervejeira utilizando tecnologia de osmose reversa e destilação a vácuo, programando PLCs Allen-Bradley ControlLogix para controle preciso de temperatura, pressão e fluxo.",
      "Programação avançada em RSLogix 5000 e Structured Text para controle do processo de desalcoolização: sequenciamento automático de válvulas, controle PID de temperatura, monitoramento de teor alcoólico em tempo real e sistemas de recirculação.",
      "Desenvolvimento de supervisório iFIX personalizado para monitoramento completo do processo de desalcoolização, criando telas gráficas avançadas com animações, tendências históricas, alarmes críticos e relatórios de produção automáticos.",
      "Integração completa do sistema de desalcoolização com infraestrutura cervejeira existente: conexão automática com sistemas de filtração, tanques de processo, brassagem e utilities, garantindo fluxo contínuo e rastreabilidade total.",
      "Configuração de rede Ethernet/IP para comunicação entre PLC Allen-Bradley, supervisório iFIX, instrumentação de campo e sistemas MES, estabelecendo arquitetura redundante para máxima confiabilidade operacional.",
      "Programação de algoritmos avançados de controle para otimização do processo: controle automático de taxa de desalcoolização, recuperação de álcool, minimização de perdas e controle de qualidade sensorial da cerveja processada.",
      "Implementação de sistemas de instrumentação especializada: analisadores inline de teor alcoólico, sensores de condutividade, medidores de turbidez e transmissores de pressão diferencial para controle preciso do processo.",
      "Desenvolvimento de receitas automatizadas para diferentes tipos de cerveja: parâmetros específicos por estilo, controle de tempo de residência, temperatura ótima e sistemas de limpeza CIP automatizados pós-processo.",
      "Comissionamento completo da planta incluindo calibração de instrumentos, testes de performance, validação de receitas, treinamento de operadores e documentação técnica completa do sistema.",
      "Integração com sistemas de utilities cervejeiros: controle automático de vapor, água gelada, CO₂ recuperado, tratamento de condensados e sistemas de controle ambiental para máxima eficiência energética."
    ],
    location: "São Paulo, Brasil",
    technologies: [
      "Allen-Bradley ControlLogix", "RSLogix 5000", "iFIX SCADA", "Structured Text",
      "Ethernet/IP", "Desalcoolização por Osmose", "Destilação a Vácuo", 
      "Analisadores de Álcool", "Controle PID", "Sistemas MES",
      "Instrumentação Cervejeira", "Sensores de Condutividade", "Turbidimetria",
      "Integração de Processos", "Sistemas CIP", "Controle de Qualidade",
      "Comissionamento Industrial", "Validação de Processos", "Rockwell Software"
    ],
    categories: ["automacao", "desenvolvimento"]
  },
  {
    title: "Técnico de Automação Sênior",
    company: "Ambev (Maior Cervejaria do Mundo)",
    icon: "/src/assets/icons/ambev.png",
    iconBg: "#E6DEDD",
    date: "fev de 2014 - jan de 2023 (9 anos)",
    points: [
      "Manutenção especializada em sistemas de automação cervejeira completos utilizando PLCs Siemens S7-300/400/1200/1500 e Allen-Bradley ControlLogix/CompactLogix: sala de cozimento, adegas de fermentação/maturação, filtração diatomácea e controle de tanques até 2000HL.",
      "Desenvolvimento e implementação de projetos de automação para modernização de linhas: migração de sistemas legados para Siemens S7-1500 com TIA Portal, implementação de supervisórios WinCC e integração com sistemas MES corporativos.",
      "Manutenção avançada em múltiplas linhas de envase de alta velocidade (60.000-80.000 garrafas/hora): enchedoras rotativas Krones/Sidel, pasteurizador túnel, inspetores eletrônicos Heuft, rotuladoras Krones, datadoras Domino e paletizadoras automáticas.",
      "Automação completa de processos de refrigerantes e sucos: misturadores batch automatizados, sistemas de carbonatação, xaroparia com dosagem gravimétrica, controle de brix online, tratamento de água RO e integração com envase PET/lata de alta velocidade.",
      "Programação avançada em múltiplas plataformas: RSLogix 5000/Studio 5000 para Allen-Bradley, TIA Portal/Step 7 para Siemens, desenvolvimento de FBs customizados, otimização de receitas e implementação de controle PID complexo.",
      "Manutenção de sistemas críticos de utilities cervejeiros: caldeiras de vapor com controle Siemens, sistemas de CO₂ líquido/gasoso, chillers de amônia NH₃, torres de resfriamento, compressores de ar e sistemas de água gelada com controle de demanda.",
      "Especialização em instrumentação de precisão: calibração de sensores PT100/PT1000, transmissores 4-20mA Endress+Hauser/Siemens, medidores de pH/condutividade, densímetros online Anton Paar e analisadores de álcool por densitometria.",
      "Manutenção de redes industriais complexas: Profinet/Ethernet/IP com mais de 300 dispositivos, troubleshooting de switches gerenciados, diagnóstico de falhas de comunicação, implementação de redundância e segmentação de redes críticas.",
      "Liderança de projetos Industry 4.0: implementação de supervisórios FactoryTalk View ME/SE e WinCC Advanced, desenvolvimento de dashboards KPI, integração OPC UA com ERP SAP e sistemas de coleta automática de dados de produção.",
      "Manutenção preditiva avançada: termografia FLIR para painéis elétricos, análise de vibração SKF em equipamentos rotativos, monitoramento de corrente em drives PowerFlex/SINAMICS, reduzindo paradas não programadas em 35% e OEE para 92%.",
      "Implementação de sistemas de segurança industrial: configuração de relés GuardLogix/SIRIUS, cortinas de luz Sick, scanners de área Pilz, sistemas de parada de emergência Category 3/4 conforme IEC 62061 e validação SIL para processos críticos.",
      "Desenvolvimento de melhorias lean manufacturing: automação de changeover reduzindo setup de 45min para 12min, implementação de SMED, controle estatístico automatizado, sistemas de rastreabilidade RFID e otimização de OEE por linha.",
      "Coordenação técnica de grandes paradas anuais: liderança de equipes multidisciplinares (30+ técnicos), planejamento de manutenção preventiva, substituição de equipamentos críticos, upgrades de firmware simultâneos e startup coordenado de toda planta.",
      "Projetos de expansão e novas instalações: especificação técnica de equipamentos, programação de PLCs para novas linhas, comissionamento de sistemas completos, testes de performance, validação de processos e treinamento de equipes operacionais.",
      "Integração de sistemas MES/ERP: comunicação PLC-SAP via OPC UA, desenvolvimento de interfaces de produção, controle automático de inventário, geração de relatórios de eficiência em tempo real e sistemas de rastreabilidade total desde matéria-prima até expedição."
    ],
    location: "Pernambuco, Brasil",
    technologies: [
      "Siemens S7-300/400/1200/1500", "Allen-Bradley ControlLogix/CompactLogix", "GuardLogix", 
      "TIA Portal", "Step 7", "RSLogix 5000", "Studio 5000", "WinCC Advanced", "FactoryTalk View ME/SE",
      "PowerFlex VFDs", "SINAMICS Drives", "Kinetix Servo", "Profinet", "Ethernet/IP", "DeviceNet",
      "Krones Machinery", "Sidel Equipment", "Heuft Inspectors", "Domino Printers", "Pasteurizador Túnel",
      "Cervejaria Automatizada", "Refrigerantes", "Sucos", "Xaroparia", "Carbonatação", "Brix Online",
      "Instrumentação Endress+Hauser", "Siemens Transmitters", "Anton Paar", "PT100/PT1000", "4-20mA",
      "Sistemas MES/ERP", "SAP Integration", "OPC UA", "Manutenção Preditiva", "Termografia FLIR", 
      "SKF Vibration", "Utilities Cervejeiros", "Caldeiras Vapor", "CO₂ Systems", "Chillers NH₃",
      "Segurança Category 3/4", "IEC 62061", "SIL Validation", "Lean Manufacturing", "Industry 4.0",
      "RFID Systems", "Controle Estatístico", "KPI Dashboards", "Rastreabilidade Total"
    ],
    categories: ["automacao", "industria"]
  }
];

export const education: Education[] = [
  {
    degree: "Tecnologia da Informação/Sistemas da Informação",
    institution: "Estácio",
    date: "abr de 2021 - dez de 2023",
    description: "Formação em TI com foco em Sistemas da Informação, desenvolvendo competências avançadas em análise de dados, bancos SQL, desenvolvimento web e integração de sistemas, com projeto final voltado para a convergência entre ambientes industriais e corporativos através de soluções IoT.",
    icon: "/src/assets/icons/estacio.png",
    iconBg: "#E6DEDD"
  },
  {
    degree: "Técnico Eletromecânico / Automação Industrial",
    institution: "SENAI Pernambuco",
    date: "2012 - 2014",
    description: "Curso técnico especializado em eletromecânica e automação industrial, abrangendo pneumática, hidráulica, manutenção preventiva e preditiva, programação avançada de PLCs, redes industriais e instrumentação, com forte ênfase em aplicação prática e projetos reais.",
    icon: "/src/assets/icons/senai.png",
    iconBg: "#383E56"
  }
];

export const skills: Skill[] = [
  // Habilidades de Automação e PLCs
  {
    name: "Siemens PLCs (S7-1200/1500)",
    icon: "/src/assets/icons/siemens.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Allen-Bradley ControlLogix",
    icon: "/src/assets/icons/rockwell.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Schneider Electric PLCs",
    icon: "/src/assets/icons/schneider.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "Omron PLCs",
    icon: "/src/assets/icons/omron.png",
    category: "automacao",
    level: "avançado"
  },
  
  // Supervisórios e SCADA
  {
    name: "WinCC SCADA",
    icon: "/src/assets/icons/wincc.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "iFIX Supervisório",
    icon: "/src/assets/icons/ifix.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Wonderware System Platform",
    icon: "/src/assets/icons/wonderware.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "HMI Development",
    icon: "/src/assets/icons/hmi.png",
    category: "automacao",
    level: "especialista"
  },
  
  // Redes Industriais e Protocolos
  {
    name: "Profinet",
    icon: "/src/assets/icons/profinet.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Ethernet/IP",
    icon: "/src/assets/icons/ethernetip.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Profibus DP/PA",
    icon: "/src/assets/icons/profibus.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "DeviceNet",
    icon: "/src/assets/icons/devicenet.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "Modbus TCP/RTU",
    icon: "/src/assets/icons/modbus.png",
    category: "automacao",
    level: "avançado"
  },
  {
    name: "OPC UA",
    icon: "/src/assets/icons/opcua.png",
    category: "automacao",
    level: "avançado"
  },
  
  // Instrumentação e Sensores
  {
    name: "Instrumentação Industrial",
    icon: "/src/assets/icons/instrument.png",
    category: "automacao",
    level: "especialista"
  },
  {
    name: "Sensores Sick/IFM",
    icon: "/src/assets/icons/sensors.png",
    category: "automacao",
    level: "avançado"
  },
  
  // Programação e Desenvolvimento
  {
    name: "Programação PLC + Supervisório",
    icon: "/src/assets/icons/plc-supervisory.png",
    category: "programacao",
    level: "especialista"
  },
  {
    name: "React/TypeScript",
    icon: "/src/assets/icons/react.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "Python Backend",
    icon: "/src/assets/icons/python.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "Go Programming",
    icon: "/src/assets/icons/go.png",
    category: "programacao",
    level: "intermediário"
  },
  {
    name: "PostgreSQL/MySQL",
    icon: "/src/assets/icons/database.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "WebSocket/Real-time",
    icon: "/src/assets/icons/websocket.png",
    category: "programacao",
    level: "avançado"
  },
  {
    name: "Node-RED/IIoT",
    icon: "/src/assets/icons/nodered.png",
    category: "programacao",
    level: "avançado"
  },
  
  // Projetos de Indústria 4.0
  {
    name: "Projetos de Automação",
    icon: "/src/assets/icons/project.png",
    category: "industria40",
    level: "especialista"
  },
  {
    name: "Sistemas CIP",
    icon: "/src/assets/icons/cip.png",
    category: "industria40",
    level: "especialista"
  },
  {
    name: "Eclusas de Navegação",
    icon: "/src/assets/icons/locks.png",
    category: "industria40",
    level: "especialista"
  },
  {
    name: "ETEI - Tratamento de Efluentes",
    icon: "/src/assets/icons/treatment.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "Sistemas de Pulverização",
    icon: "/src/assets/icons/spray.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "Indústria Alimentícia",
    icon: "/src/assets/icons/food.png",
    category: "industria40",
    level: "avançado"
  },
  {
    name: "Integração PLC-TI",
    icon: "/src/assets/icons/integration.png",
    category: "industria40",
    level: "especialista"
  }
];