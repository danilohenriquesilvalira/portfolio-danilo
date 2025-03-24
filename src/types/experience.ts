export interface Experience {
  title: string;
  company: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  location: string;
  technologies: string[];
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