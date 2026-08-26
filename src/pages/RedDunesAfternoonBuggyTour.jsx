import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Polaris RZR 1000XP SPORT',
  '1-Hour Buggy Drive',
  'Self Drive Dune Buggy',
  'Private Tour',
  'Bluetooth sound system',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Memorable Stop For Photos',
  'Safety Gear: Helmet & Goggles'
]

const tripInclusions = [
  'Bluetooth Music System',
  'Water',
  'Camel Ride',
  'Medication (If Needed)',
  'Climate-Controlled Comfort Lounge',
  'Safety Gears',
  'Expert Driver',
  'Guided Tour',
  'Car Parking',
  "Children's Play Area",
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

const detailsTable = [
  { label: 'Ticket Price', value: 'AED 400.00' },
  { label: 'Seating Options', value: '1, 2 & 4 Seater' },
  { label: 'Duration', value: '1-Hour Buggy Drive' },
  { label: 'Tour Timing', value: '12:00 pm to 05:00 pm' },
  { label: 'Booking Requirements', value: 'Minimum age of rider: 16+ years' }
]

export default function RedDunesAfternoonBuggyTour() {
  useEffect(() => {
    document.title = 'Red Dunes Afternoon Buggy Tour | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="tour-details-page">
      <section className="td-hero">
        <a href="/packages" className="td-back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Packages
        </a>
        <div className="td-hero-header">
          <SectionHeading eyebrow="RED DUNES AFTERNOON" title="BUGGY" accent="TOUR" align="center" />
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
              <strong>1 Hour</strong>
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
              <small>Private Transfer</small>
              <strong>300 AED</strong>
            </div>
          </div>
        </div>

        <div className="td-gallery-slider-wrapper">
          <div className="td-gallery-slider">
            <div className="td-gallery-track">
              {[
                '/gallery/img-g2-69.jpeg',
                '/gallery/img-g2-70.jpeg',
                '/gallery/img-g2-71.jpeg',
                '/gallery/img-g2-72.jpeg',
                '/gallery/img-g2-73.jpeg',
                '/gallery/img-g2-74.jpeg',
                '/gallery/img-g2-75.jpeg',
                '/gallery/img-g2-76.jpeg',
                '/gallery/img-g2-77.jpeg',
                '/gallery/img-g2-78.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-69.jpeg',
                '/gallery/img-g2-70.jpeg',
                '/gallery/img-g2-71.jpeg',
                '/gallery/img-g2-72.jpeg',
                '/gallery/img-g2-73.jpeg',
                '/gallery/img-g2-74.jpeg',
                '/gallery/img-g2-75.jpeg',
                '/gallery/img-g2-76.jpeg',
                '/gallery/img-g2-77.jpeg',
                '/gallery/img-g2-78.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`dup-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="About" title="Red Dunes Afternoon" accent="Buggy Package" />
          
          <div className="td-text-blocks">
            <p>Feel the excitement of Dubai's desert on our Red Dunes Afternoon Buggy Tour. Hop into a Polaris RZR 1000cc Sport buggy, complete with a Bluetooth sound system, and set off on a guided tour across the golden sands and soaring dunes. Our seasoned guides will provide a personalized and secure journey during this exclusive one-hour adventure.</p>
            
            <p>Enjoy the ride with complete peace of mind in our high-performance buggies, which are rigorously maintained to ensure your utmost safety and comfort. With flexible booking options available to accommodate your busy schedule, there's never been a better time to book your spot for an unforgettable journey. Secure your tour today and explore the stunning natural beauty of Dubai's desert landscape!</p>
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
        <SectionHeading title="Red Dunes Afternoon" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th>Red Dunes Afternoon Buggy Tour Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              {detailsTable.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.label}</strong></td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '40px 5%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Are you up for tackling the dynamic terrains of Dubai's desert? Our Dune Buggy Adventure is perfect for thrill-seekers, whether you're flying solo or cruising with friends or family. Choose from our 1-seater, 2-seater, or 4-seater buggies, all equipped with the robust Polaris RZR 1000XP SPORT model, engineered for both excitement and comfort on the sandy trails.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Safety and comfort are at the heart of our tours. Experience a private adventure exclusive to your group, with no outsiders. Our experienced instructors will lead you through the dunes, providing top-notch guidance and tips to maximize your enjoyment behind the wheel. Each buggy also features a Bluetooth sound system, so you can choose the perfect soundtrack for your desert escapade.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>Enhance your outing with some traditional desert activities. Enjoy complimentary sandboarding and a quick camel ride, both wonderful additions to your dune buggy experience. Before and after your adventure, unwind in our climate-controlled lounge and stay refreshed with complimentary bottled water. Set off on your desert journey with us and make memories that will last a lifetime!</p>
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
      
      <section style={{ padding: '60px 5% 80px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <SectionHeading eyebrow="More Options" title="Recommended" accent="Tours" align="center" />
        <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginTop: '20px' }}>Bringing more people along? Go for our <strong>4 Seater Dune Buggy Polaris RZR Tour</strong> for a fun group ride. For thrill-seekers who want more power and control, the <strong>Can-Am Maverick Buggy Dubai</strong> delivers an intense off-road experience.</p>
      </section>

    </main>
  )
}
