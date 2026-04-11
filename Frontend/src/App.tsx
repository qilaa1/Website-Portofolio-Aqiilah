import { useState, useEffect } from 'react';
import { useThemeStore } from './store/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import React from 'react';

function App() {
  const { isDark } = useThemeStore();
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // DARK MODE
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 🔥 FIX NAVIGATION (MOBILE + DESKTOP)
  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    setSelectedProjectId(null);

    const element = document.getElementById(section);

    if (element) {
      const yOffset = -80; // tinggi navbar (adjust kalau perlu)
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      // ✅ pakai requestAnimationFrame biar smooth & no warning
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    }
  };

  // CLICK PROJECT
  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // BACK KE LIST PROJECT
  const handleBackToProjects = () => {
    setSelectedProjectId(null);

    const element = document.getElementById('projects');

    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    }
  };

  // 🔥 SCROLL SPY (DETECT SECTION)
  useEffect(() => {
    const handleScroll = () => {
      if (selectedProjectId) return;

      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0f0f1a] transition-colors duration-300">

        <Navbar currentSection={currentSection} onNavigate={handleNavigate} />

        {selectedProjectId ? (
          <ProjectDetail
            projectId={selectedProjectId}
            onBack={handleBackToProjects}
          />
        ) : (
          <>
            <Hero />
            <About />
            <Projects onProjectClick={handleProjectClick} />
            <Certificates />
            <Contact />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;