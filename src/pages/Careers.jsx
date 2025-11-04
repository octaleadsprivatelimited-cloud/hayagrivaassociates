import { Helmet } from 'react-helmet-async';

export default function Careers() {
  const roles = [
    { title: 'Survey Engineer', location: 'City, State', type: 'Full-time' },
    { title: 'CAD Draftsperson', location: 'City, State', type: 'Contract' },
  ];
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Careers - Hayagriva Associates</title>
        <meta name="description" content="Open positions at Hayagriva Associates for professional surveyors and support staff." />
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

