import { useRef } from 'react';
import { tracker } from '../analytics/index.js';

export default function TrackedVideo({ src, poster, title }) {
  const milestones = useRef(new Set());
  const track = (name, extra = {}) => tracker.trackEvent(name, { video_title: title, video_provider: 'self_hosted', ...extra });
  const start = () => {
    if (milestones.current.has('start')) return;
    milestones.current.add('start');
    track('video_start');
  };
  const progress = (event) => {
    const { currentTime, duration } = event.currentTarget;
    if (!Number.isFinite(duration) || duration <= 0) return;
    [25, 50, 75].forEach((percent) => {
      if (currentTime / duration * 100 < percent || milestones.current.has(percent)) return;
      milestones.current.add(percent);
      track('video_progress', { video_percent: percent });
    });
  };
  const complete = () => {
    if (milestones.current.has('complete')) return;
    milestones.current.add('complete');
    track('video_complete', { video_percent: 100 });
  };
  return (
    <video controls playsInline preload="none" poster={poster} aria-label={title}
      onPlay={start} onTimeUpdate={progress} onEnded={complete} width="600" height="369">
      <source src={src} type="video/mp4" />
      Your browser does not support video playback. <a href={src}>Download the video</a>.
    </video>
  );
}
