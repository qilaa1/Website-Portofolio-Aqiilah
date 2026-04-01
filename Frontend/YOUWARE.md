# Portofolio - Aqiilah

Website portofolio personal dengan desain modern dan fitur lengkap.

## Fitur Utama

- **Hero Section**: Efek typing animation untuk menampilkan role, animasi background dengan floating shapes
- **About Section**: Profil dengan avatar, bio, info kontak, dan visualisasi skill dengan progress bar
- **Projects Section**: 
  - Grid project cards dengan hover effects
  - Modal interaktif dengan video player
  - Multiple video demos per project
  - Tombol unduh dokumentasi
- **Certificates Section**:
  - Filter kategori otomatis (Semua, Pemrograman, Desain, Pemasaran, Data & AI, Cloud & DevOps)
  - Transisi halus saat berganti kategori menggunakan AnimatePresence
  - Layout animasi dengan Framer Motion
- **Contact Section**: Form kontak dengan validasi, integrasi email via mailto
- **Footer**: Link navigasi cepat, social media links

## Tech Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS 3.4
- Framer Motion untuk animasi

## Cara Menjalankan

```bash
pnpm install
pnpm run dev
```

## Struktur Data

Data portofolio berada di `src/data/portfolio.ts` - dapat diedit untuk menyesuaikan:
- `personalInfo`: Informasi pribadi (nama, email, phone, dll)
- `skills`: Daftar keahlian dengan level
- `projects`: Daftar proyek dengan video dan dokumentasi
- `certificates`: Daftar sertifikat dengan kategori

## Catatan

- Video demo menggunakan sample video dari W3Schools
- Dokumentasi proyek menggunakan placeholder path - ganti dengan file sebenarnya
- Untuk email integration, dapat集成 dengan EmailJS atau service lainnya