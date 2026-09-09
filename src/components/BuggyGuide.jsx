import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function BuggyGuide() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)

  const guide = [
    [t('buggyGuide.q1'), t('buggyGuide.a1')],
    [t('buggyGuide.q2'), t('buggyGuide.a2')],
    [t('buggyGuide.q3'), t('buggyGuide.a3')],
    [t('buggyGuide.q4'), t('buggyGuide.a4')],
    [t('buggyGuide.q5'), t('buggyGuide.a5')],
    [t('buggyGuide.q6'), t('buggyGuide.a6')],
  ]

  return (
    <section className="guide-section">
      <div className="guide-top">
        <div className="guide-intro">
          <SectionHeading eyebrow={t('buggyGuide.eyebrow')} title={t('buggyGuide.title')} accent={t('buggyGuide.accent')} />
          <p>{t('buggyGuide.desc')}</p>
        </div>
        
        <div className="guide-visual">
          <img src="/guide.jpeg" alt="Dune Buggy Guide" loading="lazy" />
        </div>
      </div>

      <div className="guide-accordion">
        {guide.map(([q,a],i)=>(
          <div className={`guide-item ${open===i?'open':''}`} key={q}>
            <button onClick={()=>setOpen(open===i?-1:i)}>
              <b>0{i+1}</b><span>{q}</span><i>{open===i?'−':'+'}</i>
            </button>
            <AnimatePresence initial={false}>
              {open===i && (
                <motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}}>
                  {a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

