import { AboutContact } from '../components/home/AboutContact'
import { Capabilities } from '../components/home/Capabilities'
import { EngineeringPrinciples } from '../components/home/EngineeringPrinciples'
import { HeroSection } from '../components/home/HeroSection'
import { SelectedWorkIntro } from '../components/home/SelectedWorkIntro'
import { FeaturedProjectStack } from '../components/projects/FeaturedProjectStack'

export function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <section id="projects" className="section selected-work" aria-labelledby="projects-title">
        <div className="container"><SelectedWorkIntro /><FeaturedProjectStack /></div>
      </section>
      <EngineeringPrinciples />
      <Capabilities />
      <AboutContact />
    </main>
  )
}
