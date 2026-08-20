import { motion } from 'framer-motion'
import BrushButton from './BrushButton'
import HeroFeatures from './HeroFeatures'

export default function Hero({ ready }) {
  const item = (delay, extra = {}) => ({ initial: { opacity: 0, x: -50, ...extra }, animate: ready ? { opacity: 1, x: 0, rotate: 0 } : {}, transition: { delay, duration: .85, ease: [.22,1,.36,1] } })
  return (
    <section id="home" className="hero">
      <div className="speed-lines"/>
      <motion.div className="hero-photo" initial={{ opacity: 0, x: 80 }} animate={ready ? { opacity: 1, x: 0 } : {}} transition={{ delay: .45, duration: 1.15, ease: [.22,1,.36,1] }}/>
      <div className="red-slashes"/>
      <div className="hero-copy">
        <motion.span className="kicker" {...item(.12)}>CONQUER DUBAI'S DUNES</motion.span>
        <motion.h1 {...item(.2, { rotate: -1 })}>
          <span className="red">ULTIMATE</span>
          <span className="speed">ADVENTURES.</span>
        </motion.h1>
        <motion.p {...item(.5)} className="hero-desc">
          Unleash your adventurous side with Dubai's top-rated dune buggy rentals. We offer both private and shared tours complete with VIP hospitality and hassle-free transport. Ride with confidence knowing we bring over 15 years of trusted experience and official DTCM licensing.
        </motion.p>
        <motion.div className="hero-actions" {...item(.62)}>
          <BrushButton href="#packages">Explore packages</BrushButton>
        </motion.div>
      </div>
      <HeroFeatures ready={ready}/>
    </section>
  )
}
