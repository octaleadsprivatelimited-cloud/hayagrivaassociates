import { Helmet } from 'react-helmet-async';

export default function LandSurveyingLanding() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Land Surveying Services - Hayagriva Associates</title>
        <meta name="description" content="Dedicated land surveying services with modern instruments and experienced teams." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Land Surveying Services</h1>
      <p className="mt-4 text-slate-700">A focused overview of our land surveying capabilities and process.</p>
    </div>
  );
}

