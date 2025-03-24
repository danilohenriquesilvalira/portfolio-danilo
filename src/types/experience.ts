// src/types/experience.ts
export interface Experience {
  title: string;
  company: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  location: string;
  technologies: string[];
  categories?: string[]; // Adicionado para filtrar experiências
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  description: string;
  icon: string;
  iconBg: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'automacao' | 'industria40' | 'programacao' | 'design' | 'outro';
  level: 'básico' | 'intermediário' | 'avançado' | 'especialista';
}

// src/types/project.ts
export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: Technology[];
  category: 'automacao' | 'industria40' | 'plc' | 'scada' | 'outro';
  highlights: string[];
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  details: {
    challenge: string;
    solution: string;
    results: string;
    images: string[];
  };
  featured?: boolean; // Adicionado para destacar projetos na página inicial
}

// src/types/theme.ts
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    techBlue: string;
    industryGreen: string;
    automationOrange: string;
    dataPurple: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// src/types/layout.ts
export interface LayoutProps {
  children: React.ReactNode;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavLink {
  title: string;
  id: string;
  path: string;
}

// src/types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

// src/types/animation.ts
export interface AnimationVariants {
  hidden: Record<string, any>;
  visible: Record<string, any>;
  exit?: Record<string, any>;
}

export interface AnimationProps {
  variants?: AnimationVariants;
  initial?: string | Record<string, any>;
  animate?: string | Record<string, any>;
  exit?: string | Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  children: React.ReactNode;
}