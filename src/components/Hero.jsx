import CallNowLink from './CallNowLink.jsx';
import { Link } from 'react-router-dom';
import BackgroundMedia from './BackgroundMedia.jsx';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[75vh] sm:h-[85vh] lg:h-screen relative overflow-hidden">
        {/* Video Background */}
        <BackgroundMedia src="/videos/hero-video.mp4" title="Homepage surveying overview" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        {/* Content */}
        <div className="absolute inset-0 container-default flex items-center z-10">
          <div className="max-w-3xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Your Trusted Partner in Mancherial for Land Survey, Permissions & Approvals, and Complete Design Services.
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg">Accurate boundary surveys, plot demarcation, topographic & construction surveys with reliable reports.</p>
            <div className="mt-6 flex gap-3">
              <CallNowLink className="rounded-lg px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white shadow transition-colors" placement="hero_cta_1" />
              <Link to="/about" className="rounded-lg px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-colors">Know About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

