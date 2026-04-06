const DAYS = [
  {
    day: 'Day 1',
    date: 'September 15',
    accentCyan: true,
    events: [
      { time: '9:00 AM',  title: 'Registration & Welcome Coffee' },
      { time: '10:00 AM', title: 'Keynote: The Future of AI' },
      { time: '12:00 PM', title: 'Lunch & Networking' },
      { time: '2:00 PM',  title: 'Parallel Quantum Computing Breakthroughs' },
      { time: '4:30 PM',  title: 'Workshop Building Scalable Systems' },
      { time: '6:00 PM',  title: 'Lightning Talks' },
      { time: '8:00 PM',  title: 'VIP Reception' },
    ],
  },
  {
    day: 'Day 2',
    date: 'September 16',
    accentCyan: false,
    events: [
      { time: '9:30 AM',  title: 'Morning Keynote: Design Systems at Scale' },
      { time: '11:00 AM', title: 'Breakout Sessions' },
      { time: '1:00 PM',  title: 'Exhibit & Expo Hall' },
      { time: '3:00 PM',  title: 'Panels: Frontiers of Innovation' },
      { time: '5:30 PM',  title: 'Demo on Labs' },
      { time: '7:30 PM',  title: 'Evening Gala' },
    ],
  },
  {
    day: 'Day 3',
    date: 'September 17',
    accentCyan: true,
    events: [
      { time: '9:00 AM',  title: 'Startup Pitch Competition' },
      { time: '11:00 AM', title: 'Breakout Sessions' },
      { time: '1:00 PM',  title: 'Workshop: Looking Ahead' },
      { time: '3:30 PM',  title: 'Ceremony & Awards' },
      { time: '5:00 PM',  title: 'Farewell Brunch' },
    ],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.06em' }}>
            SCHEDULE
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Three days of immersive learning</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {DAYS.map((d) => {
            const accent = d.accentCyan ? '#00f5ff' : '#e879f9';
            return (
              <div key={d.day} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px',
              }}>
                {/* Day header */}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ color: accent, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {d.day}
                  </span>
                  <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.88rem', marginTop: 4 }}>{d.date}</p>
                </div>

                {/* Events timeline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {d.events.map((ev, ei) => (
                    <div key={ei} style={{ display: 'flex', gap: 12 }}>
                      {/* Timeline track */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: accent, marginTop: 4, flexShrink: 0 }} />
                        {ei < d.events.length - 1 && (
                          <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.07)', minHeight: 22, marginTop: 3 }} />
                        )}
                      </div>
                      {/* Text */}
                      <div style={{ paddingBottom: ei < d.events.length - 1 ? 16 : 0 }}>
                        <p style={{ color: 'rgba(148,163,184,0.45)', fontSize: '0.7rem', marginBottom: 2 }}>{ev.time}</p>
                        <p style={{ color: '#e2e8f0', fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.4 }}>{ev.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
