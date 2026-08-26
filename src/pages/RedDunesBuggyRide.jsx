import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  '1-Hour Drive',
  'Red Dunes Buggy Adventure',
  'Lahbab Desert Route',
  'Experienced guide',
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

export default function RedDunesBuggyRide() {
  useEffect(() => {
    document.title = 'Red Dunes Buggy Ride | Speed Desert Adventure'
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
          <SectionHeading eyebrow="RED DUNES" title="BUGGY RIDE" accent="IN DUBAI" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Take on the towering red sand dunes with our specially crafted Red Dunes Buggy Ride.
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
                '/gallery/img-g2-48.jpeg',
                '/gallery/img-g2-49.jpeg',
                '/gallery/img-g2-50.jpeg',
                '/gallery/img-g2-51.jpeg',
                '/gallery/img-g2-52.jpeg',
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-54.jpeg',
                '/gallery/img-g2-55.jpeg',
                '/gallery/img-g2-56.jpeg',
                '/gallery/img-g2-57.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-48.jpeg',
                '/gallery/img-g2-49.jpeg',
                '/gallery/img-g2-50.jpeg',
                '/gallery/img-g2-51.jpeg',
                '/gallery/img-g2-52.jpeg',
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-54.jpeg',
                '/gallery/img-g2-55.jpeg',
                '/gallery/img-g2-56.jpeg',
                '/gallery/img-g2-57.jpeg'
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
          <SectionHeading eyebrow="Experience" title="Red Dunes" accent="Buggy Ride" />
          
          <div className="td-text-blocks">
            <p>Take on the towering red dunes of Lahbab Desert with our <strong>Red Dunes Buggy Ride</strong>, one of the most thrilling off-road experiences in Dubai. These legendary dunes are known for their striking color and challenging terrain, making them the perfect playground for adventure lovers.</p>
            <p>Feel the surge of adrenaline as you power over steep slopes, race across open sand, and take in panoramic desert views.</p>
            <p>With high-performance buggies, safety-trained guides, and routes tailored for maximum excitement, every ride is a mix of heart-pounding action and breathtaking scenery.</p>
            <p>Whether you're an experienced rider or trying dune bashing for the first time, our Red Dunes Buggy Ride delivers the ultimate Arabian Desert adventure.</p>
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
        <SectionHeading title="Red Dunes Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Red Dunes Buggy Ride</strong></td>
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
            { q: "What makes the Red Dunes different?", a: "The Lahbab Desert, also known as the Red Dunes, features sand with a striking reddish-orange hue due to iron oxide. It also has much larger, steeper dunes compared to other areas, making it the absolute best spot for thrilling off-road dune bashing." },
            { q: "Do I need experience to drive on these challenging dunes?", a: "No, you don't need any prior experience. Our buggies are highly capable and easy to drive. Plus, our expert guides will lead you through the dunes safely and provide all necessary instructions." },
            { q: "Is the buggy ride safe?", a: "Yes, completely safe. Our high-performance buggies feature robust roll cages, 4-point safety harnesses, and we provide you with helmets and goggles. Our guides are trained extensively in desert safety protocols." },
            { q: "Can I bring a camera or phone on the ride?", a: "Yes, you can bring a phone or camera. However, because the ride is very bumpy and the sand can get everywhere, we recommend securing them in a zipped pocket or bag while driving." },
            { q: "What should I wear?", a: "Wear comfortable, breathable clothing and closed-toe shoes (trainers or sneakers). Avoid sandals or flip-flops. Sunglasses and sunscreen are highly recommended to protect against the sun and sand." },
            { q: "Are kids allowed on the Red Dunes ride?", a: "Yes, children can participate as passengers, but we recommend they be at least 4-5 years old due to the intense nature of the dune bashing. The driver must be at least 16 years old." }
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
