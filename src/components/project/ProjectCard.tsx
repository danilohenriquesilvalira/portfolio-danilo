import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEye } from 'react-icons/fa';

import { Project } from '@/types/project';

// Variantes de animação para o card
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="bg-tertiary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{ transition: "transform 0.2s ease-out" }}
    >
      <Link to={`/projeto/${project.id}`} className="block">
        <div className="relative h-[220px] overflow-hidden">
          {/* Usando um div de fallback em vez da imagem que pode estar ausente */}
          <div className="w-full h-full bg-black-200 flex items-center justify-center">
            <div className="text-3xl font-bold text-tech-blue">
              {project.title.slice(0, 2).toUpperCase()}
            </div>
          </div>
          
          {/* Overlay gradiente superior para melhor legibilidade das tags */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
          
          {/* Overlay gradiente inferior para melhor legibilidade do título */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          
          {/* Tags de categoria */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag, index) => {
              // Encontrar cor correspondente baseada na categoria
              let tagColor = '#0072BB'; // Tech blue default
              
              if (tag.toLowerCase().includes('indústria 4.0')) {
                tagColor = '#39B54A'; // Verde indústria
              } else if (tag.toLowerCase().includes('plc') || tag.toLowerCase().includes('automação')) {
                tagColor = '#FF5722'; // Laranja automação
              } else if (tag.toLowerCase().includes('scada') || tag.toLowerCase().includes('hmi')) {
                tagColor = '#6E44FF'; // Roxo dados
              }
              
              return (
                <span
                  key={`tag-${index}`}
                  className="text-xs text-white py-1 px-3 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: `${tagColor}CC` }} // CC para 80% de opacidade
                >
                  {tag}
                </span>
              );
            })}
          </div>
          
          {/* Indicação "Featured" para projetos em destaque */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-tech-blue text-white text-xs py-1 px-3 rounded-full shadow-md">
                Destaque
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/projeto/${project.id}`} className="block">
          <h3 className="text-white font-bold text-xl mb-2 line-clamp-2 hover:text-tech-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary text-sm line-clamp-3 mb-4">
            {project.description}
          </p>
        </Link>

        {/* Tecnologias usadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div
              key={`tech-${index}`}
              className="flex items-center gap-1 bg-black-200 py-1 px-2 rounded-md"
              style={{ borderLeft: `3px solid ${tech.color}` }}
            >
              <span className="text-xs text-secondary">{tech.name}</span>
            </div>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-black-200 text-secondary py-1 px-2 rounded-md">
              +{project.technologies.length - 3}
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

export default ProjectCard;