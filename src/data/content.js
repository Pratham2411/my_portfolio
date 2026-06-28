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
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Zap,
  Activity,
  LayoutGrid
} from 'lucide-react';

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
];

export const aboutStats = [
  ['1500+', 'DSA Problems Solved', Code2],
  ['Knight', 'LeetCode Badge', Trophy],
  ['NIT Patna', 'Electrical Engineering \'27', GraduationCap],
  ['500+', 'Students taught', Users],
];

export const skills = [
  ['Languages', Code2, ['C++', 'Java', 'JavaScript']],
  ['Frontend', Layers3, ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Next.js']],
  ['Backend', Database, ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']],
  ['Core CS', Braces, ['DSA', 'OOP', 'DBMS', 'OS']],
  ['Tools', Terminal, ['Git', 'GitHub', 'VS Code', 'Linux']],
  ['Comfort Zone', Cpu, ['Problem Solving', 'Competitive Programming', 'System Thinking']],
];

export const projects = [
  {
    title: 'NIT Patna Marketplace',
    icon: Database,
    shot: 'shot-dashboard',
    text: 'A full-stack e-commerce marketplace tailored for NIT Patna students to buy, sell, and trade items securely on campus.',
    features: ['User authentication', 'Product listings', 'Search/filtering'],
    tags: ['React', 'Node.js', 'Full-stack'],
    github: 'https://github.com/Pratham2411/nit_patna_market',
    live: 'https://nit-patna-market.vercel.app'
  },
  {
    title: 'Custom AI Engine (my_ai)',
    icon: Bot,
    shot: 'shot-neural',
    text: 'An artificial intelligence engine developed in C++ to demonstrate core algorithmic efficiency and low-level system design.',
    features: ['C++ architecture', 'Optimized logic', 'Core CS principles'],
    tags: ['C++', 'AI/ML', 'Algorithms'],
    github: 'https://github.com/Pratham2411/my_ai',
    live: null
  },
  {
    title: 'Packet Analyzer',
    icon: Activity,
    shot: 'shot-circuit',
    text: 'A network utility for capturing and analyzing packet data across networks to monitor traffic and ensure security.',
    features: ['Packet sniffing', 'Protocol analysis', 'Network monitoring'],
    tags: ['Python', 'Networking', 'Security'],
    github: 'https://github.com/Pratham2411/Packet_analyzer',
    live: null
  },
  {
    title: 'Frontend Mini Projects',
    icon: LayoutGrid,
    shot: 'shot-grid',
    text: 'A collection of interactive web applications and UI components built to master DOM manipulation and frontend design.',
    features: ['Interactive UIs', 'DOM Manipulation', 'Responsive layouts'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Pratham2411/Web-Dev-Learning/tree/main/Mini-Projects/Projects',
    live: 'https://pratham2411.github.io/Web-Dev-Learning/Mini-Projects/Projects/'
  },
  {
    title: 'Developer Portfolio (V2)',
    icon: Sparkles,
    shot: 'shot-portfolio',
    text: 'This highly interactive, performance-optimized portfolio built with React and Framer Motion.',
    features: ['Command palette', 'Dynamic theming', 'Smooth animations'],
    tags: ['React', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/Pratham2411/my_portfolio',
    live: 'https://my-portfolio-nine-dusky-pwkmvayvdw.vercel.app'
  },
];

export const cpStats = [
  ['Total Problems', '1,500+', 'across 4 platforms'],
  ['CF Max Rating', '1,138', 'newbie'],
  ['LeetCode', '1,901', 'Knight'],
];

export const profiles = [
  ['LeetCode', '@prathamraj2411', 'https://leetcode.com/u/prathamraj2411/'],
  ['Codeforces', '@prathamraj2411', 'https://codeforces.com/profile/prathamraj2411'],
  ['CodeChef', '@prathamraj2411', 'https://www.codechef.com/users/prathamraj2411'],
  ['GeeksforGeeks', '@prathamraj2411', 'https://www.geeksforgeeks.org/profile/prathamraj2411'],
];

export const achievements = [
  'Winner of Abhiyantriki 4.0',
  'Second Position in Abhiyanta 3.0',
  'State-level debate competition winner',
  'Rank under 100 in Codeforces Div 2 contest',
  'Hackathon winner',
  'Solved 1500+ DSA problems',
];

export const experience = [
  ['Sankalp (NSS)', BookOpen, 'Taught more than 500 students and mentored juniors through education-focused outreach.'],
  ['GDSC', Briefcase, 'Member and active contributor in technical learning, events, and developer community work.'],
  ['Tesla Club', Cpu, 'Participated in electrical and technical activities connecting core EE with practical systems.'],
];
