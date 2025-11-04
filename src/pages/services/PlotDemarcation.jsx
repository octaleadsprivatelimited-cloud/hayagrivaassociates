import { Helmet } from 'react-helmet-async';

export default function PlotDemarcation() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Plot Demarcation - Hayagriva Associates</title>
        <meta name="description" content="Accurate plot demarcation services for subdivision and legal compliance." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Plot Demarcation</h1>
      <p className="mt-4 text-slate-700">Precision marking and subdivision of plots with detailed plans and markers.</p>
    </div>
  );
}

