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
  const [previewIndex, setPreviewIndex] = useState(0);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f0f1a]">
        <p className="text-[#64748b] dark:text-gray-400">
          Proyek tidak ditemukan
        </p>
      </div>
    );
  }

  // Gunakan images jika tersedia.
  // Kalau tidak ada, gunakan thumbnail sebagai fallback.
  const projectImages =
    'images' in item && item.images?.length
      ? item.images
      : [item.thumbnail];

  const openPreview = (index: number) => {
    setPreviewIndex(index);
    setPreviewImage(projectImages[index]);
  };

  const nextImage = () => {
    const nextIndex = (previewIndex + 1) % projectImages.length;
    setPreviewIndex(nextIndex);
    setPreviewImage(projectImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (previewIndex - 1 + projectImages.length) % projectImages.length;

    setPreviewIndex(prevIndex);
    setPreviewImage(projectImages[prevIndex]);
  };

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
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
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

        {/* ================= MAIN IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Main Thumbnail */}
          <div
            className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openPreview(0)}
          >
            <img
              src={projectImages[0]}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* View Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors">
              <span className="opacity-0 hover:opacity-100 bg-white/90 text-[#0066cc] px-5 py-2 rounded-full text-sm font-medium transition-opacity">
                Lihat Foto
              </span>
            </div>
          </div>

          {/* ================= IMAGE GALLERY ================= */}
          {projectImages.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openPreview(index)}
                  className={`relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 ${
                    index === 0
                      ? 'ring-2 ring-[#0066cc]'
                      : 'hover:ring-2 hover:ring-[#0066cc]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />

                  {/* Number */}
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* ================= IMAGE PREVIEW MODAL ================= */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setPreviewImage(null)}
          >
            {/* Previous */}
            {projectImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 md:left-8 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                ‹
              </button>
            )}

            {/* Image */}
            <img
              src={previewImage}
              alt={`${item.title} preview`}
              className="max-w-[90%] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {projectImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 md:right-8 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                ›
              </button>
            )}

            {/* Close */}
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-5 right-6 text-white text-3xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

            {/* Counter */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {previewIndex + 1} / {projectImages.length}
              </div>
            )}
          </div>
        )}

        {/* ================= VIDEO SECTION ================= */}
        {'videoEmbeds' in item && item.videoEmbeds?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">
              Video Demonstrasi
            </h2>

            {/* MP4 Videos */}
            {item.videoUrls?.map((url, index) => (
              <div
                key={index}
                className="relative aspect-video bg-gray-900 dark:bg-black rounded-2xl overflow-hidden mb-4"
              >
                <video
                  controls
                  className="w-full h-full object-contain"
                  src={url}
                >
                  Browser tidak mendukung video.
                </video>
              </div>
            ))}

            {/* YouTube Embeds */}
            {item.videoEmbeds?.map((embed, index) => (
              <div
                key={index}
                className="relative aspect-video bg-gray-900 dark:bg-black rounded-2xl overflow-hidden mb-4"
              >
                <iframe
                  className="w-full h-full"
                  src={embed}
                  title={`Video Embed ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </motion.div>
        ) : null}

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-4">
            Deskripsi Proyek
          </h2>

          <p className="text-[#64748b] dark:text-gray-400 text-lg leading-relaxed">
            {item.description}
          </p>
        </motion.div>

        {/* ================= FEATURES ================= */}
        {'features' in item && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">
              Fitur Utama
            </h2>

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
                    <svg
                      className="w-4 h-4 text-[#0066cc] dark:text-[#0088ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-[#1a202c] dark:text-white">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= DOCUMENTATION ================= */}
        {'documentationUrl' in item && item.documentationUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#1a202c] dark:text-white mb-6">
              Dokumentasi
            </h2>

            <motion.a
              href={item.documentationUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066cc] text-white font-semibold rounded-xl hover:bg-[#0052a3] transition-colors shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
              Unduh Dokumentasi Proyek
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
}