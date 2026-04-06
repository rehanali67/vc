const COUNTDOWN = [
  { value: '160', label: 'Hours' },
  { value: '12', label: 'Workshops' },
  { value: '34', label: 'Tracks' },
  { value: '33', label: 'Speakers' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,245,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Orbital rings */}
      {[720, 520, 320].map((size, i) => (
        <div
          key={size}
          className="absolute pointer-events-none"
          style={{
            width: size, height: size,
            border: `1px solid rgba(${i === 1 ? '168,85,247' : '0,245,255'},${i === 2 ? '0.08' : '0.1'})`,
            borderRadius: '50%',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `spin-slow ${25 - i * 6}s linear infinite${i === 1 ? ' reverse' : ''}`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.2)' }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00f5ff', boxShadow: '0 0 6px #00f5ff', animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
            The Future of Technology · Platform
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-black uppercase mb-4"
          style={{ fontSize: 'clamp(5rem, 14vw, 11rem)', letterSpacing: '0.05em', lineHeight: 0.9 }}
        >
          <span
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(0,245,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(0,245,255,0.3))',
            }}
          >
            PRISM
          </span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 60%, #f0abfc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            2026
          </span>
        </h1>

        <p className="text-lg mb-10" style={{ color: 'rgba(148,163,184,0.7)' }}>
          The Future of Technology — Pioneering Tomorrow&apos;s Breakthroughs
        </p>

        {/* Countdown stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {COUNTDOWN.map((c, i) => (
            <div key={c.label} className="flex items-center gap-8">
              {i !== 0 && (
                <div className="w-px h-10 hidden sm:block" style={{ background: 'rgba(0,245,255,0.15)' }} />
              )}
              <div className="text-center">
                <div
                  className="font-black text-4xl leading-none mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {c.value}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(100,116,139,0.7)' }}>
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conference card */}
        <div
          className="relative mx-auto rounded-2xl p-6 mb-10"
          style={{
            maxWidth: '480px',
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(0,245,255,0.2)',
            boxShadow: '0 0 60px rgba(0,245,255,0.06), 0 0 120px rgba(168,85,247,0.04)',
          }}
        >
          {/* Card header */}
          <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <polygon points="16,2 30,28 2,28" fill="none" stroke="#00f5ff" strokeWidth="2" />
                <polygon points="16,8 24,24 8,24" fill="rgba(0,245,255,0.2)" stroke="#00f5ff" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <div className="font-black text-sm tracking-widest" style={{ color: '#e2e8f0' }}>PRISM 2026</div>
              <div className="text-xs" style={{ color: 'rgba(0,245,255,0.6)' }}>Annual Tech Summit</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            {[
              { label: 'Date', value: 'Sept 16–17, 2026' },
              { label: 'Venue', value: 'Tech Nexus Center' },
              { label: 'Format', value: 'Hybrid Event' },
              { label: 'Attendees', value: '2,500+ Leaders' },
            ].map((row) => (
              <div key={row.label}>
                <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(100,116,139,0.5)' }}>
                  {row.label}
                </div>
                <div className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="px-9 py-3.5 rounded-xl font-bold text-base transition-all duration-300 w-full sm:w-auto text-center"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              color: '#000',
              minWidth: '200px',
              boxShadow: '0 0 30px rgba(0,245,255,0.25), 0 0 60px rgba(168,85,247,0.15)',
            }}
          >
            Secure Your Spot →
          </a>
          <a
            href="#schedule"
            className="px-9 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 w-full sm:w-auto text-center"
            style={{
              color: '#00f5ff',
              border: '1px solid rgba(0,245,255,0.35)',
              minWidth: '200px',
            }}
          >
            View Agenda
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(100,116,139,0.4)' }}>
            Scroll to explore
          </div>
          <div
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: '#00f5ff', animation: 'float 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
