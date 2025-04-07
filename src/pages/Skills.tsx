import React, { useState, useEffect } from 'react';
import { skills } from '@/data/experience';
import { Skill } from '@/types/experience';

// Categorias de habilidades com cores
const categories = [
  { id: 'all', label: 'Todas', color: '#0072BB', gradient: 'from-tech-blue to-industry-green' },
  { id: 'automacao', label: 'Automação', color: '#0072BB', gradient: 'from-tech-blue to-blue-400' },
  { id: 'industria40', label: 'Indústria 4.0', color: '#39B54A', gradient: 'from-industry-green to-green-300' },
  { id: 'programacao', label: 'Programação', color: '#FF5722', gradient: 'from-automation-orange to-yellow-400' },
];

// Componente para exibir cada habilidade com visual aprimorado
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
    <div className="p-5 bg-tertiary rounded-xl w-full sm:w-64 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-3">
        <p className="text-white font-medium text-lg">{skill.name}</p>
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-200">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-6 h-6"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"/></svg>';
            }}
          />
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
    </div>
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
    <div className="bg-tertiary rounded-2xl overflow-hidden h-full">
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
            <li 
              key={`${title}-${index}`}
              className="flex items-start gap-3"
            >
              <div className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 bg-gradient-to-br ${gradient}`}></div>
              <p className="text-secondary">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState(skills);

  // Filtrar habilidades baseado na categoria selecionada
  useEffect(() => {
    const filtered = activeCategory === 'all' 
      ? skills 
      : skills.filter((skill) => skill.category === activeCategory);
    
    setVisibleSkills(filtered);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary mb-2">Minhas Competências</p>
          <h2 className="text-4xl font-bold text-white">Habilidades Técnicas</h2>
        </div>

        {/* Categorias com design aprimorado */}
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.id 
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg` 
                  : 'bg-tertiary text-secondary hover:text-white'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de habilidades */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {visibleSkills.map((skill: Skill) => (
            <SkillCard 
              key={`skill-${skill.name}`} 
              skill={skill} 
            />
          ))}
        </div>

        {/* Seção adicional sobre Abordagem */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            Minha Abordagem
          </h3>

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
                "Foco em soluções que não apenas automatizam, mas também geram dados valiosos para decisões estratégicas",
                "Atualização constante com as mais recentes tecnologias e tendências do mercado"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
