import { Helmet } from 'react-helmet-async';

export default function BoundarySurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Boundary Surveys - Hayagriva Associates</title>
        <meta name="description" content="Boundary survey services to establish legal property lines and resolve disputes." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Boundary Surveys</h1>
      <p className="mt-4 text-slate-700">We establish and verify boundary lines with legal-grade accuracy and documentation.</p>
    </div>
  );
}

