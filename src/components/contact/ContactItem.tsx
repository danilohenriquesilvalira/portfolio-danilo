import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Componente de item de contato com efeito hover
interface ContactItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
}

// Variantes de animação
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const ContactItem = ({ 
  icon, 
  title, 
  value, 
  link = '' 
}: ContactItemProps) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex items-start gap-4 mb-6 hover:transform hover:translate-x-2 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-tech-blue transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-secondary">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactItem;