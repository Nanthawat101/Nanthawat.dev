import React, { useState } from 'react'

function navigate(path: string) {
  window.location.hash = path.startsWith('/') ? path : `/${path}`
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/latest', label: 'Latest' },
    { to: '/blogs', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navigate('/home')} className="font-semibold tracking-tight text-lg">
          Nanthawat<span className="text-neutral-400">.dev</span>
        </button>
        <nav className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <a key={l.to} href={`#${l.to}`} className="text-sm px-3 py-2 rounded-full hover:bg-neutral-100 transition">{l.label}</a>
          ))}
        </nav>
        <a href="#/contact" className="hidden md:inline-flex items-center px-3 py-2 rounded-full bg-neutral-900 text-white text-sm hover:opacity-90">
          Get in touch
        </a>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col">
            {links.map(l => (
              <a key={l.to} href={`#${l.to}`} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
