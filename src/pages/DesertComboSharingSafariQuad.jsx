import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'
import FAQ from '../components/FAQ'
import TourIncludes from '../components/TourIncludes'

const tourInfo = [
  '14:30 to 15:00 Pick up',
  'Sharing Car 4WD',
  'Hotel Pickup and Drop-Off',
  '30-Minute Quad Ride',
  'Self Drive Quad Bike',
  'Air-conditioned vehicle for comfort',
  'Licensed Desert Guide',
  'Red - Dune Bashing 30 minutes',
  'Free sandboarding',
  'Camel ride: 5-10 minutes, with option to extend freely.',
  'Complimentary Water & Soft Drinks',
  'Henna Tattoo (For Ladies Only)',
  'Shisha (In the corner)',
  'Memorable Stop For Photos',
  'BBQ With Buffet Dinner',
  'Shows (Fireshow-Tanoura-Belly Dancing-Yowla)'
]

const tripInclusions = [
  'Self Drive Quad Bike',
  'Dune Bashing (30 mins)',
  'Camel Ride',
  'BBQ Buffet Dinner',
  'Water & Soft Drinks',
  'Live Shows (Belly Dance, Fire, Tanoura)',
  'Henna Tattoo (Ladies)',
  'Shisha',
  'Sandboarding',
  'Hotel Pickup & Drop-Off',
  'Comfortable 4WD Vehicle',
  'Licensed Desert Guide'
]

export default function DesertComboSharingSafariQuad() {
  useEffect(() => {
    document.title = 'Desert Combo: Safari + Quad | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="tour-details-page">
      <section className="td-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/bg-sand.jpg)' }}>
        <a href="/packages" className="td-back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Packages
        </a>
        <div className="td-hero-header">
          <SectionHeading eyebrow="DESERT COMBO:" title="SHARING SAFARI +" accent="QUAD BIKING TOUR" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Embark on an unforgettable adventure where exhilarating excitement meets rich cultural immersion in the heart of Dubai's iconic desert.
          </p>
          <div className="td-hero-price">
            <span className="price-label">AED 99</span>
            <BrushButton href="/#book">Book Now</BrushButton>
          </div>
        </div>

        <div className="td-quick-stats">
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
            <div>
              <small>Duration</small>
              <strong>6 Hour</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
            <div>
              <small>Seats</small>
              <strong>1 Seater</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
            <div>
              <small>Sharing Transfer</small>
              <strong>Free Pick & Drop Off</strong>
            </div>
          </div>
        </div>

        <div className="td-gallery-slider-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '40px' }}>
          <div className="td-gallery-slider" style={{ display: 'flex', width: 'max-content', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <img 
                key={idx} 
                src={`/gallery/img-g2-${num}.jpeg`} 
                alt={`Desert Safari Tour ${num}`} 
                style={{ height: '280px', width: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Desert Combo: Safari + Quad" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Join <strong>Speed Desert Adventure</strong> for an unforgettable Desert Safari Adventure that blends high-octane excitement and rich cultural immersion in the stunning landscape of Dubai's majestic red dunes. Your experience begins with a convenient hotel pickup scheduled between 2:30 PM and 3:00 PM, in a comfortable, shared 4WD vehicle equipped for the rugged desert and guided by a licensed expert skilled in desert navigation.</p>
            
            <p>The adventure kicks off with a thrilling 30-minute dune bashing session, where you'll carve through the golden dunes at exhilarating speeds. Take a moment to pause atop one of the tallest dunes to enjoy breathtaking panoramic views and capture memorable photos. Amp up the excitement by strapping on a sandboard to glide down the soft, sweeping slopes, and enjoy a serene camel ride through the desert landscape, with an option to extend the ride at no additional cost. Ladies will have the opportunity to receive a beautiful henna tattoo, making for a perfect souvenir from the trip.</p>
            
            <p>As the day turns into twilight, retreat to our authentic Bedouin camp for a warm welcome and a cozy evening under the stars. Relax with a session of shisha in a laid-back setting, or simply savor the tranquility of the desert evening. Throughout your adventure, stay refreshed with complimentary beverages and indulge in a sumptuous BBQ buffet dinner that caters to both vegetarian and non-vegetarian preferences. The night comes alive with spectacular live entertainment, including a mesmerizing fire show, the enchanting Tanoura dance, belly dancing performances, and the traditional Yowla dance.</p>
            
            <p>Please note that this adventure may not be suitable for pregnant women, infants under one year, seniors over 70, or those with mobility issues. For optimal comfort, we recommend wearing lightweight shoes suitable for sand, applying sunscreen, and carrying sunglasses or a hat. In cooler months, dressing warmly will enhance your enjoyment of the experience. Be aware that during Ramadan, our entertainment offerings adjust to respect cultural sensitivities, featuring only Tanoura and fire shows.</p>

            <p>Book your Desert Safari Adventure with Speed Desert Adventure today for an unmatched blend of thrill and cultural experience. Don't miss out on this opportunity to create lasting memories in one of the most beautiful desert landscapes in the world!</p>
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

      <section className="td-ticket-prices" style={{ padding: '0 5%', maxWidth: '1200px', margin: '40px auto 80px' }}>
        <SectionHeading title="Desert Combo:" accent="Sharing Safari + Quad Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Desert Combo: Sharing Safari + Quad 1-seater</strong></td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Information</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Ticket Price</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e11924', fontWeight: 'bold' }}>AED 99.00</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Package</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Desert Safari + Quad Bike</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Seating Capacity</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>1-Seater</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Quad Ride Duration</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>30 minutes</td>
              </tr>
              <tr>
                <td style={{ padding: '20px' }}>Total Duration</td>
                <td style={{ padding: '20px' }}>6 Hours</td>
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

      <section className="td-faq-section" style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading title="Frequently Asked" accent="Questions" align="center" />
        <div className="faq-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {[
            { q: "Is hotel pick-up and drop-off included in the package?", a: "Yes! Our Desert Combo package includes a convenient pick-up and drop-off service from your hotel or residence in a comfortable, shared 4WD vehicle." },
            { q: "What should I wear for the Desert Safari and Quad Biking?", a: "We recommend wearing comfortable, loose-fitting clothing and closed-toe shoes suitable for sand. Don't forget to bring sunglasses, a hat, and sunscreen. In cooler months, a light jacket is advisable." },
            { q: "Is prior experience required for quad biking?", a: "No prior experience is necessary. Our quad bikes are fully automatic and easy to handle. Our licensed instructors will provide a comprehensive safety briefing and training before you start." },
            { q: "Can my children participate in this combo tour?", a: "The desert safari and camp activities are family-friendly. However, due to safety regulations, children typically need to be at least 16 years old to drive the quad bikes independently. Younger children may be allowed as passengers on double-seater bikes or buggies." },
            { q: "What kind of food is served at the BBQ buffet?", a: "Our lavish BBQ buffet includes a wide variety of delicious options, catering to both vegetarian and non-vegetarian preferences. You'll enjoy fresh salads, grilled meats, traditional Arabic dishes, and desserts." },
            { q: "Is the desert safari safe for pregnant women or people with back problems?", a: "For safety reasons, dune bashing is not recommended for pregnant women, infants under one year, or individuals with back, neck, or heart conditions. We can arrange for you to skip the dune bashing and be taken directly to the camp to enjoy the other activities." }
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
