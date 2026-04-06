const WHY_ITEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cutting-Edge Content',
    desc: 'Dive into 34+ tracks covering AI, quantum computing, future tech, and more—curated by industry insiders.',
    color: '#00f5ff',
    rgb: '0,245,255',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="8" r="3" />
        <circle cx="15" cy="8" r="3" />
        <path d="M2 20c0-4 3-7 7-7h6c4 0 7 3 7 7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Elite Network',
    desc: 'Connect with 2,500+ innovators and industry leaders from across the globe.',
    color: '#a855f7',
    rgb: '168,85,247',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'World-Class Speakers',
    desc: '50+ visionaries and pioneers sharing breakthrough insights and future predictions.',
    color: '#f0abfc',
    rgb: '240,171,252',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" />
      </svg>
    ),
    title: 'Global Impact',
    desc: 'Part of a movement that has shaped tech partnerships across 50+ countries worldwide.',
    color: '#00f5ff',
    rgb: '0,245,255',
  },
];

export default function TrustedBy() {
  return (
    <section className="relative py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,245,255,0.04) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-black uppercase mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.08em', color: '#e2e8f0' }}
          >
            WHY PRISM?
          </h2>
          <p style={{ color: 'rgba(148,163,184,0.6)' }}>More than a conference</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-7 flex flex-col items-center text-center"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `rgba(${item.rgb},0.1)`,
                  border: `1px solid rgba(${item.rgb},0.25)`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#e2e8f0' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(100,116,139,0.85)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
