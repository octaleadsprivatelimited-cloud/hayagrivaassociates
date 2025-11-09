import { Helmet } from 'react-helmet-async';
import { createKeywords, defaultLocation } from '../../seo/config.js';

export default function BoundarySurveys() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Boundary Surveys in Mancherial | Hayagriva Associates</title>
        <meta
          name="description"
          content="Hayagriva Associates provides licensed boundary survey services in Mancherial, Telangana to establish legal property lines, resolve disputes and deliver defensible documentation."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'boundary survey Mancherial',
            'property line demarcation Telangana',
            'legal boundary documentation',
            `boundary disputes ${defaultLocation}`
          )}
        />
      </Helmet>
      <h1 className="text-3xl font-semibold">Boundary Surveys</h1>
      <p className="mt-4 text-slate-700">We establish and verify boundary lines with legal-grade accuracy and documentation.</p>
    </div>
  );
}

