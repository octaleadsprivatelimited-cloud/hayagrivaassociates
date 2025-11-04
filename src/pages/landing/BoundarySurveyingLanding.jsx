import { Helmet } from 'react-helmet-async';

export default function BoundarySurveyingLanding() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Boundary Surveying - Hayagriva Associates</title>
        <meta name="description" content="Boundary surveying to define legal property lines and avoid disputes." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Boundary Surveying</h1>
      <p className="mt-4 text-slate-700">Dedicated page explaining boundary surveys and how we help resolve disputes.</p>
    </div>
  );
}

