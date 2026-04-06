"use client";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Quantum Neural Engine',
    desc: 'Process billions of parameters with quantum-accelerated matrix operations at speeds previously unimaginable.',
    color: '#00f5ff',
    rgb: '0,245,255',
    tag: 'CORE',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    title: 'Adaptive Intelligence',
    desc: 'Self-optimizing models that learn from every interaction, continuously improving without retraining.',
    color: '#a855f7',
    rgb: '168,85,247',
    tag: 'AI',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real-Time Data Streams',
    desc: 'Ingest and process millions of events per second with sub-millisecond latency across global nodes.',
    color: '#f0abfc',
    rgb: '240,171,252',
    tag: 'DATA',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zero-Trust Security',
    desc: 'Military-grade encryption with quantum-resistant algorithms protecting every byte of your data.',
    color: '#00f5ff',
    rgb: '0,245,255',
    tag: 'SECURITY',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" />
        <circle cx="19" cy="17" r="3" />
        <circle cx="5" cy="17" r="3" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="12" y1="14" x2="19" y2="14" />
        <line x1="12" y1="14" x2="5" y2="14" />
      </svg>
    ),
    title: 'Distributed Compute',
    desc: 'Seamlessly scale across 190+ edge nodes worldwide with automatic load balancing and failover.',
    color: '#a855f7',
    rgb: '168,85,247',
    tag: 'INFRA',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Unified API Layer',
    desc: 'One SDK, every capability. Integrate in minutes with any stack using our language-agnostic APIs.',
    color: '#f0abfc',
    rgb: '240,171,252',
    tag: 'DEV',
  },
];

export default function Features() {
  return (
    <section className="relative py-28">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,245,255,0.04) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(0,245,255,0.06)',
              border: '1px solid rgba(0,245,255,0.18)',
            }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
              Core Capabilities
            </span>
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#e2e8f0' }}>Built for the </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Next Frontier
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'rgba(148,163,184,0.7)' }}>
            Every feature engineered for maximum intelligence, minimum latency, and infinite scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = `1px solid rgba(${f.rgb},0.3)`;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.background = `rgba(${f.rgb},0.04)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `rgba(${f.rgb},0.1)`,
                    border: `1px solid rgba(${f.rgb},0.25)`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-md"
                  style={{
                    background: `rgba(${f.rgb},0.1)`,
                    color: f.color,
                    border: `1px solid rgba(${f.rgb},0.2)`,
                  }}
                >
                  {f.tag}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-2" style={{ color: '#e2e8f0' }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(100,116,139,0.9)' }}>
                {f.desc}
              </p>

              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: f.color }}
              >
                Learn more
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
