import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function BookingProcess() {
  const { t } = useLanguage()

  const steps = [
    ['01', t('bookingProcess.step1Title'), t('bookingProcess.step1Copy')],
    ['02', t('bookingProcess.step2Title'), t('bookingProcess.step2Copy')],
    ['03', t('bookingProcess.step3Title'), t('bookingProcess.step3Copy')],
    ['04', t('bookingProcess.step4Title'), t('bookingProcess.step4Copy')],
  ]

  return <section className="booking-process">
    <SectionHeading eyebrow={t('bookingProcess.eyebrow')} title={t('bookingProcess.title')} accent={t('bookingProcess.accent')} />
    <div className="route-map"><motion.div className="route-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: 1.2, ease: [.22,1,.36,1] }}/>
      <motion.img className="route-buggy" src="/route-red.png" alt="" initial={{ left: '0%', opacity: 0 }} whileInView={{ left: '88%', opacity: [0,1,1] }} viewport={{ once: true, amount: .4 }} transition={{ duration: 2.4, delay: .25, ease: [.22,1,.36,1] }}/>
      {steps.map(([num,title,copy], i) => <motion.div className="route-step" key={num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: .2 + i*.16 }}><b>{num}</b><i/><span>25.{204+i}° N</span><h3>{title}</h3><p>{copy}</p></motion.div>)}
    </div>
  </section>
}

