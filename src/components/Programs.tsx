'use client';

import { useRef } from 'react';
import useInView from '@/hooks/useInView';

/* ── Data ──────────────────────────────────────────────────────────────────── */
const programs = [
  {
    id: 'engineering',
    icon: '⚙️',
    color: 'from-blue-600 to-primary',
    badge: 'Most Popular',
    title: 'Engineering',
    tagline: 'Build the technology of tomorrow.',
    description:
      'Industry-integrated B.Tech and M.Tech programmes with cutting-edge labs, live capstone projects, and recruiters from the Fortune 500.',
    degrees: ['B.Tech (4 Years)', 'M.Tech (2 Years)', 'Ph.D'],
    specializations: [
      'Computer Science & Engineering',
      'Artificial Intelligence & ML',
      'Electronics & Communication',
      'Mechanical Engineering',
      'Civil & Structural Engineering',
    ],
    stats: { students: '4,200+', rank: '#3 in State' },
  },
  {
    id: 'management',
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    badge: 'High ROI',
    title: 'Management',
    tagline: 'Lead organisations. Drive growth.',
    description:
      'AICTE-approved MBA programme with dual-specialisation, case-study pedagogy, and a dedicated placement cell with 100+ corporate partners.',
    degrees: ['BBA (3 Years)', 'MBA (2 Years)', 'Executive MBA'],
    specializations: [
      'Marketing & Brand Management',
      'Finance & Investment Banking',
      'Human Resource Management',
      'Operations & Supply Chain',
      'Entrepreneurship & Start-ups',
    ],
    stats: { students: '2,800+', rank: '#1 B-School Region' },
  },
  {
    id: 'computer-apps',
    icon: '💻',
    color: 'from-violet-600 to-indigo-700',
    badge: 'High Demand',
    title: 'Computer Applications',
    tagline: 'Code. Create. Innovate.',
    description:
      'Hands-on BCA and MCA degrees structured around full-stack development, cloud computing, and emerging technologies with 6-month industry internships.',
    degrees: ['BCA (3 Years)', 'MCA (2 Years)', 'M.Sc CS'],
    specializations: [
      'Full-Stack Web Development',
      'Data Science & Analytics',
      'Cloud & DevOps',
      'Cybersecurity',
      'Mobile App Development',
    ],
    stats: { students: '1,900+', rank: '96% Placed' },
  },
  {
    id: 'sciences',
    icon: '🔬',
    color: 'from-orange-500 to-rose-600',
    badge: 'Research-Led',
    title: 'Applied Sciences',
    tagline: 'Question everything. Discover more.',
    description:
      'Rigorous B.Sc and M.Sc courses anchored in research, supported by modern wet labs, simulation suites, and active government-funded research grants.',
    degrees: ['B.Sc (3 Years)', 'M.Sc (2 Years)', 'Ph.D Research'],
    specializations: [
      'Physics & Photonics',
      'Chemistry & Materials Science',
      'Biotechnology',
      'Mathematics & Statistics',
      'Environmental Science',
    ],
    stats: { students: '1,100+', rank: '30+ Patents Filed' },
  },
];

/* ── Sub-components ────────────────────────────────────────────────────────── */
function ProgramCard({
  program,
  index,
  inView,
}: {
  program: (typeof programs)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <article
      id={`program-${program.id}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`
        group relative flex flex-col bg-white rounded-3xl border border-slate-100
        shadow-sm overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,33,71,0.12)] hover:border-slate-200
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* ── Colour Header ──────────────────────────────────────────── */}
      <div
        className={`relative bg-gradient-to-br ${program.color} px-6 pt-6 pb-8`}
      >
        {/* Badge */}
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
          {program.badge}
        </span>

        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {program.icon}
        </div>

        {/* Title & tagline */}
        <h3 className="text-xl font-black text-white leading-tight mb-1">
          {program.title}
        </h3>
        <p className="text-white/70 text-xs font-medium italic">{program.tagline}</p>

        {/* Decorative circles */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-10 -right-2 w-16 h-16 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 pt-5 gap-5">

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed">
          {program.description}
        </p>

        {/* Degree pills */}
        <div className="flex flex-wrap gap-2">
          {program.degrees.map((d) => (
            <span
              key={d}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold border border-primary/15 bg-primary/4 text-primary"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Specializations */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
            Popular Specializations
          </p>
          <ul className="flex flex-col gap-2">
            {program.specializations.map((spec) => (
              <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span
                  className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
          <div>
            <div className="text-base font-black text-primary">{program.stats.students}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Students</div>
          </div>
          <div>
            <div className="text-base font-black text-primary">{program.stats.rank}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Distinction</div>
          </div>
        </div>

        {/* Learn More Link */}
        <a
          href={`#program-${program.id}`}
          className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors duration-200"
        >
          Learn More
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

/* ── Main Component ────────────────────────────────────────────────────────── */
export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView      = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative py-28 bg-surface overflow-hidden"
      aria-label="Academic Programs"
    >
      {/* ── Background texture ────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #002147 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/12 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Academic Programmes
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-primary leading-tight mt-2 mb-5">
            Find Your Path to{' '}
            <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Choose from 50+ undergraduate and postgraduate programmes — each designed
            with industry input, mentored by expert faculty, and backed by our
            unbeaten placement record.
          </p>
        </div>

        {/* ── Program Cards Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom CTA Strip ────────────────────────────────────── */}
        <div
          className={`mt-16 rounded-3xl bg-primary px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              Not sure which programme is right for you?
            </h3>
            <p className="text-white/60 text-sm">
              Our counsellors are available Mon–Sat, 9 AM – 6 PM for free guidance.
            </p>
          </div>
          <a
            href="#cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary font-bold text-sm rounded-xl shadow-lg hover:bg-accent-light transition-all duration-300 hover:scale-105"
          >
            Talk to a Counsellor
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
