export default function CTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,85,247,0.1) 0%, rgba(0,245,255,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Orbital rings */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '700px', height: '700px',
          border: '1px solid rgba(0,245,255,0.07)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'spin-slow 30s linear infinite',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '500px', height: '500px',
          border: '1px solid rgba(168,85,247,0.09)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'spin-slow 20s linear infinite reverse',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '320px', height: '320px',
          border: '1px solid rgba(0,245,255,0.06)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'spin-slow 14s linear infinite',
        }}
      />

      {/* Floating dots */}
      {[
        { top: '20%', left: '15%', color: '#00f5ff', size: 4, delay: '0s' },
        { top: '75%', left: '12%', color: '#a855f7', size: 3, delay: '1.2s' },
        { top: '25%', left: '82%', color: '#f0abfc', size: 4, delay: '0.6s' },
        { top: '70%', left: '80%', color: '#00f5ff', size: 3, delay: '1.8s' },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none rounded-full animate-float"
          style={{
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            top: p.top, left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
          style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.18)' }}
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
            Get Started Today
          </span>
        </div>

        <h2
          className="font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
        >
          <span style={{ color: '#e2e8f0' }}>Ready to Enter</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #f0abfc 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}
          >
            The Next Era?
          </span>
        </h2>

        <p
          className="text-lg mb-11 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(148,163,184,0.7)' }}
        >
          Join 50,000+ companies already operating at the cutting edge.
          Deploy in minutes, scale to infinity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full sm:w-auto text-center"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              color: '#000',
              minWidth: '220px',
              boxShadow: '0 0 40px rgba(0,245,255,0.25), 0 0 80px rgba(168,85,247,0.15)',
            }}
          >
            Start For Free →
          </a>
          <a
            href="#"
            className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto text-center"
            style={{
              border: '1px solid rgba(0,245,255,0.3)',
              color: '#00f5ff',
              minWidth: '220px',
            }}
          >
            Talk to Sales
          </a>
        </div>

        <p className="text-sm" style={{ color: 'rgba(100,116,139,0.5)' }}>
          No credit card required · Free forever plan · Cancel anytime
        </p>
      </div>
    </section>
  );
}
