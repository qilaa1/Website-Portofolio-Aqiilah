import { Project, Certificate, Skill, SocialLink, CertificateCategory } from '../types/portfolio';

import avatarImg from '../assets/img/qila.jpg';
import c1 from '../assets/img/certificates/c1.jpg';
import c2 from '../assets/img/certificates/c2.jpg';
import c3 from '../assets/img/certificates/c3.jpg';
import c4 from '../assets/img/certificates/c4.jpg';
import c5 from '../assets/img/certificates/c5.jpg';
import c6 from '../assets/img/certificates/C6.png';

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

export const skills: Skill[] = [
  { name: 'React', icon: 'react', level: 85 },
  { name: 'TypeScript', icon: 'ts', level: 70 },
  { name: 'Python', icon: 'python', level: 85 },
  { name: 'UI/UX Design', icon: 'design', level: 85 },
  { name: 'PHP', icon: 'php', level: 80 },
  { name: 'Database', icon: 'db', level: 87 },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/qilaa1', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aqiilahningrum/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/aqilachyn', icon: 'instagram' },
];export const projects: Project[] = [
  {
    id: '1',
    title: 'Tiktok Bot Automation',
    description:
      'Automasi TikTok untuk UMKM: memantau komentar, membalas secara otomatis, dan menganalisis sentimen dengan AI. Dibangun menggunakan Next.js, TypeScript, dan model BERT.',
    thumbnail: c6,
    videoEmbeds: [
      'https://www.youtube.com/embed/FO2tPbB5SUo'
    ],
    technologies: ['Python', 'Selenium', 'Javascript', 'Scrapping', 'Chromedriver'],
    documentationUrl: '/docs/ecommerce-documentation.pdf',
    features: [
      'Chatbot Otomatis',
      'Manajemen Komentar',
      'Balas Komentar Otomatis',
      'Scrapping Data',
    ]
  }
];

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
        issuer: 'Infinite Learing Indonesia',
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