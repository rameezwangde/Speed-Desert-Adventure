import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Polaris RZR Dune Buggy Tour',
  '1-Hour Buggy Drive (Custom durations available)',
  'Self Drive Dune Buggy (Guide-led)',
  'Solo, 2-Seater, or 4-Seater Options',
  'Safety briefing included',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Scenic Stop: Capture the Red Dunes in Photos',
  'Safety Gear: Helmet & Goggles'
]

const tripInclusions = [
  'Water',
  'Camel Ride',
  'Medication (If Needed)',
  'Climate-Controlled Comfort Lounge',
  'Safety Gears',
  'Expert Driver / Guide',
  'Guided Tour',
  'Car Parking',
  "Children's Play Area",
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Male / Female Mosques',
  'Men Washroom',
  'Ladies Washroom',
  'Sandboarding'
]

export default function PolarisRZRCustom() {
  useEffect(() => {
    document.title = 'Polaris RZR Dune Buggy Tour | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="tour-details-page">
      <section className="td-hero">
        <a href="/" className="td-back-button" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Tours
        </a>
        <div className="td-hero-header">
          <SectionHeading eyebrow="CUSTOM TOUR" title="POLARIS RZR" accent="DUNE BUGGY TOUR" align="center" />
          <div className="td-hero-price">
            <span className="price-label">AED 400</span>
            <BrushButton href="/#book">Book Now</BrushButton>
          </div>
        </div>

        <div className="td-quick-stats">
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
            <div>
              <small>Duration</small>
              <strong>1-Hour</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
            <div>
              <small>Seats</small>
              <strong>1, 2 & 4 Seaters</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
            <div>
              <small>Private Transfer (4x4)</small>
              <strong>300 AED</strong>
            </div>
          </div>
        </div>

        <div className="td-gallery">
          <motion.img src="/polaris-buggy.jpg" alt="Polaris RZR" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
          <motion.img src="/buggy-duo.jpg" alt="Buggy duo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} />
          <motion.img src="/tour-four-seat.png" alt="Group buggy tour" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} />
          <motion.img src="/tour-red.png" alt="Desert ride" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience The Thrill" title="Polaris RZR" accent="Dune Buggy Dubai" />
          
          <div className="td-text-blocks">
            <h2>Swap the City for the Red Dunes</h2>
            <p>Swap the city for the red dunes of Al Badayer (Big Red) and Lahbab on a <strong>Polaris RZR dune buggy</strong> built for Dubai's sand. Our base is just off the Dubai-Hatta Road (E44), so you're on the dunes within minutes.</p>
            
            <h2>Choose Your Ultimate Setup</h2>
            <p>Pick your setup—<strong>1-seater buggy</strong> (solo control), <strong>2-seater buggy</strong> (share the wheel), or <strong>4-seater</strong> (family & friends). Every ride is <strong>guide-led, self-drive</strong>, with routes paced to your skill: sunrise cool, golden-hour sunset, or night runs under the stars.</p>

            <h2>Unrivaled Safety and Comfort</h2>
            <p>We include a safety briefing, helmets/goggles, water, photo stops, and optional <strong>Dubai hotel pickup</strong> (Marina, Downtown, JBR, Deira). Well-maintained Polaris RZR 1000/XP dune buggy rental models, roll cages, and harnesses keep it confident and fun.</p>
            
            <h2>Ready to Carve Al Badayer?</h2>
            <p>Ready to carve Al Badayer with our dune buggy Dubai packages? Choose your seat count and duration, and we'll set a clean line across Dubai's most iconic dunes. Book your Polaris RZR tour today for an unforgettable desert adventure.</p>
          </div>
        </div>

        <aside className="td-sidebar">
          <div className="td-info-card">
            <h3>Tour Information</h3>
            <ul className="td-checklist">
              {tourInfo.map((info, idx) => (
                <li key={idx}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e11924" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="td-ticket-prices">
        <SectionHeading title="Polaris RZR Dune Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Polaris RZR Tour Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ticket Price</strong></td>
                <td>400 AED (Custom packages available)</td>
              </tr>
              <tr>
                <td><strong>Seating Options</strong></td>
                <td>1, 2, and 4-Seaters</td>
              </tr>
              <tr>
                <td><strong>Duration</strong></td>
                <td>1-Hour Buggy Drive (Adjustable)</td>
              </tr>
              <tr>
                <td><strong>Tour Timing</strong></td>
                <td>06:00 am, Every Hour until 08:00 pm</td>
              </tr>
              <tr>
                <td><strong>Booking Requirements</strong></td>
                <td>Minimum age of rider: 16+ years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="td-inclusions-section">
        <SectionHeading title="Trip" accent="Inclusions" align="center" />
        <div className="td-inclusions-grid">
          {tripInclusions.map((inclusion, idx) => (
            <div className="td-inclusion-item" key={idx}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <polyline points="9 12 12 15 16 9" />
              </svg>
              <span>{inclusion}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="td-recommended-tours">
        <SectionHeading title="Recommended" accent="Tours" align="center" />
        <div className="td-recommended-content">
          <p>Looking for a different ride? Try our <a href="/tour/can-am-maverick-r-x-rs">Can-Am Maverick R X RS Tour</a> for extreme performance and a 2026 model experience.</p>
        </div>
      </section>
    </main>
  )
}
