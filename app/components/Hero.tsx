'use client';
import { useEffect, useState } from 'react';

const TARGET = new Date('2026-09-15T00:00:00');

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

const UNITS = [
  { key: 'days' as const,  label: 'DAYS',  color: '#00f5ff' },
  { key: 'hours' as const, label: 'HOURS', color: '#e879f9' },
  { key: 'mins' as const,  label: 'MINS',  color: '#00f5ff' },
  { key: 'secs' as const,  label: 'SECS',  color: '#e879f9' },
];

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden" style={{ paddingTop: 120, minHeight: '100vh' }}>
      {/* Bg glow — matches screenshot: deep teal-to-purple radial in hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 75% 60% at 50% 28%, rgba(0,80,90,0.55) 0%, rgba(80,10,70,0.45) 40%, transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 35% at 50% 10%, rgba(0,245,255,0.06) 0%, transparent 60%)',
      }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="font-black uppercase text-white" style={{
          fontSize: 'clamp(5rem, 14vw, 9.5rem)',
          letterSpacing: '0.04em',
          lineHeight: 1,
          fontStretch: 'condensed',
          marginBottom: '1.1rem',
        }}>
          PRISM 2026
        </h1>

        {/* Subtitle */}
        <p className="mb-10 font-medium" style={{ color: '#00f5ff', letterSpacing: '0.05em', fontSize: '1rem' }}>
          The Future of Technology · Decoded
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {UNITS.map(({ key, label, color }) => (
            <div key={key} className="flex flex-col items-center justify-center rounded-xl" style={{
              width: 108, height: 78,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}>
              <span className="font-black leading-none" style={{ fontSize: '2.1rem', color }}>{String(time[key]).padStart(2, '0')}</span>
              <span className="text-xs font-semibold tracking-widest mt-1" style={{ color: 'rgba(148,163,184,0.55)', letterSpacing: '0.14em' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* VIP Card */}
        <div className="relative mx-auto rounded-2xl" style={{
          maxWidth: 540,
          background: 'rgba(15,15,35,0.75)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)',
          padding: '28px 32px',
          marginBottom: '2.5rem',
        }}>
          <div className="flex items-start justify-between">
            <div className="text-left">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00c8ff', letterSpacing: '0.18em' }}>
                VIP ACCESS PASS
              </p>
              <p className="font-black text-white uppercase" style={{ fontSize: '1.9rem', letterSpacing: '0.1em', lineHeight: 1 }}>PRISM</p>
              <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em' }}>2026 EDITION</p>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {[
                  { meta: 'Date', value: 'Sept 15-17, 2026', icon: '🗓' },
                  { meta: 'Venue', value: 'Tech Nexus Center', icon: '📍' },
                  { meta: 'Attendees', value: '2,500+ Leaders', icon: '👥' },
                  { meta: 'Type', value: 'Hybrid Event', icon: '✦' },
                ].map((row) => (
                  <div key={row.meta} className="flex items-start gap-2">
                    <span className="text-sm mt-0.5" style={{ color: '#e879f9' }}>{row.icon}</span>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'rgba(148,163,184,0.45)' }}>{row.meta}</p>
                      <p className="text-sm font-bold text-white">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* QR */}
            <div className="flex-shrink-0 flex items-center justify-center rounded-xl" style={{
              width: 88, height: 88,
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.14)',
            }}>
              <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.35)' }}>QR</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href="#tickets" className="px-9 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto text-center" style={{
            background: 'linear-gradient(135deg, #00c8ff, #e879f9)',
            color: '#fff',
            minWidth: 190,
            boxShadow: '0 0 30px rgba(0,200,255,0.2)',
          }}>
            Secure Your Spot →
          </a>
          <a href="#schedule" className="px-9 py-3.5 rounded-xl font-semibold text-sm w-full sm:w-auto text-center" style={{
            color: '#00f5ff',
            border: '1px solid rgba(0,245,255,0.35)',
            minWidth: 190,
          }}>
            View Agenda
          </a>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(100,116,139,0.4)' }}>Scroll to explore</p>
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="w-1 h-2 rounded-full" style={{ background: '#00f5ff', animation: 'float 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
