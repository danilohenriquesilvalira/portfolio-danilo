import type { FC } from 'react';
import { useState } from 'react';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCertificate, 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaTools 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Importar dados de experiência, educação e certificações
import { experiences, education, certifications } from '@/data/experience';

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

interface Certification {
  icon: string;
  organization: string;
  title: string;
  date: string;
  credentialUrl?: string;
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
      className="flex flex-wrap justify-center gap-3 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            active === filter.id 
              ? 'bg-tech-blue text-white shadow-lg' 
              : 'bg-tertiary text-secondary hover:text-white'
          }`}
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
  // Tecnologias adicionais modernas a serem incluídas
  const additionalTechs = [
    "Siemens S7", "SCADA", "HMI", "OPC UA", "IIoT", 
    "Node-RED", "SQL", "PostgreSQL", "Go", "TypeScript", 
    "React Native", "Tailwind"
  ];
  // Combina as tecnologias da experiência com as adicionais, sem duplicatas
  const allTechs = Array.from(new Set([...experience.technologies, ...additionalTechs]));

  return (
    <motion.div 
      className="mb-12 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Linha vertical da timeline */}
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-tech-blue bg-opacity-30"></div>
      
      <div className="flex gap-6">
        {/* Ícone */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: experience.iconBg }}
        >
          <FaBriefcase className="w-8 h-8 text-tech-blue" />
        </div>
        
        {/* Conteúdo */}
        <div className="flex-1">
          <div className="bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-white text-xl font-bold">{experience.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <FaBuilding className="text-tech-blue" />
              <p className="text-secondary text-base font-semibold">
                {experience.company}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>{experience.location}</span>
              <span className="mx-2">•</span>
              <FaCalendarAlt className="text-gray-400" />
              <span>{experience.date}</span>
            </div>

            <ul className="mt-5 list-disc list-inside space-y-2">
              {experience.points.map((point: string, index: number) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-5 border-t border-gray-700">
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                <FaTools className="text-tech-blue" />
                Ferramentas & Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {allTechs.map((tech: string, index: number) => (
                  <span
                    key={`tech-${index}`}
                    className="bg-black-200 px-3 py-1 rounded-md text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
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
  return (
    <motion.div 
      className="mb-12 relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Linha vertical da timeline */}
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-industry-green bg-opacity-30"></div>
      
      <div className="flex gap-6">
        {/* Ícone */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: education.iconBg }}
        >
          <FaGraduationCap className="w-8 h-8 text-industry-green" />
        </div>
        
        {/* Conteúdo */}
        <div className="flex-1">
          <div className="bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-white text-xl font-bold">{education.degree}</h3>
            <div className="flex items-center gap-2 mt-1">
              <FaBuilding className="text-industry-green" />
              <p className="text-secondary text-base font-semibold">
                {education.institution}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
              <FaCalendarAlt className="text-gray-400" />
              <span>{education.date}</span>
            </div>

            <p className="text-white text-sm mt-5 leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* Card para Certificações */
interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
  return (
    <motion.div 
      className="bg-tertiary p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-[300px]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-black-200">
          <img 
            src={certification.icon} 
            alt={certification.organization} 
            className="w-8 h-8 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"/></svg>';
            }}
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{certification.title}</h3>
          <p className="text-secondary text-sm">{certification.organization}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-secondary text-sm mb-5">
        <FaCalendarAlt className="text-gray-400" />
        <span>Emitido em: {certification.date}</span>
      </div>

      <div className="bg-black-200 p-3 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaCertificate className="text-orange-500" />
          <span className="text-white text-sm">Credencial</span>
        </div>
        {certification.credentialUrl ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tech-blue hover:text-white text-sm hover:underline transition-colors"
          >
            Ver certificado
          </a>
        ) : (
          <span className="text-secondary text-sm">Disponível mediante solicitação</span>
        )}
      </div>
    </motion.div>
  );
};

const Experience: FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Filtrar experiências com base no filtro selecionado
  const filteredExperiences = filter === 'all' 
    ? experiences 
    : experiences.filter((exp: Experience) => exp.categories?.includes(filter));

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary mb-2 text-lg">Explore Minha Trajetória</p>
          <h2 className="text-4xl font-bold text-white">Experiência Profissional & Inovação Tecnológica</h2>
          <p className="mt-3 text-secondary max-w-2xl mx-auto">
            Com uma carreira marcada pela constante evolução, transformo desafios em oportunidades ao integrar as tecnologias mais avançadas ao ambiente corporativo.
          </p>
        </motion.div>

        {/* Filtro de experiências */}
        <ExperienceFilter active={filter} onFilterChange={setFilter} />

        <div className="mt-10">
          {/* Timeline de experiências */}
          <div className="space-y-8">
            {filteredExperiences.map((experience: Experience, index: number) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </div>
        </div>

        {/* Seção de Educação */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-10">Formação Acadêmica</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A base do meu conhecimento é reforçada por uma sólida formação acadêmica, que me capacita a aplicar soluções inovadoras e eficazes.
          </p>
        </motion.div>
        <div className="mt-10">
          <div className="space-y-8">
            {education.map((edu: Education, index: number) => (
              <EducationCard key={`education-${index}`} education={edu} />
            ))}
          </div>
        </div>

        {/* Seção de Certificações */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Certificações</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-10">
            As certificações obtidas comprovam meu compromisso com a atualização constante e a excelência na aplicação das tecnologias mais disruptivas do mercado.
          </p>
        </motion.div>
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {certifications.map((cert: Certification, index: number) => (
            <CertificationCard key={`certification-${index}`} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
