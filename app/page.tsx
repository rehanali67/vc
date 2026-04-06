import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Pricing from "./components/Pricing";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed background layers */}
      <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute rounded-full" style={{
          width: 700, height: 700, top: -200, left: -200,
          background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
        }} />
        <div className="absolute rounded-full animate-pulse-glow" style={{
          width: 900, height: 900, top: 300, right: -350,
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }} />
      </div>

      {/* Page content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Features />
        <Speakers />
        <Schedule />
        <Venue />
        <Pricing />
        <TrustedBy />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
