import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="about" id="about">
      
      <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [.22,1,.36,1] }}><span>UAE / 25.2048° N</span></motion.div>
      <motion.div className="about-copy" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }}>
        <span className="eyebrow">Speed Desert Adventure</span>
        <h2>Premium desert<br/><em>adventure tours UAE</em></h2>
        <p>Looking for the best dune buggy adventure experience in Dubai, UAE? Welcome to Speed Desert Adventure, your trusted local tour operator for dune buggy rides in Dubai, offering high-adrenaline desert safari buggy tours across the world-famous Al Badayer Desert. Set in the heart of the Red Dunes Desert Safari, our tours deliver the perfect blend of speed, scenery, and authentic off-road adventure.</p>
        <p>We operate a premium fleet of latest 2026-model dune buggies, including the powerful Can-Am Maverick (2-4 seater) and the rugged Polaris RZR (1-4 seater), all equipped with 1000cc high-performance engines built for Dubai’s challenging red dunes. Whether you’re a solo rider, couple, family, or small group, we offer the right dune buggy to match your adventure style and comfort level.</p>
        <p>Choose from self-drive dune buggy rental tours, private & shared desert buggy ride experiences, available in morning, afternoon, sunset, and night buggy tour options. Our professional guides adjust the pace to your confidence, while add-ons like sandboarding and camel rides complete your desert safari. With sanitized safety gear, chilled refreshments, and scenic photo stops, we deliver one of the most trusted and best-priced dune buggy tours in Dubai.</p>
        <div className="tech-labels"><span>Guided tours</span><span>High-performance buggies</span><span>Beginner friendly</span></div>
      </motion.div>
    </section>
  )
}
