import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const packagesData = [
  {
    category: 'Buggy Tours',
    options: [
      { 
        title: 'Can-Am Maverick XR (245 HP Stage 4)', link: '/tour/can-am-maverick-xrs-26', image: '/image.png', 
        price: '1000 AED', copy: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR. 1 hr: 1000 AED | 2 hrs: 1800 AED.",
        duration: '1 - 2 Hours', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Polaris RZR 1000 CC (145 HP)', link: '/tour/polaris-rzr-custom', image: '/polaris-rzr-custom.png',
        price: '400 AED', copy: 'Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC. 1 hr: 400 AED | 2 hrs: 700 AED.',
        duration: '1 - 2 Hours', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Stage 4 Stunner: RZR PRO R Ultimate EPS', link: '/tour/stage-4-stunner-rzr-pro-r-ultimate-eps', image: '/stage4-stunner.png',
        price: '1399 AED', copy: 'Enjoy unparalleled off-road thrills in Dubai\'s vast dunes.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: '2 & 4 Seater Dune Buggy Can-Am Maverick R X RS 26', link: '/tour/can-am-maverick-r-x-rs', image: '/canam2.jpeg',
        price: '899 AED', copy: 'Can-Am Maverick Adventure: Experience thrilling group or couple rides.',
        duration: '1-hour', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: '4 Seater Early Bird Dune Buggy Tour (Couples)', link: '/tour/early-bird-buggy-tour', image: '/tour-four-seat.png',
        price: '400 AED', copy: 'Join our Early Bird Buggy Tour for an exciting desert adventure!',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Red Dunes Afternoon Buggy Tour (Family)', link: '/tour/red-dunes-afternoon', image: '/buggy-duo.jpg',
        price: '400 AED', copy: 'Explore the famous Red Dunes of Dubai during the magical golden hours.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Night Riders: Dune Buggy Dubai Adventure', link: '/tour/night-riders-buggy-tour', image: '/5.jpeg',
        price: '400 AED', copy: 'Experience the thrill of navigating the desert under the starry night sky.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Self-Drive Buggy Tours', link: '/tour/self-drive-buggy-tours', image: '/self-drive.png',
        price: '400 AED', copy: 'Take the wheel of a powerful off-road buggy and conquer the majestic red dunes of the Arabian Desert at your own pace.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Group Buggy Tours', link: '/tour/group-buggy-tours', image: '/grp.jpeg',
        price: '400 AED', copy: "Perfect for corporate events, birthday celebrations, or friends' getaways.",
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Family & Kids Buggy Rides', link: '/tour/family-buggy-tours', image: '/fam.png',
        price: '400 AED', copy: 'Journey together through the golden dunes of the Arabian Desert in complete safety and comfort.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Couples Buggy Tours', link: '/tour/couples-buggy-tours', image: '/couples-quad.png',
        price: '400 AED', copy: 'Experience the desert like never before with our Couple Buggy Tours, created for those who love both adventure and each other.',
        duration: '1-hour', seats: '2 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Night Buggy Tours', link: '/tour/night-buggy-tours', image: '/night.png',
        price: '400 AED', copy: 'Experience the magic of the Arabian Desert under a blanket of stars with our Night Buggy Tours.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Custom Buggy Packages', link: '/tour/custom-buggy-packages', image: '/custom-buggy.png',
        price: '400 AED', copy: "Whether you're celebrating a special occasion or hosting an event, we'll tailor every detail to match your vision.",
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Red Dunes Buggy Ride', link: '/tour/red-dunes-buggy-ride', image: '/red.png',
        price: '400 AED', copy: 'Take on the towering red sand dunes with our specially crafted Red Dunes Buggy Ride.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Private Buggy Tours', link: '/tour/private-buggy-tours', image: '/gallery/img-g2-8.jpeg',
        price: '400 AED', copy: 'Enjoy a dedicated personal guide and customizable routes that let you explore the dunes exactly how you want.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transfer: '300 AED'
      }
    ]
  },
  {
    category: 'Quad Bike',
    options: [
      { 
        title: '620cc Quad Bike', link: '/tour/620cc-quad-bike', image: '/gallery/img-3.jpeg',
        price: '200 AED', copy: 'Feel the adrenaline with our powerful 620cc Quad Bike.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Yamaha 700cc Raptor', link: '/tour/yamaha-700cc-raptor', image: '/gallery/img-7.jpeg',
        price: '400 AED', copy: 'Conquer the dunes with the ultimate Yamaha 700cc Raptor.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
    ]
  },
  {
    category: 'Combo Package',
    options: [
      { 
        title: 'Desert Combo: Sharing Safari + Quad', link: '/tour/safari-quad', image: '/quad-girls.png',
        price: '99 AED / Person', copy: 'Double the thrill with our combo desert safari and quad bike ride.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transfer: '300 AED'
      },
      { 
        title: 'Desert Combo: Sharing Safari + Dune Buggy', link: '/tour/safari-buggy', image: '/sharing-buggy.png',
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
    <main className="packages-page" style={{ minHeight: '100vh', background: '#050505', paddingBottom: '60px' }}>
      
      <section className="packages-hero" style={{ 
        position: 'relative', 
        width: '100%', 
        height: '60vh', 
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/gallery/packages-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '100px'
      }}>
        <div style={{ textAlign: 'center', zIndex: 2, padding: '0 5vw' }}>
          <SectionHeading eyebrow="OUR EXPERIENCES" title="Select Your" accent="Adventure" align="center" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#e0e0e0', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
          >
            Choose from our selection of premium off-road experiences. Explore buggy tours, quad bikes, or combo packages for the ultimate desert thrill.
          </motion.p>
        </div>
      </section>

      <div className="packages-container" style={{ maxWidth: '1200px', margin: '30px auto 0', padding: '0 5vw' }}>
        
        <div className="packages-grid-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
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
                  <article className="hourly-card" key={j}>
                    <div className="nhc-image-wrap">
                      <img src={opt.image} alt={opt.title} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'none', opacity: 1 }} />
                      <div className="nhc-price">{opt.price}</div>
                    </div>
                    <div className="nhc-body">
                      <h3 className="nhc-title">{opt.title}</h3>
                      <p style={{ color: '#999', fontSize: '16px', lineHeight: '1.4', textAlign: 'center', marginBottom: '20px' }}>{opt.copy}</p>
                      
                      <div style={{ background: 'rgba(215, 25, 32, 0.1)', border: '1px solid rgba(215, 25, 32, 0.3)', color: '#d71920', padding: '8px 12px', borderRadius: '4px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        FULL KEY (NO LOCKED ENGINE)
                      </div>

                      <div className="nhc-specs">
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
                          <div>
                            <small>Duration</small>
                            <strong>{opt.duration}</strong>
                          </div>
                        </div>
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
                          <div>
                            <small>Seats</small>
                            <strong>{opt.seats}</strong>
                          </div>
                        </div>
                        <div className="nhc-spec">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeWidth="2"/><circle cx="7" cy="17" r="2" strokeWidth="2"/><path d="M9 17h6" strokeWidth="2"/><circle cx="17" cy="17" r="2" strokeWidth="2"/></svg>
                          <div>
                            <small>{opt.transferType}</small>
                            <strong>{opt.transfer}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="nhc-actions">
                        <a href="#book" className="btn-primary">BOOK NOW</a>
                        {opt.link.startsWith('/tour/') ? (
                          <a href={opt.link} className="btn-secondary">TOUR DETAILS</a>
                        ) : (
                          <a href="#!" className="btn-secondary" style={{ opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' }}>TOUR DETAILS</a>
                        )}
                      </div>
                    </div>
                  </article>
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
