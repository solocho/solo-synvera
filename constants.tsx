import { 
  Mail, 
  Database, 
  Search, 
  Headphones, 
  FileText, 
  Target, 
  Globe, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Monitor,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Service, Project, SkillCategory, Testimonial, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Solomon Chome Mumba",
  role: "World-Class Virtual Assistant & Tech-Driven Support",
  email: "solomonchome@gmail.com",
  phone: "+254 746 415 318",
  location: "Nairobi, Kenya",
  tagline: "Helping individuals, businesses, and organizations work smarter through efficient, reliable, and tech-powered virtual assistance.",
  resume: "/Solomon_Chome_Resume.pdf" // Place your PDF in the public folder with this name, or replace with a Google Drive link
};

// --- IMPORTANT: REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS ---
// 1. Go to https://www.emailjs.com/ and sign up (free).
// 2. Create a "Service" (select Gmail).
// 3. Create a "Email Template".
// 4. Get your keys from "Account" -> "API Keys".
export const EMAIL_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",   // e.g., "service_x9s8..."
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // e.g., "template_7d2..."
  PUBLIC_KEY: "YOUR_PUBLIC_KEY"    // e.g., "user_8s7d..."
};

export const SOCIALS: SocialLink[] = [
  { platform: "Instagram", url: "https://instagram.com/_solo_chome", icon: Instagram, label: "_solo_chome" },
  { platform: "TikTok", url: "https://tiktok.com/@chome", icon: MessageCircle, label: "@chome" },
  { platform: "Facebook", url: "https://m.me/61560558688507", icon: Facebook, label: "Messenger" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email Me" },
  { platform: "WhatsApp", url: "https://wa.me/254746415318", icon: MessageCircle, label: "WhatsApp" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Virtual Assistance",
    skills: ["Email & Calendar Management", "Data Entry & Organization", "Online Research", "Appointment Scheduling", "Customer Support", "Travel Planning"]
  },
  {
    title: "Tech & Tools",
    skills: ["Microsoft Office Suite", "Google Workspace", "Canva", "Trello, Notion, ClickUp, Asana", "CRM Management", "Basic Web & Graphic Design"]
  },
  {
    title: "Digital Growth",
    skills: ["Lead Generation", "Social Media Management", "Administrative Support", "Automation Tools", "Research & Reporting"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Time Management", "Problem Solving", "Attention to Detail", "Adaptability", "Confidentiality"]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Inbox & Calendar Management',
    description: 'Reclaim your time with organized email systems and seamless schedule coordination. I handle the noise so you can focus on the signal.',
    icon: Mail
  },
  {
    id: '2',
    title: 'Social Media Support',
    description: 'Engage your audience with consistent content scheduling, community management, and growth strategies tailored to your brand voice.',
    icon: Globe
  },
  {
    id: '3',
    title: 'Customer Service Support',
    description: 'Deliver world-class support to your clients with timely responses and professional handling of inquiries across all channels.',
    icon: Headphones
  },
  {
    id: '4',
    title: 'Data Entry & Admin Support',
    description: 'Maintain pristine records with accurate data entry, file organization, and administrative maintenance that keeps your business compliant.',
    icon: Database
  },
  {
    id: '5',
    title: 'Document Creation & Editing',
    description: 'Professional formatting, proofreading, and creation of business documents, presentations, and reports that impress stakeholders.',
    icon: FileText
  },
  {
    id: '6',
    title: 'Research & Reporting',
    description: 'In-depth market research and comprehensive reports to support your decision-making process with data-driven insights.',
    icon: Search
  },
  {
    id: '7',
    title: 'Tech Support Assistance',
    description: 'Basic troubleshooting and setup of digital tools to ensure your workflow remains uninterrupted and optimized.',
    icon: Monitor
  },
  {
    id: '8',
    title: 'Lead Generation',
    description: 'Identify and organize potential client leads to fuel your business growth pipeline with high-quality prospects.',
    icon: Target
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: '1',
    title: 'Inbox Zero Automation',
    category: 'Email Management',
    description: 'Implemented specific filters and labels for a CEO, reducing daily email time by 40% and ensuring critical communications were never missed.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Social Media Content Calendar',
    category: 'Social Media',
    description: 'Designed and managed a 3-month content calendar using Notion and Canva for a retail brand, increasing engagement by 25%.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'CRM Data Migration',
    category: 'Data Management',
    description: 'Cleaned and migrated over 2,000 client records into a new CRM system with 100% accuracy, enabling better customer tracking.',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Customer Support Portal',
    category: 'Customer Support',
    description: 'Set up a ticketing system and FAQ knowledge base, improving response times by 2 hours and increasing customer satisfaction scores.',
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    title: 'Executive Travel Itinerary',
    category: 'Travel Planning',
    description: 'Coordinated complex multi-city business trip logistics for a creative director, including visas, flights, and accommodation within a strict budget.',
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: '6',
    title: 'Market Competitor Analysis',
    category: 'Research',
    description: 'Conducted comprehensive competitor research for a fintech startup, delivering a 20-page insight report used for Series A pitch deck.',
    image: 'https://picsum.photos/800/600?random=6'
  },
  {
    id: '7',
    title: 'Virtual Summit Coordination',
    category: 'Event Management',
    description: 'Managed speaker coordination, scheduling, and live technical support for a 3-day virtual summit with 500+ attendees.',
    image: 'https://picsum.photos/800/600?random=7'
  },
  {
    id: '8',
    title: 'E-commerce Product Upload',
    category: 'Data Entry',
    description: 'Uploaded and optimized 500+ product listings for a Shopify store, including SEO-friendly titles and alt text descriptions.',
    image: 'https://picsum.photos/800/600?random=8'
  },
  {
    id: '9',
    title: 'Real Estate Lead Qualification',
    category: 'Lead Generation',
    description: 'Filtered and qualified 1,000+ incoming real estate leads, setting up appointments for top-tier agents and increasing conversion by 15%.',
    image: 'https://picsum.photos/800/600?random=9'
  }
];

export const PORTFOLIO_STATS = [
  { label: "Projects Completed", value: "45+" },
  { label: "Client Retention Rate", value: "92%" },
  { label: "Deadlines Met", value: "100%" },
  { label: "Industries Served", value: "12+" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart',
    content: "Solomon is incredibly disciplined. He completely reorganized my calendar and I've never been more productive. A true professional."
  },
  {
    id: '2',
    name: 'David Okafor',
    role: 'Digital Marketer',
    content: "Fast learner and excellent communicator. Solomon picked up our internal tools in a day. Highly recommended for any fast-paced team."
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Travel Blogger',
    content: "His attention to detail in planning my travel itineraries and managing bookings was flawless. He anticipates needs before I even voice them."
  }
];

export const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "I listen to your needs, understand your pain points, and analyze your current workflow to identify bottlenecks.",
    icon: Lightbulb
  },
  {
    title: "Strategy",
    description: "I design a custom support plan and set up the necessary tools and communication channels to ensure smooth operations.",
    icon: Layers
  },
  {
    title: "Execution",
    description: "I get to work immediately, handling tasks with precision while keeping you updated through regular reports.",
    icon: Zap
  },
  {
    title: "Optimization",
    description: "I continuously refine processes based on feedback to maximize efficiency and value over time.",
    icon: TrendingUp
  }
];

