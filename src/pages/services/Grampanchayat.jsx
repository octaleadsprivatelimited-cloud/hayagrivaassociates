import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../../components/VideoHero.jsx';
import ProcessTimeline from '../../components/ProcessTimeline.jsx';
import { 
  HomeModernIcon, 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  CheckCircleIcon,
  BookOpenIcon,
  AdjustmentsHorizontalIcon,
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

export default function Grampanchayat() {
  const features = [
    {
      icon: HomeModernIcon,
      title: 'Village Land Surveys',
      desc: 'Comprehensive surveys for village land records and documentation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Revenue Records',
      desc: 'Accurate revenue record surveys and updates',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'Rural Property Documentation',
      desc: 'Complete documentation for rural property transactions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CheckCircleIcon,
      title: 'Grampanchayat Compliance',
      desc: 'Full compliance with Grampanchayat regulations and norms',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const services = [
    'Village land surveys',
    'Revenue record surveys',
    'Rural property documentation',
    'Grampanchayat boundary surveys',
    'Land record verification',
    'Property mutation support'
  ];

  const process = [
    { step: '1', title: 'Record Review', desc: 'Review Grampanchayat records and requirements', icon: BookOpenIcon },
    { step: '2', title: 'Field Survey', desc: 'Conduct on-ground survey and measurement', icon: AdjustmentsHorizontalIcon },
    { step: '3', title: 'Documentation', desc: 'Prepare documents as per Grampanchayat norms', icon: DocumentTextIcon },
    { step: '4', title: 'Submission', desc: 'Submit to Grampanchayat for approval', icon: ClipboardDocumentListIcon },
    { step: '5', title: 'Follow-up', desc: 'Coordinate and follow up for approvals', icon: CheckCircleIcon }
  ];

  return (
    <>
      <Helmet>
        <title>Grampanchayat Services - Hayagriva Associates | Village Survey & Documentation Services</title>
        <meta name="description" content="Professional Grampanchayat survey services including village land surveys, revenue records, and rural property documentation in Telangana." />
      </Helmet>

      {/* Hero Section */}
      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Grampanchayat Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Grampanchayat Services
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Authorized surveyor for Grampanchayat land records and village-level surveys
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
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Grampanchayat Services</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  We are <strong className="text-brand-primary">authorized and licensed</strong> to provide survey services for Grampanchayat land records and village-level surveys. Our expertise includes village land surveys, revenue records, and rural property documentation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team understands Grampanchayat requirements and ensures all surveys comply with rural land regulations and documentation standards.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Grampanchayat Services?</h3>
                <div className="space-y-4">
                  {['Grampanchayat authorization', 'Village-level expertise', 'Revenue record knowledge', 'Rural property experience'].map((item, i) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Grampanchayat Services Offered</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive rural surveying and documentation services
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

      {/* Services List */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Complete Grampanchayat Services</h2>
              <p className="text-xl text-slate-600">Full range of rural surveying and documentation services</p>
              <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 text-lg font-medium pt-2">{service}</span>
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
              Systematic approach ensuring Grampanchayat compliance
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Grampanchayat Services?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get professional Grampanchayat surveying and documentation services. Contact us today.
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

