import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import React from 'react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'projects', label: 'Proyek' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact', label: 'Kontak' },
];

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleDark } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#1a1a2e]/95 backdrop-blur-md shadow-md dark:shadow-none py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold text-[#1a202c] dark:text-white"
        >
          <span className="text-[#0066cc]">Q</span>ila
        </motion.button>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ y: -2 }}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === link.id
                    ? 'text-[#0066cc]'
                    : 'text-[#64748b] dark:text-gray-400 hover:text-[#1a202c] dark:hover:text-white'
                }`}
              >
                {link.label}
                {currentSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute mt-1 h-0.5 bg-[#0066cc]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2a2a4a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3a3a5a] transition-colors"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#64748b]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1a202c] dark:text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        className="md:hidden bg-white dark:bg-[#1a1a2e] overflow-hidden shadow-lg dark:shadow-none"
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left font-medium ${
                currentSection === link.id
                  ? 'text-[#0066cc]'
                  : 'text-[#64748b] dark:text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}