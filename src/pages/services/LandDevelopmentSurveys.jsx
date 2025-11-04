import { Helmet } from 'react-helmet-async';

export default function LandDevelopmentSurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Land Development Surveys - Hayagriva Associates</title>
        <meta name="description" content="Surveys for land development projects, planning, and approvals." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Land Development Surveys</h1>
      <p className="mt-4 text-slate-700">End-to-end survey support for land development and approvals.</p>
    </div>
  );
}

