import type { ReactNode } from 'react';

export type Language = 'es' | 'en';

export type LocalizedString = string | Partial<Record<Language, string>>;

export type LocalizedStringArray = string[] | Partial<Record<Language, string[]>>;

export interface ProjectLink {
  label: LocalizedString;
  href: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedStringArray;
  technologies: string[];
  liveDemo?: string;
  githubUrl?: string;
  links?: ProjectLink[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  tags: LocalizedStringArray;
  publishedAt: string;
  readingTime: string;
  source: 'local' | 'firebase';
}

export interface LocalizedBlogPost extends Omit<BlogPost, 'title' | 'excerpt' | 'content' | 'tags'> {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ProfileStat {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  duration: string;
  summary: string;
  description: string;
  achievements: string[];
  stack: string[];
  highlights: string[];
}

export interface WithChildren {
  children: ReactNode;
}

