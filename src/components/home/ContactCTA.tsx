
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Animações
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Componente de chamada para ação de contato
const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn}
          className="bg-tertiary p-8 sm:p-12 rounded-2xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
            Se você está procurando um especialista em automação industrial para desenvolver 
            soluções eficientes e inovadoras para sua empresa, estou à disposição para conversarmos.
          </p>
          
          <Link 
            to="/contato"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-tech-blue text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Entre em Contato <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;