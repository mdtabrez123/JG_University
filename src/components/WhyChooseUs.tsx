'use client';

import { useRef } from 'react';
import useInView from '@/hooks/useInView';

/* ── Data ──────────────────────────────────────────────────────────────────── */
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Research & Innovation',
    body: '30+ funded research centres and 200+ patents filed across disciplines. Students co-author papers from Year 2.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Industry Placements',
    body: 'Dedicated placement cell, 100+ corporate partners, live mock interviews, and an unbroken 98% placement record.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Exposure',
    body: 'Student exchange with 120+ partner universities across 40 countries. International faculty and dual-degree options.',
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'World-Class Campus',
    body: 'Eco-friendly 50-acre campus with smart classrooms, Olympic sports facilities, student housing, and a dedicated startup incubator.',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expert Faculty',
    body: '200+ faculty members — PhD holders, industry veterans, published researchers, and visiting professors from IITs and IIMs.',
    color: 'text-rose-600',
    bg: 'bg-rose-50 border-rose-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Scholarships & Aid',
    body: 'Merit-based scholarships worth up to ₹2 lakhs, need-based financial aid, and education loan facilitation partnerships.',
    color: 'text-teal-600',
    bg: 'bg-teal-50 border-teal-100',
  },
];

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden"
      aria-label="Why Choose JG University"
    >
      {/* Subtle radial bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #002147, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/12 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Why Choose JGU
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-primary leading-tight mt-2 mb-5">
            Everything You Need to{' '}
            <span className="text-accent">Succeed</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            From world-class infrastructure to relentless placement support —
            JG University gives you every advantage to build the career and life you deserve.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`
                group relative p-7 rounded-3xl bg-white border border-slate-100
                shadow-sm hover:shadow-xl transition-all duration-400 ease-out
                hover:-translate-y-1.5 hover:border-slate-200
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${f.bg} border flex items-center justify-center mb-5 ${f.color} group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.body}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </article>
          ))}
        </div>

        {/* Bottom accreditation strip */}
        <div
          className={`mt-14 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Recognised & Approved by</p>
          {['UGC', 'AICTE', 'NAAC A++', 'NBA', 'AIU', 'ISO 9001:2015'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 hover:border-accent/40 hover:text-primary transition-all"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
