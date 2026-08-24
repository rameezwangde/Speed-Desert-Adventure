import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const packagesData = [
  {
    category: 'Buggy Tours',
    options: [
      { name: 'Can-Am Maverick', link: '/tour/can-am-maverick-r-x-rs', bg: 'linear-gradient(135deg, #111 0%, #222 100%)' },
      { name: 'Polaris RZR', link: '/tour/polaris-rzr-custom', bg: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)' },
      { name: 'Stage 4 Stunner', link: '/tour/stage-4-stunner', bg: 'linear-gradient(135deg, #180808 0%, #111 100%)' },
    ]
  },
  {
    category: 'Quad Bike',
    options: [
      { name: '620cc Quad Bike', link: '/tour/620cc-quad-bike', bg: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)' },
      { name: 'Yamaha 700cc', link: '/tour/yamaha-700cc-raptor', bg: 'linear-gradient(135deg, #111 0%, #180808 100%)' },
    ]
  },
  {
    category: 'Combo Package',
    options: [
      { name: 'Desert Safari + Quad', link: '/tour/safari-quad', bg: 'linear-gradient(135deg, #222 0%, #050505 100%)' },
      { name: 'Desert Safari + Buggy', link: '/tour/safari-buggy', bg: 'linear-gradient(135deg, #180808 0%, #222 100%)' },
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
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {cat.options.map((opt, j) => (
                  <motion.a 
                    key={j}
                    href={opt.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="package-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '240px',
                      padding: '30px',
                      background: opt.bg,
                      textDecoration: 'none',
                      borderRadius: '8px',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div className="package-card-content" style={{ position: 'relative', zIndex: 2 }}>
                      <span style={{ color: '#e11924', fontSize: '12px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        {cat.category}
                      </span>
                      <h4 style={{ color: '#fff', fontSize: '28px', marginTop: '15px', lineHeight: '1.2' }}>
                        {opt.name}
                      </h4>
                    </div>
                    
                    <div className="package-card-arrow" style={{ alignSelf: 'flex-end', position: 'relative', zIndex: 2 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>

                    {/* Hover overlay */}
                    <div className="package-card-hover" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 100% 100%, rgba(225,25,36,0.15) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 1
                    }}></div>
                  </motion.a>
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
