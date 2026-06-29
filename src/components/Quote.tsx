import { motion, useReducedMotion } from 'motion/react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Quote() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-label="Brand statement"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-2xl mx-auto px-8 py-32 md:py-44 text-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {/* Opening quote mark — large, amber, barely visible */}
          <div
            aria-hidden="true"
            className="mb-8 mx-auto select-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(5rem, 14vw, 10rem)',
              color: 'var(--amber)',
              opacity: 0.15,
              lineHeight: 0.7,
            }}
          >
            {'“'}
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.45rem, 3.8vw, 2.6rem)',
              color: 'var(--ink)',
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Every cup is an invitation to slow down. To sit with your thoughts. To be nowhere else but here.
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 opacity-30" style={{ background: 'var(--amber)' }} />
          </div>

          <p
            className="mt-6 text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
          >
            Kapé Kanlungan, Sibalom, Antique
          </p>
        </motion.div>
      </div>
    </section>
  )
}
