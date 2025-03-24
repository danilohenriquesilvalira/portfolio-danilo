import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPlay, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { projects } from '@/data/projects';
import { Project } from '@/types/project';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Encontrar o projeto no array de projetos
  useEffect(() => {
    setLoading(true);
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
      
      // Scroll para o topo
      window.scrollTo(0, 0);
    } else {
      // Redirecionar para página 404 se o projeto não for encontrado
      navigate('/not-found', { replace: true });
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="canvas-loader"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botão de volta */}
        <div className="mb-8">
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-tech-blue hover:underline"
          >
            <FaArrowLeft /> Voltar para Projetos
          </Link>
        </div>

        {/* Cabeçalho do Projeto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className="bg-tertiary text-secondary py-1 px-4 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-secondary text-lg max-w-3xl">{project.description}</p>
          
          {/* Links do projeto */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaPlay /> Ver Vídeo
              </a>
            )}
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaExternalLinkAlt /> Ver Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaGithub /> Código Fonte
              </a>
            )}
          </div>
        </motion.div>

        {/* Imagem principal do projeto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Tecnologias Utilizadas</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <div 
                key={`tech-${index}`}
                className="bg-tertiary p-4 rounded-xl flex flex-col items-center text-center"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: tech.color + '20' }}
                >
                  <img 
                    src={`/src/assets/icons/${tech.icon}.png`} 
                    alt={tech.name} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detalhes do projeto em grades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Desafio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-tertiary p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">O Desafio</h2>
            <p className="text-secondary">{project.details.challenge}</p>
          </motion.div>
          
          {/* Solução */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-tertiary p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">A Solução</h2>
            <p className="text-secondary">{project.details.solution}</p>
          </motion.div>
        </div>

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Resultados</h2>
          <div className="bg-tertiary p-6 rounded-xl">
            <p className="text-secondary mb-6">{project.details.results}</p>
            
            <h3 className="text-xl font-bold text-white mb-4">Destaques</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <li 
                  key={`highlight-${index}`}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-tech-blue"></div>
                  <p className="text-white">{highlight}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Galeria de imagens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Galeria</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.details.images.map((image, index) => (
              <div 
                key={`gallery-${index}`}
                className="overflow-hidden rounded-xl"
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Imagem ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navegação entre projetos */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Outros Projetos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <Link 
                  key={`related-${index}`}
                  to={`/projeto/${relatedProject.id}`}
                  className="bg-tertiary p-4 rounded-xl hover:bg-black-100 transition-colors"
                >
                  <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">{relatedProject.title}</h3>
                  <p className="text-secondary text-sm line-clamp-2">{relatedProject.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;