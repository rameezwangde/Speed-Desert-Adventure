import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Polaris RZR / Can-Am Maverick',
  '1-Hour Buggy Drive',
  'Self Drive Dune Buggy',
  'Climate-Controlled Comfort Lounge',
  'Private Tour',
  'Bluetooth sound system',
  'Experienced instructor',
  'Free sandboarding',
  'Free camel ride (5-10 mins)',
  'Complimentary Refreshments: Water & Soft Drinks',
  'Memorable Stop For Photos',
  'Safety Gear: Helmet & Goggles',
  'Scenic Stop: Capture the Red Dunes High Dune in Photos'
]

const tripInclusions = [
  'Bluetooth Music System',
  'Water & Soft Drinks',
  'Camel Ride',
  'Medication (If Needed)',
  'Climate-Controlled Comfort Lounge',
  'Safety Gears',
  'Expert Driver / Guide',
  'Guided Tour',
  'Car Parking',
  "Children's Play Area",
  'Photo Stop / Opportunities',
  'Souvenir Opportunities',
  'Prayer room- male / female',
  'Washroom- male / female',
  'Sandboarding'
]

export default function OneHourBuggyTour() {
  useEffect(() => {
    document.title = '1-Hour Dune Buggy Tour Dubai | Speed Desert Adventure'
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
          <SectionHeading eyebrow="IMMERSIVE DESERT ADVENTURE" title="1-HOUR" accent="DUNE BUGGY TOUR DUBAI" align="center" />
          <div className="td-hero-price">
            <span className="price-label">AED 800</span>
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
              <strong>1, 2 & 4 Seaters</strong>
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
                '/gallery/img-g2-78.jpeg',
                '/gallery/img-g2-79.jpeg',
                '/gallery/img-g2-80.jpeg',
                '/gallery/img-g2-81.jpeg',
                '/gallery/img-g2-82.jpeg',
                '/gallery/img-g2-83.jpeg',
                '/gallery/img-g2-84.jpeg',
                '/gallery/img-g2-85.jpeg',
                '/gallery/img-g2-86.jpeg',
                '/gallery/img-g2-87.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-78.jpeg',
                '/gallery/img-g2-79.jpeg',
                '/gallery/img-g2-80.jpeg',
                '/gallery/img-g2-81.jpeg',
                '/gallery/img-g2-82.jpeg',
                '/gallery/img-g2-83.jpeg',
                '/gallery/img-g2-84.jpeg',
                '/gallery/img-g2-85.jpeg',
                '/gallery/img-g2-86.jpeg',
                '/gallery/img-g2-87.jpeg'
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
          <SectionHeading eyebrow="Book Your 1, 2-4 Seater" title="Dune Buggy Ride" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Take your desert experience to the next level with our <strong>1-Hour Dune Buggy Ride Dubai</strong>, the perfect balance of adrenaline, exploration, and freedom with <strong>Speed Desert Adventure</strong>. This extended ride is ideal for riders who want more time to explore the dunes and fully experience the thrill of dune buggy driving in <strong>Dubai</strong>.</p>
            
            <p>Set deep within the legendary red dunes of the <strong>Al Lahbab Desert</strong>, this tour allows you to venture farther into the desert, tackle higher dunes, and enjoy longer uninterrupted drives across the vast <strong>Dubai Desert</strong>. With more time on the sand, you'll enjoy scenic photo stops, smooth dune transitions, and an authentic off-road adventure.</p>

            <p>Choose between two world-class dune buggies—the <strong>Can-Am Maverick</strong> or the <strong>Polaris RZR</strong>—both engineered for power, control, and safety. No driving license or prior experience is required; full training and guidance are included.</p>
            
            <h2>Why Choose a 1-Hour Dune Buggy Ride in Dubai?</h2>
            <p>A 1-hour dune buggy tour offers the ideal duration for riders who want a deeper, more immersive desert experience. With extra time, you can explore larger dune fields, enjoy more dynamic driving routes, and truly feel the freedom of off-road adventure in the <strong>Al Lahbab Desert</strong>.</p>
            
            <p>Driving premium machines like the <strong>Can-Am Maverick</strong> or <strong>Polaris RZR</strong> for a full hour gives you the chance to build confidence, improve your driving skills, and enjoy uninterrupted thrills without feeling rushed.</p>
            
            <p>Offered by <strong>Speed Desert Adventure</strong>, this experience is one of the most popular choices for adventure seekers visiting <strong>Dubai</strong> who want more than just a quick ride.</p>
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
        <SectionHeading title="1-Hour Dune Buggy Tour Dubai" accent="Information:" align="center" />
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>1-Hour Dune Buggy Tour Dubai</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ticket Price</strong></td>
                <td>800 AED / Person</td>
              </tr>
              <tr>
                <td><strong>Seating Options</strong></td>
                <td>1, 2, 4 Seaters</td>
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
          <p>Bringing more people along? Go for our <a href="/tour/polaris-rzr-custom">2-4 Seater Dune Buggy Polaris RZR Tour</a> for a fun group ride. For thrill-seekers who want more power and control, the <a href="/tour/can-am-maverick-r-x-rs">2 & 4 Seater Dune Buggy Can-Am Maverick R X RS</a> delivers an intense off-road experience.</p>
        </div>
      </section>
    </main>
  )
}
