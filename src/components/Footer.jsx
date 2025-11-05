import { useState } from 'react';

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
          <p>Phone: +91 9966139588</p>
        </Section>
        <Section title="Services">
          <ul className="space-y-1">
            <li><a href="/services/land-surveying" className="hover:underline">Land Surveying</a></li>
            <li><a href="/services/boundary-surveys" className="hover:underline">Boundary Surveys</a></li>
            <li><a href="/services/plot-demarcation" className="hover:underline">Plot Demarcation</a></li>
            <li><a href="/services/topographic-surveys" className="hover:underline">Topographic Surveys</a></li>
            <li><a href="/services/construction-site-surveys" className="hover:underline">Construction Site Surveys</a></li>
          </ul>
        </Section>
        <Section title="Company">
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
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

