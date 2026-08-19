import { motion, useReducedMotion } from 'framer-motion'
import BrushButton from './BrushButton'

export default function IntroExperience({ onClose }) {
  const reduced = useReducedMotion()
  const duration = reduced ? 0 : 1.1
  return (
    <motion.div className="intro-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }} role="dialog" aria-modal="true" aria-label="Welcome to Speed Désert Adventure">
      <motion.div className="intro-panel" initial={reduced ? false : { scale: .88, rotate: -2 }} animate={{ scale: 1, rotate: 0 }} exit={reduced ? { opacity: 0 } : { x: '55vw', opacity: 0, rotate: 3 }} transition={{ duration, ease: [.22,1,.36,1] }}>
        <button className="intro-close" onClick={onClose} aria-label="Close introduction">×</button>
        <div className="intro-copy">
          <span className="eyebrow">WELCOME TO THE EXTREME</span>
          <h2>Your desert story<br/><em>starts here.</em></h2>
          <p>Power. Sand. Speed. One unforgettable ride.</p>
          <button className="brush-button" onClick={onClose}><span>Enter the adventure</span></button>
        </div>
        <motion.div className="intro-buggy" initial={reduced ? false : { x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration, delay: .15, ease: [.22,1,.36,1] }} />
        <motion.div className="intro-dust" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: .7 }} transition={{ delay: .55, duration: .8 }} />
      </motion.div>
      <div className="intro-hint">PRESS × TO SKIP</div>
    </motion.div>
  )
}
