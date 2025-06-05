import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";

// Tipos TypeScript
interface Project {
  id: string;
  title: string;
  about: string;
  filter: string[];
  tech: string[];
  thumbnail: string;
  github?: string;
}

// Dados dos projetos - Apenas 2 projetos limpos
const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Transporte',
    about: 'Sistema web moderno para controle e monitoramento de transportadores industriais com interface responsiva, focado na otimização de fluxo de materiais e integração SCADA.',
    filter: ['All', 'Web Development'],
    tech: ['React', 'TypeScript', 'Industrial', 'HMI'],
    thumbnail: '/portfolio-danilo/projects/transporte.jpg',
    github: 'https://github.com/danilolirabr/sistema-transporte'
  },
  {
    id: '2',
    title: 'Estação de CIP',
    about: 'Interface web para controle de estação CIP (Clean-in-Place) com supervisão em tempo real de processos de limpeza automatizados, garantindo padrões de higiene e rastreabilidade.',
    filter: ['All', 'Web Development'],
    tech: ['React', 'CIP', 'Automação', 'SCADA'],
    thumbnail: '/portfolio-danilo/projects/estacao-cip.jpg',
    github: 'https://github.com/danilolirabr/estacao-cip'
  }
];

// Componente Filter
const Filter: React.FC<{
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}> = ({ selectedFilter, setSelectedFilter }) => {
  const filters = ['All', 'Web Development'];

  return (
    <div className="flex justify-center mt-8 mb-12">
      <div className="flex gap-8 md:gap-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`font-medium text-base md:text-lg transition-all duration-300 relative group
              ${selectedFilter === filter
                ? 'text-tech-blue'
                : 'text-gray-400 hover:text-white'
              }`}
          >
            {filter}
            {selectedFilter === filter && (
              <hr className="w-8 border-t-2 rounded-full border-tech-blue absolute left-1/2 -translate-x-1/2 mt-2 group-hover:w-10 transition-all duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Componente SlideUp
const SlideUp: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full flex" // Ensure card takes full height for grid consistency
    >
      {children}
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter((project) =>
      project.filter.includes(selectedFilter)
    );
    setFilteredProjects(newFilteredProjects);
  }, [selectedFilter]);

  return (
    <section className="relative w-full min-h-screen bg-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"> {/* Adjusted vertical padding */}

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16" // Adjusted bottom margin
        >
          <h2 className="relative text-white font-black text-4xl md:text-5xl mb-4 leading-tight">
            Meus Projetos
            <hr className="w-16 border-t-4 rounded border-tech-blue absolute left-1/2 -translate-x-1/2 mt-3" />
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
            Explore as soluções que desenvolvo para transformar a indústria com tecnologias web avançadas, otimizando processos e elevando a produtividade.
          </p>
        </motion.div>

        {/* Filter Section */}
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        {/* Projects Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch"> {/* Added items-stretch for equal card heights */}
          {filteredProjects.map((project: Project) => (
            <SlideUp key={project.id}>
              {/* Project Card */}
              <div className="group relative rounded-xl overflow-hidden bg-gray-800/40 hover:bg-gray-700/60 transition-all duration-500 border border-gray-700/50 hover:border-tech-blue/60 shadow-lg hover:shadow-2xl hover:scale-[1.01] transform-gpu flex flex-col cursor-pointer w-full"> {/* Added w-full */}

                {/* Project Image Placeholder */}
                <div className="relative h-60 overflow-hidden bg-gray-900 flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                    <div className="text-5xl font-black text-gray-700 group-hover:text-tech-blue/60 transition-colors duration-500">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-tech-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description - Smooth reveal on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex-1 flex flex-col">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.about}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6 flex-1 items-start content-start">
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="bg-tech-blue/15 text-tech-blue px-3 py-1 rounded-full text-xs font-medium border border-tech-blue/20 hover:bg-tech-blue/25 transition-colors duration-300 backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="flex justify-center mt-auto">
                      {project.github && (
                        <Link
                          to={project.github}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="group/btn relative inline-flex items-center justify-center px-6 py-3 border border-tech-blue/50 rounded-full text-tech-blue text-sm font-medium overflow-hidden transition-all duration-300 hover:text-white hover:border-tech-blue hover:shadow-tech-blue/30 hover:shadow-md"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <BsGithub size={18} /> Ver Código
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-tech-blue to-blue-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Hover Indicator (always present but fades) */}
                  <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-6 left-0 right-0 text-center px-6 pointer-events-none">
                    <div className="text-gray-500 text-sm">
                      Passe o mouse para ver detalhes
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-10 h-1 bg-tech-blue/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Informative Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 text-sm text-gray-500" // Adjusted margin-top
        >
          <p>
            Curioso para ver mais? Novos projetos e atualizações chegam em breve.
          </p>
          <p className="mt-1">
            Mantenha-se conectado!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;