import { Helmet } from 'react-helmet-async';

export default function TopographicSurveysLanding() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Topographic Surveying - Hayagriva Associates</title>
        <meta name="description" content="Topographic surveying services for contours and elevation mapping." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Topographic Surveying</h1>
      <p className="mt-4 text-slate-700">Details about topographic workflows, instruments, and outputs.</p>
    </div>
  );
}

