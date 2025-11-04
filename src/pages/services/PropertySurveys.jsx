import { Helmet } from 'react-helmet-async';

export default function PropertySurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Property Surveys - Hayagriva Associates</title>
        <meta name="description" content="Comprehensive property surveys for ownership, transactions, and development." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Property Surveys</h1>
      <p className="mt-4 text-slate-700">Reliable property surveys for due diligence and development planning.</p>
    </div>
  );
}

