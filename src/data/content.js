import {
  BookOpen,
  Bot,
  Braces,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Instagram,
  Network,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  LayoutGrid
} from 'lucide-react';

import marketImg from '../assets/projects/market.png';
import vectorDbImg from '../assets/projects/vectordb.png';
import sheetImg from '../assets/projects/sheet.png';
import miniImg from '../assets/projects/mini.png';
import portfolioImg from '../assets/projects/portfolio.png';
import netsentryImg from '../assets/projects/netsentry.png';

export const sections = ['home', 'about', 'skills', 'projects', 'experience', 'cp', 'achievements', 'contact'];
export const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['CP', 'cp'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
];

export const heroRoles = [
  'Competitive Programmer',
  'Full Stack Developer',
  'C++ Systems Builder',
  'Problem Solver',
];

export const socials = [
  ['GitHub', 'https://github.com/Pratham2411', Github],
  ['LinkedIn', 'https://www.linkedin.com/in/prathamraj2411', Linkedin],
  ['Email', 'mailto:prathamraj2411@gmail.com', Mail],
  ['Instagram', 'https://www.instagram.com/pratham_raj_2411', Instagram],
];

export const education = {
  school: 'National Institute of Technology Patna',
  degree: 'B.Tech in Electrical Engineering',
  period: 'Aug 2023 – May 2027',
  location: 'Patna, India',
};

export const aboutStats = [
  ['1500+', 'Problems Solved', Code2],
  ['2000+', 'LeetCode Rating', Trophy],
  ['NIT Patna', 'Electrical Engineering \'27', GraduationCap],
  ['500+', 'Students Mentored', Users],
];

