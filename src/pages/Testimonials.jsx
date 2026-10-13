import Reviews from '../components/Reviews.jsx';
import { reviewSnapshot } from '../config/reviews.js';
import { site } from '../config/site.js';
import { Helmet } from 'react-helmet-async';
import { createKeywords, defaultLocation } from '../seo/config.js';

export default function Testimonials() {

  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Client Testimonials | Hayagriva Associates Land Surveyors Mancherial</title>
        <meta
          name="description"
          content="Hear from Hayagriva Associates clients about boundary surveys, DGPS mapping and land development support delivered across Mancherial, Telangana."
        />
        <meta
          name="keywords"
          content={createKeywords(
            'land survey testimonials',
            'client reviews Mancherial surveyors',
            'DGPS service feedback',
            `survey company reputation in ${defaultLocation}`
          )}
        />
      </Helmet>
      <h1 className="text-3xl font-semibold">Client Reviews</h1>
      <p className="mt-4">Google Maps: {reviewSnapshot.rating}/5 from {reviewSnapshot.count} reviews, checked {reviewSnapshot.checked}. <a href={site.maps} target="_blank" rel="noopener noreferrer" className="underline">Read the full reviews on Google Maps</a>.</p>
      <div className="mt-6"><Reviews /></div>
    </div>
  );
}

