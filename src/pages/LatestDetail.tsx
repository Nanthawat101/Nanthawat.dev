import React from 'react'
import { latestItems } from '../data/latest'

export default function LatestDetail({ id }: { id: string }) {
  const item = latestItems.find(x => x.id === id)
  if (!item) return (
    <article className="prose prose-neutral max-w-none">
      <a href="#/latest" className="no-underline text-sm">← Back to Latest</a>
      <h1>Work not found</h1>
    </article>
  )
  return (
    <article className="prose prose-neutral max-w-none">
      <a href="#/latest" className="no-underline text-sm">← Back to Latest</a>
      <h1>{item.title}</h1>
      <p className="text-neutral-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
      {item.image && <img src={item.image} alt="Cover" className="rounded-2xl w-full" />}
      <p>{item.body}</p>
    </article>
  )
}
