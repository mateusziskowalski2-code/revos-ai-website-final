import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Problems } from '@/components/sections/problems'
import { Solutions } from '@/components/sections/solutions'
import { CaseStudies } from '@/components/sections/case-studies'
import { Differentiators } from '@/components/sections/differentiators'
import { Testimonials } from '@/components/sections/testimonials'
import { Process } from '@/components/sections/process'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <CaseStudies />
      <Differentiators />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
