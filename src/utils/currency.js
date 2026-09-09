import { FX_RATES } from '../context/CurrencyContext'

export const FX = {
  USD: 0.2723,
  EUR: 0.2340,
  GBP: 0.2010,
  RUB: 25.10,
  SAR: 1.02,
  INR: 23.40
}

/**
 * Formats price in AED only:
 * formatAedPrice(1300) -> "1300 AED"
 */
export function formatAedPrice(aedVal) {
  if (!aedVal && aedVal !== 0) return ''
  const num = typeof aedVal === 'number' ? aedVal : parseFloat(String(aedVal).replace(/[^0-9.]/g, ''))
  if (isNaN(num)) return aedVal
  return `${num} AED`
}

// Backwards compatibility alias
export function formatMultiPrice(aedVal) {
  return formatAedPrice(aedVal)
}

/**
 * Helper to format a range or complex string like "1 hr: 1300 AED | 2 hrs: 1800 AED"
 */
export function formatPriceString(str) {
  if (!str) return ''
  return str.replace(/(\d+)\s*AED/gi, (match, p1) => {
    return `${p1} AED`
  })
}
