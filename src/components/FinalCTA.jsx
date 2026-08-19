import { motion } from 'framer-motion'
import BrushButton from './BrushButton'

export default function FinalCTA(){return <section className="final-cta" id="contact"><div className="cta-photo"/><div className="cta-dust"/><motion.div className="cta-copy" initial={{opacity:0,x:-45}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.4}} transition={{duration:.8,ease:[.22,1,.36,1]}}><span>READY TO RIDE?</span><h2>The desert<br/><em>is waiting.</em></h2><p>Choose your buggy, book your adventure and experience Dubai's dunes the Speed Desert way.</p><div><BrushButton>Book your ride</BrushButton><a href="#tour-highlights">View packages <i>→</i></a></div></motion.div></section>}
