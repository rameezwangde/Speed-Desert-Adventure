import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="about" id="about">
      
      <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [.22,1,.36,1] }}><span>UAE / 25.2048° N</span></motion.div>
      <motion.div className="about-copy" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }}>
        <span className="eyebrow">Speed Desert Adventure</span>
        <h2>Premium desert<br/><em>adventure tours UAE</em></h2>
        <p>At <strong>Speed Desert Adventure</strong>, we deliver the ultimate dune buggy rental experience in Dubai, UAE. As a premier local tour operator, we specialize in high-adrenaline desert safari buggy tours across the iconic Al Badayer Red Dunes. Whether you're seeking a thrilling off-road adventure or a scenic desert escape, our expertly guided tours offer the perfect blend of speed, safety, and unforgettable memories.</p>
        <p>Experience the thrill of the desert in our premium fleet of late-model dune buggies. We feature the powerful Can-Am Maverick and the rugged Polaris RZR, equipped with high-performance 1000cc engines specifically tuned for Dubai's challenging terrain. From solo riders to families and large groups, <strong>Speed Desert Adventure</strong> has the perfect off-road vehicle to match your group size and comfort preferences.</p>
        <p>Customize your Dubai desert safari with our flexible options, including morning, afternoon, sunset, and night dune buggy tours. Enjoy private or shared rides led by professional guides who tailor the pace to your experience level. We complete your journey with top-tier hospitality, providing sanitized safety gear, complimentary refreshments, and optional add-ons like sandboarding and camel rides. Choose <strong>Speed Desert Adventure</strong> for the most trusted, action-packed, and best-priced dune buggy tours in Dubai.</p>
        <div className="tech-labels"><span>Guided tours</span><span>High-performance buggies</span><span>Beginner friendly</span></div>
      </motion.div>
    </section>
  )
}
