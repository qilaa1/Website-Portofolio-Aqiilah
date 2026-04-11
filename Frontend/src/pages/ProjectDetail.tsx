import { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { allItems, Item } from '../data/portfolio';
import React from 'react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const { isDark } = useThemeStore();
  const item = allItems.find((p: Item) => p.id === projectId);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f0f1a]">
        <p className="text-[#64748b] dark:text-gray-400">Proyek tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f1a] pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748b] dark:text-gray-400 hover:text-[#0066cc] mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Proyek
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] dark:text-white mb-4">
            {item.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {'technologies' in item &&
              item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm bg-blue-50 dark:bg-[#0066cc]/20 text-[#0066cc] dark:text-[#0088ff] px-4 py-1.5 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
            {'publisher' in item && (
              <span className="text-sm bg-blue-50 dark:bg-[#0066cc]/20 text-[#0066cc] dark:text-[#0088ff] px-4 py-1.5 rounded-full font-medium">
                {item.types}
              </span>
            )}
          </div>
        </motion.div>

      {/* Main Image/Video */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mb-12"
>
  <div
    className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    onClick={() => setPreviewImage(item.thumbnail)}
  >
    <img
      src={item.thumbnail}
      alt={item.title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
</motion.div>
{/* IMAGE PREVIEW MODAL */}
{previewImage && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    onClick={() => setPreviewImage(null)}
  >
    <img
      src={previewImage}
      alt="Preview"
      className="max-w-full max-h-full object-contain p-4"
    />

    {/* Close Button */}
    <button
      onClick={() => setPreviewImage(null)}
      className="absolute top-6 right-6 text-white text-3xl font-bold"
    >
      ✕
    </button>
  </div>
)}
{/* Video Section */}
{'videoEmbeds' in item && item.videoEmbeds?.length ? (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">Video Demonstrasi</h2>

    {/* MP4 Videos */}
    {item.videoUrls?.map((url, index) => (
      <div key={index} className="relative aspect-video bg-gray-900 dark:bg-black rounded-2xl overflow-hidden mb-4">
        <video controls className="w-full h-full object-contain" src={url}>
          Browser tidak mendukung video.
        </video>
        
      </div>
      
    ))}

    {/* YouTube Embeds */}
    {item.videoEmbeds?.map((embed, index) => (
      <div key={index} className="relative aspect-video bg-gray-900 dark:bg-black rounded-2xl overflow-hidden mb-4">
        <iframe
          className="w-full h-full"
          src={embed}
          title={`Video Embed ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          
        >
          
        </iframe>
      </div>
      
    ))}
  </motion.div>
):null}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-4">Deskripsi Proyek</h2>
          <p className="text-[#64748b] dark:text-gray-400 text-lg leading-relaxed">
            {item.description}
          </p>
        </motion.div>

        {/* Features */}
        {'features' in item && (
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#1a1a2e] rounded-xl border border-gray-100 dark:border-gray-800"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-[#0066cc]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0066cc] dark:text-[#0088ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1a202c] dark:text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}
        {/* Download Documentation */}
        {'documentationUrl' in item && item.documentationUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">Dokumentasi</h2>
            <motion.a
              href={item.documentationUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066cc] text-white font-semibold rounded-xl hover:bg-[#0052a3] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh Dokumentasi Proyek
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
}