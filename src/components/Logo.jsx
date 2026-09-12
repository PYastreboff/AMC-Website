export default function Logo({ className = '', compact = false }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        width={compact ? 26 : 32}
        height={compact ? 26 : 32}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#c2a25b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 14c-6.5 3.6-8.4 9.2-6.6 14.7 1.8 5.5 7.2 7.3 6.4 12.8-.7 4.7-4.2 7.5-8.8 7.5" />
          <path d="M25.5 23.5h14" />
          <path d="M25.5 32.5h14" />
          <path d="M32 14v35.5" />
        </g>
      </svg>
      <span className="flex flex-col justify-center leading-none">
        <span className="text-[15px] font-light tracking-[0.26em] text-ink uppercase">
          Australian Male
        </span>
        <span className="mt-1 text-[15px] font-light tracking-[0.26em] text-ink uppercase">
          Choir
        </span>
      </span>
    </span>
  )
}