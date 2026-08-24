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

        <div className="td-gallery-slider-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '40px' }}>
          <div className="td-gallery-slider" style={{ display: 'flex', width: 'max-content', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
              <img 
                key={idx} 
                src={`/gallery/img-g2-${num}.jpeg`} 
                alt={`Quad Bike Tour ${num}`} 
                style={{ height: '280px', width: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="td-content-section">
        <div className="td-main-content">
          <SectionHeading eyebrow="Experience" title="Quad Bike" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Discover the Dubai desert like never before with <strong>Speed Desert Adventure's</strong> premier Quad Bike rental Tours. Whether you're an early riser or someone who loves the glow of a desert sunset, our quad biking adventures are tailored to suit any preference. Start your day with our Early Bird Quad Bike package and relish the calm, cool mornings, or choose the Afternoon Quad Bike experience to journey across Dubai's famous dunes bathed in the warm afternoon sun.</p>
            
            <p>For those who find magic in the day's end, our <strong>Sunset Quad Biking adventure</strong> is a must. It combines the exhilaration of quad biking with the stunning vistas of the desert at dusk, offering a truly spellbinding experience. Our tours utilize powerful and dependable quad bikes, guaranteeing top performance as you navigate through diverse desert terrains. These tours are perfect for both seasoned riders and beginners eager to explore. With self-drive options available, you can take the reins of your adventure, steering through the sands to create an unforgettable journey that's uniquely yours.</p>
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

      <section className="td-quad-guide" style={{ padding: '0 5%', maxWidth: '1200px', margin: '80px auto' }}>
        <SectionHeading eyebrow="IMPORTANT INFORMATION" title="Quad Bike Guide:" accent="Safety & Refreshments" align="center" />
        <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
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
          <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
            <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Age & Health Considerations</strong>
            <span style={{ color: '#ccc', lineHeight: '1.6' }}>We welcome adventurers from age 4 and up. However, for safety reasons, we do not recommend our tours for pregnant women or individuals with severe back, joint, or heart conditions.</span>
          </li>
          <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
            <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Strict Behavioral & Safety Policies</strong>
            <span style={{ color: '#ccc', lineHeight: '1.6' }}>We enforce a strict zero-tolerance policy for intoxication. All riders must adhere to guide instructions; reckless driving is strictly prohibited to ensure the safety of all guests.</span>
          </li>
          <li style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e11924' }}>
            <strong style={{ color: '#fff', fontSize: '18px', display: 'block', marginBottom: '8px' }}>Tour Customization</strong>
            <span style={{ color: '#ccc', lineHeight: '1.6' }}>Customize your adventure with private or group tour options. We are happy to accommodate special requests, including specific scenic stops for photography.</span>
          </li>
        </ul>
      </section>

      <section className="td-premium-tours" style={{ padding: '0 5%', maxWidth: '1200px', margin: '80px auto' }}>
        <SectionHeading eyebrow="ATV RENTALS DUBAI" title="Premium Dubai Desert" accent="Quad Biking Tours" align="center" />
        <div className="td-text-blocks" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <p>Experience the thrill of an off-road desert safari at your preferred time with <strong>Speed Desert Adventure's</strong> top-rated ATV rentals in Dubai. Whether you crave the crisp morning breeze, the breathtaking golden hour sunset, or a starlit night ride, our custom quad bike tours are designed around your schedule.</p>
          <p>We offer powerful 620cc quad bikes with single or double-seater options, perfect for solo riders or couples looking for a memorable desert excursion. With flexible packages starting at just AED 50, our ATV adventures suit every budget. Book your ultimate Dubai desert quad biking tour today and let us create an unforgettable experience.</p>
        </div>

        <div className="tour-types-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '50px' }}>
          <div className="tour-type-card" style={{ background: '#111', padding: '40px 30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Morning Quad Bike Tour</h4>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Kick off your day with an energizing morning quad bike tour across Dubai's sweeping sand dunes. Enjoy the refreshing desert breeze and peaceful, uncrowded trails under the gentle morning sun. This off-road ATV adventure is perfect for all skill levels, providing an exhilarating start to your Dubai vacation.</p>
          </div>
          <div className="tour-type-card" style={{ background: '#111', padding: '40px 30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Evening ATV Adventure</h4>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Immerse yourself in the magic of the desert at dusk with our evening ATV adventure. As the sun sets, casting a golden glow over the expansive red dunes, you'll experience cooler temperatures and a truly unique off-road ride. Ideal for adventurers seeking to escape the midday heat.</p>
          </div>
          <div className="tour-type-card" style={{ background: '#111', padding: '40px 30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#e11924', fontSize: '22px', marginBottom: '15px' }}>Sunset Quad Biking Safari</h4>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.6' }}>Discover the true beauty of the Arabian desert with our sunset quad biking safari. Navigate the majestic dunes bathed in the warm, vibrant colors of the setting sun. This ATV tour perfectly blends high-octane thrills with stunning scenery, offering incredible photo opportunities.</p>
          </div>
        </div>
      </section>

      <section className="td-fleet-options" style={{ padding: '0 5%', maxWidth: '1200px', margin: '40px auto 80px' }}>
        <SectionHeading eyebrow="FLEET OPTIONS" title="Single & Double" accent="Seater Quad Bikes" align="center" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '40px' }}>
          <div style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '15px' }}>Single Seater Quad Bikes</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Embark on an independent desert journey with <strong>Speed Desert Adventure</strong>, Dubai's premier destination for single-seater quad bike tours. Tailored for thrill-seekers who prefer to explore at their own pace, our tours put you in complete control as you navigate the expansive red dunes. Recognized for combining excitement with competitive pricing, our single-rider experiences are perfect for both seasoned riders and confident beginners.</p>
          </div>
          <div style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '15px' }}>Double Seater Quad Bikes</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Share the exhilaration of the Dubai desert with someone special on our double-seater quad bike tours. Perfect for couples or friends, these tours offer a fantastic opportunity to bond while exploring the majestic landscape together. We prioritize your safety and enjoyment, ensuring every aspect of the tour is designed for a comfortable and memorable shared adventure.</p>
          </div>
        </div>
      </section>

      <section className="td-essential-tips" style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto 40px' }}>
        <SectionHeading eyebrow="PREPARATION" title="Essential Tips" accent="Before Your Tour" align="center" />
        <p style={{ textAlign: 'center', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>Whether it's your first time riding or you're a seasoned off-roader, here is what you need to know to ensure your quad biking trip is safe and spectacular:</p>
        <ul style={{ color: '#ccc', lineHeight: '1.6', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Dress Appropriately', desc: 'Choose long sleeves, comfortable pants, and mandatory closed-toe shoes to protect against the sun and sand.' },
            { title: 'Master the Basics', desc: 'Pay close attention during the brief training session to familiarize yourself with starting, operating, and safely stopping your quad bike.' },
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

      <section className="td-faq-section" style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
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
