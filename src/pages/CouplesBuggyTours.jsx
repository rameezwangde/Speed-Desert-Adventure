import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  '1-Hour Drive',
  'Romantic Dune Buggy Adventure',
  'Private Tour for Couples',
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
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

export default function CouplesBuggyTours() {
  useEffect(() => {
    document.title = 'Couples Buggy Tours | Speed Desert Adventure'
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
          <SectionHeading eyebrow="COUPLES" title="BUGGY TOURS" accent="IN DUBAI" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Experience the desert like never before with our Couple Buggy Tours, created for those who love both adventure and each other.
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
              <strong>2 seater</strong>
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
                '/gallery/img-g2-18.jpeg',
                '/gallery/img-g2-19.jpeg',
                '/gallery/img-g2-20.jpeg',
                '/gallery/img-g2-21.jpeg',
                '/gallery/img-g2-22.jpeg',
                '/gallery/img-g2-23.jpeg',
                '/gallery/img-g2-24.jpeg',
                '/gallery/img-g2-25.jpeg',
                '/gallery/img-g2-26.jpeg',
                '/gallery/img-g2-27.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-18.jpeg',
                '/gallery/img-g2-19.jpeg',
                '/gallery/img-g2-20.jpeg',
                '/gallery/img-g2-21.jpeg',
                '/gallery/img-g2-22.jpeg',
                '/gallery/img-g2-23.jpeg',
                '/gallery/img-g2-24.jpeg',
                '/gallery/img-g2-25.jpeg',
                '/gallery/img-g2-26.jpeg',
                '/gallery/img-g2-27.jpeg'
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
          <SectionHeading eyebrow="Experience" title="Couples Buggy" accent="Tours" />
          
          <div className="td-text-blocks">
            <p>Experience the desert like never before with our <strong>Couple Buggy Tours</strong>, created for those who love both adventure and each other. Just you, your partner, and the endless golden dunes of the Arabian Desert stretching out before you.</p>
            <p>As the sun sinks toward the horizon, the light turns warm and magical — the perfect backdrop for your shared adventure.</p>
            <p>This is more than just a ride. It's private time together, dune bashing side by side, pausing to take in breathtaking views, and making memories that feel as vast as the desert itself.</p>
            <p>Whether you're marking an anniversary, celebrating something special, or simply escaping the city for a romantic evening, our couple buggy tours are designed to make every moment count.</p>
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
        <SectionHeading title="Couples Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Couples Buggy Tour</strong></td>
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
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>2 seater</td>
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
            { q: "Is the Couples Buggy Tour private?", a: "Yes, our Couples Buggy Tour is a completely private experience. It will just be you and your partner in a 2-seater buggy, accompanied by a dedicated private guide in a separate lead vehicle." },
            { q: "Can we switch drivers during the tour?", a: "Absolutely! As long as both of you have valid identification and meet the driving requirements, you are welcome to switch drivers so you both get a turn behind the wheel." },
            { q: "Do we need prior experience to drive?", a: "No prior experience is necessary. Our 2-seater buggies are automatic and easy to drive. Your private guide will provide a full briefing before you set off." },
            { q: "Is this a good idea for an anniversary or proposal?", a: "It's a fantastic idea! The desert provides a stunning, romantic backdrop, especially during sunset. If you have a special request or are planning a proposal, let us know and we'll help make it unforgettable." },
            { q: "What should we wear?", a: "We recommend comfortable, casual clothing and closed-toe shoes. For sunset tours, you might want to bring a light jacket as the desert can cool down quickly after the sun sets." },
            { q: "Are photos included?", a: "While we don't provide a professional photographer as standard, your private guide will be more than happy to take plenty of photos and videos of you both at the most scenic spots in the desert." }
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
