import { useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'motion/react'
import { List, X } from '@phosphor-icons/react'
import logoImg from '../assets/logo.jpg'

const links = [
  { label: 'About', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Menu', href: '#menu' },
  { label: 'Visit', href: '#visit' },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 60))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0"
        animate={{
          backgroundColor: scrolled ? 'oklch(0.12 0.020 48 / 0.96)' : 'oklch(0.12 0.020 48 / 0)',
          borderBottomColor: scrolled ? 'oklch(0.26 0.020 52)' : 'oklch(0.26 0.020 52 / 0)',
        }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
          borderBottom: '1px solid transparent',
          zIndex: 'var(--z-sticky)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 flex-shrink-0" aria-label="Kapé Kanlungan — home">
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              style={{ boxShadow: '0 0 0 1.5px var(--amber)' }}
            />
            <span
              className="hidden sm:block text-sm font-medium"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.03em' }}
            >
              Kapé Kanlungan
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                {label}
              </a>
            ))}
            <a
              href="#visit"
              className="text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-200"
              style={{ background: 'var(--amber)', color: 'var(--bg)', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-dk)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber)')}
            >
              Find Us
            </a>
          </nav>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ color: 'var(--ink)' }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex flex-col pt-20 px-8 pb-12 md:hidden"
            style={{ background: 'var(--bg)', zIndex: 'var(--z-overlay)' as never }}
          >
            <nav className="flex flex-col gap-10 mt-6" aria-label="Mobile navigation">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                  className="text-4xl font-normal italic"
                  style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-auto text-sm font-medium text-center py-3.5 rounded-full"
              style={{ background: 'var(--amber)', color: 'var(--bg)' }}
            >
              Find Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
