import { Helmet } from 'react-helmet-async';
import { createKeywords, defaultLocation } from '../seo/config.js';

export default function Pricing() {
  const tiers = [
    { name: 'Basic', price: '₹9,999', features: ['Boundary check', 'Site visit', 'Report'] },
    { name: 'Standard', price: '₹19,999', features: ['Plot demarcation', 'Boundary markers', 'Report & drawings'] },
    { name: 'Professional', price: '₹34,999', features: ['Topographic survey', 'CAD drawings', 'Consultation'] },
  ];
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Land Survey Pricing | Hayagriva Associates Mancherial</title>
        <meta
          name="description"
          content="Review transparent pricing from Hayagriva Associates for boundary surveys, plot demarcation, topographic mapping and DGPS services in Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'land survey pricing Telangana',
            'boundary survey cost Mancherial',
            'DGPS survey rates',
            `plot demarcation pricing in ${defaultLocation}`
          )}
        />
      </Helmet>
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tiers.map((t) => (
          <div key={t.name} className="border rounded p-6">
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-2xl mt-2">{t.price}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <button className="mt-4 bg-brand-primary text-white px-4 py-2 rounded hover:bg-brand-primary/90">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

