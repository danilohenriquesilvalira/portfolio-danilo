import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEye } from 'react-icons/fa';

import SectionWrapper from '@/components/common/SectionWrapper';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// Categorias de projetos
const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'automacao', label: 'Automação Industrial' },
  { id: 'industria40', label: 'Indústria 4.0' },
  { id: 'plc', label: 'Programação PLC' },
  { id: 'scada', label: 'SCADA/HMI' },
];

// Card de projeto
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-xl">{project.title}</h3>
        <p className="mt-2 text-secondary text-sm">{project.description}</p>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={`tag-${index}`}
              className="text-xs bg-black-200 text-secondary py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs bg-black-200 text-secondary py-1 px-2 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <Link 
            to={`/projeto/${project.id}`}
            className="flex items-center gap-1 text-tech-blue hover:underline"
          >
            Ver Detalhes <FaArrowRight size={12} />
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

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtra os projetos baseado na categoria selecionada
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter((project) => project.category === activeCategory);

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

        {/* Filtro de categorias */}
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
                ${activeCategory === category.id 
                  ? 'bg-tech-blue text-white' 
                  : 'bg-tertiary text-secondary hover:text-white'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <motion.div 
          layout
          className="mt-10 flex flex-wrap gap-7 justify-center"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </motion.div>
      </div>

      {/* CTA para ver todos os projetos */}
      <div className="mt-16 flex justify-center">
        <Link
          to="/projetos"
          className="py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Ver Todos os Projetos <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");