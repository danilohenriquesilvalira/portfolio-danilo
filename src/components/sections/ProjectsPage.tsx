import { useEffect, useState } from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { ProjectType, projects } from "../../data/projects";
import SlideUp from "../SlideUp";

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Adiciona um pequeno delay para transição suave
    setIsTransitioning(true);

    const timeoutId = setTimeout(() => {
      const newFilteredProjects = projects.filter((project: ProjectType) =>
        project.filter.includes(selectedFilter)
      );
      setFilteredProjects(newFilteredProjects);
      setIsTransitioning(false);
    }, 150); // 150ms de delay para suavizar

    return () => clearTimeout(timeoutId);
  }, [selectedFilter]);

  // Carrega a fonte Poppins para o cabeçalho
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // CSS inline para animações - seguindo padrão do TechExpertise
  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes cardFadeIn {
      from { opacity: 0; transform: scale(0.9) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes cardFadeOut {
      from { opacity: 1; transform: scale(1) translateY(0); }
      to { opacity: 0; transform: scale(0.9) translateY(-20px); }
    }
    @keyframes slideIn {
      from { width: 0; }
      to { width: 100%; }
    }
  `;

  // NOVA FUNÇÃO: Calcula altura mantendo proporção 4:3 perfeita baseada no 1920px
  const getCardHeight = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return '240px';        // Mobile
      if (width <= 768) return '260px';        // Tablet pequeno
      if (width <= 1024) return '280px';       // Tablet
      if (width <= 1440) return '300px';       // Desktop pequeno
      if (width <= 1920) return '300px';       // Notebook (1528x834) - PERFEITO
      return '320px';                         // 4K+
    }
    return '300px';
  };

  // NOVA FUNÇÃO: Calcula largura mantendo proporção 4:3 (altura * 4/3)
  const getCardWidth = () => {
    const height = parseInt(getCardHeight());
    const width = Math.round((height * 4) / 3); // Proporção 4:3 exata
    return `${width}px`;
  };

  // Função para definir grid responsivo baseado no TechExpertise
  const getGridColumns = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 'repeat(1, 1fr)';     // Mobile
      if (width <= 768) return 'repeat(1, 1fr)';      // Tablet pequeno
      if (width <= 1024) return 'repeat(2, 1fr)';     // Tablet
      if (width <= 1440) return 'repeat(2, 1fr)';     // Desktop pequeno
      if (width <= 1920) return 'repeat(3, 1fr)';     // Desktop (1528x834 aqui)
      return 'repeat(3, 1fr)';                       // Desktop grande
    }
    return 'repeat(3, 1fr)';
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return '1.5rem';
      if (width <= 768) return '2rem';
      if (width <= 1024) return '2rem';
      if (width <= 1440) return '2.5rem';
      if (width <= 1920) return '2.5rem';      // Para 1528x834
      return '3rem';
    }
    return '2.5rem';
  };

  // Função para detectar mobile
  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  };

  // Função para calcular altura mínima da grid
  const getMinGridHeight = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const cardHeight = parseInt(getCardHeight());
      const gap = parseInt(getGap());

      let columns = 3;
      if (width <= 480) columns = 1;
      else if (width <= 768) columns = 1;
      else if (width <= 1024) columns = 2;
      else if (width <= 1440) columns = 2;

      // Calcular quantas linhas seriam necessárias para todos os projetos
      const totalProjects = projects.length;
      const rows = Math.ceil(totalProjects / columns);

      return `${(cardHeight * rows) + (gap * (rows - 1))}px`;
    }
    return '800px';
  };

  // Filtros com ícones SVG
  const filterOptions = [
    {
      name: 'All',
      label: 'Todos',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      )
    },
    {
      name: 'Automação',
      label: 'Automação',
      icon: (
        <img 
          src="/portfolio-danilo/images/Icon_PLC.svg"
          alt="Automação"
          style={{
            width: '16px',
            height: '16px',
            filter: 'brightness(0) invert(1)', // Torna o SVG branco
          }}
        />
      )
    },
    {
      name: 'Web Development',
      label: 'Web',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      )
    },
    {
      name: 'Mobile',
      label: 'Mobile',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      )
    },
    {
      name: 'Backend',
      label: 'Backend',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
        </svg>
      )
    },
    {
      name: 'IoT',
      label: 'IoT',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" style={{ backgroundColor: '#191919' }}>
      <style>{keyframes}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div className="py-16" style={{
          animation: 'fadeIn 0.8s ease-out forwards',
          animationDelay: '0.2s'
        }}>
          {/* TÍTULO */}
          <h2
            className="relative text-center mb-8"
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 1rem 0',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 20px rgba(255,255,255,0.1)'
            }}
          >
            Projetos
          </h2>

          {/* FILTRO MODERNO COM SUBLINHADO ESTILO NAVBAR */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: isMobile() ? '1.5rem' : '2.5rem',
            padding: '0 1rem'
          }}>
            {filterOptions.map((filter) => (
              <div
                key={filter.name}
                onClick={() => setSelectedFilter(filter.name)}
                className="filter-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.5rem 0',
                  color: selectedFilter === filter.name ? '#ffffff' : '#d1d5db',
                  fontSize: '0.875rem',
                  fontWeight: selectedFilter === filter.name ? '600' : '500',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== filter.name) {
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== filter.name) {
                    e.currentTarget.style.color = '#d1d5db';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  filter: selectedFilter === filter.name ? 'brightness(1)' : 'brightness(0.7)',
                  transition: 'filter 0.3s ease'
                }}>
                  {filter.icon}
                </div>
                {/* No mobile só mostra texto se for o selecionado */}
                {(!isMobile() || selectedFilter === filter.name) && (
                  <span>{filter.label}</span>
                )}
                {/* Sublinhado ativo */}
                {selectedFilter === filter.name && (
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#ffffff',
                      borderRadius: '1px',
                      animation: 'slideIn 0.3s ease-out forwards'
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* GRID - Responsivo seguindo padrão COM ALTURA MÍNIMA DINÂMICA */}
          <div
            className="projects-grid mt-10"
            style={{
              animation: 'fadeIn 0.8s ease-out forwards',
              display: 'grid',
              gridTemplateColumns: getGridColumns(),
              gap: getGap(),
              justifyItems: 'center',
              width: '100%',
              minHeight: getMinGridHeight(), // ALTURA MÍNIMA DINÂMICA
              transition: 'min-height 0.5s ease-in-out, opacity 0.3s ease', // TRANSIÇÕES SUAVES
              alignContent: 'start', // ALINHA NO TOPO
              opacity: isTransitioning ? 0.7 : 1 // FEEDBACK VISUAL DURANTE TRANSIÇÃO
            }}
          >
            {/* PROJECT CARD - AGORA COM PROPORÇÃO 4:3 FIXA */}
            {filteredProjects.map(
              (project: ProjectType, index: number) =>
                project.filter.includes(selectedFilter) && (
                  <SlideUp
                    data-hover
                    classes="project-item"
                    offset="-100px 0px -100px 0px"
                    key={project.id}
                    onClick={() =>
                      window.open(project.link || project.github, "_blank")
                    }
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      height: getCardHeight(), // ALTURA DINÂMICA
                      width: getCardWidth(),   // LARGURA CALCULADA 4:3
                      maxWidth: getCardWidth(), // MAX-WIDTH TAMBÉM 4:3
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // TRANSIÇÃO MAIS SUAVE
                      background: '#2a2a2a',
                      animation: 'cardFadeIn 0.6s ease-out forwards', // ANIMAÇÃO DE ENTRADA
                      animationDelay: `${index * 0.1}s` // DELAY ESCALONADO BASEADO NO INDEX
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    {/* PROJECT IMAGE THUMBNAIL ou PLACEHOLDER */}
                    {project.thumbnail.includes('placeholder') ? (
                      // Placeholder "Em Construção" - MELHORADO
                      <div
                        data-hover
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #00A19A 0%, #008B85 50%, #007A74 100%)', // NOVA COR
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          gap: '1.5rem',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Padrão de fundo sutil */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundImage: `
                            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px',
                          opacity: 0.3
                        }} />
                        
                        {/* Ícone SVG do projeto */}
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                          borderRadius: '16px',
                          padding: '1.5rem',
                          border: '1px solid rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          position: 'relative',
                          zIndex: 2
                        }}>
                          <img 
                            src="/portfolio-danilo/images/Projeto_Desenvolvimento.svg"
                            alt="Projeto em Desenvolvimento"
                            style={{
                              width: '48px',
                              height: '48px',
                              filter: 'brightness(0) invert(1)', // Torna o SVG branco
                              opacity: 0.9
                            }}
                          />
                        </div>
                        
                        {/* Texto melhorado */}
                        <div style={{ 
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2
                        }}>
                          <div style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                            Em Desenvolvimento
                          </div>
                          <div style={{ 
                            fontSize: '0.875rem', 
                            color: '#d1d5db', 
                            fontWeight: '500',
                            opacity: 0.9
                          }}>
                            Projeto será lançado em breve
                          </div>
                        </div>

                        {/* Barra de progresso decorativa */}
                        <div style={{
                          width: '80%',
                          height: '3px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                          position: 'relative',
                          zIndex: 2
                        }}>
                          <div style={{
                            width: '60%',
                            height: '100%',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%)',
                            borderRadius: '2px',
                            animation: 'pulse 2s ease-in-out infinite'
                          }} />
                        </div>
                      </div>
                    ) : project.thumbnail.endsWith('.svg') ? (
                      // SVG COM PROPORÇÃO 4:3 FIXA - MANTÉM O FRAME ORIGINAL
                      <div
                        data-hover
                        style={{
                          width: '100%',
                          height: '100%',
                          background: `white url(${project.thumbnail}) no-repeat center center`,
                          backgroundSize: 'contain', // MANTÉM contain para preservar proporção do SVG
                          backgroundPosition: 'center',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px' // Padding mínimo para não colar nas bordas
                        }}
                      />
                    ) : (
                      // Imagem normal COM PROPORÇÃO 4:3 RESPEITADA
                      <img
                        data-hover
                        src={project.thumbnail}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover', // Mantém cover para imagens normais
                          objectPosition: 'center',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    )}

                    {/* OVERLAY CONTENT - MELHORADO APENAS A ORGANIZAÇÃO */}
                    <div
                      data-hover
                      className="content-slate group-hover:opacity-100"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(10px)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease-in-out',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.5rem',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    >
                      {/* SEÇÃO SUPERIOR: TÍTULO E DESCRIÇÃO */}
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        flex: '1',
                        justifyContent: 'center',
                        width: '100%'
                      }}>
                        {/* PROJECT TITLE */}
                        <h3
                          data-hover
                          className="text-xl md:text-2xl font-bold text-center text-white mb-2"
                          style={{ lineHeight: '1.2' }}
                        >
                          {project.title}
                        </h3>

                        {/* PROJECT ABOUT - MAIS ESPAÇO */}
                        <p
                          data-hover
                          className="text-gray-300 block text-center"
                          style={{
                            fontSize: '0.875rem',
                            lineHeight: '1.4',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4, // Mais linhas
                            marginBottom: '1rem'
                          }}
                        >
                          {project.about}
                        </p>
                      </div>

                      {/* SEÇÃO INFERIOR: ÍCONES E TECNOLOGIAS */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        gap: '1rem'
                      }}>
                        {/* GITHUB AND DEMO LINKS */}
                        <div
                          data-hover
                          className="flex gap-4 justify-center"
                        >
                          {project.github && project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex flex-col items-center group/item">
                                <BsGithub
                                  size={30}
                                  className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
                                />
                                <span className="text-white" style={{ fontSize: '0.875rem' }}>GitHub</span>
                              </div>
                            </a>
                          )}

                          {project.link && project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex flex-col items-center group/item">
                                <BsArrowUpRightSquare
                                  size={30}
                                  className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
                                />
                                <span className="text-white" style={{ fontSize: '0.875rem' }}>Live Demo</span>
                              </div>
                            </a>
                          )}

                          {(!project.link || project.link === "#") && (!project.github || project.github === "#") && (
                            <div className="flex flex-col items-center opacity-50">
                              <BsGithub size={30} className="text-white" />
                              <span className="text-white" style={{ fontSize: '0.875rem' }}>Em breve</span>
                            </div>
                          )}
                        </div>

                        {/* TECHNOLOGIES - ABAIXO DOS ÍCONES */}
                        {project.tech && (
                          <div
                            data-hover
                            className="flex flex-wrap gap-2 justify-center"
                          >
                            {project.tech.slice(0, 4).map((item: string, index: number) => (
                              <p
                                data-hover
                                key={index}
                                className="px-2 py-1 rounded-xl text-xs text-white"
                                style={{
                                  background: 'rgba(75, 85, 99, 0.8)',
                                  fontSize: '0.75rem'
                                }}
                              >
                                {item}
                              </p>
                            ))}
                            {project.tech.length > 4 && (
                              <p
                                className="px-2 py-1 rounded-xl text-xs text-white"
                                style={{
                                  background: 'rgba(75, 85, 99, 0.8)',
                                  fontSize: '0.75rem'
                                }}
                              >
                                +{project.tech.length - 4}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </SlideUp>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;