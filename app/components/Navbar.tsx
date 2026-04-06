export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(2,2,15,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: 64 }}>
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.5))' }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 1 L14.3 11.7 L25 13 L14.3 14.3 L13 25 L11.7 14.3 L1 13 L11.7 11.7 Z" fill="#00f5ff" />
              <circle cx="13" cy="13" r="2.2" fill="#02020f" />
            </svg>
          </div>
          <span className="font-black text-white tracking-widest" style={{ fontSize: '1.05rem', letterSpacing: '0.22em' }}>
            PRISM
          </span>
        </div>

        {/* Nav + CTA */}
        <div className="hidden md:flex items-center gap-1">
          {['Speakers', 'Schedule', 'Venue', 'Tickets'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'rgba(226,232,240,0.75)' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#tickets"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #00c8ff 0%, #e879f9 100%)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(0,200,255,0.2)',
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}
