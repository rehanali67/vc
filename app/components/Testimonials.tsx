"use client";

const TESTIMONIALS = [
  {
    quote:
      '"NexusAI cut our model inference time by 94%. What used to take 800ms now runs in under 50ms. It\'s not just faster — it\'s a completely different paradigm."',
    name: 'Dr. Aria Chen',
    role: 'CTO, Quantum Dynamics',
    avatar: 'AC',
    color: '#00f5ff',
    rgb: '0,245,255',
  },
  {
    quote:
      '"We processed our entire data warehouse — 40TB — in 3 hours. The adaptive intelligence layer found patterns our team of data scientists had missed for months."',
    name: 'Marcus Veil',
    role: 'Head of AI, Stellar Labs',
    avatar: 'MV',
    color: '#a855f7',
    rgb: '168,85,247',
  },
  {
    quote:
      '"The security model is unlike anything else on the market. Quantum-resistant encryption with zero-trust architecture gave our board the confidence to move fully to the cloud."',
    name: 'Zara Nomura',
    role: 'CISO, Nexion Global',
    avatar: 'ZN',
    color: '#f0abfc',
    rgb: '240,171,252',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,245,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.18)' }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
              Testimonials
            </span>
          </div>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#e2e8f0' }}>Loved by </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Innovators
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-7 flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = `1px solid rgba(${t.rgb},0.25)`;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Quote icon */}
              <div className="mb-4" style={{ color: `rgba(${t.rgb},0.4)` }}>
                <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor">
                  <path d="M0 22V13.455C0 5.97 4.507 1.455 13.52 0l1.04 2.024C9.653 3.11 7.44 5.64 6.933 9.636H11V22H0zm17 0V13.455C17 5.97 21.507 1.455 30.52 0l1.04 2.024C26.653 3.11 24.44 5.64 23.933 9.636H28V22H17z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: 'rgba(148,163,184,0.8)', fontStyle: 'italic' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: `rgba(${t.rgb},0.12)`,
                    border: `1px solid rgba(${t.rgb},0.3)`,
                    color: t.color,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#e2e8f0' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(100,116,139,0.7)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
