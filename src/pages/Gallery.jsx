import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { galleryImages } from '../galleryImages'
import SectionHeading from '../components/SectionHeading'

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <SectionHeading eyebrow="OUR ADVENTURES" title="Speed Desert" accent="Gallery" align="center" />
      </section>
      
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {galleryImages.map((src, idx) => (
            <motion.div 
              key={idx} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
            >
              <img src={src} alt={`Desert Adventure ${idx + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
