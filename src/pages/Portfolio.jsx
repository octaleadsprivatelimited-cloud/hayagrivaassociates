import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoHero from '../components/VideoHero.jsx';
import { createKeywords, defaultLocation } from '../seo/config.js';

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

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Residential Layout Survey',
      category: 'DTCP Layouts',
      desc: 'Complete DTCP-compliant layout survey for 50-acre residential development project in Mancherial.',
      img: '/images/DTCP Layouts.webp'
    },
    {
      id: 2,
      title: 'Industrial Boundary Survey',
      category: 'Boundary Survey',
      desc: 'Comprehensive boundary survey and demarcation for industrial site in Telangana.',
      img: '/images/Boundary Survey.webp'
    },
    {
      id: 3,
      title: 'Topographic Mapping Project',
      category: 'Topographic Survey',
      desc: 'Detailed topographic survey for infrastructure development project covering 100 acres.',
      img: '/images/Topographic Survey.webp'
    },
    {
      id: 4,
      title: 'Subdivision Planning',
      category: 'Sub-division',
      desc: 'Land subdivision survey creating 120 individual plots with complete documentation.',
      img: '/images/Sub-division.webp'
    },
    {
      id: 5,
      title: 'Digital Survey Project',
      category: 'Digital Land Survey',
      desc: 'Modern digital survey with CAD deliverables for commercial complex development.',
      img: '/images/Digital Land Survey.avif'
    },
    {
      id: 6,
      title: 'DGPS Control Network',
      category: 'DGPS Survey',
      desc: 'High-precision DGPS control network establishment for large-scale mapping project.',
      img: '/images/DGPS Land Survey.webp'
    }
  ];
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };
  return (
    <>
      <Helmet>
        <title>Surveying Portfolio | Hayagriva Associates Projects in Mancherial & Telangana</title>
        <meta
          name="description"
          content="View Hayagriva Associates portfolio of boundary surveys, DGPS mapping, topographic studies, DTCP layouts and subdivision projects delivered across Mancherial and Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'surveying project portfolio',
            'DGPS project case studies',
            'Telangana surveying success stories',
            `Mancherial land survey projects ${defaultLocation}`
          )}
        />
      </Helmet>

      {/* Hero Section */}
      <VideoHero className="h-[40vh] sm:h-[45vh] lg:h-[50vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Our Work
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
                Showcasing successful surveying projects and satisfied clients across Telangana
              </p>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* Stats Section */}
      <AnimatedSection className="py-16 sm:py-20 bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Project Statistics</h2>
            <p className="text-lg text-slate-600">Our track record of successful projects</p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Topographic Survey', value: '1000+' },
              { label: 'Boundary Survey', value: '1000+' },
              { label: 'Setting-Out Survey', value: '1000+' },
              { label: 'Subdivision & Layout', value: '1000+' },
              { label: 'Earthwork Volume', value: '1000+' },
              { label: 'As-Built Survey', value: '1000+' },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={itemFadeInUp} className="border-2 border-slate-200 rounded-xl p-6 bg-white hover:border-brand-primary/50 hover:shadow-lg transition-all text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection className="py-16 sm:py-20 bg-slate-50">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">A selection of our completed surveying projects</p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemFadeInUp} className="group border-2 border-slate-200 rounded-2xl bg-white hover:border-brand-primary/50 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={encodeImagePath(project.img)}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = project.img;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>
    </>
  );
}
