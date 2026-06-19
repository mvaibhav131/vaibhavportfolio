import React from "react";
import { Theme } from "./theme";

/** Props shared by every component that receives the current theme */
export interface ThemeProps {
  theme: Theme;
}

/** Props for page-level components that also forward onToggle to Footer */
export interface PageProps {
  theme: Theme;
  onToggle?: () => void;
}

// ── Competitive sites / software skills ──────────────────────────────────────

export interface CompetitiveLogo {
  siteName: string;
  iconifyClassname: string;
  style: React.CSSProperties;
  profileLink: string;
}

export interface SkillLogo {
  skillName: string;
  fontAwesomeClassname?: string;
  style?: React.CSSProperties;
  imageSrc?: string;
}

export interface ProjectLanguage {
  name: string;
  iconifyClass: string;
  style?: React.CSSProperties;
}

export interface OrgLogo {
  login: string;
  avatarUrl: string;
  url?: string;
}

// ── Cards ─────────────────────────────────────────────────────────────────────

export interface CertificateData {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

export interface DegreeData {
  title: string;
  subtitle: string;
  logo_path?: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link?: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
  color?: string;
}

export interface ExperienceSection {
  title: string;
  work?: boolean;
  experiences: ExperienceEntry[];
}

// ── GitHub open-source data ──────────────────────────────────────────────────

export interface GithubLabel {
  name: string;
  color: string;
}

export interface GithubUser {
  name?: string;
  login?: string;
  avatarUrl?: string;
  url?: string;
}

export interface IssueData {
  title: string;
  url: string;
  closed: boolean;
  number: number;
  createdAt: string;
  assignees: { nodes: GithubUser[] };
  labels?: { nodes: GithubLabel[] };
}

export interface PullRequestData {
  title: string;
  url: string;
  state: string;   // "OPEN" | "MERGED" | "CLOSED" from GitHub API
  number: number;
  createdAt: string;
  mergedBy?: GithubUser;
  assignees?: { nodes: GithubUser[] };
  labels?: { nodes: GithubLabel[] };
}

// ── Publications ─────────────────────────────────────────────────────────────

export interface PublicationData {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  image?: string;
  url?: string;
}
