import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../../components/VideoHero.jsx';
import ProcessTimeline from '../../components/ProcessTimeline.jsx';
import { 
  ClipboardDocumentListIcon, 
  MapPinIcon, 
  CheckCircleIcon, 
  TagIcon,
  DocumentTextIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  MapIcon,
  DocumentCheckIcon
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

export default function RegistrationPlansLocationSketch() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const imagePath = encodeImagePath('/images/Registration Plans & Location Sketch.avif');

  const features = [
    {
      icon: ClipboardDocumentListIcon,
      title: 'Registration Plans',
      desc: 'Accurate plans showing property boundaries and dimensions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPinIcon,
      title: 'Location Sketch',
      desc: 'Clear location references and access routes',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircleIcon,
      title: 'Legal Compliance',
      desc: 'Plans prepared as per registration requirements',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TagIcon,
      title: 'Stamping Support',
      desc: 'Assistance with stamping and sign-off procedures',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const uses = [
    'Property registration',
    'Land mutation',
    'Property transfer',
    'Legal documentation',
    'Court proceedings',
    'Bank loan processing'
  ];

  const documents = [
    'As-per-records plans',
    'As-built plans',
    'Location sketches with references',
    'Boundary dimension details',
    'Adjacent property information',
    'Access and approach routes'
  ];

  const process = [
    { step: '1', title: 'Document Review', desc: 'Analysis of property documents', icon: DocumentTextIcon },
    { step: '2', title: 'Site Survey', desc: 'On-ground measurement and verification', icon: AdjustmentsHorizontalIcon },
    { step: '3', title: 'Plan Preparation', desc: 'Drawing registration plans', icon: Squares2X2Icon },
    { step: '4', title: 'Location Sketch', desc: 'Location reference preparation', icon: MapIcon },
    { step: '5', title: 'Finalization', desc: 'Stamping and sign-off support', icon: DocumentCheckIcon }
  ];

  return (
    <>
      <Helmet>
        <title>Registration Plans & Location Sketch - Hayagriva Associates | Property Registration Services</title>
        <meta name="description" content="Professional registration plans and location sketches for property registration, mutation, and legal processes in Telangana." />
      </Helmet>

      {/* Hero Section */}
      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Legal Documentation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Registration Plans & Location Sketch
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Preparation of registration plans and location sketches for legal processes
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
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">What are Registration Plans & Location Sketches?</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Registration Plans and Location Sketches are essential documents required for property registration, mutation, and various legal processes. These documents provide a <strong className="text-brand-primary">clear visual representation</strong> of the property, its boundaries, dimensions, and location relative to surrounding landmarks.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our services ensure that these critical documents are prepared accurately, complying with all legal requirements for property transactions and registrations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why You Need Them</h3>
                <div className="space-y-4">
                  {['Property registration', 'Legal compliance', 'Transaction support', 'Documentation clarity'].map((item, i) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">What We Provide</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive documentation services for property registration
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

      {/* Use Cases & Documents */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Use Cases */}
              <div>
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                    When Required
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">When Are These Documents Required?</h2>
                  <div className="w-20 h-1 bg-brand-primary mb-6"></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {uses.map((use, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg border-2 border-slate-200 hover:border-brand-primary/50 transition-all">
                      <span className="text-brand-primary font-bold text-xl mt-0.5">✓</span>
                      <span className="text-slate-700 font-medium">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div>
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                    Documents Provided
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">What We Provide</h2>
                  <div className="w-20 h-1 bg-brand-primary mb-6"></div>
                </div>
                <div className="space-y-4">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-brand-primary/5 to-white rounded-xl border-2 border-brand-primary/20 hover:border-brand-primary/50 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 text-lg pt-1">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Step-by-step approach to accurate documentation
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Registration Plans?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get professional registration plans and location sketches for your property transactions.
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
