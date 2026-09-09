import React, { createContext, useContext, useState } from 'react'

export const FX_RATES = {
  AED: { symbol: 'AED', rate: 1.0, label: 'AED (UAE Dirham)', flag: '🇦🇪' },
  USD: { symbol: '$', rate: 0.2723, label: 'USD (US Dollar)', flag: '🇺🇸' },
  EUR: { symbol: '€', rate: 0.2340, label: 'EUR (Euro)', flag: '🇪🇺' },
  GBP: { symbol: '£', rate: 0.2010, label: 'GBP (British Pound)', flag: '🇬🇧' },
  RUB: { symbol: '₽', rate: 25.10, label: 'RUB (Russian Ruble)', flag: '🇷🇺' },
  SAR: { symbol: 'SAR', rate: 1.02, label: 'SAR (Saudi Riyal)', flag: '🇸🇦' },
  INR: { symbol: '₹', rate: 23.40, label: 'INR (Indian Rupee)', flag: '🇮🇳' },
}

const CurrencyContext = createContext()

export function CurrencyProvider({ children }) {
  const [isConverterOpen, setIsConverterOpen] = useState(false)
  const [modalAedAmount, setModalAedAmount] = useState('1000')

  const openConverter = (initialAed = 1000) => {
    // Extract numeric if string like "1300 AED" or number
    const num = typeof initialAed === 'number' 
      ? initialAed 
      : (parseFloat(String(initialAed).replace(/[^0-9.]/g, '')) || 1000)
    setModalAedAmount(String(num))
    setIsConverterOpen(true)
  }

  const closeConverter = () => {
    setIsConverterOpen(false)
  }

  return (
    <CurrencyContext.Provider 
      value={{ 
        isConverterOpen, 
        setIsConverterOpen,
        modalAedAmount,
        setModalAedAmount,
        openConverter,
        closeConverter,
        currencies: Object.keys(FX_RATES).map(key => ({ code: key, ...FX_RATES[key] })),
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
