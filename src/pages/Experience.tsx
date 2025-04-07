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

// Importar dados de experiência
import { experiences, education, certifications } from '@/data/experience';

/* 
  Interfaces para os dados. 
  Se esses tipos já estiverem definidos em outro lugar, você pode importá-los.
*/
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
    <div className="flex flex-wrap justify-center gap-3 mb-10">
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
    </div>
  );
};

/* Timeline elemento para experiência profissional */
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="mb-12 relative">
      {/* Linha vertical da timeline */}
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-tech-blue bg-opacity-30"></div>
      
      <div className="flex gap-6">
        {/* Ícone */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-md"
          style={{ backgroundColor: experience.iconBg }}
        >
          <FaBriefcase className="w-8 h-8 text-tech-blue" />
        </div>
        
        {/* Conteúdo */}
        <div className="flex-1">
          <div className="bg-tertiary rounded-xl p-6 shadow-md">
            <h3 className="text-white text-xl font-bold">{experience.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <FaBuilding className="text-tech-blue flex-shrink-0" />
              <p className="text-secondary text-base font-semibold">
                {experience.company}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
              <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
              <span>{experience.location}</span>
              <span className="mx-2">•</span>
              <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
              <span>{experience.date}</span>
            </div>

            <ul className="mt-5 list-none space-y-3">
              {experience.points.map((point: string, index: number) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-sm tracking-wider flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-tech-blue mt-1.5 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-5 border-t border-gray-700">
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                <FaTools className="text-tech-blue" />
                Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, index: number) => (
                  <span
                    key={`tech-${index}`}
                    className="bg-black-200 px-3 py-1 rounded-md text-xs text-white-100"
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
  );
};

/* Timeline elemento para educação */
interface EducationCardProps {
  education: Education;
}

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="mb-12 relative">
      {/* Linha vertical da timeline */}
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-industry-green bg-opacity-30"></div>
      
      <div className="flex gap-6">
        {/* Ícone */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-md"
          style={{ backgroundColor: education.iconBg }}
        >
          <FaGraduationCap className="w-8 h-8 text-industry-green" />
        </div>
        
        {/* Conteúdo */}
        <div className="flex-1">
          <div className="bg-tertiary rounded-xl p-6 shadow-md">
            <h3 className="text-white text-xl font-bold">{education.degree}</h3>
            <div className="flex items-center gap-2 mt-1">
              <FaBuilding className="text-industry-green flex-shrink-0" />
              <p className="text-secondary text-base font-semibold">
                {education.institution}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
              <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
              <span>{education.date}</span>
            </div>

            <p className="text-white-100 text-sm mt-5 tracking-wider leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Componente para certificações */
interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-tertiary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[300px]">
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

      {/* Badge de credencial */}
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
    </div>
  );
};

const Experience: FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Filtrar experiências baseado no filtro selecionado
  const filteredExperiences = filter === 'all' 
    ? experiences 
    : experiences.filter((exp: Experience) => exp.categories?.includes(filter));

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary mb-2">Minha Trajetória</p>
          <h2 className="text-4xl font-bold text-white">Experiência Profissional</h2>
        </div>

        {/* Filtro de experiências */}
        <ExperienceFilter active={filter} onFilterChange={setFilter} />

        <div className="mt-10">
          {/* Timeline de experiências */}
          <div className="space-y-4">
            {filteredExperiences.map((experience: Experience, index: number) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">Formação Acadêmica</h2>
        </div>

        <div className="mt-10">
          {/* Timeline de educação */}
          <div className="space-y-4">
            {education.map((edu: Education, index: number) => (
              <EducationCard key={`education-${index}`} education={edu} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Certificações</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-10">
            Minhas certificações técnicas e profissionais que validam minhas competências
            em automação industrial e tecnologias relacionadas.
          </p>
        </div>

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
