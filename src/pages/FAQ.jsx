import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VideoHero from '../components/VideoHero.jsx';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'General Questions',
    items: [
      {
        q: 'What services does Hayagriva Associates offer?',
        a: 'We offer comprehensive land surveying services including DGPS land surveys, digital land surveys, DTCP layouts, enjoyment surveys, sub-division, survey number demarcation, and registration plans & location sketches. All our services comply with legal requirements and are backed by official permissions.'
      },
      {
        q: 'Which areas do you serve?',
        a: 'We are based in Mancherial, Telangana, and provide land surveying services across Telangana. We serve individuals, businesses, and government projects throughout the state.'
      },
      {
        q: 'Are you licensed and authorized?',
        a: 'Yes, we are fully licensed and authorized with Municipal, Grampanchayat, and TS iPASS approvals, making us qualified to handle a wide range of surveying projects across different jurisdictions.'
      }
    ]
  },
  {
    category: 'Survey Process',
    items: [
      {
        q: 'How long does a boundary survey take?',
        a: 'Typically, a boundary survey takes 3-7 days depending on the property size, complexity, accessibility, and documentation requirements. We assess each project individually and provide accurate timelines during consultation.'
      },
      {
        q: 'What information do I need to provide for a survey?',
        a: 'You should provide property documents (pattas, sale deeds, revenue records), location details, any existing survey maps, and specifics about the purpose of the survey. Our team will guide you on exact requirements during the initial consultation.'
      },
      {
        q: 'Do you provide digital copies of survey reports?',
        a: 'Yes, we provide both printed and digital copies of all survey reports. Our digital deliverables include CAD drawings, GIS-ready data, and PDF reports that can be easily shared and stored.'
      }
    ]
  },
  {
    category: 'Documentation & Legal',
    items: [
      {
        q: 'Do you provide legal boundary documentation?',
        a: 'Yes, we provide signed reports, drawings, and documentation that meet legal requirements. Our reports are prepared in compliance with DTCP norms, revenue records, and applicable regulations for use in legal proceedings and approvals.'
      },
      {
        q: 'Can your survey reports be used for property registration?',
        a: 'Absolutely. We prepare registration plans and location sketches specifically designed for property registration, mutations, and legal processes. Our documentation is accepted by registration offices and revenue departments.'
      },
      {
        q: 'What is the difference between an enjoyment survey and a boundary survey?',
        a: 'A boundary survey identifies and marks property boundaries based on official records. An enjoyment survey assesses the actual land usage on the ground versus what is recorded in official documents, helping identify any discrepancies or encroachments.'
      }
    ]
  },
  {
    category: 'Costs & Pricing',
    items: [
      {
        q: 'How much does a land survey cost?',
        a: 'Survey costs vary based on property size, survey type, location, and complexity. We provide detailed, transparent quotes after assessing your specific requirements. Contact us for a free consultation and quote.'
      },
      {
        q: 'Do you offer payment plans?',
        a: 'We offer flexible payment terms based on project size and duration. Typically, we require an advance payment with the balance due upon completion. Please discuss payment options during your consultation.'
      }
    ]
  },
  {
    category: 'Technology & Equipment',
    items: [
      {
        q: 'What technology do you use for surveys?',
        a: 'We use state-of-the-art DGPS (Differential GPS) equipment, total stations, and digital surveying instruments for precise measurements. Our workflows include modern CAD and GIS software for accurate mapping and documentation.'
      },
      {
        q: 'How accurate are your surveys?',
        a: 'Our surveys meet or exceed industry standards for accuracy. We use high-precision instruments and follow established surveying protocols to ensure reliable results suitable for legal and construction purposes.'
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Hayagriva Associates | Frequently Asked Questions</title>
        <meta name="description" content="Frequently asked questions about land surveying services, timelines, costs, documentation, and processes at Hayagriva Associates." />
      </Helmet>

      {/* Hero Section */}
      <VideoHero className="h-[50vh] sm:h-[60vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Find answers to common questions about our land surveying services, 
              processes, and documentation requirements.
            </p>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* FAQ Sections */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-default max-w-4xl">
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-brand-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((faq, itemIndex) => {
                    const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.items.length, 0) + itemIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={itemIndex}
                        className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                        >
                          <h3 className="font-semibold text-lg text-slate-900 pr-4">
                            {faq.q}
                          </h3>
                          <div className="flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                              stroke="currentColor"
                              className={`w-6 h-6 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-5 sm:p-6 pt-0 text-slate-700 leading-relaxed bg-slate-50">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us today and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919177887049"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
