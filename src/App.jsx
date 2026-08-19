import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import IntroExperience from './components/IntroExperience'
import Hero from './components/Hero'
import NoAdvancePayment from './components/NoAdvancePayment'
import PaymentBanner from './components/PaymentBanner'
import AboutPreview from './components/AboutPreview'
import TourHighlights from './components/TourHighlights'
import PricingBooking from './components/PricingBooking'
import HourlyPackages from './components/HourlyPackages'
import BookingProcess from './components/BookingProcess'
import BuggyGuide from './components/BuggyGuide'
import TourIncludes from './components/TourIncludes'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const [introOpen, setIntroOpen] = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('speed-desert-intro-seen')
    setIntroOpen(!seen)
    setHeroReady(Boolean(seen))
  }, [])

  const closeIntro = () => {
    sessionStorage.setItem('speed-desert-intro-seen', 'true')
    setIntroOpen(false)
    window.setTimeout(() => setHeroReady(true), 350)
  }

  return (
    <div className={introOpen ? 'site intro-is-open' : 'site'}>
      <div className="page-shell">
        <Navbar ready={heroReady} />
        <main>
          <Hero ready={heroReady} />
          {/* <NoAdvancePayment /> */}
          <PaymentBanner />
          <AboutPreview />
          <TourHighlights />
          <PricingBooking />
          <HourlyPackages />
          <BookingProcess />
          <BuggyGuide />
          <TourIncludes />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      <AnimatePresence>{introOpen && <IntroExperience onClose={closeIntro} />}</AnimatePresence>
    </div>
  )
}
