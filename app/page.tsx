import { AmbientBackground } from '@/components/ambient-background'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ProjectsGrid } from '@/components/projects-grid'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <AmbientBackground />
      <SiteNav />
      <Hero />
      <ProjectsGrid />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}
