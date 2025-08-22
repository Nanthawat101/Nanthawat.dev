import React from 'react'
import LatestGrid from '../components/LatestGrid'
import BlogsList from '../components/BlogsList'

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 p-10 text-white shadow-xl ring-1 ring-black/10">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,.2) 1px, transparent 0)', backgroundSize: '24px 24px'}} />
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 relative">
          <img
            src="/images/profile.jpg"
            alt="Portrait"
            className="w-28 h-28 rounded-2xl object-cover ring-2 ring-white/10"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Hi, I’m Nanthawat KhomKhai (Tae).</h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Game designer & developer. I build simulation games, design clean UIs, and write about
              learning.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#/latest" className="px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium hover:opacity-90 ring-1 ring-black/10">See Latest Work</a>
              <a href="#/blogs" className="px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10">Read Blog</a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Latest</h2>
        <LatestGrid previewCount={3} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Writing</h2>
        <BlogsList previewCount={3} />
      </section>
    </section>
  )
}
