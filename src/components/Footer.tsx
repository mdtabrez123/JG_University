import Link from 'next/link';

/* ── Data ──────────────────────────────────────────────────────────────────── */
const academicLinks = [
  { label: 'Undergraduate Programmes',     href: '#programs' },
  { label: 'Postgraduate Programmes',      href: '#programs' },
  { label: 'Ph.D & Research',              href: '#programs' },
  { label: 'Online & Distance Learning',   href: '#'         },
  { label: 'Executive Education',          href: '#'         },
  { label: 'International Collaborations', href: '#'         },
];

const resourceLinks = [
  { label: 'Admissions Portal',    href: '#' },
  { label: 'Fee Structure',        href: '#' },
  { label: 'Scholarship & Aid',    href: '#' },
  { label: 'Student Life & Clubs', href: '#' },
  { label: 'Research & Innovation',href: '#' },
  { label: 'Placement Cell',       href: '#' },
  { label: 'Alumni Network',       href: '#' },
  { label: 'Campus Map',           href: '#' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const contactDetails = [
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    lines: ['Knowledge Park-III, Greater Noida', 'Uttar Pradesh — 201 310, India'],
  },
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    lines: ['+91 120 4567 890', '+91 98765 43210 (Admissions)'],
  },
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    lines: ['admissions@jguniversity.edu.in', 'info@jguniversity.edu.in'],
  },
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Admissions Helpline: 8:00 AM – 8:00 PM'],
  },
];

const legalLinks = [
  { label: 'Privacy Policy',    href: '#' },
  { label: 'Terms of Use',      href: '#' },
  { label: 'Accessibility',     href: '#' },
  { label: 'Cookie Policy',     href: '#' },
  { label: 'Grievance Officer', href: '#' },
];

const accreditations = ['UGC', 'AICTE', 'NAAC A++', 'NBA', 'ISO 9001'];

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400" role="contentinfo">

      {/* ── Main grid ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* ── Col 1: Brand + Social ─────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="#hero" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-primary font-serif font-black text-lg">J</span>
              </div>
              <div>
                <span className="block text-xl font-serif font-bold text-white">
                  JG <span className="text-accent">University</span>
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-0.5">
                  Excellence in Education
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-500 mb-7 max-w-xs">
              Empowering the next generation of leaders, innovators, and change-makers
              since 2001. NAAC A++ accredited. UGC & AICTE approved.
            </p>

            {/* Social links */}
            <nav aria-label="Social media links">
              <ul className="flex gap-2.5">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Accreditation chips */}
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Accreditations">
              {accreditations.map((a) => (
                <span
                  key={a}
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-700 bg-slate-800/60 text-slate-400"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* ── Col 2: Academic Links ─────────────────────────────── */}
          <nav aria-label="Academic programmes">
            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Academic Programmes
            </h2>
            <ul className="flex flex-col gap-3">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-accent transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 3: Quick Resources ────────────────────────────── */}
          <nav aria-label="Quick resources">
            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Quick Resources
            </h2>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-accent transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 4: Contact ────────────────────────────────────── */}
          <address className="not-italic" aria-label="Contact information">
            <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-5">
              {contactDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                  <span className="text-accent mt-0.5">{detail.icon}</span>
                  <div>
                    {detail.lines.map((line, j) => (
                      <span key={j} className={`block ${j === 0 ? 'text-slate-300' : 'text-slate-500 text-xs mt-0.5'}`}>
                        {line}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* Emergency admission helpline */}
            <div className="mt-6 p-4 rounded-2xl bg-accent/8 border border-accent/20">
              <p className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                Admission Helpline
              </p>
              <a
                href="tel:+911204567890"
                className="text-white font-bold text-lg hover:text-accent transition-colors"
              >
                +91 120 4567 890
              </a>
              <p className="text-slate-500 text-[11px] mt-0.5">Available Mon – Sat, 8 AM – 8 PM</p>
            </div>
          </address>
        </div>

        {/* ── Divider ───────────────────────────────────────────────── */}
        <div className="border-t border-slate-800/80" />

        {/* ── Bottom Bar ────────────────────────────────────────────── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} JG University. All rights reserved.
            Designed &amp; developed with ❤️ for academic excellence.
          </p>

          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {legalLinks.map((link, i) => (
                <li key={link.label} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="text-[11px] text-slate-600 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < legalLinks.length - 1 && (
                    <span className="text-slate-800 text-xs" aria-hidden="true">·</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
