import React, { createContext, useContext, useState, useEffect } from 'react'

export const FX_RATES = {
  AED: { symbol: 'AED', rate: 1.0, label: 'AED (UAE Dirham)', flag: '🇦🇪', prefix: false },
  USD: { symbol: '$', rate: 0.2723, label: 'USD (US Dollar)', flag: '🇺🇸', prefix: true },
  EUR: { symbol: '€', rate: 0.2341, label: 'EUR (Euro)', flag: '🇪🇺', prefix: true },
  GBP: { symbol: '£', rate: 0.2010, label: 'GBP (British Pound)', flag: '🇬🇧', prefix: true },
  RUB: { symbol: '₽', rate: 23.24, label: 'RUB (Russian Ruble)', flag: '🇷🇺', prefix: false },
  SAR: { symbol: 'SAR', rate: 1.021, label: 'SAR (Saudi Riyal)', flag: '🇸🇦', prefix: false },
  INR: { symbol: '₹', rate: 25.90, label: 'INR (Indian Rupee)', flag: '🇮🇳', prefix: true },
}

const CurrencyContext = createContext()

export function CurrencyProvider({ children }) {
  const [currentCurrency, setCurrentCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('sda_currency')
      if (saved && FX_RATES[saved]) return saved
    } catch {
      // ignore
    }
    return 'AED'
  })

  useEffect(() => {
    try {
      localStorage.setItem('sda_currency', currentCurrency)
    } catch {
      // ignore
    }
  }, [currentCurrency])

  const setCurrency = (code) => {
    if (FX_RATES[code]) {
      setCurrentCurrency(code)
    }
  }

  const formatPrice = (aedVal, fallbackCurrency) => {
    if (aedVal === undefined || aedVal === null || aedVal === '') return ''
    const currCode = fallbackCurrency || currentCurrency
    const curr = FX_RATES[currCode] || FX_RATES.AED

    const num = typeof aedVal === 'number'
      ? aedVal
      : parseFloat(String(aedVal).replace(/[^0-9.]/g, ''))

    if (isNaN(num)) return String(aedVal)

    const converted = Math.round(num * curr.rate)
    const formattedNum = converted.toLocaleString()

    if (currCode === 'AED') {
      return `${formattedNum} AED`
    }

    if (curr.prefix) {
      return `${curr.symbol}${formattedNum} ${currCode}`
    }

    return `${formattedNum} ${curr.symbol}`
  }

  const formatPriceString = (str, fallbackCurrency) => {
    if (!str) return ''
    const currCode = fallbackCurrency || currentCurrency
    const curr = FX_RATES[currCode] || FX_RATES.AED

    // Replaces patterns like "1300 AED", "AED 400", "AED 400.00", "From AED 50", "1000 AED (1 Hr) - 1800 AED (2 Hrs)"
    return str.replace(/(?:AED\s*(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s*AED)/gi, (match, p1, p2) => {
      const val = parseFloat(p1 || p2)
      if (isNaN(val)) return match
      const converted = Math.round(val * curr.rate)
      const formattedNum = converted.toLocaleString()

      if (currCode === 'AED') {
        return `${formattedNum} AED`
      }
      if (curr.prefix) {
        return `${curr.symbol}${formattedNum} ${currCode}`
      }
      return `${formattedNum} ${curr.symbol}`
    })
  }

  const currencyList = Object.keys(FX_RATES).map(code => ({
    code,
    ...FX_RATES[code]
  }))

  const currencyInfo = FX_RATES[currentCurrency] || FX_RATES.AED

  return (
    <CurrencyContext.Provider 
      value={{ 
        currentCurrency,
        currency: currentCurrency,
        setCurrency,
        formatPrice,
        formatPriceString,
        currencyInfo,
        currencies: currencyList,
        FX_RATES
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
