import { useEffect, useRef, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, Headphones, Maximize, Play, Video, Volume2, VolumeX, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'
import { audioItems, mediaItems, videoItems } from '../data/siteData'

const photoCards = mediaItems

const fmt = (s) => {
  if (!Number.isFinite(s) || s <= 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function AudioTrack({ track, onPlayRequest, onRegister }) {
  const audioRef = useRef(null)
  const barRef = useRef(null)
  const [missing, setMissing] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => () => { audioRef.current?.pause() }, [])

  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0

  function toggle() {
    const el = audioRef.current
    if (!el) return
    if (el.paused) {
      onPlayRequest()
      el.play()
    } else {
      el.pause()
    }
  }

  function seek(e) {
    const el = audioRef.current
    const bar = barRef.current
    if (!el || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    el.currentTime = ratio * (el.duration || 0)
  }

  function assignRef(el) {
    audioRef.current = el
    onRegister(el)
  }

  return (
    <div className="border-b border-line py-6">
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={toggle}
          disabled={missing}
          aria-label={playing ? `Pause ${track.title}` : `Play ${track.title}`}
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors disabled:cursor-default disabled:opacity-40 ${
            playing ? 'bg-gold text-bg' : 'hover:bg-gold hover:text-bg'
          }`}
        >
          {playing ? (
            <span aria-hidden="true" className="flex h-[17px] w-[15px] items-center justify-between">
              <span className="h-full w-[5px] rounded-[1px] bg-bg" />
              <span className="h-full w-[5px] rounded-[1px] bg-bg" />
            </span>
          ) : (
            <Play size={18} className="ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <div className="min-w-0">
              <h3 className="headline text-lg text-ink sm:text-xl">{track.title}</h3>
              <p className="label mt-1">{track.venue}</p>
            </div>
            <p className="shrink-0 text-[11px] tracking-[0.2em] text-dim uppercase">
              {playing ? `${fmt(current)} · ${fmt(duration)}` : track.duration}
            </p>
          </div>

          <div
            ref={barRef}
            onClick={seek}
            role="slider"
            aria-label={`Seek ${track.title}`}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(current)}
            className="group relative mt-4 h-5 cursor-pointer"
          >
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-2" />
            <div
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gold transition-[width] duration-150"
              style={{ width: `${pct}%` }}
            />
            <div
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold transition-colors group-hover:bg-gold-2"
              style={{ left: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {missing ? (
        <p className="mt-4 text-xs tracking-[0.18em] text-dim uppercase">Recording coming soon</p>
      ) : (
        <audio
          ref={assignRef}
          preload="none"
          src={track.src}
          onError={() => setMissing(true)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false)
            setCurrent(0)
          }}
          className="hidden"
        />
      )}
    </div>
  )
}

function VideoPlayer({ video, aspectClass, onPlayRequest, onRegister }) {
  const videoRef = useRef(null)
  const barRef = useRef(null)
  const wrapRef = useRef(null)
  const [missing, setMissing] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => () => { videoRef.current?.pause() }, [])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement))
    wrap.addEventListener('fullscreenchange', onChange)
    return () => wrap.removeEventListener('fullscreenchange', onChange)
  }, [])

  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0

  function toggle() {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      onPlayRequest()
      el.play()
    } else {
      el.pause()
    }
  }

  function seek(e) {
    const el = videoRef.current
    const bar = barRef.current
    if (!el || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    el.currentTime = ratio * (el.duration || 0)
  }

  function toggleMute() {
    const el = videoRef.current
    if (el) el.muted = !el.muted
  }

  function toggleFullscreen() {
    const wrap = wrapRef.current
    if (!wrap) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      wrap.requestFullscreen()
    }
  }

  function assignRef(el) {
    videoRef.current = el
    onRegister(el)
  }

  return (
    <div>
      <div ref={wrapRef} className={`relative overflow-hidden rounded-sm border border-line bg-bg-1 ${aspectClass}`}>
        <video
          ref={assignRef}
          preload="metadata"
          poster={video.image}
          src={video.src}
          playsInline
          onError={() => setMissing(true)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false)
            setCurrent(0)
          }}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          className="h-full w-full object-cover"
        />

        {!playing && !missing && (
          <button
            type="button"
            onClick={toggle}
            aria-label={`Play ${video.title}`}
            className="group absolute inset-0 grid cursor-pointer place-items-center bg-gradient-to-t from-bg/70 via-bg/10 to-transparent"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-bg sm:h-[4.5rem] sm:w-[4.5rem]">
              <Play size={22} className="ml-1" fill="currentColor" />
            </span>
          </button>
        )}

        {missing && (
          <div className="absolute inset-0">
            <ArtPlaceholder image={video.image} className="absolute inset-0 h-full w-full" />
            <p className="absolute inset-0 grid place-items-center text-[11px] tracking-[0.2em] text-dim uppercase">
              Video coming soon
            </p>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          disabled={missing}
          aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors disabled:cursor-default disabled:opacity-40 ${
            playing ? 'bg-gold text-bg' : 'hover:bg-gold hover:text-bg'
          }`}
        >
          {playing ? (
            <span aria-hidden="true" className="flex h-[11px] w-[10px] items-center justify-between">
              <span className="h-full w-[3px] rounded-[1px] bg-bg" />
              <span className="h-full w-[3px] rounded-[1px] bg-bg" />
            </span>
          ) : (
            <Play size={14} className="ml-0.5" />
          )}
        </button>

        <p className="shrink-0 text-[10px] tracking-[0.2em] text-dim uppercase">
          {playing ? `${fmt(current)} · ${fmt(duration)}` : video.duration}
        </p>

        <div
          ref={barRef}
          onClick={seek}
          role="slider"
          aria-label={`Seek ${video.title}`}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(current)}
          className="group relative h-5 min-w-0 flex-1 cursor-pointer"
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-2" />
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gold transition-[width] duration-150"
            style={{ width: `${pct}%` }}
          />
          <div
            className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold transition-colors group-hover:bg-gold-2"
            style={{ left: `${pct}%` }}
          />
        </div>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="flex shrink-0 items-center text-dim transition-colors hover:text-gold"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          className="flex shrink-0 items-center text-dim transition-colors hover:text-gold"
        >
          <Maximize size={16} />
        </button>
      </div>
    </div>
  )
}

export default function Media() {
  const [photoIndex, setPhotoIndex] = useState(null)
  const mediaRefs = useRef({})

  useEffect(() => {
    if (photoIndex === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) {
      if (e.key === 'Escape') setPhotoIndex(null)
      if (e.key === 'ArrowRight') setPhotoIndex((i) => (i === null ? null : (i + 1) % photoCards.length))
      if (e.key === 'ArrowLeft') setPhotoIndex((i) => (i === null ? null : (i - 1 + photoCards.length) % photoCards.length))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [photoIndex])

  function requestPlay() {
    Object.values(mediaRefs.current).forEach((el) => el?.pause())
  }

  function registerMedia(key) {
    return (el) => {
      if (el) mediaRefs.current[key] = el
      else delete mediaRefs.current[key]
    }
  }

  return (
    <>
      <PageHero
        title="Watch, listen, remember"
        subtitle="Video highlights, performance photography and studio recordings — a window into the sound and spirit of the choir."
      />

      {/* Video */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex items-baseline justify-between gap-6">
            <div>
              <p className="label flex items-center gap-2">Video <Video size={13} className="text-gold" /></p>
              <h2 className="headline mt-4 text-2xl sm:text-3xl">In performance</h2>
            </div>
            <Button href="https://www.youtube.com/@russianorthodoxmalechoirof9959" target="_blank" rel="noreferrer noopener" variant="ghost" className="w-auto">
              Visit our YouTube ↗
            </Button>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-3">
            {videoItems.map((v, i) => (
              <div key={v.id} className={i === 0 ? 'lg:col-span-3' : ''}>
                <VideoPlayer
                  video={v}
                  aspectClass={i === 0 ? 'aspect-[21/9]' : 'aspect-[16/9]'}
                  onPlayRequest={requestPlay}
                  onRegister={registerMedia(`video-${v.id}`)}
                />
                <div className="mt-4">
                  <h3 className="headline text-lg text-ink">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="label flex items-center gap-2">Photos <Camera size={13} className="text-gold" /></p>
              <h2 className="headline mt-4 text-2xl sm:text-3xl">Performance highlights</h2>
            </div>
          </div>

          <div className="mt-10">
            <p className="label mb-5">
              {photoCards.length} {photoCards.length === 1 ? 'photograph' : 'photographs'}
            </p>
            {photoCards.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {photoCards.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPhotoIndex(i)}
                    aria-label={`Open photo ${i + 1} of ${photoCards.length}`}
                    className="group block w-full cursor-zoom-in"
                  >
                    <ArtPlaceholder image={p.image} className="aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.03]" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="py-14 text-center text-sm text-mute">
                No photographs in this category yet — check back soon.
              </p>
            )}
          </div>

          {photoIndex !== null && photoCards[photoIndex] && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
              onClick={() => setPhotoIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Photo viewer"
            >
              <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm" aria-hidden="true" />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setPhotoIndex((i) => (i - 1 + photoCards.length) % photoCards.length); }}
                aria-label="Previous photo"
                className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-ink transition-colors hover:border-gold hover:text-gold sm:left-8"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setPhotoIndex((i) => (i + 1) % photoCards.length); }}
                aria-label="Next photo"
                className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-ink transition-colors hover:border-gold hover:text-gold sm:right-8"
              >
                <ChevronRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => setPhotoIndex(null)}
                aria-label="Close photo viewer"
                className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line-2 text-ink transition-colors hover:border-gold hover:text-gold sm:top-8 sm:right-8"
              >
                <X size={18} />
              </button>
              <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={photoCards[photoIndex].image}
                  alt=""
                  className="max-h-[82vh] max-w-full border border-line object-contain"
                />
                <p className="label mt-4 text-center">{photoIndex + 1} / {photoCards.length}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Audio */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="label flex items-center gap-2">Recordings <Headphones size={13} className="text-gold" /></p>
          <h2 className="headline mt-4 text-2xl sm:text-3xl">Listen now</h2>

          <div className="mt-12">
            {audioItems.map((a) => (
              <AudioTrack
                key={a.id}
                track={a}
                onPlayRequest={requestPlay}
                onRegister={registerMedia(`audio-${a.id}`)}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="headline max-w-md text-xl">Hear the choir live at your event.</p>
            <Button to="/enquire" className="w-auto">Make an enquiry</Button>
          </div>
        </div>
      </section>
    </>
  )
}