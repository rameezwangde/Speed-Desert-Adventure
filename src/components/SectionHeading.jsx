import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function SectionHeading({ eyebrow, title, accent, align = 'left' }) {
  const { isRTL } = useLanguage()

  const computedAlign = align === 'center' ? 'center' : isRTL ? 'right' : 'left'

  return (
    <motion.div 
      className={`section-heading ${align === 'center' ? 'center' : ''}`} 
      initial={{ opacity: 0, y: 28 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: .45 }} 
      transition={{ duration: .7, ease: [.22,1,.36,1] }}
    >
      <span>{eyebrow}</span>
      <h2 style={{ textAlign: computedAlign }}>
        {title} {accent && <em>{accent}</em>}
      </h2>
    </motion.div>
  )
}

