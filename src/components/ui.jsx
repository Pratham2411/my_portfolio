import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Command, X, Menu, Sun, Moon } from 'lucide-react';
import { nav } from '../data/content';

export function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Header({ active, light, menu, onMenu, onPalette, onTheme }) {
  return (
    <header className="nav">
      <button className="brand" onClick={() => go('home')}>
        <span>PR</span>
        <b>pratham.<em>raj</em></b>
      </button>
      <nav className="nav-links">
        {nav.map(([label, id]) => (
          <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="key-button" onClick={onPalette}><Command size={15} /> K</button>
        <IconButton label="Theme toggle" icon={light ? Moon : Sun} onClick={onTheme} />
        <IconButton label="Menu" icon={menu ? X : Menu} onClick={onMenu} className="mobile-only" />
      </div>
    </header>
  );
}

export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function IconButton({ icon: Icon, label, className = '', ...props }) {
  return <button className={`icon ${className}`} aria-label={label} {...props}><Icon /></button>;
}

export function Loader() {
  return (
    <motion.div className="loader" exit={{ opacity: 0, transition: { duration: 0.35 } }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>PR</motion.div>
    </motion.div>
  );
}

export function Background() {
  return (
    <div className="background">
      <div className="grid-bg" />
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
}

export function CursorAura() {
  const [p, setP] = useState({ x: -300, y: -300 });
  useEffect(() => {
    let raf;
    const move = (event) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setP({ x: event.clientX, y: event.clientY });
      });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <motion.div className="cursor-aura" animate={{ x: p.x - 130, y: p.y - 130 }} transition={{ duration: 0 }} />;
}

export function Palette({ onClose }) {
  return (
    <motion.div className="palette-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="palette" initial={{ y: 20, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.97 }} onClick={(event) => event.stopPropagation()}>
        <div><Command /><span>Jump anywhere</span><button onClick={onClose}><X /></button></div>
        <div className="palette-grid">
          {nav.map(([label, id]) => <button key={id} onClick={() => { go(id); onClose(); }}>{label}</button>)}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function reveal(delay = 0) {
  return {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.62, delay, ease: 'easeOut' } },
  };
}

export function CountUp({ value, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\d[\d,]*)(.*)$/);
    if (!match || !inView) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2];
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(target * eased);
      setDisplay(`${current.toLocaleString()}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value, duration, inView]);

  return <span ref={ref}>{display}</span>;
}

export function TypingRoles({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <p className="typing" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}
