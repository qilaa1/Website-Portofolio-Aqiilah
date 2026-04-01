import { Project, Certificate, Skill, SocialLink, CertificateCategory } from '../types/portfolio';
import avatarImg from '../assets/img/qila.jpg';
import c1 from '../assets/img/certificates/c1.jpg';
import c2 from '../assets/img/certificates/c2.jpg';
import c3 from '../assets/img/certificates/c3.jpg';
import c4 from '../assets/img/certificates/c4.jpg';
import c5 from '../assets/img/certificates/c5.jpg';

export const personalInfo = {
  name: 'Aqiilah Cahy',
  title: 'Full Stack Developer & UI Designer',
  tagline: 'Membangun pengalaman digital yang luar biasa',
  bio: `I am passionate about building and improving digital solutions that are efficient, reliable, and user-focused. This portfolio showcases projects that reflect my ability to learn quickly, adapt, and solve problems effectively.`,
  email: 'cahyaaqiilah@gmail.com',
  phone: '083111535157',
  location: 'Jakarta, Indonesia',
  avatar: avatarImg,
};

export const skills: Skill[] = [
  { name: 'React / Next.js', icon: '⚛️', level: 95 },
  { name: 'TypeScript', icon: '📘', level: 90 },
  { name: 'Node.js', icon: '🟢', level: 88 },
  { name: 'Python', icon: '🐍', level: 85 },
  { name: 'UI/UX Design', icon: '🎨', level: 92 },
  { name: 'Cloud Architecture', icon: '☁️', level: 80 },
  { name: 'Database Design', icon: '🗄️', level: 87 },
  { name: 'DevOps', icon: '🔧', level: 75 },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce lengkap dengan fitur pembayaran, manajemen inventaris, dan analitik real-time. Dibangun menggunakan Next.js dan integrasi Stripe.',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4'
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    documentationUrl: '/docs/ecommerce-documentation.pdf',
    features: [
      'Dashboard admin real-time',
      'Sistem pembayaran多元',
      'Manajemen produk & inventaris',
      'Analitik penjualan',
      'Pencarian produk berbasis AI'
    ]
  },
  {
    id: '2',
    title: 'Healthcare Mobile App',
    description: 'Aplikasi mobile untuk konsultasi dokter, penjadwalan appointment, dan rekam medis elektronik. Mendukung platform iOS dan Android.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    documentationUrl: '/docs/healthcare-app-docs.pdf',
    features: [
      'Video consultation',
      'Appointment scheduling',
      'Electronic health records',
      'Medicine reminder',
      'Doctor rating system'
    ]
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'Tool berbasis AI untuk generate konten marketing, blog posts, dan social media captions. Menggunakan model GPT untuk hasil yang natural.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4'
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'MongoDB'],
    documentationUrl: '/docs/ai-content-docs.pdf',
    features: [
      'Multi-language support',
      'Tone customization',
      'SEO optimization',
      'Content scheduling',
      'Analytics dashboard'
    ]
  },
  {
    id: '4',
    title: 'Real Estate Platform',
    description: 'Platform marketplace properti dengan fitur virtual tour 360°, mortgage calculator, dan agent dashboard.',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    technologies: ['Vue.js', 'Three.js', 'Express', 'MySQL', 'AWS'],
    documentationUrl: '/docs/realestate-docs.pdf',
    features: [
      'Virtual tour 360°',
      'Mortgage calculator',
      'Agent management',
      'Property comparison',
      'Map integration'
    ]
  },
  {
    id: '5',
    title: 'Finance Dashboard',
    description: 'Dashboard analytics untuk keuangan personal dengan visualisasi data, budgeting tools, dan investment tracking.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4',
      'https://www.w3schools.com/html/movie.mp4'
    ],
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
    documentationUrl: '/docs/finance-dashboard-docs.pdf',
    features: [
      'Expense tracking',
      'Investment portfolio',
      'Budget planning',
      'Financial reports',
      'Multi-currency support'
    ]
  },
  {
    id: '6',
    title: 'Learning Management System',
    description: 'Sistem manajemen pembelajaran dengan fitur course creation, progress tracking, dan quiz builder untuk educational institutions.',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    videos: [
      'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    technologies: ['Next.js', 'Prisma', 'NextAuth', 'PostgreSQL', 'Video.js'],
    documentationUrl: '/docs/lms-docs.pdf',
    features: [
      'Course builder',
      'Progress tracking',
      'Quiz & assignment',
      'Certificate generation',
      'Discussion forum'
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