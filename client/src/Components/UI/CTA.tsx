import React from 'react'
import { Link } from 'react-router-dom'

function CTA({
  eyebrow = 'Get started with Sauti Push',
  title = 'Keep your team connected, wherever work takes you.',
  description = 'Give your team fast, reliable communication built for the way they work.',
  primaryText = 'Get started',
  primaryTo = '/signup',
  secondaryText = 'Talk to our team',
  secondaryTo = '/contact',
}) {
  return (
    <section className="px-5 py-16 lg:px-7 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-14 text-center sm:px-10 lg:px-20 lg:py-20">

          {/* Background decoration */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              {description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to={primaryTo}
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
              >
                {primaryText}
              </Link>

              <Link
                to={secondaryTo}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {secondaryText}
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
