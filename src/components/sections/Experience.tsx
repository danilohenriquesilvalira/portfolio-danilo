import { useState } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaTools } from 'react-icons/fa';

import SectionWrapper from '@/components/common/SectionWrapper';
import { experiences, education, certifications } from '@/data/experience';

// Animações
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

// Componente de filtro para experiências
const ExperienceFilter = ({ active, onFilterChange }: { 
  active: string; 
  onFilterChange: (filter: string) => void;
}) => {
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'automacao', label: 'Automação' },
    { id: 'industria', label: 'Indústria' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
  ];
  
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-wrap justify-center gap-3 mb-10"
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            active === filter.id 
              ? 'bg-tech-blue text-white shadow-lg scale-105' 
              : 'bg-tertiary text-secondary hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  );
};

// Timeline elemento para experiência profissional aprimorado
const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        boxShadow: '0px 3px 0px #0072BB',
        borderRadius: '16px',
        padding: '24px',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
      date={experience.date}
      dateClassName="text-secondary md:text-white text-sm md:opacity-80"
      iconStyle={{ background: experience.iconBg, boxShadow: `0 0 0 4px ${experience.iconBg}` }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <FaBriefcase className="w-[50%] h-[50%] text-tech-blue" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-bold">{experience.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <FaBuilding className="text-tech-blue flex-shrink-0" />
          <p className="text-secondary text-base font-semibold">
            {experience.company}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
        <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
        <span>{experience.location}</span>
        <span className="mx-2">•</span>
        <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
        <span>{experience.date}</span>
      </div>

      <ul className="mt-5 list-none space-y-3">
        {experience.points.map((point, index) => (
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
          {experience.technologies.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className="bg-black-200 px-3 py-1 rounded-md text-xs text-white-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

// Timeline elemento para educação
const EducationCard = ({ education }: { education: typeof education[0] }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        boxShadow: '0px 3px 0px #39B54A',
        borderRadius: '16px',
        padding: '24px',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
      date={education.date}
      dateClassName="text-secondary md:text-white text-sm md:opacity-80"
      iconStyle={{ background: education.iconBg, boxShadow: `0 0 0 4px ${education.iconBg}` }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <FaGraduationCap className="w-[50%] h-[50%] text-industry-green" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-bold">{education.degree}</h3>
        <div className="flex items-center gap-2 mt-1">
          <FaBuilding className="text-industry-green flex-shrink-0" />
          <p className="text-secondary text-base font-semibold">
            {education.institution}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-secondary text-sm">
        <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
        <span>{education.date}</span>
      </div>

      <p className="text-white-100 text-sm mt-5 tracking-wider leading-relaxed">
        {education.description}
      </p>
    </VerticalTimelineElement>
  );
};

// Componente para certificações com design aprimorado
const CertificationCard = ({ certification }: { certification: typeof certifications[0] }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-tertiary p-6 rounded-2xl w-full sm:w-[300px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-black-200">
          <img 
            src={certification.icon} 
            alt={certification.organization} 
            className="w-8 h-8 object-contain"
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
          <FaCertificate className="text-automation-orange" />
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

const Experience = () => {
  const [filter, setFilter] = useState('all');
  
  // Filtrar experiências baseado no filtro selecionado
  const filteredExperiences = filter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.categories?.includes(filter));

  return (
    <>
      <motion.div
        variants={containerVariants}
        className="text-center"
      >
        <motion.p variants={itemVariants} className="section-subheading">Minha Trajetória</motion.p>
        <motion.h2 variants={itemVariants} className="section-heading">Experiência Profissional</motion.h2>
      </motion.div>

      {/* Filtro de experiências */}
      <ExperienceFilter active={filter} onFilterChange={setFilter} />

      <div className="mt-10">
        <VerticalTimeline animate={true} lineColor="rgba(0, 114, 187, 0.3)">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div
        variants={containerVariants}
        className="mt-20 text-center"
      >
        <motion.h2 variants={itemVariants} className="section-heading">Formação Acadêmica</motion.h2>
      </motion.div>

      <div className="mt-10">
        <VerticalTimeline animate={true} lineColor="rgba(57, 181, 74, 0.3)">
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-20 text-center"
      >
        <motion.h2 variants={itemVariants} className="section-heading">Certificações</motion.h2>
        <motion.p variants={itemVariants} className="text-secondary max-w-2xl mx-auto mt-4">
          Minhas certificações técnicas e profissionais que validam minhas competências
          em automação industrial e tecnologias relacionadas.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-wrap gap-6 justify-center"
      >
        {certifications.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} certification={certification} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "experience", { staggerChildren: 0.1 });