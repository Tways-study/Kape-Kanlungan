import { motion, useReducedMotion } from 'motion/react'
import pouroverImg from '../assets/pourover.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Story() {
  const prefersReduced = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.95, delay, ease: EASE },
  })

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0"
        style={{ minHeight: '90dvh' }}
      >
        {/* Left: text column */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-24 md:py-32 order-2 md:order-1">
          {/* Faint large numeral as background texture */}
          <div
            aria-hidden="true"
            className="select-none mb-8 leading-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(5rem, 14vw, 11rem)',
              color: 'var(--rim)',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            01
          </div>

          <motion.h2
            {...reveal(0)}
            id="story-heading"
            className="italic mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--ink)',
              lineHeight: 1.1,
            }}
          >
            Born from the<br />hills of Antique.
          </motion.h2>

          <motion.div
            {...reveal(0.1)}
            className="space-y-5 max-w-sm"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', lineHeight: 1.75, fontSize: '0.975rem' }}
          >
            <p>
              Kapé Kanlungan started with one idea: that a good cup of coffee should feel like coming home.
            </p>
            <p>
              Tucked in the quiet streets of Sibalom, we serve specialty coffee in a space built for stillness.
              The wooden walls hold warmth. The light moves slowly.
            </p>
            <p style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem' }}>
              Come as you are. Stay as long as you need.
            </p>
          </motion.div>

          <motion.div {...reveal(0.2)} className="mt-10">
            <span
              className="inline-block text-xs font-medium tracking-[0.18em] uppercase pb-1"
              style={{
                color: 'var(--botanical)',
                borderBottom: '1px solid var(--botanical)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Specialty coffee
            </span>
          </motion.div>
        </div>

        {/* Right: photo panel */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative order-1 md:order-2"
          style={{ minHeight: '60vw', maxHeight: '100dvh' }}
        >
          <img
            src={pouroverImg}
            alt="A slow pourover being prepared at the Kapé Kanlungan counter"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle left-edge fade to blend with the text column */}
          <div
            className="absolute inset-y-0 left-0 w-16 hidden md:block"
            style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
