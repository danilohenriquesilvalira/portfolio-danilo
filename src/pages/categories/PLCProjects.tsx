import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaMicrochip } from 'react-icons/fa';

// Importar dados e componentes
import { projects } from '../../data/projects';
import { Project } from '../../types/project';
import ProjectCard from '../../components/project/ProjectCard';

// Animações
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const PLCProjects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filtrar projetos para mostrar apenas a categoria PLC
  useEffect(() => {
    let plcProjects = projects.filter(p => p.category === 'plc');
    
    // Filtrar por termo de pesquisa
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      plcProjects = plcProjects.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Filtrar por tags selecionadas
    if (selectedTags.length > 0) {
      plcProjects = plcProjects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }
    
    setFilteredProjects(plcProjects);
  }, [searchTerm, selectedTags]);
  
  // Obter tags únicas apenas de projetos PLC
  const plcTags = Array.from(new Set(
    projects
      .filter(p => p.category === 'plc')
      .flatMap(project => project.tags)
  )).sort();
  
  // Manipulador para tags
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  // Limpar filtros
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <>
      {/* Hero da página */}
      <section className="bg-gradient-to-b from-primary to-black-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center">
                <FaMicrochip className="text-3xl text-orange-500" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">Programação PLC</h1>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Projetos de programação de Controladores Lógicos Programáveis (PLCs) para automação 
              industrial, incluindo desenvolvimento de lógicas de controle, interfaces HMI,
              e integração com sistemas SCADA.
            </p>
            
            <Link to="/projetos" className="inline-flex items-center gap-2 mt-8 text-tech-blue hover:text-white transition-colors">
              <FaArrowLeft size={12} />
              Voltar para todos os projetos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Seção de projetos */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra de pesquisa e filtros */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
              {/* Barra de pesquisa */}
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Pesquisar projetos de PLC..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 px-4 pl-12 bg-tertiary rounded-lg text-white placeholder-secondary outline-none border border-tertiary focus:border-tech-blue transition-colors"
                />
                <FaSearch className="absolute left-4 top-4 text-secondary" />
                
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-4 text-secondary hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              
              {/* Tags */}
              <div className="w-full md:w-1/2">
                <h3 className="text-white font-bold mb-3">Filtrar por tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {plcTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        selectedTags.includes(tag)
                          ? 'bg-orange-500 text-white'
                          : 'bg-black-200 text-secondary hover:text-white'
                      } transition-colors`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Informações de resultado e filtros ativos */}
            <div className="flex justify-between items-center">
              <div className="text-secondary">
                <span>Exibindo {filteredProjects.length} de {projects.filter(p => p.category === 'plc').length} projetos</span>
                
                {/* Tags selecionadas */}
                {selectedTags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedTags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 bg-opacity-20 rounded-full text-xs text-orange-400">
                        {tag}
                        <button onClick={() => handleTagToggle(tag)} className="text-orange-400 hover:text-white">
                          <FaTimes size={10} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Limpar filtros */}
              {(searchTerm || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-orange-400 hover:text-white transition-colors"
                >
                  <FaTimes size={12} />
                  Limpar filtros
                </button>
              )}
            </div>
          </motion.div>
          
          {/* Lista de projetos */}
          {filteredProjects.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`project-${project.id}`}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="py-16 text-center"
            >
              <div className="text-4xl text-orange-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-bold mb-2">Nenhum projeto encontrado</h3>
              <p className="text-secondary mb-6">Não há projetos correspondentes aos filtros aplicados.</p>
              <button
                onClick={clearFilters}
                className="py-2 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Limpar filtros
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default PLCProjects;
