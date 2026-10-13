import { Link } from 'react-router-dom';

export default function NotFound() {
  return <div className="container-default py-20"><h1 className="text-3xl font-semibold">Page not found</h1><p className="mt-4">Explore our surveying services or contact the team for help.</p><Link to="/services" className="inline-block mt-6 text-brand-primary underline">Explore services</Link></div>;
}
