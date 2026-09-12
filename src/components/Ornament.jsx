export default function Ornament({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-line-2" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px w-10 bg-line-2" />
    </span>
  )
}