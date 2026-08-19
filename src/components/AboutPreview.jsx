import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="about" id="about">
      <div className="about-outline">RIDE<br/>THE DUNES</div><div className="about-number">01</div>
      <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [.22,1,.36,1] }}><span>UAE / 25.2048° N</span></motion.div>
      <motion.div className="about-copy" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }}>
        <span className="eyebrow">Speed Désert Adventure</span>
        <h2>Premium desert<br/><em>adventure tours UAE</em></h2>
        <p>Speed Désert Adventure brings together powerful dune buggies, breathtaking desert landscapes and professionally guided off-road experiences for adventure seekers across the UAE.</p>
        <p>From first-time riders to thrill seekers, every tour is designed around excitement, safety and unforgettable moments in the dunes.</p>
        <div className="tech-labels"><span>Guided tours</span><span>High-performance buggies</span><span>Beginner friendly</span></div>
      </motion.div>
    </section>
  )
}
