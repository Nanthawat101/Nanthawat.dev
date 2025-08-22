import React from 'react'

/**
 * Logos in: public/images/edu/
 *   - udornwitaya.png        // Primary school
 *   - prachaksilpakarn.png   // Lower secondary
 *   - santapol.png           // Vocational
 *   - bangkok-uni.png        // University
 */

const education = [
  {
    degree: 'Primary School',
    school: 'Udorn Wittaya School',
    location: 'Udon Thani, Thailand',
    major: 'Science–Mathematics Program',
    period: '20XX – 20XX',
    logo: '/images/edu/udornwitaya.png',
  },
  {
    degree: 'Lower Secondary School',
    school: 'Prachaksilpakarn School',
    location: 'Udon Thani, Thailand',
    major: 'Science–Mathematics Program',
    period: '20XX – 20XX',
    logo: '/images/edu/prachaksilpakarn.png',
  },
  {
    degree: 'Vocational Certificate (IT)',
    school: 'Santapol Technological College',
    location: 'Udon Thani, Thailand',
    major: 'Information Technology / Computer Science',
    period: '20XX – 20XX',
    logo: '/images/edu/santapol.png',
  },
  {
    degree: 'Bachelor of Information Technology and Innovation',
    school: 'Bangkok University',
    location: 'Bangkok, Thailand',
    major: 'Game and Interactive Media',
    period: '20XX – Present',
    logo: '/images/edu/bangkok-uni.png',
  },
]

export default function About() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-neutral-600 mt-2">
          Hi, I’m <strong>Nanthawat (Tae)</strong> — a maker who combines game design, UE5 prototyping,
          and product-style frontends. I love turning complex systems into simple, joyful experiences.
        </p>
      </div>

      {/* About Me */}
      <section className="rounded-3xl bg-white ring-1 ring-black/5 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-neutral-700">
            I create games and explore digital media through <strong>Unreal Engine</strong>, 
            combining creativity with technology to bring interactive ideas to life. 
            My focus is on learning and experimenting with how media and gameplay can 
            deliver meaningful experiences.
          </p>
      </section>

      {/* Motivation */}
      <section className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-700 text-white p-6 mb-8 ring-1 ring-black/10">
        <h2 className="text-xl font-semibold mb-3">Motivation</h2>
        <blockquote className="text-lg leading-relaxed">
          “Don’t let your youth fade with regrets. Use this time to learn, build, and pursue what truly excites you.”
        </blockquote>
        <p className="mt-3 text-white/80 text-sm">— Personal reminder I share with students and peers</p>
      </section>

      {/* Research Interests */}
      <section className="rounded-3xl bg-white ring-1 ring-black/5 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Research Interests</h2>
        <ul className="grid sm:grid-cols-2 gap-3 list-disc pl-5 text-neutral-700">
          <li>Simulation & management game loops; in-game economics</li>
          <li>UE5 prototyping (camera, combat, interaction systems)</li>
          <li>AI-assisted tooling for game/asset workflows</li>
          <li>UX for creator tools & design systems</li>
          <li>Co-op systems & social play patterns</li>
          <li>Thai cultural motifs in interactive media</li>
        </ul>
      </section>

      {/* Education */}
      <section className="rounded-3xl bg-white ring-1 ring-black/5 p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>

        <ol className="space-y-8">
          {education.map((ed, i) => (
            <li key={i}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Logo + text */}
                <div className="flex items-start gap-4">
                  <img
                    src={ed.logo}
                    alt={`${ed.school} logo`}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <div className="font-medium">{ed.degree}</div>
                    <div className="text-sm text-neutral-600">
                      {ed.school} • {ed.location}
                    </div>
                    {ed.major && (
                      <div className="text-sm text-neutral-700 font-medium">
                        {ed.major}
                      </div>
                    )}
                  </div>
                </div>

                {/* period */}
                <div className="text-sm text-neutral-500">{ed.period}</div>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-xs text-neutral-500 mt-4">
          Logos are stored in <code>/public/images/edu/</code> — rename or replace them as needed.
        </p>
      </section>
    </section>
  )
}
