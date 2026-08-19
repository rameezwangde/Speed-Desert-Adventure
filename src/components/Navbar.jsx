import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BrushButton from './BrushButton'

const links = ['Home', 'About Us', 'Packages', 'Gallery', 'Testimonials', 'Contact']

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header initial={{ opacity: 0, y: -20 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: .15, y: -8 }} transition={{ duration: .7 }} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo" aria-label="Speed Désert Adventure home">
        <img src="/logo.png" alt="Speed Désert Adventure" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link, i) => <a className={i === 0 ? 'active' : ''} key={link} href={`#${link.toLowerCase().replace(' us','').replace(' ','-')}`}>{link}</a>)}
      </nav>
      <BrushButton className="nav-cta">Book your ride</BrushButton>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><i/><i/><i/></button>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ ease: [.22,1,.36,1], duration: .55 }}>
          <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          <span className="mobile-index">SDA / MENU</span>
          {links.map((link, i) => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase().replace(' us','').replace(' ','-')}`}><small>0{i + 1}</small>{link}</a>)}
          <BrushButton>Book your ride</BrushButton>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  )
}
