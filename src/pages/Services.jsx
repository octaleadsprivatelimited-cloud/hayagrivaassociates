import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import VideoHero from '../components/VideoHero.jsx';
import { createKeywords, defaultLocation } from '../seo/config.js';

export default function Services() {
  const encodeImagePath = (path) => {
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

  const landSurveyServices = [
    { 
      to: '/services/dgps-land-survey', 
      title: 'DGPS Land Survey', 
      img: '/images/DGPS Land Survey.webp',
      desc: 'High-precision positioning using DGPS instruments for accurate control and mapping.'
    },
    { 
      to: '/services/digital-land-survey', 
      title: 'Digital Land Survey', 
      img: '/images/Digital Land Survey.avif',
      desc: 'Modern digital workflows with CAD deliverables and GIS-ready data.'
    },
    { 
      to: '/services/dtcp-layouts', 
      title: 'DTCP Layouts', 
      img: '/images/DTCP Layouts.webp',
      desc: 'Layouts prepared as per DTCP norms and approvals.'
    },
    { 
      to: '/services/enjoyment-survey', 
      title: 'Enjoyment Survey', 
      img: '/images/Enjoyment Survey.avif',
      desc: 'Assessment of actual land usage on ground versus records.'
    },
    { 
      to: '/services/sub-division', 
      title: 'Sub-division', 
      img: '/images/Sub-division.webp',
      desc: 'Land subdivision into plots with accurate measurements and markers.'
    },
    { 
      to: '/services/survey-number-demarcation', 
      title: 'Survey Number Demarcation', 
      img: '/images/Survey Number Demarcation.jpg',
      desc: 'On-ground demarcation of survey numbers as per revenue records.'
    },
    { 
      to: '/services/road-survey', 
      title: 'Road Survey', 
      img: '/images/Construction Surveys.webp',
      desc: 'Detailed road alignment, profile, and ROW surveys for infrastructure projects.'
    },
    { 
      to: '/services/registration-plans-location-sketch', 
      title: 'Registration Plans & Location Sketch', 
      img: '/images/Registration Plans & Location Sketch.avif',
      desc: 'Preparation of registration plans and location sketches for legal processes.'
    },
  ];

  const permissionsServices = [
    { 
      to: '/services/municipal-grampanchayat', 
      title: 'Municipal & Grampanchayat Building Permission', 
      img: '/images/service-1.jpeg',
      desc: 'Complete assistance for obtaining building permissions from Municipal and Grampanchayat authorities.'
    },
    { 
      to: '/services/ts-ipass', 
      title: 'TS iPASS Approvals', 
      img: '/images/service-2.jpeg',
      desc: 'Streamlined approval process through Telangana Industrial Policy Approval System.'
    },
  ];

  const designServices = [
    { 
      to: '/services/vastu-plans', 
      title: 'Vastu Plans / Working Plans', 
      img: '/images/service-3.jpeg',
      desc: 'Architectural plans designed according to Vastu principles and working drawings for construction.'
    },
    { 
      to: '/services/building-elevation', 
      title: 'Building Elevation Designs', 
      img: '/images/service-4.jpeg',
      desc: 'Professional elevation designs that enhance the aesthetic appeal and functionality of buildings.'
    },
  ];

  const otherServices = [
    { 
      to: '/services/estimation-costing', 
      title: 'Estimation Costing', 
      img: '/images/service-5.jpeg',
      desc: 'Accurate cost estimation and budgeting for construction and development projects.'
    },
    { 
      to: '/services/property-valuations', 
      title: 'Property Valuations', 
      img: '/images/DTCP Layouts.webp',
      desc: 'Professional property valuation services for sale, purchase, and legal purposes.'
    },
    { 
      to: '/services/home-loans', 
      title: 'Home Loans', 
      img: '/images/DTCP Layouts.webp',
      desc: 'Assistance with home loan applications and processing for residential properties.'
    },
  ];

  const allServices = [...landSurveyServices, ...permissionsServices, ...designServices, ...otherServices];

  return (
    <>
      <Helmet>
        <title>Land Surveying & Approval Services | Hayagriva Associates Mancherial</title>
        <meta
          name="description"
          content="Browse Hayagriva Associates services including DGPS land survey, digital surveying, DTCP layouts, municipal permissions, TS iPASS approvals, Vastu plans, property valuations and more across Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'DGPS survey services',
            'digital land survey Mancherial',
            'DTCP layout preparation Telangana',
            'TS iPASS approval support',
            `surveying and permissions in ${defaultLocation}`
          )}
        />
      </Helmet>

      {/* Hero Section */}
      <VideoHero className="h-[50vh] sm:h-[60vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Our Survey Services
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Comprehensive land surveying solutions with professional reports and legal compliance. 
              We provide accurate, reliable, and efficient surveying services across Telangana.
            </p>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">All Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive land surveying, design, and related services tailored to your needs
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          
          {/* Land Survey Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Land Survey Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {landSurveyServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group border-2 border-slate-200 rounded-xl p-0 bg-white hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/50 transition-all duration-300 block overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={encodeImagePath(service.img)}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Failed to load image:', service.img);
                        e.target.src = service.img;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Learn More 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Permissions Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Permissions & Approvals</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {permissionsServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group border-2 border-slate-200 rounded-xl p-0 bg-white hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/50 transition-all duration-300 block overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={encodeImagePath(service.img)}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Failed to load image:', service.img);
                        e.target.src = service.img;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Learn More 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Design Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Design Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group border-2 border-slate-200 rounded-xl p-0 bg-white hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/50 transition-all duration-300 block overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={encodeImagePath(service.img)}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Failed to load image:', service.img);
                        e.target.src = service.img;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Learn More 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Other Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group border-2 border-slate-200 rounded-xl p-0 bg-white hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/50 transition-all duration-300 block overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={encodeImagePath(service.img)}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Failed to load image:', service.img);
                        e.target.src = service.img;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Learn More 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-slate-600 mb-6">
              Contact us today and we'll help you determine the right surveying service for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
