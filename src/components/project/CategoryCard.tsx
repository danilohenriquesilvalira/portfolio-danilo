import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Props para o componente
interface CategoryCardProps {
  title: string;
  path: string;
  color: string;
  count: number;
}

// Variantes de animação
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

// Componente de card de categoria para página de projetos
const CategoryCard = ({ title, path, color, count }: CategoryCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="overflow-hidden rounded-2xl bg-tertiary shadow-md h-full"
    >
      <Link to={path} className="block h-full">
        {/* Barra colorida no topo */}
        <div className="h-2" style={{ backgroundColor: color }}></div>
        
        <div className="p-6 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-secondary">
                {count} {count === 1 ? 'projeto' : 'projetos'}
              </span>
              <span 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}33` }} // cor com 20% de opacidade
              >
                <FaArrowRight className="text-sm" style={{ color }} />
              </span>
            </div>
          </div>
          
          {/* Rodapé do card */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Ver categoria</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;