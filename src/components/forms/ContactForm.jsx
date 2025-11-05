import { useState } from 'react';

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.service) return 'Please fill in all required fields.';
    const emailOk = /.+@.+\..+/.test(form.email);
    const phoneOk = /^[0-9+\-()\s]{7,}$/.test(form.phone);
    if (!emailOk) return 'Please enter a valid email.';
    if (!phoneOk) return 'Please enter a valid phone number.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) { setStatus({ loading: false, success: null, error }); return; }
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus({ loading: false, success: 'We have received your request. We will contact you shortly.', error: null });
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  const services = [
    // Land Survey Services
    'DGPS Land Survey',
    'Digital Land Survey',
    'DTCP Layouts',
    'Enjoyment Survey',
    'Sub-division',
    'Survey Number Demarcation',
    'Registration Plans & Location Sketch',
    // Permissions & Approvals
    'Municipal & Grampanchayat Building Permission',
    'TS iPASS Approvals',
    // Design Services
    'Vastu Plans / Working Plans',
    'Building Elevation Designs',
    // Other Services
    'Estimation Costing',
    'Property Valuations',
    'Home Loans',
    'Other'
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your full name"
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="your.email@example.com"
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
            required
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+91 1234567890"
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
            Service Inquiry <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={onChange}
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell us about your project requirements..."
            rows="5"
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={status.loading}
        className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Submit Request'
        )}
      </button>
      {status.error && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-medium">{status.error}</p>
        </div>
      )}
      {status.success && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-green-700 text-sm font-medium">{status.success}</p>
        </div>
      )}
    </form>
  );
}
