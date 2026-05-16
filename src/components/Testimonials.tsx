'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import useInView from '@/hooks/useInView';

/* ── Data ──────────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: 'Arjun Sharma',
    role: 'B.Tech CSE Graduate',
    company: 'Placed at Google India',
    companyColor: 'bg-blue-100 text-blue-700',
    avatar: 'AS',
    avatarBg: 'from-blue-600 to-indigo-700',
    rating: 5,
    quote:
      'JG University completely transformed my trajectory. The DSA bootcamps, live project labs, and mock interview culture meant I walked into Google\'s technical rounds fully prepared. The faculty genuinely cares about where you end up, not just what you score.',
    stream: 'Engineering',
    year: '2024 Batch',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'MBA Finance Alumni',
    company: 'Placed at HDFC Securities',
    companyColor: 'bg-emerald-100 text-emerald-700',
    avatar: 'PM',
    avatarBg: 'from-emerald-600 to-teal-700',
    rating: 5,
    quote:
      'The dual-specialisation MBA programme is incredibly well-structured. I chose Finance + Marketing and the combination opened doors I hadn\'t imagined. Our placement cell is relentless — they followed up with every recruiter until I had an offer in hand.',
    stream: 'Management',
    year: '2023 Batch',
  },
  {
    id: 3,
    name: 'Ritika Nair',
    role: 'MCA Graduate',
    company: 'Placed at Infosys Digital',
    companyColor: 'bg-violet-100 text-violet-700',
    avatar: 'RN',
    avatarBg: 'from-violet-600 to-purple-700',
    rating: 5,
    quote:
      'I switched from a non-CS background and was nervous about MCA. The bridge courses and peer mentoring programme made the transition seamless. Within six months I was building full-stack apps and within two years I had a role at Infosys. Life-changing.',
    stream: 'Computer Applications',
    year: '2024 Batch',
  },
  {
    id: 4,
    name: 'Karan Tiwari',
    role: 'B.Tech ECE Graduate',
    company: 'Placed at Samsung R&D',
    companyColor: 'bg-orange-100 text-orange-700',
    avatar: 'KT',
    avatarBg: 'from-orange-500 to-rose-600',
    rating: 5,
    quote:
      'The research culture here is phenomenal. I co-authored a paper with my professor in my 3rd year, filed a patent, and that portfolio made Samsung notice me. The lab infrastructure is genuinely world-class — I\'ve seen worse at postgraduate institutions.',
    stream: 'Engineering',
    year: '2023 Batch',
  },
  {
    id: 5,
    name: 'Sneha Kulkarni',
    role: 'M.Sc Biotechnology',
    company: 'Research Fellow at CSIR',
    companyColor: 'bg-pink-100 text-pink-700',
    avatar: 'SK',
    avatarBg: 'from-pink-600 to-rose-700',
    rating: 5,
    quote:
      'The wet labs and simulation suites are unlike anything I expected from a private university. My research supervisor connected me directly with CSIR. Now I\'m a funded research fellow and my work is being published in peer-reviewed journals.',
    stream: 'Applied Sciences',
    year: '2024 Batch',
  },
  {
    id: 6,
    name: 'Rahul Desai',
    role: 'BBA Graduate',
    company: 'Co-founded EdTech Start-up',
    companyColor: 'bg-amber-100 text-amber-700',
    avatar: 'RD',
    avatarBg: 'from-amber-500 to-orange-600',
    rating: 5,
    quote:
      'The Entrepreneurship & Start-ups specialisation gave me my co-founders, my first investor pitch training, and ultimately my seed funding. JGU\'s incubation centre provided office space, mentoring, and connections. We\'re now a team of 14.',
    stream: 'Management',
    year: '2022 Batch',
  },
];

/* ── Sub-components ────────────────────────────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-accent' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof testimonials)[number];
  isActive: boolean;
}) {
  return (
    <article
      aria-hidden={!isActive}
      className={`
        absolute inset-0 flex flex-col justify-between p-8 sm:p-10
        transition-all duration-700 ease-in-out
        ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-[0.98] pointer-events-none'}
      `}
    >
      {/* Top: quote mark + rating */}
      <div className="flex items-start justify-between mb-6">
        <svg
          className="w-10 h-10 text-accent/25 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c1.8 0 3.4-.6 4.7-1.6C13.8 24 13 25.9 12 28h4c2-4 3-7.3 3-10 0-5.5-4-10-9-10zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.8 0 3.4-.6 4.7-1.6C27.8 24 27 25.9 26 28h4c2-4 3-7.3 3-10 0-5.5-4-10-9-10z" />
        </svg>
        <StarRating count={t.rating} />
      </div>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8">
          "{t.quote}"
        </p>
      </blockquote>

      {/* Author row */}
      <footer className="flex items-center gap-4 pt-6 border-t border-slate-100">
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center shadow-lg`}
          aria-hidden="true"
        >
          <span className="text-white font-black text-base tracking-tight">{t.avatar}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-bold text-primary leading-none mb-1">{t.name}</div>
          <div className="text-sm text-slate-500 truncate">{t.role} · {t.year}</div>
        </div>

        <span
          className={`flex-shrink-0 hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-bold ${t.companyColor}`}
        >
          {t.company}
        </span>
      </footer>
    </article>
  );
}

/* ── Main Component ────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const sectionRef  = useRef<HTMLElement>(null);
  const inView      = useInView(sectionRef, { threshold: 0.1 });
  const [active, setActive]       = useState(0);
  const [paused, setPaused]       = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive((idx + testimonials.length) % testimonials.length);
  }, []);

  /* Auto-advance every 5 s unless paused */
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => goTo(active + 1), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active, paused, goTo]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-28 bg-surface overflow-hidden"
      aria-label="Student and Alumni Testimonials"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/12 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-primary leading-tight mt-2 mb-5">
            Voices of Our{' '}
            <span className="text-accent">Community</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Real students. Real placements. Real transformations — hear it straight from
            the people who lived the JG University experience.
          </p>
        </div>

        {/* ── Two-column layout ───────────────────────────────────── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* ── LEFT: Slider ────────────────────────────────────────── */}
          <div
            className="lg:col-span-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card container */}
            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden"
              style={{ minHeight: '340px' }}>
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.id} t={t} isActive={i === active} />
              ))}
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-between mt-6 px-1">
              {/* Dot indicators */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => { goTo(i); setPaused(true); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-8 h-2.5 bg-accent'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => { goTo(active - 1); setPaused(true); }}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => { goTo(active + 1); setPaused(true); }}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Stats + Mini Cards ──────────────────────────── */}
          <aside className="lg:col-span-2 flex flex-col gap-5">
            {/* Placement highlight box */}
            <div className="bg-primary rounded-3xl p-7 text-white relative overflow-hidden">
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
                aria-hidden="true"
              />
              <div className="text-4xl font-black font-serif text-accent mb-1">98%</div>
              <div className="font-bold text-lg mb-2">Placement Rate</div>
              <p className="text-white/60 text-sm leading-relaxed">
                Across all batches, consistently maintained over six consecutive years.
              </p>
              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-black text-accent text-xl">₹18 LPA</div>
                  <div className="text-white/50 text-xs">Highest Package</div>
                </div>
                <div>
                  <div className="font-black text-accent text-xl">₹6.2 LPA</div>
                  <div className="text-white/50 text-xs">Average Package</div>
                </div>
              </div>
            </div>

            {/* Recruiter logos placeholder */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Top Recruiters
              </p>
              <div className="grid grid-cols-3 gap-3">
                {['Google', 'Infosys', 'Samsung', 'HDFC', 'TCS', 'Wipro'].map((co) => (
                  <div
                    key={co}
                    className="h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[11px] font-bold text-primary/60 hover:border-accent/30 hover:text-primary transition-all"
                  >
                    {co}
                  </div>
                ))}
              </div>
            </div>

            {/* NAAC badge */}
            <div className="flex items-center gap-4 bg-accent/8 border border-accent/25 rounded-3xl p-5">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-black text-lg">A++</span>
              </div>
              <div>
                <div className="font-bold text-primary text-sm">NAAC A++ Accredited</div>
                <div className="text-slate-500 text-xs mt-0.5">Highest grade awarded by NAAC, UGC & AICTE</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
