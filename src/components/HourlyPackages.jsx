import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const hourly = [
  { number: '01', unit: 'HOUR', title: '1 Hour Ride', rider: 'Quick desert introduction', seats: '—', copy: 'A concise route with final details to follow.', image: '/hourly-yellow.png' },
  { number: '02', unit: 'HOURS', title: '2 Hour Adventure', rider: 'Extended dune experience', seats: '—', copy: 'More track time for a deeper desert experience.', popular: true, image: '/hourly-white.png' },
  { number: 'CUSTOM', unit: 'TIME', title: 'Custom Extended Experience', rider: 'Private & flexible', seats: '—', copy: 'A flexible structure for custom tour requirements.', image: '/hourly-green.png' },
]

export default function HourlyPackages() {
  return <section className="hourly-section">
    <SectionHeading eyebrow="CHOOSE YOUR TIME. CONTROL YOUR ADVENTURE." title="Custom Hourly" accent="Dune Buggy Packages" />
    <div className="hourly-grid">{hourly.map((item, i) => <motion.article className={`hourly-card hourly-${i+1}`} key={item.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i*.12, duration: .7 }}>
      {item.popular && <span className="popular-strip">Most popular</span>}<div className="time-outline">{item.number}</div><div className="hourly-index">0{i+1} / TIME PACKAGE</div>
      <h3><strong>{item.number}</strong><small>{item.unit}</small></h3><h4>{item.title}</h4><p>{item.copy}</p>
      <div className="hourly-meta"><span>RIDER <b>{item.rider}</b></span><span>SEATS <b>{item.seats}</b></span></div><a href="#contact">Book now <i>→</i></a>
      <img src={item.image} alt="" loading="lazy"/>
    </motion.article>)}</div>
  </section>
}
