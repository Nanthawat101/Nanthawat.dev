import React from 'react'
import { blogPosts } from '../data/blogs'

export default function BlogsList({ previewCount }: { previewCount?: number }) {
  const items = previewCount ? blogPosts.slice(0, previewCount) : blogPosts
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(p => (
        <article key={p.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>{new Date(p.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{p.read} read</span>
          </div>
          <h3 className="mt-1 font-semibold tracking-tight">
            <a href={`#/blogs/${p.id}`} className="hover:underline">{p.title}</a>
          </h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{p.summary}</p>
          <a href={`#/blogs/${p.id}`} className="mt-3 inline-block text-sm font-medium underline">Read more</a>
        </article>
      ))}
    </div>
  )
}
