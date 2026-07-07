// ─────────────────────────────────────────────────────────────
// Edit everything about your portfolio from this single file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kevin Cruz',
  role: 'Tech & AI-fluent Recruiter',
  location: 'Toronto, ON',
  status: 'open to conversations',
  // The big statement shown in the hero.
  statement: 'I connect ambitious people with the teams building the future.',
  email: 'kevin.cruz@example.com',
  resumeUrl: '/resume.docx', // drop a resume.pdf into /public to enable download
  socials: [
    { label: 'github', href: 'https://github.com/kevincruz' },
    { label: 'linkedin', href: 'https://linkedin.com/in/kevincruz' },
    { label: 'are.na', href: 'https://www.are.na/alice-glass' },
  ],
}

export const about = {
  heading: 'about me',
  paragraphs: [
    'I’m a technical recruiter fluent in the languages of engineering and AI. I’ve spent years sitting between hiring managers and candidates, translating roadmaps into roles and turning résumés into signal.',
    'My edge is fluency: I can read a codebase, follow an architecture discussion, and tell the difference between real depth and buzzword bingo. That means less noise, faster loops, and better matches for everyone involved.',
  ],
}

export const interests = {
  heading: 'interests',
  items: [
    'Applied AI & LLM tooling',
    'Developer experience',
    'Open-source communities',
    'Technology research',
    'Design systems and Aesthetics',
    'Long-form technical writing',
  ],
}

export type Project = {
  title: string
  category: string
  description: string
  year: string
  href: string
  // Bento sizing: 'wide' spans two columns, 'tall' spans two rows.
  size?: 'wide' | 'tall' | 'normal'
}

export const projects: Project[] = [
  {
    title: 'TalentGraph',
    category: 'ai / recruiting',
    description:
      'An internal LLM-powered pipeline that scores candidate/role fit from raw GitHub activity and job specs.',
    year: '2025',
    href: '#',
    size: 'wide',
  },
  {
    title: 'Loop',
    category: 'process',
    description:
      'A lightweight interview-loop framework adopted across 3 engineering orgs to cut time-to-offer by 40%.',
    year: '2024',
    href: '#',
    size: 'normal',
  },
  {
    title: 'signal/noise',
    category: 'writing',
    description:
      'A newsletter decoding technical hiring for non-technical founders. 6k+ subscribers.',
    year: '2024',
    href: '#',
    size: 'tall',
  },
  {
    title: 'DevRel Bridge',
    category: 'community',
    description:
      'Placed 20+ developer advocates by embedding in OSS communities instead of cold sourcing.',
    year: '2023',
    href: '#',
    size: 'normal',
  },
  {
    title: 'Prompt Studio',
    category: 'side project',
    description:
      'A tiny playground for testing recruiting outreach prompts across models. Built with the AI SDK.',
    year: '2023',
    href: '#',
    size: 'wide',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
}

export const experience: Experience[] = [
  {
    role: 'Senior Technical Recruiter',
    company: 'Huawei Technologies',
    period: '2019 — present',
    summary:
      'Own end-to-end hiring for research & platform engineering. Built the AI-assisted sourcing stack from scratch.',
  },
  {
    role: 'IT Recruitment Consultant',
    company: 'Recruiting in Motion',
    period: '2018 — 2019',
    summary:
      'Generated ~$250,000 in first-year revenue and grew the candidate pipeline 50%.',
  },
  {
    role: 'Technical Recruiter',
    company: 'Robert Half Technology',
    period: '2017-2018',
    summary:
      'Sourced and matched IT infrastructure professionals to contract.',
  },
]

export const nav = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'resume', href: '#resume' },
  { label: 'contact', href: '#contact' },
]
