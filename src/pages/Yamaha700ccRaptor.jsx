import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  '1-hour Quad Driving with Guide Assistance',
  'Self Drive Quad Bike',
  'Private Tour: No Other Customers',
  'Climate-Controlled Comfort Lounge',
  'Open area for exploration',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Memorable Stop For Photos',
  'Safety Gear: Helmet & Goggles'
]

const tripInclusions = [
  'Self Drive',
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
  'Men Washroom',
  'Ladies Washroom',
  'Sandboarding'
]

export default function Yamaha700ccRaptor() {
  useEffect(() => {
    document.title = 'Yamaha 700cc Raptor | Speed Desert Adventure'
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
          <SectionHeading eyebrow="YAMAHA 700CC RAPTOR" title="QUAD BIKE TOURS" accent="IN DUBAI" align="center" />
          <p style={{ textAlign: 'center', color: '#fff', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Embark on the ultimate quad biking adventure in Dubai's red dunes. Our Yamaha 700cc Raptor offers unmatched power and thrill for those seeking an adrenaline-pumping experience.
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
              <strong>1 Seater</strong>
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

        <div className="td-gallery-slider-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '40px' }}>
          <div className="td-gallery-slider" style={{ display: 'flex', width: 'max-content', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <img 
                key={idx} 
                src={`/gallery/img-g2-${num}.jpeg`} 
                alt={`Yamaha 700cc Raptor Tour ${num}`} 
                style={{ height: '280px', width: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Yamaha 700cc Raptor" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Embark on an exhilarating adventure across the majestic dunes of Dubai with <strong>Speed Desert Adventure's</strong> premier Red Dunes ATV Tour. Climb aboard the formidable Yamaha 700cc Raptor and let our expert guides lead you through the sprawling, scenic landscapes that the Red Dunes are famous for. This private tour merges the intense thrill of quad biking with the breathtaking beauty of Dubai's golden sands, offering a unique perspective of the desert's vast expanses.</p>
            
            <p>Our 1-hour ATV ride is designed to deliver an unforgettable experience, highlighting the vast desert landscapes in all their splendor. At Speed Desert Adventure, your comfort and safety are paramount. We equip you with high-performance ATVs, meticulously maintained equipment, and all necessary safety gear to ensure your adventure is both thrilling and secure. With flexible booking options and the expert guidance of our experienced team, you're set for a seamless and thrilling desert journey.</p>
            
            <p><strong>Important Safety Information:</strong> Quad biking is an exhilarating self-driven activity that comes with inherent risks. While our tours are covered by activity insurance, it's important to note that this does not extend to personal accidents or damages. Participants must be at least 15 years old and meet specific accessibility criteria to ensure safety. Please bring a valid ID or passport for verification.</p>
            
            <p>At Speed Desert Adventure, we pride ourselves on offering not just fun but a safe, structured environment for an unparalleled desert adventure. Book your private quad biking adventure today and get ready to experience the thrill of the desert like never before!</p>
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
        <SectionHeading title="Yamaha 700cc Raptor" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <tbody>
              <tr>
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><strong>Yamaha 700cc Raptor Quad Bike Ride</strong></td>
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
                <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>1 Seater</td>
              </tr>
              <tr>
                <td style={{ padding: '20px' }}>Quad Ride Time</td>
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
            { q: "How safe is a quad bike?", a: "At Speed Desert Adventure, safety is our top priority. Our quad bikes are meticulously maintained, and every tour includes a comprehensive safety briefing, professional protective gear (helmet, goggles, gloves), and the guidance of an expert desert instructor." },
            { q: "How can I go quad biking in Dubai?", a: "It's easy! Simply book a tour with Speed Desert Adventure online or via WhatsApp. We offer convenient pick-up and drop-off services from your hotel, taking you straight to the stunning red dunes for your adventure." },
            { q: "How much does quad biking in Dubai cost?", a: "Our packages are competitively priced to suit various budgets. For example, our Early Bird and Afternoon Quad Bike tours start from as low as AED 50, while premium packages like the Yamaha 700cc Raptor are available from AED 400." },
            { q: "Are quad bikes legal in Dubai?", a: "Yes, riding quad bikes is completely legal in designated desert areas. We operate in fully authorized zones in the Dubai desert, ensuring a safe, legal, and thrilling off-road experience." },
            { q: "What age is appropriate for Dubai desert quad bike?", a: "We welcome young adventurers starting from the age of 4 for passenger rides. For driving a quad bike independently, riders typically need to be at least 16 years old, depending on the specific vehicle and package chosen." },
            { q: "How many cc is a quad bike?", a: "Our primary fleet for this tour features powerful 620cc quad bikes, offering the perfect balance of speed and control. We also offer 700cc Yamaha Raptors for experienced thrill-seekers looking for extra power." },
            { q: "What should I wear before I go quad biking in Dubai?", a: "We strongly recommend wearing comfortable, breathable clothing such as long pants and long-sleeved shirts to protect against the sun and sand. Sturdy, closed-toe shoes are mandatory for your safety." },
            { q: "Is a quad bike difficult to ride?", a: "Not at all! Quad bikes are fully automatic and very easy to operate. Our expert guides provide a thorough training session before you start, making it perfect for both beginners and seasoned riders." },
            { q: "Is a license required to ride the quad bike?", a: "No, you do not need a driving license to ride our quad bikes in the desert. Our off-road tracks do not require a standard road license." },
            { q: "What is the time duration of quad biking in Dubai desert?", a: "The actual riding time for most of our standard quad bike tours is 60 minutes. However, the total experience—including hotel transfers, safety briefings, and extra activities like camel riding and sandboarding—can take between 3 to 4 hours." },
            { q: "How to pay for quad biking in Dubai?", a: "We offer flexible payment options for your convenience. You can pay securely online during the booking process, or choose to pay in cash or via card directly at our desert camp." },
            { q: "What is the difference between a quad bike and an ATV?", a: "The terms are often used interchangeably! ATV stands for All-Terrain Vehicle, and a quad bike is simply a four-wheeled type of ATV. Both refer to the same thrilling off-road vehicles we use for our desert tours." }
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
