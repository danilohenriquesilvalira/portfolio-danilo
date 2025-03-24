import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaPlay, FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaArrowRight, FaCogs } from 'react-icons/fa';

import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// Variantes de animação
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Componente de Galeria Modal
const ImageGallery = ({ 
  images, 
  isOpen, 
  onClose, 
  initialIndex = 0 
}: { 
  images: string[]; 
  isOpen: boolean; 
  onClose: () => void;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Manipular navegação de imagens
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  // Fechar modal com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  // Impedir scroll quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={onClose}
        >
          {/* Conteúdo do Modal */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-80 transition-colors"
              aria-label="Fechar galeria"
            >
              <FaTimes size={18} />
            </button>
            
            {/* Imagem atual */}
            <div className="relative flex items-center justify-center">
              <img 
                src={images[currentIndex]} 
                alt={`Imagem ${currentIndex + 1}`} 
                className="max-h-[80vh] max-w-full object-contain"
              />
              
              {/* Contador de imagens */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
            
            {/* Botões de navegação */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-80 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-80 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}
            
            {/* Miniaturas */}
            <div className="flex justify-center gap-2 mt-4 px-4">
              {images.map((image, index) => (
                <button
                  key={`thumb-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-16 h-16 overflow-hidden rounded-md border-2 transition-all ${
                    currentIndex === index ? 'border-tech-blue scale-110' : 'border-transparent opacity-60'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Miniatura ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  
  // Refs para animação de scroll
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // Estado para acompanhar seção ativa
  const [activeSection, setActiveSection] = useState('challenge');

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
  
  // Observar as seções para destacar a seção ativa no menu
  useEffect(() => {
    if (!challengeRef.current || !solutionRef.current || !resultsRef.current) return;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    }, options);
    
    observer.observe(challengeRef.current);
    observer.observe(solutionRef.current);
    observer.observe(resultsRef.current);
    
    return () => {
      if (challengeRef.current) observer.unobserve(challengeRef.current);
      if (solutionRef.current) observer.unobserve(solutionRef.current);
      if (resultsRef.current) observer.unobserve(resultsRef.current);
    };
  }, [loading]);
  
  // Abrir galeria de imagens
  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setGalleryOpen(true);
  };

  // Loader animado enquanto os dados carregam
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center pt-20">
        <div className="relative">
          <svg className="animate-spin h-12 w-12 text-tech-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-secondary">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }
  
  // Função para scroll suave para uma seção
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen pt-28 pb-16 relative"
    >
      {/* Fundo de gradiente sutil */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-tertiary to-transparent opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navegação flutuante (apenas para desktop) */}
        <div className="hidden lg:block fixed top-32 left-4 z-20">
          <div className="bg-tertiary backdrop-blur-sm bg-opacity-80 p-4 rounded-xl">
            <ul className="space-y-4">
              <li className="mb-2 text-xs text-secondary">NAVEGAÇÃO</li>
              <li>
                <button 
                  onClick={() => scrollToSection(challengeRef)}
                  className={`flex items-center gap-2 ${
                    activeSection === 'challenge' ? 'text-tech-blue' : 'text-secondary hover:text-white'
                  } transition-colors`}
                >
                  <div className={`w-1 h-6 rounded-full ${
                    activeSection === 'challenge' ? 'bg-tech-blue' : 'bg-gray-700'
                  }`}></div>
                  Desafio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(solutionRef)}
                  className={`flex items-center gap-2 ${
                    activeSection === 'solution' ? 'text-tech-blue' : 'text-secondary hover:text-white'
                  } transition-colors`}
                >
                  <div className={`w-1 h-6 rounded-full ${
                    activeSection === 'solution' ? 'bg-tech-blue' : 'bg-gray-700'
                  }`}></div>
                  Solução
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(resultsRef)}
                  className={`flex items-center gap-2 ${
                    activeSection === 'results' ? 'text-tech-blue' : 'text-secondary hover:text-white'
                  } transition-colors`}
                >
                  <div className={`w-1 h-6 rounded-full ${
                    activeSection === 'results' ? 'bg-tech-blue' : 'bg-gray-700'
                  }`}></div>
                  Resultados
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Botão de volta */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-tech-blue hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center group-hover:bg-tech-blue transition-colors">
              <FaArrowLeft className="text-tech-blue group-hover:text-white transition-colors" />
            </div>
            <span>Voltar para Projetos</span>
          </Link>
        </motion.div>

        {/* Cabeçalho do Projeto */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className="bg-tertiary text-secondary py-1.5 px-4 rounded-full text-sm"
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
                className="flex items-center gap-2 py-2.5 px-5 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaPlay /> Ver Vídeo
              </a>
            )}
            
            {project.demoUrl && project.id === "transporte-paletes" ? (
              <Link
                to="/hmi-transporte"
                className="flex items-center gap-2 py-2.5 px-5 bg-industry-green rounded-lg text-white hover:opacity-90 transition-colors"
              >
                <FaCogs /> Acessar Simulação
              </Link>
            ) : project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 py-2.5 px-5 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaExternalLinkAlt /> Ver Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 px-5 bg-tertiary rounded-lg text-white hover:bg-tech-blue transition-colors"
              >
                <FaGithub /> Código Fonte
              </a>
            )}
          </div>
        </motion.div>

        {/* Imagem principal do projeto com animação */}
        <motion.div
          variants={itemVariants}
          className="mb-16 overflow-hidden rounded-xl shadow-xl cursor-pointer"
          onClick={() => openGallery(0)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
            Tecnologias Utilizadas
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div 
                key={`tech-${index}`}
                className="bg-tertiary p-4 rounded-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: `0 10px 25px -15px ${tech.color}` 
                }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detalhes do projeto em seções */}
        <div className="flex flex-col gap-16 mb-16">
          {/* Desafio */}
          <motion.div
            variants={itemVariants}
            ref={challengeRef}
            id="challenge"
            className="scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              O Desafio
            </h2>
            <div className="bg-tertiary p-8 rounded-xl shadow-lg">
              <p className="text-secondary leading-relaxed">{project.details.challenge}</p>
            </div>
          </motion.div>
          
          {/* Solução */}
          <motion.div
            variants={itemVariants}
            ref={solutionRef}
            id="solution"
            className="scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-1 bg-industry-green rounded-full"></div>
              A Solução
            </h2>
            <div className="bg-tertiary p-8 rounded-xl shadow-lg">
              <p className="text-secondary leading-relaxed">{project.details.solution}</p>
            </div>
          </motion.div>
          
          {/* Resultados */}
          <motion.div
            variants={itemVariants}
            ref={resultsRef}
            id="results"
            className="scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-1 bg-automation-orange rounded-full"></div>
              Resultados
            </h2>
            <div className="bg-tertiary p-8 rounded-xl shadow-lg">
              <p className="text-secondary mb-8 leading-relaxed">{project.details.results}</p>
              
              <h3 className="text-xl font-bold text-white mb-4">Destaques do Projeto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <motion.div 
                    key={`highlight-${index}`}
                    className="flex items-center gap-3 bg-black-100 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-blue to-industry-green flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <p className="text-white">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Galeria de imagens */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-1 bg-data-purple rounded-full"></div>
            Galeria
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.details.images.map((image, index) => (
              <motion.div 
                key={`gallery-${index}`}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openGallery(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative">
                  <img 
                    src={image} 
                    alt={`${project.title} - Imagem ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-tech-blue/80 mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <p className="mt-2 text-sm">Ampliar imagem</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navegação entre projetos */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Outros Projetos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <Link 
                  key={`related-${index}`}
                  to={`/projeto/${relatedProject.id}`}
                  className="group"
                >
                  <motion.div
                    className="bg-tertiary rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-full h-40 overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium text-lg mb-2 group-hover:text-tech-blue transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-secondary text-sm line-clamp-2">{relatedProject.description}</p>
                      
                      <div className="mt-4 flex items-center text-tech-blue">
                        <span className="text-sm">Ver projeto</span>
                        <motion.div
                          animate={{ x: 5 }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                        >
                          <FaArrowRight size={12} className="ml-2" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
        
        {/* CTA para contato */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-tertiary p-8 rounded-2xl text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Interessado em um projeto similar?</h3>
            <p className="text-secondary mb-8">
              Se você está procurando implementar uma solução de automação industrial ou tecnologias 
              da Indústria 4.0 semelhantes a este projeto, vamos conversar!
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Modal de Galeria */}
      <ImageGallery 
        images={project.details.images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={initialImageIndex}
      />
    </motion.div>
  );
};

export default ProjectDetail;