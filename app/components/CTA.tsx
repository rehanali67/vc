export default function CTA() {
  return (
    <section className="relative py-24">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.05) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-black uppercase text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
          DON&apos;T MISS OUT
        </h2>
        <p className="text-sm mb-10" style={{ color: 'rgba(148,163,184,0.65)' }}>
          Secure your spot at the most anticipated tech event of 2026. Limited VIP passes remaining.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#tickets" className="px-9 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto text-center" style={{
            background: 'linear-gradient(135deg, #00c8ff, #e879f9)',
            color: '#fff',
            minWidth: 190,
            boxShadow: '0 0 30px rgba(0,200,255,0.2)',
          }}>
            Register Now
          </a>
          <a href="#" className="px-9 py-3.5 rounded-xl font-semibold text-sm w-full sm:w-auto text-center" style={{
            color: 'rgba(226,232,240,0.8)',
            border: '1px solid rgba(255,255,255,0.15)',
            minWidth: 190,
          }}>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
