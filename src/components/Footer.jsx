import { useLanguage } from '../context/LanguageContext'

export default function Footer(){
  const { t } = useLanguage()

  const quick = [
    { l: t('nav.home'), h: '/' },
    { l: t('nav.aboutUs'), h: '/about' },
    { l: t('nav.packages'), h: '/#tour-highlights' },
    { l: t('nav.gallery'), h: '/#gallery' },
    { l: t('nav.testimonials'), h: '/testimonials' },
    { l: t('nav.contact'), h: '/contact' }
  ]

  const experiences = [
    { l: t('footer.exp1'), h: '/#tour-highlights' },
    { l: t('footer.exp2'), h: '/#pricing' },
    { l: t('footer.exp3'), h: '/tour/private-buggy-tours' },
    { l: t('footer.exp4'), h: '/tour/safari-buggy' }
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/logo.png" alt="Speed Desert Adventure"/>
          <p>{t('footer.tagline')}</p>
          <a className="whatsapp" href="https://wa.me/971504799258" target="_blank" rel="noopener noreferrer">{t('footer.whatsappUs')}</a>
        </div>
        <FooterCol title={t('footer.quickLinks')} items={quick}/>
        <FooterCol title={t('footer.experiences')} items={experiences}/>
        <div className="footer-col">
          <h3>{t('footer.contact')}</h3>
          <a href="tel:+971504799258">+971 50 479 9258</a>
          <a href="mailto:info@speeddesert.ae">info@speeddesert.ae</a>
          <span style={{maxWidth: '220px'}}>XP83+8CW Al Madam - Dubai-Hatta Rd - Sharjah - United Arab Emirates</span>
          <h3 className="follow">{t('footer.follow')}</h3>
          <div style={{display:'flex',gap:'10px'}}>
            <a href="https://www.instagram.com/speed_desert/" target="_blank" rel="noopener noreferrer" style={{color:'#ccc', textDecoration:'none', display: 'flex', alignItems: 'center', gap: '6px'}}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a> 
            <span style={{color:'#666'}}>/</span> <span style={{color:'#666'}}>Facebook</span> <span style={{color:'#666'}}>/</span> <span style={{color:'#666'}}>TikTok</span>
          </div>
        </div>
      </div>
      <div className="footer-coordinates">{t('footer.coordinates')}</div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {t('footer.copyright')}</span>
        <div>
          <a href="#contact">{t('footer.terms')}</a>
          <a href="#contact">{t('footer.privacy')}</a>
        </div>
      </div>
      <div className="footer-dunes"/>
    </footer>
  )
}

function FooterCol({title,items}){
  return (
    <div className="footer-col">
      <h3>{title}</h3>
      {items.map(x=><a href={typeof x==='object'?x.h:`#${x.toLowerCase().replace(' us','').replace(' ','-')}`} key={typeof x==='object'?x.l:x}>{typeof x==='object'?x.l:x}</a>)}
    </div>
  )
}

