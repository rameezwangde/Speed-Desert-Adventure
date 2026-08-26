import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

const tourInfo = [
  'Private Transfer (Optional)',
  'Polaris RZR 1000XP SPORT',
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

const detailsTable = [
  { label: 'Ticket Price', value: 'AED 400.00' },
  { label: 'Tour Timing', value: '06:00 am to 11:00 am' },
  { label: 'Duration', value: '1-Hour Buggy Drive' },
  { label: 'Seating Options', value: '1, 2 & 4 Seater Options' },
  { label: 'Booking Requirements', value: 'Minimum age of rider: 16+ years' }
]

export default function EarlyBirdBuggyTour() {
  useEffect(() => {
    document.title = 'Early Bird Buggy Tour | Speed Desert Adventure'
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
          <SectionHeading eyebrow="4 SEATER" title="EARLY BIRD" accent="BUGGY TOUR" align="center" />
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
                '/gallery/img-g2-59.jpeg',
                '/gallery/img-g2-60.jpeg',
                '/gallery/img-g2-61.jpeg',
                '/gallery/img-g2-62.jpeg',
                '/gallery/img-g2-63.jpeg',
                '/gallery/img-g2-64.jpeg',
                '/gallery/img-g2-65.jpeg',
                '/gallery/img-g2-66.jpeg',
                '/gallery/img-g2-67.jpeg',
                '/gallery/img-g2-68.jpeg'
              ].map((src, i) => (
                <div className="td-gallery-item" key={`orig-${i}`}>
                  <img src={src} alt="Tour Gallery" loading="lazy" />
                </div>
              ))}
              {[
                '/gallery/img-g2-59.jpeg',
                '/gallery/img-g2-60.jpeg',
                '/gallery/img-g2-61.jpeg',
                '/gallery/img-g2-62.jpeg',
                '/gallery/img-g2-63.jpeg',
                '/gallery/img-g2-64.jpeg',
                '/gallery/img-g2-65.jpeg',
                '/gallery/img-g2-66.jpeg',
                '/gallery/img-g2-67.jpeg',
                '/gallery/img-g2-68.jpeg'
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
          <SectionHeading eyebrow="About" title="Early Bird Buggy" accent="Package" />
          
          <div className="td-text-blocks">
            <p>Kick off your day with the unparalleled excitement of our Early Bird Buggy Tour, perfectly tailored for adventurers eager to witness the enchanting beauty of the Red Dunes at sunrise. Take command of a Polaris RZR 1000cc Sport, a vehicle engineered for peak performance, complete with a Bluetooth sound system to enhance your ride with your favorite tracks as you navigate the shifting sands.</p>
            
            <p>This private tour is the epitome of adrenaline and exclusivity, guided by seasoned professionals who not only prioritize your safety but also provide intriguing insights into the desert's unique ecosystem and geological wonders. Experience the thrill of speeding through the dunes as the early morning sun bathes the sands in a golden glow, creating a perfect backdrop for an unforgettable adventure.</p>

            <p>Embrace the thrill and tranquility of the desert at dawn on this intimate and exhilarating journey, where every moment promises breathtaking views and heart-pounding excitement. Secure your spot on our Early Bird Buggy Tour and create memories that will last a lifetime, experiencing the magic of Dubai's desert like never before!</p>
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
        <SectionHeading title="Early Bird Buggy" accent="Ticket Price & Timing" align="center" />
        <div className="table-wrapper td-table" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
          <table className="custom-table" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th>Early Bird Buggy Package Details</th>
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
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Kickstart your morning with an invigorating Early Bird Buggy Tour, the perfect adventure for solo thrill-seekers, couples, or small groups. Choose from a range of dune buggies, including 1-seater, 2-seater, and 4-seater options, to tailor your experience to your personal or group needs. This private tour offers you an exclusive journey through the vast and stunning landscape of Dubai's Red Dunes, providing a serene and uninterrupted desert adventure.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Before embarking on your adventure, relax in our climate-controlled comfort lounge. Safety is our priority, so all necessary gear, including helmets and goggles, is provided to ensure your experience is both thrilling and secure. For those looking to enrich their desert experience, we offer optional free sandboarding and short camel rides, allowing you to immerse yourself fully in the Arabian desert culture.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Capture the breathtaking beauty of the early morning desert with a photo session on the high dunes, where the early sun bathes the sands in a spectacular golden light. Our flexible pricing options cater to different preferences and budgets, ensuring there's a perfect fit for everyone.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>Enhance your tour with optional private transfers and enjoy complimentary refreshments to make your desert excursion even more enjoyable. Whether you're in for a fast-paced thrill, a serene escape, or a comprehensive desert tour, the Early Bird Buggy Tour offers a unique and memorable adventure.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>Don't miss out on the chance to navigate a high-performance buggy through the mesmerizing landscapes of Dubai's desert. Book your spot today for a personalized, adrenaline-fueled morning filled with stunning scenery and unforgettable moments!</p>
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

    </main>
  )
}
