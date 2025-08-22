import React, { useEffect, useState } from 'react'

export default function CommentsWidget({ slug }: { slug: string }) {
  const storageKey = `comments:${slug}`
  const [items, setItems] = useState<{id:number;name:string;text:string}[]>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]') } catch { return [] }
  })
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const add = () => {
    if (!name.trim() || !text.trim()) return
    setItems([{ id: Date.now(), name, text }, ...items])
    setName(''); setText('')
  }

  return (
    <section className="not-prose mt-10">
      <h3 className="text-lg font-semibold mb-3">Comments</h3>
      <div className="rounded-2xl p-4 bg-neutral-50 ring-1 ring-black/5 flex flex-col gap-3">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="px-3 py-2 rounded-xl bg-white ring-1 ring-black/10" />
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write a comment..." rows={3} className="px-3 py-2 rounded-xl bg-white ring-1 ring-black/10" />
        <div className="flex justify-end"><button onClick={add} className="px-4 py-2 text-sm rounded-xl bg-neutral-900 text-white hover:opacity-90">Post</button></div>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map(c => (
          <li key={c.id} className="rounded-xl p-4 bg-white ring-1 ring-black/5">
            <div className="text-sm font-medium">{c.name}</div>
            <div className="text-sm text-neutral-700 whitespace-pre-wrap">{c.text}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
