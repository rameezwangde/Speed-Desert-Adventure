import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const steps = [
  ['01','Choose your buggy','Pick the ride format that suits your group.'],
  ['02','Select your package','Choose a duration and preferred experience.'],
  ['03','Confirm your slot','Share your preferred date and details.'],
  ['04','Pay on arrival & ride','Arrive, complete confirmation and get ready.'],
]

export default function BookingProcess() {
  return <section className="booking-process">
    <SectionHeading eyebrow="YOUR ROUTE TO THE DUNES" title="How to Book Your" accent="Desert Buggy Tour in Dubai?" />
    <div className="route-map"><motion.div className="route-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: 1.2, ease: [.22,1,.36,1] }}/>
      <motion.img className="route-buggy" src="/route-red.png" alt="" initial={{ left: '0%', opacity: 0 }} whileInView={{ left: '88%', opacity: [0,1,1] }} viewport={{ once: true, amount: .4 }} transition={{ duration: 2.4, delay: .25, ease: [.22,1,.36,1] }}/>
      {steps.map(([num,title,copy], i) => <motion.div className="route-step" key={num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: .2 + i*.16 }}><b>{num}</b><i/><span>25.{204+i}° N</span><h3>{title}</h3><p>{copy}</p></motion.div>)}
    </div>
  </section>
}
