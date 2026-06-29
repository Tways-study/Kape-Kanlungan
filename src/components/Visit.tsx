import { type ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Phone, Clock, FacebookLogo } from '@phosphor-icons/react'
import alcoveImg from '../assets/alcove.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg mt-0.5"
        style={{ background: 'var(--lift)', color: 'var(--amber)' }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p
          className="text-xs font-medium tracking-[0.14em] uppercase mb-1"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
        >
          {label}
        </p>
        <div style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)', lineHeight: 1.6, fontSize: '0.925rem' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Visit() {
  const prefersReduced = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-24 md:pb-32">

        <motion.div {...reveal(0)} className="mb-16 md:mb-20">
          <h2
            id="visit-heading"
            className="italic"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              color: 'var(--ink)',
              lineHeight: 1.05,
            }}
          >
            Come find us.
          </h2>
          <p
            className="mt-4 max-w-xs text-sm"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            A warm cup and a quiet corner, waiting for you every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

          {/* Info panel */}
          <motion.div
            {...reveal(0.1)}
            className="rounded-2xl p-8 md:p-10 space-y-8"
            style={{ background: 'var(--surface)', border: '1px solid var(--rim)' }}
          >
            <InfoRow icon={<MapPin size={16} />} label="Address">
              <p className="font-medium">District 1, Sibalom</p>
              <p className="mt-0.5" style={{ color: 'var(--muted)' }}>Antique, Philippines 5713</p>
            </InfoRow>

            <InfoRow icon={<Phone size={16} />} label="Contact">
              <a
                href="tel:+639171139844"
                className="font-medium hover:underline underline-offset-2 transition-colors duration-200"
                style={{ color: 'var(--ink)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--amber)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink)')}
              >
                0917 113 9844
              </a>
              <p className="mt-0.5" style={{ color: 'var(--muted)' }}>Call or message us</p>
            </InfoRow>

            <InfoRow icon={<Clock size={16} />} label="Hours">
              <p className="font-medium">Daily, 8:00 AM - 10:00 PM</p>
              <p className="mt-0.5" style={{ color: 'var(--muted)' }}>Open every day of the week</p>
            </InfoRow>

            <div
              className="pt-6"
              style={{ borderTop: '1px solid var(--rim)' }}
            >
              <p className="text-xs mb-3" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                Follow along
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61582758912488"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                aria-label="Kapé Kanlungan on Facebook"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--amber)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                <FacebookLogo size={16} aria-hidden="true" />
                Facebook
              </a>
            </div>
          </motion.div>

          {/* Photo panel */}
          <motion.div
            {...reveal(0.18)}
            className="rounded-2xl overflow-hidden relative"
            style={{ minHeight: '320px', border: '1px solid var(--rim)' }}
          >
            <img
              src={alcoveImg}
              alt="A quiet corner inside Kapé Kanlungan with tropical plants and warm light"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, oklch(0.10 0.018 48 / 0.70) 0%, transparent 55%)',
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
              <p
                className="text-sm italic"
                style={{ color: 'oklch(0.90 0.015 80 / 0.75)', fontFamily: 'var(--font-serif)' }}
              >
                A quiet corner waiting for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
