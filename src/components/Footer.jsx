import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function Footer() {
  return (
    <footer className="relative text-white mt-16 overflow-hidden">
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
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="w-8 h-8 rounded bg-white inline-block" />
            Hayagriva Associates
          </div>
          <p className="mt-4 text-white/90 text-sm">Professional land surveying, boundary surveys, plot demarcation, and topographic services. Accurate mapping and reliable site surveys for your projects.</p>
        </div>
        <Section title="Contact">
          <p>Address: H.No 18-44/1, Vyshya Bhavan Back Side, Mancherial-504208, Telangana</p>
          <p>Email: hayagrivaassociatesmncl@gmail.com</p>
          <p>Phone: +91 9966139588, +91 9177887049</p>
        </Section>
        <Section title="Services">
          <ul className="space-y-1">
            <li><Link to="/services/dgps-land-survey" className="hover:underline">DGPS Land Survey</Link></li>
            <li><Link to="/services/digital-land-survey" className="hover:underline">Digital Land Survey</Link></li>
            <li><Link to="/services/dtcp-layouts" className="hover:underline">DTCP Layouts</Link></li>
            <li><Link to="/services/enjoyment-survey" className="hover:underline">Enjoyment Survey</Link></li>
            <li><Link to="/services/sub-division" className="hover:underline">Sub-division</Link></li>
            <li><Link to="/services/survey-number-demarcation" className="hover:underline">Survey Number Demarcation</Link></li>
            <li><Link to="/services/registration-plans-location-sketch" className="hover:underline">Registration Plans & Location Sketch</Link></li>
          </ul>
        </Section>
        <Section title="Company">
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
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

