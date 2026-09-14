import { useState } from 'react'

export default function ArtPlaceholder({ label, sub, className = '', bordered = true, alignLabel = 'left', image }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`relative flex w-full flex-col justify-end overflow-hidden bg-bg-1 ${className}`}
      role="img"
      aria-label={
        image
          ? (label ? `Image — ${label}` : 'Image')
          : (label ? `Placeholder — ${label}` : 'Placeholder image')
      }
    >
      {image ? (
        <>
          <img
            src={image}
            alt={label || ''}
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!loaded && <div className="absolute inset-0 animate-pulse bg-line/50" aria-hidden="true" />}
        </>
      ) : (
        <>
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
          {/* faint oversized logo mark, top-right */}
          <img
            src="/amc-mark.svg"
            alt=""
            aria-hidden="true"
            className="absolute -top-6 -right-4 h-[62%] aspect-square opacity-[0.06]"
          />
          {label && (
            <div className={`relative z-10 p-5 ${alignLabel === 'center' ? 'text-center' : ''}`}>
              <p className="text-sm text-ink/85">{label}</p>
              {sub && <p className="label mt-1">{sub}</p>}
            </div>
          )}
        </>
      )}
      {/* edge line */}
      {bordered && <div className="absolute inset-0 border border-white/5" aria-hidden="true" />}
    </div>
  )
}