import { Helmet } from 'react-helmet-async';

export default function Testimonials() {
  const items = [
    { name: 'Client A', text: 'Professional and accurate surveying. Highly recommended.' },
    { name: 'Client B', text: 'Resolved boundary issues quickly with clear documentation.' },
    { name: 'Client C', text: 'Topographic survey helped our project planning immensely.' },
  ];
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Testimonials - Hayagriva Associates</title>
        <meta name="description" content="What clients say about our land surveying and boundary services." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((t, i) => (
          <div key={i} className="border rounded p-6">
            <p className="text-slate-700">“{t.text}”</p>
            <p className="mt-3 text-sm text-slate-500">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

