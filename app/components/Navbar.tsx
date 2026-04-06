export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(2, 2, 15, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-8 flex items-center justify-between"
        style={{ height: '64px' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.5))' }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              {/* 4-pointed star / asterisk shape */}
              <path
                d="M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z"
                fill="#00f5ff"
              />
              <circle cx="14" cy="14" r="2.5" fill="#02020f" />
            </svg>
          </div>
          <span
            className="font-black tracking-widest text-white"
            style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}
          >
            PRISM
          </span>
        </div>

        {/* Right: nav links + CTA */}
        <div className="flex items-center gap-1">
          {['Speakers', 'Schedule', 'Venue', 'Tickets'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(226,232,240,0.75)' }}
            >
              {label}
            </a>
          ))}

          <a
            href="#tickets"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #00c8ff 0%, #e879f9 100%)',
              color: '#fff',
              boxShadow: '0 0 18px rgba(0,200,255,0.25)',
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}
