import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

import SectionWrapper from '@/components/common/SectionWrapper';
import { experiences, education, certifications } from '@/data/experience';

// Timeline elemento para experiência profissional
const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        boxShadow: '0px 3px 0px #0072BB',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <FaBriefcase className="w-[50%] h-[50%] text-tech-blue" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      <p className="text-secondary text-sm mt-2">{experience.location}</p>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h4 className="text-white text-sm font-semibold">Tecnologias:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className="bg-tertiary px-2 py-1 rounded-md text-xs text-white-100"
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
      }}
      contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <FaGraduationCap className="w-[50%] h-[50%] text-industry-green" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-bold">{education.degree}</h3>
        <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
          {education.institution}
        </p>
      </div>

      <p className="text-white-100 text-sm mt-4 tracking-wider">
        {education.description}
      </p>
    </VerticalTimelineElement>
  );
};

// Componente para certificações
const CertificationCard = ({ certification }: { certification: typeof certifications[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-5 rounded-2xl w-full sm:w-[300px]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-black-200">
          <FaCertificate className="w-8 h-8 text-automation-orange" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{certification.title}</h3>
          <p className="text-secondary text-sm">{certification.organization}</p>
        </div>
      </div>

      <p className="text-white-100 text-sm">Emitido em: {certification.date}</p>

      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block py-2 px-4 bg-black-200 text-white text-sm rounded-lg hover:bg-tech-blue transition-colors duration-200"
        >
          Ver Credencial
        </a>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subheading">Minha Trajetória</p>
        <h2 className="section-heading">Experiência Profissional</h2>
      </motion.div>

      <div className="mt-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="section-heading">Formação Acadêmica</h2>
      </motion.div>

      <div className="mt-10">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="section-heading">Certificações</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {certifications.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} certification={certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");