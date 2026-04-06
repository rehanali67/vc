const SPEAKERS = [
  { name: 'Dr. Sarah Chen', title: 'Director of AI Research', org: 'QuantumMind Labs', grad: 'from-cyan-900 to-slate-800' },
  { name: 'Marcus Rodriguez', title: 'Chief Innovation Officer', org: 'NexusTech Corp', grad: 'from-purple-900 to-slate-800' },
  { name: 'Alex Kim', title: 'Founder & CEO', org: 'FutureSync AI', grad: 'from-pink-900 to-slate-800' },
  { name: 'Jordan Taylor', title: 'Lead Quantum Engineer', org: 'QuantumEdge', grad: 'from-cyan-900 to-purple-900' },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            SPEAKER LINEUP
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Industry pioneers sharing breakthrough insights</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="rounded-2xl overflow-hidden group" style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              {/* Photo placeholder */}
              <div className={`relative h-56 bg-gradient-to-b ${s.grad} flex items-end`} style={{ filter: 'grayscale(0.4) contrast(1.05)' }}>
                {/* Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="rgba(255,255,255,0.4)">
                    <circle cx="40" cy="28" r="18"/>
                    <path d="M10 80c0-16.6 13.4-30 30-30s30 13.4 30 30"/>
                  </svg>
                </div>
                {/* Cyan bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20" style={{
                  background: 'linear-gradient(to top, rgba(0,245,255,0.12), transparent)',
                }} />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white mb-0.5" style={{ fontSize: '0.95rem' }}>{s.name}</h3>
                <p className="text-xs mb-1" style={{ color: '#00f5ff' }}>{s.title}</p>
                <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>{s.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
