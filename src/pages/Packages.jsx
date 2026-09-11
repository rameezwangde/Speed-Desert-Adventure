import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { useCurrency } from '../context/CurrencyContext'

const packagesData = [
  {
    category: 'Buggy Tours',
    options: [
      { 
        rawAed: 1300,
        title: 'Can-Am Maverick XR (245 HP Stage 4) (MAX for 4 Seater)', link: '/tour/can-am-maverick-xrs-26', image: '/image.png', 
        copy: "Dominate Dubai's red dunes with the 245 HP Stage 4 Can-Am Maverick XR. 1 hr: 1300 AED | 2 hrs: 1800 AED.",
        duration: '1 - 2 Hours', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 400,
        title: 'Polaris RZR 1000 CC (145 HP) (MAX for 4 Seater)', link: '/tour/polaris-rzr-custom', image: ['/polaris-rzr-custom.png', '/polaris-rzr-4seater.jpg'],
        copy: "Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC. 1 hr: 400 AED | 2 hrs: 700 AED.",
        duration: '1 - 2 Hours', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 800,
        title: '2 & 4 Seater Dune Buggy Can-Am Maverick X3 (200 HP) (MAX for 4 Seater)', link: '/tour/can-am-maverick-r-x-rs', image: '/canam2.jpeg',
        copy: 'Can-Am Maverick Adventure: Experience thrilling group or couple rides.',
        duration: '1-hour', seats: '2 & 4 Seaters', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 1300,
        title: 'Night Riders: Maverick R (MAX for 4 Seater)', link: '/tour/night-riders-buggy-tour', image: '/5.jpeg',
        copy: 'Experience the thrill of navigating the desert under the starry night sky.',
        duration: '1-hour', seats: '1, 2 & 4 Seaters', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 400,
        title: 'Self-Drive Buggy Tours (MAX for 4 Seater)', link: '/tour/self-drive-buggy-tours', image: '/self-drive.png',
        copy: 'Take the wheel of a powerful off-road buggy and conquer the majestic red dunes of the Arabian Desert at your own pace.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 400,
        title: 'Couples Buggy Tours', link: '/tour/couples-buggy-tours', image: '/couples-quad.png',
        copy: 'Experience the desert like never before with our Couple Buggy Tours, created for those who love both adventure and each other.',
        duration: '1-hour', seats: '2 seater', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 400,
        title: 'Dirt Bike 450CC WITH COMPLETE BIKE KIT', link: '/tour/night-buggy-tours', image: '/night.png',
        copy: 'Experience the magic of the Arabian Desert under a blanket of stars with our Night Buggy Tours.',
        duration: '1-hour', seats: '1, 2, and 4 seater', transferType: 'Private Transfer', transferAed: 300
      },
    ]
  },
  {
    category: 'Quad Bike',
    options: [
      { 
        rawAed: 400,
        title: 'Raptor 700 cc', link: '/tour/620cc-quad-bike', image: '/620cc.jpeg',
        copy: 'Feel the adrenaline with our powerful Raptor 700 cc.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 350,
        rawAed2: 600,
        title: 'Yamaha 570 cc bike rzr Polaris USA', link: '/tour/yamaha-700cc-raptor', image: '/WhatsApp Image 2026-09-10 at 11.40.30 AM.jpeg',
        copy: 'Conquer the dunes with the powerful 4x4 Yamaha 570 cc bike rzr Polaris USA.',
        duration: '1-hour / 2-hour', seats: '1 Seater (4x4)', transferType: 'Private Transfer', transferAed: 300
      },
      { 
        rawAed: 250,
        title: '250cc Quad Bike', link: '/tour/yamaha-700cc-raptor', image: '/gallery/img-7.jpeg',
        copy: 'Conquer the dunes with our agile and powerful 250cc Quad Bike.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transferAed: 300
      },
    ]
  },
  {
    category: 'Combo Package',
    options: [
      { 
        rawAed: 250,
        title: 'Desert Combo: Sharing Safari + 570cc Quad', link: '/tour/safari-quad', image: '/quad-girls.png',
        copy: 'Double the thrill with our combo desert safari and 570cc quad bike ride.',
        duration: '1-hour', seats: '1 Seater', transferType: 'Private Transfer', transferAed: 300
      },
    ]
  }
]

export default function PackagesPage() {
  const { formatPrice } = useCurrency()

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
                      {Array.isArray(opt.image) ? (
                        <div style={{ display: 'flex', width: '100%', height: '100%', background: '#111' }}>
                          {opt.image.map((img, idx) => (
                            <div key={idx} style={{ flex: 1, height: '100%', borderRight: idx === 0 ? '2px solid #050505' : 'none' }}>
                              <img src={img} alt={opt.title} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'none', opacity: 1 }} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img src={opt.image} alt={opt.title} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'none', opacity: 1 }} />
                      )}
                      <div className="nhc-price-box">
                        {opt.rawAed2 ? (
                          <span className="nhc-price" style={{ fontSize: '13px', lineHeight: '1.2' }}>
                            {formatPrice(opt.rawAed)} (1h) | {formatPrice(opt.rawAed2)} (2h)
                          </span>
                        ) : (
                          <span className="nhc-price">{formatPrice(opt.rawAed)}</span>
                        )}
                      </div>
                    </div>
                    <div className="nhc-body">
                      <h3 className="nhc-title">{opt.title}</h3>
                      <p style={{ color: '#999', fontSize: '16px', lineHeight: '1.4', textAlign: 'center', marginBottom: '20px' }}>{opt.copy}</p>
                      
                      <div style={{ background: 'rgba(215, 25, 32, 0.1)', border: '1px solid rgba(215, 25, 32, 0.3)', color: '#d71920', padding: '8px 12px', borderRadius: '4px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        FULL KEY (NO LOCKED ENGINE, ONLY OPEN KEYS)
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
                            <strong>{formatPrice(opt.transferAed)}</strong>
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
