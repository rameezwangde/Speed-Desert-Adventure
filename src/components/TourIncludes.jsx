import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const inclusions = ['High Performance Buggy','Safety Helmet','Goggles','Professional Guide','Desert Route','Safety Briefing','Refreshments','Photo Opportunities','Optional Transfers']

export default function TourIncludes() {
  return <section className="includes-section"><SectionHeading eyebrow="GEAR UP / RIDE READY" title="Our Desert Dune Buggy" accent="Tour Includes" align="center" />
    <div className="equipment-map"><motion.img src="/includes-orange.png" alt="Top-down orange dune buggy" initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.4}} transition={{duration:.8}}/>
      {inclusions.map((item,i)=><div className={`equipment-label equipment-${i+1}`} key={item}><i/><b>0{i+1}</b><span>{item}</span></div>)}
    </div>
  </section>
}
