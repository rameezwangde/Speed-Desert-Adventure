import { motion } from 'framer-motion'
import BrushButton from './BrushButton'
import { useLanguage } from '../context/LanguageContext'

export default function FinalCTA(){
  const { t } = useLanguage()

  return (
    <section className="final-cta" id="contact">
      <div className="cta-photo"/>
      <div className="cta-dust"/>
      <motion.div className="cta-copy" initial={{opacity:0,x:-45}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.4}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
        <span>{t('finalCta.eyebrow')}</span>
        <h2>{t('finalCta.title')}<br/><em>{t('finalCta.titleAccent')}</em></h2>
        <p>{t('finalCta.desc')}</p>
        <div>
          <BrushButton>{t('finalCta.bookRide')}</BrushButton>
          <a href="#tour-highlights">{t('finalCta.viewPackages')} <i>→</i></a>
        </div>
      </motion.div>
    </section>
  )
}

