export default function Venue() {
  return (
    <section id="venue" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            THE VENUE
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>State-of-the-art facility in the heart of the tech district</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            {/* Main image */}
            <div className="col-span-2 rounded-2xl overflow-hidden h-52" style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(168,85,247,0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              position: 'relative',
            }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract building silhouette */}
                <svg width="180" height="120" viewBox="0 0 180 120" fill="none" opacity="0.25">
                  <rect x="30" y="20" width="50" height="100" fill="white"/>
                  <rect x="90" y="40" width="60" height="80" fill="white"/>
                  <rect x="10" y="60" width="25" height="60" fill="white"/>
                  <rect x="155" y="50" width="20" height="70" fill="white"/>
                  <rect x="40" y="10" width="6" height="15" fill="#00f5ff"/>
                  <rect x="105" y="30" width="6" height="15" fill="#00f5ff"/>
                </svg>
              </div>
              <div className="absolute bottom-3 left-4">
                <span className="text-xs font-bold text-white/70 tracking-widest uppercase" style={{ fontSize: '0.7rem' }}>Tech Nexus Center</span>
              </div>
            </div>
            <div className="rounded-xl h-32" style={{
              background: 'linear-gradient(135deg, rgba(232,121,249,0.08) 0%, rgba(0,245,255,0.06) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }} />
            <div className="rounded-xl h-32" style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(168,85,247,0.08) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }} />
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">Tech Nexus Center</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(148,163,184,0.65)' }}>
              Located in downtown&apos;s Innovation District, the Tech Nexus Center is San Francisco&apos;s premier event destination for the world&apos;s most forward-thinking gatherings.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: '🏛️', text: 'Main auditorium with 3,000-seat capacity' },
                { icon: '🧩', text: '8 breakout rooms for workshops' },
                { icon: '📍', text: '32,000 sq ft expo hall' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <p className="text-sm" style={{ color: 'rgba(226,232,240,0.7)' }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-5" style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#00f5ff', letterSpacing: '0.15em' }}>
                Accessibility & Amenities
              </p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'High-speed WiFi throughout',
                  'VIP lounge with dedicated concierge',
                  'On-site parking and transit access',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#e879f9' }} />
                    <p className="text-sm" style={{ color: 'rgba(226,232,240,0.65)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
