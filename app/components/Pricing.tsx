const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever free',
    desc: 'Perfect for exploration and small projects.',
    features: [
      '10K queries/month',
      '2 AI models',
      'Community support',
      'Basic analytics',
      '1 workspace',
    ],
    cta: 'Start Free',
    highlight: false,
    color: '#00f5ff',
    rgb: '0,245,255',
  },
  {
    name: 'Pro',
    price: '$99',
    period: 'per month',
    desc: 'For teams ready to move to production at scale.',
    features: [
      '5M queries/month',
      'All AI models',
      'Priority support',
      'Advanced analytics',
      '10 workspaces',
      'Custom domains',
      'SSO & SAML',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
    color: '#a855f7',
    rgb: '168,85,247',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    desc: 'Unlimited scale, custom SLAs, dedicated infra.',
    features: [
      'Unlimited queries',
      'Custom model fine-tuning',
      'Dedicated support pod',
      'Custom analytics',
      'Unlimited workspaces',
      'On-premise deploy',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlight: false,
    color: '#f0abfc',
    rgb: '240,171,252',
  },
];

export default function Pricing() {
  return (
    <section className="relative py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#a855f7' }}>
              Pricing
            </span>
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#e2e8f0' }}>Simple, </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Transparent
            </span>
            <span style={{ color: '#e2e8f0' }}> Pricing</span>
          </h2>
          <p className="max-w-md mx-auto text-base" style={{ color: 'rgba(148,163,184,0.6)' }}>
            Start free, scale infinitely. No hidden fees, no surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: plan.highlight
                  ? 'rgba(168,85,247,0.06)'
                  : 'rgba(255,255,255,0.02)',
                border: plan.highlight
                  ? '1px solid rgba(168,85,247,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: plan.highlight
                  ? '0 0 60px rgba(168,85,247,0.12), 0 0 0 1px rgba(168,85,247,0.08)'
                  : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black tracking-widest"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #f0abfc)',
                    color: '#000',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Plan name */}
              <div
                className="text-xs font-black tracking-widest mb-4 uppercase"
                style={{ color: plan.color }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-black text-5xl" style={{ color: '#f1f5f9', letterSpacing: '-0.03em' }}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-sm" style={{ color: 'rgba(100,116,139,0.7)' }}>/ mo</span>
                )}
              </div>
              <p className="text-sm mb-1" style={{ color: 'rgba(100,116,139,0.6)' }}>{plan.period}</p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(148,163,184,0.7)' }}>{plan.desc}</p>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: `rgba(${plan.rgb},0.15)` }}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `rgba(${plan.rgb},0.12)` }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(148,163,184,0.8)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.highlight ? (
                <a
                  href="#"
                  className="block text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #f0abfc)',
                    color: '#000',
                    boxShadow: '0 0 30px rgba(168,85,247,0.3)',
                  }}
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#"
                  className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    border: `1px solid rgba(${plan.rgb},0.35)`,
                    color: plan.color,
                  }}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
