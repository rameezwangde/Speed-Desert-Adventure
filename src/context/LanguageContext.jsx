import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, languages } from '../locales'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('sda_lang')
      if (saved && translations[saved]) return saved
    } catch (e) {
      // localStorage fallback
    }
    return 'en'
  })

  const currentLang = languages.find(l => l.code === lang) || languages[0]
  const isRTL = currentLang.dir === 'rtl'

  const setLanguage = (newLang) => {
    if (translations[newLang]) {
      setLangState(newLang)
      try {
        localStorage.setItem('sda_lang', newLang)
      } catch (e) {}
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    if (isRTL) {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }
  }, [lang, isRTL])

  // Helper function to resolve nested keys like t('hero.title1')
  const t = (path, fallback = '') => {
    const keys = path.split('.')
    let current = translations[lang]
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        // Fallback to English if translation key is missing
        let enCurrent = translations.en
        for (const enKey of keys) {
          if (enCurrent && typeof enCurrent === 'object' && enKey in enCurrent) {
            enCurrent = enCurrent[enKey]
          } else {
            return fallback || path
          }
        }
        return enCurrent || fallback || path
      }
    }
    return current
  }

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t, isRTL, currentLang, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
