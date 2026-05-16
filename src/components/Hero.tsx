'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
  { value: '25+',  label: 'Years of Excellence'   },
  { value: '98%',  label: 'Placement Rate'         },
  { value: '200+', label: 'Programs Offered'       },
  { value: '50k+', label: 'Alumni Worldwide'       },
];

const floatingCards = [
  { icon: '🏆', text: 'NAAC A+ Accredited', sub: 'Grade A+ Certified',      color: 'bg-accent/10 border-accent/30'          },
  { icon: '🎓', text: '98% Placements',     sub: 'Top MNCs on Campus',       color: 'bg-white/5  border-white/15'             },
  { icon: '🌏', text: 'Global Network',     sub: '120+ Partner Universities', color: 'bg-primary-light/30 border-white/10'    },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation after mount so SSR and hydration match
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      aria-label="University Hero Section"
    >
      {/* ── Deep Background Gradient ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, rgba(212,175,55,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 85% 80%, rgba(0,51,102,0.8)   0%, transparent 65%),
            linear-gradient(135deg, #001530 0%, #002147 40%, #003366 100%)
          `,
        }}
      />

      {/* ── Animated Glow Blobs ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="animate-pulseGlow absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="animate-pulseGlow delay-400 absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,51,102,0.6) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Fine Grid Overlay ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main Content Grid ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ── LEFT: Copy ────────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Tag Pill */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-8 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Admissions Open 2026–27
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Empowering{' '}
              <span className="relative inline-block">
                <span className="text-shimmer">Minds,</span>
              </span>
              <br />
              Shaping{' '}
              <span className="relative">
                Futures
                {/* Underline decoration */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 C 60 3, 120 11, 180 6 S 260 2, 298 9"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg text-white/65 font-light leading-relaxed max-w-xl mb-10 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              A state-of-the-art campus. Record-breaking placements. World-class faculty.
              Join a legacy of academic brilliance that turns ambition into achievement.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 mb-14 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              {/* Primary Button */}
              <Link
                href="#programs"
                id="hero-explore-btn"
                className="group relative w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-xl text-base overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Programs
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/25 group-hover:translate-x-full transition-transform duration-600 ease-in-out" />
              </Link>

              {/* Outline Button */}
              <button
                id="hero-tour-btn"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-xl text-base hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                {/* Play icon */}
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Campus Tour
              </button>
            </div>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 w-full transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-accent font-serif leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1 leading-snug font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual Panel ───────────────────────────────── */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Main Image Card */}
            <div className="relative w-full max-w-lg">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl" />

              {/* Image placeholder frame */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <div
                  className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full flex items-center justify-center"
                  style={{
                    background: `
                      linear-gradient(145deg,
                        rgba(0,33,71,0.9) 0%,
                        rgba(0,51,102,0.7) 50%,
                        rgba(212,175,55,0.12) 100%
                      )
                    `,
                  }}
                >
                  {/* Abstract campus illustration */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Building silhouettes */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-6">
                      <div className="w-16 h-32 bg-white/5 border border-white/10 rounded-t-lg" />
                      <div className="w-24 h-48 bg-white/8 border border-white/10 rounded-t-xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-1 h-6 bg-accent/60" />
                      </div>
                      <div className="w-20 h-40 bg-white/6 border border-white/10 rounded-t-lg" />
                      <div className="w-12 h-24 bg-white/5 border border-white/10 rounded-t-lg" />
                    </div>

                    {/* Centered monogram */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-24 h-24 rounded-3xl bg-accent/20 border-2 border-accent/40 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                        <span className="font-serif font-black text-5xl text-accent leading-none">J</span>
                      </div>
                      <span className="font-serif font-bold text-white/90 text-2xl">JG University</span>
                      <span className="text-white/40 text-xs tracking-[0.25em] uppercase">Est. 2001</span>
                    </div>

                    {/* Corner dots pattern */}
                    <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 opacity-30">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-accent" />
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-1.5 opacity-30">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating Info Cards ─────────────────────────── */}
              {floatingCards.map((card, i) => {
                const positions = [
                  'absolute -top-5 -left-8 sm:-left-12',
                  'absolute top-1/2 -right-5 sm:-right-10 -translate-y-1/2',
                  'absolute -bottom-5 left-6',
                ];
                const animClasses = [
                  'animate-float',
                  'animate-floatReverse delay-300',
                  'animate-float delay-200',
                ];
                return (
                  <div
                    key={i}
                    className={`${positions[i]} ${animClasses[i]} ${card.color} border backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 min-w-max`}
                  >
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <div className="text-white text-sm font-bold leading-none">{card.text}</div>
                      <div className="text-white/50 text-xs mt-0.5">{card.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div
            className="w-1 h-2 rounded-full bg-accent/70"
            style={{ animation: 'float 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
