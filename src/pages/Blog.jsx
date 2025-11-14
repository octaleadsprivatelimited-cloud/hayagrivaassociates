import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import VideoHero from '../components/VideoHero.jsx';
import { createKeywords, defaultLocation } from '../seo/config.js';

export default function Blog() {
  const encodeImagePath = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  const blogPosts = [
    {
      id: 1,
      date: '15 Jan 2025',
      category: 'Survey Tips',
      title: 'Importance of Boundary Surveys for Property',
      excerpt: 'Understanding why boundary surveys are crucial for property owners and how they help prevent disputes and legal issues.',
      img: '/images/Boundary Survey.webp',
      readTime: '5 min read'
    },
    {
      id: 2,
      date: '10 Jan 2025',
      category: 'Technology',
      title: 'Latest Technology in Land Surveying',
      excerpt: 'Explore how modern DGPS, digital mapping, and GIS technologies are revolutionizing the land surveying industry.',
      img: '/images/Digital Land Survey.avif',
      readTime: '7 min read'
    },
    {
      id: 3,
      date: '5 Jan 2025',
      category: 'Survey Types',
      title: 'When Do You Need a Topographic Survey?',
      excerpt: 'Learn about topographic surveys, their applications, and when they are required for construction and development projects.',
      img: '/images/Topographic Survey.webp',
      readTime: '6 min read'
    },
    {
      id: 4,
      date: '28 Dec 2024',
      category: 'Legal',
      title: 'DTCP Layouts: Understanding Approval Process',
      excerpt: 'A comprehensive guide to DTCP layouts, approval requirements, and how professional surveys facilitate the process.',
      img: '/images/DTCP Layouts.webp',
      readTime: '8 min read'
    },
    {
      id: 5,
      date: '20 Dec 2024',
      category: 'Survey Types',
      title: 'Enjoyment Survey: What You Need to Know',
      excerpt: 'Understanding enjoyment surveys and how they help assess actual land usage versus official records.',
      img: '/images/Enjoyment Survey.avif',
      readTime: '5 min read'
    },
    {
      id: 6,
      date: '12 Dec 2024',
      category: 'Survey Tips',
      title: 'Land Subdivision: Planning and Execution',
      excerpt: 'Essential information about land subdivision processes, documentation requirements, and professional surveying services.',
      img: '/images/Sub-division.webp',
      readTime: '6 min read'
    },
    {
      id: 7,
      date: '3 Jan 2025',
      category: 'Approvals',
      title: 'TS iPASS Approvals: Complete Guide',
      excerpt: 'Understanding the TS iPASS approval process for industrial and commercial projects in Telangana.',
      img: '/images/service-1.jpeg',
      readTime: '7 min read'
    },
    {
      id: 8,
      date: '25 Dec 2024',
      category: 'Design',
      title: 'Vastu-Compliant Plans: Benefits and Process',
      excerpt: 'Learn how Vastu-compliant architectural plans can enhance your property and the process of creating them.',
      img: '/images/Vastu Plans  Working Plans.jpeg',
      readTime: '6 min read'
    },
    {
      id: 9,
      date: '18 Dec 2024',
      category: 'Design',
      title: 'Building Elevation Design: Modern Trends',
      excerpt: 'Explore contemporary building elevation design trends and how they enhance property aesthetics and value.',
      img: '/images/Building Elevation Designs.jpeg',
      readTime: '5 min read'
    },
    {
      id: 10,
      date: '10 Dec 2024',
      category: 'Construction',
      title: 'Construction Cost Estimation: Key Factors',
      excerpt: 'Understanding the essential factors that influence construction cost estimation and budget planning.',
      img: '/images/Estimation Costing.jpeg',
      readTime: '6 min read'
    },
    {
      id: 11,
      date: '2 Dec 2024',
      category: 'Property',
      title: 'Property Valuation: When and Why You Need It',
      excerpt: 'Discover when property valuation is required and how it helps in property transactions and legal matters.',
      img: '/images/Property Valuations.jpeg',
      readTime: '5 min read'
    },
    {
      id: 12,
      date: '28 Nov 2024',
      category: 'Finance',
      title: 'Home Loan Application: Documentation Guide',
      excerpt: 'Complete guide to home loan application process and required documentation for property purchase.',
      img: '/images/Home Loans.jpeg',
      readTime: '7 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Land Surveying Blog | Hayagriva Associates Insights from Mancherial</title>
        <meta
          name="description"
          content="Read the Hayagriva Associates blog for expert advice on land surveying, boundary demarcation, DTCP approvals, DGPS technology and property development in Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'land surveying blog',
            'surveying tips Telangana',
            'DTCP approval guidance',
            'boundary dispute insights',
            `surveying news ${defaultLocation}`
          )}
        />
      </Helmet>

      {/* Hero Section */}
      <VideoHero className="h-[50vh] sm:h-[60vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container-default w-full">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Our Blog
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Stay informed with the latest insights on land surveying, property boundaries, 
              legal requirements, and industry best practices.
            </p>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert insights and updates on land surveying topics
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border-2 border-slate-200 rounded-2xl bg-white hover:border-brand-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={encodeImagePath(post.img)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Professional Surveying Services?
            </h2>
            <p className="text-slate-600 mb-6">
              Contact us today for accurate, reliable land surveying solutions tailored to your needs.
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
