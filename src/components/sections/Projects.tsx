import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEye, FaArrowLeft, FaSearch } from 'react-icons/fa';

import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// Categorias de projetos com cores personalizadas
const categories = [
  { id: 'all', label: 'Todos', color: '#0072BB', icon: <FaSearch /> },
  { id: 'automacao', label: 'Automação Industrial', color: '#0072BB' },
  { id: 'industria40', label: 'Indústria 4.0', color: '#39B54A' },
  { id: 'plc', label: 'Programação PLC', color: '#FF5722' },
  { id: 'scada', label: 'SCADA/HMI', color: '#6E44FF' },
];

// Card de projeto
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[360px]">
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl mb-5">
        {/* Em vez de uma imagem real, usamos um placeholder colorido */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-600">{project.title.slice(0, 2).toUpperCase()}</span>
        </div>
        
        {/* Overlay com gradiente nas tags de categoria */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag, index) => {
            // Encontrar a cor da categoria correspondente
            const categoryColor = categories.find(cat => 
              cat.label.toLowerCase().includes(tag.toLowerCase().split(' ')[0])
            )?.color || '#0072BB';
            
            return (
              <span
                key={`tag-${index}`}
                className="text-xs text-white py-1 px-3 rounded-full backdrop-blur-sm"
                style={{ backgroundColor: `${categoryColor}CC` }} // CC para 80% de opacidade
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
      <p className="mt-2 text-secondary text-sm line-clamp-3 mb-4">{project.description}</p>

      {/* Tecnologias usadas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <div
            key={`tech-${index}`}
            className="flex items-center gap-1 bg-black-200 py-1 px-2 rounded-md"
            style={{ borderLeft: `3px solid ${tech.color}` }}
          >
            <span className="text-xs text-secondary">{tech.name}</span>
          </div>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs bg-black-200 text-secondary py-1 px-2 rounded-md">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Links e botões de ação */}
      <div className="flex justify-between items-center">
        <Link 
          to={`/projeto/${project.id}`}
          className="flex items-center gap-1 text-tech-blue hover:text-white transition-colors"
        >
          Ver Detalhes 
          <FaArrowRight size={12} className="ml-1" />
        </Link>

        <div className="flex gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-black-200 flex items-center justify-center hover:bg-tech-blue transition-colors"
              aria-label="Ver demonstração"
            >
              <FaEye color="white" size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-black-200 flex items-center justify-center hover:bg-tech-blue transition-colors"
              aria-label="Ver código fonte"
            >
              <FaCode color="white" size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente de paginação
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-center items-center mt-10 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center rounded-full ${
          currentPage === 1 
            ? 'bg-tertiary text-secondary cursor-not-allowed' 
            : 'bg-tech-blue text-white hover:bg-blue-700 transition-colors'
        }`}
      >
        <FaArrowLeft size={12} />
      </button>
      
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={`page-${index + 1}`}
          onClick={() => onPageChange(index + 1)}
          className={`w-9 h-9 rounded-full ${
            currentPage === index + 1 
              ? 'bg-tech-blue text-white' 
              : 'bg-tertiary text-secondary hover:text-white hover:bg-black-100 transition-colors'
          }`}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center rounded-full ${
          currentPage === totalPages 
            ? 'bg-tertiary text-secondary cursor-not-allowed' 
            : 'bg-tech-blue text-white hover:bg-blue-700 transition-colors'
        }`}
      >
        <FaArrowRight size={12} />
      </button>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const projectsPerPage = 6;

  // Atualiza os projetos visíveis quando a categoria muda
  useEffect(() => {
    // Filtra os projetos baseado na categoria selecionada
    const filtered = activeCategory === 'all' 
      ? projects 
      : projects.filter((project) => project.category === activeCategory);
    
    setVisibleProjects(filtered);
    setCurrentPage(1); // Reset para a primeira página ao mudar categoria
  }, [activeCategory]);

  // Calcula o total de páginas
  const totalPages = Math.ceil(visibleProjects.length / projectsPerPage);
  
  // Projetos da página atual
  const currentProjects = visibleProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Manipula mudança de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    
    // Scroll suave para o topo da seção
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary mb-2">Meu Trabalho</p>
          <h2 className="text-4xl font-bold text-white">Projetos</h2>
        </div>

        <p className="mt-3 text-secondary text-lg max-w-3xl mx-auto text-center mb-10">
          Aqui estão alguns dos meus projetos mais recentes e relevantes na área de automação 
          industrial e Indústria 4.0. Cada projeto representa desafios reais que enfrentei 
          e as soluções que implementei para transformar processos industriais.
        </p>

        {/* Filtro de categorias */}
        <div className="flex flex-wrap justify-center mt-10 gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.id 
                  ? 'bg-tech-blue text-white shadow-lg' 
                  : 'bg-tertiary text-secondary hover:text-white'}`}
              style={
                activeCategory === category.id 
                  ? { backgroundColor: category.color } 
                  : {}
              }
            >
              {category.icon && <span className="text-current">{category.icon}</span>}
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <ProjectCard 
                key={`project-${project.id}`} 
                project={project} 
                index={index} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-4xl text-tech-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Nenhum projeto encontrado</h3>
              <p className="text-secondary">Não há projetos nesta categoria no momento.</p>
            </div>
          )}
        </div>
        
        {/* Paginação se necessário */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}

        {/* CTA para contato */}
        <div className="mt-20 bg-tertiary p-8 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Precisa de soluções de automação para sua indústria?</h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Se você está em busca de soluções personalizadas para automação industrial, integração de sistemas 
            ou implementação de tecnologias da Indústria 4.0, estou pronto para ajudar a transformar seus processos.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
          >
            Vamos Conversar
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;