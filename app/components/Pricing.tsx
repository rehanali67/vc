const TIERS = [
  {
    name: 'Virtual Pass',
    price: '$299',
    highlight: false,
    features: [
      'Live streaming access',
      'All sessions on demand for 30 days',
      'Digital swag bag',
      'Community Discord access',
    ],
    cta: 'Select Virtual Pass',
  },
  {
    name: 'Standard Pass',
    price: '$599',
    highlight: false,
    features: [
      'Full 3-day access',
      'All sessions & workshops',
      'Networking events',
      'Lunch included',
      'Certificate of attendance',
    ],
    cta: 'Select Standard Pass',
  },
  {
    name: 'VIP Pass',
    price: '$1000',
    highlight: true,
    badge: 'BEST VALUE',
    features: [
      'Premium seating',
      'VIP lounge access',
      'Private speaker meet & greets',
      '1-on-1 consultation slots',
      'Lifetime recording access',
      'Priority support',
    ],
    cta: 'Select VIP Pass',
  },
];

export default function Pricing() {
  return (
    <section id="tickets" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            PRICING
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Choose the experience that fits your goals</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
          {TIERS.map((tier) => (
            <div key={tier.name} style={{
              position: 'relative',
              background: tier.highlight ? 'rgba(12,12,30,0.95)' : 'rgba(255,255,255,0.025)',
              border: tier.highlight ? '1px solid rgba(0,245,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20,
              padding: '28px 24px',
              boxShadow: tier.highlight ? '0 0 40px rgba(0,245,255,0.07), 0 0 80px rgba(232,121,249,0.04)' : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Badge */}
              {tier.badge && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '3px 12px',
                    borderRadius: 999,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    background: 'linear-gradient(135deg, #00c8ff, #e879f9)',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                  }}>
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Name + price */}
              <p style={{ color: tier.highlight ? '#00f5ff' : 'rgba(226,232,240,0.65)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>
                {tier.name}
              </p>
              <p style={{ color: '#fff', fontWeight: 900, fontSize: '2.25rem', lineHeight: 1, marginBottom: 24 }}>
                {tier.price}
              </p>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28, flex: 1 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: tier.highlight ? 'rgba(0,245,255,0.1)' : 'rgba(255,255,255,0.06)',
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke={tier.highlight ? '#00f5ff' : 'rgba(148,163,184,0.6)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: 'rgba(226,232,240,0.75)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#" style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px 0',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '0.85rem',
                textDecoration: 'none',
                ...(tier.highlight ? {
                  background: 'linear-gradient(135deg, #00c8ff, #e879f9)',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(0,200,255,0.2)',
                } : {
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(226,232,240,0.75)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }),
              }}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
