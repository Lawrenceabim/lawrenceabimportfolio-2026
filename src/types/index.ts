export interface ResearchItem {
  title: string;
  venue: string;
  year: string;
  status: "Accepted" | "Published" | "In Progress";
  link: string | null;
  overview: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
  details: string;
}

export interface Project {
  title: string;
  description: string;
  category?: string;
  tech: string[];
  link: string;
  featured?: boolean;
  status?: string;
  architecture?: string[];
  images?: string[];
  imageCaptions?: string[];
  imageLayout?: "natural" | "cover";
}

export interface StatItem {
  value: string;
  label: string;
  color: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  logo?: string; 
  link?: string;  
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: any; 
}