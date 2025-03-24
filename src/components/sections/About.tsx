import React, { useState } from 'react';
import { FaIndustry, FaNetworkWired, FaRobot, FaChartLine, FaLightbulb, FaTools, FaCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';

// Informações dos cards de especialidades com cores específicas
const services = [
  {
    title: "Automação Industrial",
    icon: <FaIndustry className="w-16 h-16 text-white" />,
    iconBg: "#0072BB", // tech-blue
    description:
      "Desenvolvimento de soluções de automação utilizando PLCs, HMIs, SCADAs e DCS para otimização de processos industriais.",
  },
  {
    title: "Integração de Sistemas",
    icon: <FaNetworkWired className="w-16 h-16 text-white" />,
    iconBg: "#6E44FF", // data-purple
    description:
      "Integração entre sistemas de chão de fábrica e sistemas corporativos (MES/ERP) utilizando protocolos industriais e OPC UA.",
  },
  {
    title: "Indústria 4.0 e IIoT",
    icon: <FaRobot className="w-16 h-16 text-white" />,
    iconBg: "#39B54A", // industry-green
    description:
      "Implementação de soluções para Indústria 4.0, incluindo IIoT, Digital Twin, Edge Computing e Analytics para processos industriais.",
  },
  {
    title: "Análise de Dados Industriais",
    icon: <FaChartLine className="w-16 h-16 text-white" />,
    iconBg: "#FF5722", // automation-orange
    description:
      "Coleta, processamento e análise de dados de produção para tomada de decisões baseada em dados e manutenção preditiva.",
  },
];

// Abas para informações adicionais
const tabs = [
  { 
    id: 'profile', 
    label: 'Perfil', 
    icon: <FaLightbulb className="text-tech-blue" /> 
  },
  { 
    id: 'skills', 
    label: 'Competências', 
    icon: <FaTools className="text-industry-green" /> 
  },
  { 
    id: 'tech', 
    label: 'Tecnologias', 
    icon: <FaCode className="text-automation-orange" /> 
  },
  { 
    id: 'education', 
    label: 'Formação', 
    icon: <FaGraduationCap className="text-data-purple" /> 
  },
];

// Card de serviço com design aprimorado
const ServiceCard = ({ index, title, icon, description, iconBg }) => (
  <div className="w-full sm:w-64 p-6 rounded-2xl shadow-lg bg-tertiary hover:shadow-xl transition-all duration-300">
    <div className="w-full h-48 flex justify-center items-center bg-black-200 rounded-2xl mb-6 overflow-hidden relative">
      {/* Círculos decorativos */}
      <div 
        className="absolute w-40 h-40 rounded-full blur-lg opacity-30"
        style={{ backgroundColor: iconBg }}
      ></div>
      
      <div 
        className="relative w-24 h-24 flex justify-center items-center rounded-full transition-all duration-300"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
    </div>

    <h3 className="text-white text-xl font-bold text-center mb-3">{title}</h3>
    <p className="mt-2 text-secondary text-center">{description}</p>
  </div>
);

// Conteúdo da aba de perfil
const ProfileTab = () => (
  <div className="space-y-4">
    <p className="text-secondary text-lg leading-relaxed">
      Sou um Técnico em Automação Industrial com mais de 10 anos de experiência 
      no desenvolvimento e implementação de soluções para diversos setores industriais, 
      especialmente no setor de bebidas. Minha trajetória me permitiu adquirir um conhecimento 
      profundo em sistemas de automação e controle, com foco em otimização de processos.
    </p>
    <p className="text-secondary text-lg leading-relaxed">
      Minha abordagem combina conhecimento técnico com visão estratégica, permitindo 
      desenvolver soluções que não apenas automatizam processos, mas também geram 
      dados valiosos para decisões gerenciais e melhorias contínuas.
    </p>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-center mt-6">
      <div className="flex-1 p-4 bg-black-200 rounded-xl">
        <h4 className="text-tech-blue font-bold text-2xl">10+</h4>
        <p className="text-secondary">Anos de Experiência</p>
      </div>
      <div className="flex-1 p-4 bg-black-200 rounded-xl">
        <h4 className="text-industry-green font-bold text-2xl">50+</h4>
        <p className="text-secondary">Projetos Concluídos</p>
      </div>
      <div className="flex-1 p-4 bg-black-200 rounded-xl">
        <h4 className="text-automation-orange font-bold text-2xl">3</h4>
        <p className="text-secondary">Países Trabalhados</p>
      </div>
    </div>
  </div>
);

// Conteúdo da aba de competências
const SkillsTab = () => (
  <div className="space-y-6">
    <p className="text-secondary text-lg mb-6">
      Minhas competências principais incluem integração de sistemas, desenvolvimento de soluções 
      de automação industrial e implementação de tecnologias da Indústria 4.0.
    </p>
    
    {/* Barras de competência */}
    <div className="space-y-5">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white">Automação Industrial</span>
          <span className="text-tech-blue">95%</span>
        </div>
        <div className="w-full bg-black-200 rounded-full h-2">
          <div className="bg-tech-blue h-2 rounded-full" style={{ width: "95%" }}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white">Programação PLC</span>
          <span className="text-tech-blue">90%</span>
        </div>
        <div className="w-full bg-black-200 rounded-full h-2">
          <div className="bg-tech-blue h-2 rounded-full" style={{ width: "90%" }}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white">Indústria 4.0</span>
          <span className="text-industry-green">85%</span>
        </div>
        <div className="w-full bg-black-200 rounded-full h-2">
          <div className="bg-industry-green h-2 rounded-full" style={{ width: "85%" }}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white">Sistemas SCADA</span>
          <span className="text-automation-orange">80%</span>
        </div>
        <div className="w-full bg-black-200 rounded-full h-2">
          <div className="bg-automation-orange h-2 rounded-full" style={{ width: "80%" }}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white">Análise de Dados</span>
          <span className="text-data-purple">75%</span>
        </div>
        <div className="w-full bg-black-200 rounded-full h-2">
          <div className="bg-data-purple h-2 rounded-full" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>
  </div>
);

// Conteúdo da aba de tecnologias
const TechTab = () => (
  <div>
    <p className="text-secondary text-lg mb-6">
      Ao longo da minha carreira, trabalhei com diversas tecnologias de automação e controle industrial. 
      Aqui estão algumas das principais:
    </p>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">S7</span>
        </div>
        <span className="text-white">Siemens S7</span>
      </div>
      
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">AB</span>
        </div>
        <span className="text-white">Allen Bradley</span>
      </div>
      
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">WC</span>
        </div>
        <span className="text-white">WinCC</span>
      </div>
      
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">FT</span>
        </div>
        <span className="text-white">FactoryTalk</span>
      </div>
      
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">OPC</span>
        </div>
        <span className="text-white">OPC UA</span>
      </div>
      
      <div className="bg-black-200 p-3 rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-tech-blue bg-opacity-20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">NR</span>
        </div>
        <span className="text-white">Node-RED</span>
      </div>
    </div>
  </div>
);

// Conteúdo da aba de educação
const EducationTab = () => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 bg-black-200 p-6 rounded-xl">
        <div className="flex items-center gap-4 mb-4">
          <FaGraduationCap className="text-tech-blue text-3xl" />
          <div>
            <h4 className="text-white font-bold">Tecnologia da Informação/Sistemas da Informação</h4>
            <p className="text-secondary">Estácio, 2021-2023</p>
          </div>
        </div>
        <p className="text-secondary">
          Formação em Tecnologia da Informação com foco em Sistemas da Informação, 
          desenvolvendo competências em Data Analysis e MySQL.
        </p>
      </div>
      
      <div className="flex-1 bg-black-200 p-6 rounded-xl">
        <div className="flex items-center gap-4 mb-4">
          <FaGraduationCap className="text-industry-green text-3xl" />
          <div>
            <h4 className="text-white font-bold">Técnico Eletromecânico / Automação</h4>
            <p className="text-secondary">SENAI Pernambuco, 2012-2014</p>
          </div>
        </div>
        <p className="text-secondary">
          Formação técnica em eletromecânica e automação industrial, 
          incluindo pneumática, manutenção preventiva e sistemas de controle.
        </p>
      </div>
    </div>
    
    <h4 className="text-white font-bold text-xl mt-8 mb-4 flex items-center gap-2">
      <FaCertificate className="text-automation-orange" />
      Certificações
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-black-200 p-4 rounded-lg">
        <span className="text-tech-blue text-3xl font-bold block mb-3">S7</span>
        <h5 className="text-white font-medium">Técnico de Automação - RLS automação</h5>
        <p className="text-secondary text-sm mt-1">Siemens, 2024</p>
      </div>
      
      <div className="bg-black-200 p-4 rounded-lg">
        <span className="text-tech-blue text-3xl font-bold block mb-3">AB</span>
        <h5 className="text-white font-medium">Especialista em Allen-Bradley</h5>
        <p className="text-secondary text-sm mt-1">Rockwell Automation, 2022</p>
      </div>
      
      <div className="bg-black-200 p-4 rounded-lg">
        <span className="text-industry-green text-3xl font-bold block mb-3">MP</span>
        <h5 className="text-white font-medium">Manutenção Preventiva Industrial</h5>
        <p className="text-secondary text-sm mt-1">SENAI, 2014</p>
      </div>
    </div>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary mb-2">Introdução</p>
          <h2 className="text-4xl font-bold text-white">Sobre Mim</h2>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="sticky top-32">
              <div className="relative">
                {/* Em vez de uma imagem, usamos um placeholder */}
                <div className="w-full h-auto md:max-h-[600px] bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-2xl flex items-center justify-center aspect-[3/4]">
                  <span className="text-8xl font-bold text-tech-blue opacity-30">DL</span>
                </div>
                
                {/* Gradiente de sobreposição */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black opacity-50"></div>
                
                {/* Caixa de citação */}
                <div className="absolute -bottom-10 -right-10 w-3/5 rounded-2xl p-6 bg-tertiary shadow-2xl backdrop-blur-sm bg-opacity-90">
                  <svg className="w-10 h-10 text-tech-blue mb-2 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  <p className="text-white font-semibold italic">
                    "Automação não é sobre substituir pessoas, mas sim potencializar suas capacidades e permitir que foquem no que realmente importa."
                  </p>
                  <p className="text-secondary mt-2 text-right">- Danilo Lira</p>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-tech-blue bg-opacity-10 border border-tech-blue border-opacity-30 z-[-1]"></div>
                <div className="absolute -bottom-4 -left-12 w-24 h-24 rounded-full bg-industry-green bg-opacity-10 border border-industry-green border-opacity-30 z-[-1]"></div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            {/* Abas de navegação */}
            <div className="bg-black-100 rounded-xl p-1 flex mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-tertiary text-white' 
                      : 'text-secondary hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Conteúdo da aba ativa */}
            <div className="bg-tertiary rounded-xl p-6 shadow-lg">
              {activeTab === 'profile' && <ProfileTab />}
              {activeTab === 'skills' && <SkillsTab />}
              {activeTab === 'tech' && <TechTab />}
              {activeTab === 'education' && <EducationTab />}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            Minhas Especialidades
          </h3>

          <div className="mt-10 flex flex-wrap gap-10 justify-center">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                index={index} 
                {...service} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;