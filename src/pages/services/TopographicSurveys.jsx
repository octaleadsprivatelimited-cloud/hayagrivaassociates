import { Helmet } from 'react-helmet-async';

export default function TopographicSurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Topographic Surveys - Hayagriva Associates</title>
        <meta name="description" content="Topographic surveys with contours and elevations for planning and design." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Topographic Surveys</h1>
      <p className="mt-4 text-slate-700">Detailed terrain mapping for architects, engineers, and developers.</p>
    </div>
  );
}

