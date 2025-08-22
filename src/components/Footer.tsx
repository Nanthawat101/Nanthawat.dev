import React from 'react'
import { SocialRow } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
          <p>© {new Date().getFullYear()} Nanthawat KhomKhai. All rights reserved.</p>
          <SocialRow
            size="sm"
            links={{
              github: 'https://github.com/Nanthawat101',
              linkedin: 'https://www.linkedin.com/in/nantawat-khomkhai-772793242/',
              facebook: 'https://www.facebook.com/nantawat.khomkhai49',
              instagram: 'https://www.instagram.com/ntw_.t/',
            }}
            rounded="rounded-full"
          />
        </div>
        <p className="opacity-80"></p>
      </div>
    </footer>
  )
}
