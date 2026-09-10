import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCurrency } from '../context/CurrencyContext'

export default function CurrencySelector({ isMobile = false }) {
  const { currentCurrency, setCurrency, currencies, currencyInfo } = useCurrency()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (isMobile) {
    return (
      <div className="mobile-curr-selector">
        <span className="mobile-curr-label">Currency:</span>
        <div className="mobile-curr-grid">
          {currencies.map((c) => (
            <button
              key={c.code}
              className={`mobile-curr-btn ${currentCurrency === c.code ? 'active' : ''}`}
              onClick={() => setCurrency(c.code)}
              type="button"
            >
              <span className="curr-flag">{c.flag}</span>
              <span className="curr-code">{c.code}</span>
              <span className="curr-symbol-tag">({c.symbol})</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="curr-selector-container" ref={dropdownRef}>
      <button 
        className={`curr-toggle-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Select Currency"
        type="button"
      >
        <span className="curr-flag">{currencyInfo.flag}</span>
        <span className="curr-code">{currentCurrency}</span>
        <span className="curr-symbol-badge">{currencyInfo.symbol}</span>
        <svg 
          className="curr-chevron" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="curr-dropdown-menu"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="curr-dropdown-header">
              <span>SELECT CURRENCY</span>
            </div>
            {currencies.map((c) => (
              <button
                key={c.code}
                className={`curr-option-btn ${currentCurrency === c.code ? 'selected' : ''}`}
                onClick={() => {
                  setCurrency(c.code)
                  setOpen(false)
                }}
                type="button"
              >
                <span className="curr-flag">{c.flag}</span>
                <span className="curr-name">{c.code} ({c.symbol})</span>
                <span className="curr-rate-info">
                  {c.code === 'AED' ? 'Base (1:1)' : `1 AED ≈ ${c.rate} ${c.code}`}
                </span>
                {currentCurrency === c.code && (
                  <span className="curr-active-dot"></span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
