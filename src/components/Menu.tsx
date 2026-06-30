import { motion, useReducedMotion } from 'motion/react'
import menuV60CinnamonImg from '../assets/menu-v60-cinnamon.jpg'
import menuBlueberryLatteImg from '../assets/menu-blueberry-latte.jpg'
import menuBlueLemonadeImg from '../assets/menu-blue-lemonade.jpg'
import menuMatchaBlueberryImg from '../assets/menu-matcha-blueberry.jpg'
import menuStrawberryFrappeImg from '../assets/menu-strawberry-frappe.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const MENU_ITEMS = [
  {
    name: 'V60 with Cinnamon',
    tagline: 'Your daily shelter in every sip.',
    price: null,
    image: menuV60CinnamonImg,
    alt: 'V60 pour-over coffee with cinnamon, served in a clear glass',
  },
  {
    name: 'Blueberry Latte',
    tagline: 'Smooth, sweet, and refreshing.',
    price: '175',
    image: menuBlueberryLatteImg,
    alt: 'Blueberry latte in a tall glass with a purple-blue hue',
  },
  {
    name: 'Summer Blue Lemonade',
    tagline: 'Cool, crisp, and made for slow afternoons.',
    price: null,
    image: menuBlueLemonadeImg,
    alt: 'Summer Blue Lemonade in a tall glass with blue butterfly pea flower color',
  },
  {
    name: 'Matcha Blueberry Latte',
    tagline: 'Earthy matcha meets sweet blueberry.',
    price: null,
    image: menuMatchaBlueberryImg,
    alt: 'Matcha blueberry latte with swirling green and purple layers',
  },
  {
    name: 'Strawberry Frappe',
    tagline: 'Sweet. Creamy. Irresistible.',
    price: null,
    image: menuStrawberryFrappeImg,
    alt: 'Strawberry frappe topped with whipped cream and fresh strawberries',
  },
]

export default function Menu() {
  const prefersReduced = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1 as number, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  const [v60, blueberry, blueLemonade, matcha, strawberry] = MENU_ITEMS

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-24 md:pb-32">

        <motion.div {...reveal(0)} className="mb-16 md:mb-20">
          <h2
            id="menu-heading"
            className="italic"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              color: 'var(--ink)',
              lineHeight: 1.05,
            }}
          >
            Ang aming inumin.
          </h2>
          <p
            className="mt-4 max-w-xs text-sm"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Every cup made slowly. Every sip worth the quiet.
          </p>
        </motion.div>

        {/*
          Row 1: V60 | Blueberry Latte
          Row 2: Summer Blue Lemonade (col-span-2, full width)
          Row 3: Matcha Blueberry | Strawberry Frappe
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

          <MenuCard item={v60} delay={0.08} />
          <MenuCard item={blueberry} delay={0.15} />

          {/* Summer Blue Lemonade — full width */}
          <motion.article
            {...reveal(0.22)}
            className="rounded-2xl overflow-hidden flex flex-col md:col-span-2"
            style={{ background: 'var(--surface)', border: '1px solid var(--rim)' }}
          >
            <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={blueLemonade.image}
                alt={blueLemonade.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-6">
              <h3
                className="italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                  color: 'var(--ink)',
                  lineHeight: 1.15,
                }}
              >
                {blueLemonade.name}
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', lineHeight: 1.65 }}
              >
                {blueLemonade.tagline}
              </p>
            </div>
          </motion.article>

          <MenuCard item={matcha} delay={0.28} />
          <MenuCard item={strawberry} delay={0.35} />

        </div>
      </div>
    </section>
  )
}

type MenuItem = typeof MENU_ITEMS[number]

function MenuCard({ item, delay }: { item: MenuItem; delay: number }) {
  const prefersReduced = useReducedMotion()
  const reveal = {
    initial: prefersReduced ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1 as number, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.9, delay, ease: EASE },
  }

  return (
    <motion.article
      {...reveal}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: 'var(--surface)', border: '1px solid var(--rim)' }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 py-5 flex flex-col flex-1">
        <h3
          className="italic"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            color: 'var(--ink)',
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </h3>
        <p
          className="mt-1.5 text-sm flex-1"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', lineHeight: 1.6 }}
        >
          {item.tagline}
        </p>
        {item.price && (
          <p
            className="mt-3 text-sm font-medium"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--amber)' }}
          >
            PHP {item.price}
          </p>
        )}
      </div>
    </motion.article>
  )
}
