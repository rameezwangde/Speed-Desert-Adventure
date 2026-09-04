import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Can-Am Maverick R X RS Dune Adventure \'26',
  '1-Hour Buggy Drive',
  'Self Drive Dune Buggy',
  'Private Tour',
  'Bluetooth sound system',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Free bottled water',
  'Scenic Stop: Capture the Red Dunes High Dune in Photos',
  'Safety Gear: Helmet & Goggles'
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
  "Children's Play Area",
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

export default function CanAmMaverickRXRS() {
  useEffect(() => {
    document.title = 'Can-Am Maverick R X RS Tour | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="tour-details-page">
      <section className="td-hero">
        <a href="/" className="td-back-button" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Tours
        </a>
        <div className="td-hero-header">
          <SectionHeading eyebrow="CAN-AM MAVERICK R X RS" title="SMART-SHOX" accent="DUNE BUGGY TOUR" align="center" />
          <div className="td-hero-price">
            <span className="price-label">AED 1000</span>
            <BrushButton href="/#book">Book Now</BrushButton>
          </div>
        </div>

        <div className="td-quick-stats">
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" /></svg>
            <div>
              <small>Duration</small>
              <strong>1-Hour</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" /><circle cx="9" cy="7" r="4" strokeWidth="2" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" /></svg>
            <div>
              <small>Seats</small>
              <strong>2 & 4 Seaters</strong>
            </div>
          </div>
          <div className="td-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e11924"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2" /><circle cx="7" cy="17" r="2" strokeWidth="2" /><path d="M9 17h6" strokeWidth="2" /><circle cx="17" cy="17" r="2" strokeWidth="2" /></svg>
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
                '/gallery/img-g2-49.jpeg',
                '/gallery/img-g2-50.jpeg',
                '/gallery/img-g2-51.jpeg',
                '/gallery/img-g2-52.jpeg',
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-54.jpeg',
                '/gallery/img-g2-55.jpeg',
                '/gallery/img-g2-56.jpeg',
                '/gallery/img-g2-57.jpeg',
                '/gallery/img-g2-58.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-49.jpeg',
                '/gallery/img-g2-50.jpeg',
                '/gallery/img-g2-51.jpeg',
                '/gallery/img-g2-52.jpeg',
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-54.jpeg',
                '/gallery/img-g2-55.jpeg',
                '/gallery/img-g2-56.jpeg',
                '/gallery/img-g2-57.jpeg',
                '/gallery/img-g2-58.jpeg'
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
          <SectionHeading eyebrow="2 Seater 2026" title="Can-Am Maverick" accent="R X RS Tour" />

          <div className="td-text-blocks">
            <h2>The Ride of Your Life in Dubai's Red Dunes</h2>
            <p>Get set for the ride of your life with <strong>Speed Desert Adventure</strong>, your premier destination for top-notch dune buggy tours in Dubai. Jump behind the wheel of our state-of-the-art <strong>2026 Can-Am Maverick R X RS buggies</strong> and take off into the stunning Lahbab desert. Whether you're in it for the exhilaration or just to enjoy the spectacular scenery, our guided tours promise an experience you'll never forget.</p>

            <h2>Immerse Yourself in the Iconic Desert Landscape</h2>
            <p>Immerse yourself in the iconic Red Dunes of Dubai, where breathtaking adventure meets stunning natural beauty. The dramatic landscapes and vibrant sands make our <strong>Can-Am buggy tours</strong> the ultimate blend of thrill and wonder, ensuring an adventure that's truly one of a kind. Join us at <strong>Speed Desert Adventure</strong> and prepare to be amazed!</p>

            <h2>Unrivaled Power and Cutting-Edge Safety</h2>
            <p>Prepare yourself for an adrenaline-fueled ride with Dubai's most formidable buggies—the <strong>Can-Am Maverick R X RS</strong>. These beasts are equipped with powerful engines, cutting-edge safety features, and Bluetooth sound systems, providing an unrivaled dune-bashing experience. Customize your journey with stops to capture the stunning golden sunset or to explore the breathtaking expanses of the dunes. This adventure is designed to resonate with your bold spirit!</p>

            <h2>Why Choose Speed Desert Adventure?</h2>
            <p><strong>Premium Vehicles:</strong> Master the dunes in our elite Maverick R MAX buggies.<br />
              <strong>Expert Guides:</strong> Our enthusiastic guides ensure your experience is safe, fun, and memorable.<br />
              <strong>Tailored Adventures:</strong> Whether you crave high-octane dune bashing or a peaceful desert tour, we cater to all thrill levels.<br />
              <strong>Safety First:</strong> Our rigorous safety measures mean you can enjoy the adventure with peace of mind.<br />
              <strong>Effortless Booking:</strong> Book your desert escapade online in just a few easy steps.</p>

            <h2>Book Your Desert Escapade Today</h2>
            <p>Don't miss out! Book your adventure today with <strong>Speed Desert Adventure</strong> and see why our Can-Am Maverick R MAX tour is the pinnacle of desert experiences in Dubai. Dive into the majestic Red Dunes, feel the power of the buggy beneath you, and make memories that will last forever. Come and join us on this incredible journey—your ultimate desert adventure awaits!</p>
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
        <SectionHeading title="Can-Am Maverick R MAX '26 Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>2026 Can-Am Maverick R MAX Tour Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ticket Price</strong></td>
                <td>899 AED – 1200 AED</td>
              </tr>
              <tr>
                <td><strong>Seating Options</strong></td>
                <td>2/4-Seaters</td>
              </tr>
              <tr>
                <td><strong>Duration</strong></td>
                <td>1-Hour Buggy Drive</td>
              </tr>
              <tr>
                <td><strong>Tour Timing</strong></td>
                <td>06:00 am, Every Hour until 08:00 pm</td>
              </tr>
              <tr>
                <td><strong>Booking Requirements</strong></td>
                <td>Minimum age of rider: 16+ years</td>
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

      <section className="td-recommended-tours">
        <SectionHeading title="Recommended" accent="Tours" align="center" />
        <div className="td-recommended-content">
          <p>Bringing more people along? Go for our <a href="/#tour-highlights">4 Seater Dune Buggy Polaris RZR Tour</a> for a fun group ride. For thrill-seekers who want more power and control, the <a href="/#tour-highlights">Can-Am Maverick Buggy Dubai</a> delivers an intense off-road experience.</p>
        </div>
      </section>
    </main>
  )
}
