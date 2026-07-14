export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  location: string;
  email: string;
  phone: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools' | 'other'|'database'| 'AI';
}