import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Polaris RZR SPORT EPS / Can-Am Maverick',
  '30 Min Buggy Drive',
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

export default function ThirtyMinBuggyRide() {
  useEffect(() => {
    document.title = '30-Minute Dune Buggy Ride Dubai | Speed Desert Adventure'
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
          <SectionHeading eyebrow="QUICK ADVENTURE" title="30-MINUTE" accent="DUNE BUGGY RIDE DUBAI" align="center" />
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
              <strong>30 Min</strong>
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
                '/gallery/img-g2-1.jpeg', 
                '/gallery/img-g2-14.jpeg', 
                '/gallery/img-g2-31.jpeg', 
                '/gallery/img-g2-42.jpeg', 
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-64.jpeg',
                '/gallery/img-g2-75.jpeg',
                '/gallery/img-g2-86.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-1.jpeg', 
                '/gallery/img-g2-14.jpeg', 
                '/gallery/img-g2-31.jpeg', 
                '/gallery/img-g2-42.jpeg', 
                '/gallery/img-g2-53.jpeg',
                '/gallery/img-g2-64.jpeg',
                '/gallery/img-g2-75.jpeg',
                '/gallery/img-g2-86.jpeg'
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
          <SectionHeading eyebrow="Book Your 1, 2-4 Seater" title="Dune Buggy Tour" accent="in Dubai" />
          
          <div className="td-text-blocks">
            <p>Experience pure adrenaline with our <strong>30-Minute Dune Buggy Ride Dubai</strong>, the perfect introduction to off-road adventure with <strong>Speed Desert Adventure</strong>. This short yet action-packed ride is ideal for first-time riders, thrill seekers with limited time, or anyone looking to add excitement to their <strong>Dubai</strong> trip.</p>
            
            <p>Set in the iconic red dunes of the <strong>Al Lahbab Desert</strong>, this experience lets you take control of a powerful dune buggy and race across rolling dunes under expert supervision. You'll enjoy breathtaking desert views, adrenaline-filled climbs, and smooth descents—all within a perfectly timed 30-minute adventure.</p>

            <p>Choose between our two high-performance buggies: the <strong>Can-Am Maverick</strong> or the <strong>Polaris RZR</strong>, both built for power, safety, and desert control. No license or prior experience is required—just show up ready for fun.</p>
            
            <h2>Why Choose a 30-Minute Dune Buggy Ride in Dubai?</h2>
            <p>A 30-minute dune buggy ride is the ideal choice for travelers who want maximum excitement in minimal time while exploring the iconic <strong>Al Lahbab Desert</strong>. This experience delivers a concentrated dose of adventure across the red dunes of the <strong>Dubai Desert</strong>, making it perfect for first-time riders, short-stay visitors, and adrenaline lovers.</p>
            
            <p>Riding a high-performance buggy like the <strong>Can-Am Maverick</strong> or <strong>Polaris RZR</strong> allows you to experience steep dune climbs, smooth descents, and panoramic desert views—without committing to a long tour. It's an efficient, thrilling way to enjoy dune buggy Dubai adventures while keeping your schedule flexible.</p>
            
            <p>Offered by <strong>Speed Desert Adventure</strong>, this ride combines professional guidance, full safety support, and world-class desert terrain, making it one of the most popular choices for visitors in <strong>Dubai</strong> who want an unforgettable desert experience without spending hours in the dunes.</p>
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
        <SectionHeading title="30-Minute Dune Buggy Ride Dubai" accent="Information:" align="center" />
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>30-Minute Dune Buggy Ride Dubai</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ticket Price</strong></td>
                <td>400 AED / Person</td>
              </tr>
              <tr>
                <td><strong>Seating Options</strong></td>
                <td>1, 2, 4 Seaters</td>
              </tr>
              <tr>
                <td><strong>Duration</strong></td>
                <td>30 Min Buggy Drive</td>
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
