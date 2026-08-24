import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import BrushButton from '../components/BrushButton'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Speed Desert Adventure | Dubai'
  }, [])

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-photo" />
        <div className="contact-hero-grid" />
        <motion.div className="contact-hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <span>GET IN TOUCH</span>
          <h1>Start Your<br/><em>Adventure</em></h1>
          <p>Contact us to book a tour, request a custom package, or ask any questions.</p>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <SectionHeading eyebrow="CONNECT WITH US" title="Contact" accent="Information" />
            <div className="info-block" style={{marginTop: '40px'}}>
              <h3>Address</h3>
              <p>XP83+8CW Al Madam<br/>Dubai-Hatta Rd - Sharjah<br/>United Arab Emirates</p>
            </div>
            <div className="info-block">
              <h3>Phone / WhatsApp</h3>
              <p><a href="tel:+971504799258">+971 50 479 9258</a></p>
            </div>
            <div className="info-block">
              <h3>Email</h3>
              <p><a href="mailto:info@speeddesert.ae">info@speeddesert.ae</a></p>
            </div>
            <div className="info-block">
              <h3>Operating Hours</h3>
              <p>Monday - Sunday<br/>24/7</p>
            </div>
            <div className="info-block">
              <h3>Social Media</h3>
              <p><a href="https://www.instagram.com/speed_desert/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Follow us on Instagram</a></p>
            </div>
            
            <div className="contact-wa-btn">
              <BrushButton onClick={() => window.open('https://wa.me/971504799258', '_blank')}>
                Chat on WhatsApp
              </BrushButton>
            </div>
          </div>

          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.112999484089!2d55.7013738!3d24.9658125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577e44c6fd419%3A0xe016430521669677!2sSpeed%20Desert%20Adventure%20-%20Buggy%2C%20Quad%20%26%20Safari%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
