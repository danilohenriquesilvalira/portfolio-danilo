import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { skills } from '../../data/experience';
import { Skill } from '../../types/experience';

// Categorias de habilidades
const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'automacao', label: 'Automação' },
  { id: 'industria40', label: 'Indústria 4.0' },
  { id: 'programacao', label: 'Programação' },
];

// Componente para exibir cada habilidade
const SkillCard = ({ skill }: { skill: Skill }) => {
  // Determina a cor baseada no nível
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'especialista':
        return 'bg-green-600';
      case 'avançado':
        return 'bg-blue-600';
      case 'intermediário':
        return 'bg-yellow-600';
      case 'básico':
        return 'bg-gray-600';
      default:
        return 'bg-gray-600';
    }
  };

  // Determina a largura da barra de progresso baseada no nível
  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'especialista':
        return 'w-full';
      case 'avançado':
        return 'w-3/4';
      case 'intermediário':
        return 'w-1/2';
      case 'básico':
        return 'w-1/4';
      default:
        return 'w-1/4';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-5 bg-tertiary rounded-xl w-full sm:w-64"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-white font-medium text-lg">{skill.name}</p>
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-200">
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full bg-black-200 rounded-full h-2.5 mb-1">
        <div className={`h-2.5 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}></div>
      </div>
      <p className="text-secondary text-xs text-right">{skill.level}</p>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtra as habilidades baseado na categoria selecionada
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subheading">Minhas Competências</p>
        <h2 className="section-heading">Habilidades Técnicas</h2>
      </motion.div>

      {/* Filtro de categorias */}
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
              ${activeCategory === category.id 
                ? 'bg-tech-blue text-white' 
                : 'bg-tertiary text-secondary hover:text-white'}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid de habilidades */}
      <motion.div
        layout
        className="mt-10 flex flex-wrap gap-6 justify-center"
      >
        {filteredSkills.map((skill: Skill, index: number) => (
          <SkillCard key={`skill-${index}`} skill={skill} />
        ))}
      </motion.div>

      {/* Seção adicional sobre Abordagem */}
      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-10"
        >
          Minha Abordagem
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-tertiary rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold text-white mb-4">Metodologia</h4>
            <p className="text-secondary">
              Trabalho com metodologias ágeis e estruturadas, adaptando o processo às necessidades
              específicas de cada projeto. Minha abordagem inclui:
            </p>
            <ul className="mt-4 list-disc ml-5 space-y-2 text-secondary">
              <li>Análise detalhada de requisitos e processos existentes</li>
              <li>Desenvolvimento iterativo com validações constantes</li>
              <li>Testes rigorosos em cada etapa</li>
              <li>Documentação completa e treinamento de equipes</li>
              <li>Suporte pós-implementação e melhorias contínuas</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-tertiary rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold text-white mb-4">Diferenciais</h4>
            <p className="text-secondary">
              O que me diferencia como profissional de automação e Indústria 4.0:
            </p>
            <ul className="mt-4 list-disc ml-5 space-y-2 text-secondary">
              <li>Visão holística que combina experiência em automação tradicional com tecnologias emergentes</li>
              <li>Capacidade de traduzir necessidades de negócio em soluções técnicas</li>
              <li>Experiência prática em diversos setores industriais</li>
              <li>Foco em soluções que não apenas automatizam, mas geram dados valiosos para decisões estratégicas</li>
              <li>Atualização constante com as mais recentes tecnologias e tendências do mercado</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");