
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { MdKeyboardArrowUp } from 'react-icons/md'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      className="bg-[var(--color-quaternary)] text-neutral-900"
      style={{ fontFamily: 'var(--font-plex)' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2
              className="mb-5 text-3xl font-extrabold tracking-tight"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Sauti
              <span className="text-[var(--color-primary)]">
                Push
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-neutral-600">
              Simple, fast, and reliable communication for teams,
              communities, and the people who matter.
            </p>

            {/* Small brand line */}
            <div
              className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]"
              style={{ fontFamily: 'var(--font-plex)' }}
            >
              Connect. Communicate. Push.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider text-neutral-900"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Hot Links
            </h3>

            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Our Blog
                </a>
              </li>

              <li>
                <a
                  href="/enterprise"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Enterprise
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider text-neutral-900"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Sauti Push
            </h3>

            <ul className="space-y-3 text-sm text-neutral-600">
              <li>Push-to-Talk</li>
              <li>Community Channels</li>
              <li>Private Communication</li>
              <li>Fast & Reliable Voice</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider text-neutral-900"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Connect With Us
            </h3>

            <p className="mb-2 text-sm text-neutral-600">
              Kampala, Uganda
            </p>

            <a
              href="mailto:hello@sautipush.com"
              className="text-sm text-neutral-600 transition-colors hover:text-[var(--color-primary)]"
            >
              hello@sautipush.com
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-600 shadow-sm transition-all hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-600 shadow-sm transition-all hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-600 shadow-sm transition-all hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <FaTwitter size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-600 shadow-sm transition-all hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <FaYoutube size={17} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-neutral-300 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 text-sm md:flex-row">

            <p className="text-neutral-500">
              © {new Date().getFullYear()} Sauti Push. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Terms & Conditions
              </a>

              {/* Back To Top */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-secondary)] text-neutral-900 transition-all hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <MdKeyboardArrowUp size={22} />
              </button>

            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer