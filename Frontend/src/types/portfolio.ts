export interface Project {
  id: string;
  type: 'project'; 
  types: string; 
  title: string;
  description: string;
  thumbnail: string;
  videoUrls?: string[];     // MP4 langsung
  videoEmbeds?: string[];   // YouTube iframe
  technologies: string[];
  documentationUrl: string;
  features: string[];
}
export interface Publication {
  id: string;
  type: 'publication';
  title: string;
  description: string;
  thumbnail: string; 
  publisher: string[];
  documentationUrl: string;
  types: string;
}
export type Item = Project | Publication;

  export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: CertificateCategory;
    imageUrl: string;
    credentialUrl?: string;
  }
  
  export type CertificateCategory = 
    | 'all'
    | 'experience'
    | 'design'
    | 'training';
  
  export interface Skill {
    name: string;
    icon: string;
    level: number;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }