import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEye, FaArrowLeft, FaSearch } from 'react-icons/fa';

import SectionWrapper from '@/components/common/SectionWrapper';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// Categorias de projetos com cores personalizadas
const categories = [
  { id: 'all', label: 'Todos', color: '#0072BB', icon: <FaSearch /> },
  { id: 'automacao', label: 'Automação Industrial', color: '#0072BB', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg> },
  { id: 'industria40', label: 'Indústria 4.0', color: '#39B54A', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg> },
  { id: 'plc', label: 'Programação PLC', color: '#FF5722', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg> },
  { id: 'scada', label: 'SCADA/HMI', color: '#6E44FF', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg> },
];

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  },
  exit: { 
    y: 30, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// Card de projeto aprimorado
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Efeito de parallax suave no hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl"
      style={{ transition: "transform 0.2s ease-out" }}
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
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

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-xl">{project.title}</h3>
        <p className="mt-2 text-secondary text-sm line-clamp-3">{project.description}</p>
      </div>

      <div className="mt-4">
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
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight size={12} />
            </motion.div>
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
    </motion.div>
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subheading">Meu Trabalho</p>
        <h2 className="section-heading">Projetos</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-secondary text-lg max-w-3xl mx-auto text-center"
        >
          Aqui estão alguns dos meus projetos mais recentes e relevantes na área de automação 
          industrial e Indústria 4.0. Cada projeto representa desafios reais que enfrentei 
          e as soluções que implementei para transformar processos industriais.
        </motion.p>

        {/* Filtro de categorias aprimorado */}
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.id 
                  ? 'bg-tech-blue text-white shadow-lg scale-105' 
                  : 'bg-tertiary text-secondary hover:text-white'}`}
              style={
                activeCategory === category.id 
                  ? { backgroundColor: category.color } 
                  : {}
              }
            >
              <span className="text-current">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Grid de projetos com animação */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center"
          >
            {currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
                <ProjectCard 
                  key={`project-${project.id}`} 
                  project={project} 
                  index={index} 
                />
              ))
            ) : (
              <motion.div
                variants={cardVariants}
                className="col-span-full text-center py-12"
              >
                <div className="text-4xl text-tech-blue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white font-bold mb-2">Nenhum projeto encontrado</h3>
                <p className="text-secondary">Não há projetos nesta categoria no momento.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Paginação se necessário */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
      </div>

      {/* CTA para contato */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 bg-tertiary p-8 rounded-2xl text-center max-w-4xl mx-auto"
      >
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
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");