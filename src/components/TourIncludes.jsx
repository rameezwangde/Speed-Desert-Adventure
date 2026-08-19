import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const columns = [
  [
    "Private & Shared Transfer",
    "Polaris RZR 1000 cc XP SPORT",
    "Can-Am Maverick R MAX X rs Dune Adventure '26",
    "Sharing Car 4WD",
    "Climate-Controlled Comfort Lounge",
    "Experienced Tour Guide",
    "Water & Soft Drinks",
    "Safety Gear: Helmet & Goggles",
    "Morning, evening & overnight options"
  ],
  [
    "Red Dune Bashing 30 minutes",
    "Air-conditioned vehicle for comfort",
    "Hotel Pickup and Drop-Off",
    "Shisha (In the corner)",
    "BBQ With Buffet Dinner",
    "Henna Tattoo (For Ladies Only)",
    "Backup vehicle support",
    "Full roll cage bucket seat protection",
    "70cc to 1000cc Buggies",
    "Self-Drive training areas"
  ],
  [
    "Complimentary Water & Soft Drinks",
    "Fireshow-Tanoura-Belly Dancing-Yowla Desert Shows",
    "Bluetooth sound system",
    "Free sandboarding",
    "Free camel ride (5-10 mins)",
    "Memorable Stop For Photos",
    "Medication (if needed)",
    "Car parking",
    "Washroom"
  ]
]

export default function TourIncludes() {
  return <section className="includes-section"><SectionHeading eyebrow="GEAR UP / RIDE READY" title="Our Desert Dune Buggy" accent="Tour Includes" align="center" />
    <div className="includes-table">
      {columns.map((col, i) => (
        <div className="includes-col" key={i}>
          {col.map(item => (
            <div className="includes-item" key={item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
}
