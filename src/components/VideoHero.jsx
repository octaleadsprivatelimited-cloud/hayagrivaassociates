import BackgroundMedia from './BackgroundMedia.jsx';

export default function VideoHero({ children, className = "h-[50vh] sm:h-[60vh] lg:h-[70vh]" }) {
  return (
    <section className={`relative ${className} overflow-hidden`}>
      {/* Video Background */}
      <BackgroundMedia src="/videos/hero-video-secondary.mp4" title="Surveying and site work overview" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      {/* Content */}
      {children}
    </section>
  );
}

