import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Importar dados e tipos
import { projects } from '../../data/projects';
import { Project } from '../../types/project';

// Animações
const cardVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 50,
      damping: 10
    }
  }
};

// Componente para exibir um único projeto em destaque
const FeaturedProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="group bg-tertiary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        {/* Placeholder ou imagem real */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <span className="text-4xl font-bold text-tech-blue opacity-50">{project.title.slice(0, 2).toUpperCase()}</span>
        </div>
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag, tagIndex) => (
            <span 
              key={`tag-${tagIndex}`}
              className="px-3 py-1 text-xs text-white rounded-full backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 114, 187, 0.7)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-tech-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        
        <Link 
          to={`/projeto/${project.id}`}
          className="flex items-center gap-1 text-tech-blue text-sm font-medium hover:gap-2 hover:text-white transition-all"
        >
          Ver Detalhes <FaArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
};

// Componente principal
const FeaturedProjects = () => {
  // Selecionar projetos em destaque (com featured=true ou os 3 primeiros)
  const featuredProjects = projects
    .filter(project => project.featured === true)
    .slice(0, 3);
  
  // Se não houver projetos marcados como featured, pegar os primeiros 3
  const projectsToShow = featuredProjects.length > 0 
    ? featuredProjects 
    : projects.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsToShow.map((project, index) => (
        <FeaturedProjectCard 
          key={project.id} 
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;