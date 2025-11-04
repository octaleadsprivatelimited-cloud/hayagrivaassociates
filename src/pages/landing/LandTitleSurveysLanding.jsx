import { Helmet } from 'react-helmet-async';

export default function LandTitleSurveysLanding() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Land Title Surveys - Hayagriva Associates</title>
        <meta name="description" content="Land title surveys and documentation support for property transactions." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Land Title Surveys</h1>
      <p className="mt-4 text-slate-700">Dedicated page for title survey requirements and deliverables.</p>
    </div>
  );
}

