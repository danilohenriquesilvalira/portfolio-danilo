import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FilterButtonProps {
  category: {
    id: string;
    label: string;
    color?: string;
    icon?: ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
  small?: boolean;
}

const FilterButton = ({ category, isActive, onClick, small = false }: FilterButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm'
      } rounded-lg font-medium transition-all duration-300 flex items-center gap-2
        ${isActive 
          ? 'text-white shadow-md' 
          : 'bg-tertiary text-secondary hover:text-white'}`}
      style={
        isActive 
          ? { backgroundColor: category.color || '#0072BB' } 
          : {}
      }
    >
      {category.icon && <span>{category.icon}</span>}
      {category.label}
    </motion.button>
  );
};

export default FilterButton;