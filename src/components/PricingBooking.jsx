import SectionHeading from './SectionHeading'

const packages = [
  { package: 'Package 01', duration: '—', seats: '—', price: 'AED —' },
  { package: 'Package 02', duration: '—', seats: '—', price: 'AED —' },
  { package: 'Package 03', duration: '—', seats: '—', price: 'AED —' },
]

export default function PricingBooking() {
  return <section className="pricing-section" id="pricing">
    <div className="pricing-grid-bg"/>
    <SectionHeading eyebrow="FIND YOUR PERFECT RIDE" title="Speed Desert Adventure" accent="Prices & Booking" />
    <div className="spec-board">
      <div className="spec-row spec-head"><span>Package</span><span>Duration</span><span>Seats</span><span>Starting price</span><span>Book</span></div>
      {packages.map((item, i) => <div className="spec-row" key={item.package}><span data-label="Package"><b>0{i+1}</b>{item.package}</span><span data-label="Duration">{item.duration}</span><span data-label="Seats">{item.seats}</span><span data-label="Price" className="spec-price">{item.price}</span><span data-label="Book"><a href="#contact">Book now <i>→</i></a></span></div>)}
    </div>
    <p className="placeholder-note">PLACEHOLDER STRUCTURE / FINAL PACKAGES AND PRICES TO BE CONFIRMED</p>
  </section>
}
