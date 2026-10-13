import { useRef, useState } from 'react';
import { tracker } from '../analytics/index.js';

export default function BackgroundMedia({ src, title }) {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const video = useRef(null);
  const tracked = useRef(false);
  const toggle = () => {
    if (!started) { setStarted(true); return; }
    if (paused) video.current?.play().catch(() => setPaused(true));
    else video.current?.pause();
  };
  return <div className="absolute inset-0">
    {!started ? <img src="/images/Hero1.avif" alt="Land surveying instruments on site" width="600" height="369" fetchpriority="high" className="absolute inset-0 w-full h-full object-cover" /> :
      <video ref={video} src={src} autoPlay loop muted playsInline preload="none" poster="/images/Hero1.avif" aria-label={title}
        className="absolute inset-0 w-full h-full object-cover" onPause={() => setPaused(true)} onPlay={() => {
          setPaused(false);
          if (!tracked.current) { tracked.current = true; tracker.trackEvent('video_start', { video_title: title, video_provider: 'self_hosted' }); }
        }} />}
    <button onClick={toggle} className="absolute bottom-6 left-6 z-20 rounded-lg border border-white/70 bg-black/50 px-4 py-2 text-sm text-white hover:bg-black/70">
      {!started ? 'Play overview video' : paused ? 'Resume video' : 'Pause video'}
    </button>
  </div>;
}
