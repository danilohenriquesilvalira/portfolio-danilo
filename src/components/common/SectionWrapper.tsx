import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Variantes para animação
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Interface para propriedades de staggerChildren
interface StaggerProps {
  staggerChildren?: number;
  delayChildren?: number;
}

// SectionWrapper com animações e detecção de visibilidade aprimorada
const SectionWrapper = (
  Component: React.FC, 
  idName: string,
  staggerProps?: StaggerProps
) => {
  function HOC() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Configuração da variante com props de stagger, se fornecidas
    const getVariants = (): Variants => {
      if (!staggerProps) return sectionVariants;

      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            staggerChildren: staggerProps.staggerChildren || 0.1,
            delayChildren: staggerProps.delayChildren || 0.2
          }
        }
      };
    };

    // Detectar quando a seção está visível para iniciar animações
    useEffect(() => {
      // Usando IntersectionObserver se disponível, fallback caso contrário
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              // Desconectar após tornar visível (executa a animação apenas uma vez)
              if (sectionRef.current) observer.unobserve(sectionRef.current);
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.25,
          }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      } else {
        // Fallback para navegadores mais antigos sem IntersectionObserver
        setIsVisible(true);
      }
    }, []);

    return (
      <motion.section
        ref={sectionRef}
        id={idName}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getVariants()}
        className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-30"></div>
        
        {/* hash-span para navegação por ancora */}
        <span className="hash-span block absolute -top-24" id={idName}>
          &nbsp;
        </span>
        
        <div className="relative">
          <Component />
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-30"></div>
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;