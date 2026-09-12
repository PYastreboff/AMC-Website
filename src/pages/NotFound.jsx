import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="headline text-7xl text-gold sm:text-8xl">404</p>
      <h1 className="headline mt-6 text-2xl text-ink sm:text-3xl">This page has left the stage</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mute">
        The page you're looking for doesn't exist or has been moved. Let's get you back to the show.
      </p>
      <Link to="/" className="btn btn-gold mt-10">
        <Compass size={14} />
        Back to home
      </Link>
    </section>
  )
}