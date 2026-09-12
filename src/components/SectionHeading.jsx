import Ornament from './Ornament'

export default function SectionHeading({ title, sub, center = true, rule = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="headline text-3xl leading-snug text-ink sm:text-4xl">{title}</h2>
      {sub && (
        <p className={`mt-4 text-base leading-relaxed text-mute ${center ? 'mx-auto max-w-2xl' : ''}`}>
          {sub}
        </p>
      )}
      {rule && <Ornament className="mt-8" />}
    </div>
  )
}