import { useState } from 'react';
import '../../styles/projetos.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const filterButtons = [
    { id: 'todos', label: 'Todos', icon: '📋' },
    { id: 'automacao', label: 'Automação - Redes', icon: '⚙️' },
    { id: 'web', label: 'Projetos Web', icon: '🌐' },
    { id: 'mobile', label: 'App Mobile', icon: '📱' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'iot', label: 'IoT Indústria 4.0', icon: '🏭' }
  ];

  // Dados mockados dos projetos para demonstração
  const mockProjects = [
    {
      id: 1,
      title: "Sistema SCADA Industrial",
      description: "Sistema supervisório para controle e monitoramento de processos industriais em tempo real com interface moderna.",
      techStack: ["TIA Portal", "WinCC", "PROFINET", "SQL Server"],
      category: "automacao",
      image: "/portfolio-danilo/images/project-placeholder-1.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Dashboard IoT Indústria 4.0",
      description: "Plataforma web para visualização de dados de sensores IoT em tempo real com alertas e relatórios.",
      techStack: ["React", "Node.js", "MongoDB", "MQTT"],
      category: "iot",
      image: "/portfolio-danilo/images/project-placeholder-2.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 3,
      title: "App Mobile Manutenção",
      description: "Aplicativo mobile para registro e acompanhamento de ordens de manutenção preventiva e corretiva.",
      techStack: ["React Native", "Firebase", "TypeScript"],
      category: "mobile",
      image: "/portfolio-danilo/images/project-placeholder-3.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 4,
      title: "API Sistema ERP",
      description: "API robusta para integração de sistemas ERP com equipamentos de automação industrial.",
      techStack: ["Node.js", "PostgreSQL", "Docker", "JWT"],
      category: "backend",
      image: "/portfolio-danilo/images/project-placeholder-4.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Portal Gestão Industrial",
      description: "Portal web completo para gestão de produção, qualidade e manutenção de equipamentos industriais.",
      techStack: ["React", "TypeScript", "Node.js", "MySQL"],
      category: "web",
      image: "/portfolio-danilo/images/project-placeholder-5.jpg",
      livePreview: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Rede PROFINET Cervejaria",
      description: "Projeto de rede industrial PROFINET para controle de processo automatizado em cervejaria.",
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
    setIsDropdownOpen(false); // Fecha dropdown após seleção
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
                {/* Imagem do Projeto */}
                <div className="project-image">
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
                    <a href={project.livePreview} className="project-button live-preview">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                      <span>Live Preview</span>
                    </a>
                    <a href={project.github} className="project-button view-code">
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
    </section>
  );
};

export default ProjectsPage;