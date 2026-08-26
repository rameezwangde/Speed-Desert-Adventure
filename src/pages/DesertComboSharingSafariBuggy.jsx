import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'
import FAQ from '../components/FAQ'
import TourIncludes from '../components/TourIncludes'

const tourInfo = [
  'Sharing Car 4WD',
  '14:30 to 15:00 Pick up',
  '30-Minute Dune Buggy ride',
  'Self Drive Dune Buggy',
  'Red - Dune Bashing 30 minutes',
  'Air-conditioned vehicle for comfort',
  'Hotel Pickup and Drop-Off',
  'Experienced instructor & Licensed Desert Guide',
  'Shisha (In the corner)',
  'BBQ With Buffet Dinner',
  'Free Camel Ride (5-10 mins) + Free sandboarding',
  'Henna Tattoo (For Ladies Only)',
  'Complimentary Water & Soft Drinks',
  'Memorable Stop For Photos',
  'Shows (Fireshow-Tanoura-Belly Dancing-Yowla)'
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
  'Children Play Area',
  'Photo Stop/Opportunities',
  'Souvenir Opportunities',
  'Male/Female Mosques',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

export default function DesertComboSharingSafariBuggy() {
  useEffect(() => {
    document.title = 'Desert Combo: Safari + Buggy | Speed Desert Adventure'
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
          <SectionHeading eyebrow="DESERT COMBO:" title="SHARING SAFARI" accent="DESERT + DUNE BUGGY" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Combine the thrill of dune bashing with a powerful buggy ride across the red dunes, topped off with a traditional Bedouin camp experience.
          </p>
          <div className="td-hero-price">
            <span className="price-label">AED 299</span>
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
              <strong>1, 2 & 4 Seaters</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
            <div>
              <small>Shared Transfer</small>
              <strong>Free Pick & Drop</strong>
            </div>
          </div>
        </div>

        <div className="td-gallery-slider-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '40px' }}>
          <div className="td-gallery-slider" style={{ display: 'flex', width: 'max-content', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <img 
                key={idx} 
                src={`/gallery/img-g2-${num}.jpeg`} 
                alt={`Buggy Safari Tour ${num}`} 
                style={{ height: '280px', width: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Desert Combo: Safari + Dune Buggy" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Are you ready to embark on an unforgettable journey through the enchanting landscapes of Dubai's deserts? At <strong>Speed Desert Adventure</strong>, we've crafted the perfect adventure for thrill-seekers and culture enthusiasts alike: the Desert Combo—Sharing Safari + Dune Buggy Package. This exhilarating package combines the thrill of dune bashing and the exploration of vast sandy expanses in a shared safari experience, topped off with an adrenaline-pumping dune buggy ride. It's the ultimate way to experience the desert, offering both shared experiences and personal adventure, ensuring there's something for everyone.</p>
            
            <p>Your adventure begins the moment we pick you up from your location in Dubai. Settle into our comfortable, air-conditioned 4WD vehicles, designed to handle the rugged desert terrain with ease. As you travel to the heart of the desert, your experienced guide will share insights into the desert's ecology, history, and the customs of its original inhabitants.</p>
            
            <p>Next, take the wheel yourself with our state-of-the-art dune buggies. No experience is more empowering than navigating through the dunes, feeling every bump and dip as you control the buggy across the desert landscape. Our dune buggies are equipped with top safety features, ensuring you feel secure while pushing the limits of speed and agility.</p>

            <p>After the high-energy activities, we'll retreat to a traditional Bedouin camp where the pace slows but the wonder continues. Here, you can relax and enjoy the hospitality of the desert people. Savor a mouth-watering BBQ dinner under the stars, watch live cultural performances like belly dancing and the mesmerizing Tanoura dance, and engage in ancient customs such as henna painting.</p>

            <p>As the evening winds down, relax around the campfire, indulge in some aromatic shisha, or simply lay back and stargaze, letting the tranquility of the desert night wash over you. It's the perfect end to an action-packed day.</p>
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
        <SectionHeading title="Desert Combo:" accent="Safari+Buggy Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Desert Combo: Safari+Buggy Details</strong></td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Information</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Ticket Price</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e11924', fontWeight: 'bold' }}>AED 299.00</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Package</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Desert Safari + Dune Buggy</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Seating capacity</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>1 seater</td>
              </tr>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Buggy Ride Duration</td>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>30min</td>
              </tr>
              <tr>
                <td style={{ padding: '20px' }}>Total Tour Duration</td>
                <td style={{ padding: '20px' }}>6 hours</td>
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
            { q: "Is hotel pick-up and drop-off included in the package?", a: "Yes! Our Desert Combo package includes a convenient pick-up and drop-off service from your hotel or residence in a comfortable, shared 4WD vehicle." },
            { q: "What should I wear for the Desert Safari and Dune Buggy ride?", a: "We recommend wearing comfortable, loose-fitting clothing and closed-toe shoes suitable for sand. Don't forget to bring sunglasses, a hat, and sunscreen. In cooler months, a light jacket is advisable." },
            { q: "Is prior experience required for driving a dune buggy?", a: "No prior experience is necessary. Our dune buggies are fully automatic and easy to handle. Our licensed instructors will provide a comprehensive safety briefing and training before you start." },
            { q: "Can my children participate in this combo tour?", a: "The desert safari and camp activities are family-friendly. However, due to safety regulations, children typically need to be at least 16 years old to drive the dune buggies independently. Younger children may be allowed as passengers." },
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
