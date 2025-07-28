import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/ServicesSection'
import { CaseStudiesSection } from '@/components/CaseStudiesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { TeamSection } from '@/components/TeamSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { LoadingSpinner } from '@/components/LoadingSpinner'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <CaseStudiesSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <TeamSection />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}