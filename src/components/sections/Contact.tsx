import React, { useState, FormEvent } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Componente de item de contato com efeito hover
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
    <div className="flex items-start gap-4 mb-6 hover:transform hover:translate-x-2 transition-all duration-300">
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
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary mb-2">Vamos Conversar</p>
          <h2 className="text-4xl font-bold text-white">Contato</h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Estou disponível para novos projetos, consultoria ou oportunidades de colaboração. 
            Sinta-se à vontade para entrar em contato e vamos discutir como posso ajudar com 
            suas necessidades de automação industrial.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-10 justify-between">
          {/* Informações de contato */}
          <div className="bg-black-100 p-8 rounded-2xl w-full lg:w-[400px]">
            <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Informações de Contato
            </h3>
            
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

            <div className="mt-10 p-6 bg-tertiary rounded-xl">
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
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-black-100 p-8 rounded-2xl w-full lg:flex-1">
            <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-tech-blue rounded-full"></div>
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block text-white text-sm font-medium mb-2 flex items-center justify-between"
                    >
                      <span>
                        Nome <span className="text-red-500">*</span>
                      </span>
                      
                      {touched.name && errors.name && (
                        <span className="text-red-500 text-xs flex items-center gap-1">
                          <FaExclamationCircle />
                          {errors.name}
                        </span>
                      )}
                    </label>
                    
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="Seu nome"
                        required
                        className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 ${
                          !touched.name 
                            ? 'border-tertiary focus:border-tech-blue' 
                            : errors.name 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-green-500 focus:border-green-500'
                        }`}
                      />
                      {touched.name && formData.name && !errors.name && (
                        <div className="absolute right-3 top-3 text-green-500">
                          <FaCheckCircle />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-white text-sm font-medium mb-2 flex items-center justify-between"
                    >
                      <span>
                        Email <span className="text-red-500">*</span>
                      </span>
                      
                      {touched.email && errors.email && (
                        <span className="text-red-500 text-xs flex items-center gap-1">
                          <FaExclamationCircle />
                          {errors.email}
                        </span>
                      )}
                    </label>
                    
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="seu.email@exemplo.com"
                        required
                        className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 ${
                          !touched.email 
                            ? 'border-tertiary focus:border-tech-blue' 
                            : errors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-green-500 focus:border-green-500'
                        }`}
                      />
                      {touched.email && formData.email && !errors.email && (
                        <div className="absolute right-3 top-3 text-green-500">
                          <FaCheckCircle />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className="block text-white text-sm font-medium mb-2 flex items-center justify-between"
                >
                  <span>
                    Assunto <span className="text-red-500">*</span>
                  </span>
                  
                  {touched.subject && errors.subject && (
                    <span className="text-red-500 text-xs flex items-center gap-1">
                      <FaExclamationCircle />
                      {errors.subject}
                    </span>
                  )}
                </label>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={() => handleBlur('subject')}
                    placeholder="Sobre o que você gostaria de conversar?"
                    required
                    className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 ${
                      !touched.subject 
                        ? 'border-tertiary focus:border-tech-blue' 
                        : errors.subject 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-green-500 focus:border-green-500'
                    }`}
                  />
                  {touched.subject && formData.subject && !errors.subject && (
                    <div className="absolute right-3 top-3 text-green-500">
                      <FaCheckCircle />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-white text-sm font-medium mb-2 flex items-center justify-between"
                >
                  <span>
                    Mensagem <span className="text-red-500">*</span>
                  </span>
                  
                  {touched.message && errors.message && (
                    <span className="text-red-500 text-xs flex items-center gap-1">
                      <FaExclamationCircle />
                      {errors.message}
                    </span>
                  )}
                </label>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Descreva seu projeto ou como posso ajudar..."
                    required
                    className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 resize-none ${
                      !touched.message 
                        ? 'border-tertiary focus:border-tech-blue' 
                        : errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-green-500 focus:border-green-500'
                    }`}
                  />
                  {touched.message && formData.message && !errors.message && (
                    <div className="absolute right-3 top-3 text-green-500">
                      <FaCheckCircle />
                    </div>
                  )}
                </div>
              </div>

              {/* Status de envio */}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;