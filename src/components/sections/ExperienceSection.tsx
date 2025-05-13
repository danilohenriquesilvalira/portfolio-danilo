import React, { useState } from 'react';
import { 
  FaBriefcase, 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaTools, 
  FaChevronDown, 
  FaChevronUp, 
  FaGraduationCap, 
  FaCertificate,
  FaHistory,
  FaUserGraduate,
  FaAward,
  FaLaptopCode,
  FaIndustry,
  FaCogs,
  FaGlobe,
  FaBeer
} from 'react-icons/fa';
import '../../style/experienceHub.css';

// Interfaces
interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  iconBg: string;
  points: string[];
  technologies: string[];
  categories?: string[];
  companyLogo?: string;
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

// Interface para props do componente
interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

// Interface para cards de experiência
interface ExperienceCardProps {
  experience: Experience;
}

// Interface para cards de educação
interface EducationCardProps {
  education: Education;
}

// Interface para cards de certificação
interface CertificationCardProps {
  certification: Certification;
}

// Componente de Card de Experiência modernizado
const ModernExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const companyIconMap: Record<string, React.ReactNode> = {
    'Ambev': <FaBeer className="text-[#FFD700] text-lg" />,
    'AB InBev': <FaBeer className="text-[#FFD700] text-lg" />,
    'Tecnale': <FaCogs className="text-[#FFD700] text-lg" />,
    'Grupo Damm': <FaBeer className="text-[#FFD700] text-lg" />,
    'Heineken': <FaBeer className="text-[#FFD700] text-lg" />,
    'RLS Automação Industrial': <FaIndustry className="text-[#FFD700] text-lg" />
  };
  
  const companyIcon = companyIconMap[experience.company] || <FaBriefcase className="text-[#FFD700] text-lg" />;
  
  return (
    <div className="mb-6 relative experience-card">
      <div 
        className="bg-[#00158E] rounded-xl p-6 border border-[#FFD700]/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Cabeçalho do Card - Sempre Visível */}
        <div className="flex items-start">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            style={{ backgroundColor: experience.iconBg }}
          >
            {companyIcon}
          </div>
          
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold">{experience.title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
              <span className="flex items-center text-gray-300">
                <FaBuilding className="text-[#FFD700] mr-1" />
                {experience.company}
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center text-gray-400 text-xs">
                <FaMapMarkerAlt className="mr-1" />
                {experience.location}
              </span>
              <span className="flex items-center text-gray-400 text-xs ml-auto">
                <FaCalendarAlt className="mr-1" />
                {experience.date}
              </span>
            </div>
            
            {/* Visualização das tecnologias mesmo não expandido */}
            <div className="mt-3 flex flex-wrap gap-1">
              {experience.technologies.slice(0, isExpanded ? experience.technologies.length : 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-[#0F054C] px-2 py-0.5 rounded-md text-xs text-white border border-[#FFD700]/30"
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && experience.technologies.length > 3 && (
                <span className="text-xs text-[#FFD700]">+{experience.technologies.length - 3} mais</span>
              )}
            </div>
          </div>
          
          <button 
            className="ml-2 p-2 rounded-full bg-[#0F054C] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors duration-300 expand-button"
            aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        
        {/* Conteúdo Expansível */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-[#FFD700]/20 animate-fadeIn">
            <h4 className="text-white text-sm font-medium mb-2">Responsabilidades:</h4>
            <ul className="space-y-2 ml-1">
              {experience.points.map((point, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700] mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white text-sm font-medium mb-2 mt-4 flex items-center">
              <FaTools className="text-[#FFD700] mr-2" />
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#0F054C] px-3 py-1 rounded-md text-xs text-white border border-[#FFD700]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Card de Educação
const ModernEducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="mb-6 relative education-card">
      <div 
        className="bg-[#00158E] rounded-xl p-6 border border-[#FFD700]/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            style={{ backgroundColor: education.iconBg }}
          >
            <FaGraduationCap className="text-[#FFD700] text-lg" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold">{education.degree}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm">
              <span className="flex items-center text-gray-300">
                <FaBuilding className="text-[#FFD700] mr-1" />
                {education.institution}
              </span>
            </div>
            <div className="mt-1">
              <span className="flex items-center text-gray-400 text-xs">
                <FaCalendarAlt className="mr-1" />
                {education.date}
              </span>
            </div>
          </div>
          
          <button 
            className="ml-2 p-2 rounded-full bg-[#0F054C] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors duration-300 expand-button"
            aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        
        {/* Conteúdo Expansível */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-[#FFD700]/20 animate-fadeIn">
            <p className="text-gray-300 text-sm">{education.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Card de Certificação
const ModernCertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="certification-card bg-[#00158E] p-5 rounded-xl border border-[#FFD700]/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#0F054C] border border-[#FFD700]/30">
          <img 
            src={certification.icon} 
            alt={certification.organization} 
            className="w-6 h-6 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"/></svg>';
            }}
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">{certification.title}</h3>
          <p className="text-gray-300 text-xs">{certification.organization}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
        <FaCalendarAlt className="text-gray-400" />
        <span>{certification.date}</span>
      </div>

      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] hover:text-white text-xs hover:underline transition-colors flex items-center justify-center w-full border-t border-[#FFD700]/20 pt-2 mt-2"
        >
          <FaCertificate className="mr-1" /> Ver certificado
        </a>
      )}
    </div>
  );
};

// Componente principal
const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  experiences, 
  education, 
  certifications 
}) => {
  const [experienceFilter, setExperienceFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<string>('experiencia');
  
  const filteredExperiences = experienceFilter === 'all' 
    ? experiences 
    : experiences.filter((exp) => exp.categories?.includes(experienceFilter));

  // Filtros para experiência
  const ExperienceFilter = () => {
    const filters = [
      { id: 'all', label: 'Todas', icon: <FaGlobe /> },
      { id: 'automacao', label: 'Automação', icon: <FaCogs /> },
      { id: 'industria', label: 'Indústria', icon: <FaIndustry /> },
      { id: 'desenvolvimento', label: 'Desenvolvimento', icon: <FaLaptopCode /> },
    ];
    
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setExperienceFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              experienceFilter === filter.id 
                ? 'bg-[#FFD700] text-[#00158E] shadow-lg' 
                : 'bg-[#00158E] text-gray-300 hover:text-white border border-[#FFD700]/30'
            }`}
          >
            <span>{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="experience-hub h-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          Trajetória <span className="text-[#FFD700]">Profissional</span>
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm mb-4">
          Combinando conhecimento técnico e experiência prática em ambientes industriais
        </p>
        
        {/* Tabs para alternar entre experiência, educação e certificações */}
        <div className="flex justify-center mb-6 tab-container">
          <button
            onClick={() => setActiveTab('experiencia')}
            className={`tab-button ${activeTab === 'experiencia' ? 'active' : ''}`}
          >
            <FaHistory className="tab-icon" />
            <span className="tab-text">Experiência</span>
          </button>
          <button
            onClick={() => setActiveTab('educacao')}
            className={`tab-button ${activeTab === 'educacao' ? 'active' : ''}`}
          >
            <FaUserGraduate className="tab-icon" />
            <span className="tab-text">Formação</span>
          </button>
          <button
            onClick={() => setActiveTab('certificacoes')}
            className={`tab-button ${activeTab === 'certificacoes' ? 'active' : ''}`}
          >
            <FaAward className="tab-icon" />
            <span className="tab-text">Certificações</span>
          </button>
        </div>
      </div>
      
      {activeTab === 'experiencia' && (
        <>
          <ExperienceFilter />
          <div className="overflow-y-auto pr-2 experience-container">
            {filteredExperiences.map((experience, index) => (
              <ModernExperienceCard 
                key={`exp-${index}`} 
                experience={experience} 
              />
            ))}
            {filteredExperiences.length === 0 && (
              <p className="text-center text-gray-400 py-8">Nenhuma experiência encontrada com este filtro.</p>
            )}
          </div>
        </>
      )}
      
      {activeTab === 'educacao' && (
        <div className="overflow-y-auto pr-2 experience-container">
          {education.map((edu, index) => (
            <ModernEducationCard 
              key={`edu-${index}`} 
              education={edu} 
            />
          ))}
        </div>
      )}
      
      {activeTab === 'certificacoes' && (
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <ModernCertificationCard 
              key={`cert-${index}`} 
              certification={cert} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;