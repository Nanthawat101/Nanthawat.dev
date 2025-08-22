import React from 'react'

export default function NotFound({ what = 'page' as string }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold">404 — {what} not found</h2>
      <p className="mt-2 text-neutral-600">The content you’re looking for doesn’t exist yet.</p>
      <div className="mt-6">
        <a href="#/home" className="underline">Go home</a>
      </div>
    </div>
  )
}
