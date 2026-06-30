import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import interiorImg from '../assets/interior.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  const prefersReduced = useReducedMotion()

  const fade = (delay: number, y = 24) => ({
    initial: prefersReduced ? {} : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: EASE },
  })

  return (
    <section
      className="relative flex flex-col justify-end"
      style={{ minHeight: '100dvh' }}
      aria-label="Pahinga sa Bawat Higop - Rest in Every Sip"
    >
      <img
        src={interiorImg}
        alt="The warm slatted-wood interior of Kapé Kanlungan, bathed in soft amber light"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        draggable={false}
      />

      {/* Dark gradient anchored to bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, oklch(0.10 0.018 48 / 0.96) 0%, oklch(0.10 0.018 48 / 0.55) 38%, oklch(0.10 0.018 48 / 0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Text anchored bottom-left — film still composition */}
      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-24" style={{ zIndex: 'var(--z-base)' }}>
        <div className="max-w-lg">
          <motion.p
            {...fade(0.1, 10)}
            className="mb-4 text-xs font-medium tracking-[0.22em] uppercase"
            style={{ color: 'var(--amber)', fontFamily: 'var(--font-body)' }}
          >
            Specialty Coffee, Sibalom, Antique
          </motion.p>

          <motion.h1
            {...fade(0.25, 32)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.8rem, 10vw, 7.5rem)',
              color: 'var(--ink)',
              lineHeight: 1.0,
              fontWeight: 700,
              letterSpacing: '0.01em',
            }}
          >
            Pahinga sa<br />Bawat Higop.
          </motion.h1>

          <motion.p
            {...fade(0.45, 18)}
            className="mt-5 max-w-xs italic"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              color: 'oklch(0.94 0.015 80 / 0.80)',
              lineHeight: 1.65,
            }}
          >
            Rest in every sip.
          </motion.p>

          <motion.div {...fade(0.6, 14)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
              style={{ background: 'var(--amber)', color: 'var(--bg)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-dk)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber)')}
            >
              Find the Café
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="#story"
              className="text-sm transition-colors duration-200 underline underline-offset-4 decoration-1"
              style={{ color: 'oklch(0.94 0.015 80 / 0.72)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.94 0.015 80 / 0.72)')}
            >
              Our story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
