import Reviews from '../../components/Reviews.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRightIcon, CheckIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WhatsAppIcon from '../../components/WhatsAppIcon.jsx';
import ProcessSteps from '../../components/ProcessSteps.jsx';
import ContactForm from '../../components/forms/ContactForm.jsx';
import TrackedVideo from '../../components/TrackedVideo.jsx';
import { businessSchema, site, whatsappUrl } from '../../config/site.js';
import { reviewSnapshot } from '../../config/reviews.js';
import { tracker } from '../../analytics/index.js';

const services = [
  { number: '01', title: 'Know exactly where you stand.', category: 'LAND SURVEYS & MAPPING', image: '/images/DGPS Land Survey.webp', alt: 'DGPS equipment used for land surveying', description: 'Understand your site before buying, building or developing. Discuss the survey method and documentation your project needs.', items: ['DGPS land surveys', 'Boundary & plot demarcation', 'Survey number demarcation', 'Enjoyment & road surveys'], link: '/services/dgps-land-survey', inquiry: 'a land survey' },
  { number: '02', title: 'Turn your land into a plan.', category: 'LAYOUTS, PLANS & DESIGN', image: '/images/hero2.jpg', alt: 'A property plan with marked land parcels', description: 'Move from measurements to drawings that make your next step clearer, with planning support suited to your site and purpose.', items: ['DTCP layout planning', 'Vastu & working plans', 'Building elevation designs', 'Registration plans & location sketches'], link: '/services/vastu-plans', inquiry: 'building plans and layout design' },
  { number: '03', title: 'Make the next step easier.', category: 'APPROVALS & PROPERTY SUPPORT', image: '/images/Building Elevation Designs.jpg', alt: 'Building elevation design example', description: 'Get help preparing project documents and understanding the requirements for your approval or property-related work.', items: ['Municipal & Grampanchayat permissions', 'TS iPASS documentation support', 'Estimation & costing', 'Property valuation & home loan support'], link: '/services/municipal-grampanchayat', inquiry: 'permissions and property documentation' },
];
const faqs = [
  { question: 'What details should I share to get a quote?', answer: 'Share your site location, approximate area, the service you need and any available survey sketches or property documents. Our team will review the scope and explain the next steps.' },
  { question: 'Do you serve sites outside Mancherial?', answer: 'Our office is in Mancherial, Telangana. Share the location of your site on WhatsApp so we can confirm availability and travel requirements for your project.' },
  { question: 'How long will my survey take?', answer: 'Timing depends on the site area, terrain, access and available records. We confirm the schedule after reviewing your requirements.' },
  { question: 'Can you help with building plans and approvals too?', answer: 'Yes. Along with land surveys, we offer layout planning, working plans, elevation design and documentation support for building permissions. Approval decisions are made by the relevant authorities.' },
];
function WhatsAppLink({ children = 'Chat on WhatsApp', placement, service = 'land surveying', className = 'survey-button survey-button-green' }) {
  return <a href={whatsappUrl(service)} target="_blank" rel="noopener noreferrer" className={`${className} whatsapp-action`} data-tracking-location={placement} data-service={service}><WhatsAppIcon />{children}<ArrowUpRightIcon aria-hidden="true" /></a>;
}
export default function LandSurveyingLanding() {
  return (
    <div className="survey-page">
      <Helmet>
        <title>Land Survey in Mancherial | Get a Quote | Hayagriva Associates</title>
        <meta name="description" content="Need a land survey in Mancherial? Explore our services, watch survey videos and request a quote. Chat with Hayagriva Associates on WhatsApp." />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>
      <a className="survey-skip" href="#survey-main">Skip to content</a>
      <header className="survey-header"><div className="survey-container survey-nav">
        <Link to="/" aria-label="Hayagriva Associates home"><img src="/images/hayagriva-logo.png" width="1925" height="765" alt="Hayagriva Associates" /></Link>
        <nav aria-label="Landing page navigation"><a href="#services">Services</a><a href="#videos">Videos</a><a href="#reviews">Reviews</a></nav>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="survey-nav-contact whatsapp-action" data-tracking-location="landing_header"><WhatsAppIcon />Let’s talk <ArrowUpRightIcon aria-hidden="true" /></a>
      </div></header>
      <div id="survey-main">
        <section className="survey-hero"><div className="survey-container survey-hero-grid">
          <div className="survey-hero-copy"><p className="survey-eyebrow"><span /> LAND SURVEYING · MANCHERIAL, TELANGANA</p><h1>Know your land.<br /><span>Plan with confidence.</span></h1><p className="survey-hero-description">From your first boundary survey to your next building plan, get clear measurements, useful documentation and a team you can talk to.</p><div className="survey-hero-actions"><WhatsAppLink placement="landing_hero" /></div><div className="survey-hero-notes"><span><CheckIcon aria-hidden="true" /> Survey & planning support</span><span><CheckIcon aria-hidden="true" /> Local Mancherial office</span></div></div>
          <div className="survey-hero-visual"><img src="/images/Hero1.avif" width="600" height="369" fetchpriority="high" alt="Surveying instruments set up on a site" /><div className="survey-photo-label"><span>Every project starts<br />with a clear picture.</span><a href="#videos" aria-label="Watch surveying videos"><ArrowUpRightIcon aria-hidden="true" /></a></div><div className="survey-location"><MapPinIcon aria-hidden="true" /> Mancherial, Telangana</div></div>
        </div></section>
        <div className="survey-service-strip"><div className="survey-container"><span>Land surveys</span><span>Plot demarcation</span><span>Building plans</span><span>Permissions & approvals</span></div></div>
        <section id="services" className="survey-section survey-container">
          <div className="survey-section-heading"><div><p className="survey-eyebrow">WHAT WE CAN HELP WITH</p><h2>One place for your<br />land & property needs.</h2></div><p>Start with what you need today. We’ll help you understand the scope, the documents and the way forward.</p></div>
          <div className="survey-services">{services.map((service) => <article className="survey-service" key={service.number}>
            <div className="survey-service-image"><img src={service.image} alt={service.alt} loading="lazy" width="600" height="400" /><span>{service.number}</span></div>
            <div className="survey-service-copy"><p className="survey-eyebrow">{service.category}</p><h3>{service.title}</h3><p>{service.description}</p><ul>{service.items.map((item) => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}</ul><div className="survey-service-actions"><WhatsAppLink placement={`service_${service.number}`} service={service.inquiry} className="survey-text-link">Discuss this service</WhatsAppLink><Link to={service.link}>Explore details <ArrowUpRightIcon aria-hidden="true" /></Link></div></div>
          </article>)}</div><Link className="survey-all-services" to="/services">Explore all services <ArrowUpRightIcon aria-hidden="true" /></Link>
        </section>
        <section id="videos" className="survey-videos survey-section"><div className="survey-container"><div className="survey-section-heading"><div><p className="survey-eyebrow">A CLOSER LOOK</p><h2>See surveying in action.</h2></div><p>A look at surveying and site work. Press play to explore the videos from our website.</p></div><div className="survey-video-grid">
          <article><TrackedVideo src="/videos/hero-video.mp4" poster="/images/Hero1.avif" title="Surveying overview" /><div><span>01 / FIELD VIEW</span><h3>Surveying overview</h3></div></article>
          <article><TrackedVideo src="/videos/hero-video-secondary.mp4" poster="/images/hero2.jpg" title="A closer look at site work" /><div><span>02 / A CLOSER LOOK</span><h3>A closer look at site work</h3></div></article>
        </div></div></section>
        <section id="process" className="survey-process survey-section survey-container"><div className="survey-section-heading"><div><p className="survey-eyebrow">FROM QUESTION TO CLARITY</p><h2>Let’s make a start.</h2></div><WhatsAppLink placement="landing_process" /></div><ProcessSteps /></section>
        <section id="reviews" className="survey-reviews survey-section"><div className="survey-container"><div className="survey-section-heading"><div><p className="survey-eyebrow">CLIENT FEEDBACK</p><h2>Good work. Clear communication.</h2></div><a href={site.maps} target="_blank" rel="noopener noreferrer" className="survey-text-link">{reviewSnapshot.rating}/5 · {reviewSnapshot.count} reviews on Google Maps <ArrowUpRightIcon aria-hidden="true" /></a></div><p className="survey-review-date">Google Maps rating checked {reviewSnapshot.checked}. Read the full reviews on Google Maps.</p><Reviews /></div></section>
        <section id="quote" className="survey-quote survey-section survey-container"><div className="survey-quote-copy"><p className="survey-eyebrow">YOUR PROJECT STARTS HERE</p><h2>A small conversation.<br /><span>A clearer next step.</span></h2><p>Tell us what you’re planning. Our Mancherial team will get in touch to discuss your requirement and prepare a quote.</p><WhatsAppLink placement="landing_quote" /><div className="survey-contact-info"><a href={`tel:${site.phone}`} data-tracking-location="landing_quote"><PhoneIcon aria-hidden="true" />{site.phoneDisplay}</a><a href={site.maps} target="_blank" rel="noopener noreferrer"><MapPinIcon aria-hidden="true" />{site.address}</a></div></div><div className="survey-form-panel"><h3>Request a project quote</h3><p>Share a few details so we can help you.</p><ContactForm source="land-surveying" submitLabel="Send my inquiry" /><p className="survey-form-note">By submitting, you agree that we may contact you about this inquiry. <Link to="/privacy">Privacy details</Link></p></div></section>
        <section className="survey-faq survey-section survey-container"><p className="survey-eyebrow">BEFORE WE BEGIN</p><h2>A few useful answers.</h2><div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      </div>
      <footer className="survey-footer"><div className="survey-container"><div><strong>Hayagriva Associates</strong><p>Land surveys. Thoughtful plans. Clear next steps.</p></div><div className="survey-footer-links"><Link to="/">Visit our website</Link><Link to="/privacy">Privacy</Link>{tracker.configured && <button onClick={() => window.dispatchEvent(new Event('hayagriva:cookie-settings'))}>Cookie choices</button>}<a href={`mailto:${site.email}`}>{site.email}</a></div><p>© {new Date().getFullYear()} Hayagriva Associates</p></div></footer>
      <nav className="survey-mobile-cta" aria-label="Quick contact"><a className="contact-call" href={`tel:${site.phone}`} data-tracking-location="landing_mobile"><PhoneIcon aria-hidden="true" />Call us</a><WhatsAppLink placement="landing_mobile">WhatsApp</WhatsAppLink></nav>
    </div>
  );
}
