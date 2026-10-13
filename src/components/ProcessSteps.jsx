import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDownIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';

const steps = [
  ['Tell us about your site', 'Send the location, approximate area and your requirement on WhatsApp or through the form.'],
  ['Agree on the scope', 'We review your details, discuss the documents and confirm the quote and site visit schedule.'],
  ['Get your next step clear', 'Receive the measurements, drawings or documentation agreed for your project.'],
];

export default function ProcessSteps() {
  const id = useId();
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(root.current);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const playing = inView && visible && !paused && !focused && !reducedMotion;
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive(current => current === null ? 0 : (current + 1) % steps.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing]);

  return <div ref={root} className="process-accordion" onFocusCapture={event => setFocused(Boolean(event.target.closest('.process-step')))}
    onBlurCapture={event => setFocused(Boolean(event.relatedTarget?.closest?.('.process-step')))}>
    <div className="process-toolbar"><span>Three simple steps</span>
      {!reducedMotion && <button type="button" aria-label={paused ? 'Resume automatic steps' : 'Pause automatic steps'}
        aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}{paused ? 'Play' : 'Pause'}</button>}
    </div>
    {steps.map(([title, description], index) => <article className="process-step" data-open={active === index} key={title}>
      <h3><button type="button" id={`${id}-step-${index}`} aria-expanded={active === index} aria-controls={`${id}-panel-${index}`}
        onClick={() => { setPaused(true); setActive(current => current === index ? null : index); }}>
        <span className="process-number">0{index + 1}</span><span>{title}</span><ChevronDownIcon aria-hidden="true" />
      </button></h3>
      <div id={`${id}-panel-${index}`} role="region" aria-labelledby={`${id}-step-${index}`} hidden={active !== index} className="process-answer"><p>{description}</p></div>
    </article>)}
  </div>;
}
