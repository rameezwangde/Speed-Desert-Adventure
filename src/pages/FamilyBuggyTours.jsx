import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  '1-Hour Drive',
  'Family Buggy Adventure',
  'Guided or Self Drive Options',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Scenic Stop for Photos',
  'Safety Gear: Helmet & Goggles'
]

const tripInclusions = [
  'Water',
  'Camel Ride',
  'Medication (If Needed)',
  'Climate-Controlled Comfort Lounge',
  'Safety Gears',
  'Expert Guide',
  'Guided Tour',
  'Car Parking',
  "Children's Play Area",
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

export default function FamilyBuggyTours() {
  useEffect(() => {
    document.title = 'Family & Kids Buggy Rides | Speed Desert Adventure'
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
          <SectionHeading eyebrow="FAMILY & KIDS" title="BUGGY RIDES" accent="IN DUBAI" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Journey together through the golden dunes of the Arabian Desert in complete safety and comfort.
          </p>
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
              <strong>1, 2, and 4 seater</strong>
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
                '/gallery/img-g2-8.jpeg',
                '/gallery/img-g2-9.jpeg',
                '/gallery/img-g2-10.jpeg',
                '/gallery/img-g2-11.jpeg',
                '/gallery/img-g2-12.jpeg',
                '/gallery/img-g2-13.jpeg',
                '/gallery/img-g2-14.jpeg',
                '/gallery/img-g2-15.jpeg',
                '/gallery/img-g2-16.jpeg',
                '/gallery/img-g2-17.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-8.jpeg',
                '/gallery/img-g2-9.jpeg',
                '/gallery/img-g2-10.jpeg',
                '/gallery/img-g2-11.jpeg',
                '/gallery/img-g2-12.jpeg',
                '/gallery/img-g2-13.jpeg',
                '/gallery/img-g2-14.jpeg',
                '/gallery/img-g2-15.jpeg',
                '/gallery/img-g2-16.jpeg',
                '/gallery/img-g2-17.jpeg'
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
          <SectionHeading eyebrow="Experience" title="Family & Kids" accent="Buggy Rides" />
          
          <div className="td-text-blocks">
            <p>Make your desert adventure unforgettable with our <strong>Family Buggy Tours</strong>, designed especially for families with kids. Journey together through the golden dunes of the Arabian Desert, taking in stunning views and enjoying the thrill of the ride — all in complete safety and comfort.</p>
            <p>Our safe, well-maintained buggies are equipped with safety harnesses for every passenger, and our experienced guides handle the driving so you can sit back, relax, and focus on the fun. From the excitement of gentle dune bashing to the beauty of wide-open desert landscapes, there's something for everyone to enjoy.</p>
            <p>Whether it's your first time in the desert or your family's favorite tradition, our guided family buggy tours promise laughter, adventure, and memories you'll treasure long after the sand has settled.</p>
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

      <section className="td-ticket-prices" style={{ padding: '0 5%', maxWidth: '1200px', margin: '40px auto 0' }}>
        <SectionHeading title="Family Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Family Buggy Tour</strong></td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Information</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Ticket Price</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e11924', fontWeight: 'bold' }}>AED 400.00</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Total Duration</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>1 Hour</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Seating Capacity</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>1, 2, and 4 seater</td>
              </tr>
              <tr>
                <td style={{ padding: '20px' }}>Buggy Ride Time</td>
                <td style={{ padding: '20px' }}>60 Minutes</td>
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

      <section className="td-faq-section" style={{ padding: '20px 5% 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading title="Frequently Asked" accent="Questions" align="center" />
        <div className="faq-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {[
            { q: "Is the buggy ride safe for children?", a: "Yes, our family buggy tours are designed with safety as the highest priority. We use well-maintained 4-seater buggies equipped with proper safety harnesses, and the driving is handled by our experienced guides or at a controlled pace." },
            { q: "Can we bring infants on the buggy ride?", a: "Due to the bumpy nature of dune bashing, we generally recommend this activity for children who are at least 3-4 years old. Please contact us to discuss options for families with infants, as we can arrange a more gentle, flat-terrain ride." },
            { q: "Can parents take turns driving?", a: "Absolutely! If you prefer a self-drive experience rather than a guided drive, parents with a valid driver's license can take turns driving while the kids enjoy the ride safely strapped in the back seats." },
            { q: "What should the kids wear?", a: "We recommend comfortable, loose-fitting clothing and closed-toe shoes. Sunglasses are essential to protect their eyes from the sand, and we strongly suggest applying sunscreen before the tour." },
            { q: "Are car seats provided?", a: "While the buggies have standard safety harnesses, they are not equipped with traditional child car seats. Children must be large enough to safely use the provided harnesses." },
            { q: "Are the other camp activities kid-friendly?", a: "Yes! Kids absolutely love the short camel rides, playing in the sand, and trying out sandboarding. Our desert experience is highly rated by families." }
          ].map((faq, i) => (
            <details key={i} style={{ background: '#111', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', cursor: 'pointer', height: 'fit-content' }}>
              <summary style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.q}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e11924" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '20px' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <p style={{ color: '#ccc', marginTop: '15px', lineHeight: '1.6', fontSize: '15px' }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
