import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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

const blogPosts = {
  1: {
    id: 1,
    date: '15 Jan 2025',
    category: 'Survey Tips',
    title: 'Importance of Boundary Surveys for Property',
    excerpt: 'Understanding why boundary surveys are crucial for property owners and how they help prevent disputes and legal issues.',
    img: '/images/Boundary Survey.webp',
    readTime: '5 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>Boundary surveys are one of the most critical types of land surveys that property owners should consider. They establish the exact legal boundaries of a property, which is essential for various reasons including construction, legal disputes, and property transactions.</p>
      
      <h2>Why Boundary Surveys Are Essential</h2>
      <p>A boundary survey provides a clear definition of your property lines, helping you understand exactly where your property begins and ends. This is crucial when:</p>
      <ul>
        <li>Planning construction or renovation projects</li>
        <li>Installing fences, walls, or other structures</li>
        <li>Resolving disputes with neighbors</li>
        <li>Buying or selling property</li>
        <li>Subdividing land</li>
      </ul>
      
      <h2>Preventing Legal Disputes</h2>
      <p>One of the primary benefits of a boundary survey is preventing costly legal disputes. Property boundary disputes are common and can lead to expensive litigation, damaged relationships with neighbors, and significant delays in construction projects.</p>
      <p>By conducting a professional boundary survey before any construction or property transaction, you can:</p>
      <ul>
        <li>Identify encroachments early</li>
        <li>Ensure compliance with local zoning laws</li>
        <li>Protect your property rights</li>
        <li>Establish clear legal documentation</li>
      </ul>
      
      <h2>Professional Boundary Survey Process</h2>
      <p>At Hayagriva Associates, our boundary survey process includes:</p>
      <ol>
        <li><strong>Research and Documentation:</strong> We review property deeds, maps, and historical records to understand the property boundaries.</li>
        <li><strong>Field Survey:</strong> Our licensed surveyors use advanced equipment to physically measure and mark the property boundaries.</li>
        <li><strong>Analysis:</strong> We compare field measurements with existing records to identify any discrepancies.</li>
        <li><strong>Report and Documentation:</strong> We provide detailed survey reports, maps, and legal documentation.</li>
      </ol>
      
      <h2>When to Get a Boundary Survey</h2>
      <p>Consider getting a boundary survey if you:</p>
      <ul>
        <li>Are purchasing a new property</li>
        <li>Plan to build near property lines</li>
        <li>Suspect a neighbor has encroached on your land</li>
        <li>Are involved in a property dispute</li>
        <li>Want to subdivide your property</li>
        <li>Need to resolve an easement issue</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Investing in a professional boundary survey is an essential step for any property owner. It provides peace of mind, prevents legal disputes, and ensures that your property rights are clearly defined and protected. Contact Hayagriva Associates today to discuss your boundary surveying needs.</p>
    `
  },
  2: {
    id: 2,
    date: '10 Jan 2025',
    category: 'Technology',
    title: 'Latest Technology in Land Surveying',
    excerpt: 'Explore how modern DGPS, digital mapping, and GIS technologies are revolutionizing the land surveying industry.',
    img: '/images/Digital Land Survey.avif',
    readTime: '7 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>The land surveying industry has undergone a technological revolution in recent years. Modern surveying equipment and software have dramatically improved accuracy, efficiency, and data quality. This article explores the latest technologies that are transforming how land surveys are conducted.</p>
      
      <h2>DGPS and RTK Technology</h2>
      <p>Differential GPS (DGPS) and Real-Time Kinematic (RTK) positioning systems have revolutionized land surveying. These technologies provide centimeter-level accuracy, making them ideal for precise boundary surveys, topographic mapping, and construction layout.</p>
      <p>Key advantages include:</p>
      <ul>
        <li>Sub-centimeter accuracy</li>
        <li>Real-time positioning data</li>
        <li>Reduced field time</li>
        <li>Integration with digital mapping systems</li>
      </ul>
      
      <h2>Digital Mapping and CAD Integration</h2>
      <p>Traditional paper-based surveys are being replaced by digital workflows. Modern surveyors use:</p>
      <ul>
        <li><strong>Total Stations:</strong> Electronic instruments that measure angles and distances with high precision</li>
        <li><strong>3D Laser Scanning:</strong> Captures millions of data points to create detailed 3D models</li>
        <li><strong>Drone Surveying:</strong> Aerial mapping for large areas and inaccessible terrain</li>
        <li><strong>CAD Software:</strong> For creating accurate drawings and plans</li>
      </ul>
      
      <h2>GIS and Data Management</h2>
      <p>Geographic Information Systems (GIS) have become integral to modern surveying. GIS technology allows surveyors to:</p>
      <ul>
        <li>Store and manage spatial data</li>
        <li>Create detailed maps and visualizations</li>
        <li>Analyze spatial relationships</li>
        <li>Share data with clients and stakeholders</li>
      </ul>
      
      <h2>Cloud-Based Solutions</h2>
      <p>Cloud computing has transformed data storage and collaboration in surveying. Surveyors can now:</p>
      <ul>
        <li>Access data from anywhere</li>
        <li>Collaborate in real-time</li>
        <li>Share project data securely</li>
        <li>Maintain version control</li>
      </ul>
      
      <h2>Mobile Applications</h2>
      <p>Mobile apps have streamlined field operations, allowing surveyors to:</p>
      <ul>
        <li>Collect data directly on tablets</li>
        <li>Access reference materials in the field</li>
        <li>Communicate with office teams</li>
        <li>Update project status in real-time</li>
      </ul>
      
      <h2>The Future of Surveying Technology</h2>
      <p>Emerging technologies like AI-powered data analysis, augmented reality, and autonomous surveying equipment are shaping the future of the industry. These innovations promise even greater accuracy, efficiency, and capabilities.</p>
      
      <h2>Conclusion</h2>
      <p>Modern surveying technology has transformed the industry, providing unprecedented accuracy and efficiency. At Hayagriva Associates, we stay at the forefront of these technological advances to deliver the best possible results for our clients.</p>
    `
  },
  3: {
    id: 3,
    date: '5 Jan 2025',
    category: 'Survey Types',
    title: 'When Do You Need a Topographic Survey?',
    excerpt: 'Learn about topographic surveys, their applications, and when they are required for construction and development projects.',
    img: '/images/Topographic Survey.webp',
    readTime: '6 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>Topographic surveys are essential for understanding the natural and man-made features of a piece of land. They provide detailed information about the elevation, contours, and physical characteristics of a site, which is crucial for planning and design purposes.</p>
      
      <h2>What is a Topographic Survey?</h2>
      <p>A topographic survey maps the elevation and contours of the land, along with natural features like trees, streams, and hills, and man-made features like buildings, roads, and utilities. The result is a detailed map that shows the three-dimensional characteristics of the land.</p>
      
      <h2>When You Need a Topographic Survey</h2>
      <p>Topographic surveys are typically required for:</p>
      
      <h3>Construction Projects</h3>
      <ul>
        <li>Building design and planning</li>
        <li>Site development</li>
        <li>Grading and earthwork calculations</li>
        <li>Drainage planning</li>
      </ul>
      
      <h3>Engineering Projects</h3>
      <ul>
        <li>Road and highway design</li>
        <li>Bridge and infrastructure projects</li>
        <li>Utility installation</li>
        <li>Flood control planning</li>
      </ul>
      
      <h3>Land Development</h3>
      <ul>
        <li>Subdivision planning</li>
        <li>Site layout design</li>
        <li>Environmental impact assessment</li>
        <li>Land use planning</li>
      </ul>
      
      <h2>What Information Does a Topo Survey Provide?</h2>
      <p>A comprehensive topographic survey includes:</p>
      <ul>
        <li>Elevation contours at specified intervals</li>
        <li>Natural features (trees, water bodies, rock outcroppings)</li>
        <li>Man-made features (buildings, fences, utilities)</li>
        <li>Property boundaries</li>
        <li>Spot elevations at key points</li>
        <li>Slope information</li>
      </ul>
      
      <h2>The Survey Process</h2>
      <p>Our topographic survey process involves:</p>
      <ol>
        <li><strong>Planning:</strong> Reviewing project requirements and site conditions</li>
        <li><strong>Field Survey:</strong> Using total stations, GPS, and other equipment to collect data</li>
        <li><strong>Data Processing:</strong> Analyzing and processing survey data</li>
        <li><strong>Map Creation:</strong> Creating detailed topographic maps and drawings</li>
        <li><strong>Quality Control:</strong> Verifying accuracy and completeness</li>
        <li><strong>Delivery:</strong> Providing final maps and digital files</li>
      </ol>
      
      <h2>Benefits of Professional Topographic Surveys</h2>
      <ul>
        <li>Accurate site information for design and planning</li>
        <li>Identification of potential issues before construction</li>
        <li>Compliance with local regulations</li>
        <li>Reduced construction costs through better planning</li>
        <li>Foundation for engineering design</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Topographic surveys are essential for any project that requires detailed understanding of land characteristics. Whether you're planning construction, development, or engineering projects, a professional topographic survey provides the foundation for successful project planning and execution.</p>
    `
  },
  4: {
    id: 4,
    date: '28 Dec 2024',
    category: 'Legal',
    title: 'DTCP Layouts: Understanding Approval Process',
    excerpt: 'A comprehensive guide to DTCP layouts, approval requirements, and how professional surveys facilitate the process.',
    img: '/images/DTCP Layouts.webp',
    readTime: '8 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>DTCP (Directorate of Town and Country Planning) layouts are essential for land development in Telangana. Understanding the approval process and requirements is crucial for successful project completion.</p>
      
      <h2>What is a DTCP Layout?</h2>
      <p>A DTCP layout is a comprehensive plan that shows how land will be subdivided into plots with proper infrastructure, roads, open spaces, and utilities. These layouts must comply with DTCP regulations and standards.</p>
      
      <h2>Why DTCP Approval is Required</h2>
      <p>DTCP approval is mandatory for:</p>
      <ul>
        <li>Subdividing land into plots</li>
        <li>Residential and commercial development</li>
        <li>Layout registration</li>
        <li>Obtaining building permits</li>
        <li>Property registration</li>
      </ul>
      
      <h2>Key Requirements for DTCP Layouts</h2>
      <h3>Road Requirements</h3>
      <ul>
        <li>Minimum road widths as per DTCP standards</li>
        <li>Proper road connectivity</li>
        <li>Drainage and sewerage systems</li>
        <li>Street lighting provisions</li>
      </ul>
      
      <h3>Plot Requirements</h3>
      <ul>
        <li>Minimum plot sizes</li>
        <li>Setback requirements</li>
        <li>Plot-to-plot spacing</li>
        <li>Corner plot specifications</li>
      </ul>
      
      <h3>Open Spaces and Amenities</h3>
      <ul>
        <li>Parks and recreational areas</li>
        <li>Community spaces</li>
        <li>Utility reservations</li>
        <li>Environmental considerations</li>
      </ul>
      
      <h2>The Approval Process</h2>
      <ol>
        <li><strong>Initial Survey:</strong> Comprehensive land survey and site analysis</li>
        <li><strong>Layout Design:</strong> Creating DTCP-compliant layout plans</li>
        <li><strong>Documentation:</strong> Preparing all required documents and drawings</li>
        <li><strong>Application Submission:</strong> Filing application with DTCP</li>
        <li><strong>Review Process:</strong> DTCP review and verification</li>
        <li><strong>Approval:</strong> Obtaining final approval</li>
        <li><strong>Registration:</strong> Registering the approved layout</li>
      </ol>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Many developers face challenges during the approval process:</p>
      <ul>
        <li><strong>Non-compliance Issues:</strong> Working with experienced surveyors ensures compliance</li>
        <li><strong>Documentation Errors:</strong> Professional surveyors provide accurate documentation</li>
        <li><strong>Delays:</strong> Proper planning and preparation reduces delays</li>
        <li><strong>Rejections:</strong> Expert guidance helps avoid common pitfalls</li>
      </ul>
      
      <h2>How Professional Surveyors Help</h2>
      <p>At Hayagriva Associates, we provide:</p>
      <ul>
        <li>Complete layout design and planning</li>
        <li>DTCP compliance verification</li>
        <li>Documentation and submission support</li>
        <li>Coordination with DTCP authorities</li>
        <li>Revision and resubmission if needed</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Navigating the DTCP approval process requires expertise and experience. Working with professional surveyors who understand DTCP requirements ensures a smoother approval process and successful project completion.</p>
    `
  },
  5: {
    id: 5,
    date: '20 Dec 2024',
    category: 'Survey Types',
    title: 'Enjoyment Survey: What You Need to Know',
    excerpt: 'Understanding enjoyment surveys and how they help assess actual land usage versus official records.',
    img: '/images/Enjoyment Survey.avif',
    readTime: '5 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>An enjoyment survey is a specialized type of land survey that compares the actual on-ground land usage and possession with the recorded documents. This type of survey is crucial for resolving property disputes and ensuring legal clarity.</p>
      
      <h2>What is an Enjoyment Survey?</h2>
      <p>An enjoyment survey verifies what is actually happening on the ground versus what is recorded in official documents. It identifies discrepancies, encroachments, and variances between the actual land usage and the legal records.</p>
      
      <h2>When is an Enjoyment Survey Needed?</h2>
      <p>Enjoyment surveys are typically required in situations such as:</p>
      <ul>
        <li>Property boundary disputes</li>
        <li>Encroachment identification</li>
        <li>Title verification</li>
        <li>Land possession verification</li>
        <li>Legal proceedings</li>
        <li>Property transactions</li>
      </ul>
      
      <h2>What Does an Enjoyment Survey Reveal?</h2>
      <p>The survey identifies:</p>
      <ul>
        <li><strong>Encroachments:</strong> Structures or improvements on neighboring properties</li>
        <li><strong>Discrepancies:</strong> Differences between recorded boundaries and actual usage</li>
        <li><strong>Possession:</strong> Who is actually using or occupying the land</li>
        <li><strong>Boundaries:</strong> Actual boundary locations versus recorded boundaries</li>
        <li><strong>Easements:</strong> Rights of way or access issues</li>
      </ul>
      
      <h2>The Survey Process</h2>
      <ol>
        <li><strong>Document Review:</strong> Analyzing all relevant property documents, deeds, and records</li>
        <li><strong>Field Investigation:</strong> On-site inspection and measurement</li>
        <li><strong>Comparison:</strong> Comparing field findings with recorded documents</li>
        <li><strong>Report Preparation:</strong> Creating detailed reports with findings and recommendations</li>
        <li><strong>Documentation:</strong> Providing maps, sketches, and legal documentation</li>
      </ol>
      
      <h2>Benefits of an Enjoyment Survey</h2>
      <ul>
        <li>Clarifies actual property boundaries</li>
        <li>Identifies potential legal issues early</li>
        <li>Provides evidence for legal proceedings</li>
        <li>Helps resolve disputes amicably</li>
        <li>Protects property rights</li>
        <li>Ensures accurate property records</li>
      </ul>
      
      <h2>Legal Implications</h2>
      <p>Enjoyment surveys are often used as evidence in:</p>
      <ul>
        <li>Court proceedings</li>
        <li>Property disputes</li>
        <li>Title insurance claims</li>
        <li>Property transactions</li>
        <li>Easement negotiations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Enjoyment surveys are essential tools for resolving property disputes and ensuring legal clarity. They provide an accurate assessment of actual land usage versus recorded documents, helping property owners protect their rights and resolve conflicts effectively.</p>
    `
  },
  6: {
    id: 6,
    date: '12 Dec 2024',
    category: 'Survey Tips',
    title: 'Land Subdivision: Planning and Execution',
    excerpt: 'Essential information about land subdivision processes, documentation requirements, and professional surveying services.',
    img: '/images/Sub-division.webp',
    readTime: '6 min read',
    author: 'Hayagriva Associates',
    content: `
      <p>Land subdivision is the process of dividing a large piece of land into smaller, legally defined plots. This process requires careful planning, professional surveying, and proper documentation to ensure success.</p>
      
      <h2>Understanding Land Subdivision</h2>
      <p>Subdivision involves dividing a single parcel of land into multiple plots, each with its own legal description and boundaries. This is commonly done for residential development, commercial projects, or estate planning.</p>
      
      <h2>Why Subdivide Land?</h2>
      <p>Common reasons for land subdivision include:</p>
      <ul>
        <li>Residential development</li>
        <li>Commercial projects</li>
        <li>Estate planning</li>
        <li>Maximizing land value</li>
        <li>Meeting zoning requirements</li>
        <li>Creating investment opportunities</li>
      </ul>
      
      <h2>The Subdivision Process</h2>
      <h3>1. Planning and Design</h3>
      <ul>
        <li>Assessing site conditions and constraints</li>
        <li>Planning plot layout and sizes</li>
        <li>Designing roads and infrastructure</li>
        <li>Ensuring compliance with regulations</li>
      </ul>
      
      <h3>2. Survey and Documentation</h3>
      <ul>
        <li>Comprehensive land survey</li>
        <li>Boundary identification and marking</li>
        <li>Topographic mapping</li>
        <li>Preparation of subdivision plans</li>
      </ul>
      
      <h3>3. Approval Process</h3>
      <ul>
        <li>Submitting plans to local authorities</li>
        <li>Obtaining necessary approvals</li>
        <li>Addressing any concerns or revisions</li>
        <li>Final approval and registration</li>
      </ul>
      
      <h3>4. Implementation</h3>
      <ul>
        <li>On-ground demarcation</li>
        <li>Road and infrastructure development</li>
        <li>Utility installation</li>
        <li>Final survey and documentation</li>
      </ul>
      
      <h2>Key Considerations</h2>
      <h3>Legal Requirements</h3>
      <ul>
        <li>Zoning compliance</li>
        <li>Minimum plot sizes</li>
        <li>Setback requirements</li>
        <li>Road and infrastructure standards</li>
      </ul>
      
      <h3>Technical Requirements</h3>
      <ul>
        <li>Accurate measurements</li>
        <li>Proper boundary marking</li>
        <li>Drainage planning</li>
        <li>Utility access</li>
      </ul>
      
      <h2>Benefits of Professional Subdivision Services</h2>
      <ul>
        <li>Expert planning and design</li>
        <li>Accurate surveys and measurements</li>
        <li>Compliance with regulations</li>
        <li>Efficient approval process</li>
        <li>Proper documentation</li>
        <li>On-ground demarcation</li>
      </ul>
      
      <h2>Common Challenges</h2>
      <p>Subdivision projects can face various challenges:</p>
      <ul>
        <li>Regulatory compliance issues</li>
        <li>Site constraints and topography</li>
        <li>Approval delays</li>
        <li>Infrastructure requirements</li>
      </ul>
      <p>Working with experienced surveyors helps overcome these challenges through proper planning and expertise.</p>
      
      <h2>Conclusion</h2>
      <p>Successful land subdivision requires careful planning, professional surveying, and proper documentation. By working with experienced surveyors like Hayagriva Associates, you can ensure a smooth subdivision process that meets all legal requirements and maximizes the value of your land.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[parseInt(id)];

  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  if (!post) {
    return (
      <div className="container-default py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
        <p className="text-slate-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-brand-primary hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Hayagriva Associates Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img src={encodeImagePath(post.img)} alt={post.title} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                {post.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-4.5 0V9.75m-4.5 0V18.75m-4.5 0V9.75m-4.5 0V18.75" />
                  </svg>
                  <span className="text-base">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7.5a2.25 2.25 0 114.5 0M16 7.5h-2.25M16 7.5v.75m0 2.25v.75m0 2.25v.75m-2.25-5.25h-2.25m0 0v.75m0 2.25v.75m0 2.25v.75m0-5.25h-2.25m0 0v.75m0 2.25v.75m0 2.25v.75M8.5 7.5h2.25m-2.25 0v.75m2.25 0v.75m-2.25 2.25h2.25m-2.25 0v.75m2.25 0v.75m-2.25 2.25h2.25m-2.25 0v.75m2.25 0v.75M8.5 7.5v.75m0 2.25v.75m0 2.25v.75m0-5.25h2.25" />
                  </svg>
                  <span className="text-base">{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <AnimatedSection className="py-4 bg-slate-50 border-b border-slate-200">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-slate-600 hover:text-brand-primary transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <Link to="/blog" className="text-slate-600 hover:text-brand-primary transition-colors">Blog</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className="py-12 sm:py-16 bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-8">
                <div 
                  className="blog-content text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="bg-gradient-to-br from-brand-primary/5 to-slate-50 rounded-2xl p-6 border-2 border-brand-primary/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold">
                        HA
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{post.author}</h3>
                        <p className="text-sm text-slate-600">Professional Surveyors</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Expert land surveying services with years of experience in boundary surveys, topographic mapping, and property documentation.
                    </p>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-brand-primary to-brand-primary/90 rounded-2xl p-6 text-white">
                    <h3 className="font-bold text-xl mb-3">Need Survey Services?</h3>
                    <p className="text-sm text-white/90 mb-4 leading-relaxed">
                      Contact us for professional land surveying solutions tailored to your needs.
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Navigation Section */}
      <AnimatedSection className="py-12 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-200 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-all font-semibold shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Blog
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
