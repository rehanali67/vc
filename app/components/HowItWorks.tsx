const STEPS = [
  {
    step: '01',
    title: 'Connect',
    desc: 'Plug in your data sources via our universal connector in under 5 minutes.',
    color: '#00f5ff',
    rgb: '0,245,255',
  },
  {
    step: '02',
    title: 'Configure',
    desc: 'Select your AI models and tune parameters through an intuitive visual editor.',
    color: '#a855f7',
    rgb: '168,85,247',
  },
  {
    step: '03',
    title: 'Process',
    desc: 'Our quantum engine ingests, normalizes, and enriches data at petabyte scale.',
    color: '#f0abfc',
    rgb: '240,171,252',
  },
  {
    step: '04',
    title: 'Amplify',
    desc: 'Deploy insights to any surface — dashboards, APIs, webhooks, or automation.',
    color: '#00f5ff',
    rgb: '0,245,255',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* BG radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#a855f7' }}>
              Process
            </span>
          </div>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              How NexusAI{' '}
            </span>
            <span style={{ color: '#e2e8f0' }}>Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute hidden md:block"
            style={{
              top: '36px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0,245,255,0.3), rgba(168,85,247,0.3), rgba(240,171,252,0.3), rgba(0,245,255,0.3))',
            }}
          />

          {STEPS.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {/* Circle */}
              <div
                className="relative z-10 w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5"
                style={{
                  background: '#02020f',
                  border: `2px solid ${s.color}`,
                  boxShadow: `0 0 0 4px rgba(2,2,15,1), 0 0 20px ${s.color}40`,
                }}
              >
                <span className="font-black text-2xl" style={{ color: s.color }}>
                  {s.step}
                </span>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < STEPS.length - 1 && (
                <div
                  className="md:hidden w-px h-8 mb-5"
                  style={{ background: `linear-gradient(to bottom, ${s.color}60, transparent)` }}
                />
              )}

              <h3 className="font-bold text-lg mb-2" style={{ color: '#e2e8f0' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(100,116,139,0.85)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
