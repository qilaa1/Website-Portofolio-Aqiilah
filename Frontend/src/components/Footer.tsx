import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { personalInfo, socialLinks } from '../data/portfolio';
import React from 'react';

export default function Footer() {
  const { isDark } = useThemeStore();
  const currentYear = new Date().getFullYear();

  const scrollTo = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ pakai ini (ID harus sama dengan section di App)
  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'projects', label: 'Proyek' },
    { id: 'certificates', label: 'Sertifikat' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('home')}
              className="text-2xl font-bold text-[#1a202c] dark:text-white mb-4"
            >
              <span className="text-[#0066cc]">Q</span>ila
            </motion.button>
            <p className="text-[#64748b] dark:text-gray-400 text-sm">
              Turning ideas into reliable and scalable software solutions.
            </p>
          </div>

          {/* ✅ Quick Links (FIXED) */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1a202c] dark:text-white">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-[#64748b] dark:text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1a202c] dark:text-white">
              Kontak
            </h4>
            <ul className="space-y-2 text-sm text-[#64748b] dark:text-gray-400">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] dark:text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. Semua hak dilindungi.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-blue-50 dark:hover:bg-[#0066cc]/20 transition-colors"
              >
                {/* ICONS */}
                {link.icon === 'github' && (
                  <span className="text-sm">🐙</span>
                )}
                {link.icon === 'linkedin' && (
                  <span className="text-sm">💼</span>
                )}
                {link.icon === 'instagram' && (
                  <span className="text-sm">📸</span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}