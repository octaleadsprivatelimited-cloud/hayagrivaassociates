import { Helmet } from 'react-helmet-async';

export default function LandSurveying() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Land Surveying - Hayagriva Associates</title>
        <meta name="description" content="Professional land surveying services for accurate measurements and mapping." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Land Surveying</h1>
      <p className="mt-4 text-slate-700">We provide precise land surveying for projects of all sizes, ensuring accurate documentation and mapping.</p>
    </div>
  );
}

