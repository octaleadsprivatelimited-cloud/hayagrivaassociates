import { Helmet } from 'react-helmet-async';

export default function PlotDemarcationLanding() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Plot Demarcation - Hayagriva Associates</title>
        <meta name="description" content="Specialized plot demarcation for clear subdivision and markers." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Plot Demarcation</h1>
      <p className="mt-4 text-slate-700">Case studies and examples of plot demarcation work.</p>
    </div>
  );
}

