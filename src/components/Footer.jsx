import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HIDDEN_SERVICE_ROUTES } from '../config/hiddenServices.js';

function Section({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="w-full flex items-center justify-between py-3 lg:py-0" onClick={() => setOpen((v) => !v)}>
        <span className="font-semibold">{title}</span>
        <span className="lg:hidden">{open ? '-' : '+'}</span>
      </button>
      <div className={`text-sm space-y-2 ${open ? 'block' : 'hidden lg:block'}`}>{children}</div>
    </div>
  );
}

const footerServiceLinks = [
  { to: '/services/dgps-land-survey', label: 'DGPS Land Survey' },
  { to: '/services/digital-land-survey', label: 'Digital Land Survey' },
  { to: '/services/dtcp-layouts', label: 'DTCP Layouts' },
  { to: '/services/enjoyment-survey', label: 'Enjoyment Survey' },
  { to: '/services/sub-division', label: 'Sub-division' },
  { to: '/services/survey-number-demarcation', label: 'Survey Number Demarcation' },
  { to: '/services/road-survey', label: 'Road Survey' },
  { to: '/services/registration-plans-location-sketch', label: 'Registration Plans & Location Sketch' },
];

const visibleFooterServices = footerServiceLinks.filter((service) => !HIDDEN_SERVICE_ROUTES.has(service.to));

const footerPermissionsLinks = [
  { to: '/services/municipal-grampanchayat', label: 'Municipal & Grampanchayat Building Permission' },
  { to: '/services/ts-ipass', label: 'TS iPASS Approvals' },
];

const footerDesignLinks = [
  { to: '/services/vastu-plans', label: 'Vastu Plans / Working Plans' },
  { to: '/services/building-elevation', label: 'Building Elevation Designs' },
  { to: '/services/estimation-costing', label: 'Estimation Costing' },
  { to: '/services/property-valuations', label: 'Property Valuations' },
  { to: '/services/home-loans', label: 'Home Loans' },
];

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/footer-background.jpeg)'
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      
      {/* Content */}
      <div className="container-default py-12 grid lg:grid-cols-4 gap-8 relative z-10">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <img
              src="/images/hayagriva-logo.png"
              alt="Hayagriva Associates logo"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
            <span className="sr-only">Hayagriva Associates</span>
          </div>
          <p className="mt-4 text-white/90 text-sm">Professional land surveying, boundary surveys, plot demarcation, and topographic services. Accurate mapping and reliable site surveys for your projects.</p>
        </div>
        <Section title="Contact">
          <p>Address: H.No 18-44/1, Vyshya Bhavan Back Side, Mancherial-504208, Telangana</p>
          <p>Email: hayagrivaassociatesmncl@gmail.com</p>
          <p>Phone: +91 9966139588, +91 91778 87049</p>
          <a href="https://maps.app.goo.gl/f2x3Sahz2g7agmRSA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.813 8.25A5.813 5.813 0 116 8.25c0 3.785 4.524 8.813 5.767 10.078a1.125 1.125 0 001.626 0C13.476 17.063 18 12.035 18 8.25z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.125a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
            </svg>
            View on Google Maps
          </a>
        </Section>
        <Section title="Design & Other Services">
          <ul className="space-y-1">
            {footerDesignLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Permissions">
          <ul className="space-y-1">
            {footerPermissionsLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Survey Services">
          <ul className="space-y-1">
            {visibleFooterServices.map((service) => (
              <li key={service.to}>
                <Link to={service.to} className="hover:underline">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Company">
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </Section>
      </div>
      <div className="border-t border-white/20 relative z-10">
        <div className="container-default py-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-white/80">
          <span>© {new Date().getFullYear()} Hayagriva Associates. All rights reserved.</span>
          <span>Designed and developed by <a href="https://www.octaleads.com/" className="underline hover:text-white">Octaleads Pvt Ltd.</a></span>
        </div>
      </div>
    </footer>
  );
}

