/**
 * Muted, abstract placeholder for photos / video frames.
 * Quiet textured block; caption is rendered only when `label` is provided.
 * Pass aspect/ratio via `className` (e.g. "aspect-[16/9]").
 */
export default function ArtPlaceholder({ label, sub, className = '', bordered = true, alignLabel = 'left' }) {
  return (
    <div
      className={`relative flex w-full flex-col justify-end overflow-hidden bg-bg-1 ${className}`}
      role="img"
      aria-label={label ? `Placeholder — ${label}` : 'Placeholder image'}
    >
      {/* vignette + faint highlight */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 90% at 30% 0%, rgba(255,255,255,0.045), transparent 45%), radial-gradient(140% 120% at 85% 100%, rgba(194,162,91,0.05), transparent 55%)',
        }}
      />
      {/* film grain */}
      <div className="grain absolute inset-0 opacity-[0.5] mix-blend-overlay" aria-hidden="true" />
      {/* faint oversized clef glyph, top-right */}
      <svg
        viewBox="0 0 64 64"
        className="absolute -top-6 -right-4 h-[62%] aspect-square text-gold opacity-[0.06]"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="0.8">
          <path d="M32 14c-6.5 3.6-8.4 9.2-6.6 14.7 1.8 5.5 7.2 7.3 6.4 12.8-.7 4.7-4.2 7.5-8.8 7.5" />
          <path d="M25.5 23.5h14" />
          <path d="M25.5 32.5h14" />
          <path d="M32 14v35.5" />
        </g>
      </svg>
      {/* edge line */}
      {bordered && <div className="absolute inset-0 border border-white/5" aria-hidden="true" />}

      {label && (
        <div className={`relative z-10 p-5 ${alignLabel === 'center' ? 'text-center' : ''}`}>
          <p className="text-sm text-ink/85">{label}</p>
          {sub && <p className="label mt-1">{sub}</p>}
        </div>
      )}
    </div>
  )
}