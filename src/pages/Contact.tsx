import React, { useState } from 'react'
import { SocialRow } from '../components/SocialIcons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (k: string, v: string) => setForm(s => ({ ...s, [k]: v }))
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-2">Contact</h1>
      <p className="text-neutral-600 mb-6">Let’s collaborate or just say hi. I usually reply within 1–2 days.</p>
      <div className="mb-8">
        <SocialRow
          links={{
            github: 'https://github.com/your-github',
            linkedin: 'https://www.linkedin.com/in/your-linkedin',
            facebook: 'https://facebook.com/your-page',
            instagram: 'https://instagram.com/your-ig',
          }}
          rounded="rounded-2xl"
        />
      </div>
      {sent ? (
        <div className="rounded-2xl p-6 bg-green-50 ring-1 ring-green-200">Thanks! I’ll get back to you soon.</div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl p-6 bg-white ring-1 ring-black/5 shadow-sm">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Your name</label>
            <input required value={form.name} onChange={e => onChange('name', e.target.value)} placeholder="Your name" className="px-4 py-3 rounded-2xl bg-neutral-50 ring-1 ring-black/10 focus:ring-neutral-300 outline-none" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input required type="email" value={form.email} onChange={e => onChange('email', e.target.value)} placeholder="you@example.com" className="px-4 py-3 rounded-2xl bg-neutral-50 ring-1 ring-black/10 focus:ring-neutral-300 outline-none" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={6} value={form.message} onChange={e => onChange('message', e.target.value)} placeholder="Tell me about your idea…" className="px-4 py-3 rounded-2xl bg-neutral-50 ring-1 ring-black/10 focus:ring-neutral-300 outline-none" />
          </div>
          <button className="px-5 py-3 rounded-2xl bg-neutral-900 text-white font-medium hover:opacity-90">Send</button>
        </form>
      )}
      <div className="mt-10 text-sm text-neutral-600">
        Prefer email? <a href="nanthawat.khom@gmail.com" className="underline">"nanthawat.khom@gmail.com"</a>
      </div>
    </section>
  )
}
