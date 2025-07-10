import { useState, useRef, FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Reaproveitando o componente de contato existente na forma de página independente
import ContactFormField from '@/components/contact/ContactFormField';
import ContactItem from '@/components/contact/ContactItem';

// Variantes de animação
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const ContactPage = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Estado para validação de formulário
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Validar campos
  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (value.trim().length < 3) {
          error = 'Nome deve ter pelo menos 3 caracteres';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Email inválido';
        }
        break;
      case 'subject':
        if (value.trim().length < 5) {
          error = 'Assunto deve ter pelo menos 5 caracteres';
        }
        break;
      case 'message':
        if (value.trim().length < 20) {
          error = 'Mensagem deve ter pelo menos 20 caracteres';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  // Manipulador de campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validar campo
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Manipulador para marcar campo como tocado
  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate on blur
    const value = formData[field as keyof typeof formData];
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Validar todo o formulário
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    const newTouched = { name: true, email: true, subject: true, message: true };
    
    for (const field in formData) {
      const key = field as keyof typeof formData;
      const error = validateField(field, formData[key]);
      newErrors[key as keyof typeof errors] = error;
      if (error) isValid = false;
    }
    
    setErrors(newErrors);
    setTouched(newTouched);
    
    return isValid;
  };

  // Simulação de envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validar formulário antes de enviar
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return;
    }
    
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
      
      // Reset dos estados de validação
      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false
      });
      
      // Limpa a mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-bold text-white mb-6">
            Entre em Contato
          </motion.h1>
          <motion.p variants={itemVariants} className="text-secondary max-w-2xl mx-auto">
            Estou disponível para novos projetos, consultoria ou oportunidades de colaboração. 
            Sinta-se à vontade para entrar em contato e vamos discutir como posso ajudar com 
            suas necessidades de automação industrial.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-between">
          {/* Informações de contato */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-black-100 p-8 rounded-2xl w-full lg:w-[400px] transform hover:shadow-lg transition-all duration-300"
          >
            <motion.h3 variants={itemVariants} className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Informações de Contato
            </motion.h3>
            
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

            <motion.div variants={itemVariants} className="mt-10 p-6 bg-tertiary rounded-xl">
              <h4 className="text-white font-medium text-lg mb-4 flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                Resposta Rápida
              </h4>
              <p className="text-secondary">
                Para uma resposta mais rápida, envie-me uma mensagem via WhatsApp.
                Estou disponível para projetos de automação industrial, consultoria em 
                Indústria 4.0 e oportunidades de trabalho relacionadas.
              </p>
              <a 
                href="https://wa.me/+351935479757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-black-100 p-8 rounded-2xl w-full lg:flex-1"
          >
            <motion.h3 variants={itemVariants} className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Envie uma mensagem
            </motion.h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <ContactFormField 
                    label="Nome"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    touched={touched.name}
                    error={errors.name}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <ContactFormField 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    touched={touched.email}
                    error={errors.email}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <ContactFormField 
                  label="Assunto"
                  name="subject"
                  placeholder="Sobre o que você gostaria de conversar?"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => handleBlur('subject')}
                  touched={touched.subject}
                  error={errors.subject}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ContactFormField 
                  label="Mensagem"
                  name="message"
                  placeholder="Descreva seu projeto ou como posso ajudar..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  touched={touched.message}
                  error={errors.message}
                  required
                  textarea
                  rows={6}
                />
              </motion.div>

              {/* Status de envio */}
              <motion.div variants={itemVariants}>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                    <p className="text-green-500">
                      Mensagem enviada com sucesso! Entrarei em contato em breve.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900 bg-opacity-20 border border-red-500 rounded-lg flex items-center gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0" />
                    <p className="text-red-500">
                      Por favor, corrija os erros no formulário antes de enviá-lo.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-3 px-8 rounded-xl outline-none bg-tech-blue font-bold text-white shadow-button hover:shadow-button-hover hover:bg-blue-700 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : 'Enviar Mensagem'}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        
        {/* Mapa ou localização (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-tertiary p-8 rounded-2xl overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Localização</h3>
          <div className="h-64 rounded-lg overflow-hidden relative bg-black-200">
            {/* Aqui você poderia integrar um mapa como Google Maps ou uma imagem estática */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-secondary">
                Sintra, Portugal - Disponível para projetos em Portugal e remotamente
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;