import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { Certificate, CertificateCategory } from '../types/portfolio';
import { certificates, certificateCategories } from '../data/portfolio';
import React from 'react';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard = React.forwardRef<HTMLDivElement, CertificateCardProps>(
  ({ certificate, index }, ref) => {
    const { isDark } = useThemeStore();

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="bg-white dark:bg-[#1a1a2e] rounded-2xl overflow-hidden group cursor-pointer shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg dark:shadow-none"
      >
        {/* Certificate Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={certificate.imageUrl}
            alt={certificate.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c]/60 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#0066cc] text-[#0066cc] dark:text-white text-xs px-3 py-1 rounded-full font-medium">
            {certificateCategories.find(c => c.id === certificate.category)?.icon}{' '}
            {certificateCategories.find(c => c.id === certificate.category)?.label}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 text-[#1a202c] dark:text-white group-hover:text-[#0066cc] transition-colors line-clamp-2">
            {certificate.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-[#64748b] dark:text-gray-400 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {certificate.issuer}
          </div>

          <div className="flex items-center gap-2 text-sm text-[#64748b] dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {certificate.date}
          </div>
        </div>
      </motion.div>
    );
  }
);

CertificateCard.displayName = "CertificateCard";

export default function Certificates() {
  const { isDark } = useThemeStore();
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all');

  const filteredCertificates = activeCategory === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-[#0f0f1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066cc] font-medium text-lg">Sertifikat</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#1a202c] dark:text-white">Keahlian & Kualifikasi</h2>
          <p className="text-[#64748b] dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Berbagai sertifikasi profesional yang telah saya raih untuk membuktikan kompetensi di bidang terkait.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {certificateCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-[#0066cc] text-white shadow-lg'
                  : 'bg-white dark:bg-[#1a1a2e] text-[#64748b] dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#0066cc] hover:text-[#0066cc] dark:hover:text-[#0066cc]'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-[#64748b] dark:text-gray-400"
          >
            Tidak ada sertifikat dalam kategori ini.
          </motion.div>
        )}
      </div>
    </section>
  );
}