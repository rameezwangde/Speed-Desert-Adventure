import { FX_RATES } from '../context/CurrencyContext'

export { FX_RATES }

/**
 * Formats a raw AED number into the currently selected currency string,
 * or formats with specific rate info if provided.
 */
export function formatAedPrice(aedVal, currencyCode = 'AED') {
  if (aedVal === undefined || aedVal === null || aedVal === '') return ''
  const curr = FX_RATES[currencyCode] || FX_RATES.AED

  const num = typeof aedVal === 'number'
    ? aedVal
    : parseFloat(String(aedVal).replace(/[^0-9.]/g, ''))

  if (isNaN(num)) return String(aedVal)

  const converted = Math.round(num * curr.rate)
  const formattedNum = converted.toLocaleString()

  if (currencyCode === 'AED') {
    return `${formattedNum} AED`
  }

  if (curr.prefix) {
    return `${curr.symbol}${formattedNum} ${currencyCode}`
  }

  return `${formattedNum} ${curr.symbol}`
}

/**
 * Backwards-compatible alias for formatAedPrice
 */
export function formatMultiPrice(aedVal, currencyCode = 'AED') {
  return formatAedPrice(aedVal, currencyCode)
}

/**
 * Helper to convert complex price strings containing AED to another currency.
 * e.g. "1 hr: 1300 AED | 2 hrs: 1800 AED" -> "1 hr: $354 USD | 2 hrs: $490 USD"
 */
export function formatPriceString(str, currencyCode = 'AED') {
  if (!str) return ''
  const curr = FX_RATES[currencyCode] || FX_RATES.AED

  return str.replace(/(\d+(?:\.\d+)?)\s*(?:AED|Dirhams?)/gi, (match, p1) => {
    const num = parseFloat(p1)
    if (isNaN(num)) return match
    const converted = Math.round(num * curr.rate)
    const formattedNum = converted.toLocaleString()

    if (currencyCode === 'AED') {
      return `${formattedNum} AED`
    }
    if (curr.prefix) {
      return `${curr.symbol}${formattedNum} ${currencyCode}`
    }
    return `${formattedNum} ${curr.symbol}`
  })
}
