import SectionHeading from './SectionHeading'

export default function PricingBooking() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid-bg"/>
      <SectionHeading eyebrow="FIND YOUR PERFECT RIDE" title="Speed Desert Adventure" accent="Prices & Booking" />
      
      <div className="pricing-intro">
        <p>Wondering how much a dune buggy ride costs in Dubai? We offer a variety of Speed Desert Adventure packages, with prices starting at <strong>AED 399</strong> and going up to <strong>AED 1499</strong>, depending on factors like buggy seating type, number of participants, and ride duration.</p>
        <p>Our fleet includes the latest <strong>2026-model buggies</strong>, such as the <strong>Can-Am Maverick</strong> and <strong>Polaris RZR</strong>, ensuring a high-quality ride for every guest.</p>
      </div>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Dune Buggy Packages</th>
              <th>Seater Type</th>
              <th>Persons</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Can-Am Maverick R MAX X rs '26</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 900-1300</td></tr>
            <tr><td>Can-Am Maverick XRS 26</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 800-1000</td></tr>
            <tr><td>Stage 4 Stunner: RZR PRO R Ultimate EPS</td><td>4-seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 1499</td></tr>
            <tr><td>Desert Combo: Sharing Safari + Dune Buggy</td><td>1-seater</td><td>1 person</td><td>30-Minute Dune Buggy Ride</td><td>AED 399</td></tr>
            <tr><td>Early Bird Buggy tour</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 500</td></tr>
            <tr><td>Night Riders: Dune Buggy Dubai Adventure</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 500</td></tr>
            <tr><td>Red Dunes Afternoon Buggy</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 500</td></tr>
            <tr><td>Red Dunes Buggy Ride + Shared Transfer</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 750</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="table-title">Polaris RZR Dune Buggy Prices</h3>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Experience</th>
              <th>Seating Capacity</th>
              <th>Model</th>
              <th>Engine</th>
              <th>30 Min</th>
              <th>1 Hour</th>
              <th>90 Min</th>
              <th>2 Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Polaris RZR Dune Buggy</td><td>1 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>300 AED</td><td>500 AED</td><td>700 AED</td><td>900 AED</td></tr>
            <tr><td>Polaris RZR Dune Buggy</td><td>2 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>300 AED</td><td>500 AED</td><td>700 AED</td><td>900 AED</td></tr>
            <tr><td>Polaris RZR Dune Buggy</td><td>4 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>300 AED</td><td>500 AED</td><td>700 AED</td><td>900 AED</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="table-title">Can-am Maverick Dune Buggy Prices</h3>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Experience</th>
              <th>Persons</th>
              <th>Model</th>
              <th>Engine</th>
              <th>30 Min</th>
              <th>1 Hour</th>
              <th>90 Min</th>
              <th>2 Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Can-Am Maverick R XRS</td><td>1-2 Persons</td><td>Maverick R XRS (240 HP)</td><td>1000 CC</td><td>700 AED</td><td>999 AED</td><td>1,600 AED</td><td>1,998 AED</td></tr>
            <tr><td>Can-Am Maverick R XRS</td><td>Up to 4 Persons</td><td>Maverick R XRS (240 HP)</td><td>1000 CC</td><td>800 AED</td><td>1,300 AED</td><td>2,000 AED</td><td>2,600 AED</td></tr>
            <tr><td>Can-Am Maverick XRS 26</td><td>1-2 Persons</td><td>Maverick XRS 26 (200 HP)</td><td>1000 CC</td><td>500 AED</td><td>800 AED</td><td>1,300 AED</td><td>1,750 AED</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
