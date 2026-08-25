import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Stage 4 320 PK Beast: RZR PRO R Ultimate EPS',
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
  'Climate-Controlled Comfort Lounge',
  'Car Parking',
  'Male/Female Mosques',
  'Water',
  'Safety Gears',
  "Children's Play Area",
  'Men Washroom',
  'Camel Ride',
  'Expert Driver',
  'Photo Stop/Opportunities',
  'Ladies Washroom',
  'Medication (If Needed)',
  'Guided Tour',
  'Souvenir Opportunities',
  'Sandboarding'
]

const detailsTable = [
  { label: 'Ticket Price', value: '1399 AED' },
  { label: 'Duration', value: '1-Hour Buggy Drive' },
  { label: 'Seating Options', value: '2 & 4-Seater' },
  { label: 'Tour Timing', value: '07:00 AM - 07:00 PM (Every Hour)' },
  { label: 'Minimum Age of Rider', value: '16+ years' }
]

export default function Stage4Stunner() {
  useEffect(() => {
    document.title = 'Stage 4 Stunner: RZR PRO R Ultimate EPS | Speed Desert Adventure'
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
          <SectionHeading eyebrow="STAGE 4 STUNNER:" title="RZR PRO R ULTIMATE" accent="EPS TOUR DUBAI" align="center" />
          <div className="td-hero-price">
            <span className="price-label">AED 1399</span>
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
              <strong>2 Seaters</strong>
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
          <SectionHeading eyebrow="Book Stage 4 Stunner:" title="RZR PRO R Ultimate EPS" accent="" />
          
          <div className="td-text-blocks">
            <p>Get set for an electrifying trip across Dubai's famed Red Dunes with our premier <strong>Stage 4 320 PK Beast: RZR PRO R Ultimate EPS</strong> buggy tour! This exclusive, private adventure means you won't have to share your ride with anyone else. Seize the controls of our top-of-the-line buggy, outfitted with a Bluetooth sound system, and brace yourself for a high-octane hour exploring the desert.</p>
            
            <p>With our seasoned guides by your side, you'll be well taken care of as you maneuver through the breathtaking desert vistas. You're free to tailor your tour with photo stops whenever you wish, ensuring you can capture the stunning views to remember forever.</p>

            <p>Trust in the agility and comfort of our high-performance buggies, which are engineered to deliver both thrilling speed and smooth rides. Our flexible booking options make it simple to slot this remarkable journey into your itinerary.</p>
            
            <p>Don't miss this chance—book your Stage 4 Beast buggy tour today with <strong>Speed Desert Adventure</strong> and soar through the Red Dunes for an experience you'll never forget!</p>
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
        <SectionHeading title="Stage 4 Stunner: RZR PRO R" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th>Stage 4 Stunner: RZR PRO R Ultimate EPS Details</th>
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

      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '60px 5%', marginTop: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Gear up for an incredible ride across Dubai's famous Red Dunes with our top-tier Stage 4 320 PK Beast: RZR PRO R Ultimate EPS buggy tour! This is a completely private experience, meaning you get the whole adventure to yourself without sharing the buggy. Jump into the driver's seat of our cutting-edge buggy, complete with a Bluetooth sound system, and set off for a heart-pounding hour-long journey through the desert.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Our skilled guides will accompany you every step of the way, ensuring your safety as you explore the awe-inspiring landscapes. You have the freedom to customize your journey, stopping for photos at your leisure to capture the stunning vistas.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>Trust in the power and comfort of our high-performance buggies, engineered for top-notch performance and smooth riding. Thanks to our flexible booking options, it's easy to add this thrilling experience to your Dubai itinerary.</p>
        </div>
      </section>

      <section className="td-inclusions-section" style={{ marginTop: '80px' }}>
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
        <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginTop: '20px' }}>Bringing more people along? Go for our <strong>4 Seater Dune Buggy Polaris RZR Tour</strong> for a fun group ride. For thrill-seekers who want more power and control, the <strong>Can-Am Maverick Buggy Tour</strong> delivers an intense off-road experience.</p>
      </section>

      <section className="td-faq-section" style={{ padding: '20px 5% 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading title="Frequently Asked" accent="Questions" align="center" />
        <div className="faq-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {[
            { q: "How safe is a dune buggy?", a: "At Speed Desert Adventure, safety is our top priority. Our buggies are equipped with roll cages, safety harnesses, and are meticulously maintained. Every tour includes a comprehensive safety briefing and the guidance of an expert desert instructor." },
            { q: "How can I book a dune buggy tour in Dubai?", a: "It's easy! Simply book a tour with Speed Desert Adventure online or via WhatsApp. We offer convenient pick-up and drop-off services from your hotel." },
            { q: "Are dune buggies legal in Dubai?", a: "Yes, riding dune buggies is completely legal in designated desert areas. We operate in fully authorized zones in the Dubai desert, ensuring a safe, legal, and thrilling off-road experience." },
            { q: "What age is appropriate for Dubai desert buggies?", a: "We welcome young adventurers starting from the age of 4 for passenger rides. For driving a buggy independently, drivers typically need to be at least 16 years old." },
            { q: "What should I wear before I go buggy driving?", a: "We strongly recommend wearing comfortable, breathable clothing such as long pants and long-sleeved shirts to protect against the sun and sand. Sturdy, closed-toe shoes are mandatory for your safety." },
            { q: "Is a dune buggy difficult to drive?", a: "Not at all! Our buggies are fully automatic and very easy to operate. Our expert guides provide a thorough training session before you start." },
            { q: "Is a license required to drive the buggy?", a: "No, you do not need a standard road driving license to drive our buggies in the desert. Our off-road tracks do not require a street license." },
            { q: "What is the time duration of buggy tours?", a: "The actual driving time for most of our standard tours is 60 minutes. The total experience including transfers takes around 3 to 4 hours." }
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
