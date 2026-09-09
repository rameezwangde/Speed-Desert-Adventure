import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function TourIncludes() {
  const { t } = useLanguage()

  const rawItems = t('tourIncludes.items', [])
  const items = Array.isArray(rawItems) ? rawItems : []

  // Split into 3 columns
  const chunkSize = Math.ceil(items.length / 3)
  const columns = [
    items.slice(0, chunkSize),
    items.slice(chunkSize, chunkSize * 2),
    items.slice(chunkSize * 2)
  ]

  return (
    <section className="includes-section">
      <SectionHeading eyebrow={t('tourIncludes.eyebrow')} title={t('tourIncludes.title')} accent={t('tourIncludes.accent')} align="center" />
      <div className="includes-table">
        {columns.map((col, i) => (
          <div className="includes-col" key={i}>
            {col.map(item => (
              <div className="includes-item" key={item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

