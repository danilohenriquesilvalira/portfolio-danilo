import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Ícones SVG para as especialidades (mantive os mesmos do seu código)
const AutomationIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V12" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V6" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12L12 12" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12L6 12" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12H5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12H22" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5V2" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V19" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 19L7 17" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7L19 5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5L7 7" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 17L19 19" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Industry4Icon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8.00002C21 6.00002 20.5 5.50002 18.5 5.50002H14.5C12.5 5.50002 12 6.00002 12 8.00002V16C12 18 12.5 18.5 14.5 18.5H18.5C20.5 18.5 21 18 21 16Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12C12 10 11.5 9.5 9.5 9.5H5.5C3.5 9.5 3 10 3 12V16C3 18 3.5 18.5 5.5 18.5H9.5C11.5 18.5 12 18 12 16Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 15V13" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 15V13" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DataAnalysisIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Mais ícones mantidos do seu código
const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 3H5.5C4.4 3 3.5 3.9 3.5 5V8C3.5 9.1 4.4 10 5.5 10H8.5C9.6 10 10.5 9.1 10.5 8V5C10.5 3.9 9.6 3 8.5 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 3H15.5C14.4 3 13.5 3.9 13.5 5V8C13.5 9.1 14.4 10 15.5 10H18.5C19.6 10 20.5 9.1 20.5 8V5C20.5 3.9 19.6 3 18.5 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 13H5.5C4.4 13 3.5 13.9 3.5 15V18C3.5 19.1 4.4 20 5.5 20H8.5C9.6 20 10.5 19.1 10.5 18V15C10.5 13.9 9.6 13 8.5 13Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 13H15.5C14.4 13 13.5 13.9 13.5 15V18C13.5 19.1 14.4 20 15.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15C20.5 13.9 19.6 13 18.5 13Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NodeRedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L4.5 7.5V16.5L12 21L19.5 16.5V7.5L12 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 16.5L15 13.5L12 16.5L9 13.5L4.5 16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 7.5L9 10.5L12 7.5L15 10.5L19.5 7.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V7.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GrafanaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12L14 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L17 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16L17 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BackendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10V14C4 18.4 5.6 20 10 20H14C18.4 20 20 18.4 20 14V10C20 5.6 18.4 4 14 4H10C5.6 4 4 5.6 4 10Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 9.5V14.5C16 16.5 15 17.5 13 17.5H11C9 17.5 8 16.5 8 14.5V9.5C8 7.5 9 6.5 11 6.5H13C15 6.5 16 7.5 16 9.5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6.5V17.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 12H16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 7.5H14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 16.5H14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Tipos de tecnologias para filtrar
interface TechCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Categorias expandidas com novos ícones
const techCategories = [
  {
    id: 'plc',
    name: 'PLC',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 7H7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 12H18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 17H7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 17H18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'react',
    name: 'React',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21C7 21 1 16.9706 1 12C1 7.02944 7 3 12 3C17 3 23 7.02944 23 12C23 16.9706 17 21 12 21Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.8 19.1C3 17.3 2 14.8 2 12C2 9.2 3 6.7 4.8 4.9" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.2 4.9C21 6.7 22 9.2 22 12C22 14.8 21 17.3 19.2 19.1" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9.4L12 13.9L7.5 9.4" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V13.9" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 16V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V16" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25 8V17.2963C6.25 17.8915 6.96184 18.1899 7.41743 17.8257L15.3921 11.5294C15.77 11.2281 15.77 10.6683 15.3921 10.367L7.41743 4.07078C6.96184 3.70651 6.25 4.00501 6.25 4.60015V8Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 4.5L16.5 19.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'mqtt',
    name: 'MQTT',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9.5L12.3 13.7L10.7 10.5L7.5 13.7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 15C20.8284 15 21.5 14.3284 21.5 13.5C21.5 12.6716 20.8284 12 20 12C19.1716 12 18.5 12.6716 18.5 13.5C18.5 14.3284 19.1716 15 20 15Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'uiux',
    name: 'UI/UX',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3H21V7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9L21 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21H3V17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15L3 21" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'design',
    name: 'Design',
    icon: <DesignIcon />
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <BackendIcon />
  },
  {
    id: 'nodere',
    name: 'Node-RED',
    icon: <NodeRedIcon />
  },
  {
    id: 'grafana',
    name: 'Grafana',
    icon: <GrafanaIcon />
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: <CloudIcon />
  },
];

// Skill interface
interface Skill {
  name: string;
  level: string;
  percentage: number;
  categories: string[];
}

