import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../../components/VideoHero.jsx';
import ProcessTimeline from '../../components/ProcessTimeline.jsx';
import { createKeywords, defaultLocation } from '../../seo/config.js';
import { 
  CheckBadgeIcon, 
  SignalIcon, 
  MapIcon, 
  BoltIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';

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

export default function DGPSLandSurvey() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const imagePath = encodeImagePath('/images/DGPS Land Survey.webp');

  const features = [
    {
      icon: CheckBadgeIcon,
      title: 'High Precision',
      desc: 'Sub-centimeter accuracy using DGPS technology for critical control points',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: SignalIcon,
      title: 'Real-Time Correction',
      desc: 'RTK and RTCM corrections for immediate positioning accuracy',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapIcon,
      title: 'Mapping Integration',
      desc: 'Seamless integration with GIS, CAD, and drone mapping workflows',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BoltIcon,
      title: 'Efficient Coverage',
      desc: 'Fast data collection over large areas with reduced field time',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const useCases = [
    'Boundary and cadastral surveys',
    'Control network establishment',
    'Topographic mapping projects',
    'Construction site layout',
    'Infrastructure alignment',
    'Land subdivision planning'
  ];

  const process = [
    { step: '1', title: 'Site Assessment', desc: 'Evaluation of site conditions and requirements', icon: ClipboardDocumentListIcon },
    { step: '2', title: 'Control Setup', desc: 'Establishment of base station and reference points', icon: SignalIcon },
    { step: '3', title: 'Data Collection', desc: 'GPS survey with real-time corrections', icon: ChartBarIcon },
    { step: '4', title: 'Processing & Validation', desc: 'Quality checks and coordinate transformation', icon: DocumentCheckIcon },
    { step: '5', title: 'Report Delivery', desc: 'Comprehensive reports with CAD/GIS deliverables', icon: DocumentTextIcon }
  ];

  return (
    <>
      <Helmet>
        <title>DGPS Land Survey Services in Mancherial | Hayagriva Associates</title>
        <meta
          name="description"
          content="Hayagriva Associates delivers high-precision DGPS land surveys, control networks and mapping support for projects across Mancherial, Telangana with sub-centimeter accuracy."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'DGPS land survey Mancherial',
            'high precision GPS surveying',
            'control network establishment Telangana',
            `DGPS specialists in ${defaultLocation}`
          )}
        />
      </Helmet>

      {/* Hero Section */}
      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                High-Precision Surveying
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                DGPS Land Survey
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                High-precision positioning using DGPS instruments for accurate control and mapping
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
      </VideoHero>

      {/* Overview Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                Service Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">What is DGPS Land Survey?</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Differential GPS (DGPS) Land Survey is an advanced surveying technique that uses GPS satellite signals with real-time corrections to achieve <strong className="text-brand-primary">sub-centimeter accuracy</strong>. This technology is essential for establishing precise control networks, boundary surveys, and large-scale mapping projects.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At Hayagriva Associates, we utilize state-of-the-art DGPS equipment to provide highly accurate positioning data for various applications, from property boundaries to infrastructure development projects.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Advantages</h3>
                <div className="space-y-4">
                  {['Sub-centimeter accuracy', 'Real-time positioning', 'Large area coverage', 'Integration with modern tools'].map((item, i) => (
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
              Features & Benefits
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Why Choose DGPS Surveying?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced technology meets professional expertise for unmatched accuracy
            </p>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
              <motion.div key={i} variants={itemFadeInUp} className="group relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
              );
            })}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                Applications
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Common Applications</h2>
              <p className="text-xl text-slate-600">Where DGPS surveying makes a difference</p>
              <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 text-lg font-medium pt-1">{useCase}</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic approach ensuring accuracy at every step
            </p>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          <ProcessTimeline steps={process} />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-br from-brand-primary via-brand-primary to-slate-800 text-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              Get Started Today
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready for a DGPS Survey?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get accurate, professional DGPS land surveying services. Contact us for a detailed quote and consultation.
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
