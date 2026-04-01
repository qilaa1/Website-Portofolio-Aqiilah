import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { projects } from '../data/portfolio';
import React from 'react';

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const { isDark } = useThemeStore();

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-white dark:bg-[#0f0f1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066cc] font-medium text-lg">Proyek Saya</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#1a202c] dark:text-white">Karya Terbaru</h2>
          <p className="text-[#64748b] dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan. Klik untuk melihat detail lengkap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onProjectClick(project.id)}
              className="bg-white dark:bg-[#1a1a2e] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl dark:shadow-none transition-all border border-gray-100 dark:border-gray-800"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c]/60 to-transparent" />
                
                {/* View Details Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white/90 dark:bg-[#0066cc] text-[#0066cc] dark:text-white px-6 py-2 rounded-full font-medium text-sm">
                    Lihat Detail
                  </div>
                </motion.div>

                {/* Tech Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-white/90 dark:bg-[#0066cc] text-[#0066cc] dark:text-white px-3 py-1 rounded-full font-medium">
                    {project.technologies[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1a202c] dark:text-white group-hover:text-[#0066cc] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#64748b] dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-[#64748b] dark:text-gray-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-[#0066cc] px-2 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}