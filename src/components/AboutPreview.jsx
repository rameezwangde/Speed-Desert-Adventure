import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="about" id="about">
      <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [.22,1,.36,1] }}>
        <span>{t('aboutPreview.tag')}</span>
      </motion.div>
      <motion.div className="about-copy" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }}>
        <span className="eyebrow">{t('aboutPreview.eyebrow')}</span>
        <h2>{t('aboutPreview.title')}<br/><em>{t('aboutPreview.titleAccent')}</em></h2>
        <p>{t('aboutPreview.p1')}</p>
        <p>{t('aboutPreview.p2')}</p>
        <p>{t('aboutPreview.p3')}</p>
        <div className="tech-labels">
          <span>{t('aboutPreview.tag1')}</span>
          <span>{t('aboutPreview.tag2')}</span>
          <span>{t('aboutPreview.tag3')}</span>
        </div>
      </motion.div>
    </section>
  )
}

