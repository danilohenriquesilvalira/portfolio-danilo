import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

import SectionWrapper from '@/components/common/SectionWrapper';

// Componente de campo de formulário
const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  textarea = false,
  rows = 4
}: { 
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={name} 
        className="block text-white text-sm font-medium mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border border-tertiary focus:border-tech-blue resize-none"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border border-tertiary focus:border-tech-blue"
        />
      )}
    </div>
  );
};

// Componente de item de contato
const ContactItem = ({ 
  icon, 
  title, 
  value, 
  link = '' 
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}) => {
  return (
    <div className="flex items-start gap-4 mb-6">
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
    </div>
  );
};

const Contact = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Manipulador de campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Simulação de envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula uma requisição de API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset do formulário após envio bem-sucedido
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Limpa a mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subheading">Vamos Conversar</p>
        <h2 className="section-heading">Contato</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10 justify-between">
        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black-100 p-8 rounded-2xl w-full lg:w-[400px]"
        >
          <h3 className="text-white font-bold text-2xl mb-6">Informações de Contato</h3>
          
                      <ContactItem 
            icon={<FaEnvelope size={18} className="text-tech-blue" />}
            title="Email"
            value="contato@danilolira.com"
            link="mailto:contato@danilolira.com"
          />
          
          <ContactItem 
            icon={<FaPhoneAlt size={18} className="text-tech-blue" />}
            title="Telefone/WhatsApp"
            value="+351 935 479 757"
            link="tel:+351935479757"
          />
          
          <ContactItem 
            icon={<FaMapMarkerAlt size={18} className="text-tech-blue" />}
            title="Localização"
            value="Sintra, Portugal"
          />
          
          <ContactItem 
            icon={<FaLinkedin size={18} className="text-tech-blue" />}
            title="LinkedIn"
            value="danilo-lira"
            link="https://www.linkedin.com/in/danilo-lira-82b17516b"
          />
          
          <ContactItem 
            icon={<FaGithub size={18} className="text-tech-blue" />}
            title="GitHub"
            value="danilohenriquesilvalira"
            link="https://github.com/danilohenriquesilvalira"
          />

          <div className="mt-10">
            <h4 className="text-white font-medium text-lg mb-4">Disponibilidade</h4>
            <p className="text-secondary">
              Estou disponível para projetos de automação industrial, consultoria em Indústria 4.0
              e oportunidades de trabalho relacionadas. Entre em contato para discutirmos como
              posso ajudar em seu projeto.
            </p>
          </div>
        </motion.div>

        {/* Formulário de contato */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black-100 p-8 rounded-2xl w-full lg:flex-1"
        >
          <h3 className="text-white font-bold text-2xl mb-6">Envie uma mensagem</h3>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField 
                label="Nome"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <FormField 
                label="Email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <FormField 
              label="Assunto"
              name="subject"
              placeholder="Sobre o que você gostaria de conversar?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            
            <FormField 
              label="Mensagem"
              name="message"
              placeholder="Descreva seu projeto ou como posso ajudar..."
              value={formData.message}
              onChange={handleChange}
              required
              textarea
              rows={6}
            />

            {/* Status de envio */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 rounded-lg">
                <p className="text-green-500">
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900 bg-opacity-20 border border-red-500 rounded-lg">
                <p className="text-red-500">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-md hover:bg-blue-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");