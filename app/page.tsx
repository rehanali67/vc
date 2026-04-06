import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* ── Fixed background layers ── */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Grid */}
        <div className="absolute inset-0 grid-bg" />

        {/* Ambient orbs */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: -200, left: -200,
            background: "radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full animate-pulse-glow"
          style={{
            width: 900, height: 900,
            top: 300, right: -350,
            background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full animate-pulse-glow"
          style={{
            width: 600, height: 600,
            bottom: 0, left: "35%",
            background: "radial-gradient(circle, rgba(240,171,252,0.04) 0%, transparent 70%)",
            animationDelay: "1.3s",
          }}
        />

        {/* Scan line */}
        <div
          className="absolute left-0 right-0"
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.25) 50%, transparent 100%)",
            animation: "scan-line 10s linear infinite",
          }}
        />
      </div>

      {/* ── Page ── */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
