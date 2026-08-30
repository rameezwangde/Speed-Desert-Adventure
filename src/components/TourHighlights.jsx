import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const tours = [
  { 
    price: '1000 AED', 
    title: 'Can-Am Maverick XR (245 HP Stage 4)', 
    copy: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR. 1 hr: 1000 AED | 2 hrs: 1800 AED.",
    duration: '1 - 2 Hours', 
    seats: '2 & 4 Seaters', 
    transferType: 'Private Transfer',
    transfer: '300 AED', 
    image: '/image.png',
    link: '/tour/can-am-maverick-xrs-26'
  },
  { 
    price: '1000 AED', 
    title: "Can-am Buggy Maverick R X rs: '26 Smart-Shox!", 
    copy: 'Immerse yourself in our Night Riders Buggy Adventure for a unique desert experience.',
    duration: '1-hour', 
    seats: '2 & 4 Seaters', 
    transferType: 'Private Transfer',
    transfer: '300 AED', 
    image: '/red-buggy.jpeg',
    link: '/tour/can-am-maverick-r-x-rs'
  },
  { 
    price: '400 AED', 
    title: 'Polaris RZR 1000 CC (145 HP)', 
    copy: 'Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC. 1 hr: 400 AED | 2 hrs: 700 AED.',
    duration: '1 - 2 Hours', 
    seats: '1, 2 & 4 Seaters', 
    transferType: 'Private Transfer',
    transfer: '300 AED', 
    image: '/polaris-rzr-custom.png',
    link: '/tour/polaris-rzr-custom'
  }
]

export default function TourHighlights() {
  return <section className="tour-highlights" id="tour-highlights">

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
    <div className="hourly-grid">
      {tours.map((tour, i) => (
        <motion.article className="hourly-card" key={i} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .12, duration: .7, ease: [.22,1,.36,1] }}>
          <div className="nhc-image-wrap">
            <img src={tour.image} alt={tour.title} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'none', opacity: 1 }} />
            <div className="nhc-price">{tour.price}</div>
          </div>
          <div className="nhc-body">
            <h3 className="nhc-title">{tour.title}</h3>
            <p style={{ color: '#999', fontSize: '16px', lineHeight: '1.4', textAlign: 'center', marginBottom: '25px' }}>{tour.copy}</p>
            
            <div className="nhc-specs">
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
                <div>
                  <small>Duration</small>
                  <strong>{tour.duration}</strong>
                </div>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
                <div>
                  <small>Seats</small>
                  <strong>{tour.seats}</strong>
                </div>
              </div>
              <div className="nhc-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
                <div>
                  <small>{tour.transferType}</small>
                  <strong>{tour.transfer}</strong>
                </div>
              </div>
            </div>
            <div className="nhc-actions">
              <a href="#book" className="btn-primary">BOOK NOW</a>
              <a href={tour.link || "#details"} onClick={(e) => { if(tour.link) { window.location.href = tour.link; } }} style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }} className="btn-secondary">TOUR DETAILS</a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
}
