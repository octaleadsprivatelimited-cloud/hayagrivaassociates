import { Helmet } from 'react-helmet-async';

export default function ConstructionSiteSurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Construction Site Surveys - Hayagriva Associates</title>
        <meta name="description" content="Setting out, as-built, and monitoring surveys for construction sites." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Construction Site Surveys</h1>
      <p className="mt-4 text-slate-700">Accurate site surveys to support construction from start to finish.</p>
    </div>
  );
}

