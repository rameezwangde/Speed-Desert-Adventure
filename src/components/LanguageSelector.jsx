import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageSelector({ isMobile = false }) {
  const { lang, setLanguage, languages, currentLang } = useLanguage()
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
      <div className="mobile-lang-selector">
        <span className="mobile-lang-label">Language:</span>
        <div className="mobile-lang-grid">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`mobile-lang-btn ${lang === l.code ? 'active' : ''}`}
              onClick={() => setLanguage(l.code)}
            >
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-native">{l.native}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="lang-selector-container" ref={dropdownRef}>
      <button 
        className={`lang-toggle-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Select Language"
        type="button"
      >
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <svg 
          className="lang-chevron" 
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
            className="lang-dropdown-menu"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {languages.map((l) => (
              <button
                key={l.code}
                className={`lang-option-btn ${lang === l.code ? 'selected' : ''}`}
                onClick={() => {
                  setLanguage(l.code)
                  setOpen(false)
                }}
                type="button"
              >
                <span className="lang-flag">{l.flag}</span>
                <span className="lang-native">{l.native}</span>
                <span className="lang-code-tag">{l.code.toUpperCase()}</span>
                {lang === l.code && (
                  <span className="lang-active-dot"></span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
