export default function BrushButton({ children, href = '#contact', className = '' }) {
  return <a className={`brush-button ${className}`} href={href}><span>{children}</span></a>
}
