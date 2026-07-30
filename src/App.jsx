import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { nav, sections } from './data/content';
import { Header, Loader, Background, CursorAura, Palette, go } from './components/ui';
import { 
  Hero, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  CPSection, 
  AchievementsSection, 
  ExperienceSection, 
  ContactSection, 
  Footer 
} from './components/sections';
import './styles/index.css';

export default function App() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);
  const [palette, setPalette] = useState(false);
  const [light, setLight] = useState(false);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers = sections.map((id) => {
      const node = document.getElementById(id);
      if (!node) return null;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(id), {
        rootMargin: '-42% 0px -52% 0px',
      });
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPalette(true);
      }
      if (event.key === 'Escape') setPalette(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={light ? 'theme-light' : ''}>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Background />
      <CursorAura />

      <Header
        active={active}
        light={light}
        menu={menu}
        onMenu={() => setMenu((value) => !value)}
        onPalette={() => setPalette(true)}
        onTheme={() => setLight((value) => !value)}
      />

      <AnimatePresence>
        {menu && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => { go(id); setMenu(false); }}>{label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CPSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />

      <AnimatePresence>{palette && <Palette onClose={() => setPalette(false)} />}</AnimatePresence>
    </div>
  );
}
