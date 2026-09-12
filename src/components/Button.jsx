import { Link } from 'react-router-dom'

export function Button({ to, href, children, variant = 'gold', className = '', type, onClick, ...rest }) {
  const cls = `btn ${
    variant === 'gold' && 'btn-gold'
  } ${variant === 'line' && 'btn-line'} ${variant === 'ghost' && 'btn-ghost'} ${className}`

  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  return (
    <button type={type || 'button'} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  )
}