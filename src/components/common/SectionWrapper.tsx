import { motion } from 'framer-motion';

const SectionWrapper = (Component: React.FC, idName: string) => {
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;