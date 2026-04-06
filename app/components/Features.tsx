const FEATURES = [
  {
    isCyan: true,
    title: 'Cutting-Edge Content',
    desc: 'Deep dives into AI, quantum computing, and future tech',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    isCyan: false,
    title: 'Elite Network',
    desc: 'Connect with 2,500+ elite innovators and leaders',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    isCyan: true,
    title: 'World-Class Speakers',
    desc: 'Industry pioneers sharing breakthrough insights',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    isCyan: false,
    title: 'Global Impact',
    desc: 'Be part of a movement shaping technology partnerships worldwide',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            WHY PRISM?
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>More than just a conference</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {FEATURES.map((f) => {
            const color = f.isCyan ? '#00f5ff' : '#e879f9';
            const bg    = f.isCyan ? 'rgba(0,245,255,0.08)'   : 'rgba(232,121,249,0.08)';
            const bdr   = f.isCyan ? 'rgba(0,245,255,0.2)'    : 'rgba(232,121,249,0.2)';
            return (
              <div key={f.title} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 12,
                  background: bg,
                  border: `1px solid ${bdr}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <p style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.92rem', marginBottom: 8 }}>{f.title}</p>
                <p style={{ color: 'rgba(148,163,184,0.65)', fontSize: '0.82rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
