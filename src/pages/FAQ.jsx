import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VideoHero from '../components/VideoHero.jsx';
import { Link } from 'react-router-dom';
import { createKeywords, defaultLocation } from '../seo/config.js';

const faqs = [
  {
    category: 'General Questions',
    items: [
      {
        q: 'What services does Hayagriva Associates offer?',
        a: 'We provide end-to-end support for land and infrastructure projects, including DGPS and digital land surveys, boundary and topographic surveys, road and highway surveys, DTCP layouts, municipal and TS iPASS approvals, Vastu and working plans, building elevation designs, estimation & costing, property valuations, and home loan assistance.'
      },
      {
        q: 'Which areas do you serve?',
        a: 'We are headquartered in Mancherial, Telangana and deploy teams across the state for residential, commercial, agricultural, and infrastructure assignments. We also collaborate with partners for projects in neighboring states on request.'
      },
      {
        q: 'Are you licensed and authorized?',
        a: 'Yes. Our surveyors are licensed and our firm holds the necessary Municipal, Grampanchayat, and TS iPASS registrations required to execute surveys, permissions, and documentation with full legal validity.'
      }
    ]
  },
  {
    category: 'Land Survey Services',
    items: [
      {
        q: 'How long does a boundary survey or plot demarcation take?',
        a: 'Most boundary and demarcation surveys are completed within 3–7 days, depending on plot size, terrain, encroachments, and record availability. We confirm the exact schedule after a site assessment and document review.'
      },
      {
        q: 'What information do I need to start a survey?',
        a: 'Please share title documents (sale deed, pattadar passbook, 1B, Pahani), any existing survey sketches, site location details, and the purpose of the survey. We review these upfront and brief you on any additional requirements.'
      },
      {
        q: 'What deliverables are included in a road survey?',
        a: 'Our road and highway surveys cover alignment control, profiles and cross-sections, terrain and ROW mapping, utility inventories, and earthwork quantities. We issue CAD drawings, coordinate lists, quantity sheets, and supporting reports that integrate with DPR and construction teams.'
      },
      {
        q: 'Do you provide digital outputs for DGPS and digital land surveys?',
        a: 'Yes. Every survey includes both hard copy and digital deliverables such as CAD/DWG drawings, DXF files, GIS shapefiles, KML/KMZ, PDF reports, and coordinate spreadsheets so you can share data with architects, engineers, or authorities.'
      }
    ]
  },
  {
    category: 'Approvals & Permissions',
    items: [
      {
        q: 'Can you assist with Municipal and Grampanchayat building permissions?',
        a: 'We prepare drawings, documentation, and application files required by Municipal and Grampanchayat offices, submit them on your behalf, and coordinate until approvals are issued. Our team tracks objections and provides revisions when needed.'
      },
      {
        q: 'What support do you provide for TS iPASS approvals?',
        a: 'We guide you through the TS iPASS application, compile survey data, compliance certificates, and layout drawings, and liaise with departments for inspections and clearances so your industrial project moves forward without delays.'
      },
      {
        q: 'Do you coordinate with government departments during approvals?',
        a: 'Yes. We interact with municipal engineers, revenue officials, and TS iPASS officers, respond to queries, and attend site visits or joint measurements to ensure documentation is accepted on the first submission.'
      },
      {
        q: 'How long does TS iPASS approval take?',
        a: 'TS iPASS approval timelines vary based on project type and complexity. Typically, the process takes 15-30 days for standard projects, but we work to expedite the process through proper documentation and coordination with authorities.'
      },
      {
        q: 'What documents are required for TS iPASS approval?',
        a: 'Required documents include project proposal, land ownership documents, survey plans, building plans, environmental clearances, NOCs from various departments, and compliance certificates. We help prepare and organize all necessary documentation.'
      }
    ]
  },
  {
    category: 'Design & Documentation Services',
    items: [
      {
        q: 'What is included in your Vastu plans and working drawings?',
        a: 'We deliver concept layouts aligned with Vastu principles, detailed working drawings (floor plans, elevations, sections), schedules, and sanction-ready documentation tailored to your plot dimensions and authority norms.'
      },
      {
        q: 'Do you provide building elevation and facade designs?',
        a: 'Yes. Our design team produces 2D and 3D elevation concepts, material palettes, and render-ready visuals that complement your architectural plans and reflect local approval guidelines.'
      },
      {
        q: 'Can you prepare registration plans and location sketches?',
        a: 'Absolutely. We create registration plans, location sketches, and supporting documentation accepted by sub-registrar offices, revenue departments, and lending institutions for mutations, loan processing, and legal submissions.'
      },
      {
        q: 'How do you ensure Vastu compliance in plans?',
        a: 'Our team follows traditional Vastu Shastra principles including proper orientation, room placement, directional alignment, and energy flow considerations while maintaining modern functionality and approval compliance.'
      },
      {
        q: 'Do you provide 3D visualization for elevation designs?',
        a: 'Yes, we create realistic 3D renderings and visualizations for building elevations, allowing you to see how your building will look before construction. This helps in material selection and design approval.'
      },
      {
        q: 'Can you revise elevation designs if needed?',
        a: 'Absolutely. We offer design revisions based on your feedback or approval authority requirements. We work with you to refine the design until it meets your vision and approval standards.'
      }
    ]
  },
  {
    category: 'Costs, Valuations & Financing',
    items: [
      {
        q: 'How much does a land or road survey cost?',
        a: 'Pricing depends on survey type, area, accessibility, and deliverables. We share a transparent proposal after understanding your scope. Complex road or infrastructure surveys are quoted with phase-wise milestones.'
      },
      {
        q: 'Do you offer estimation costing and property valuation services?',
        a: 'Yes. Our engineers prepare detailed estimation and costing reports for construction projects, while certified valuers assess property market value for sale, purchase, banking, or legal needs.'
      },
      {
        q: 'Can you help arrange financing or home loans?',
        a: 'We partner with leading banks and NBFCs to assist with housing loan documentation, technical reports, and valuations, ensuring your financing process is smooth and compliant.'
      },
      {
        q: 'Do you provide both printed and digital reports?',
        a: 'Every project includes duly signed hard copies and comprehensive digital packages. You will receive PDFs, CAD files, coordinate spreadsheets, and photographs for your records and submissions.'
      },
      {
        q: 'What factors are considered in construction cost estimation?',
        a: 'Our cost estimation includes material costs, labor costs, equipment costs, overhead expenses, taxes, permits, and contingency allowances. We analyze market rates, project specifications, and site conditions to provide accurate estimates.'
      },
      {
        q: 'How accurate are your property valuations?',
        a: 'Our property valuations are based on comprehensive market analysis, comparable sales, property condition assessment, location factors, and current market trends. We follow industry standards to ensure accurate and reliable valuations.'
      },
      {
        q: 'What documents are needed for home loan application?',
        a: 'Required documents include identity proof (Aadhaar, PAN), address proof, income documents (salary slips, IT returns), bank statements, property documents (sale deed, registration), and property valuation report. We help organize all necessary documentation.'
      },
      {
        q: 'Do you assist with loan processing and follow-up?',
        a: 'Yes, we provide complete support throughout the home loan process including application preparation, documentation, lender coordination, follow-up on loan status, and assistance with any queries or additional requirements.'
      }
    ]
  },
  {
    category: 'Project Logistics & Support',
    items: [
      {
        q: 'How far in advance should I schedule a survey or approval service?',
        a: 'We recommend booking 5–7 days ahead for standard surveys and at least two weeks in advance for large infrastructure or approval projects so we can allocate the right team and equipment.'
      },
      {
        q: 'Do you work with architects, contractors, and legal advisors?',
        a: 'Yes. We regularly collaborate with architects, civil contractors, government engineers, and legal professionals to align survey outputs, permissions, and designs with broader project goals.'
      },
      {
        q: 'What support do you offer after delivering the reports?',
        a: 'Our engagement continues even after delivery. We explain drawings, attend clarification meetings, update documentation if authorities request changes, and remain available for follow-up site visits.'
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
        <title>FAQ | Land Surveying Questions Answered by Hayagriva Associates</title>
        <meta
          name="description"
          content="Find answers about land, road, and digital surveys, municipal and TS iPASS approvals, Vastu plans, valuations, and financing from Hayagriva Associates in Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'land surveying FAQ',
            'road survey questions',
            'TS iPASS approval help',
            'Vastu plan FAQs',
            `survey support in ${defaultLocation}`
          )}
        />
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
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919966139588"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors"
                >
                  Call: +91 9966139588
                </a>
                <a
                  href="tel:+919177887049"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors"
                >
                  Call: +91 91778 87049
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
