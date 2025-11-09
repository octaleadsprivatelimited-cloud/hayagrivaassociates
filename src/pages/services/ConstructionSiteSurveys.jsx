import { Helmet } from 'react-helmet-async';
import { createKeywords, defaultLocation } from '../../seo/config.js';

export default function ConstructionSiteSurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Construction Site Surveys in Mancherial | Hayagriva Associates</title>
        <meta
          name="description"
          content="Hayagriva Associates provides construction site layout, setting-out, monitoring and as-built surveys for builders and infrastructure projects across Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'construction survey Mancherial',
            'site layout surveying',
            'as-built survey Telangana',
            `construction monitoring in ${defaultLocation}`
          )}
        />
      </Helmet>
      <h1 className="text-3xl font-semibold">Construction Site Surveys</h1>
      <p className="mt-4 text-slate-700">Accurate site surveys to support construction from start to finish.</p>
    </div>
  );
}

