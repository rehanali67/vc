const SPEAKERS = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Director of AI Research',
    org: 'QuantumMind Labs',
    photoBg: 'linear-gradient(160deg, #0a2a2e 0%, #071520 60%, #0d0d1a 100%)',
    accent: '#00f5ff',
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Chief Innovation Officer',
    org: 'NexusTech Corp',
    photoBg: 'linear-gradient(160deg, #1a0a2e 0%, #12071a 60%, #0d0d1a 100%)',
    accent: '#a855f7',
  },
  {
    name: 'Alex Kim',
    title: 'Founder & CEO',
    org: 'FutureSync AI',
    photoBg: 'linear-gradient(160deg, #2a0a1e 0%, #1a071a 60%, #0d0d1a 100%)',
    accent: '#e879f9',
  },
  {
    name: 'Jordan Taylor',
    title: 'Lead Quantum Engineer',
    org: 'QuantumEdge',
    photoBg: 'linear-gradient(160deg, #0a1a2e 0%, #0a1a20 60%, #0d0d1a 100%)',
    accent: '#00f5ff',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            SPEAKER LINEUP
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Industry pioneers sharing breakthrough insights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="rounded-2xl overflow-hidden flex flex-col" style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              {/* Photo area */}
              <div className="relative overflow-hidden" style={{ height: 220, background: s.photoBg }}>
                {/* Subtle noise / grain texture */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
                  backgroundSize: '150px 150px',
                  mixBlendMode: 'overlay',
                }} />

                {/* Person silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <svg width="130" height="165" viewBox="0 0 130 165" fill="none">
                    {/* Head */}
                    <ellipse cx="65" cy="52" rx="28" ry="32" fill="rgba(255,255,255,0.12)" />
                    {/* Neck */}
                    <rect x="56" y="80" width="18" height="16" rx="4" fill="rgba(255,255,255,0.1)" />
                    {/* Shoulders / body */}
                    <path d="M10 165 C10 120 30 100 65 100 C100 100 120 120 120 165Z" fill="rgba(255,255,255,0.1)" />
                  </svg>
                </div>

                {/* Accent glow at top */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: s.accent, opacity: 0.6 }} />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{
                  background: 'linear-gradient(to top, rgba(13,13,26,0.95) 0%, transparent 100%)',
                }} />
              </div>

              {/* Info */}
              <div className="p-5 flex-1">
                <h3 className="font-bold text-white mb-1" style={{ fontSize: '0.95rem' }}>{s.name}</h3>
                <p className="text-xs mb-1 font-medium" style={{ color: s.accent }}>{s.title}</p>
                <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>{s.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
