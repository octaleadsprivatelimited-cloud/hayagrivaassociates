import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-brand-darker text-white text-xs">
        <div className="container-default flex items-center justify-between py-1">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Opening Hours: Mon - Sat: 9am–6pm • Sun: Closed</span>
            <span className="hidden md:inline">Mancherial, Telangana</span>
          </div>
          <a href="tel:+919966139588" className="flex items-center gap-2 hover:opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>+91 9966139588</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-default py-1.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="w-8 h-8 rounded bg-brand-primary inline-block" />
          Hayagriva Associates
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
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
              <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold">Hayagriva Associates</Link>
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
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `py-2 text-sm text-white ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </NavLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

