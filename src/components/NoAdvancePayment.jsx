import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const benefits = [
  ['wallet', 'No advance payment'], ['bolt', 'Easy booking'],
  ['pin', 'Pay on arrival'], ['check', 'Instant confirmation'],
]

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update(); media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])
  return matches
}

function BenefitIcon({ type }) {
  const paths = {
    wallet: <><path d="M3 7h16v12H3z"/><path d="M3 7l3-3h11v3M15 11h6v5h-6z"/></>,
    bolt: <path d="M13 2L5 13h6l-1 9 9-13h-6z"/>,
    pin: <><path d="M12 22s7-6.2 7-13a7 7 0 10-14 0c0 6.8 7 13 7 13z"/><circle cx="12" cy="9" r="2"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

export default function NoAdvancePayment() {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMediaQuery('(max-width: 700px)')
  const inView = useInView(sectionRef, { amount: .01 })
  const driving = inView && !reduced
  const passDuration = mobile ? 9.2 : 13
  const drive = driving ? {
    x: mobile ? ['-45vw', '8vw', '44vw', '78vw', '105vw'] : ['-35vw', '8vw', '43vw', '78vw', '112vw'],
    y: mobile ? [5, 5, 2, 5, 4] : [10, 18, 4, 13, 7],
    rotate: [-.7, .4, -.35, .25, 0],
  } : reduced ? { x: '52vw', y: 7, rotate: 0 } : { x: '-35vw', y: 10, rotate: -.7 }

  return (
    <section ref={sectionRef} className="payment-motion" id="packages">
      <div className="payment-stage">
        <div className="payment-topo" aria-hidden="true" />
        <span className="payment-code">02 / BOOK WITH CONFIDENCE</span>
        <div className="payment-message">
          <h2>
            <motion.span initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: .65, ease: [.22,1,.36,1] }}>No advance</motion.span>
            <motion.span className="payment-red" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .6 }} transition={{ delay: .14, duration: .65, ease: [.22,1,.36,1] }}>Payment.</motion.span>
          </h2>
          <motion.div className="payment-details" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ delay: .28, duration: .65, ease: [.22,1,.36,1] }}>
            <h3>Book now. <em>Pay on the spot.</em></h3>
            <p>Reserve your desert adventure without upfront payment. Secure your slot and pay when you arrive.</p>
          </motion.div>
        </div>
        <div className="desert-track" aria-hidden="true">
          <div className="dune dune-one"/><div className="dune dune-two"/>
        </div>
        <motion.div className="payment-buggy-runner" animate={drive} transition={{ x: { duration: passDuration, times: [0,.27,.58,.8,1], ease: 'linear', repeat: driving ? Infinity : 0, repeatDelay: mobile ? 1.2 : 1.5 }, y: { duration: passDuration, times: [0,.27,.58,.8,1], ease: 'easeInOut', repeat: driving ? Infinity : 0, repeatDelay: mobile ? 1.2 : 1.5 }, rotate: { duration: passDuration, times: [0,.27,.58,.8,1], ease: 'easeInOut', repeat: driving ? Infinity : 0, repeatDelay: mobile ? 1.2 : 1.5 } }}>
          <motion.div className="motion-speed-marks" aria-hidden="true" animate={driving ? { opacity: [0,.7,.58,0,0], x: [0,-7,-14,-18,-18] } : { opacity: 0 }} transition={{ duration: passDuration, times: [0,.14,.32,.48,1], repeat: driving ? Infinity : 0, repeatDelay: mobile ? 1.2 : 1.5 }}>///</motion.div>
          <motion.div className="buggy-dust" aria-hidden="true" animate={driving ? { opacity: [0,.7,.5,.32,0], scaleX: [.55,1,1.2,1.35,1.5] } : { opacity: reduced ? .38 : 0 }} transition={{ duration: 3.4, ease: 'easeOut', repeat: driving ? Infinity : 0 }}>
            {[0,1,2,3,4].map(i => <i key={i} style={{ '--i': i }}/>) }
          </motion.div>
          <motion.div className="motion-tyre-trail" aria-hidden="true" animate={driving ? { opacity: [0,.42,.28,0], scaleX: [.2,1,1.25,1.4] } : { opacity: .2, scaleX: .7 }} transition={{ duration: 3.8, repeat: driving ? Infinity : 0, ease: 'easeOut' }}/>
          <motion.div className="payment-buggy" animate={driving ? { y: [0,-5,2,-3,0] } : { y: 0 }} transition={{ duration: 2.9, ease: 'easeInOut', repeat: driving ? Infinity : 0 }}>
            <img src="/buggy-top-down.png" alt="Top-down black and red dune buggy driving across the desert track" />
            <motion.i className="wheel wheel-rear" aria-hidden="true" animate={driving ? { rotate: 900 } : { rotate: 0 }} transition={{ duration: 4.2, ease: 'linear', repeat: driving ? Infinity : 0 }}/>
            <motion.i className="wheel wheel-front" aria-hidden="true" animate={driving ? { rotate: 900 } : { rotate: 0 }} transition={{ duration: 4.2, ease: 'linear', repeat: driving ? Infinity : 0 }}/>
          </motion.div>
        </motion.div>
        <div className="payment-benefits">
          {benefits.map(([icon, label], index) => <div key={label}><BenefitIcon type={icon}/><b>0{index + 1}</b><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  )
}
