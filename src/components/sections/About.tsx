import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import { FaIndustry, FaNetworkWired, FaRobot, FaChartLine } from 'react-icons/fa';

// Informações dos cards de especialidades
const services = [
  {
    title: "Automação Industrial",
    icon: <FaIndustry className="w-16 h-16 text-white" />,
    description:
      "Desenvolvimento de soluções de automação utilizando PLCs, HMIs, SCADAs e DCS para otimização de processos industriais.",
  },
  {
    title: "Integração de Sistemas",
    icon: <FaNetworkWired className="w-16 h-16 text-white" />,
    description:
      "Integração entre sistemas de chão de fábrica e sistemas corporativos (MES/ERP) utilizando protocolos industriais e OPC UA.",
  },
  {
    title: "Indústria 4.0 e IIoT",
    icon: <FaRobot className="w-16 h-16 text-white" />,
    description:
      "Implementação de soluções para Indústria 4.0, incluindo IIoT, Digital Twin, Edge Computing e Analytics para processos industriais.",
  },
  {
    title: "Análise de Dados Industriais",
    icon: <FaChartLine className="w-16 h-16 text-white" />,
    description:
      "Coleta, processamento e análise de dados de produção para tomada de decisões baseada em dados e manutenção preditiva.",
  },
];

// Card de serviço
const ServiceCard = ({ index, title, icon, description }: { 
  index: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="xs:w-[250px] w-full p-6 rounded-2xl shadow-card bg-tertiary"
  >
    <div className="w-full h-48 flex justify-center items-center bg-black-200 rounded-2xl mb-6">
      <div className="w-24 h-24 flex justify-center items-center rounded-full bg-tech-blue">
        {icon}
      </div>
    </div>

    <h3 className="text-white text-xl font-bold text-center">{title}</h3>
    <p className="mt-2 text-secondary text-center">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subheading">Introdução</p>
        <h2 className="section-heading">Sobre Mim</h2>
      </motion.div>

      <div className="mt-4 flex flex-col md:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <p className="text-secondary text-lg leading-[30px]">
            Sou um Técnico em Automação Industrial com mais de 10 anos de experiência 
            no desenvolvimento e implementação de soluções para diversos setores industriais, 
            especialmente no setor de bebidas. Atualmente, moro em Sintra, Portugal, e trabalho 
            com desenvolvimento de projetos de automação industrial na RLS Automação.
          </p>
          <p className="text-secondary text-lg leading-[30px] mt-4">
            Minha expertise inclui programação de PLCs Siemens e Allen-Bradley, manutenção de 
            equipamentos industriais, instrumentação, automação de processos e controle industrial. 
            Trabalhei em empresas como Ambev, Font Salem Portugal e Central de Cervejas e Bebidas, 
            onde desenvolvi habilidades técnicas sólidas e conhecimento prático em ambientes industriais.
          </p>
          <p className="text-secondary text-lg leading-[30px] mt-4">
            Além da minha formação técnica pelo SENAI Pernambuco, também tenho formação em 
            Tecnologia da Informação/Sistemas da Informação pela Estácio, o que me permite 
            combinar conhecimentos de automação com análise de dados e sistemas informatizados. 
            Estou sempre buscando aprimorar minhas habilidades para entregar soluções eficientes 
            e inovadoras em automação industrial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="md:h-auto w-full max-w-md relative">
            <img
              src="/src/assets/images/profile.jpg"
              alt="Danilo Lira"
              className="w-full h-auto md:max-h-[600px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-10 -right-10 w-1/2 rounded-2xl p-5 bg-tertiary shadow-card">
              <p className="text-white font-semibold">
                "Automação não é sobre substituir pessoas, mas sim potencializar suas capacidades."
              </p>
              <p className="text-secondary mt-2">- Danilo Lira</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-10"
        >
          Minhas Especialidades
        </motion.h3>

        <div className="mt-10 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");