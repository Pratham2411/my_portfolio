import {
  Award,
  BookOpen,
  Bot,
  Braces,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Instagram,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Zap,
  Activity,
  LayoutGrid
} from 'lucide-react';

import marketImg from '../assets/images/projects/market.png';
import vectorDbImg from '../assets/images/projects/vectordb.png';
import sheetImg from '../assets/images/projects/sheet.png';
import miniImg from '../assets/images/projects/mini.png';
import portfolioImg from '../assets/images/projects/portfolio.png';

export const sections = ['home', 'about', 'skills', 'projects', 'cp', 'achievements', 'experience', 'contact'];
export const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['CP', 'cp'],
  ['Achievements', 'achievements'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

export const socials = [
  ['GitHub', 'https://github.com/Pratham2411', Github],
  ['LinkedIn', 'https://www.linkedin.com/in/prathamraj2411', Linkedin],
  ['Email', 'mailto:prathamraj2411@gmail.com', Mail],
  ['Instagram', 'https://www.instagram.com/pratham_raj_2411', Instagram],
];

export const aboutStats = [
  ['1500+', 'DSA Problems Solved', Code2],
  ['Knight', 'LeetCode Badge', Trophy],
  ['NIT Patna', 'Electrical Engineering \'27', GraduationCap],
  ['500+', 'Students taught', Users],
];

export const skills = [
  ['Languages', Code2, ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript']],
  ['Frontend', Layers3, ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Next.js']],
  ['Backend & Systems', Database, ['Node.js', 'Express.js', 'RESTful APIs', 'Socket Programming']],
  ['Core CS', Braces, ['DSA', 'OOP', 'OS', 'Networks', 'System Design', 'Multi-threading']],
  ['Tools & Cloud', Terminal, ['Git', 'Vercel', 'MongoDB', 'MySQL', 'Linux']],
  ['Comfort Zone', Cpu, ['Problem Solving', 'Competitive Programming', 'System Thinking']],
];

export const projects = [
  {
    title: 'NIT Patna Marketplace',
    icon: Database,
    image: marketImg,
    text: 'A full-stack campus marketplace using the MERN stack. Secured via JWT with Role-Based Access Control to serve 1,000+ university students.',
    features: ['Resend API & OTPs', 'Cloudinary CDN (30% faster)', 'Real-time PWA Chat'],
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Pratham2411/nit_patna_market',
    live: 'https://nit-patna-market.vercel.app'
  },
  {
    title: 'C++ Vector Database & RAG Engine',
    icon: Bot,
    image: vectorDbImg,
    text: 'A multi-threaded C++ Vector Database using HNSW and KD-Tree algorithms to achieve O(log N) search complexity across 10,000+ embeddings.',
    features: ['Local RAG Pipeline', 'Sub-2s responses via Ollama', 'cpp-httplib REST API'],
    tags: ['C++', 'AI/ML', 'Algorithms'],
    github: 'https://github.com/Pratham2411/my_ai',
    live: null
  },

  {
    title: 'Interactive Question Sheet',
    icon: BookOpen,
    image: sheetImg,
    text: 'A structured, single-page application to manage and track programming questions organized by topics and subtopics.',
    features: ['Drag-and-drop reordering', 'Zustand State Management', 'Real-time search'],
    tags: ['React', 'Zustand', 'Vite'],
    github: 'https://github.com/Pratham2411/interactive-question-sheet',
    live: 'https://interactive-question-sheet-weld.vercel.app/'
  },
  {
    title: 'Frontend Mini Projects',
    icon: LayoutGrid,
    image: miniImg,
    text: 'A collection of interactive web applications and UI components built to master DOM manipulation and frontend design.',
    features: ['Interactive UIs', 'DOM Manipulation', 'Responsive layouts'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Pratham2411/Web-Dev-Learning/tree/main/Mini-Projects/Projects',
    live: 'https://pratham2411.github.io/Web-Dev-Learning/Mini-Projects/Projects/'
  },
  {
    title: 'Developer Portfolio (V2)',
    icon: Sparkles,
    image: portfolioImg,
    text: 'This highly interactive, performance-optimized portfolio built with React and Framer Motion.',
    features: ['Command palette', 'Dynamic theming', 'Smooth animations'],
    tags: ['React', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/Pratham2411/my_portfolio',
    live: 'https://my-portfolio-nine-dusky-pwkmvayvdw.vercel.app'
  },
];

export const cpStats = [
  ['Total Problems', '1,500+', 'across 4 platforms'],
  ['CF Max Rating', '1,250+', 'Pupil'],
  ['LeetCode', '2,000+', 'Knight Badge'],
];

export const profiles = [
  ['LeetCode', '@prathamraj2411', 'https://leetcode.com/prathamraj2411'],
  ['Codeforces', '@prathamraj2411', 'https://codeforces.com/profile/prathamraj2411'],
  ['CodeChef', '@prathamraj2411', 'https://www.codechef.com/users/prathamraj2411'],
  ['GeeksforGeeks', '@prathamraj2411', 'https://www.geeksforgeeks.org/profile/prathamraj2411'],
];

export const achievements = [
  'Ranked Top 75 in Amazon HackOn 6.0 out of 70,000+ participants',
  'Shortlisted for the Digital Specialist Engineer (DSE) role at Infosys',
  'Secured 1st place at the Hackslash College Hackathon',
  'Ranked in the Top 15 competitive programmers institution-wide at NIT Patna on Codolio',
  'Solved 1500+ DSA & CP problems',
  'National Science Olympiad (NSO) – Gold Medalist',
  'District Topper (Class 12th)',
];

export const experience = [
  ['Web Developer Intern', Code2, 'Built responsive React components, integrated backend REST APIs, and resolved UI bugs to improve the overall user experience at InternPe.'],
  ['Campus Ambassador', BookOpen, 'Hosted DSA workshops for HackerRank & GfG, cultivating algorithmic thinking for university peers.'],
  ['Educational Volunteer (NSS) & GDSC', Users, 'Mentored 500+ students and architected community software solutions.'],
];
