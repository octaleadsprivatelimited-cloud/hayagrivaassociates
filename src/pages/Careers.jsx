import { Helmet } from 'react-helmet-async';
import { createKeywords, defaultLocation } from '../seo/config.js';

export default function Careers() {
  const roles = [
    { title: 'Survey Engineer', location: 'City, State', type: 'Full-time' },
    { title: 'CAD Draftsperson', location: 'City, State', type: 'Contract' },
  ];
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Careers at Hayagriva Associates | Land Surveying Jobs in Mancherial</title>
        <meta
          name="description"
          content="Explore career opportunities with Hayagriva Associates in Mancherial, Telangana. Join our licensed land surveying team for DGPS, CAD drafting, and site documentation roles."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'land surveying jobs Mancherial',
            'DGPS survey careers Telangana',
            'CAD drafting roles',
            `survey employment in ${defaultLocation}`
          )}
        />
      </Helmet>
      <h1 className="text-3xl font-semibold">Careers</h1>
      <div className="mt-6 space-y-4">
        {roles.map((r) => (
          <div key={r.title} className="border rounded p-5">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm text-slate-700">{r.location} • {r.type}</p>
            <button className="mt-3 bg-brand-primary text-white px-3 py-1 rounded">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

