import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurStory from './pages/OurStory'
import MeetTheChoir from './pages/MeetTheChoir'
import Repertoire from './pages/Repertoire'
import Events from './pages/Events'
import EventType from './pages/EventType'
import Media from './pages/Media'
import Enquire from './pages/Enquire'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import NotFound from './pages/NotFound'
import Legal from './pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/choir" element={<MeetTheChoir />} />
            <Route path="/about/repertoire" element={<Repertoire />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventType />} />
            <Route path="/media" element={<Media />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/contact" element={<Navigate to="/enquire" replace />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/privacy" element={<Legal section="privacy" />} />
            <Route path="/terms" element={<Legal section="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}