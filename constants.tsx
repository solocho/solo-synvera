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
  Layers,
  Award
} from 'lucide-react';
import { Service, Project, SkillCategory, Testimonial, SocialLink } from './types';

// ==================================================================================
// GLOBAL IMAGES CONFIGURATION
// Updated to fix loading issues. 
// Paths are now relative and spaces are URL encoded (%20).
// ==================================================================================
export const IMAGES = {
  hero: "me.jpg",      // Used on Home Page (Hero)
  process: "me.jpg",   // Used on Home Page (Workflow/Process)
  bio: "me.jpg",       // Used on About Page
};

export const PERSONAL_INFO = {
  name: "Solomon Chome Mumba",
  role: "World-Class Virtual Assistant & Tech-Driven Support",
  email: "info@synvera.site",
  phone: "+254 746 415 318",
  location: "Nairobi, Kenya",
  tagline: "Helping individuals, businesses, and organizations work smarter through efficient, reliable, and tech-powered virtual assistance.",
  
  // ----------------------------------------------------------------------
  // RESUME: GOOGLE DOCS LINK
  // ----------------------------------------------------------------------
  resume: "https://docs.google.com/document/d/1XQ9lbEO8F8ooqU0nRon3rEjjlM64G9N3/edit?usp=sharing&ouid=101059414771798641958&rtpof=true&sd=true" 
};

// ----------------------------------------------------------------------
// SOCIAL MEDIA LINKS
// ----------------------------------------------------------------------
export const SOCIALS: SocialLink[] = [
  { platform: "Instagram", url: "https://www.instagram.com/_solo_chome?igsh=amRsdzl1MDlzYnVh", icon: Instagram, label: "_solo_chome" },
  { platform: "TikTok", url: "https://tiktok.com/@_chome", icon: MessageCircle, label: "@_chome" },
  { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61578531650153", icon: Facebook, label: "Facebook" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email Me" },
  { platform: "WhatsApp", url: "https://wa.me/254746415318", icon: MessageCircle, label: "WhatsApp" },
];

