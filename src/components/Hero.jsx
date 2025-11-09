import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <section className="relative">
      <div className="h-[75vh] sm:h-[85vh] lg:h-screen relative overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/images/Hero1.avif" alt="Professional land surveying services" className="w-full h-full object-cover" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        {/* Content */}
        <div className="absolute inset-0 container-default flex items-center z-10">
          <div className="max-w-3xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Professional Land Survey Services in Mancherial</h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg">Accurate boundary surveys, plot demarcation, topographic & construction surveys with reliable reports.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="rounded-lg px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white shadow transition-colors">Get a Quote</Link>
              <Link to="/about" className="rounded-lg px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-colors">Know About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

