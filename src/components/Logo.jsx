import { b } from '../lib/base'

export default function Logo({ className = '', compact = false }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={b('/amc-mark.svg')}
        width={compact ? 26 : 32}
        height={compact ? 26 : 32}
        alt=""
        aria-hidden="true"
      />
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