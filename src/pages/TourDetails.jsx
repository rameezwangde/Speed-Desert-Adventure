import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Can-Am Maverick XR MAX (245 HP Stage 4)',
  '245 Horsepower (Stage 4)',
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

export default function TourDetails() {
  useEffect(() => {
    document.title = 'Can-Am Maverick XRS 26 Tour | Speed Desert Adventure'
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
          <SectionHeading eyebrow="2 & 4 SEATER DUNE BUGGY" title="CAN-AM MAVERICK" accent="XRS 26" align="center" />
          <div className="td-hero-price">
            <span className="price-label">AED 1000 - 1800</span>
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
          <SectionHeading eyebrow="2-4 SEATER DUNE BUGGY" title="Can-Am Maverick" accent="XRS 26 Tour" />
          
          <div className="td-text-blocks">
            <h2>Experience the Ultimate Dune Buggy Tour in Dubai</h2>
            <p>Get ready to conquer the iconic red sands of the Lahbab Desert with <strong>Speed Desert Adventure</strong>. Take the wheel of our high-performance 2-seater or 4-seater <strong>Can-Am Maverick XRS 26 dune buggies</strong>, engineered for extreme off-road terrain. Whether you're a solo thrill-seeker, a couple, or a family, this premium desert safari guarantees unparalleled power, advanced suspension, and exceptional handling for the ultimate adrenaline rush.</p>

            <h2>Unmatched Comfort & Premium Desert Lounge</h2>
            <p>Your off-road adventure goes beyond the drive. Before and after your ride, relax in our exclusive <strong>climate-controlled desert lounge</strong>. Enjoy complimentary chilled water and soft drinks to stay refreshed. Maximize your Dubai desert experience with free optional activities, including an exhilarating sandboarding session or a traditional camel ride.</p>
            
            <h2>Guided Safaris with Top-Tier Safety Standards</h2>
            <p>At <strong>Speed Desert Adventure</strong>, your safety is our utmost priority. We provide all essential protective gear, including sanitized helmets and goggles. Before hitting the dunes, our expert desert instructors conduct a comprehensive safety briefing, ensuring that both beginners and experienced off-roaders can confidently navigate the dramatic Dubai desert landscape in their private tour.</p>
            
            <h2>Hassle-Free Private Transfers Across Dubai</h2>
            <p>For a completely seamless experience, upgrade your booking with our optional <strong>private 4x4 transfer service</strong> for just AED 300. Ideal for families and small groups of up to six passengers, this door-to-door, air-conditioned transport ensures you arrive at our desert base relaxed and ready for your buggy ride, without the stress of navigating the city.</p>
            
            <h2>Book Your Can-Am Maverick XRS 26 Adventure Today</h2>
            <p>Don't settle for a standard desert outing. From towering dune climbs to scenic sunset photo stops, every second of our private tours is designed for excitement and luxury. Secure your <strong>Can-Am Maverick XRS 26 Dune Buggy Tour</strong> today with Dubai's leading off-road operator and create unforgettable memories in the heart of the Arabian Desert.</p>
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
        <SectionHeading title="2 & 4 Seater Dune Buggy" accent="Ticket Prices" align="center" />
        <div className="table-wrapper td-table">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Can-Am Maverick XRS 26 Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ticket Price</strong></td>
                <td>1000 AED (1 Hr) – 1800 AED (2 Hrs)</td>
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
          <p>Bringing more people along? Go for our <a href="/#tour-highlights">4 Seater MAX Dune Buggy Polaris RZR Tour</a> for a fun group ride. For thrill-seekers who want more power and control, the <a href="/#tour-highlights">Can-Am Maverick Buggy Dubai</a> delivers an intense off-road experience.</p>
        </div>
      </section>
    </main>
  )
}
