const LINKS = {
  'Quick Links': ['Speakers', 'Schedule', 'Venue', 'Pricing', 'Partners'],
  Resources: ['FAQ', 'Press Kit', 'Sponsorship', 'Code of Conduct'],
  Connect: ['Twitter/X', 'LinkedIn', 'Instagram', 'Newsletter'],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" style={{ filter: 'drop-shadow(0 0 5px rgba(0,245,255,0.4))' }}>
                <path d="M13 1 L14.3 11.7 L25 13 L14.3 14.3 L13 25 L11.7 14.3 L1 13 L11.7 11.7 Z" fill="#00f5ff" />
                <circle cx="13" cy="13" r="2" fill="#02020f" />
              </svg>
              <span className="font-black text-white tracking-widest" style={{ fontSize: '0.95rem', letterSpacing: '0.2em' }}>PRISM</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.55)' }}>
              The Future of Technology · Decoded. Sept 15–17, 2026 in San Francisco.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(148,163,184,0.5)', letterSpacing: '0.14em' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: 'rgba(226,232,240,0.5)' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>© 2026 PRISM Conference. All rights reserved.</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
