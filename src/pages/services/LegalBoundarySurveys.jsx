import { Helmet } from 'react-helmet-async';

export default function LegalBoundarySurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Legal Boundary Surveys - Hayagriva Associates</title>
        <meta name="description" content="Legal boundary surveys with documentation for titles and dispute resolution." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Legal Boundary Surveys</h1>
      <p className="mt-4 text-slate-700">Legal-grade surveys and documentation for land titles and disputes.</p>
    </div>
  );
}

