import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { personalInfo } from '../data/portfolio';
import React from 'react';
const roles = [
  'Junior IT',
  'UI/UX Designer',
  'Problem Solver',
  'Tech Enthusiast'
];

export default function Hero() {
  const { isDark } = useThemeStore();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  const scrollTo = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-[#0f0f1a] dark:via-[#1a1a2e] dark:to-[#0f0f1a] transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: isDark 
            ? `radial-gradient(circle at 25% 25%, #0066cc10 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0066cc08 0%, transparent 50%)`
            : `radial-gradient(circle at 25% 25%, #0066cc08 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0066cc05 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[#0066cc] font-medium text-lg">
           Welcome to My Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-[#1a202c] dark:text-white"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-[#64748b] dark:text-gray-400 mb-6"
        >
          <span className="typing-cursor text-[#1a202c] dark:text-white">{displayText}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#64748b] dark:text-gray-400 max-w-2xl mx-auto mb-10 whitespace-pre-line">

          {personalInfo.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#64748b] dark:text-gray-400 max-w-2xl mx-auto mb-10 whitespace-pre-line">

          {personalInfo.tagline2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 bg-[#0066cc] text-white font-semibold rounded-lg hover:bg-[#0052a3] transition-colors shadow-lg"
          >
            Lihat Proyek
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 bg-white dark:bg-[#2a2a4a] text-[#1a202c] dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#0066cc] hover:text-[#0066cc] dark:hover:border-[#0066cc] transition-colors"
          >
            Hubungi Saya
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-[#0066cc] rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}