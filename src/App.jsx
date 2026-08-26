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
import Stage4Stunner from './pages/Stage4Stunner'
import ThirtyMinBuggyRide from './pages/ThirtyMinBuggyRide'
import OneHourBuggyTour from './pages/OneHourBuggyTour'
import TwoHourBuggyTour from './pages/TwoHourBuggyTour'
import EarlyBirdBuggyTour from './pages/EarlyBirdBuggyTour'
import RedDunesAfternoonBuggyTour from './pages/RedDunesAfternoonBuggyTour'
import GalleryPage from './pages/Gallery'

import PackagesPage from './pages/Packages'
import QuadBike620cc from './pages/QuadBike620cc'
import Yamaha700ccRaptor from './pages/Yamaha700ccRaptor'
import DesertComboSharingSafariQuad from './pages/DesertComboSharingSafariQuad'
import DesertComboSharingSafariBuggy from './pages/DesertComboSharingSafariBuggy'
import CanAmMaverick from './pages/CanAmMaverick'

export default function App() {
  const isQuadBike620ccTour = window.location.pathname.replace(/\/$/, '') === '/tour/620cc-quad-bike'
  const isYamaha700ccRaptorTour = window.location.pathname.replace(/\/$/, '') === '/tour/yamaha-700cc-raptor'
  const isSafariQuadTour = window.location.pathname.replace(/\/$/, '') === '/tour/safari-quad'
  const isSafariBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/safari-buggy'
  const isCanAmMaverickCategory = window.location.pathname.replace(/\/$/, '') === '/tour/can-am-maverick'
  const isPackagesPage = window.location.pathname.replace(/\/$/, '') === '/packages'
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about'
  const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact'
  const isTestimonialsPage = window.location.pathname.replace(/\/$/, '') === '/testimonials'
  const isGalleryPage = window.location.pathname.replace(/\/$/, '') === '/gallery'
  const isTourDetailsPage = window.location.pathname.replace(/\/$/, '') === '/tour/can-am-maverick-xrs-26'
  const isCanAmMaverickRXRSTour = window.location.pathname.replace(/\/$/, '') === '/tour/can-am-maverick-r-x-rs'
  const isPolarisRZRCustomTour = window.location.pathname.replace(/\/$/, '') === '/tour/polaris-rzr-custom'
  const isStage4Stunner = window.location.pathname.replace(/\/$/, '') === '/tour/stage-4-stunner-rzr-pro-r-ultimate-eps'
  const isThirtyMinBuggyRide = window.location.pathname.replace(/\/$/, '') === '/tour/30-minute-dune-buggy-ride'
  const isOneHourBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/1-hour-dune-buggy-tour'
  const isTwoHourBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/2-hour-dune-buggy-adventure'
  const isEarlyBirdBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/early-bird-buggy-tour'
  const isRedDunesAfternoonBuggyTour = window.location.pathname.replace(/\/$/, '') === '/tour/red-dunes-afternoon'
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

  if (isQuadBike620ccTour) return <div className="site"><div className="page-shell"><Navbar ready /><QuadBike620cc/><Footer/><WhatsAppFloat/></div></div>
  if (isYamaha700ccRaptorTour) return <div className="site"><div className="page-shell"><Navbar ready /><Yamaha700ccRaptor/><Footer/><WhatsAppFloat/></div></div>
  if (isTourDetailsPage) return <div className="site"><div className="page-shell"><Navbar ready /><TourDetailsPage/><Footer/><WhatsAppFloat/></div></div>
  if (isCanAmMaverickRXRSTour) return <div className="site"><div className="page-shell"><Navbar ready /><CanAmMaverickRXRS/><Footer/><WhatsAppFloat/></div></div>
  if (isPolarisRZRCustomTour) return <div className="site"><div className="page-shell"><Navbar ready /><PolarisRZRCustom/><Footer/><WhatsAppFloat/></div></div>
  if (isStage4Stunner) return <div className="site"><div className="page-shell"><Navbar ready /><Stage4Stunner/><Footer/><WhatsAppFloat/></div></div>
  if (isThirtyMinBuggyRide) return <div className="site"><div className="page-shell"><Navbar ready /><ThirtyMinBuggyRide/><Footer/><WhatsAppFloat/></div></div>
  if (isEarlyBirdBuggyTour) return <div className="site"><div className="page-shell"><Navbar ready /><EarlyBirdBuggyTour/><Footer/><WhatsAppFloat/></div></div>
  if (isRedDunesAfternoonBuggyTour) return <div className="site"><div className="page-shell"><Navbar ready /><RedDunesAfternoonBuggyTour/><Footer/><WhatsAppFloat/></div></div>
  if (isSafariQuadTour) return <div className="site"><div className="page-shell"><Navbar ready /><DesertComboSharingSafariQuad/><Footer/><WhatsAppFloat/></div></div>
  if (isSafariBuggyTour) return <div className="site"><div className="page-shell"><Navbar ready /><DesertComboSharingSafariBuggy/><Footer/><WhatsAppFloat/></div></div>
  if (isCanAmMaverickCategory) return <div className="site"><div className="page-shell"><Navbar ready /><CanAmMaverick/><Footer/><WhatsAppFloat/></div></div>
  if (isPackagesPage) return <div className="site"><div className="page-shell"><Navbar ready /><PackagesPage/><Footer/><WhatsAppFloat/></div></div>
  if (isAboutPage) return <div className="site"><div className="page-shell"><Navbar ready /><AboutPage/><Footer/><WhatsAppFloat/></div></div>
  if (isContactPage) return <div className="site"><div className="page-shell"><Navbar ready /><ContactPage/><Footer/><WhatsAppFloat/></div></div>
  if (isTestimonialsPage) return <div className="site"><div className="page-shell"><Navbar ready /><TestimonialsPage/><Footer/><WhatsAppFloat/></div></div>
  if (isGalleryPage) return <div className="site"><div className="page-shell"><Navbar ready /><GalleryPage/><Footer/><WhatsAppFloat/></div></div>


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
