import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
];

const services = [
  { to: '/services/dgps-land-survey', label: 'DGPS Land Survey' },
  { to: '/services/digital-land-survey', label: 'Digital Land Survey' },
  { to: '/services/dtcp-layouts', label: 'DTCP Layouts' },
  { to: '/services/enjoyment-survey', label: 'Enjoyment Survey' },
  { to: '/services/sub-division', label: 'Sub-division' },
  { to: '/services/survey-number-demarcation', label: 'Survey Number Demarcation' },
  { to: '/services/registration-plans-location-sketch', label: 'Registration Plans & Location Sketch' },
];

const permissions = [
  { to: '/services/municipal-grampanchayat', label: 'Municipal & Grampanchayat Building Permission' },
  { to: '/services/ts-ipass', label: 'TS iPASS Approvals' },
];

const designAndOtherServices = [
  { to: '/services/vastu-plans', label: 'Vastu Plans / Working Plans' },
  { to: '/services/building-elevation', label: 'Building Elevation Designs' },
  { to: '/services/estimation-costing', label: 'Estimation Costing' },
  { to: '/services/property-valuations', label: 'Property Valuations' },
  { to: '/services/home-loans', label: 'Home Loans' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [permissionsOpen, setPermissionsOpen] = useState(false);
  const [mobilePermissionsOpen, setMobilePermissionsOpen] = useState(false);
  const [designAndOtherServicesOpen, setDesignAndOtherServicesOpen] = useState(false);
  const [mobileDesignAndOtherServicesOpen, setMobileDesignAndOtherServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-brand-darker text-white text-xs">
        <div className="container-default flex items-center justify-center sm:justify-between py-1">
          <div className="hidden sm:flex items-center gap-4">
            <span>Opening Hours: Mon - Sat: 9am–6pm • Sun: Closed</span>
            <a
              href="https://maps.app.goo.gl/f2x3Sahz2g7agmRSA"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline underline-offset-4 decoration-transparent hover:decoration-current transition-colors"
            >
              Mancherial, Telangana
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919966139588" className="flex items-center gap-2 hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+91 9966139588</span>
            </a>
            <a href="tel:+919177887049" className="flex items-center gap-2 hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+91 9177887049</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-default py-1.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/hayagriva-logo.png"
            alt="Hayagriva Associates logo"
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
          <span className="sr-only">Hayagriva Associates</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `hover:text-brand-primary ${isActive ? 'text-brand-primary' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-brand-primary ${isActive ? 'text-brand-primary' : ''}`}>
            About Us
          </NavLink>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink 
              to="/services" 
              className={({ isActive }) => `hover:text-brand-primary flex items-center gap-1 ${isActive ? 'text-brand-primary' : ''}`}
            >
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </NavLink>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border-2 border-slate-200 overflow-hidden"
                >
                  <div className="py-2">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-primary/10 border-b border-slate-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Permissions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPermissionsOpen(true)}
            onMouseLeave={() => setPermissionsOpen(false)}
          >
            <div className="hover:text-brand-primary flex items-center gap-1 cursor-pointer">
              Permissions
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className={`w-4 h-4 transition-transform ${permissionsOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            
            <AnimatePresence>
              {permissionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border-2 border-slate-200 overflow-hidden"
                >
                  <div className="py-2">
                    {permissions.map((permission) => (
                      <Link
                        key={permission.to}
                        to={permission.to}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                        onClick={() => setPermissionsOpen(false)}
                      >
                        {permission.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Design & Other Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDesignAndOtherServicesOpen(true)}
            onMouseLeave={() => setDesignAndOtherServicesOpen(false)}
          >
            <div className="hover:text-brand-primary flex items-center gap-1 cursor-pointer">
              Design & Other Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className={`w-4 h-4 transition-transform ${designAndOtherServicesOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            
            <AnimatePresence>
              {designAndOtherServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border-2 border-slate-200 overflow-hidden"
                >
                  <div className="py-2">
                    {designAndOtherServices.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                        onClick={() => setDesignAndOtherServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {navItems.slice(2).map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `hover:text-brand-primary ${isActive ? 'text-brand-primary' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"/></svg>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50"
          >
            <div className="container-default py-4 flex items-center justify-between border-b">
              <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold flex items-center gap-3">
                <img
                  src="/images/hayagriva-logo.png"
                  alt="Hayagriva Associates logo"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
                <span className="sr-only">Hayagriva Associates</span>
              </Link>
              <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-primary container-default py-6 grid gap-2"
            >
              <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `py-2 text-sm text-white ${isActive ? 'font-semibold' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `py-2 text-sm text-white ${isActive ? 'font-semibold' : ''}`}>
                About Us
              </NavLink>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm text-white"
                >
                  <span>Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-1">
                        <Link
                          to="/services"
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-2 text-sm text-white/90 hover:text-white font-medium"
                        >
                          View All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block py-2 text-sm text-white/80 hover:text-white pl-2"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Mobile Permissions Dropdown */}
              <div>
                <button
                  onClick={() => setMobilePermissionsOpen(!mobilePermissionsOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm text-white"
                >
                  <span>Permissions</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-4 h-4 transition-transform ${mobilePermissionsOpen ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobilePermissionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-1">
                        {permissions.map((permission) => (
                          <Link
                            key={permission.to}
                            to={permission.to}
                            onClick={() => {
                              setOpen(false);
                              setMobilePermissionsOpen(false);
                            }}
                            className="block py-2 text-sm text-white/80 hover:text-white pl-2"
                          >
                            {permission.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Mobile Design & Other Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDesignAndOtherServicesOpen(!mobileDesignAndOtherServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm text-white"
                >
                  <span>Design & Other Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-4 h-4 transition-transform ${mobileDesignAndOtherServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileDesignAndOtherServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-1">
                        {designAndOtherServices.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            onClick={() => {
                              setOpen(false);
                              setMobileDesignAndOtherServicesOpen(false);
                            }}
                            className="block py-2 text-sm text-white/80 hover:text-white pl-2"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {navItems.slice(2).map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `py-2 text-sm text-white ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-4 text-white/90 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact Details</h3>
                <div className="space-y-2 text-sm">
                  <a href="tel:+919966139588" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +91 9966139588
                  </a>
                  <a href="tel:+919177887049" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +91 9177887049
                  </a>
                  <a href="mailto:hayagrivaassociatesmncl@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hayagrivaassociatesmncl@gmail.com
                  </a>
                  <a
                    href="https://maps.app.goo.gl/f2x3Sahz2g7agmRSA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.813 8.25A5.813 5.813 0 116 8.25c0 3.785 4.524 8.813 5.767 10.078a1.125 1.125 0 001.626 0C13.476 17.063 18 12.035 18 8.25z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.125a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                    </svg>
                    H.No 18-44/1, Vyshya Bhavan Back Side, Mancherial-504208, Telangana
                  </a>
                </div>
                <div className="pt-2">
                  <a href="tel:+919177887049" className="inline-flex w-full items-center justify-center gap-2 px-3 py-2 bg-white text-brand-primary font-semibold rounded-lg shadow-sm hover:bg-slate-100 transition-colors">
                    Call Now
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
