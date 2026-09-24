export default function BrushButton({ children, href = '#contact', className = '', target, rel }) {
  return <a className={`brush-button ${className}`} href={href} target={target} rel={rel}><span>{children}</span></a>
}
