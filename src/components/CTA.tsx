'use client';

import { useRef, useState } from 'react';
import useInView from '@/hooks/useInView';

const urgencyItems = [
  { icon: '📅', label: 'Last Date to Apply', value: '31 July 2026' },
  { icon: '🎓', label: 'Seats Available',    value: 'Limited Seats' },
  { icon: '💰', label: 'Scholarship Worth',  value: 'Up to ₹2 Lakhs' },
];

export default function CTA() {
  const sectionRef  = useRef<HTMLElement>(null);
  const inView      = useInView(sectionRef, { threshold: 0.15 });
  const [name,  setName]  = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-4 overflow-hidden"
      aria-label="Admissions Call to Action"
    >
      {/* ── Full-bleed gradient card ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,21,48,0.45)]"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 40%, rgba(212,175,55,0.18) 0%, transparent 55%),
              radial-gradient(ellipse 60% 80% at 90% 60%, rgba(0,51,102,0.6)   0%, transparent 60%),
              linear-gradient(135deg, #001530 0%, #002147 45%, #003366 100%)
            `,
          }}
        >
          {/* ── Dot grid overlay ──────────────────────────────────── */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />

          {/* ── Glow accent ───────────────────────────────────────── */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none animate-pulseGlow"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 right-20 w-64 h-64 rounded-full pointer-events-none animate-pulseGlow delay-400"
            style={{ background: 'radial-gradient(circle, rgba(0,51,102,0.5) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          {/* ── Content ───────────────────────────────────────────── */}
          <div className="relative z-10 px-8 sm:px-14 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT: Copy */}
            <div
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Blinking badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/35 text-accent text-xs font-bold uppercase tracking-widest mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Admissions Open for 2026–27
              </span>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-black text-white leading-[1.06] mb-6">
                Secure Your Seat.{' '}
                <span className="text-shimmer">Shape Your Legacy.</span>
              </h2>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                Thousands of students compete for a limited number of seats each year.
                Don't let another batch pass you by — take the first step toward a future
                built on excellence, opportunity, and impact.
              </p>

              {/* Urgency items */}
              <ul className="flex flex-col sm:flex-row gap-5 sm:gap-8 mb-10">
                {urgencyItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white/40 text-[11px] uppercase tracking-wider font-semibold leading-none mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white font-bold text-sm">{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Download Brochure CTA */}
              <a
                href="#"
                id="cta-brochure-btn"
                className="group inline-flex items-center gap-3 text-white/70 text-sm font-semibold hover:text-white transition-colors"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
                Download Brochure (PDF)
              </a>
            </div>

            {/* RIGHT: Inquiry form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-3xl p-8">
                {submitted ? (
                  /* Success state */
                  <div className="flex flex-col items-center justify-center text-center py-6 gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white">You're on the list!</h3>
                    <p className="text-white/60 text-sm max-w-xs">
                      Our admissions counsellor will reach out within 24 hours to guide you through the next steps.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setName(''); setPhone(''); }}
                      className="mt-2 text-accent text-sm font-semibold hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate aria-label="Admissions inquiry form">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                      Talk to a Counsellor
                    </h3>
                    <p className="text-white/50 text-sm mb-7">
                      Free, personalised guidance — no obligations.
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="cta-name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          autoComplete="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Arjun Sharma"
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="cta-phone" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-accent">*</span>
                        </label>
                        <input
                          id="cta-phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                        />
                      </div>

                      {/* Programme interest */}
                      <div>
                        <label htmlFor="cta-stream" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                          Interested Programme
                        </label>
                        <select
                          id="cta-stream"
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white/80 text-sm focus:outline-none focus:border-accent transition-all appearance-none"
                          style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23fff' stroke-opacity='.4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}
                        >
                          <option value="" className="bg-primary">Select a stream…</option>
                          <option value="engineering" className="bg-primary">Engineering (B.Tech / M.Tech)</option>
                          <option value="management" className="bg-primary">Management (BBA / MBA)</option>
                          <option value="cs-apps" className="bg-primary">Computer Applications (BCA / MCA)</option>
                          <option value="sciences" className="bg-primary">Applied Sciences (B.Sc / M.Sc)</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <button
                        id="cta-submit-btn"
                        type="submit"
                        disabled={loading}
                        className="group mt-2 w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent text-primary font-bold rounded-xl shadow-[0_8px_32px_rgba(212,175,55,0.4)] hover:bg-accent-light transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(212,175,55,0.55)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                      >
                        {loading ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting…
                          </>
                        ) : (
                          <>
                            Request a Callback
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-white/30 text-[11px]">
                        🔒 Your details are 100% secure and never shared.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
