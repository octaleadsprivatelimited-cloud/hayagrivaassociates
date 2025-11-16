import { Link } from 'react-router-dom';

export default function PageHidden({ title = 'This page' }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center border-2 border-slate-200 rounded-3xl p-10 sm:p-14 shadow-xl bg-white">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.4em] mb-4">
            Temporarily Unavailable
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {title} is currently hidden
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We&apos;re refreshing this section behind the scenes. Please check back soon or reach out to our team
            if you need more information right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Go to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

