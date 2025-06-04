import type { FC } from 'react';
import { useState } from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTools
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Importar dados de experiência e educação (assumed path)
import { experiences, education } from '@/data/experience';

/* Interfaces dos dados */
interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  iconBg: string;
  points: string[];
  technologies: string[];
  categories?: string[];
}

interface Education {
  degree: string;
  institution: string;
  date: string;
  description: string;
  iconBg: string;
}

/* Componente de filtro para experiências */
interface ExperienceFilterProps {
  active: string;
  onFilterChange: (filter: string) => void;
}

const ExperienceFilter: FC<ExperienceFilterProps> = ({ active, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'automacao', label: 'Automação' },
    { id: 'industria', label: 'Indústria' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-300 ${
            active === filter.id
              ? 'bg-tech-blue text-white shadow-lg'
              : 'bg-tertiary text-secondary hover:text-white'
          }`}
          style={{
            boxShadow: active === filter.id 
              ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
              : undefined
          }}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  );
};

/* Card da Timeline para Experiência Profissional */
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const allTechs = experience.technologies;
  const [isExpanded, setIsExpanded] = useState(false);
  const displayLimit = 3; // Number of points to show initially

  const pointsToDisplay = isExpanded ? experience.points : experience.points.slice(0, displayLimit);
  const showToggleButton = experience.points.length > displayLimit;

  return (
    <motion.div
      className="mb-10 relative px-4 sm:px-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-4 sm:gap-6">
        {/* Ícone e Linha Vertical */}
        <div className="relative flex flex-col items-center">
          <div
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-110"
            style={{ 
              backgroundColor: experience.iconBg,
              boxShadow: `0 8px 32px rgba(59, 130, 246, 0.3), 0 4px 16px rgba(59, 130, 246, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)`
            }}
          >
            <FaBriefcase className="w-7 h-7 sm:w-8 sm:h-8 text-tech-blue" />
          </div>
          <div className="absolute top-14 sm:top-16 bottom-0 w-0.5 bg-tech-blue bg-opacity-30"></div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          <div 
            className="bg-tertiary rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden border border-white/5"
            style={{
              background: `linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 100())`,
              boxShadow: `0 10px 40px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
            }}
          >
            {/* Borda lateral colorida - adicionada */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
              style={{
                background: `linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)`,
                boxShadow: `2px 0 8px rgba(59, 130, 246, 0.3)`
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-white text-lg sm:text-xl font-bold">{experience.title}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <FaBuilding className="text-tech-blue" />
                <p className="text-secondary text-sm sm:text-base font-semibold">
                  {experience.company}
                </p>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-secondary text-xs sm:text-sm">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>{experience.location}</span>
                <span className="mx-1 sm:mx-2">•</span>
                <FaCalendarAlt className="text-gray-400" />
                <span>{experience.date}</span>
              </div>

              <ul className="mt-4 space-y-2">
                <AnimatePresence initial={false}>
                  {pointsToDisplay.map((point: string, index: number) => (
                    <motion.li
                      key={`experience-point-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-tech-blue before:font-bold"
                    >
                      {point}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              {showToggleButton && (
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-tech-blue hover:underline text-sm font-medium focus:outline-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {isExpanded ? 'Ver Menos' : 'Ver Mais'}
                </motion.button>
              )}

              <div className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                  <FaTools className="text-tech-blue" />
                  Ferramentas & Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2 justify-start">
                  {allTechs.map((tech: string, index: number) => (
                    <span
                      key={`tech-${index}`}
                      className="bg-black-200 px-2 py-1 rounded-md text-xs text-white whitespace-nowrap hover:bg-tech-blue transition-colors duration-200 border"
                      style={{
                        borderColor: `rgba(59, 130, 246, 0.3)`,
                        boxShadow: `0 2px 8px rgba(59, 130, 246, 0.15)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* Card da Timeline para Formação Acadêmica */
interface EducationCardProps {
  education: Education;
}

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLimit = 200; // Character limit for initial display

  const showToggleButton = education.description.length > descriptionLimit;
  const descriptionToDisplay = isExpanded
    ? education.description
    : education.description.slice(0, descriptionLimit) + (showToggleButton ? '...' : '');

  return (
    <motion.div
      className="mb-10 relative px-4 sm:px-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-4 sm:gap-6">
        {/* Ícone e Linha Vertical */}
        <div className="relative flex flex-col items-center">
          <div
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-110"
            style={{ 
              backgroundColor: education.iconBg,
              boxShadow: `0 8px 32px rgba(59, 130, 246, 0.3), 0 4px 16px rgba(59, 130, 246, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)`
            }}
          >
            <FaGraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-tech-blue" />
          </div>
          <div className="absolute top-14 sm:top-16 bottom-0 w-0.5 bg-tech-blue bg-opacity-30"></div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          <div 
            className="bg-tertiary rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden border border-white/5"
            style={{
              background: `linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 100())`,
              boxShadow: `0 10px 40px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
            }}
          >
            {/* Borda lateral colorida - adicionada */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
              style={{
                background: `linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)`,
                boxShadow: `2px 0 8px rgba(59, 130, 246, 0.3)`
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-white text-lg sm:text-xl font-bold">{education.degree}</h3>
              <div className="flex items-center gap-2 mt-1">
                <FaBuilding className="text-tech-blue" />
                <p className="text-secondary text-sm sm:text-base font-semibold">
                  {education.institution}
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 text-secondary text-xs sm:text-sm">
                <FaCalendarAlt className="text-gray-400" />
                <span>{education.date}</span>
              </div>

              <motion.p
                key={isExpanded ? 'expanded' : 'collapsed'} // Forces remount and re-animation
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-sm mt-4 leading-relaxed text-justify"
              >
                {descriptionToDisplay}
              </motion.p>

              {showToggleButton && (
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-tech-blue hover:underline text-sm font-medium focus:outline-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {isExpanded ? 'Ver Menos' : 'Ver Mais'}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter((exp: Experience) => exp.categories?.includes(filter));

  return (
    <section id="experience" className="pt-24 pb-16 sm:pt-32 sm:pb-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary mb-1 text-base sm:text-lg">
            Explore Minha Trajetória
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Experiência Profissional & <span className="text-tech-blue">Inovação Tecnológica</span>
          </h2>
          <p className="mt-2 text-secondary max-w-2xl mx-auto text-sm sm:text-base">
            Com uma carreira marcada pela constante evolução, transformo desafios em oportunidades ao integrar as tecnologias mais avançadas ao ambiente corporativo.
          </p>
        </motion.div>

        {/* Filtro de experiências */}
        <ExperienceFilter active={filter} onFilterChange={setFilter} />

        <div className="mt-8 sm:mt-10">
          {/* Timeline de experiências */}
          <div className="space-y-6 sm:space-y-8">
            {filteredExperiences.map((experience: Experience, index: number) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </div>
        </div>

        {/* Seção de Educação */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 leading-tight">
            Formação Acadêmica
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
            A base do meu conhecimento é reforçada por uma sólida formação acadêmica, que me capacita a aplicar soluções inovadoras e eficazes.
          </p>
        </motion.div>
        <div className="mt-8 sm:mt-10">
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu: Education, index: number) => (
              <EducationCard key={`education-${index}`} education={edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;