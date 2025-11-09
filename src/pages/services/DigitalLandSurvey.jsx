import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../../components/VideoHero.jsx';
import { createKeywords, defaultLocation } from '../../seo/config.js';
import { 
  ComputerDesktopIcon, 
  Squares2X2Icon, 
  GlobeAltIcon, 
  Cog6ToothIcon
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

export default function DigitalLandSurvey() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const imagePath = encodeImagePath('/images/Digital Land Survey.avif');

  const features = [
    {
      icon: ComputerDesktopIcon,
      title: 'Digital Workflow',
      desc: 'End-to-end digital data capture, processing, and delivery',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Squares2X2Icon,
      title: 'CAD Deliverables',
      desc: 'AutoCAD drawings, DXF files, and detailed technical plans',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: GlobeAltIcon,
      title: 'GIS Integration',
      desc: 'Shapefiles, geodatabases, and GIS-ready data formats',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cog6ToothIcon,
      title: 'Quality Assurance',
      desc: 'Automated checks, version control, and revision management',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const deliverables = [
    'CAD drawings (DWG, DXF)',
    'GIS shapefiles and geodatabases',
    'Survey reports with coordinates',
    'Digital elevation models (DEM)',
    '3D point clouds',
    'As-built documentation'
  ];

  const advantages = [
    'Faster data processing and turnaround',
    'Higher accuracy with digital instruments',
    'Easy integration with design software',
    'Reduced manual errors',
    'Better data management and archiving',
    'Compatible with modern construction workflows'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Land Survey Services | Hayagriva Associates Mancherial</title>
        <meta
          name="description"
          content="Modern digital land surveys with CAD drawings, GIS data and BIM-ready deliverables from Hayagriva Associates for projects across Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'digital land survey Mancherial',
            'CAD survey deliverables',
            'GIS mapping services Telangana',
            `digital surveying workflows in ${defaultLocation}`
          )}
        />
      </Helmet>

      {/* Hero Section */}
      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Modern Surveying
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Digital Land Survey
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Modern digital workflows with CAD deliverables and GIS-ready data
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Get a Quote
                </Link>
                <a href="tel:+919177887049" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-all">
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
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">What is Digital Land Survey?</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Digital Land Survey represents the <strong className="text-brand-primary">modern approach</strong> to land surveying, utilizing electronic instruments and software to collect, process, and deliver survey data. This method replaces traditional paper-based workflows with efficient digital processes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our digital surveying services use total stations, GNSS receivers, and advanced software to provide accurate, comprehensive survey data in formats that integrate seamlessly with CAD, GIS, and BIM workflows.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Go Digital?</h3>
                <div className="space-y-4">
                  {['Higher accuracy', 'Faster processing', 'Better integration', 'Modern workflows'].map((item, i) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions for modern surveying needs
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

      {/* Deliverables & Advantages */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Deliverables */}
              <div>
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                    Digital Deliverables
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">What You Get</h2>
                  <div className="w-20 h-1 bg-brand-primary mb-6"></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg border-2 border-slate-200 hover:border-brand-primary/50 transition-all">
                      <span className="text-brand-primary font-bold text-xl mt-0.5">✓</span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div>
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                    Advantages
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose Digital?</h2>
                  <div className="w-20 h-1 bg-brand-primary mb-6"></div>
                </div>
                <div className="space-y-4">
                  {advantages.map((advantage, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-brand-primary/5 to-white rounded-xl border-2 border-brand-primary/20 hover:border-brand-primary/50 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 text-lg pt-1">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Digital Survey Services?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get modern, accurate digital land surveys with CAD and GIS deliverables. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-10 py-4 bg-white text-brand-primary rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl text-lg">
                Request a Quote
              </Link>
              <a href="tel:+919177887049" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-all text-lg">
                Call +91 9177887049
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
