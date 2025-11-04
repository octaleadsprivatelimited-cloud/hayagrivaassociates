export default function TestimonialsWide() {
  const testimonials = [
    {
      name: 'Suresh Natarajan',
      role: 'General Manager - Projects',
      org: 'Codissia Industrial Park Ltd.',
      text: 'We were more than satisfied with the work, communication, and presentation. Completed on time and professionally.'
    },
    {
      name: 'Raj Kumanan',
      role: 'Singapore',
      org: '',
      text: 'They identified the survey numbers and resolved issues despite variations between field and records. Highly recommend.'
    },
    {
      name: 'Venkateswaran N E',
      role: '',
      org: '',
      text: 'Accurate farmland survey in hilly terrain. Helpful team, outputs met requirements fully, reasonable pricing.'
    }
  ];
  return (
    <section className="container-default py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">What Our Customers Say</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="border rounded-xl p-6 bg-white">
            <p className="text-slate-700">“{t.text}”</p>
            <div className="mt-4 text-sm text-slate-600">
              <div className="font-medium">{t.name}</div>
              {(t.role || t.org) && <div>{[t.role, t.org].filter(Boolean).join(' - ')}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

