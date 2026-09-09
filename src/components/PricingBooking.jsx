import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function PricingBooking() {
  const { t } = useLanguage()

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid-bg" />
      <SectionHeading eyebrow={t('pricing.eyebrow')} title={t('pricing.title')} accent={t('pricing.accent')} />

      <div className="pricing-intro">
        <p>{t('pricing.intro1')}</p>
        <p>{t('pricing.intro2')}</p>
      </div>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>{t('pricing.thPackages')}</th>
              <th>{t('pricing.thSeater')}</th>
              <th>{t('pricing.thPersons')}</th>
              <th>{t('pricing.thDuration')}</th>
              <th>{t('pricing.thPrice')}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Can-Am Maverick R MAX X rs '26</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 1000-1300</td></tr>
            <tr><td>Can-Am Maverick X3</td><td>2-4 seater</td><td>2 persons</td><td>60 MIN Buggy Drive</td><td>AED 1300</td></tr>
            <tr><td>{t('pricing.rowCombo')}</td><td>2-4 seater</td><td>1 person</td><td>30-Minute Can-Am X3 MAX Ride</td><td>AED 499</td></tr>
            <tr><td>{t('pricing.rowEarlyBird')}</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 400</td></tr>
            <tr><td>{t('pricing.rowNightRiders')}</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 1300</td></tr>
            <tr><td>{t('pricing.rowAfternoon')}</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 400</td></tr>
            <tr><td>{t('pricing.rowSharedTransfer')}</td><td>1, 2 & 4 seater</td><td>1-4 persons</td><td>60 MIN Buggy Drive</td><td>AED 650</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="table-title">{t('pricing.polarisTitle')}</h3>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>{t('pricing.thExperience')}</th>
              <th>{t('pricing.thCapacity')}</th>
              <th>{t('pricing.thModel')}</th>
              <th>{t('pricing.thEngine')}</th>
              <th>{t('pricing.th30Min')}</th>
              <th>{t('pricing.th1Hour')}</th>
              <th>{t('pricing.th90Min')}</th>
              <th>{t('pricing.th2Hours')}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Polaris RZR Dune Buggy</td><td>2 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>200 AED</td><td>400 AED</td><td>600 AED</td><td>700 AED</td></tr>
            <tr><td>Polaris RZR Dune Buggy</td><td>4 Seater</td><td>Polaris RZR SPORT EPS</td><td>1000 CC</td><td>200 AED</td><td>400 AED</td><td>600 AED</td><td>700 AED</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="table-title">{t('pricing.canamTitle')}</h3>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>{t('pricing.thExperience')}</th>
              <th>{t('pricing.thPersons')}</th>
              <th>{t('pricing.thModel')}</th>
              <th>{t('pricing.thEngine')}</th>
              <th>{t('pricing.th30Min')}</th>
              <th>{t('pricing.th1Hour')}</th>
              <th>{t('pricing.th90Min')}</th>
              <th>{t('pricing.th2Hours')}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Can-Am Maverick R XRS</td><td>1-2 Persons</td><td>Maverick R XRS (245 HP)</td><td>1000 CC</td><td>600 AED</td><td>899 AED</td><td>1,400 AED</td><td>1,800 AED</td></tr>
            <tr><td>Can-Am Maverick R XRS MAX</td><td>Up to 4 Persons</td><td>Maverick R XRS MAX (245 HP)</td><td>1000 CC</td><td>700 AED</td><td>1,200 AED</td><td>1,400 AED</td><td>1,800 AED</td></tr>
            <tr><td>Can-Am Maverick X3</td><td>1-2 Persons</td><td>Maverick X3 (200 HP)</td><td>1000 CC</td><td>400 AED</td><td>800 AED</td><td>1,100 AED</td><td>1,500 AED</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

