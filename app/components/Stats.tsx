const STATS = [
  { value: '50+',   label: 'World-Class Speakers', isCyan: true },
  { value: '100+',  label: 'Interactive Sessions',  isCyan: false },
  { value: '2.5K+', label: 'Tech Leaders',          isCyan: true },
  { value: '85%',   label: 'Would Recommend',       isCyan: false },
];

export default function Stats() {
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center',
              padding: '40px 24px',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <p style={{
                fontFamily: 'inherit',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: 1,
                marginBottom: 8,
                background: s.isCyan
                  ? 'linear-gradient(135deg, #00f5ff, #00c8ff)'
                  : 'linear-gradient(135deg, #e879f9, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{s.value}</p>
              <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: '0.8rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