export const skills = [
  ['Languages', Code2, ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript']],
  ['Frontend', Layers3, ['React.js', 'Redux', 'Zustand', 'Tailwind CSS', 'Next.js', 'PWA']],
  ['Backend & APIs', Database, ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth 2.0', 'Sockets']],
  ['Core CS', Braces, ['DSA', 'OOP', 'OS', 'Networks', 'System Design', 'Multi-threading']],
  ['Databases & Cloud', Terminal, ['MongoDB', 'MySQL', 'Redis', 'Cloudinary', 'Vercel', 'Docker']],
  ['Strengths', Cpu, ['Competitive Programming', 'Problem Solving', 'Code Review', 'CI/CD']],
];

export const projects = [
  {
    title: 'NIT Patna Marketplace',
    icon: Database,
    image: marketImg,
    text: 'Full-stack campus marketplace on the MERN stack with JWT auth, OTP-verified @nitp.ac.in signup, and role-based access for 1,000+ students.',
    features: ['Resend API & OTP verification', 'Cloudinary CDN image pipeline', 'PWA chat with read receipts'],
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Pratham2411/nit_patna_market',
    live: 'https://nit-patna-market.vercel.app'
  },
  {
    title: 'VectorForge — C++ Vector DB & RAG',
    icon: Bot,
    image: vectorDbImg,
    text: 'Multi-threaded vector database with HNSW, KD-Tree, and brute-force K-NN search. Local RAG pipeline via Ollama with a 15-route REST API.',
    features: ['HNSW graph (M=16, efsearch=50)', 'Ollama embeddings + Llama 3.2', 'PCA scatter-plot visualization'],
    tags: ['C++17', 'HNSW', 'RAG'],
    github: 'https://github.com/Pratham2411/VectorForge',
    live: null
  },
  {
    title: 'NetSentry — Deep Packet Inspection',
    icon: Network,
    image: netsentryImg,
    text: 'Multi-threaded DPI engine parsing PCAP captures, inspecting TCP/UDP payloads at Layer 4–7, and extracting TLS SNI to classify encrypted traffic.',
    features: ['Producer-consumer pipeline', 'Consistent-hash flow affinity', '100% blocking accuracy on test PCAPs'],
    tags: ['C++17', 'libpcap', 'Multi-threading'],
    github: 'https://github.com/Pratham2411/NetSentry',
    live: null
  },
  {
    title: 'Interactive Question Sheet',
    icon: BookOpen,
    image: sheetImg,
    text: 'SPA for managing programming questions by topic and subtopic — built during my InternPe internship with drag-and-drop and progress tracking.',
    features: ['@dnd-kit reordering', 'Zustand state management', 'Firebase auth + localStorage sync'],
    tags: ['React 19', 'Zustand', 'Tailwind'],
    github: 'https://github.com/Pratham2411/interactive-question-sheet',
    live: 'https://interactive-question-sheet-weld.vercel.app/'
  },
  {
    title: 'Frontend Mini Projects',
    icon: LayoutGrid,
    image: miniImg,
    text: 'Collection of interactive web apps and UI components for practicing DOM manipulation, responsive layouts, and frontend patterns.',
    features: ['Interactive UIs', 'DOM manipulation', 'Responsive layouts'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Pratham2411/Web-Dev-Learning/tree/main/Mini-Projects/Projects',
    live: 'https://pratham2411.github.io/Web-Dev-Learning/Mini-Projects/Projects/'
  },
  {
    title: 'Developer Portfolio',
    icon: Sparkles,
    image: portfolioImg,
    text: 'This site — React + Vite with Framer Motion animations, a command palette, light/dark theme, and a working contact form.',
    features: ['Scroll progress bar', 'Cmd+K navigation', 'Web3Forms contact'],
    tags: ['React', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/Pratham2411/my_portfolio',
    live: null
  },
];

export const cpStats = [
  ['Problems Solved', '1500+', 'across LeetCode, Codeforces, CodeChef & GfG'],
  ['LeetCode', '2000+', 'Knight badge rating'],
  ['Codeforces', '1250+', 'Pupil'],
];

export const profiles = [
  ['LeetCode', '@prathamraj2411', 'https://leetcode.com/prathamraj2411'],
  ['Codeforces', '@prathamraj2411', 'https://codeforces.com/profile/prathamraj2411'],
  ['CodeChef', '@prathamraj2411', 'https://www.codechef.com/users/prathamraj2411'],
  ['GeeksforGeeks', '@prathamraj2411', 'https://www.geeksforgeeks.org/profile/prathamraj2411'],
];

export const achievements = [
  'Ranked Top 75 in Amazon HackOn 6.0 out of 70,000+ participants',
  'Shortlisted for Digital Specialist Engineer (DSE) at Infosys',
  '1st place at Hackslash College Hackathon',
  'Top 10 competitive programmers institution-wide at NIT Patna on Codolio',
  'Knight badge (2000+ rating) on LeetCode, 3-Star on CodeChef, Pupil on Codeforces',
  'National Science Olympiad (NSO) — Gold Medalist',
  'District Topper (Class 12th)',
];

export const experience = [
  {
    title: 'Software Engineering Contributor',
    org: 'Snorkel AI (via HireArt)',
    period: 'Jul 2026 – Present',
    location: 'Remote',
    icon: Code2,
    text: 'Reviewed GitHub pull requests, authored outcome-based test suites, and collaborated on an adjudication workflow for AI coding-agent training datasets.',
  },
  {
    title: 'Campus Ambassador',
    org: 'HackerRank & GeeksforGeeks',
    period: '2024 – Present',
    location: 'NIT Patna',
    icon: BookOpen,
    text: 'Organized DSA workshops and competitive programming sessions, mentoring peers in algorithmic thinking and contest preparation.',
  },
  {
    title: 'Educational Volunteer',
    org: 'NSS (Sankalp)',
    period: '2024 – Present',
    location: 'NIT Patna',
    icon: Users,
    text: 'Instructed 500+ students through community-driven educational outreach programs.',
  },
  {
    title: 'Technical Contributor',
    org: 'Google Developer Student Clubs',
    period: '2024 – Present',
    location: 'NIT Patna',
    icon: Users,
    text: 'Collaborated on open-source software solutions and developer community initiatives at GDSC NIT Patna.',
  },
];
