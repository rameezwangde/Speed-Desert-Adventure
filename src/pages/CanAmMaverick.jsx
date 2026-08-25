import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Can-Am Maverick Buggy Drive',
  '1-Hour Drive',
  'Self Drive Dune Buggy',
  'Private Tour',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Scenic Stop: Capture the Red Dunes',
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
  { name: '25 Can-Am Maverick XRS Dune Buggy', seats: '2 & 4 Seater', time: '1-hour', price: 'AED 700 - 1000' },
  { name: '25 Can-Am Maverick R X RS Dune Buggy', seats: '2 & 4 Seater', time: '1-hour', price: 'AED 899 - 1200' }
]

export default function CanAmMaverick() {
  useEffect(() => {
    document.title = 'Can-Am Maverick Tours | Speed Desert Adventure'
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
          <SectionHeading eyebrow="CAN-AM MAVERICK" title="2 & 4 SEATER" accent="DUNE BUGGY TOURS" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Choose from our premium fleet of Can-Am Maverick buggies. Whether you want a 2-seater or 4-seater, we offer the ultimate off-road adventure in Dubai's red dunes.
          </p>
          <div className="td-hero-price">
            <span className="price-label">From AED 700</span>
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
              <strong>2 & 4 Seaters</strong>
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


      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Can-Am Maverick" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Leave the city behind and head straight into Dubai's most iconic red dunes with <strong>Speed Desert Adventure</strong>. Our desert base is strategically located near the legendary Lahbab Desert and Al Badayer (Big Red), giving you fast access to towering dunes and wide-open sand tracks just minutes from the main routes.</p>
            
            <p>Choose between two high-performance buggy experiences, each designed to deliver a different level of desert domination. Take control of the <strong>25 Can-Am Maverick XRS Dune Buggy</strong>, engineered for aggressive dune carving, precision handling, and adrenaline-filled rides across Dubai's red sands. Or elevate your adventure with the <strong>25 Can-Am Maverick R X RS Dune Buggy</strong>, built with advanced suspension, race-inspired engineering, and next-level stability for riders seeking the ultimate off-road performance.</p>

            <p>Both buggy options are available with <strong>2-seater and 4-seater configurations</strong>, making them ideal for solo drivers, couples, or groups of family and friends. Every tour is self-drive and guide-led, allowing you to enjoy full control of your buggy while following expertly planned routes tailored to your driving confidence. Choose your preferred timing—cool sunrise rides, golden-hour sunset adventures, or evening drives under the desert sky.</p>

            <p>Before hitting the dunes, our professional team provides a comprehensive safety briefing along with high-quality helmets and goggles to ensure a secure and confident ride. Complimentary bottled water keeps you refreshed, while carefully selected photo stops allow you to capture unforgettable moments against the dramatic backdrop of the Arabian Desert.</p>

            <p>For added convenience, optional private hotel pickup is available across Dubai, including popular areas such as Dubai Marina, Downtown Dubai, JBR, and Deira. Our Can-Am buggies are meticulously maintained and equipped with roll cages, harnesses, and advanced safety features to deliver a smooth, powerful, and confidence-inspiring ride every time.</p>

            <p>Ready to carve the red dunes with one of Dubai's most powerful dune buggy experiences? Choose your Can-Am Maverick XRS or Maverick R X RS, select your seating and duration, and let <strong>Speed Desert Adventure</strong> set the perfect line across Dubai's most thrilling desert terrain.</p>
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

      <section className="td-essential-tips" style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto 40px' }}>
        <SectionHeading eyebrow="PREPARATION" title="Essential Tips" accent="Before Your Tour" align="center" />
        <p style={{ textAlign: 'center', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>Whether it's your first time riding or you're a seasoned off-roader, here is what you need to know to ensure your buggy trip is safe and spectacular:</p>
        <ul style={{ color: '#ccc', lineHeight: '1.6', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Dress Appropriately', desc: 'Choose long sleeves, comfortable pants, and mandatory closed-toe shoes to protect against the sun and sand.' },
            { title: 'Master the Basics', desc: 'Pay close attention during the brief training session to familiarize yourself with starting, operating, and safely stopping your buggy.' },
            { title: 'Follow the Rules', desc: 'Safety is paramount. Always listen to your guide\'s instructions and avoid risky maneuvers on challenging terrains.' },
            { title: 'Sun Protection', desc: 'The desert climate is harsh. Drink plenty of water, apply high-SPF sunscreen, and wear a hat or scarf to guard against sunburn.' },
            { title: 'Respect Environment', desc: 'Stick to the marked trails to avoid harming local flora and fauna, preserving the pristine nature of the Dubai desert.' },
            { title: 'Capture the Moment', desc: 'Bring your camera! There will be plenty of designated scenic stops to snap incredible photos of the majestic red dunes.' }
          ].map((tip, i) => (
            <li key={i} style={{ listStyle: 'none', background: '#111', padding: '25px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <strong style={{ color: '#e11924', fontSize: '19px' }}><span style={{ color: '#fff', marginRight: '6px' }}>{i + 1}.</span> {tip.title}</strong>
              <span style={{ fontSize: '15px' }}>{tip.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="td-ticket-prices">
        <SectionHeading title="Can-Am Maverick" accent="Prices" align="center" />
        <p style={{ textAlign: 'center', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Speed Desert Adventure offers a thrilling assortment of buggy packages designed for those ready to tackle Dubai's deserts with both speed and flair. Choose from our 2-seater and 4-seater premium Can-Am Maverick models.
        </p>
        <div className="table-wrapper td-table">
          <table className="custom-table" style={{ minWidth: '100%' }}>
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

      <section className="td-faq-section" style={{ padding: '20px 5% 0px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading title="Frequently Asked" accent="Questions" align="center" />
        <div className="faq-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {[
            { q: "How safe is a dune buggy?", a: "At Speed Desert Adventure, safety is our top priority. Our buggies are equipped with roll cages, safety harnesses, and are meticulously maintained. Every tour includes a comprehensive safety briefing and the guidance of an expert desert instructor." },
            { q: "How can I book a dune buggy tour in Dubai?", a: "It's easy! Simply book a tour with Speed Desert Adventure online or via WhatsApp. We offer convenient pick-up and drop-off services from your hotel." },
            { q: "Are dune buggies legal in Dubai?", a: "Yes, riding dune buggies is completely legal in designated desert areas. We operate in fully authorized zones in the Dubai desert, ensuring a safe, legal, and thrilling off-road experience." },
            { q: "What age is appropriate for Dubai desert buggies?", a: "We welcome young adventurers starting from the age of 4 for passenger rides. For driving a buggy independently, drivers typically need to be at least 16 years old." },
            { q: "What should I wear before I go buggy driving?", a: "We strongly recommend wearing comfortable, breathable clothing such as long pants and long-sleeved shirts to protect against the sun and sand. Sturdy, closed-toe shoes are mandatory for your safety." },
            { q: "Is a dune buggy difficult to drive?", a: "Not at all! Our Can-Am Maverick buggies are fully automatic and very easy to operate. Our expert guides provide a thorough training session before you start." },
            { q: "Is a license required to drive the buggy?", a: "No, you do not need a standard road driving license to drive our buggies in the desert. Our off-road tracks do not require a street license." },
            { q: "What is the time duration of buggy tours?", a: "The actual driving time for most of our standard tours is 60 minutes, though we offer 30-minute and 120-minute options. The total experience including transfers takes around 3 to 4 hours." }
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
