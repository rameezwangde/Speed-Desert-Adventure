import { motion, AnimatePresence } from 'framer-motion'
import { useCurrency, FX_RATES } from '../context/CurrencyContext'
import { useLanguage } from '../context/LanguageContext'

export default function CurrencyConverterModal() {
  const { isConverterOpen, closeConverter, modalAedAmount, setModalAedAmount } = useCurrency()
  const { t, isRTL } = useLanguage()

  const popularTours = [
    { label: '30 Min Dune Buggy', aed: 400 },
    { label: '1 Hour Polaris RZR', aed: 400 },
    { label: 'Can-Am Maverick X3', aed: 800 },
    { label: '1 Hr Can-Am Maverick R MAX (Stage 4)', aed: 1300 },
    { label: '2 Hrs Can-Am Maverick R MAX (Stage 4)', aed: 1800 },
    { label: 'Private VIP Transfer', aed: 300 }
  ]

  if (!isConverterOpen) return null

  const num = parseFloat(modalAedAmount) || 0

  return (
    <AnimatePresence>
      <div className="curr-modal-overlay" onClick={closeConverter}>
        <motion.div 
          className="curr-modal-container" 
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="curr-modal-header">
            <div className="curr-modal-title-wrap">
              <span className="curr-modal-badge">LIVE FX CONVERTER</span>
              <h3>Convert AED to World Currencies</h3>
              <p>Prices are natively charged in AED. Check exact estimates in your home currency.</p>
            </div>
            <button 
              className="curr-modal-close" 
              onClick={closeConverter}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Calculator Input */}
          <div className="curr-calc-section">
            <label className="curr-calc-label">Enter AED Amount to Convert:</label>
            <div className="curr-input-wrap">
              <input 
                type="number" 
                value={modalAedAmount} 
                onChange={(e) => setModalAedAmount(e.target.value)}
                placeholder="e.g. 1300"
                min="0"
                step="50"
                className="curr-input"
                autoFocus
              />
              <span className="curr-input-tag">AED (Dirhams)</span>
            </div>

            {/* Quick Tour Presets */}
            <div className="curr-presets-wrap">
              <span className="curr-presets-title">Quick Select Price:</span>
              <div className="curr-presets-chips">
                {popularTours.map((tour, idx) => (
                  <button 
                    key={idx} 
                    type="button"
                    className={`curr-preset-btn ${parseFloat(modalAedAmount) === tour.aed ? 'active' : ''}`}
                    onClick={() => setModalAedAmount(String(tour.aed))}
                  >
                    <span>{tour.label}</span>
                    <strong>{tour.aed} AED</strong>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Currency Conversions Grid */}
          <div className="curr-results-grid">
            {Object.entries(FX_RATES)
              .filter(([code]) => code !== 'AED')
              .map(([code, info]) => {
                const converted = (num * info.rate).toFixed(0)
                return (
                  <div key={code} className="curr-result-card">
                    <div className="curr-card-top">
                      <span className="curr-card-flag">{info.flag}</span>
                      <span className="curr-card-code">{code}</span>
                    </div>
                    <div className="curr-card-amount">
                      <span className="curr-symbol">{info.symbol}</span>
                      <span className="curr-value">{converted ? Number(converted).toLocaleString() : '0'}</span>
                    </div>
                    <div className="curr-card-desc">{info.label}</div>
                    <div className="curr-rate-tag">1 AED ≈ {info.rate} {code}</div>
                  </div>
                )
              })}
          </div>

          {/* Footer note */}
          <div className="curr-modal-footer">
            <div className="curr-footer-info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>Rates are approximate indicative market averages. All bookings and card payments on-site are processed in AED.</span>
            </div>
            <button 
              className="curr-footer-done-btn"
              onClick={closeConverter}
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
