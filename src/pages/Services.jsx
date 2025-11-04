import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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

  const services = [
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
      to: '/services/registration-plans-location-sketch', 
      title: 'Registration Plans & Location Sketch', 
      img: '/images/Registration Plans & Location Sketch.avif',
      desc: 'Preparation of registration plans and location sketches for legal processes.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Hayagriva Associates | Professional Land Surveying Services</title>
        <meta name="description" content="Explore our comprehensive land surveying services: DGPS surveys, digital land surveys, DTCP layouts, enjoyment surveys, sub-division, survey number demarcation, and registration plans." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-primary/95 to-slate-800 text-white py-16 sm:py-20">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Our Survey Services
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Comprehensive land surveying solutions with professional reports and legal compliance. 
              We provide accurate, reliable, and efficient surveying services across Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">All Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional land surveying services tailored to your needs
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
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
                      // Try direct path as fallback
                      e.target.src = service.img;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3">
                    {service.title}
                  </h3>
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
