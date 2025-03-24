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
}