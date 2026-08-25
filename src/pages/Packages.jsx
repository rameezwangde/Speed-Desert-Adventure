import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const packagesData = [
  {
    category: 'Buggy Tours',
    options: [
      { 
        title: 'Can-Am Maverick XRS 26 Dune Buggy', link: '/tour/can-am-maverick-xrs-26', image: '/image.png', 
        price: '700-900 AED', copy: "Dominate Dubai's red dunes with the 2026 Can-Am Maverick XRS.",
        duration: '1-hour', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Polaris RZR Dune Buggy Tour (Custom)', link: '/tour/polaris-rzr-custom', image: '/polaris-rzr-custom.png',
        price: '400 AED', copy: 'Embark on an exciting desert journey, from solo to group adventures.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Stage 4 Stunner: RZR PRO R Ultimate EPS', link: '/tour/stage-4-stunner-rzr-pro-r-ultimate-eps', image: '/polaris-buggy.jpg',
        price: '1399 AED', copy: 'Enjoy unparalleled off-road thrills in Dubai\'s vast dunes.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: '4 Seater Early Bird Dune Buggy Tour (Couples)', link: '/contact', image: '/tour-four-seat.png',
        price: '400 AED', copy: 'Join our Early Bird Buggy Tour for an exciting desert adventure!',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Red Dunes Afternoon Buggy Tour (Family)', link: '/contact', image: '/buggy-duo.jpg',
        price: '400 AED', copy: 'Explore the famous Red Dunes of Dubai during the magical golden hours.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Night Riders: Dune Buggy Dubai Adventure', link: '/contact', image: '/5.jpeg',
        price: '400 AED', copy: 'Experience the desert like never before with our Night Riders Buggy Adventure.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: '2 & 4 Seater Dune Buggy Can-Am Maverick R X RS 26', link: '/tour/can-am-maverick-r-x-rs', image: '/blue-buggy.png',
        price: '899 AED', copy: 'Can-Am Maverick Adventure: Experience thrilling group or couple rides.',
        duration: '1-hour', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      }
    ]
  },
  {
    category: 'Quad Bike',
    options: [
      { 
        title: '620cc Quad Bike', link: '/tour/620cc-quad-bike', image: '/620cc.jpeg',
        price: '200 AED', copy: 'Feel the adrenaline with our powerful 620cc Quad Bike.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Yamaha 700cc Raptor', link: '/tour/yamaha-700cc-raptor', image: '/700cc.jpeg',
        price: '400 AED', copy: 'Conquer the dunes with the ultimate Yamaha 700cc Raptor.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
    ]
  },
  {
    category: 'Combo Package',
    options: [
      { 
        title: 'Desert Combo: Sharing Safari + Quad', link: '/tour/safari-quad', image: '/1-hour.jpg',
        price: '99 AED / Person', copy: 'Double the thrill with our combo desert safari and quad bike ride.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Desert Combo: Sharing Safari + Dune Buggy', link: '/tour/safari-buggy', image: '/2-hour.png',
        price: '299 AED / Person', copy: 'Double the thrill with our combo desert safari and dune buggy tour.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Shared Transfer', transfer: 'Free Pick & Drop'
      },
    ]
  }
]

export default function PackagesPage() {
  useEffect(() => {
    document.title = 'Packages & Tours | Speed Desert Adventure'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="packages-page" style={{ paddingTop: '160px', minHeight: '100vh', background: '#050505', paddingBottom: '120px' }}>
      <div className="packages-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionHeading eyebrow="OUR EXPERIENCES" title="Select Your" accent="Adventure" align="center" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '600px', margin: '30px auto 0', lineHeight: '1.6' }}
          >
            Choose from our selection of premium off-road experiences. Explore buggy tours, quad bikes, or combo packages for the ultimate desert thrill.
          </motion.p>
        </div>

        <div className="packages-grid-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {packagesData.map((cat, i) => (
            <div key={i} className="package-category-section">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ color: '#fff', fontSize: '32px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}
              >
                {cat.category}
              </motion.h3>
              
              <div className="hourly-grid">
                {cat.options.map((opt, j) => (
                  <motion.article className="hourly-card" key={j} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: j * .12, duration: .7, ease: [.22,1,.36,1] }}>
                    <div className="nhc-image-wrap">
                      <img src={opt.image} alt={opt.title} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'none', opacity: 1 }} />
                      <div className="nhc-price">{opt.price}</div>
                    </div>
                    <div className="nhc-body">
                      <h3 className="nhc-title">{opt.title}</h3>
                      <p style={{ color: '#999', fontSize: '16px', lineHeight: '1.4', textAlign: 'center', marginBottom: '25px' }}>{opt.copy}</p>
                      
                      <div className="nhc-specs">
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
                          <small>Duration</small>
                          <strong>{opt.duration}</strong>
                        </div>
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
                          <small>Seats</small>
                          <strong>{opt.seats}</strong>
                        </div>
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
                          <small>{opt.transferType}</small>
                          <strong>{opt.transfer}</strong>
                        </div>
                      </div>
                      <div className="nhc-actions">
                        <a href="#book" className="btn-primary">BOOK NOW</a>
                        <a href={opt.link || "#details"} style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }} className="btn-secondary">TOUR DETAILS</a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .package-card {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: rgba(225,25,36,0.3) !important;
        }
        .package-card:hover .package-card-hover {
          opacity: 1 !important;
        }
        .package-card:hover .package-card-arrow svg {
          stroke: #e11924;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        .package-card-arrow svg {
          transition: all 0.3s ease;
        }
      `}</style>
    </main>
  )
}
