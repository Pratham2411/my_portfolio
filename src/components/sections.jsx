import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, ExternalLink, Award, Trophy, ArrowUp, Send } from 'lucide-react';
import { go, Card, reveal } from './ui';
import {
  socials,
  aboutStats,
  skills,
  projects,
  cpStats,
  profiles,
  achievements,
  experience
} from '../data/content';
import profilePic from '../../assets/images/profile.jpeg';
import resumePdf from '../../assets/resume/pratham_resume.pdf';

export function Hero() {
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
          solving 1500+ DSA problems. Currently building, learning, and competing.
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
          <img src={profilePic} alt="Pratham Raj" className="profile-pic" />
        </div>
        <span>Available for internships</span>
      </motion.div>
    </section>
  );
}

export function Section({ id, label, title, subtitle, children }) {
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

export function ProjectCard({ project, index }) {
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
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live</a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function AboutSection() {
  return (
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
  );
}

export function SkillsSection() {
  return (
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
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects" label="projects" title={<>Things I have <span>built.</span></>}>
      <div className="section-toolbar">
        <a className="pill-link" href="https://github.com/Pratham2411" target="_blank" rel="noreferrer"><Github size={16} /> See all on GitHub</a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </Section>
  );
}

export function CPSection() {
  // Static GitHub contribution graph simulation since it was hardcoded before
  const graph = Array.from({ length: 112 }, (_, i) => (i * 11 + i * i) % 5);

  return (
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
  );
}

export function AchievementsSection() {
  return (
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
  );
}

export function ExperienceSection() {
  return (
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
  );
}

export function ContactSection() {
  return (
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
        <form className="form" action="https://api.web3forms.com/submit" method="POST">
          {/* Replace with your actual Web3Forms access key */}
          <input type="hidden" name="access_key" value="3738a27d-ce0f-480e-8812-8f1efb629d11" />
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email address" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button className="primary" type="submit"><Send size={18} /> Send Message</button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <strong>pratham.raj</strong>
        <p>Elite student developer, competitive programmer, and modern software engineer.</p>
      </div>
      <button className="icon" onClick={() => go('home')} aria-label="Back to top"><ArrowUp /></button>
    </footer>
  );
}
