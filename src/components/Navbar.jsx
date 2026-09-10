import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BrushButton from './BrushButton'
import LanguageSelector from './LanguageSelector'
import CurrencySelector from './CurrencySelector'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ ready }) {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.aboutUs'), href: '/about' },
    { label: t('nav.packages'), href: '/packages' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.testimonials'), href: '/testimonials' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header initial={{ opacity: 0, y: -20 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: .15, y: -8 }} transition={{ duration: .7 }} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo" aria-label="Speed Desert Adventure home">
        <img src="/logo.png" alt="Speed Desert Adventure" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(link => <a className={(link.href === '/' && location.pathname === '/') || link.href === location.pathname ? 'active' : ''} key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <div className="nav-right-actions">
        <CurrencySelector />
        <LanguageSelector />
        <BrushButton className="nav-cta">{t('nav.bookYourRide')}</BrushButton>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label={t('nav.openMenu')}><i/><i/><i/></button>
      </div>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ ease: [.22,1,.36,1], duration: .55 }}>
          <button className="menu-close" onClick={() => setOpen(false)} aria-label={t('nav.closeMenu')}>×</button>
          <span className="mobile-index">{t('nav.menu')}</span>
          <CurrencySelector isMobile={true} />
          <LanguageSelector isMobile={true} />
          {links.map((link, i) => <a key={link.href} onClick={() => setOpen(false)} href={link.href}><small>0{i + 1}</small>{link.label}</a>)}
          <BrushButton>{t('nav.bookYourRide')}</BrushButton>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  )
}