// Lista de habilidades expandida para automação industrial e Indústria 4.0
const skillsData = [
  // Principais habilidades que aparecem primeiro - top 6
  { name: 'PLCs (Siemens, Allen Bradley, Schneider)', level: 'Especialista', percentage: 95, categories: ['plc'] },
  { name: 'React / TypeScript / Web Development', level: 'Avançado', percentage: 90, categories: ['react', 'ts'] },
  { name: 'Protocolos Industriais (OPC UA, Modbus, MQTT)', level: 'Especialista', percentage: 95, categories: ['plc', 'mqtt'] },
  { name: 'Node.js / APIs / Backend', level: 'Avançado', percentage: 85, categories: ['nodejs', 'backend'] },
  { name: 'Supervisórios e HMIs (ISA 101)', level: 'Especialista', percentage: 90, categories: ['plc', 'uiux'] },
  { name: 'UI/UX Design para Ambientes Industriais', level: 'Avançado', percentage: 80, categories: ['uiux', 'design'] },

  // Habilidades específicas de PLC
  { name: 'PLCs Siemens (S7-1200/1500, STEP 7, TIA Portal)', level: 'Especialista', percentage: 95, categories: ['plc'] },
  { name: 'PLCs Allen Bradley (ControlLogix, CompactLogix)', level: 'Avançado', percentage: 85, categories: ['plc'] },
  { name: 'PLCs Schneider (M340, M580, Unity Pro)', level: 'Avançado', percentage: 80, categories: ['plc'] },
  { name: 'Programação em Ladder, SCL, FBD, STL', level: 'Especialista', percentage: 90, categories: ['plc'] },
  { name: 'Diagnóstico e Otimização de Sistemas PLCs', level: 'Especialista', percentage: 92, categories: ['plc'] },
  { name: 'Safety PLCs e Sistemas de Segurança', level: 'Avançado', percentage: 85, categories: ['plc'] },
  
  // Mais habilidades (mantidas do seu código original)
  { name: 'React & React Native', level: 'Avançado', percentage: 85, categories: ['react'] },
  { name: 'TypeScript & JavaScript', level: 'Avançado', percentage: 85, categories: ['ts'] },
  { name: 'TailwindCSS & Styled Components', level: 'Avançado', percentage: 80, categories: ['react', 'uiux'] },
  { name: 'Design de Interfaces para Indústria (ISA 101)', level: 'Avançado', percentage: 85, categories: ['uiux', 'design'] },
  { name: 'Figma & Adobe XD para Prototipagem', level: 'Intermediário', percentage: 75, categories: ['design', 'uiux'] },
  { name: 'Dashboards Industriais & Data Visualization', level: 'Avançado', percentage: 88, categories: ['uiux', 'design'] },
  { name: 'MQTT & Broker Configuration', level: 'Avançado', percentage: 85, categories: ['mqtt', 'backend'] },
  { name: 'Node.js & Express', level: 'Avançado', percentage: 85, categories: ['nodejs', 'backend'] },
  { name: 'RESTful APIs & GraphQL', level: 'Avançado', percentage: 80, categories: ['backend'] },
  { name: 'Python para Automação e Análise de Dados', level: 'Avançado', percentage: 85, categories: ['backend'] },
  // Outras habilidades mantidas do código original...
];

// Componente para o shape do botão SVG 
const SvgButtonShape = ({ isActive }) => {
  const fillColor = '#00158E'; 
  const strokeColor = isActive ? '#FFFF00' : '#FFFFFF'; 
  const strokeWidth = "1.5"; 

  return (
    <svg
      width="100%" 
      height="100%" 
      viewBox="0 0 175 49" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0" 
    >
      <path
        d="M0.5 48.5L0.499998 22.6592L22.5879 0.500013L174.5 0.5L174.5 26.4414L152.294 48.5L0.5 48.5Z"
        fill={fillColor} 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
      />
    </svg>
  );
};

// Botão flutuante para mobile
const FloatingSkillButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="skill-button-mobile"
      aria-label="Ver habilidades técnicas"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8.00002C21 6.00002 20.5 5.50002 18.5 5.50002H14.5C12.5 5.50002 12 6.00002 12 8.00002V16C12 18 12.5 18.5 14.5 18.5H18.5C20.5 18.5 21 18 21 16Z" stroke="#00158E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V12C12 10 11.5 9.5 9.5 9.5H5.5C3.5 9.5 3 10 3 12V16C3 18 3.5 18.5 5.5 18.5H9.5C11.5 18.5 12 18 12 16Z" stroke="#00158E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

