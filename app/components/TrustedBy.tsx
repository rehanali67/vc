const PARTNERS = [
  ['TechCorp', 'InnovateLabs', 'FutureSync', 'QuantumEdge'],
  ['NeuralNet', 'CloudFirst', 'DataPrime', 'CodeForge'],
];

export default function TrustedBy() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            OUR PARTNERS
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Supported by industry leaders</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PARTNERS.map((row, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {row.map((name) => (
                <div key={name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '20px 16px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12,
                }}>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'rgba(226,232,240,0.45)' }}>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
