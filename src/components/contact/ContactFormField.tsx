import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Componente de campo de formulário com validação visual
interface ContactFormFieldProps { 
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  error?: string;
  touched?: boolean;
}

const ContactFormField = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  required = false,
  textarea = false,
  rows = 4,
  error = '',
  touched = false
}: ContactFormFieldProps) => {
  // Determinar a cor da borda baseado no estado do campo
  const getBorderClass = () => {
    if (!touched) return 'border-tertiary focus:border-tech-blue';
    if (error) return 'border-red-500 focus:border-red-500';
    if (value) return 'border-green-500 focus:border-green-500';
    return 'border-tertiary focus:border-tech-blue';
  };

  return (
    <div className="mb-6">
      <label 
        htmlFor={name} 
        className="block text-white text-sm font-medium mb-2 flex items-center justify-between"
      >
        <span>
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        
        {touched && error && (
          <span className="text-red-500 text-xs flex items-center gap-1">
            <FaExclamationCircle />
            {error}
          </span>
        )}
      </label>
      
      {textarea ? (
        <div className="relative">
          <textarea
            id={name}
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 ${getBorderClass()} resize-none`}
          />
          {touched && value && !error && (
            <div className="absolute right-3 top-3 text-green-500">
              <FaCheckCircle />
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            className={`w-full bg-tertiary rounded-lg py-3 px-4 text-white placeholder-secondary outline-none border transition-all duration-200 ${getBorderClass()}`}
          />
          {touched && value && !error && (
            <div className="absolute right-3 top-3 text-green-500">
              <FaCheckCircle />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactFormField;