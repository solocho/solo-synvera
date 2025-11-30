import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}