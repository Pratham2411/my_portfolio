import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Bot,
  Braces,
  Briefcase,
  Code2,
  Command,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react';
import resumePdf from '../assets/resume/Resume_2302026_Pratham_Raj_EE.pdf';
import './styles/index.css';

const sections = ['home', 'about', 'skills', 'projects', 'cp', 'achievements', 'experience', 'contact'];
const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['CP', 'cp'],
  ['Achievements', 'achievements'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

const socials = [
  ['GitHub', 'https://github.com/Pratham2411', Github],
  ['LinkedIn', 'https://www.linkedin.com/in/prathamraj2411', Linkedin],
  ['Email', 'mailto:prathamraj2411@gmail.com', Mail],
];

const aboutStats = [
  ['1000+', 'Problems solved', Code2],
  ['10+', 'Awards & wins', Trophy],
  ['NIT Patna', 'EE - 2027', GraduationCap],
  ['500+', 'Students taught', Users],
];

const skills = [
  ['Languages', Code2, ['C++', 'Java', 'JavaScript']],
  ['Frontend', Layers3, ['HTML', 'CSS', 'React', 'Tailwind CSS']],
  ['Backend', Database, ['Node.js', 'Express.js']],
  ['Core CS', Braces, ['DSA', 'OOP', 'DBMS']],
  ['Tools', Terminal, ['Git', 'GitHub', 'VS Code']],
  ['Comfort Zone', Cpu, ['Problem Solving', 'CP', 'System Thinking']],
];

const projects = [
  {
    title: 'DSA Visualizer',
    icon: Cpu,
    shot: 'shot-grid',
    text: 'Interactive visualizer for sorting, graph, and tree algorithms with step-by-step animations.',
    features: ['10+ algorithms', 'Step playback', 'Custom inputs'],
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Contest Tracker',
    icon: Trophy,
    shot: 'shot-dashboard',
    text: 'Unified dashboard for upcoming Codeforces, LeetCode, CodeChef, and AtCoder contests.',
    features: ['Calendar export', 'Reminders', 'Filters'],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AI Chat Application',
    icon: Bot,
    shot: 'shot-neural',
    text: 'Real-time AI chat with streaming responses, conversation history, and markdown rendering.',
    features: ['Streaming', 'Conversations', 'Code blocks'],
    tags: ['React', 'FastAPI', 'LLM API'],
  },
  {
    title: 'Placement Prep Platform',
    icon: GraduationCap,
    shot: 'shot-roadmap',
    text: 'Curated DSA sheets, mock tests, and roadmap tracking for engineering students.',
    features: ['Progress tracking', 'Mock contests', 'Curated sheets'],
    tags: ['MERN', 'JWT', 'Tailwind'],
  },
  {
    title: 'Smart Electrical Calculator',
    icon: Zap,
    shot: 'shot-circuit',
    text: 'Engineering calculator for circuit analysis, load calculations, and unit conversions.',
    features: ['Circuit math', 'Unit converter', 'Offline-ready'],
    tags: ['React', 'PWA', 'Tailwind'],
  },
  {
    title: 'Portfolio Website',
    icon: Sparkles,
    shot: 'shot-portfolio',
    text: 'This very portfolio, built with React, Tailwind, and Framer Motion.',
    features: ['Framer Motion', 'Dark + light', 'Command palette'],
    tags: ['React', 'Tailwind', 'Motion'],
  },
];

const cpStats = [
  ['Total Problems', '1,006+', 'across 4 platforms'],
  ['CF Max Rating', '1,138', 'newbie'],
  ['LeetCode', '926', 'rating 1901'],
];

const profiles = [
  ['LeetCode', '@prathamraj2411', 'https://leetcode.com/u/prathamraj2411/'],
  ['Codeforces', '@prathamraj2411', 'https://codeforces.com/profile/prathamraj2411'],
  ['CodeChef', '@prathamraj2411', 'https://www.codechef.com/users/prathamraj2411'],
  ['GeeksforGeeks', '@prathamraj2411', 'https://www.geeksforgeeks.org/profile/prathamraj2411'],
];

const achievements = [
  'Winner of Abhiyantriki 4.0',
  'Second Position in Abhiyanta 3.0',
  'State-level debate competition winner',
  'Rank under 100 in Codeforces Div 2 contest',
  'Hackathon winner',
  'Solved 1000+ DSA problems',
];

const experience = [
  ['Sankalp (NSS)', BookOpen, 'Taught more than 500 students and mentored juniors through education-focused outreach.'],
  ['GDSC', Briefcase, 'Member and active contributor in technical learning, events, and developer community work.'],
  ['Tesla Club', Cpu, 'Participated in electrical and technical activities connecting core EE with practical systems.'],
];

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);
  const [palette, setPalette] = useState(false);
  const [light, setLight] = useState(false);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  const graph = useMemo(() => Array.from({ length: 112 }, (_, i) => (i * 11 + i * i) % 5), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 750);
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

        <Section id="about" label="about" title={<>Builder by craft. <span>Solver by habit.</span></>}>
          <div className="about-layout">
            <Card className="about-copy">
              <p>
                I am an Electrical Engineering undergraduate at the National Institute of Technology, Patna,
                with an obsession for software, systems, and clean problem solving. Over the last two years I
                have shipped full-stack products, climbed competitive programming rating ladders, and taught
                data structures to junior peers.
              </p>
              <p>
                I gravitate toward problems where algorithms meet user experience: tools that feel fast, look
                distinctive, and solve a real pain. When I am not building, I am grinding contests on LeetCode
                and Codeforces or mentoring students through Sankalp NSS.
              </p>
              <div className="chips tight">{['DSA', 'React', 'Node.js', 'C++', 'OOP', 'DBMS'].map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Card>
            <div className="stat-grid">
              {aboutStats.map(([value, label, Icon]) => (
                <Card className="stat-card" key={label}>
                  <Icon />
                  <strong>{value}</strong>
                  <small>{label}</small>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" label="stack" title={<>Tools I <span>reach for.</span></>} subtitle="A focused stack, not a checklist. Picked for speed, clarity, and shipping things that feel good.">
          <div className="skill-grid">
            {skills.map(([title, Icon, list], index) => (
              <motion.article className="skill-card" key={title} variants={reveal(index * 0.04)} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -8 }}>
                <Icon />
                <h3>{title}</h3>
                <div className="chips">{list.map((item) => <span key={item}>{item}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" label="projects" title={<>Things I have <span>built.</span></>}>
          <div className="section-toolbar">
            <a className="pill-link" href="https://github.com/Pratham2411" target="_blank" rel="noreferrer"><Github size={16} /> See all on GitHub</a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </Section>

        <Section id="cp" label="competitive_programming" title={<>Where I <span>compete.</span></>} subtitle="Live-profile inspired cards for ratings, ranks, and solved counts.">
          <div className="cp-stat-grid">
            {cpStats.map(([label, value, hint]) => (
              <Card className="cp-stat" key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
                <p>{hint}</p>
              </Card>
            ))}
          </div>
          <div className="profile-grid">
            {profiles.map(([name, handle, href]) => (
              <a className="profile-card" key={name} href={href} target="_blank" rel="noreferrer">
                <span><Trophy size={17} /> {name}</span>
                <p>{handle}</p>
                <i />
              </a>
            ))}
          </div>
          <Card className="contrib">
            <div className="split-title">
              <h3>GitHub contribution graph</h3>
              <a href="https://github.com/Pratham2411" target="_blank" rel="noreferrer">github.com/Pratham2411</a>
            </div>
            <div className="graph">{graph.map((level, i) => <b key={i} className={`level-${level}`} />)}</div>
          </Card>
        </Section>

        <Section id="achievements" label="achievements" title={<>Proof of <span>momentum.</span></>}>
          <div className="timeline">
            {achievements.map((item, index) => (
              <motion.div className="timeline-item" key={item} variants={reveal(index * 0.04)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Award />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" label="experience" title={<>Leadership with <span>signal.</span></>}>
          <div className="experience-grid">
            {experience.map(([title, Icon, text]) => (
              <Card className="experience-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" label="contact" title={<>Let us build something <span>sharp.</span></>}>
          <div className="contact-layout">
            <Card>
              {socials.map(([label, href, Icon]) => (
                <a className="contact-line" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon />
                  <span>{label}</span>
                  <small>{href.replace('mailto:', '')}</small>
                </a>
              ))}
            </Card>
            <form className="form" action="mailto:prathamraj2411@gmail.com" method="post" encType="text/plain">
              <input name="name" placeholder="Your name" />
              <input name="email" type="email" placeholder="Email address" />
              <textarea name="message" rows="6" placeholder="Message" />
              <button className="primary" type="submit"><Send size={18} /> Send Message</button>
            </form>
          </div>
        </Section>
      </main>

      <footer>
        <div>
          <strong>pratham.raj</strong>
          <p>Elite student developer, competitive programmer, and modern software engineer.</p>
        </div>
        <button className="icon" onClick={() => go('home')} aria-label="Back to top"><ArrowUp /></button>
      </footer>

      <AnimatePresence>{palette && <Palette onClose={() => setPalette(false)} />}</AnimatePresence>
    </div>
  );
}

function Header({ active, light, menu, onMenu, onPalette, onTheme }) {
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

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="terminal-window">
          <div><i /><i /><i /><span>~/pratham - zsh</span></div>
          <p><b>$ whoami</b><br />pratham_raj - NIT Patna - EE '27</p>
        </div>
        <h1>Hi, I am <span>Pratham Raj.</span></h1>
        <p className="typing">Competitive Programmer | Full Stack Developer | Problem Solver</p>
        <p className="hero-text">
          Electrical Engineering undergrad at NIT Patna, crafting performant full-stack products and
          solving 1000+ DSA problems. Currently building, learning, and competing.
        </p>
        <div className="hero-actions">
          <a className="primary" href={resumePdf} target="_blank" rel="noreferrer"><Download size={18} /> Resume</a>
          <a className="ghost" href="#contact">Get in touch <ArrowRight size={18} /></a>
          <div className="socials">
            {socials.map(([label, href, Icon]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div className="avatar-wrap" initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
        <div className="avatar-art">
          <div className="avatar-face" />
          <div className="visor" />
          <div className="jacket" />
          <div className="keyboard" />
        </div>
        <span>Available for internships</span>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.article className="project-card" variants={reveal(index * 0.045)} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -9 }}>
      <div className={`project-shot ${project.shot}`}><Icon /><i /><i /><i /></div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="chips">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          <a href="https://github.com/Pratham2411" target="_blank" rel="noreferrer"><Github size={16} /> Code</a>
          <a href="#home"><ExternalLink size={16} /> Live</a>
        </div>
      </div>
    </motion.article>
  );
}

function Section({ id, label, title, subtitle, children }) {
  return (
    <section id={id}>
      <motion.div className="section-inner" variants={reveal()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
        <p className="kicker">// {label}</p>
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function IconButton({ icon: Icon, label, className = '', ...props }) {
  return <button className={`icon ${className}`} aria-label={label} {...props}><Icon /></button>;
}

function Loader() {
  return (
    <motion.div className="loader" exit={{ opacity: 0, transition: { duration: 0.35 } }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>PR</motion.div>
      <p>initializing signal</p>
    </motion.div>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="grid-bg" />
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      {Array.from({ length: 48 }, (_, i) => (
        <motion.i
          key={i}
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%` }}
          animate={{ opacity: [0.15, 0.7, 0.15], y: [-8, 12, -8] }}
          transition={{ repeat: Infinity, duration: 5 + (i % 7), delay: i * 0.07 }}
        />
      ))}
    </div>
  );
}

function CursorAura() {
  const [p, setP] = useState({ x: -300, y: -300 });
  useEffect(() => {
    const move = (event) => setP({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <motion.div className="cursor-aura" animate={{ x: p.x - 130, y: p.y - 130 }} transition={{ type: 'spring', stiffness: 85, damping: 25 }} />;
}

function Palette({ onClose }) {
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

function reveal(delay = 0) {
  return {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.62, delay, ease: 'easeOut' } },
  };
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
