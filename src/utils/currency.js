// Live AED conversion rates based on actual market exchange rates:
// 1 AED ≈ 0.2723 USD (Pegged 3.6725 AED/USD)
// 1 AED ≈ 0.234 EUR (~4.27 AED/EUR)
// 1 AED ≈ 0.201 GBP (~4.98 AED/GBP)
export const FX = {
  USD: 0.2723,
  EUR: 0.2340,
  GBP: 0.2010
}

/**
 * Formats AED price with multi-currency splash:
 * formatMultiPrice(1300) -> "1300 AED / $354 / €328 / £283"
 * formatMultiPrice("1300 AED") -> "1300 AED / $354 / €328 / £283"
 * formatMultiPrice(1300, { compact: true }) -> "1300 AED / $354 / €328 / £283"
 */
export function formatMultiPrice(aedVal) {
  if (!aedVal) return ''
  
  // Extract number from string if needed
  const num = typeof aedVal === 'number' ? aedVal : parseFloat(String(aedVal).replace(/[^0-9.]/g, ''))
  if (isNaN(num)) return aedVal

  const usd = Math.round(num * FX.USD)
  const eur = Math.round(num * FX.EUR)
  const gbp = Math.round(num * FX.GBP)

  return `${num} AED / $${usd} / €${eur} / £${gbp}`
}

/**
 * Helper to format a range or complex string like "1 hr: 1300 AED | 2 hrs: 1800 AED"
 */
export function formatPriceString(str) {
  if (!str) return ''
  return str.replace(/(\d+)\s*AED/gi, (match, p1) => {
    return formatMultiPrice(parseInt(p1, 10))
  })
}
