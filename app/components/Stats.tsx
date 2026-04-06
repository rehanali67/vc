const STATS = [
  { value: '12B+', label: 'Parameters Processed Daily', color: '#00f5ff' },
  { value: '0.4ms', label: 'Average Response Time', color: '#a855f7' },
  { value: '99.99%', label: 'Platform Uptime', color: '#f0abfc' },
  { value: '50K+', label: 'Active Enterprise Clients', color: '#00f5ff' },
];

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl p-10 md:p-14 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.015)',
            border: '1px solid rgba(0,245,255,0.12)',
            boxShadow: '0 0 80px rgba(0,245,255,0.05), inset 0 0 80px rgba(168,85,247,0.03)',
          }}
        >
          {/* Inner gradient */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.04) 0%, transparent 50%, rgba(168,85,247,0.04) 100%)',
            }}
          />

          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-24 h-24"
            style={{
              background: 'radial-gradient(circle at top left, rgba(0,245,255,0.1), transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-24 h-24"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(168,85,247,0.1), transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.18)' }}
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
                  By The Numbers
                </span>
              </div>
              <h2
                className="font-black"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  color: '#e2e8f0',
                  letterSpacing: '-0.02em',
                }}
              >
                Performance That{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Speaks
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="text-center relative">
                  {/* Vertical divider */}
                  {i > 0 && (
                    <div
                      className="absolute left-0 top-4 bottom-4 w-px hidden md:block"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    />
                  )}
                  <div
                    className="font-black mb-2"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                      color: s.color,
                      textShadow: `0 0 24px ${s.color}50`,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(100,116,139,0.8)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
