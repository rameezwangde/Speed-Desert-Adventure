import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const questions = [
  ['Do I need a driving licence?','Final licence requirements will be confirmed here.'],
  ['Is advance payment required?','Booking and payment information will be confirmed here.'],
  ['Can beginners drive a dune buggy?','Beginner suitability guidance will be added here.'],
  ['What should I wear?','Recommended clothing details will be added here.'],
  ['Are helmets provided?','Final equipment inclusions will be confirmed here.'],
  ['Can children join the tour?','Final passenger and age policies will be added here.'],
  ['Do you provide hotel transfers?','Transfer availability and coverage will be added here.'],
]

export default function FAQ() {
  const [open,setOpen]=useState(1)
  return <section className="faq-section"><div className="faq-bg">FAQ</div><SectionHeading eyebrow="KNOW BEFORE YOU RIDE" title="Frequently Asked" accent="Questions" />
    <div className="faq-list">{questions.map(([q,a],i)=><div className={`faq-row ${open===i?'open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><b>{String(i+1).padStart(2,'0')}</b><span>{q}</span><i>+</i></button><AnimatePresence initial={false}>{open===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div>
  </section>
}
