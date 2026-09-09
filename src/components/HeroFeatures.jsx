import { useLanguage } from '../context/LanguageContext'

function Icon({ type }) {
  const paths = {
    goggle: <><path d="M3 11l2-5h14l2 5-2 7h-4l-3-4-3 4H5z"/><path d="M7 9h10"/></>,
    pin: <><path d="M12 22s7-6 7-13a7 7 0 10-14 0c0 7 7 13 7 13z"/><circle cx="12" cy="9" r="2"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 12l3 3 5-6"/></>,
    team: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 21v-4c0-3 2-5 6-5s6 2 6 5v4M15 14c4 0 6 2 6 5v2"/></>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

export default function HeroFeatures({ ready }) {
  const { t } = useLanguage()

  const items = [
    ['goggle', t('heroFeatures.powerful'), t('heroFeatures.buggies')], 
    ['pin', t('heroFeatures.premium'), t('heroFeatures.desertTracks')], 
    ['shield', t('heroFeatures.safety'), t('heroFeatures.guaranteed')], 
    ['team', t('heroFeatures.expert'), t('heroFeatures.guides')]
  ]

  return <div className={`feature-strip ${ready ? 'ready' : ''}`}>
    <div className="features">{items.map(([icon, top, bottom]) => <div className="feature" key={top}><Icon type={icon}/><p><strong>{top}</strong><span>{bottom}</span></p></div>)}</div>
    <div className="awaits"><strong>{t('heroFeatures.adventure')}</strong><span>{t('heroFeatures.awaitsYou')}</span></div>
  </div>
}

