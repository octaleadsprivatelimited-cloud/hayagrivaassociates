import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { tracker } from '../analytics/index.js';

export default function Privacy() {
  return <article className="container-default py-16 max-w-3xl space-y-6">
    <h1 className="text-3xl font-semibold">Privacy & cookie choices</h1>
    <p>When you send an inquiry, Hayagriva Associates receives your name, contact details, selected service and message to respond to your request. The inquiry may also include the page and campaign that brought you to our website.</p>
    <h2 className="text-xl font-semibold">Inquiries and WhatsApp</h2>
    <p>Our website form sends your inquiry to our configured form provider, currently Formspree. WhatsApp and telephone links open your messaging or calling app. Opening WhatsApp does not send a message automatically; you choose whether to send it.</p>
    <h2 className="text-xl font-semibold">Optional analytics and advertising</h2>
    <p>When configured and allowed by your cookie choices, Google Analytics measures page visits, video engagement and contact actions. Microsoft Clarity helps us understand how visitors use the website. Google Ads measures campaign-related contact actions. Form field values are excluded from analytics events and form content is marked for masking in Clarity.</p>
    <p>Optional tracking scripts load after you allow the corresponding cookie category. You can choose essential only, allow analytics, or allow all. If you change your choice after a tag has loaded, the updated consent is passed to the provider and our site stops sending events for disabled categories.</p>
    <p>With advertising consent, visitors arriving from eligible Google Ads may see a Google forwarding number that connects to our business phone. Google uses call connection and duration to measure campaign calls. Our WhatsApp contact stays the same.</p>
    <p>When enhanced conversions are enabled and you allow advertising cookies, an accepted inquiry can send Google Ads SHA-256 hashes of your normalized email address and phone number to improve conversion attribution. These identifiers are hashed in your browser, excluded from Google Analytics events and not stored by this website. Your inquiry details still go to the form provider so we can respond.</p>
    {tracker.configured && <button className="rounded-lg bg-brand-primary px-5 py-3 text-white" onClick={() => window.dispatchEvent(new Event('hayagriva:cookie-settings'))}>Change cookie choices</button>}
    <h2 className="text-xl font-semibold">Contact</h2>
    <p>For questions about your inquiry or a request concerning the details you shared, email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or contact our <Link to="/contact" className="underline">Mancherial office</Link>.</p>
  </article>;
}
