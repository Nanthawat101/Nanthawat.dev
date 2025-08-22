import React from 'react'
import { latestItems } from '../data/latest'

export default function LatestGrid({ previewCount }: { previewCount?: number }) {
  const items = previewCount ? latestItems.slice(0, previewCount) : latestItems
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(it => (
        <article key={it.id} className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition">
          {it.image && <img src={it.image} alt="Cover" className="w-full h-44 object-cover" />}
          <div className="p-5">
            <div className="text-xs text-neutral-500">{new Date(it.date).toLocaleDateString()}</div>
            <h3 className="mt-1 font-semibold tracking-tight group-hover:underline">
              <a href={`#/latest/${it.id}`}>{it.title}</a>
            </h3>
            <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{it.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {it.tags?.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 ring-1 ring-black/5">{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
