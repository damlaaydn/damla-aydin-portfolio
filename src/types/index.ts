export type SkillCategory =
  | "Data Analysis"
  | "Business Intelligence"
  | "Programming"
  | "Database"
  | "Tools";

export type SocialPlatform = "github" | "linkedin" | "instagram" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  tagline: string;
  intro: string;
  about: string[];
  resumePath: string;
  socials: SocialLink[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
}

export type TimelineKind = "experience" | "education";

export interface TimelineItem {
  id: string;
  kind: TimelineKind;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
}
