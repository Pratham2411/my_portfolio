import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Download, ArrowRight, Github, ExternalLink, Award, Trophy, ArrowUp, Send, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { go, Card, reveal, CountUp, TypingRoles } from './ui';
import {
  socials,
  aboutStats,
  skills,
  projects,
  cpStats,
  profiles,
  achievements,
  experience,
  education,
  heroRoles,
} from '../data/content';
import profilePic from '../../assets/images/profile.jpeg';
import resumePdf from '../../assets/resume/pratham_resume.pdf';

export function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="terminal-window">
          <div><i /><i /><i /><span>~/pratham — zsh</span></div>
          <p><b>$ whoami</b><br />pratham_raj — NIT Patna — EE &apos;27</p>
        </div>
        <h1>Hi, I&apos;m <span>Pratham Raj.</span></h1>
        <TypingRoles roles={heroRoles} />
        <p className="hero-text">
          Electrical Engineering undergrad at NIT Patna. I build full-stack web apps,
          write systems-level C++, and compete on LeetCode and Codeforces.
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
        <motion.div
          className="avatar-art"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <img src={profilePic} alt="Pratham Raj" className="profile-pic" />
        </motion.div>
        <span>Open to internships</span>
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
      <div className="project-shot">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={project.imageFit === 'contain' ? 'project-shot-contain' : ''}
          />
        ) : (
          <div className={`project-shot-bg ${project.shot}`}><Icon /><i /><i /><i /></div>
        )}
      </div>
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
    <Section id="about" label="about" title={<>Who I <span>am.</span></>}>
      <div className="about-layout">
        <Card className="about-copy">
          <p>
            I&apos;m a B.Tech Electrical Engineering student at NIT Patna (Aug 2023 – May 2027)
            with a strong pull toward software engineering. Over the past two years I&apos;ve shipped
            full-stack products, built systems-level C++ tools, and taught data structures to junior peers.
          </p>
          <p>
            I like problems where algorithms meet real users — campus marketplaces, vector search engines,
            packet inspection tools. When I&apos;m not building, I&apos;m on LeetCode and Codeforces or
            mentoring through NSS Sankalp.
          </p>
          <div className="education-inline">
            <GraduationCap />
            <div>
              <strong>{education.school}</strong>
              <span>{education.degree} · {education.period}</span>
            </div>
          </div>
          <div className="chips tight">{['DSA', 'React', 'Node.js', 'C++', 'System Design', 'MongoDB'].map((tag) => <span key={tag}>{tag}</span>)}</div>
        </Card>
        <div className="stat-grid">
          {aboutStats.map(([value, label, Icon], index) => (
            <motion.div key={label} variants={reveal(index * 0.06)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="stat-card">
                <Icon />
                <strong><CountUp value={value} /></strong>
                <small>{label}</small>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" label="skills" title={<>Technical <span>skills.</span></>}>
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
    <Section id="projects" label="projects" title={<>Things I&apos;ve <span>built.</span></>}>
      <div className="section-toolbar">
        <a className="pill-link" href="https://github.com/Pratham2411" target="_blank" rel="noreferrer"><Github size={16} /> See all on GitHub</a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" label="experience" title={<>Work & <span>leadership.</span></>}>
      <div className="experience-grid">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title + item.org} variants={reveal(index * 0.06)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="experience-card">
                <Icon />
                <h3>{item.title}</h3>
                <div className="experience-meta">
                  <span><strong>{item.org}</strong></span>
                  <span><Calendar size={13} /> {item.period}</span>
                  <span><MapPin size={13} /> {item.location}</span>
                </div>
                <p>{item.text}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function CPSection() {
  return (
    <Section id="cp" label="competitive_programming" title={<>Competitive <span>programming.</span></>}>
      <div className="cp-stat-grid">
        {cpStats.map(([label, value, hint], index) => (
          <motion.div key={label} variants={reveal(index * 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="cp-stat">
              <small>{label}</small>
              <strong><CountUp value={value} duration={1.8} /></strong>
              <p>{hint}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="profile-grid">
        {profiles.map(([name, handle, href], index) => (
          <motion.a
            className="profile-card"
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            variants={reveal(index * 0.04)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <span><Trophy size={17} /> {name}</span>
            <p>{handle}</p>
            <i />
          </motion.a>
        ))}
      </div>
      <Card className="contrib">
        <div className="split-title">
          <h3>GitHub contributions</h3>
          <a href="https://github.com/Pratham2411" target="_blank" rel="noreferrer">github.com/Pratham2411</a>
        </div>
        <div className="contrib-chart">
          <GitHubCalendar
            username="Pratham2411"
            colorScheme="dark"
            blockSize={16}
            blockMargin={8}
            theme={{
              dark: ['rgba(255, 255, 255, 0.045)', 'rgba(16, 231, 176, 0.2)', 'rgba(16, 231, 176, 0.38)', 'rgba(4, 217, 255, 0.44)', 'rgba(16, 231, 176, 0.72)']
            }}
          />
        </div>
      </Card>
    </Section>
  );
}

export function AchievementsSection() {
  return (
    <Section id="achievements" label="achievements" title={<>Achievements & <span>awards.</span></>}>
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

export function ContactSection() {
  return (
    <Section id="contact" label="contact" title={<>Get in <span>touch.</span></>}>
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
          <input type="hidden" name="access_key" value="3738a27d-ce0f-480e-8812-8f1efb629d11" />
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email address" required />
          <textarea name="message" rows="6" placeholder="Your message" required />
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
        <p>Built with React, Vite & Framer Motion · NIT Patna &apos;27</p>
      </div>
      <button className="icon" onClick={() => go('home')} aria-label="Back to top"><ArrowUp /></button>
    </footer>
  );
}
