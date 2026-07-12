import {
  Project,
  Certificate,
  SkillGroup,
  SocialLink,
  CertificateCategory,
  Publication,
} from '../types/portfolio';

import avatarImg from '../assets/img/qila-1.png';
import c1 from '../assets/img/certificates/c1.jpg';
import c2 from '../assets/img/certificates/c2.jpg';
import c3 from '../assets/img/certificates/c3.jpg';
import c4 from '../assets/img/certificates/c4.jpg';
import c5 from '../assets/img/certificates/c5.jpg';
import p2 from '../assets/project/p4.jpg';
import c6 from '../assets/project/p3.jpg';
import c7 from '../assets/project/p2.jpg';
import p1 from '../assets/project/p1.pdf';


/* ================= PERSONAL ================= */
export const personalInfo = {
  name: 'Aqiilah Cahya Ningrum',

  title: 'Web Developer | IT Support | System Support',

  tagline: 'Building reliable digital solutions through modern web development and technical support.',

  tagline2: '💼 Open to Web Development, IT Support, and System Support opportunities.',

  bio: `Fresh graduate in Informatics with experience in web application development, system support, and database management. Passionate about solving technical problems, building reliable digital solutions, and continuously learning new technologies.`,

  email: 'cahyaaqiilah@gmail.com',
  phone: '083111535157',
  location: 'Medan, Indonesia',
  avatar: avatarImg,
};
/* ================= SKILLS ================= */
export const skills: SkillGroup = {
  technical: [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Python', icon: 'python' },
    { name: 'PHP', icon: 'php' },
    { name: 'Database', icon: 'db'},
  ],

  tools: [
    { name: 'Microsoft Office', icon: 'office' },
    { name: 'Figma', icon: 'design' },
    { name: 'Git & GitHub', icon: 'devops' },
  ],

  soft: [
    { name: 'Problem Solving', icon: 'brain' },
    { name: 'Critical Thinking', icon: 'thinking' },
    { name: 'Communication', icon: 'chat' },
    { name: 'Teamwork', icon: 'team' },
    { name: 'Time Management', icon: 'time' },
  ]
};
/* ================= SOCIAL ================= */
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/qilaa1', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aqiilahningrum/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/aqilachyn', icon: 'instagram' },
];

/* ================= PROJECT ================= */
export const projects: Project[] = [
  {
    id: 'project-1',
    type: 'project',
    types: 'AI Automation',
    title: 'TikTok Bot Automation',
    description:
      'An AI-powered TikTok automation bot that monitors comments and generates automated replies using BERT-based sentiment analysis.',
    thumbnail: c6,
    videoEmbeds: ['https://www.youtube.com/embed/FO2tPbB5SUo'],
    technologies: ['Python', 'Selenium', 'JavaScript', 'BERT'],
    documentationUrl: 'https://github.com/qilaa1/Chatbot-Tiktok-',
    features: [
      'Comment Monitoring',
      'Auto Reply',
      'Sentiment Analysis',
      'Browser Automation',
    ],
  },
  {
    id: 'project-2',
    type: 'project',
    types: 'Web',
    title: 'Vegetation Management System (ROW)',
    description:
      'Developed a custom web application for managing tree pruning activities around electricity distribution lines using the Right of Way (ROW) method. Built as a freelance client project with a focus on responsive UI and operational workflows.',
    thumbnail: p2,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'ROW',
    ],
    documentationUrl: '-',
    features: [
      'Responsive Interface',
      'CRUD Management',
      'Data Visualization',
      'Operational Workflow',
    ],
  },
];

/* ================= PUBLICATION ================= */
export const publications: Publication[] = [
  {
    id: 'publication-1',
    type: 'publication',
    title: 'BERT-Based TikTok Comment Bot',
    description:
      'Published in a SINTA 3 accredited journal. This research presents the development of a TikTok comment bot using the BERT (Bidirectional Encoder Representations from Transformers) method for sentiment classification and automated responses.',
    thumbnail: c7,
    publisher: ['Universitas Riau'],
    documentationUrl: p1,
    types: 'SINTA 3 Journal',
  },
];

/* ================= TYPE UNION (FIX ERROR) ================= */
export type Item = Project | Publication;

/* ================= GABUNG ================= */
export const allItems: Item[] = [...projects, ...publications];

/* ================= CERTIFICATE ================= */
export const certificateCategories: { id: CertificateCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'Semua', icon: '🏆' },
  { id: 'experience', label: 'Program & Experience', icon: '🚀' },
  { id: 'design', label: 'Desain', icon: '🎨' },
  { id: 'training', label: 'Training & Seminar', icon: '🎓' }
];

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Pertukaran Mahasiswa Merdeka Batch 3 (PMM)',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    date: '2024',
    category: 'experience',
    imageUrl: c1,
  },
  {
    id: 'c2',
    title: 'Studi Independen',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    date: '2024',
    category: 'experience',
    imageUrl: c2,
  },
  {
    id: 'c3',
    title: 'Magang Merdeka',
    issuer: 'Infinite Learning Indonesia',
    date: '2024',
    category: 'experience',
    imageUrl: c3,
  },
  {
    id: 'c4',
    title: 'Fasilitator Pembelajaran Digital',
    issuer: 'Universitas Malikussaleh',
    date: '2024',
    category: 'training',
    imageUrl: c4,
  },
  {
    id: 'c5',
    title: 'MMS Future Leaders Program',
    issuer: 'Mutiara Mutu Sertifikasi',
    date: '2025',
    category: 'training',
    imageUrl: c5,
  },
];