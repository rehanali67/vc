const TESTIMONIALS = [
  {
    quote: '"PRISM 2026 completely transformed how I think about AI integration. The speakers delivered incredibly actionable insights that my team implemented within weeks."',
    name: 'Emily Zhang',
    role: 'CTO, TechForward',
    isCyan: true,
  },
  {
    quote: '"Best tech conference I\'ve attended in the last decade. The networking opportunities alone were worth the price of admission. The speakers were world-class."',
    name: 'David Park',
    role: 'Founding Engineer, NovaTech',
    isCyan: false,
  },
  {
    quote: '"The VIP pass gave me access to exclusive side sessions. Worth every penny. I left with three partnership deals and a completely new strategic roadmap."',
    name: 'Priya Sharma',
    role: 'Head of Innovation, GlobalTech',
    isCyan: true,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            TESTIMONIALS
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>What past attendees are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => {
            const accent = t.isCyan ? '#00f5ff' : '#e879f9';
            const avatarBg = t.isCyan ? 'rgba(0,245,255,0.1)' : 'rgba(232,121,249,0.1)';
            const avatarBorder = t.isCyan ? 'rgba(0,245,255,0.25)' : 'rgba(232,121,249,0.25)';
            return (
              <div key={t.name} className="rounded-2xl p-7 flex flex-col" style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div className="text-3xl font-black mb-4 leading-none" style={{ color: accent, opacity: 0.45 }}>&ldquo;</div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(226,232,240,0.75)' }}>{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0" style={{
                    background: avatarBg,
                    border: `1px solid ${avatarBorder}`,
                    color: accent,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
