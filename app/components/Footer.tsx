"use client";

const LINKS = [
  {
    title: 'Product',
    items: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  },
  {
    title: 'Legal',
    items: ['Privacy', 'Terms', 'Security', 'Status', 'Cookies'],
  },
];

const SOCIALS = [
  {
    label: 'X',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 005.993 3.03.077.077 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), rgba(168,85,247,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          {/* Brand col */}
          <div className="md:col-span-3">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" fill="#000" />
                  <path d="M9 6L12 8V11L9 13L6 11V8L9 6Z" fill="rgba(255,255,255,0.4)" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-wider" style={{ letterSpacing: '0.15em' }}>
                <span style={{ color: '#00f5ff' }}>NEXUS</span>
                <span style={{ color: '#a855f7' }}>AI</span>
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(100,116,139,0.7)' }}
            >
              The quantum-accelerated AI platform powering the next generation
              of intelligent applications across 190+ countries.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#e2e8f0',
                }}
              />
              <button
                className="px-4 py-2 rounded-lg text-xs font-bold flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                  color: '#000',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <div
                className="text-xs font-black tracking-widest mb-5 uppercase"
                style={{ color: 'rgba(100,116,139,0.6)' }}
              >
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(100,116,139,0.65)' }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#e2e8f0')}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(100,116,139,0.65)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'rgba(100,116,139,0.45)' }}>
            © 2026 NexusAI Inc. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(100,116,139,0.6)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,245,255,0.3)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,245,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(100,116,139,0.6)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse-glow 2s ease-in-out infinite' }}
            />
            <span className="text-xs" style={{ color: 'rgba(100,116,139,0.5)' }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
