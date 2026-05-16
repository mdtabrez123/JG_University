'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',         href: '#hero'         },
  { label: 'Programs',     href: '#programs'      },
  { label: 'About',        href: '#about'         },
  { label: 'Testimonials', href: '#testimonials'  },
];

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('');

  /* ── Scroll detection ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close menu on resize ─────────────────────────────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── Lock body scroll when menu is open ──────────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ──────────────────────────────────────────── */}
            <Link
              href="#hero"
              onClick={() => handleLinkClick('#hero')}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary font-serif font-black text-lg leading-none">J</span>
              </div>
              <div className="leading-none">
                <span className="block text-xl font-serif font-bold text-white tracking-tight">
                  JG <span className="text-accent">University</span>
                </span>
                <span className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-sans mt-0.5">
                  Excellence in Education
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ─────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    activeLink === link.href
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-0.5 bg-accent rounded-full transition-all duration-300 origin-left ${
                      activeLink === link.href
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA ───────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="#cta"
                onClick={() => handleLinkClick('#cta')}
                className="relative px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-full overflow-hidden group shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(212,175,55,0.55)] hover:scale-105"
              >
                <span className="relative z-10">Apply Now</span>
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            </div>

            {/* ── Hamburger Button ──────────────────────────────── */}
            <button
              id="hamburger-btn"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 gap-1.5 flex-shrink-0"
            >
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-400 origin-center ${
                  menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-400 origin-center ${
                  menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Menu Drawer ────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-primary-dark border-l border-accent/20 shadow-2xl md:hidden transform transition-transform duration-400 ease-in-out flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-primary font-serif font-black text-base">J</span>
            </div>
            <span className="text-white font-serif font-bold">JG University</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`animate-fadeInUp flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                activeLink === link.href
                  ? 'bg-accent/15 text-accent border border-accent/30'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-accent/60 text-xs font-mono w-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pb-8 border-t border-white/10 pt-6">
          <Link
            href="#cta"
            onClick={() => handleLinkClick('#cta')}
            className="block w-full text-center px-6 py-3.5 bg-accent text-primary font-bold rounded-xl shadow-lg hover:bg-accent-light transition-all duration-300 hover:scale-[1.02]"
          >
            Apply Now →
          </Link>
          <p className="text-center text-white/40 text-xs mt-4">
            Admissions open for 2026–27
          </p>
        </div>
      </div>
    </>
  );
}
