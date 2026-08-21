import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const reviews = [
  { name: 'James K.', country: 'United Kingdom', rating: 5, text: 'Absolutely incredible experience! The dunes were massive and the Can-Am Maverick handled them like a dream. Our guide was professional and made sure everyone felt safe while still having an adrenaline-packed ride.' },
  { name: 'Sarah M.', country: 'Australia', rating: 5, text: 'Best desert adventure we\'ve had in Dubai. The buggies are well-maintained and powerful. The sunset views from the top of the dunes were breathtaking. Highly recommend the couples tour!' },
  { name: 'Ahmed R.', country: 'UAE', rating: 5, text: 'I\'ve tried many desert tour operators in Dubai and Speed Desert Adventure is by far the best. Professional team, top-notch vehicles, and incredible routes through the red dunes.' },
  { name: 'Maria L.', country: 'Spain', rating: 5, text: 'We booked the family tour and it was perfect for us with two kids. The guides were patient and made sure everyone had a great time. The 4-seater buggy was comfortable and safe.' },
  { name: 'David C.', country: 'Canada', rating: 5, text: 'The night buggy tour was something else entirely! Driving through the desert under the stars with just the headlights cutting through the darkness. An unforgettable experience.' },
  { name: 'Priya S.', country: 'India', rating: 5, text: 'Amazing service from start to finish. The pickup from our hotel was on time, safety briefing was thorough, and the dune bashing was absolutely thrilling. Will definitely come back!' },
  { name: 'Thomas W.', country: 'Germany', rating: 5, text: 'Booked a group tour for our corporate retreat. Speed Desert Adventure handled everything flawlessly — from logistics to catering. The team loved it. Five stars all the way!' },
  { name: 'Fatima A.', country: 'Saudi Arabia', rating: 5, text: 'The private buggy tour was worth every dirham. We had the entire desert to ourselves with a dedicated guide. The Polaris RZR is an absolute beast on the dunes!' },
  { name: 'Lucas B.', country: 'Brazil', rating: 5, text: 'We did the Red Dunes buggy ride and it was the highlight of our entire Dubai trip. The terrain is stunning and the buggies are powerful enough to tackle even the steepest dunes.' },
  { name: 'Emma T.', country: 'United States', rating: 5, text: 'From the moment we arrived, the team made us feel welcome. Great safety equipment, powerful machines, and the most beautiful desert landscape. Can\'t recommend enough!' },
  { name: 'Khalid M.', country: 'Qatar', rating: 5, text: 'Celebrated my birthday with a custom buggy package. They arranged everything — cake, decorations at the camp, and an incredible sunset drive. Truly special experience.' },
  { name: 'Sophie R.', country: 'France', rating: 5, text: 'The 1-hour self-drive tour was packed with excitement. Our instructor was very supportive and helped us navigate the dunes confidently. Great value for money!' },
]

const row1 = reviews.slice(0, 4)
const row2 = reviews.slice(4, 8)
const row3 = reviews.slice(8, 12)

function Stars({ count }) {
  return <div className="review-stars">{'★'.repeat(count)}</div>
}

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-row">
      <motion.div
        className="marquee-track"
        animate={{ x: direction === 'left' ? [0, -50 * items.length + '%'] : [-50 * items.length + '%', 0] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' } }}
      >
        {doubled.map((r, i) => (
          <div className="review-card" key={i}>
            <Stars count={r.rating} />
            <p className="review-text">"{r.text}"</p>
            <div className="review-author">
              <strong>{r.name}</strong>
              <span>{r.country}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = 'Testimonials | Speed Desert Adventure Dubai'
  }, [])

  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <div className="testimonials-hero-photo" />
        <motion.div className="testimonials-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span>REAL EXPERIENCES</span>
          <h1>What Our<br /><em>Riders Say</em></h1>
          <p>Hundreds of adventurers have trusted Speed Desert Adventure for unforgettable desert experiences.</p>
        </motion.div>
      </section>

      <section className="testimonials-marquee-section">
        <SectionHeading eyebrow="TRUSTED BY RIDERS WORLDWIDE" title="Guest" accent="Reviews" />
        <div className="marquee-container">
          <MarqueeRow items={row1} direction="left" speed={40} />
          <MarqueeRow items={row2} direction="right" speed={45} />
          <MarqueeRow items={row3} direction="left" speed={38} />
        </div>
      </section>

      <section className="testimonials-stats">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <strong>500+</strong><span>Happy riders</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
          <strong>4.9</strong><span>Average rating</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
          <strong>15+</strong><span>Years of service</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <strong>30+</strong><span>Countries served</span>
        </motion.div>
      </section>
    </main>
  )
}