export const CORE_VALUES = [
  {
    title: "Unwavering Integrity",
    description: "I believe in transparency and honesty. Your data privacy and business confidentiality are my top priorities.",
    icon: Shield
  },
  {
    title: "Reliable Efficiency",
    description: "I respect deadlines and value your time. My goal is to deliver quality work faster than you expect.",
    icon: Clock
  },
  {
    title: "Continuous Growth",
    description: "The digital landscape changes fast. I stay updated with the latest tools to give you a competitive edge.",
    icon: TrendingUp
  }
];

export const TECH_STACK = [
  "Google Workspace", "Microsoft 365", "Notion", "Trello", "Asana", "ClickUp", "Slack", "Zoom", "Canva", "WordPress", "Mailchimp", "Calendly"
];

export const FAQS = [
  {
    question: "What are your working hours?",
    answer: "I am flexible and typically work within EAT (East Africa Time), but I adjust my schedule to overlap with international clients in the US, UK, or Europe to ensure smooth communication."
  },
  {
    question: "How do we communicate?",
    answer: "We can communicate via Email, Slack, WhatsApp, or Zoom. I provide daily or weekly updates depending on your preference to keep you in the loop."
  },
  {
    question: "Do you handle confidential information?",
    answer: "Absolutely. I treat all client data with the strictest confidentiality and am happy to sign a Non-Disclosure Agreement (NDA) before starting any work."
  },
  {
    question: "Can I hire you for a one-time project?",
    answer: "Yes! I am available for both ongoing retainer packages and specific one-time projects like data entry cleanup, research reports, or travel planning."
  }
];