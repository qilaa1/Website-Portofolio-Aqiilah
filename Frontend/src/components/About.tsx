import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { personalInfo, skills } from '../data/portfolio';
import React from 'react';
export default function About() {
  const { isDark } = useThemeStore();

  return (
    <section id="about" className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-[#0f0f1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066cc] font-medium text-lg">Tentang Saya</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#1a202c] dark:text-white">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Elegant Rectangle with Shadow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
<div className="relative w-full max-w-sm mx-auto flex justify-center">
  {/* Decorative frame */}
  <div className="absolute w-72 h-72 bg-gradient-to-br from-[#0066cc] via-[#0088ff] to-[#0066cc] rounded-full opacity-40 dark:opacity-55 blur-xl" />
  <div className="absolute w-64 h-64 bg-gradient-to-br from-[#0066cc]/20 to-[#0088ff]/20 rounded-full" />

  {/* Main image container - circular */}
  <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#1a1a2e]">
    <img
      src={personalInfo.avatar}
      alt={personalInfo.name}
      className="w-full h-full object-cover"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

    {/* Name overlay */}
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <h3 className="text-white text-lg font-bold">{personalInfo.name}</h3>
      <p className="text-white/80 text-xs">Portfolio</p>
    </div>
  </div>

            </div>
          </motion.div>

          {/* Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-[#1a202c] dark:text-white">{personalInfo.title}</h3>
              <p className="text-[#64748b] dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-[#1a1a2e] rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#0088ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-[#64748b] dark:text-gray-400">Email</span>
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-[#1a1a2e] rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#0088ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm text-[#64748b] dark:text-gray-400">Telepon</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-[#1a202c] dark:text-white">Keahlian</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-[#1a1a2e] rounded-xl p-5 cursor-default shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-[#1a202c] dark:text-white">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#0066cc] to-[#0088ff] rounded-full"
                  />
                </div>
                <span className="text-xs text-[#64748b] dark:text-gray-500 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}