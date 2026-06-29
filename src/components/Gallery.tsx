import { motion, useReducedMotion } from 'motion/react'
import drinksImg from '../assets/drinks.jpg'
import windowsImg from '../assets/windows.jpg'
import alcoveImg from '../assets/alcove.jpg'
import counterImg from '../assets/counter.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface PhotoProps {
  src: string
  alt: string
  delayMs?: number
  className?: string
  style?: React.CSSProperties
  reduced: boolean
}

function Photo({ src, alt, delayMs = 0, className = '', style, reduced }: PhotoProps) {
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 1.0, delay: delayMs / 1000, ease: EASE }}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out"
        onMouseEnter={(e) => { if (!reduced) (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
      />
    </motion.div>
  )
}

export default function Gallery() {
  const prefersReduced = useReducedMotion() ?? false

  return (
    <section
      id="gallery"
      aria-label="Gallery of Kapé Kanlungan"
      style={{ background: 'var(--bg)', paddingTop: '2px' }}
    >
      {/* Section label — sparse, only 1 eyebrow used across the page here */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-8"
      >
        <p
          className="text-xs font-medium tracking-[0.22em] uppercase"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
        >
          Ang Lugar
        </p>
      </motion.div>

      {/*
        Asymmetric mosaic grid:
        Desktop: drinks (tall, left, spans 2 rows) | windows (right top) | alcove (right bottom)
                 counter (full-width strip at bottom)
        Mobile:  single column
      */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-0">
        {/* Desktop layout via CSS Grid */}
        <div
          className="hidden md:grid gap-0.5"
          style={{
            gridTemplateColumns: '1fr 1.35fr',
            gridTemplateRows: '310px 260px 240px',
          }}
          aria-hidden="false"
        >
          <Photo
            src={drinksImg}
            alt="Specialty drinks lined up on the Kapé Kanlungan counter"
            delayMs={0}
            reduced={prefersReduced ?? false}
            style={{ gridRow: '1 / 3', gridColumn: '1 / 2' }}
          />
          <Photo
            src={windowsImg}
            alt="Warm light streaming through the café windows onto wooden surfaces"
            delayMs={80}
            reduced={prefersReduced ?? false}
            style={{ gridRow: '1 / 2', gridColumn: '2 / 3' }}
          />
          <Photo
            src={alcoveImg}
            alt="A quiet alcove inside Kapé Kanlungan with lush tropical plants"
            delayMs={160}
            reduced={prefersReduced ?? false}
            style={{ gridRow: '2 / 3', gridColumn: '2 / 3' }}
          />
          <Photo
            src={counterImg}
            alt="The full length of the café counter under warm overhead lighting"
            delayMs={240}
            reduced={prefersReduced ?? false}
            style={{ gridRow: '3 / 4', gridColumn: '1 / 3' }}
          />
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-0.5 md:hidden">
          {[
            { src: drinksImg, alt: 'Specialty drinks lined up on the Kapé Kanlungan counter', delay: 0 },
            { src: windowsImg, alt: 'Warm light through the café windows', delay: 60 },
            { src: alcoveImg, alt: 'A quiet alcove inside Kapé Kanlungan', delay: 120 },
            { src: counterImg, alt: 'The full Kapé Kanlungan counter', delay: 180 },
          ].map(({ src, alt, delay }) => (
            <div key={src} className="relative overflow-hidden" style={{ height: '260px' }}>
              <motion.img
                src={src}
                alt={alt}
                initial={prefersReduced ? {} : { opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, delay: delay / 1000, ease: EASE }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
