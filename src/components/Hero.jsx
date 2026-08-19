import { motion } from 'framer-motion'
import BrushButton from './BrushButton'
import HeroFeatures from './HeroFeatures'

export default function Hero({ ready }) {
  const item = (delay, extra = {}) => ({ initial: { opacity: 0, x: -50, ...extra }, animate: ready ? { opacity: 1, x: 0, rotate: 0 } : {}, transition: { delay, duration: .85, ease: [.22,1,.36,1] } })
  return (
    <section id="home" className="hero">
      <div className="hero-grain"/><div className="speed-lines"/>
      <motion.div className="hero-photo" initial={{ opacity: 0, x: 80 }} animate={ready ? { opacity: 1, x: 0 } : {}} transition={{ delay: .45, duration: 1.15, ease: [.22,1,.36,1] }}/>
      <div className="red-slashes"/>
      <div className="hero-copy">
        <motion.span className="kicker" {...item(.12)}>Live the</motion.span>
        <motion.h1 {...item(.2, { rotate: -1 })}><span className="desert">Desert.</span><span className="red">Feel the</span><span className="red speed">Speed.</span></motion.h1>
        <motion.p {...item(.5)}>Dune buggy adventures like never before.</motion.p>
        <motion.div className="hero-actions" {...item(.62)}>
          <BrushButton href="#packages">Explore packages</BrushButton>
        </motion.div>
      </div>
      <HeroFeatures ready={ready}/>
    </section>
  )
}
