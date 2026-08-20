import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const hourly = [
  { 
    price: '400 AED / Person', 
    title: '30-Minute Dune Buggy Ride Dubai', 
    features: ['30-Minute Buggy Ride', 'Hotel Pick-Up', 'Free Camel Ride'],
    duration: '30 mins',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    image: '/hourly-yellow.png' 
  },
  { 
    price: '800 AED / Person', 
    title: '1-Hour Dune Buggy Tour Dubai', 
    features: ['1-Hour Buggy Ride', 'Hotel Pick-Up', 'Free Camel Ride'],
    duration: '1-hour',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    popular: true, 
    image: '/hourly-white.png' 
  },
  { 
    price: '1400 AED / Person', 
    title: '2-Hour Dune Buggy Adventure Dubai', 
    features: ['Hotel Pick-Up', 'Free Camel Ride', '2-Hour Buggy Ride'],
    duration: '2-hours',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    image: '/hourly-green.png' 
  },
]

export default function HourlyPackages() {
  return <section className="hourly-section">
    <SectionHeading eyebrow="CHOOSE YOUR TIME. CONTROL YOUR ADVENTURE." title="Custom Hourly" accent="Dune Buggy Packages" align="center" />
    <div className="hourly-grid">
      {hourly.map((item, i) => (
        <motion.article className="hourly-card" key={i} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i*.12, duration: .7 }}>
          {item.popular && <div className="popular-badge">MOST POPULAR</div>}
          <div className="nhc-image-wrap">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="nhc-price">{item.price}</div>
          </div>
          <div className="nhc-body">
            <h3 className="nhc-title">{item.title}</h3>
            <div className="nhc-features">
              {item.features.map(f => (
                <span key={f}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d71920"><path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </span>
              ))}
            </div>
            <div className="nhc-specs">
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
                <small>Duration</small>
                <strong>{item.duration}</strong>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
                <small>Seats</small>
                <strong>{item.seats}</strong>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
                <small>Private Transfer (4x4)</small>
                <strong>{item.transfer}</strong>
              </div>
            </div>
            <div className="nhc-actions">
              <a href="#book" className="btn-primary">BOOK NOW</a>
              <a href="#details" className="btn-secondary">TOUR DETAILS</a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
}
