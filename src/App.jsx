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
import WhatsAppFloat from './components/WhatsAppFloat'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import TestimonialsPage from './pages/Testimonials'
import TourDetailsPage from './pages/TourDetails'
import CanAmMaverickRXRS from './pages/CanAmMaverickRXRS'

import PolarisRZRCustom from './pages/PolarisRZRCustom'
import ThirtyMinBuggyRide from './pages/ThirtyMinBuggyRide'
import OneHourBuggyTour from './pages/OneHourBuggyTour'

export default function App() {
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about'
  const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact'
  const isTestimonialsPage = window.location.pathname.replace(/\/$/, '') === '/testimonials'
  const isTourDetailsPage = window.location.pathname.replace(/\/$/, '') === '/tour/can-am-maverick-xrs-26'
  const isCanAmMaverickRXRSTour = window.location.pathname.replace(/\/$/, '') === '/tour/can-am-maverick-r-x-rs'
  const isPolarisRZRCustomTour = window.location.pathname.replace(/\/$/, '') === '/tour/polaris-rzr-custom'
  const isThirtyMinBuggyRide = window.location.pathname.replace(/\/$/, '') === '/tour/30-minute-dune-buggy-ride'
  const isOneHourBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/1-hour-dune-buggy-tour'
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

  if (isAboutPage) return <div className="site"><div className="page-shell"><Navbar ready /><AboutPage/><Footer/><WhatsAppFloat/></div></div>
  if (isContactPage) return <div className="site"><div className="page-shell"><Navbar ready /><ContactPage/><Footer/><WhatsAppFloat/></div></div>
  if (isTestimonialsPage) return <div className="site"><div className="page-shell"><Navbar ready /><TestimonialsPage/><Footer/><WhatsAppFloat/></div></div>
  if (isTourDetailsPage) return <div className="site"><div className="page-shell"><Navbar ready /><TourDetailsPage/><Footer/><WhatsAppFloat/></div></div>
  if (isCanAmMaverickRXRSTour) return <div className="site"><div className="page-shell"><Navbar ready /><CanAmMaverickRXRS/><Footer/><WhatsAppFloat/></div></div>
  if (isPolarisRZRCustomTour) return <div className="site"><div className="page-shell"><Navbar ready /><PolarisRZRCustom/><Footer/><WhatsAppFloat/></div></div>
  if (isThirtyMinBuggyRide) return <div className="site"><div className="page-shell"><Navbar ready /><ThirtyMinBuggyRide/><Footer/><WhatsAppFloat/></div></div>
  if (isOneHourBuggyTour) return <div className="site"><div className="page-shell"><Navbar ready /><OneHourBuggyTour/><Footer/><WhatsAppFloat/></div></div>

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
        <WhatsAppFloat />
      </div>
      <AnimatePresence>{introOpen && <IntroExperience onClose={closeIntro} />}</AnimatePresence>
    </div>
  )
}
