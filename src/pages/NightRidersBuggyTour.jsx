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
  { label: 'Duration', value: '1-Hour Buggy Drive' },
  { label: 'Seating Options', value: '1, 2 & 4 Seater' },
  { label: 'Minimum Age of Rider', value: '16+ years' }
]

export default function NightRidersBuggyTour() {
  useEffect(() => {
    document.title = 'Night Riders: Dune Buggy Dubai Adventure | Speed Desert Adventure'
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
          <SectionHeading eyebrow="NIGHT RIDERS:" title="NIGHT DUNE" accent="BUGGY DUBAI" align="center" />
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
                '/gallery/img-g2-79.jpeg',
                '/gallery/img-g2-80.jpeg',
                '/gallery/img-g2-81.jpeg',
                '/gallery/img-g2-82.jpeg',
                '/gallery/img-g2-83.jpeg',
                '/gallery/img-g2-84.jpeg',
                '/gallery/img-g2-85.jpeg',
                '/gallery/img-g2-86.jpeg',
                '/gallery/img-g2-87.jpeg',
                '/gallery/img-g2-88.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-79.jpeg',
                '/gallery/img-g2-80.jpeg',
                '/gallery/img-g2-81.jpeg',
                '/gallery/img-g2-82.jpeg',
                '/gallery/img-g2-83.jpeg',
                '/gallery/img-g2-84.jpeg',
                '/gallery/img-g2-85.jpeg',
                '/gallery/img-g2-86.jpeg',
                '/gallery/img-g2-87.jpeg',
                '/gallery/img-g2-88.jpeg'
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
          <SectionHeading eyebrow="About" title="Night Dune Buggy" accent="Dubai" />
          
          <div className="td-text-blocks">
            <p>Prepare for an unforgettable night under the stars with our Night Riders Dune Buggy Tour in Dubai! Step into the driver's seat of a Polaris RZR 1000cc Sport buggy, complete with a Bluetooth sound system to blast your favorite tunes and a professional light bar that turns night into day, lighting up the dunes for your thrilling ride. Led by our expert guides, this private tour offers you and your group a secure, exclusive, and adrenaline-filled journey through the desert's nocturnal beauty.</p>
            
            <p>Our high-performance buggies are rigorously maintained to ensure both your comfort and safety throughout the ride. Our knowledgeable guides are on hand to make sure your adventure goes off without a hitch. With flexible booking options, we make it easy to include this exhilarating experience in your Dubai travel plans.</p>

            <p>Don't miss out on this extraordinary nighttime adventure—book your spot now with Speed Desert Adventure and get ready to forge unforgettable memories under the starlit desert sky!</p>
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
        <SectionHeading title="Night Riders Buggy Tour" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th>Night Riders: Dune Buggy Dubai Adventure Details</th>
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
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Are you up for a thrilling escapade under the stars? Our Night Riders: Dune Buggy Dubai Adventure offers an electrifying evening deep in the desert's embrace! Seize the controls of a Polaris RZR 1000XP Sport buggy, engineered for peak performance and ultimate comfort. Whether you're flying solo, with a partner, or in a group with our 1-seater, 2-seater, or 4-seater options, we've got the perfect buggy to suit your adventure needs. This private tour is exclusively yours, allowing for a completely personalized and exhilarating experience with just you and your chosen companions.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>We know schedules can be tight, which is why we provide flexible booking times for our Night Riders tour. Choose a slot that fits your itinerary and gear up for an unforgettable night of exploration and excitement in Dubai's enchanting desert. Led by our expert guides and with all safety equipment provided, you can immerse yourself in the adventure while we take care of everything else.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>Don't miss out on this unique opportunity to create lasting memories beneath the starry desert sky. Book your Night Riders adventure now for a night of adrenaline that you'll remember forever!</p>
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
        <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginTop: '20px' }}>Bringing more people along? Go for our <strong>4 Seater MAX Dune Buggy Polaris RZR Tour</strong> for a fun group ride. For thrill-seekers who want more power and control, the <strong>Can-Am Maverick Buggy Dubai</strong> delivers an intense off-road experience.</p>
      </section>

    </main>
  )
}
