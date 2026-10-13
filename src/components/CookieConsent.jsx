import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tracker } from '../analytics/index.js';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (tracker.configured) setOpen(!tracker.getConsent().decided);
    const show = () => setOpen(true);
    window.addEventListener('hayagriva:cookie-settings', show);
    return () => window.removeEventListener('hayagriva:cookie-settings', show);
  }, []);
  if (!tracker.configured || !open) return null;
  const choose = (analytics, ads) => {
    tracker.setConsent({ analytics, ads });
    setOpen(false);
  };
  return (
    <section aria-label="Cookie choices" className="cookie-consent">
      <div>
        <strong>Your cookie choices</strong>
        <p>With your permission, Google Analytics and Microsoft Clarity measure site use. Google Ads measures ad leads and can use hashed email and phone after an accepted inquiry. <Link to="/privacy">Privacy details</Link></p>
      </div>
      <div className="cookie-actions">
        <button onClick={() => choose(false, false)}>Essential only</button>
        <button onClick={() => choose(true, false)}>Allow analytics</button>
        <button className="cookie-accept" onClick={() => choose(true, true)}>Allow all</button>
      </div>
    </section>
  );
}