// Modal para dispositivos móveis
const MobileSkillsModal = ({ isVisible, onClose, selectedCategory, setSelectedCategory, filteredSkills }) => {
  const [activeTab, setActiveTab] = useState('filtros');
  
  return (
    <div className={`mobile-modal ${isVisible ? 'visible' : ''}`}>
      <div className="mobile-modal-content">
        <button className="mobile-modal-close" onClick={onClose}>×</button>
        
        <h2 className="text-xl text-white font-bold mb-4">Habilidades Técnicas</h2>
        
        {/* Tabs do modal */}
        <div className="mobile-tabs">
          <button 
            className={`mobile-tab-button ${activeTab === 'filtros' ? 'active' : ''}`}
            onClick={() => setActiveTab('filtros')}
          >
            Filtros
          </button>
          <button 
            className={`mobile-tab-button ${activeTab === 'habilidades' ? 'active' : ''}`}
            onClick={() => setActiveTab('habilidades')}
          >
            Habilidades
          </button>
        </div>
        
        {/* Conteúdo das tabs */}
        <div className={`mobile-tab-content ${activeTab === 'filtros' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`relative flex items-center justify-center transition-all filter-button
                        ${selectedCategory === 'all' ? 'scale-105' : 'scale-100'}`}
              style={{ width: '100%', height: '49px', padding: 0 }}
            >
              <SvgButtonShape isActive={selectedCategory === 'all'} />
              <div className="relative z-10 flex items-center justify-center w-full h-full gap-2 px-2">
                <span className="text-white text-xs">Todos</span>
              </div>
            </button>
            
            {/* Botões de categorias para modal */}
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative flex items-center justify-center transition-all filter-button
                          ${selectedCategory === category.id ? 'scale-105' : 'scale-100'}`}
                style={{ width: '100%', height: '49px', padding: 0 }}
              >
                <SvgButtonShape isActive={selectedCategory === category.id} />
                <div className="relative z-10 flex items-center justify-center w-full h-full gap-2 px-2">
                  <div className="flex-shrink-0">{category.icon}</div>
                  <span className="text-white text-xs truncate">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button 
              onClick={() => setActiveTab('habilidades')}
              className="px-4 py-2 bg-yellow-500 text-[#00158E] text-sm font-medium rounded hover:bg-yellow-400 transition"
            >
              Ver Habilidades ({filteredSkills.length})
            </button>
          </div>
        </div>
        
        <div className={`mobile-tab-content ${activeTab === 'habilidades' ? 'active' : ''}`}>
          <div className="mb-3 flex justify-between items-center">
            <span className="text-sm text-white">
              {filteredSkills.length} de {skillsData.length} habilidades
            </span>
            <span className="text-sm text-yellow-500">
              {selectedCategory === 'all' ? 'Todas' : techCategories.find(c => c.id === selectedCategory)?.name || ''}
            </span>
          </div>
          
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 skills-list-container">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => {
                const isHighlighted = skill.percentage >= 90;
                
                return (
                  <div 
                    key={index}
                    className={`p-3 ${isHighlighted ? 'skill-item-highlight' : ''}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-yellow-500 font-medium text-sm">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-900/50 h-2 rounded-full mb-1">
                      <motion.div
                        className="bg-yellow-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className={`text-xs ${isHighlighted ? 'text-yellow-300' : 'text-gray-400'}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-10 text-center">
                <p className="text-gray-400">Nenhuma habilidade encontrada para esta categoria.</p>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 px-4 py-2 bg-yellow-500 text-[#00158E] text-sm font-medium rounded hover:bg-yellow-400 transition"
                >
                  Mostrar todas as habilidades
                </button>
              </div>
            )}
          </div>
          
          {/* Legenda sobre níveis de proficiência */}
          <div className="mt-4 pt-3 border-t border-gray-700 text-xs text-gray-400 grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span>Especialista: 90-100%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 mr-2"></div>
              <span>Avançado: 75-89%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500/40 mr-2"></div>
              <span>Intermediário: 50-74%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal About
const About = () => {
  // Estados
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skillsData.slice(0, 6));
  const skillsRef = useRef(null);
  // Estado para controle do modal em dispositivos móveis
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  // Estado para detectar tamanho da tela
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar tamanho da tela
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar na inicialização
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Filtrar habilidades por categoria
  useEffect(() => {
    if (selectedCategory === 'all') {
      // Em mobile mostramos mais itens quando "Todos" é selecionado
      setFilteredSkills(isMobile ? skillsData : skillsData.slice(0, 6));
    } else {
      const filtered = skillsData.filter(skill => 
        skill.categories.includes(selectedCategory)
      );
      setFilteredSkills(filtered);
      
      // Scroll para o topo da lista quando muda a categoria
      if (skillsRef.current) {
        skillsRef.current.scrollTop = 0;
      }
    }
  }, [selectedCategory, isMobile]);

  // Função para corrigir o scroll suave ao navegar para a seção
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
          setTimeout(() => {
            const offset = aboutElement.offsetTop - 100;
            window.scrollTo({
              top: offset,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    if (window.location.hash === '#about') {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Adiciona os estilos CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      /* Barra de rolagem */
      .skills-list-container::-webkit-scrollbar {
        width: 8px;
      }

      .skills-list-container::-webkit-scrollbar-track {
        background: rgba(0, 21, 142, 0.2);
        border-radius: 10px;
      }

      .skills-list-container::-webkit-scrollbar-thumb {
        background-color: #FFD700;
        border-radius: 10px;
        border: 2px solid rgba(0, 21, 142, 0.1);
      }

      .skills-list-container {
        scrollbar-width: thin;
        scrollbar-color: #FFD700 rgba(0, 21, 142, 0.2);
      }
      
      /* Carrossel infinito */
      @keyframes infinite-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      /* Responsividade para os ícones de especialidades */
      .specialty-icons-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        padding: 1rem 0;
      }

      .specialty-icons-track {
        display: flex;
        width: max-content;
        animation: infinite-scroll 25s linear infinite;
      }

      .specialty-icons-track:hover {
        animation-play-state: paused;
      }

      .specialty-icon {
        flex-shrink: 0;
        width: 3rem;  /* Menor em telas pequenas */
        height: 3rem;
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }

      @media (min-width: 640px) {
        .specialty-icon {
          width: 3.5rem;  /* Médio em telas médias */
          height: 3.5rem;
          margin-right: 2rem;
        }
      }

      @media (min-width: 1024px) {
        .specialty-icon {
          width: 4rem;  /* Maior em telas grandes */
          height: 4rem;
          margin-right: 2.5rem;
        }
      }

      .specialty-icon:hover {
        transform: scale(1.2) rotate(10deg);
      }
      
      /* Mobile Modal Styles */
      .mobile-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.85);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
      
      .mobile-modal.visible {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      
      .mobile-modal-content {
        background-color: #00158E;
        border: 2px solid #FFD700;
        border-radius: 12px;
        width: 90%;
        max-width: 500px;
        max-height: 85vh;
        overflow-y: auto;
        padding: 1.5rem;
        position: relative;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
      }
      
      .mobile-modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: #FFD700;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.2);
      }
      
      /* Mobile Tab System */
      .mobile-tabs {
        display: flex;
        border-bottom: 2px solid rgba(255, 215, 0, 0.3);
        margin-bottom: 1rem;
      }
      
      .mobile-tab-button {
        flex: 1;
        padding: 0.75rem;
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 600;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease;
      }
      
      .mobile-tab-button.active {
        color: #FFD700;
      }
      
      .mobile-tab-button.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #FFD700;
      }
      
      .mobile-tab-content {
        display: none;
      }
      
      .mobile-tab-content.active {
        display: block;
      }
      
      /* Skill Button for Mobile */
      .skill-button-mobile {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        background-color: #FFD700;
        color: #00158E;
        border: none;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 100;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .skill-button-mobile:hover,
      .skill-button-mobile:focus {
        transform: scale(1.1);
      }
      
      @media (min-width: 768px) {
        .skill-button-mobile {
          display: none;
        }
      }

      /* Animação de brilho para ícones */
      @keyframes pulse-glow {
        0% {
          filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.3));
        }
        50% {
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
        }
        100% {
          filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.3));
        }
      }

      .specialty-icon svg {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      /* Animação para skills destacadas */
      @keyframes skill-highlight {
        0% {
          box-shadow: 0 0 0px rgba(255, 215, 0, 0);
        }
        50% {
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }
        100% {
          box-shadow: 0 0 0px rgba(255, 215, 0, 0);
        }
      }
      
      .skill-item-highlight {
        animation: skill-highlight 2s ease-in-out infinite;
        border-radius: 0.375rem;
      }
      
      /* Melhorias para o Card Sobre em mobile */
      @media (max-width: 767px) {
        .about-card-text {
          font-size: 12px;
          line-height: 1.4;
          padding: 0 10px;
        }
        
        .about-card-text p {
          margin-bottom: 8px;
        }
      }
      
      /* Ajuste para o background do Card Sobre */
      .about-card-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%; /* Manter proporção quadrada */
      }
      
      .about-card-content {
        position: absolute;
        top: 20%;
        left: 10%;
        right: 10%;
        bottom: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-y: auto;
      }
      
      @media (max-width: 767px) {
        .about-card-content {
          top: 15%;
          left: 8%;
          right: 8%;
          bottom: 15%;
        }
      }
      
      /* Esconder scrollbar mas manter funcionalidade */
      .about-card-content::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Especialidades para o carrossel de ícones
  const specialties = [
    { title: 'Automação Industrial', icon: <AutomationIcon /> },
    { title: 'Integração de Sistemas', icon: <IntegrationIcon /> },
    { title: 'Indústria 4.0 e IIoT', icon: <Industry4Icon /> },
    { title: 'Análise de Dados', icon: <DataAnalysisIcon /> }
  ];

  return (
    <section id="about" className="relative py-20 bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full">
          <img
            src="/portfolio-danilo/images/FundoPadrao2.svg"
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-20 left-10 w-10 h-10 border-2 border-yellow-500 opacity-20 hidden md:block"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-yellow-500 opacity-20 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Âncora para navegação */}
        <div id="about-anchor" className="absolute" style={{ top: '-100px' }}></div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary mb-2">Introdução</p>
          <h2 className="text-4xl font-bold text-white">Sobre Mim</h2>
        </motion.div>

        {/* Container principal - reorganizado com melhor responsividade */}
        <div className="mt-6 lg:mt-8 flex flex-col md:flex-row gap-6 lg:gap-10">
          {/* Coluna da esquerda - Filtros de tecnologia */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Card de usuário */}
            <div className="w-full overflow-visible mb-6 lg:mb-8">
              <img
                src="/portfolio-danilo/About/Card_User.svg"
                alt="Card de usuário"
                className="w-full h-auto object-contain"
                style={{
                  maxWidth: '100%',
                  display: 'block'
                }}
                loading="lazy"
              />
            </div>

            {/* Container de filtros - visível apenas em desktop */}
            <div className="filters-container hidden md:block">
              <h3 className="text-white text-lg font-bold mb-3">Filtrar por tecnologia:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full">
                {/* Botão "Todos" */}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`relative flex items-center justify-center transition-all filter-button
                             ${selectedCategory === 'all' ? 'scale-105' : 'scale-100'}`}
                  style={{ width: '100%', height: '49px', padding: 0 }}
                >
                  <SvgButtonShape isActive={selectedCategory === 'all'} />
                  <div className="relative z-10 flex items-center justify-center w-full h-full gap-2 px-2">
                    <span className="text-white text-xs">Todos</span>
                  </div>
                </button>
                
                {/* Botões de categorias */}
                {techCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative flex items-center justify-center transition-all filter-button
                               ${selectedCategory === category.id ? 'scale-105' : 'scale-100'}`}
                    style={{ width: '100%', height: '49px', padding: 0 }}
                  >
                    <SvgButtonShape isActive={selectedCategory === category.id} />
                    <div className="relative z-10 flex items-center justify-center w-full h-full gap-2 px-2">
                     <div className="flex-shrink-0">{category.icon}</div>
                     <span className="text-white text-xs truncate">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Especialidades como apenas ícones animados - com responsividade */}
            <div className="w-full mt-8 overflow-hidden">
              <div className="specialty-icons-track">
                {[...Array(8)].map((_, groupIndex) => (
                  <React.Fragment key={`group-${groupIndex}`}>
                    {specialties.map((specialty, index) => (
                      <div 
                        key={`${groupIndex}-${index}`}
                        className="specialty-icon"
                      >
                        {specialty.icon}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Coluna da direita - Card Sobre e Habilidades Técnicas */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Card "Sobre" com texto - melhorado para responsividade */}
            <div className="about-card-container mb-6 lg:mb-8">
              <img
                src="/portfolio-danilo/About/Card_Sobre.svg"
                alt="Card sobre background"
                className="w-full h-auto absolute top-0 left-0"
                loading="lazy"
              />

              <div className="about-card-content">
                <div className="about-card-text text-white">
                  <motion.p
                    className="mb-2 md:mb-4 pl-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Sou Técnico em Automação Industrial e Analista/Desenvolvedor de Software, com mais de 10 anos de experiência em automação de processos, integração de sistemas e desenvolvimento de soluções para a Indústria 4.0.
                  </motion.p>
                  <motion.p
                    className="mb-2 md:mb-4 pl-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Especialista em coleta de dados em tempo real, monitoramento inteligente e conectividade industrial, desenvolvo plataformas que integram o chão de fábrica ao nível gerencial, com foco em eficiência e tomada de decisão baseada em dados.
                  </motion.p>
                  <motion.p
                    className="mb-2 md:mb-4 pl-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Com uma visão inovadora, crio HMIs e supervisórios modernos seguindo o padrão ISA 101, acessíveis via navegador ou dispositivos móveis, utilizando tecnologias como React, TypeScript e design UX/UI, eliminando a dependência de soluções engessadas e tradicionais.
                  </motion.p>
                  <motion.p
                    className="pl-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Minha jornada internacional como técnico e desenvolvedor reforçou minha missão: transformar a indústria com ferramentas digitais escaláveis, abertas e inteligentes, conectando qualquer PLC ou protocolo industrial, e impulsionando a evolução contínua dos processos industriais.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas - visível apenas em desktop */}
            <div className="border border-yellow-500 rounded-lg p-4 md:p-6 bg-[#00158E]/30 backdrop-blur-sm hidden md:block">
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 md:mr-3">
                  <path d="M22 9V15C22 16.1 21.1 17 20 17H19" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 7V17C19 18.1 18.1 19 17 19H16" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 5V19C16 20.1 15.1 21 14 21H10C8.9 21 8 20.1 8 19V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 7V17C5 18.1 4.1 19 3 19H2" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9V15C2 16.1 2.9 17 4 17H5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl md:text-2xl font-bold text-white">Habilidades Técnicas</h3>
                <div className="ml-auto text-xs text-gray-300">
                  {filteredSkills.length} de {skillsData.length} habilidades
                </div>
              </div>

              {/* Container de habilidades com altura responsiva */}
              <div 
                ref={skillsRef}
                className="space-y-3 md:space-y-4 overflow-y-auto pr-2 skills-list-container" 
                style={{ height: '250px', maxHeight: 'calc(100vh - 500px)', minHeight: '200px' }}
              >
                {filteredSkills.map((skill, index) => {
                  // Destaca visualmente habilidades-chave
                  const isHighlighted = skill.percentage >= 90;
                  
                  return (
                    <div 
                      key={index}
                      className={`p-2 md:p-3 ${isHighlighted ? 'skill-item-highlight' : ''}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white text-xs md:text-sm font-medium">{skill.name}</span>
                        <span className="text-yellow-500 font-medium text-xs md:text-sm">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-900/50 h-2 rounded-full mb-1">
                        <motion.div
                          className="bg-yellow-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="flex justify-end">
                        <span className={`text-xs ${isHighlighted ? 'text-yellow-300' : 'text-gray-400'}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {/* Mensagem quando não há habilidades para a categoria selecionada */}
                {filteredSkills.length === 0 && (
                  <div className="py-10 text-center">
                    <p className="text-gray-400">Nenhuma habilidade encontrada para esta categoria.</p>
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="mt-4 px-4 py-2 bg-yellow-500 text-[#00158E] text-sm font-medium rounded hover:bg-yellow-400 transition"
                    >
                      Mostrar todas as habilidades
                    </button>
                  </div>
                )}
              </div>
              
              {/* Legenda sobre níveis de proficiência - responsiva */}
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-gray-700 text-xs text-gray-400 flex flex-wrap md:grid md:grid-cols-3 gap-2">
                <div className="flex items-center mr-4 md:mr-0">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500 mr-1 md:mr-2"></div>
                  <span>Especialista: 90-100%</span>
                </div>
                <div className="flex items-center mr-4 md:mr-0">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/70 mr-1 md:mr-2"></div>
                  <span>Avançado: 75-89%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/40 mr-1 md:mr-2"></div>
                  <span>Intermediário: 50-74%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Versão mobile: botão flutuante para abrir o modal */}
      <FloatingSkillButton onClick={() => setShowSkillsModal(true)} />
      
      {/* Modal para exibir habilidades em dispositivos móveis */}
      <MobileSkillsModal 
        isVisible={showSkillsModal}
        onClose={() => setShowSkillsModal(false)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredSkills={filteredSkills}
      />
    </section>
  );
};

export default About;