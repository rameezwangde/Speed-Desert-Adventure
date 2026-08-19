import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const tours = [
  { id: '01', title: '4 Seater Early Bird Dune Buggy Tour', copy: 'A sunrise-ready desert route for your group.', duration: '—', seats: '4', transfer: 'Optional', image: '/tour-blue.png', position: '58%' },
  { id: '02', title: 'Red Dunes Afternoon Buggy Tour', copy: 'A guided afternoon drive through open red dunes.', duration: '—', seats: '—', transfer: 'Optional', image: '/tour-red.png', position: '55%' },
  { id: '03', title: 'Desert Combo: Safari + Dune Buggy', copy: 'A flexible combo experience ready for final details.', duration: '—', seats: '—', transfer: 'Optional', image: '/tour-four-seat.png', position: '43%' },
]

export default function TourHighlights() {
  return <section className="tour-highlights" id="tour-highlights">
    <div className="giant-ride">CHOOSE YOUR RIDE</div>
    <motion.div className="custom-scribble-heading" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .7, ease: [.22,1,.36,1] }}>
      <span className="csh-eyebrow">BUILT FOR THE DUNES</span>
      <h2 className="csh-title">
        Speed Desert Adventure —{' '}
        <span className="csh-accent">
          Tour Highlights
          <svg className="csh-scribble" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M 2 12 Q 8 2 14 12 T 26 12 T 38 12 T 50 12 T 62 12 T 74 12 T 86 12 T 98 12" stroke="#d71920" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </h2>
    </motion.div>
    <div className="tour-grid">
      {tours.map((tour, i) => <motion.article className="tour-card" key={tour.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .12, duration: .7, ease: [.22,1,.36,1] }}>
        <div className="tour-image" style={{ '--position': tour.position, '--image': `url(${tour.image})` }}><div className="tour-slash"/><span className="tour-price">FROM AED —</span><b>{tour.id}</b></div>
        <div className="tour-body"><h3>{tour.title}</h3><p>{tour.copy}</p>
          <div className="tour-specs"><div><small>01 / DURATION</small><strong>{tour.duration}</strong></div><div><small>02 / SEATS</small><strong>{tour.seats}</strong></div><div><small>03 / TRANSFER</small><strong>{tour.transfer}</strong></div></div>
          <div className="tour-actions"><a href="#contact">Book now</a><a href="#pricing">Tour details <span>↗</span></a></div>
        </div>
      </motion.article>)}
    </div>
  </section>
}
