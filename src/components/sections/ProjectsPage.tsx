import { useState, useEffect } from 'react';
import '../../styles/projetos.css';

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
  
  const filterButtons = [
    { id: 'todos', label: 'Todos', icon: '📋' },
    { id: 'automacao', label: 'Automação - Redes', icon: '⚙️' },
    { id: 'web', label: 'Projetos Web', icon: '🌐' },
    { id: 'mobile', label: 'App Mobile', icon: '📱' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'iot', label: 'IoT Indústria 4.0', icon: '🏭' }
  ];

// Dados dos projetos - VERSÃO PADRONIZADA (180-200 caracteres por descrição)
const mockProjects: Project[] = [
  {
    id: 1,
    title: "Sistema Radar Industrial SICK RMS1000",
    description: "Sistema web/PLC configuração radar SICK RMS1000 com áreas por amplitude. Monitora objetos específicos como barcos em eclusas. Integração direta sem gateway via S7 e WebSocket real-time.",
    techStack: ["Go", "NATS", "WebSocket", "React","TypeScript", "Tailwind", "SVG/Figma", "Siemens S7", "PLC Integration"],
    category: "automacao",
    image: "/portfolio-danilo/images/Projeto_Radar.svg",
    livePreview: null,
    github: "https://github.com/danilohenriquesilvalira/RADAR_COLETAS"
  },
  {
    id: 2,
    title: "Sistema SCADA Industrial",
    description: "Sistema supervisório para controle e monitoramento de processos industriais em tempo real com interface moderna e dashboards customizáveis.",
    techStack: ["TIA Portal", "WinCC", "PROFINET", "SQL Server"],
    category: "automacao",
    image: "/portfolio-danilo/images/project-placeholder-1.jpg",
    livePreview: "#",
    github: "#"
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

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
    setIsDropdownOpen(false);
    console.log(`Filtro ativo: ${filterId}`);
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
  };

  // Funções do modal
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

  return (
    <section className="projetos-section" id="projects">
      <div className="projetos-wrapper">
        <div className="projetos-container">
          {/* Header centralizado */}
          <div className="projetos-header">
            <h2 className="projetos-title">
              Projetos
            </h2>
            
            <p className="projetos-description">
              Projetos desenvolvidos em Automação Industrial e TI
            </p>
          </div>

          {/* Filtros Desktop - Botões normais */}
          <div className="filter-buttons-container desktop-filters">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`filter-button ${activeFilter === button.id ? 'active' : ''}`}
                onClick={() => handleFilterClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Filtro Mobile - Dropdown estilizado */}
          <div className="mobile-filter-container">
            <div className="mobile-filter-label">
              Filtrar por categoria:
            </div>
            <div className={`mobile-filter-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <button 
                className="mobile-filter-trigger"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <span className="mobile-filter-current">
                  {getActiveFilterLabel()}
                </span>
                <svg 
                  className={`mobile-filter-arrow ${isDropdownOpen ? 'rotated' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              
              <div className={`mobile-filter-options ${isDropdownOpen ? 'visible' : ''}`}>
                {filterButtons.map((button) => (
                  <button
                    key={button.id}
                    className={`mobile-filter-option ${activeFilter === button.id ? 'active' : ''}`}
                    onClick={() => handleFilterClick(button.id)}
                  >
                    <span className="mobile-filter-icon">{button.icon}</span>
                    <span className="mobile-filter-text">{button.label}</span>
                    {activeFilter === button.id && (
                      <svg 
                        className="mobile-filter-check" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="projects-grid">
            {currentProjects.map((project) => (
              <div key={project.id} className="project-card">
                {/* Imagem do Projeto com modal */}
                <div 
                  className="project-image"
                  onClick={() => openImageModal(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="project-image-placeholder" style={{ display: 'none' }}>
                    <span>Imagem do Projeto</span>
                  </div>

                  {/* Overlay de expandir */}
                  <div className="image-expand-overlay">
                    <div className="expand-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </div>
                    <span className="expand-text">Clique para expandir</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="project-content">
                  {/* Conteúdo Principal */}
                  <div className="project-main-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="project-tech">
                      <span className="tech-label">Tech stack:</span>
                      <span className="tech-list">{project.techStack.join(', ')}</span>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="project-actions">
                    {project.livePreview ? (
                      <a href={project.livePreview} className="project-button live-preview">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                        </svg>
                        <span>Live Preview</span>
                      </a>
                    ) : (
                      <span className="project-button disabled">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        <span>Sem Preview</span>
                      </span>
                    )}
                    <a href={project.github} className="project-button view-code" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal para exibir APENAS a imagem expandida - SEM TEXTO */}
      {isModalOpen && selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <button className="modal-close-button" onClick={closeImageModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img 
            src={selectedImage.image} 
            alt={selectedImage.title}
            className="modal-image-fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;