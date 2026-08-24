import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  '620cc Quad Bike Adventure',
  '1-Hour Drive',
  'Self Drive Quad Bike',
  'Private Tour',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Scenic Stop: Capture the Red Dunes High Dune in Photos',
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
  'Male / Female Mosques',
  'Men Washroom',
  'Ladies Washroom',
  'Sandboarding'
]

const packages = [
  { name: 'Yamaha 700cc Raptor', seats: '1-seater', time: '60 min', price: 'AED 400.00' },
  { name: 'Desert Combo: Sharing Safari + Quad', seats: '1-seater', time: '60 min', price: 'AED 99.00' },
  { name: 'Early Bird Quad Bike Tour', seats: '1-seater', time: '60 min', price: 'AED 50.00' },
  { name: 'Early Bird Quad Bike Tour', seats: '2-seater', time: '60 min', price: 'AED 100.00' },
  { name: 'Afternoon Quad Bike Tour', seats: '1-seater', time: '60 min', price: 'AED 50.00' },
  { name: 'Afternoon Quad Bike Tour', seats: '2-seater', time: '60 min', price: 'AED 100.00' },
  { name: 'Red Dunes Quad Tour + Shared Transfer', seats: '1-seater', time: '60 min', price: 'AED 150.00' },
  { name: 'Red Dunes Quad Tour + Shared Transfer', seats: '2-seater', time: '60 min', price: 'AED 200.00' },
  { name: 'Yamaha 700cc Raptor + Shared Transfer', seats: '1-seater', time: '60 min', price: 'AED 650.00' },
]

export default function QuadBike620cc() {
  useEffect(() => {
    document.title = '620cc Quad Bike Tour | Speed Desert Adventure'
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
          <SectionHeading eyebrow="620CC QUAD BIKE" title="QUAD BIKE TOURS" accent="IN DUBAI" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Are you prepared to embark on an unmatched desert expedition? At Speed Desert Adventure, we provide the premier quad biking tour packages in Dubai, immersing you in the stunning scenery and exhilarating adventures of the Arabian Desert.
          </p>
          <div className="td-hero-price">
            <span className="price-label">From AED 50</span>
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
              <strong>1 & 2 Seaters</strong>
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

        <div className="td-gallery">
          <motion.img src="/red-buggy.jpeg" alt="Quad Bike" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
          <motion.img src="/tour-red.png" alt="Quad driving" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} />
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Quad Bike" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Discover the Dubai desert like never before with <strong>Speed Desert Adventure's</strong> premier Quad Bike rental Tours. Whether you're an early riser or someone who loves the glow of a desert sunset, our quad biking adventures are tailored to suit any preference. Start your day with our Early Bird Quad Bike package and relish the calm, cool mornings, or choose the Afternoon Quad Bike experience to journey across Dubai's famous dunes bathed in the warm afternoon sun.</p>
            
            <p>For those who find magic in the day's end, our <strong>Sunset Quad Biking adventure</strong> is a must. It combines the exhilaration of quad biking with the stunning vistas of the desert at dusk, offering a truly spellbinding experience. Our tours utilize powerful and dependable quad bikes, guaranteeing top performance as you navigate through diverse desert terrains. These tours are perfect for both seasoned riders and beginners eager to explore. With self-drive options available, you can take the reins of your adventure, steering through the sands to create an unforgettable journey that's uniquely yours.</p>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="ATV RENTALS DUBAI" title="Premium Dubai Desert" accent="Quad Biking Tours" />
            <div className="td-text-blocks">
              <p>Experience the thrill of an off-road desert safari at your preferred time with <strong>Speed Desert Adventure's</strong> top-rated ATV rentals in Dubai. Whether you crave the crisp morning breeze, the breathtaking golden hour sunset, or a starlit night ride, our custom quad bike tours are designed around your schedule.</p>
              <p>We offer powerful 620cc quad bikes with single or double-seater options, perfect for solo riders or couples looking for a memorable desert excursion. With flexible packages starting at just AED 50, our ATV adventures suit every budget. Book your ultimate Dubai desert quad biking tour today and let us create an unforgettable experience.</p>
            </div>

            <div className="tour-types-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
              <div className="tour-type-card" style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Morning Quad Bike Tour</h4>
                <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Kick off your day with an energizing morning quad bike tour across Dubai's sweeping sand dunes. Enjoy the refreshing desert breeze and peaceful, uncrowded trails under the gentle morning sun. This off-road ATV adventure is perfect for all skill levels, providing an exhilarating start to your Dubai vacation.</p>
              </div>
              <div className="tour-type-card" style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Evening ATV Adventure</h4>
                <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Immerse yourself in the magic of the desert at dusk with our evening ATV adventure. As the sun sets, casting a golden glow over the expansive red dunes, you'll experience cooler temperatures and a truly unique off-road ride. Ideal for adventurers seeking to escape the midday heat.</p>
              </div>
              <div className="tour-type-card" style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Sunset Quad Biking Safari</h4>
                <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Discover the true beauty of the Arabian desert with our sunset quad biking safari. Navigate the majestic dunes bathed in the warm, vibrant colors of the setting sun. This ATV tour perfectly blends high-octane thrills with stunning scenery, offering incredible photo opportunities.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '80px' }}>
            <SectionHeading eyebrow="IMPORTANT INFORMATION" title="Quad Bike Guide:" accent="Safety & Refreshments" />
            <div className="td-text-blocks">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
                  <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Hydration & Refreshments</strong>
                  <span style={{ color: '#ccc', lineHeight: '1.6' }}>We provide complimentary bottled water during all our Dubai desert quad biking tours. Staying hydrated in the desert heat is crucial for maintaining your energy and ensuring a comfortable off-road adventure.</span>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
                  <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Uncompromising Safety Standards</strong>
                  <span style={{ color: '#ccc', lineHeight: '1.6' }}>Your safety is our top priority at Speed Desert Adventure. We enforce strict safety protocols for all ATV rentals to guarantee a secure and thrilling experience.</span>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
                  <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Thorough ATV Training</strong>
                  <span style={{ color: '#ccc', lineHeight: '1.6' }}>Every tour kicks off with a comprehensive briefing. You'll learn how to properly handle the 620cc quad bike and understand all vital off-road safety procedures.</span>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
                  <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Protective Gear Included</strong>
                  <span style={{ color: '#ccc', lineHeight: '1.6' }}>We supply all essential safety gear, including high-quality helmets, goggles, and gloves, ensuring maximum protection while you conquer the dunes.</span>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
                  <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Expert Desert Guides</strong>
                  <span style={{ color: '#ccc', lineHeight: '1.6' }}>Our seasoned guides lead every safari, enforcing best practices and offering immediate support throughout your quad biking journey.</span>
                </li>
              </ul>
            </div>
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
        <SectionHeading title="Quad Bike Dubai" accent="Prices" align="center" />
        <p style={{ textAlign: 'center', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Speed Desert Adventure offers a thrilling assortment of quad bike packages designed for those ready to tackle Dubai's deserts with both speed and flair. Our packages range in price, encompassing various combo deals that combine desert biking with other exciting activities. Whether you're an early riser seeking a sunrise ride or someone looking for an afternoon adventure, we have options tailored for both individual riders and pairs, ensuring an adventure that suits every preference.
        </p>
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Seater Type</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr key={i}>
                  <td><strong>{pkg.name}</strong></td>
                  <td>{pkg.seats}</td>
                  <td>{pkg.time}</td>
                  <td style={{ color: '#e11924', fontWeight: 'bold' }}>{pkg.price}</td>
                </tr>
              ))}
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
    </main>
  )
}
