import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Importa os dados e o tipo
import { projects } from '../../data/projects';
import { Project } from '../../types/project';

// Animations
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

const FeaturedProjectCard = ({
  project,
  index
}: {
  project: Project & { featured?: boolean };
  index: number;
}) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="group bg-tech-blue rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700"
    >
      <div className="relative h-48 overflow-hidden">
        {/* Placeholder ou imagem real */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <span className="text-4xl font-bold text-tech-blue opacity-50">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={`tag-${tagIndex}`}
              className="px-3 py-1 text-xs text-white rounded-full backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-200 text-sm line-clamp-2 mb-4 group-hover:text-gray-100 transition-colors">
          {project.description}
        </p>
        
        <Link
          to={`/projeto/${project.id}`}
          className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:gap-3 border border-white border-opacity-30 hover:border-opacity-50"
        >
          Ver Detalhes <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  // Seleciona projetos em destaque (com featured true ou, se nenhum estiver marcado, os 3 primeiros)
  const featuredProjects = projects
    .filter((project) => project.featured === true)
    .slice(0, 3);
  
  const projectsToShow =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);
  
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <div className="flex flex-row items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full bg-tech-blue"></div>
            <p className="text-white font-medium sm:text-xl">Projetos em Destaque</p>
          </div>
          
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Modernizando a <span className="text-tech-blue">Automação Industrial</span> com Tecnologia Web
          </h2>
          
          <p className="text-secondary mt-4 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
            Desenvolvendo soluções inovadoras que integram <span className="text-white font-semibold">linguagens modernas de programação</span>, 
            <br className="hidden sm:block" />
            <span className="text-white font-semibold">HMI web responsivos</span> e <span className="text-white font-semibold">interfaces intuitivas</span> 
            <br className="hidden sm:block" />
            para revolucionar o chão de fábrica tradicional e conectá-lo à era digital.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsToShow.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/projetos"
            className="flex items-center gap-2 py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
          >
            Ver Todos os Projetos <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;