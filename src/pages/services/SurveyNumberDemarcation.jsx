import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

function AnimatedContainer({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  );
}

export default function SurveyNumberDemarcation() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const imagePath = encodeImagePath('/images/Survey Number Demarcation.jpg');

  const features = [
    {
      icon: '📋',
      title: 'Record Verification',
      desc: 'Correlation with revenue records and survey maps',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📍',
      title: 'Ground Marking',
      desc: 'Physical demarcation with permanent markers',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📐',
      title: 'Precise Measurement',
      desc: 'Accurate boundary measurements as per records',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📄',
      title: 'Documentation',
      desc: 'Demarcation sketches and survey reports',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const importance = [
    'Legal boundary identification',
    'Property dispute prevention',
    'Revenue record accuracy',
    'Land registration support',
    'Development planning',
    'Legal compliance'
  ];

  const process = [
    { step: '1', title: 'Record Study', desc: 'Review revenue maps and records', icon: '📚' },
    { step: '2', title: 'Field Survey', desc: 'On-ground measurement and identification', icon: '📏' },
    { step: '3', title: 'Demarcation', desc: 'Marking boundaries with pegs', icon: '📍' },
    { step: '4', title: 'Verification', desc: 'Cross-check with records', icon: '🔍' },
    { step: '5', title: 'Report', desc: 'Demarcation sketch and documentation', icon: '📊' }
  ];

  return (
    <>
      <Helmet>
        <title>Survey Number Demarcation - Hayagriva Associates | Revenue Survey Demarcation</title>
        <meta name="description" content="Professional survey number demarcation services. On-ground marking of survey numbers as per revenue records in Telangana." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img src={imagePath} alt="Survey Number Demarcation" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Revenue Survey
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Survey Number Demarcation
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                On-ground demarcation of survey numbers as per revenue records
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Get a Quote
                </Link>
                <a href="tel:+919966139588" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-all">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                Service Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">What is Survey Number Demarcation?</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Survey Number Demarcation is the process of identifying and marking the boundaries of survey numbers on the ground as per revenue records. Survey numbers are <strong className="text-brand-primary">unique identifiers</strong> assigned to land parcels in government records, and their accurate demarcation is essential for legal clarity and property transactions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our demarcation services ensure that survey number boundaries are accurately identified and physically marked, providing clear visual reference for property owners, developers, and legal authorities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why It Matters</h3>
                <div className="space-y-4">
                  {['Legal clarity', 'Dispute prevention', 'Record accuracy', 'Property identification'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-default">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Comprehensive Demarcation Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional survey number identification and marking
            </p>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemFadeInUp} className="group relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Importance Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                Importance
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Why Survey Number Demarcation is Important</h2>
              <p className="text-xl text-slate-600">Key benefits of accurate demarcation</p>
              <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {importance.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 text-lg font-medium pt-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-default">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Demarcation Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Systematic approach ensuring accurate survey number identification
            </p>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <motion.div key={p.step} variants={itemFadeInUp} className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent" style={{ width: 'calc(100% - 3rem)', transform: 'translateX(1.5rem)' }}></div>
                  )}
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-xl transition-all text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                      {p.step}
                    </div>
                    <div className="text-4xl mb-4">{p.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedContainer>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-br from-brand-primary via-brand-primary to-slate-800 text-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              Get Started Today
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Survey Number Demarcation?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get accurate survey number demarcation services with professional documentation and marking.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-10 py-4 bg-white text-brand-primary rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl text-lg">
                Request a Quote
              </Link>
              <a href="tel:+919966139588" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-all text-lg">
                Call +91 9966139588
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
