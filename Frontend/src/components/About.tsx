import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { personalInfo, skills } from '../data/portfolio';
import React from 'react';

// ICONS
import { 
  FaReact, FaNodeJs, FaPython, FaPhp, FaDatabase, FaTools, FaUsers, FaClock, FaFileWord 
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

export default function About() {
  const { isDark } = useThemeStore();

  // 🔥 ICON MAPPING
  const iconMap: Record<string, JSX.Element> = {
    // TECH
    react: <FaReact className="text-cyan-400 text-2xl" />,
    ts: <SiTypescript className="text-blue-500 text-2xl" />,
    node: <FaNodeJs className="text-green-500 text-2xl" />,
    python: <FaPython className="text-yellow-400 text-2xl" />,
    php: <FaPhp className="text-[#777BB4] text-2xl" />,
    db: <FaDatabase className="text-gray-400 text-2xl" />,
  
    // TOOLS
    design: <MdDesignServices className="text-pink-400 text-2xl" />,
    devops: <FaTools className="text-orange-400 text-2xl" />,
  
    // ✅ MICROSOFT (pakai alternatif)
    word: <FaFileWord className="text-blue-600 text-2xl" />,
    excel: <span className="text-2xl">📊</span>,
    ppt: <span className="text-2xl">📊</span>,
  
    // SOFT
    brain: <span className="text-2xl">🧠</span>,
    thinking: <span className="text-2xl">💭</span>,
    chat: <BsChatDots className="text-blue-400 text-2xl" />,
    team: <FaUsers className="text-purple-400 text-2xl" />,
    time: <FaClock className="text-yellow-500 text-2xl" />,
  };
  
  // ✅ FUNCTION HARUS DI LUAR RETURN
  const renderSkillGrid = (data: any[], startIndex = 0) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {data.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (startIndex + index) * 0.05 }}
          className="bg-white dark:bg-[#1a1a2e] p-5 rounded-xl shadow border border-gray-100 dark:border-gray-800"
        >
          {/* ICON + NAME */}
          <div className="flex items-center gap-3 mb-3">
            <span>{iconMap[skill.icon] || '✨'}</span>
            <span className="font-medium text-[#1a202c] dark:text-white">
              {skill.name}
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-[#0066cc] to-[#0088ff] rounded"
            />
          </div>

          <span className="text-xs mt-2 block text-[#64748b] dark:text-gray-400">
            {skill.level}%
          </span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-[#0f0f1a]"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066cc] font-medium text-lg">
            Tentang Saya
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#1a202c] dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* PROFILE + BIO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#1a1a2e]">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* BIO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow border">
              <h3 className="text-2xl font-bold mb-4 text-[#1a202c] dark:text-white">
                {personalInfo.title}
              </h3>
              <p className="text-[#64748b] dark:text-gray-400">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

        </div>

        {/* ================= SKILLS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-[#1a202c] dark:text-white">
            Keahlian
          </h3>

          {/* TECHNICAL */}
          <h4 className="text-lg font-semibold mb-4 text-[#0066cc]">
            💻 Technical Skills
          </h4>
          {renderSkillGrid(skills.technical)}

          {/* TOOLS */}
          <h4 className="text-lg font-semibold mb-4 text-[#0066cc]">
            🛠 Tools
          </h4>
          {renderSkillGrid(skills.tools, skills.technical.length)}

          {/* SOFT SKILLS */}
          <h4 className="text-lg font-semibold mb-4 text-[#0066cc]">
            🧠 Soft Skills
          </h4>
          {renderSkillGrid(
            skills.soft,
            skills.technical.length + skills.tools.length
          )}
        </motion.div>

      </div>
    </section>
  );
}