import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const guide = [
  ['Who Can Drive a Dune Buggy?', 'Eligibility and driver requirements will be added here.'],
  ['What Should You Wear?', 'Recommended clothing information will be added here.'],
  ['Safety Equipment', 'Safety equipment details will be confirmed here.'],
  ['Driving in the Dunes', 'A short preparation note will be added here.'],
  ['What to Bring', 'The final guest checklist will be added here.'],
  ['Before Your Tour', 'Arrival and preparation details will be added here.'],
]

export default function BuggyGuide() {
  const [open, setOpen] = useState(0)
  return <section className="guide-section">
    <div className="guide-intro"><SectionHeading align="center" eyebrow="PREPARE FOR THE TERRAIN" title="Inclusive Guide For" accent="Sand Dune Buggy Dubai" /><p>A practical tour guide structure covering preparation, safety and the desert driving experience.</p></div>

    <div className="guide-accordion">{guide.map(([q,a],i)=><div className={`guide-item ${open===i?'open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><b>0{i+1}</b><span>{q}</span><i>{open===i?'−':'+'}</i></button><AnimatePresence initial={false}>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}}>{a}</motion.p>}</AnimatePresence></div>)}</div>
  </section>
}