export const CERTIFICATES = [
  {
    id: '1',
    title: 'Virtual Assistant Training',
    issuer: 'ALX Africa',
    date: '2023',
    description: 'Comprehensive training in digital administration, communication tools, and remote work best practices.'
  },
  {
    id: '2',
    title: 'Bachelor in Business Information Technology',
    issuer: 'Cooperative University of Kenya',
    date: 'Ongoing',
    description: 'Focusing on the intersection of modern business strategies and information technology solutions.'
  }
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

// ==================================================================================
// PORTFOLIO PROJECTS
// Images updated with URL encoding (%20 for spaces) and relative paths.
// ==================================================================================
export const PORTFOLIO: Project[] = [
  {
    id: '1',
    title: 'Inbox Zero Automation',
    category: 'Email Management',
    description: 'Implemented specific filters and labels for a CEO, reducing daily email time by 40% and ensuring critical communications were never missed.',
    image: 'email%20management.jpg',
    challenge: "The client was overwhelmed with 200+ daily emails, often missing critical investor communications amidst the noise.",
    solution: "Created a tiered filtering system in Gmail, implemented canned responses for FAQs, and unsubscribed from 50+ newsletters.",
    result: "Achieved 'Inbox Zero' within two weeks and reduced daily email management time from 3 hours to 45 minutes."
  },
  {
    id: '2',
    title: 'Social Media Content Calendar',
    category: 'Social Media',
    description: 'Designed and managed a 3-month content calendar using Notion and Canva for a retail brand, increasing engagement by 25%.',
    image: 'social%20media.jpg',
    challenge: "The brand lacked consistency, posting sporadically with no cohesive visual identity, leading to stagnant growth.",
    solution: "Developed a Notion-based content calendar and designed 30+ reusable Canva templates aligned with brand guidelines.",
    result: "Established a consistent 5-day posting schedule, resulting in a 25% increase in engagement and 15% follower growth."
  },
  {
    id: '3',
    title: 'CRM Data Migration',
    category: 'Data Management',
    description: 'Cleaned and migrated over 2,000 client records into a new CRM system with 100% accuracy, enabling better customer tracking.',
    image: 'data%20management.jpg',
    challenge: "Client data was scattered across multiple Excel sheets with duplicate entries and inconsistent formatting.",
    solution: "Audited existing data, removed duplicates using advanced Excel formulas, and imported clean data into HubSpot CRM.",
    result: "Successfully migrated 2,000+ records with 100% accuracy, enabling the sales team to track leads effectively."
  },
  {
    id: '4',
    title: 'Customer Support Portal',
    category: 'Customer Support',
    description: 'Set up a ticketing system and FAQ knowledge base, improving response times by 2 hours and increasing customer satisfaction scores.',
    image: 'customer%20support.jpg',
    challenge: "Customer inquiries were being lost in a shared inbox, leading to delayed responses and frustrated clients.",
    solution: "Implemented a ticketing system (Zendesk) and wrote 20+ comprehensive articles for a self-service FAQ help center.",
    result: "Reduced average first response time by 2 hours and decreased support ticket volume by 30% via self-service."
  },
  {
    id: '5',
    title: 'Executive Travel Itinerary',
    category: 'Travel Planning',
    description: 'Coordinated complex multi-city business trip logistics for a creative director, including visas, flights, and accommodation within a strict budget.',
    image: 'travel%20planning.jpg',
    challenge: "The client needed to visit 4 countries in 10 days for meetings, with complex visa requirements and tight connection times.",
    solution: "Researched visa protocols, booked optimal flight paths to minimize layovers, and secured accommodation near meeting venues.",
    result: "Delivered a seamless, digital itinerary. The client made all meetings on time with zero logistical hiccups."
  },
  {
    id: '6',
    title: 'Market Competitor Analysis',
    category: 'Research',
    description: 'Conducted comprehensive competitor research for a fintech startup, delivering a 20-page insight report used for Series A pitch deck.',
    image: 'research.jpg',
    challenge: "The startup needed data-driven insights on 5 key competitors to validate their unique value proposition for investors.",
    solution: "Conducted deep-dive research into competitor pricing, feature sets, and customer reviews, synthesizing findings into a report.",
    result: "Provided a 20-page strategic report that was directly referenced in the successful Series A funding pitch deck."
  },
  {
    id: '7',
    title: 'Virtual Summit Coordination',
    category: 'Event Management',
    description: 'Managed speaker coordination, scheduling, and live technical support for a 3-day virtual summit with 500+ attendees.',
    image: 'event%20management.jpg',
    challenge: "Coordinating 15 speakers across different time zones and ensuring a glitch-free live experience for 500+ attendees.",
    solution: "Created a master run-of-show, conducted tech checks with all speakers, and managed the Zoom waiting room and chat.",
    result: "The event ran flawlessly on schedule, receiving a 9.5/10 attendee satisfaction rating."
  },
  {
    id: '8',
    title: 'E-commerce Product Upload',
    category: 'Data Entry',
    description: 'Uploaded and optimized 500+ product listings for a Shopify store, including SEO-friendly titles and alt text descriptions.',
    image: 'data%20entry.jpg',
    challenge: "The store owner had a catalog of 500 new items but no time to upload images, descriptions, and pricing.",
    solution: "Bulk-edited product images for web optimization, wrote SEO-friendly descriptions, and categorized items correctly in Shopify.",
    result: "Launched the new collection on time, leading to a record-breaking sales weekend for the client."
  },
  {
    id: '9',
    title: 'Real Estate Lead Qualification',
    category: 'Lead Generation',
    description: 'Filtered and qualified 1,000+ incoming real estate leads, setting up appointments for top-tier agents and increasing conversion by 15%.',
    image: 'lead%20generation.jpg',
    challenge: "Agents were wasting hours calling low-quality leads, reducing time spent on actual closings.",
    solution: "Implemented a pre-qualification script and CRM tagging system to filter leads before passing them to agents.",
    result: "Filtered 1,000+ leads, saving agents 10+ hours per week and increasing the appointment-to-closing conversion rate by 15%."
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