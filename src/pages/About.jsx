import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  SparklesIcon,
  MapPinIcon,
  BoltIcon
} from '@heroicons/react/24/solid';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../components/VideoHero.jsx';

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

export default function About() {

  const permissions = [
    {
      title: 'Municipal',
      icon: BuildingOffice2Icon,
      description: 'Licensed to provide land surveying services for municipal projects and approvals.',
      features: ['Municipal Layout Approvals', 'Building Plan Verification', 'Property Tax Assessment']
    },
    {
      title: 'Grampanchayat',
      icon: HomeModernIcon,
      description: 'Authorized surveyor for Grampanchayat land records and village-level surveys.',
      features: ['Village Land Surveys', 'Revenue Records', 'Rural Property Documentation']
    },
    {
      title: 'TS iPASS Approvals',
      icon: ClipboardDocumentCheckIcon,
      description: 'Certified for TS iPASS (Telangana State Industrial Project Approval and Self Certification System) projects.',
      features: ['Industrial Project Surveys', 'Fast Track Approvals', 'Self Certification Support']
    }
  ];

  const whyChooseUs = [
    {
      title: 'Licensed & Authorized',
      desc: 'Fully licensed with Municipal, Grampanchayat, and TS iPASS approvals for comprehensive coverage.'
    },
    {
      title: 'Experienced Team',
      desc: 'Seasoned experts with extensive experience in land surveying and boundary demarcation.'
    },
    {
      title: 'Advanced Technology',
      desc: 'State-of-the-art DGPS and digital surveying equipment for precise measurements.'
    },
    {
      title: 'Time & Cost Efficient',
      desc: 'We recognize the importance of time and accuracy, delivering precise reports efficiently.'
    },
    {
      title: 'Legal Compliance',
      desc: 'All surveys comply with DTCP norms, revenue records, and legal requirements.'
    },
    {
      title: 'Complete Documentation',
      desc: 'Comprehensive reports, CAD drawings, and GIS-ready data for all your needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Hayagriva Associates | Licensed Land Surveyors in Mancherial</title>
        <meta name="description" content="Hayagriva Associates: Licensed land surveyors with Municipal, Grampanchayat, and TS iPASS approvals. Professional DGPS, digital surveys, DTCP layouts, and more in Mancherial." />
      </Helmet>

      {/* Hero Section */}
      <VideoHero className="h-[40vh] sm:h-[50vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              About Hayagriva Associates
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Your Trusted Partner in Digital Land Surveying. We save your time and money with precise, professional land surveying services backed by official permissions and licenses.
            </p>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* Founder Spotlight */}
      <AnimatedSection className="py-16 sm:py-20 bg-slate-900">
        <div className="container-default">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Founder</h2>
              <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
            </div>
            <AnimatedContainer className="grid lg:grid-cols-5 gap-10 items-center">
              <motion.div variants={itemFadeInUp} className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-3xl border-4 border-brand-primary/30 shadow-2xl">
                  <img
                    src="/images/arun.png"
                    alt="Arun, Founder of Hayagriva Associates"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div variants={itemFadeInUp} className="lg:col-span-3 text-white/90 space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary/80">Founder & Principal Surveyor</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Arun R</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Arun established Hayagriva Associates with a clear mission: make professional land surveying accessible, transparent, and legally reliable for every client in Telangana. With over a decade of hands-on experience handling municipal approvals, revenue records, and high-stakes infrastructure projects, he brings both technical mastery and practical insight to every assignment.
                </p>
                <p className="leading-relaxed">
                  Known for his methodical approach in the field and his collaborative style with architects, developers, and government officials, Arun ensures that each survey delivers actionable documentation. He personally oversees quality control, invests in advanced DGPS and total-station technologies, and mentors the team to maintain the firm’s reputation for accuracy and integrity.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-brand-primary/80 font-semibold mb-1">Expertise</h4>
                    <p>Municipal & Grampanchayat approvals, TS iPASS facilitation, cadastral mapping, and construction layout audits.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-brand-primary/80 font-semibold mb-1">Commitment</h4>
                    <p>Delivering precise data, pragmatic advice, and swift project turnaround for property owners and developers alike.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-lg transition-colors"
                  >
                    Consult with Arun
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatedContainer>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Introduction */}
      <AnimatedSection className="py-16 sm:py-20 bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
            {/* Left Side - Content Cards */}
            <AnimatedContainer className="space-y-6">
              <motion.div variants={itemFadeInUp} className="bg-gradient-to-br from-brand-primary/5 to-white rounded-xl p-6 border-2 border-brand-primary/20 hover:border-brand-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary text-white flex items-center justify-center">
                    <SparklesIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">Expert Team</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Hayagriva Associates is comprised of seasoned experts with extensive experience in land surveying. We recognize the importance of time and accuracy, assess client needs thoroughly, and deliver precise reports and guidance efficiently and affordably.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemFadeInUp} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border-2 border-slate-200 hover:border-brand-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                    <MapPinIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">Serving Telangana</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Based in Mancherial, we provide comprehensive land surveying services across Telangana, serving individuals, businesses, and government projects with the highest standards of professionalism and precision.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemFadeInUp} className="bg-gradient-to-br from-brand-primary/5 to-white rounded-xl p-6 border-2 border-brand-primary/20 hover:border-brand-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary text-white flex items-center justify-center">
                    <BoltIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">Technology & Expertise</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our team combines traditional surveying expertise with modern digital technology, ensuring that every project meets legal compliance requirements while delivering results that exceed expectations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedContainer>
            
            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-primary text-white text-4xl font-bold mb-4 shadow-lg">
                      HA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Hayagriva Associates</h3>
                    <p className="text-slate-600">Professional Land Surveyors</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-1">5000+</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-1">10+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">Municipal</span>
                      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">Grampanchayat</span>
                      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">TS iPASS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Permissions & Licenses */}
      <AnimatedSection className="py-16 sm:py-20 bg-slate-50">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Permissions & Licenses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are fully authorized and licensed to provide land surveying services across multiple jurisdictions
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {permissions.map((perm, i) => {
              const Icon = perm.icon;
              return (
                <motion.div key={i} variants={itemFadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-primary/30">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{perm.title}</h3>
                  <p className="text-slate-600 mb-6 text-center leading-relaxed">{perm.description}</p>
                  <ul className="space-y-2">
                    {perm.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircleIcon className="w-5 h-5 text-brand-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose Hayagriva Associates?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine expertise, technology, and official authorization to deliver exceptional results
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} variants={itemFadeInUp} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 sm:py-20 bg-brand-primary text-white" variant={fadeIn}>
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for accurate, professional land surveying services. We'll assess your needs and provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                Get a Quote
              </Link>
              <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold border-2 border-white/30 transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
