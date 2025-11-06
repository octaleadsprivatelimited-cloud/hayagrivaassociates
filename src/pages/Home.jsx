import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPinIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Hero from '../components/Hero.jsx';
// Removed: ClientsStrip, TestimonialsWide, CTASection per request

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Reusable animated section component
function AnimatedSection({ children, className = '', variant = fadeInUp }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated container for staggered children
function AnimatedContainer({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const encodeImagePath = (path) => {
    // Split path and encode only the filename part
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    const encoded = dir + '/' + encodeURIComponent(filename);
    // Debug for Registration Plans image
    if (filename.includes('Registration Plans')) {
      console.log('Encoding image:', filename, '->', encoded);
    }
    return encoded;
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hayagriva Associates',
    url: 'https://example.com',
    telephone: '+91 00000 00000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your office address',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '000000',
      addressCountry: 'IN'
    },
    areaServed: 'India',
    sameAs: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://www.instagram.com/'
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Professional Land Survey Services in Mancherial | Hayagriva Associates</title>
        <meta name="description" content="Accurate boundary surveys, DGPS & digital land surveys, DTCP layouts, plot demarcation, construction surveys, and subdivision in Mancherial, Telangana." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <Hero />
      {/* Services Overview */}
      <AnimatedSection className="bg-slate-50 py-16 sm:py-20">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Survey Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We provide comprehensive land surveying services with professional reports and legal compliance.</p>
          </div>
          
          {/* Three Featured Service Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { 
                title: 'DGPS Land Survey', 
                icon: MapPinIcon, 
                description: 'High-precision positioning using DGPS instruments for accurate control and mapping.',
                to: '/services/dgps-land-survey'
              },
              { 
                title: 'Digital Land Survey', 
                icon: ChartBarIcon, 
                description: 'Modern digital workflows with CAD deliverables and GIS-ready data.',
                to: '/services/digital-land-survey'
              },
              { 
                title: 'DTCP Layouts', 
                icon: ClipboardDocumentCheckIcon, 
                description: 'Layouts prepared as per DTCP norms and approvals.',
                to: '/services/dtcp-layouts'
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemFadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={service.to}
                    className="block bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 hover:gap-3 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Services
              <span className="transition-transform">→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Trusted Partner / Company Intro */}
      <AnimatedSection className="container-default py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border-2 border-brand-primary/20 bg-white p-6 sm:p-10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-brand-primary/10 items-center justify-center text-brand-primary text-2xl">🧭</div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-brand-primary font-semibold">Company Profile</div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Your Trusted Partner in Digital Land Surveying</h2>
                <p className="mt-2 text-lg text-brand-primary/90 font-semibold">Save your time! Save your money!</p>
                <p className="mt-4 text-slate-700 leading-relaxed">Hayagriva Associates is comprised of seasoned experts with extensive experience in land surveying. We recognize the importance of time and accuracy, assess client needs thoroughly, and deliver precise reports and guidance efficiently and affordably.</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-primary">✔</span><span>Accurate, reliable reporting and drawings</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary">✔</span><span>Fast turnaround with clear communication</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary">✔</span><span>Modern DGPS and total station workflows</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary">✔</span><span>Legal-ready documentation as required</span></li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="rounded-lg px-5 py-2.5 bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-colors">Let's Talk</Link>
                  <Link to="/about" className="rounded-lg px-5 py-2.5 border-2 border-brand-primary/30 text-brand-primary font-semibold hover:border-brand-primary/60 transition-colors">Know About Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Removed: Get Updates, Clients strip, Why Choose Us features, Wide Testimonials, and CTA */}

      {/* Completed Projects */}
      <AnimatedSection className="bg-slate-50 py-16 sm:py-20">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Completed Projects</h2>
            <p className="mt-4 text-lg text-slate-600">Our track record speaks for itself</p>
          </div>
          <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'All Projects', value: '5000+' },
              { label: 'Boundary Survey', value: '25' },
              { label: 'Topographic', value: '18' },
              { label: 'Subdivision', value: '12' },
              { label: 'Construction', value: '15' },
              { label: 'Plot Demarcation', value: '20' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemFadeInUp} className="border-2 border-slate-200 rounded-xl p-6 bg-white hover:border-brand-primary/50 hover:shadow-lg transition-all text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Survey Process */}
      <AnimatedSection className="bg-white py-16 sm:py-20">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Survey Process</h2>
            <p className="mt-4 text-lg text-slate-600">Our systematic approach ensures accurate results</p>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Site Assessment', desc: 'Initial evaluation and planning' },
              { step: '2', title: 'Field Survey', desc: 'On-site data collection' },
              { step: '3', title: 'Data Analysis', desc: 'Processing and verification' },
              { step: '4', title: 'Report Delivery', desc: 'Final documentation' },
            ].map((p) => (
              <motion.div key={p.step} variants={itemFadeInUp} className="group border-2 border-slate-200 rounded-2xl p-6 bg-white hover:border-brand-primary/50 hover:shadow-xl transition-all">
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white flex items-center justify-center text-lg font-bold mb-4">{p.step}</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="bg-slate-50 py-16 sm:py-20">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Client Testimonials</h2>
            <p className="mt-4 text-lg text-slate-600">What our clients say about us</p>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh Kumar', place: 'Mancherial', text: 'Accurate and professional boundary survey. Delivered on time!' },
              { name: 'Priya Sharma', place: 'Mancherial', text: 'Detailed topographic survey with comprehensive documentation.' },
              { name: 'Arun R', place: 'Telangana', text: 'Quick turnaround and reliable reports for our project.' },
            ].map((t, i) => (
              <motion.div key={i} variants={itemFadeInUp} className="border-2 border-slate-200 rounded-2xl p-6 bg-white hover:border-brand-primary/50 hover:shadow-xl transition-all">
                <div className="text-4xl text-brand-primary/20 mb-4">"</div>
                <p className="text-slate-700 leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.place}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Latest Updates */}
      <AnimatedSection className="bg-white py-16 sm:py-20">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Latest Updates</h2>
            <p className="mt-4 text-lg text-slate-600">Stay informed with industry insights</p>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, date: '15 Jan', title: 'Importance of Boundary Surveys for Property', img: '/images/Boundary Survey.webp' },
              { id: 2, date: '10 Jan', title: 'Latest Technology in Land Surveying', img: '/images/Digital Land Survey.avif' },
              { id: 3, date: '5 Jan', title: 'When Do You Need a Topographic Survey?', img: '/images/Topographic Survey.webp' },
            ].map((b, i) => (
              <motion.article key={i} variants={itemFadeInUp} className="group border-2 border-slate-200 rounded-2xl bg-white hover:border-brand-primary/50 hover:shadow-xl transition-all overflow-hidden">
                <Link to={`/blog/${b.id}`}>
                  <img src={encodeImagePath(b.img)} alt={b.title} loading="lazy" className="h-40 w-full object-cover" />
                  <div className="p-6">
                    <div className="text-xs font-semibold text-brand-primary uppercase tracking-wide">{b.date}</div>
                    <h3 className="mt-3 font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors">{b.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-brand-primary text-sm font-medium group-hover:gap-3 transition-all">Read More <span>→</span></span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-slate-50 py-16 sm:py-20" variant={fadeIn}>
        <div className="container-default">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-primary/90 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">For Urgent Survey Needs</h3>
                <p className="text-white/90 text-lg">Call us: +91 9966139588, +91 9177887049 or request a quote now.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a href="tel:+919177887049" className="bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 rounded-lg text-white font-semibold transition-colors border border-white/20">Call Now</a>
                <Link to="/contact" className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

