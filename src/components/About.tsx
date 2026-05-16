'use client';

import { useRef } from 'react';
import useInView from '@/hooks/useInView';

/* ── Data ──────────────────────────────────────────────────────────────────── */
const metrics = [
  { value: '25+',    label: 'Years of Excellence',    icon: '🏛️', accent: true  },
  { value: '50+',    label: 'Courses Offered',         icon: '📚', accent: false },
  { value: '15,000+',label: 'Alumni Network',          icon: '🎓', accent: false },
  { value: 'A++',    label: 'NAAC Accredited',         icon: '🏆', accent: true  },
  { value: '200+',   label: 'Faculty Members',         icon: '👩‍🏫', accent: false },
  { value: '98%',    label: 'Placement Rate',          icon: '💼', accent: false },
  { value: '120+',   label: 'Industry Partners',       icon: '🤝', accent: false },
  { value: '30+',    label: 'Research Centres',        icon: '🔬', accent: false },
];

const pillars = [
  { icon: '🎯', title: 'Student-First Philosophy',  body: 'Every policy, resource, and faculty interaction is designed around empowering the student journey.' },
  { icon: '🌐', title: 'Global Perspective',         body: 'Exchange programmes with 120+ universities worldwide and a curriculum shaped by international standards.' },
  { icon: '⚡', title: 'Industry-Ready Skills',      body: 'Live projects, hackathons, internships, and placement drives built into every programme.' },
];

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView      = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden"
      aria-label="About JG University"
    >
      {/* ── Subtle background decoration ──────────────────────────── */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #002147 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ────────────────────────────────────────── */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/12 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            About Our Institution
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-primary leading-tight mt-2">
            A Legacy of{' '}
            <span className="relative inline-block">
              Innovation
              <span
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                aria-hidden="true"
              />
            </span>
            {' '}&amp;{' '}
            <span className="text-accent">Academic Brilliance</span>
          </h2>
        </div>

        {/* ── Two-Column Layout ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ════════════════════════════ LEFT: Stats Grid ════════════════════ */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  style={{ transitionDelay: `${120 + i * 60}ms` }}
                  className={`
                    group relative rounded-2xl p-5 border flex flex-col gap-2
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    ${m.accent
                      ? 'bg-primary border-primary/80 shadow-md'
                      : 'bg-white border-slate-100 shadow-sm hover:border-accent/30'
                    }
                  `}
                >
                  {/* Icon */}
                  <span className="text-2xl leading-none">{m.icon}</span>

                  {/* Value */}
                  <span
                    className={`text-2xl xl:text-3xl font-black font-serif leading-none tracking-tight ${
                      m.accent ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {m.value}
                  </span>

                  {/* Label */}
                  <span
                    className={`text-xs font-medium leading-snug ${
                      m.accent ? 'text-white/70' : 'text-slate-500'
                    }`}
                  >
                    {m.label}
                  </span>

                  {/* Accent dot on hover for light cards */}
                  {!m.accent && (
                    <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              ))}
            </div>

            {/* Accreditation Badge Row */}
            <div className="mt-6 flex flex-wrap gap-3">
              {['UGC Approved', 'AICTE Affiliated', 'ISO 9001:2015', 'NBA Accredited'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-accent/30 bg-accent/5 text-primary tracking-wide"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ════════════════════════════ RIGHT: Typography Block ═════════════ */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Lead quote */}
            <blockquote className="relative pl-5 border-l-4 border-accent mb-8">
              <p className="text-xl font-serif italic text-primary/80 leading-relaxed">
                "We don't just educate students — we cultivate{' '}
                <strong className="not-italic font-black text-primary">leaders</strong>,
                {' '}innovators, and change-makers who leave a mark on the world."
              </p>
              <footer className="mt-3 text-sm text-slate-400 font-medium not-italic">
                — Chancellor, JG University
              </footer>
            </blockquote>

            <p className="text-base text-slate-600 leading-relaxed mb-5">
              Established in 2001, JG University has been at the vanguard of higher
              education for over two decades. Nestled across a sprawling, eco-friendly
              campus, we blend the grandeur of traditional academia with the dynamism
              of modern, industry-aligned pedagogy.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              Our NAAC A++ accreditation, state-of-the-art research centres, and
              unbroken 98% placement record are not just numbers — they are the result
              of a relentless commitment to student success, faculty excellence, and
              institutional integrity.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-5">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                  className={`flex gap-4 transition-all duration-500 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-0.5">{p.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold rounded-xl shadow-md hover:bg-primary-light transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore All Programs
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#cta"
                className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1.5 group"
              >
                Apply Now
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
