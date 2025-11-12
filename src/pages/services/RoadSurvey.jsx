import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import VideoHero from '../../components/VideoHero.jsx';
import ProcessTimeline from '../../components/ProcessTimeline.jsx';
import { createKeywords, defaultLocation } from '../../seo/config.js';
import {
  MapIcon,
  PresentationChartLineIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  CubeIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedContainer({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
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

export default function RoadSurvey() {
  const features = [
    {
      icon: MapIcon,
      title: 'Alignment Control',
      desc: 'Establish precise centerline, offsets, and benchmarks for new road corridors.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Profiles & Cross Sections',
      desc: 'Generate long-section and cross-section data for DPRs and construction.',
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: CubeIcon,
      title: 'Terrain & ROW Mapping',
      desc: 'Capture terrain, utilities, and right-of-way features with measurable accuracy.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Actionable Reports',
      desc: 'Deliver design-ready drawings, coordinates, and earthwork quantities.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const deliverables = [
    'Road alignment drawings (plan & profile)',
    'Cross-section templates at required intervals',
    'Right-of-way (ROW) and land acquisition maps',
    'Topographic maps with utilities and drainage',
    'Earthwork volume calculations and quantity sheets',
    'Construction layout coordinates and setting-out data'
  ];

  const applications = [
    'National & state highway projects',
    'Rural road and PMGSY initiatives',
    'Urban road widening and strengthening',
    'Industrial corridor & approach roads',
    'Smart city and township road networks',
    'Bridge approaches and bypass alignments'
  ];

  const process = [
    { step: '1', title: 'Project Briefing', desc: 'Collect DPR, design inputs, and survey requirements.', icon: ClipboardDocumentCheckIcon },
    { step: '2', title: 'Control Establishment', desc: 'Set up control network, benchmarks, and traverse.', icon: AdjustmentsHorizontalIcon },
    { step: '3', title: 'Field Data Capture', desc: 'Survey alignment, cross-sections, utilities, and terrain.', icon: MapIcon },
    { step: '4', title: 'Data Processing', desc: 'Create profiles, cross-sections, and quantity reports.', icon: ArrowTrendingUpIcon },
    { step: '5', title: 'Submission & Validation', desc: 'Deliver drawings, coordinate files, and support reviews.', icon: DocumentTextIcon }
  ];

  return (
    <>
      <Helmet>
        <title>Road & Highway Survey Services | Hayagriva Associates Telangana</title>
        <meta
          name="description"
          content="Accurate road and highway surveys covering alignment, profiles, cross-sections, ROW mapping, and construction layouts for infrastructure projects across Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'road survey services',
            'highway alignment survey',
            'road profile survey Telangana',
            `infrastructure corridor surveying in ${defaultLocation}`
          )}
        />
      </Helmet>

      <VideoHero>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Infrastructure Surveying
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Road & Highway Surveys
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Alignment, profiles, and ROW data you can trust for every stage of road development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Get a Quote
                </Link>
                <a
                  href="tel:+919966139588"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </VideoHero>

      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
                Service Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Complete Surveys for Road Infrastructure</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Our road survey team delivers the critical field data required for road planning, DPR preparation, and construction execution. From establishing control networks to mapping existing terrain and utilities, we ensure every alignment is designed on accurate, defensible survey information.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We support government, infrastructure agencies, and private developers with dependable data, precise documentation, and coordinated deliverables that integrate smoothly with design and construction workflows.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Road Surveys?</h3>
                <div className="space-y-4">
                  {[
                    'Experienced highway survey crew',
                    'DGPS & total station accuracy',
                    'Integration with design consultants',
                    'Detailed QA/QC before submission'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
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

      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-default">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-4">
              Key Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">What We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive surveying, documentation, and reporting for every type of road project.
            </p>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemFadeInUp}
                  className="group relative"
                >
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

      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-slate-50 rounded-2xl p-8 border-2 border-brand-primary/20 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Standard Deliverables</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
                {deliverables.map((item, index) => (
                  <div key={index} className="bg-white/70 rounded-xl border border-slate-200 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Where Road Surveys Help</h3>
              <ul className="space-y-3 text-slate-600 leading-relaxed">
                {applications.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 sm:py-24 bg-gradient-to-br from-brand-primary via-brand-primary to-slate-800 text-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              Survey Workflow
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Road Survey Execution Process</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transparent workflow from kickoff to final documentation, so your engineering team has complete confidence in the data.
            </p>
            <ProcessTimeline steps={process} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Plan Your Road Project with Hayagriva Associates
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              From feasibility to execution, we partner with infrastructure teams to deliver reliable survey data, clear documentation, and responsive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Book a Consultation
              </Link>
              <a
                href="tel:+919966139588"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}


