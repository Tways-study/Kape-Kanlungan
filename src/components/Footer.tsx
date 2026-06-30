import logoImg from '../assets/logo.jpg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      aria-label="Site footer"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--rim)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Kapé Kanlungan"
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            style={{ boxShadow: '0 0 0 1.5px var(--amber)' }}
          />
          <div>
            <p
              className="text-sm font-medium"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)', fontStyle: 'italic' }}
            >
              Kapé Kanlungan
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
            >
              Sibalom, Antique, Philippines
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
          {[
            { label: 'About', href: '#story' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Visit', href: '#visit' },
          ].map(({ label, href }) => (
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
        </nav>

        <p
          className="text-xs"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
        >
          &copy; {year} Kapé Kanlungan
        </p>

      </div>
    </footer>
  )
}
