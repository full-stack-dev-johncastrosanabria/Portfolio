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
  liveDemoLabel?: LocalizedString;
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
  title: LocalizedString;
  description: LocalizedString;
  items: LocalizedStringArray;
}

export interface ProfileStat {
  value: LocalizedString;
  label: LocalizedString;
  detail: LocalizedString;
}

export interface Certification {
  id: string;
  title: LocalizedString;
  issuer: string;
  issuedAt: LocalizedString;
  category: LocalizedString;
  credentialId?: string;
  certificationNumber?: string;
  status?: LocalizedString;
  hours?: string;
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  startDate: string;
  endDate: string;
  duration: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedStringArray;
  stack: string[];
  highlights: string[];
}

export interface WithChildren {
  children: ReactNode;
}
