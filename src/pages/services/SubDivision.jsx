import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../../components/VideoHero.jsx';
import ProcessTimeline from '../../components/ProcessTimeline.jsx';
import { 
  AdjustmentsHorizontalIcon, 
  MapIcon, 
  MapPinIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  Squares2X2Icon,
  CheckCircleIcon
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

export default function SubDivision() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const imagePath = encodeImagePath('/images/Sub-division.webp');

  const features = [
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Precise Measurements',
      desc: 'Accurate plot sizing and boundary measurements',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapIcon,
      title: 'Layout Planning',
      desc: 'Strategic plot layout with optimal utilization',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPinIcon,
      title: 'On-Ground Marking',
      desc: 'Physical demarcation with pegs and markers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DocumentTextIcon,
      title: 'Legal Documentation',
      desc: 'Survey plans and documents for registration',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const services = [
    'Plot subdivision planning',
    'Boundary measurement and marking',
    'Layout drawings preparation',
    'Individual plot surveys',
    'Road and access planning',
    'Submission-ready documentation'
  ];

  const process = [
    { step: '1', title: 'Site Survey', desc: 'Comprehensive land survey', icon: ChartBarIcon },
    { step: '2', title: 'Layout Design', desc: 'Plot subdivision planning', icon: Squares2X2Icon },
    { step: '3', title: 'Demarcation', desc: 'On-ground marking', icon: MapPinIcon },
    { step: '4', title: 'Documentation', desc: 'Survey plans and reports', icon: DocumentTextIcon },
    { step: '5', title: 'Registration Support', desc: 'Legal documentation assistance', icon: CheckCircleIcon }
  ];

  return (
    <>
      <Helmet>
        <title>Sub-division Survey - Hayagriva Associates | Land Subdivision Services</title>
        <meta name="description" content="Professional land subdivision surveys with plot demarcation, layout planning, and legal documentation. Accurate sub-division services in Telangana." />
      </Helmet>

      {/* Hero Section */}
      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Land Development
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Sub-division Survey
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Land subdivision into plots with accurate measurements and markers
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
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">What is Sub-division Survey?</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Sub-division Survey involves dividing a large piece of land into smaller, legally defined plots. This process requires <strong className="text-brand-primary">precise measurements, strategic planning, and proper documentation</strong> to ensure each plot is accurately sized and properly marked.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our subdivision services include comprehensive surveying, layout planning, on-ground demarcation, and preparation of all necessary documents for legal registration and development.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Benefits of Professional Subdivision</h3>
                <div className="space-y-4">
                  {['Legal compliance', 'Optimal land utilization', 'Clear boundaries', 'Development ready'].map((item, i) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Comprehensive Sub-division Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete solutions for land subdivision projects
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
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Sub-division Services</h2>
              <p className="text-xl text-slate-600">Complete range of subdivision solutions</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Sub-division Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Step-by-step approach to successful land subdivision
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Subdivide Your Land?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get professional subdivision survey services with accurate measurements and legal documentation.
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
