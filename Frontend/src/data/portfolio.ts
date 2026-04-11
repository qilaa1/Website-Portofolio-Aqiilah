import {
  Project,
  Certificate,
  Skill,
  SocialLink,
  CertificateCategory,
  Publication,
} from '../types/portfolio';

import avatarImg from '../assets/img/qila.jpg';
import c1 from '../assets/img/certificates/c1.jpg';
import c2 from '../assets/img/certificates/c2.jpg';
import c3 from '../assets/img/certificates/c3.jpg';
import c4 from '../assets/img/certificates/c4.jpg';
import c5 from '../assets/img/certificates/c5.jpg';
import c6 from '../assets/img/certificates/C6.png';

/* ================= PERSONAL ================= */
export const personalInfo = {
  name: 'Aqiilah Cahya Ningrum',
  title: 'Junior IT | Web Development & System Support',
  tagline: 'Turning ideas into reliable and scalable software solutions.',
  bio: `I am passionate about building and improving digital solutions that are efficient, reliable, and user-focused.`,
  email: 'cahyaaqiilah@gmail.com',
  phone: '083111535157',
  location: 'Medan, Indonesia',
  avatar: avatarImg,
};

/* ================= SKILLS ================= */
export const skills: Skill[] = [
  { name: 'React', icon: 'react', level: 85 },
  { name: 'TypeScript', icon: 'ts', level: 60 },
  { name: 'Python', icon: 'python', level: 70 },
  { name: 'UI/UX Design', icon: 'design', level: 85 },
  { name: 'PHP', icon: 'php', level: 80 },
  { name: 'Database', icon: 'db', level: 70 },
];

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
    title: 'Tiktok Bot Automation',
    description: 'Automasi TikTok berbasis AI',
    thumbnail: c6,
    videoEmbeds: ['https://www.youtube.com/embed/FO2tPbB5SUo'],
    technologies: ['Python', 'Selenium', 'Javascript'],
    documentationUrl: '/docs/doc.pdf',
    features: ['Chatbot', 'Auto Reply'],
  },
];

/* ================= PUBLICATION ================= */
export const publications: Publication[] = [
  {
    id: 'publication-1',
    type: 'publication',
    title: 'Journal BERT TikTok',
    description: 'Publish Journal',
    thumbnail: c6,
    publisher: ['Univrab'],
    types: 'Journal',
  },
];

/* ================= TYPE UNION (FIX ERROR) ================= */
export type Item = Project | Publication;

/* ================= GABUNG ================= */
export const allItems: Item[] = [...projects, ...publications];

/* ================= CERTIFICATE ================= */
export const certificateCategories: { id: CertificateCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'Semua', icon: '🏆' },
  { id: 'programming', label: 'Pemrograman', icon: '💻' },
  { id: 'design', label: 'Desain', icon: '🎨' },
  { id: 'marketing', label: 'Pemasaran', icon: '📈' },
  { id: 'data', label: 'Data & AI', icon: '🤖' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: '☁️' },
];

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Pertukaran Mahasiswa Merdeka Batch 3 (PMM)',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    date: '2024',
    category: 'all',
    imageUrl: c1,
  },
  {
    id: 'c2',
    title: 'Magang dan Studi Independen Angkatan 6 (MSIB)',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    date: '2024',
    category: 'programming',
    imageUrl: c2,
  },
  {
    id: 'c3',
    title: 'Magang Merdeka',
    issuer: 'Infinite Learning Indonesia',
    date: '2024',
    category: 'programming',
    imageUrl: c3,
  },
  {
    id: 'c4',
    title: 'Fasilitator Pembelajaran Digital',
    issuer: 'Universitas Malikussaleh',
    date: '2024',
    category: 'all',
    imageUrl: c4,
  },
  {
    id: 'c5',
    title: 'MMS Future Leaders Program',
    issuer: 'Mutiara Mutu Sertifikasi',
    date: '2025',
    category: 'all',
    imageUrl: c5,
  },
];