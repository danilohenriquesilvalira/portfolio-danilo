import { useState, useEffect, useCallback, CSSProperties } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  image: string;
  livePreview: string | null;
  github: string;
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoadedStates, setImageLoadedStates] = useState<{[key: number]: boolean}>({});
  
  const filterButtons = [
    { id: 'todos', label: 'Todos', icon: '📋' },
    { id: 'automacao', label: 'Automação - Redes', icon: '⚙️' },
    { id: 'web', label: 'Projetos Web', icon: '🌐' },
    { id: 'mobile', label: 'App Mobile', icon: '📱' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'iot', label: 'IoT Indústria 4.0', icon: '🏭' }
  ];

  const mockProjects: Project[] = [
    {
      id: 1,
      title: "Sistema Radar Industrial SICK RMS1000",
      description: "Sistema web/PLC para configuração radar SICK RMS1000 com áreas por amplitude. Monitora objetos específicos como barcos em eclusas. Integração S7 e interface real-time.",
      techStack: ["Go", "NATS", "WebSocket", "React", "TypeScript", "Tailwind", "SVG/Figma", "Siemens S7"],
      category: "automacao",
      image: "/portfolio-danilo/images/Projeto_Radar.svg",
      livePreview: null,
      github: "https://github.com/danilohenriquesilvalira/RADAR_COLETAS"
    },
    {
      id: 2,
      title: "Multi-PLC Communication System TCP/IP",
      description: "Sistema robusto de comunicação entre múltiplos PLCs Siemens via TSEND_C/TRCV_C TCP/IP. Troca dinâmica de sinais e dados em tempo real com controle de erro automático.",
      techStack: ["STEP 7", "TIA Portal", "SCL", "TSEND_C/TRCV_C", "TCP/IP", "PROFINET", "S7-1500", "HMI"],
      category: "automacao",
      image: "/portfolio-danilo/images/Projeto_Send_Receive.svg",
      livePreview: null,
      github: "https://github.com/DaniloHenriqueLira/Automacao"
    },
    {
      id: 3,
      title: "Dashboard IoT Indústria 4.0",
      description: "Plataforma web para visualização de dados de sensores IoT em tempo real com alertas automáticos, relatórios detalhados e análise preditiva.",
      techStack: ["React", "Node.js", "MongoDB", "MQTT"],
      category: "iot",
      image: "/portfolio-danilo/images/project-placeholder-2.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 4,
      title: "App Mobile Manutenção",
      description: "Aplicativo mobile para registro e acompanhamento de ordens de manutenção preventiva e corretiva com notificações push e relatórios.",
      techStack: ["React Native", "Firebase", "TypeScript"],
      category: "mobile",
      image: "/portfolio-danilo/images/project-placeholder-3.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 5,
      title: "API Sistema ERP",
      description: "API robusta para integração de sistemas ERP com equipamentos de automação industrial. Autenticação JWT e documentação completa.",
      techStack: ["Node.js", "PostgreSQL", "Docker", "JWT"],
      category: "backend",
      image: "/portfolio-danilo/images/project-placeholder-4.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Portal Gestão Industrial",
      description: "Portal web completo para gestão de produção, qualidade e manutenção de equipamentos industriais com dashboards interativos.",
      techStack: ["React", "TypeScript", "Node.js", "MySQL"],
      category: "web",
      image: "/portfolio-danilo/images/project-placeholder-5.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 7,
      title: "Rede PROFINET Cervejaria",
      description: "Projeto de rede industrial PROFINET para controle de processo automatizado em cervejaria com HMI touchscreen e redundância.",
      techStack: ["PROFINET", "TIA Portal", "HMI", "SIMATIC"],
      category: "automacao",
      image: "/portfolio-danilo/images/project-placeholder-6.jpg",
      livePreview: "#",
      github: "#"
    }
  ];

  const styles: { [key: string]: CSSProperties } = {
    section: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      minHeight: 'auto',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919',
      overflow: 'visible',
      padding: '0'
    },
    wrapper: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    container: {
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem',
      alignItems: 'center',
      textAlign: 'center' as const,
      width: '100%'
    },
    header: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      textAlign: 'center' as const
    },
    title: {
      fontWeight: 'bold' as const,
      lineHeight: 1.1,
      color: 'white',
      marginBottom: '0.5rem',
      textAlign: 'center' as const,
      fontSize: '2.2rem',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    description: {
      fontWeight: '500' as const,
      lineHeight: 1.6,
      color: '#d1d5db',
      textAlign: 'center' as const,
      fontSize: '0.9rem'
    },
    desktopFilters: {
      display: 'flex',
      flexWrap: 'nowrap' as const,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '1.25rem 0',
      padding: '0 1rem',
      width: '100%',
      maxWidth: '100%',
      overflowX: 'auto' as const,
      scrollbarWidth: 'none' as const
    },
    filterButton: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '600' as const,
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
      background: 'transparent',
      color: 'white',
      border: '1.5px solid white',
      borderRadius: '6px',
      cursor: 'pointer',
      position: 'relative' as const,
      overflow: 'hidden',
      whiteSpace: 'nowrap' as const,
      flexShrink: 0,
      fontSize: '0.75rem',
      padding: '0.4rem 0.8rem',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Transição mais suave
      transform: 'translateY(0)', // Para animações futuras
      willChange: 'transform, background-color' // Otimização de performance
    },
    filterButtonActive: {
      background: 'white',
      color: '#191919',
      borderColor: 'white',
      transform: 'translateY(-1px)', // Micro-elevação
      boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)'
    },
    // Grid com stagger animation
    projectsGrid: {
      marginTop: '2rem',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      maxWidth: '1200px',
      opacity: isLoading ? 0.6 : 1,
      transition: 'opacity 0.3s ease'
    },
    // Card melhorado com micro-animações
    projectCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column' as const,
      height: '100%',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'translateY(0) scale(1)',
      willChange: 'transform, box-shadow',
      // Stagger animation delay baseado no index
      animationDelay: `${0.1}s`,
      animationFillMode: 'both' as const
    },
    projectImage: {
      width: '100%',
      height: '220px',
      position: 'relative' as const,
      overflow: 'hidden',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    projectImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: 'center',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'transform'
    },
    // Skeleton loading para imagens
    imageSkeleton: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280',
      fontSize: '0.875rem'
    },
    imageExpandOverlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(2px)',
      transform: 'scale(0.95)'
    },
    expandIcon: {
      color: 'white',
      marginBottom: '0.5rem',
      padding: '0.75rem',
      border: '2px solid white',
      borderRadius: '50%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'scale(1)'
    },
    expandText: {
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.85rem',
      fontWeight: '500' as const,
      textAlign: 'center' as const,
      opacity: 0.9,
      transform: 'translateY(4px)',
      transition: 'all 0.3s ease'
    },
    projectContent: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      flex: 1,
      justifyContent: 'space-between'
    },
    projectMainContent: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem'
    },
    projectTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 'bold' as const,
      color: 'white',
      lineHeight: 1.3,
      margin: 0,
      transition: 'color 0.3s ease'
    },
    projectDescription: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.9rem',
      color: '#d1d5db',
      lineHeight: 1.5,
      margin: 0,
      transition: 'color 0.3s ease'
    },
    projectTech: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem'
    },
    techLabel: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.85rem',
      fontWeight: '600' as const,
      color: 'white'
    },
    techList: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.8rem',
      color: '#9ca3af',
      fontWeight: '500' as const,
      transition: 'color 0.3s ease'
    },
    projectActions: {
      display: 'flex',
      gap: '2rem',
      marginTop: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0
    },
    projectButton: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.85rem',
      fontWeight: '600' as const,
      padding: 0,
      border: 'none',
      background: 'transparent',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'translateY(0)',
      willChange: 'transform, color'
    },
    projectButtonDisabled: {
      color: '#9ca3af',
      cursor: 'not-allowed'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '3rem'
    },
    paginationButton: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '500' as const,
      fontSize: '1rem',
      padding: '0.75rem 1rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      background: 'transparent',
      color: '#d1d5db',
      cursor: 'pointer',
      minWidth: '3rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'translateY(0)',
      willChange: 'transform, border-color'
    },
    paginationButtonActive: {
      background: 'white',
      color: '#191919',
      borderColor: 'white',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)'
    },
    // Modal otimizado
    imageModalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: 0,
      backdropFilter: 'blur(10px)',
      animation: 'modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    modalCloseButton: {
      position: 'absolute' as const,
      top: '2rem',
      right: '2rem',
      background: 'rgba(0, 0, 0, 0.7)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 10000,
      color: 'white',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'scale(1)'
    },
    modalImageFullscreen: {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100vw',
      height: '100vh',
      objectFit: 'contain' as const,
      cursor: 'default',
      animation: 'imageZoomIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  // Debounced filter change para performance
  const debouncedFilterChange = useCallback((filterId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveFilter(filterId);
      setCurrentPage(1);
      setIsDropdownOpen(false);
      setIsLoading(false);
    }, 150); // Micro delay para transição suave
  }, []);

  const handleFilterClick = (filterId: string) => {
    if (filterId !== activeFilter) {
      debouncedFilterChange(filterId);
    }
  };

  // Lazy loading para imagens
  const handleImageLoad = (projectId: number) => {
    setImageLoadedStates(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getActiveFilterLabel = () => {
    const activeButton = filterButtons.find(button => button.id === activeFilter);
    return activeButton ? `${activeButton.icon} ${activeButton.label}` : 'Todos';
  };

  const filteredProjects = activeFilter === 'todos' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === activeFilter);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of projects
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openImageModal = (project: Project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeImageModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // CSS Keyframes inline (para performance)
  const keyframes = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes modalFadeIn {
      from { opacity: 0; backdrop-filter: blur(0px); }
      to { opacity: 1; backdrop-filter: blur(10px); }
    }
    @keyframes imageZoomIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    @keyframes cardSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section style={styles.section} id="projects">
        <div style={styles.wrapper}>
          <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
              <h2 style={styles.title}>Projetos</h2>
              <p style={styles.description}>
                Projetos desenvolvidos em Automação Industrial e TI
              </p>
            </div>

            {/* Filtros Desktop */}
            <div style={{
              ...styles.desktopFilters,
              ...(typeof window !== 'undefined' && window.innerWidth <= 767 ? { display: 'none' } : {})
            }}>
              {filterButtons.map((button, index) => (
                <button
                  key={button.id}
                  style={{
                    ...styles.filterButton,
                    ...(activeFilter === button.id ? styles.filterButtonActive : {}),
                    animationDelay: `${index * 0.05}s`
                  }}
                  onClick={() => handleFilterClick(button.id)}
                  onMouseEnter={(e) => {
                    if (activeFilter !== button.id) {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#191919';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== button.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {button.label}
                </button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div style={{
              ...styles.projectsGrid,
              ...(typeof window !== 'undefined' && window.innerWidth <= 767 ? {
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                marginTop: '1.5rem'
              } : {}),
              ...(typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1023 ? {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.75rem',
                marginTop: '1.75rem'
              } : {})
            }}>
              {currentProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  style={{
                    ...styles.projectCard,
                    animation: `cardSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    
                    // Micro-animações nos elementos filhos
                    const title = e.currentTarget.querySelector('[data-title]') as HTMLElement;
                    const description = e.currentTarget.querySelector('[data-description]') as HTMLElement;
                    const techList = e.currentTarget.querySelector('[data-tech]') as HTMLElement;
                    
                    if (title) title.style.color = '#ffffff';
                    if (description) description.style.color = '#f3f4f6';
                    if (techList) techList.style.color = '#d1d5db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    
                    // Reverter micro-animações
                    const title = e.currentTarget.querySelector('[data-title]') as HTMLElement;
                    const description = e.currentTarget.querySelector('[data-description]') as HTMLElement;
                    const techList = e.currentTarget.querySelector('[data-tech]') as HTMLElement;
                    
                    if (title) title.style.color = 'white';
                    if (description) description.style.color = '#d1d5db';
                    if (techList) techList.style.color = '#9ca3af';
                  }}
                >
                  {/* Imagem com lazy loading */}
                  <div 
                    style={{
                      ...styles.projectImage,
                      ...(project.image.endsWith('.svg') ? { 
                        background: `white url(${project.image}) no-repeat center center`,
                        backgroundSize: 'contain'
                      } : { background: '#f8fafc' }),
                      ...(typeof window !== 'undefined' && window.innerWidth <= 767 ? { height: '200px' } : {}),
                      ...(typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1023 ? { height: '210px' } : {})
                    }}
                    onClick={() => openImageModal(project)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = '1';
                        overlay.style.transform = 'scale(1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = '0';
                        overlay.style.transform = 'scale(0.95)';
                      }
                    }}
                  >
                    {/* Lazy loading para imagens não-SVG */}
                    {!project.image.endsWith('.svg') && (
                      <>
                        {!imageLoadedStates[project.id] && (
                          <div style={styles.imageSkeleton}>
                            <span>Carregando...</span>
                          </div>
                        )}
                        <img 
                          src={project.image} 
                          alt={project.title}
                          style={{
                            ...styles.projectImageImg,
                            opacity: imageLoadedStates[project.id] ? 1 : 0
                          }}
                          onLoad={() => handleImageLoad(project.id)}
                          loading="lazy"
                        />
                      </>
                    )}

                    {/* Overlay melhorado */}
                    <div data-overlay style={styles.imageExpandOverlay}>
                      <div 
                        style={styles.expandIcon}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.color = '#191919';
                          e.currentTarget.style.transform = 'scale(1.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                      </div>
                      <span style={styles.expandText}>Clique para expandir</span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div style={styles.projectContent}>
                    <div style={styles.projectMainContent}>
                      <h3 data-title style={styles.projectTitle}>{project.title}</h3>
                      <p data-description style={styles.projectDescription}>{project.description}</p>
                      
                      <div style={styles.projectTech}>
                        <span style={styles.techLabel}>Tech stack:</span>
                        <span data-tech style={styles.techList}>{project.techStack.join(', ')}</span>
                      </div>
                    </div>

                    {/* Botões com micro-animações */}
                    <div style={styles.projectActions}>
                      {project.livePreview ? (
                        <a 
                          href={project.livePreview} 
                          style={styles.projectButton}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#e5e7eb';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                          </svg>
                          <span style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Live Preview</span>
                        </a>
                      ) : (
                        <span style={{ ...styles.projectButton, ...styles.projectButtonDisabled }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                          </svg>
                          <span>Sem Preview</span>
                        </span>
                      )}
                      
                      <a 
                        href={project.github} 
                        style={styles.projectButton} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#e5e7eb';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação melhorada */}
            {totalPages > 1 && (
              <div style={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, index) => (
                  <button
                    key={page}
                    style={{
                      ...styles.paginationButton,
                      ...(currentPage === page ? styles.paginationButtonActive : {}),
                      animationDelay: `${index * 0.05}s`
                    }}
                    onClick={() => handlePageChange(page)}
                    onMouseEnter={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.color = '#d1d5db';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal otimizado */}
        {isModalOpen && selectedImage && (
          <div style={styles.imageModalOverlay} onClick={closeImageModal}>
            <button 
              style={styles.modalCloseButton} 
              onClick={closeImageModal}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={{
                ...styles.modalImageFullscreen,
                ...(selectedImage.image.endsWith('.svg') ? {
                  background: 'white',
                  borderRadius: 0,
                  padding: '20px',
                  boxShadow: 'none',
                  objectFit: 'contain'
                } : {})
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectsPage;