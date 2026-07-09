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
  email: 'kevczrecruits@gmail.com',
  resumeUrl: '/resume.docx', // drop a resume.pdf into /public to enable download
  socials: [
    { label: 'github', href: 'https://github.com/Kevczrecruits' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/kevin-cruz-76b66468' },
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
    'Software Engineering',
    'Open-source communities',
    'Technology research',
    'Design systems and Aesthetics',
    'Fashion and Culture',
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
    title: 'TalentOS',
    category: 'ai / recruiting',
    description:
      'An LLM-powered talent search engine operated through natural language',
    year: '2026',
    href: 'https://github.com/Kevczrecruits/Talent-OS-',
    size: 'wide',
  },
  {
    title: 'Placeholder Text',
    category: 'Placeholder Text',
    description:
      'Placeholder Text',
    year: 'Placeholder Text',
    href: '#',
    size: 'normal',
  },
  {
    title: 'Placeholder Text',
    category: 'Placeholder Text',
    description:
      'Placeholder Text',
    year: 'Placeholder Text',
    href: '#',
    size: 'tall',
  },
  {
    title: 'Placeholder Text',
    category: 'Placeholder Text',
    description:
      'Placeholder Text',
    year: 'Placeholder Text',
    href: '#',
    size: 'normal',
  },
  {
    title: 'Placeholder Text',
    category: 'Placeholder Text',
    description:
      'Placeholder Text',
    year: 'Placeholder Text',
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
      'Key architect in growing core R&D teams ~300% over 6 years while cutting average time-to-hire 35% through workflow optimization.',
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
