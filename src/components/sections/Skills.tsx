import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { skills } from '../../data/experience';
import { Skill } from '../../types/experience';

// Categorias de habilidades com cores e ícones
const categories = [
  { id: 'all', label: 'Todas', color: '#0072BB', gradient: 'from-tech-blue to-industry-green' },
  { id: 'automacao', label: 'Automação', color: '#0072BB', gradient: 'from-tech-blue to-blue-400' },
  { id: 'industria40', label: 'Indústria 4.0', color: '#39B54A', gradient: 'from-industry-green to-green-300' },
  { id: 'programacao', label: 'Programação', color: '#FF5722', gradient: 'from-automation-orange to-yellow-400' },
];

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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

// Componente para exibir cada habilidade com visual aprimorado
const SkillCard = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => {
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

  // Determina o texto de porcentagem baseado no nível
  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'especialista':
        return '100%';
      case 'avançado':
        return '75%';
      case 'intermediário':
        return '50%';
      case 'básico':
        return '25%';
      default:
        return '25%';
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: delay * 0.1 }}
      className="p-5 bg-tertiary rounded-xl w-full sm:w-64 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-white font-medium text-lg">{skill.name}</p>
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-200">
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full bg-black-200 rounded-full h-2.5 mb-1 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
          style={{ 
            transition: "width 1s ease-in-out"
          }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-white px-2 py-1 rounded-full bg-black-200">
          {skill.level}
        </span>
        <p className="text-secondary text-xs">{getLevelPercentage(skill.level)}</p>
      </div>
    </motion.div>
  );
};

// Componente para mostrar métodos e diferenciais
const ApproachCard = ({ 
  title, 
  items, 
  icon, 
  gradient 
}: { 
  title: string; 
  items: string[]; 
  icon: React.ReactNode; 
  gradient: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: title === "Metodologia" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: title === "Metodologia" ? 0.2 : 0.4 }}
      className="bg-tertiary rounded-2xl overflow-hidden h-full"
    >
      <div className={`bg-gradient-to-r ${gradient} h-2`}></div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-black-200">
            {icon}
          </div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        
        <p className="text-secondary mb-4">
          {title === "Metodologia" 
            ? "Trabalho com metodologias ágeis e estruturadas, adaptando o processo às necessidades específicas de cada projeto. Minha abordagem inclui:"
            : "O que me diferencia como profissional de automação e Indústria 4.0:"}
        </p>
        
        <ul className="space-y-3">
          {items.map((item, index) => (
            <motion.li 
              key={`${title}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="flex items-start gap-3"
            >
              <div className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 bg-gradient-to-br ${gradient}`}></div>
              <p className="text-secondary">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState(skills);

  // Animação para transição suave entre categorias
  useEffect(() => {
    // Filtra as habilidades baseado na categoria selecionada
    const filtered = activeCategory === 'all' 
      ? skills 
      : skills.filter((skill) => skill.category === activeCategory);
    
    setVisibleSkills(filtered);
  }, [activeCategory]);

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

      {/* Categorias com design aprimorado */}
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
              ${activeCategory === category.id 
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105` 
                : 'bg-tertiary text-secondary hover:text-white'}`}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Grid de habilidades com animação */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          {visibleSkills.map((skill: Skill, index: number) => (
            <SkillCard 
              key={`skill-${skill.name}-${index}`} 
              skill={skill} 
              delay={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

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
          <ApproachCard
            title="Metodologia"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>}
            gradient="from-tech-blue to-blue-400"
            items={[
              "Análise detalhada de requisitos e processos existentes",
              "Desenvolvimento iterativo com validações constantes",
              "Testes rigorosos em cada etapa",
              "Documentação completa e treinamento de equipes",
              "Suporte pós-implementação e melhorias contínuas"
            ]}
          />

          <ApproachCard
            title="Diferenciais"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-industry-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>}
            gradient="from-industry-green to-green-300"
            items={[
              "Visão holística que combina experiência em automação tradicional com tecnologias emergentes",
              "Capacidade de traduzir necessidades de negócio em soluções técnicas",
              "Experiência prática em diversos setores industriais",
              "Foco em soluções que não apenas automatizam, mas geram dados valiosos para decisões estratégicas",
              "Atualização constante com as mais recentes tecnologias e tendências do mercado"
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");