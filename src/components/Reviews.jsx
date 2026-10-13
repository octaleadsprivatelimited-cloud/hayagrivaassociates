import { useState } from 'react';
import { reviews } from '../config/reviews.js';

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  return <div className="customer-reviews">
    <div className="reviews-viewport" role="region" aria-label="Customer feedback">
      <div className="reviews-track" data-paused={paused}>
        {[...reviews, ...reviews].map((review, index) => <figure key={`${review.name}-${index}`}
          className={`review-card${index >= reviews.length ? ' review-copy' : ''}`} aria-hidden={index >= reviews.length ? true : undefined}>
          <span className="review-quotation" aria-hidden="true">“</span>
          <blockquote>{review.text}</blockquote>
          <figcaption><span aria-hidden="true" className="review-initial">{review.name[0]}</span><strong>{review.name}</strong></figcaption>
        </figure>)}
      </div>
    </div>
    <button type="button" className="reviews-control" aria-label={paused ? 'Resume automatic reviews' : 'Pause automatic reviews'}
      aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Play' : 'Pause'}</button>
  </div>;
}
