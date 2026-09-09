import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(1)

  const questions = [
    [t('faq.q1'), t('faq.a1')],
    [t('faq.q2'), t('faq.a2')],
    [t('faq.q3'), t('faq.a3')],
    [t('faq.q4'), t('faq.a4')],
    [t('faq.q5'), t('faq.a5')],
    [t('faq.q6'), t('faq.a6')],
    [t('faq.q7'), t('faq.a7')],
  ]

  return (
    <section className="faq-section">
      <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} accent={t('faq.accent')} />
      <div className="faq-list">
        {questions.map(([q,a],i)=>(
          <div className={`faq-row ${open===i?'open':''}`} key={q}>
            <button onClick={()=>setOpen(open===i?-1:i)}>
              <b>{String(i+1).padStart(2,'0')}</b>
              <span>{q}</span>
              <i>+</i>
            </button>
            <AnimatePresence initial={false}>
              {open===i && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}}>
                  <p>{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

