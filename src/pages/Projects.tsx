import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSlidersH, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// Componentes reutilizáveis
import ProjectCard from '@/components/project/ProjectCard';
import FilterButton from '@/components/project/FilterButton';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

// Categorias de projetos com cores personalizadas
const categories = [
  { id: 'all', label: 'Todos', color: '#0072BB', icon: <FaSearch className="mr-2" /> },
  { id: 'automacao', label: 'Automação Industrial', color: '#0072BB' },
  { id: 'industria40', label: 'Indústria 4.0', color: '#39B54A' },
  { id: 'plc', label: 'Programação PLC', color: '#FF5722' },
  { id: 'scada', label: 'SCADA/HMI', color: '#6E44FF' },
];

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Extrair todas as tags únicas de projetos
  const allTags = Array.from(new Set(
    projects.flatMap(project => project.tags)
  )).sort();
  
  // Manipular filtros
  useEffect(() => {
    let result = projects;
    
    // Filtrar por categoria
    if (activeCategory !== 'all') {
      result = result.filter(project => project.category === activeCategory);
    }
    
    // Filtrar por termo de pesquisa
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Filtrar por tags selecionadas
    if (selectedTags.length > 0) {
      result = result.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }
    
    setFilteredProjects(result);
  }, [activeCategory, searchTerm, selectedTags]);
  
  // Manipulador para tags
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  // Limpar todos os filtros
  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero da página de projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl font-bold text-white mb-6"
          >
            Meus Projetos
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-secondary text-lg max-w-3xl mx-auto"
          >
            Explore meu portfólio de projetos em automação industrial, Indústria 4.0 e sistemas de controle.
            Cada projeto representa soluções reais para desafios industriais.
          </motion.p>
        </motion.div>
        
        {/* Barra de pesquisa e filtros */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            {/* Barra de pesquisa */}
            <motion.div 
              variants={itemVariants}
              className="relative w-full md:w-1/2"
            >
              <input
                type="text"
                placeholder="Pesquisar projetos..."
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
            </motion.div>
            
            {/* Botão de filtros móvel */}
            <motion.button
              variants={itemVariants}
              className="md:hidden flex items-center gap-2 py-3 px-6 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaSlidersH />
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </motion.button>
            
            {/* Filtros de categoria desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <FilterButton
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Filtros móveis */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mb-6"
            >
              <div className="bg-tertiary p-4 rounded-lg">
                <h3 className="text-white font-bold mb-3">Categorias</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <FilterButton
                      key={category.id}
                      category={category}
                      isActive={activeCategory === category.id}
                      onClick={() => setActiveCategory(category.id)}
                      small
                    />
                  ))}
                </div>
                
                <h3 className="text-white font-bold mt-6 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        selectedTags.includes(tag)
                          ? 'bg-tech-blue text-white'
                          : 'bg-black-200 text-secondary hover:text-white'
                      } transition-colors`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                
                {(activeCategory !== 'all' || searchTerm || selectedTags.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 flex items-center gap-2 text-tech-blue hover:text-white transition-colors"
                  >
                    <FaTimes size={12} />
                    Limpar filtros
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
        
        {/* Resultados de pesquisa */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 flex justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-secondary">
            Exibindo {filteredProjects.length} de {projects.length} projetos
          </motion.p>
          
          {/* Limpar filtros (desktop) */}
          {(activeCategory !== 'all' || searchTerm || selectedTags.length > 0) && (
            <motion.button
              variants={itemVariants}
              onClick={clearFilters}
              className="hidden md:flex items-center gap-2 text-tech-blue hover:text-white transition-colors"
            >
              <FaTimes size={12} />
              Limpar filtros
            </motion.button>
          )}
        </motion.div>
        
        {/* Lista de projetos */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
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
            variants={itemVariants}
            className="py-16 text-center"
          >
            <div className="text-4xl text-tech-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl text-white font-bold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-secondary mb-6">Não há projetos correspondentes aos filtros aplicados.</p>
            <button
              onClick={clearFilters}
              className="py-2 px-6 bg-tech-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Limpar filtros
            </button>
          </motion.div>
        )}
        
        {/* CTA para contato */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-tertiary p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Tem um projeto em mente?</h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Se você está buscando um especialista em automação industrial para seu próximo projeto,
            estou disponível para discutir como posso ajudar a transformar sua ideia em realidade.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-tech-blue font-bold text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
          >
            Vamos Conversar
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;