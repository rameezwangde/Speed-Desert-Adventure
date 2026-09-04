import SectionHeading from './SectionHeading'

export default function PricingBooking() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid-bg" />
      <SectionHeading eyebrow="SPEED DESERT ADVENTURE" title="Dune Buggy Rental Dubai" accent="Prices & Packages" />

      <div className="pricing-intro">
        <p>Looking for the best dune buggy rental prices in Dubai? <strong>Speed Desert Adventure</strong> offers flexible, budget-friendly packages tailored to your off-road needs. With starting rates from just <strong>AED 299</strong> to premium experiences up to <strong>AED 1399</strong>, our pricing depends on your choice of vehicle, seating capacity, and ride duration.</p>
        <p>Drive the desert in style with our elite fleet of <strong>2026-model off-road buggies</strong>. Whether you choose the high-adrenaline <strong>Can-Am Maverick</strong> or the rugged <strong>Polaris RZR</strong>, we guarantee a safe, exhilarating, and premium desert safari experience for all our guests.</p>
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
            <tr><td>Can-Am Maverick R MAX X rs '26</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 1000-1300</td></tr>
            <tr><td>Can-Am Maverick X3</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 700-900</td></tr>
            <tr><td>DESERT COMBO: sharing safari + can-am X3 (dinner show + bbq dinner)</td><td>2-4 seater</td><td>1 person</td><td>30-Minute Can-Am X3 Ride</td><td>AED 499</td></tr>
            <tr><td>Early Bird Buggy tour</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 400</td></tr>
            <tr><td>Night Riders: Dune Buggy Dubai Adventure</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 400</td></tr>
            <tr><td>Red Dunes Afternoon Buggy</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 400</td></tr>
            <tr><td>Red Dunes Buggy Ride + Shared Transfer</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 650</td></tr>
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
            <tr><td>Polaris RZR Dune Buggy</td><td>1 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>200 AED</td><td>400 AED</td><td>600 AED</td><td>800 AED</td></tr>
            <tr><td>Polaris RZR Dune Buggy</td><td>2 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>200 AED</td><td>400 AED</td><td>600 AED</td><td>800 AED</td></tr>
            <tr><td>Polaris RZR Dune Buggy</td><td>4 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>200 AED</td><td>400 AED</td><td>600 AED</td><td>800 AED</td></tr>
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
            <tr><td>Can-Am Maverick R XRS</td><td>1-2 Persons</td><td>Maverick R XRS (240 HP)</td><td>1000 CC</td><td>600 AED</td><td>899 AED</td><td>1,500 AED</td><td>1,898 AED</td></tr>
            <tr><td>Can-Am Maverick R XRS</td><td>Up to 4 Persons</td><td>Maverick R XRS (240 HP)</td><td>1000 CC</td><td>700 AED</td><td>1,200 AED</td><td>1,900 AED</td><td>2,500 AED</td></tr>
            <tr><td>Can-Am Maverick XRS 26</td><td>1-2 Persons</td><td>Maverick XRS 26 (200 HP)</td><td>1000 CC</td><td>400 AED</td><td>700 AED</td><td>1,200 AED</td><td>1,650 AED</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
