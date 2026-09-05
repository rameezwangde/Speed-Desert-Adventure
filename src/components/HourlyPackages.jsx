import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const hourly = [
  { 
    price: '400 AED / Person', 
    title: '30 Min Dune Buggy Maverick X3 (MAX for 4 Seater)', 
    features: ['30-Minute Buggy Ride', 'Hotel Pick-Up', 'Free Camel Ride'],
    duration: '30 mins',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    image: '/buggy-duo.jpg',
    link: '/tour/30-minute-dune-buggy-ride'
  },
  { 
    price: '1000 AED', 
    title: '1-Hour Dune Buggy Tour Dubai (MAX for 4 Seater)', 
    features: ['1-Hour Buggy Ride', 'Hotel Pick-Up', 'Free Camel Ride'],
    duration: '1-hour',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    popular: true, 
    image: '/buggy.png',
    link: '/tour/1-hour-dune-buggy-tour'
  },
  { 
    price: '1800 AED', 
    title: '2-Hour Can-Am Maverick R MAX (245 HP) Tour (MAX for 4 Seater)', 
    features: ['2-Hour Buggy Ride (245 HP)', 'Hotel Pick-Up', 'Free Camel Ride'],
    duration: '2-hours',
    seats: '1, 2 & 4 Seaters',
    transfer: '300 AED',
    image: '/2-hour.png',
    link: '/tour/2-hour-dune-buggy-adventure'
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
            <div style={{ background: 'rgba(215, 25, 32, 0.1)', border: '1px solid rgba(215, 25, 32, 0.3)', color: '#d71920', padding: '8px 12px', borderRadius: '4px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', marginBottom: '15px', marginTop: '5px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)
            </div>
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
                <div>
                  <small>Duration</small>
                  <strong>{item.duration}</strong>
                </div>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 1 0 7.75" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
                <div>
                  <small>Seats</small>
                  <strong>{item.seats}</strong>
                </div>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
                <div>
                  <small>Private Transfer</small>
                  <strong>{item.transfer}</strong>
                </div>
              </div>
            </div>
            <div className="nhc-actions">
              <a href="#book" className="btn-primary">BOOK NOW</a>
              <a href={item.link || "#details"} onClick={(e) => { if(item.link) { window.location.href = item.link; } }} style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }} className="btn-secondary">TOUR DETAILS</a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
}
