import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Latest from './pages/Latest'
import LatestDetail from './pages/LatestDetail'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/home')
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash.replace(/^#\/?/, '/')
}

function navigate(path: string) {
  window.location.hash = path.startsWith('/') ? path : `/${path}`
}

export default function App() {
  const route = useHashRoute()
  useEffect(() => {
    if (!window.location.hash) navigate('/home')
  }, [])

  const content = useMemo(() => {
    const parts = route.split('/').filter(Boolean)
    const root = `/${parts[0] || 'home'}`
    if (root === '/home') return <Home />
    if (root === '/about') return <About />
    if (root === '/latest') {
      if (parts[1]) return <LatestDetail id={parts[1]} />
      return <Latest />
    }
    if (root === '/blogs') {
      if (parts[1]) return <BlogDetail id={parts[1]} />
      return <Blogs />
    }
    if (root === '/contact') return <Contact />
    return <NotFound />
  }, [route])

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {content}
      </main>
      <Footer />
    </div>
  )
}
