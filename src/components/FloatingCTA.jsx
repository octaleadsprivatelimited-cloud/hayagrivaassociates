import { useMemo, useState } from 'react';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  const services = useMemo(() => [
    { label: 'DGPS', text: 'DGPS Land Survey' },
    { label: 'DTCP', text: 'DTCP Layouts' },
    { label: 'Enjoy', text: 'Enjoyment Survey' },
    { label: 'Demarc', text: 'Survey Number Demarcation' },
    { label: 'Road', text: 'Road Survey' },
    { label: 'Reg', text: 'Registration Plans & Location Sketch' },
    { label: 'Permit', text: 'Municipal & Grampanchayat Building Permission' },
    { label: 'TS iPASS', text: 'TS iPASS Approvals' },
    { label: 'Vastu', text: 'Vastu Plans / Working Plans' },
    { label: 'Elevation', text: 'Building Elevation Designs' },
    { label: 'Estimate', text: 'Estimation Costing' },
    { label: 'Valuation', text: 'Property Valuations' },
    { label: 'Loans', text: 'Home Loans' },
  ], []);

  const handleSelect = (serviceText) => {
    const message = `Hello Hayagriva Associates 👋

I am interested in: ${serviceText}

Name:
Location:
Project Details:`;
    const url = `https://wa.me/919966139588?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-2 w-72 sm:w-80 bg-white border-2 border-slate-200 rounded-2xl shadow-xl p-3">
          <div className="text-sm font-semibold text-slate-800 mb-2">Select a service</div>
          <div className="grid grid-cols-3 gap-3">
            {services.map((s) => (
              <button
                key={s.text}
                onClick={() => handleSelect(s.text)}
                className="group flex flex-col items-center gap-2"
              >
                <span className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-200 group-hover:border-emerald-400 group-hover:bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                  {s.label}
                </span>
                <span className="text-[11px] text-slate-600 text-center leading-tight">{s.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.6-6.002C.144 5.281 5.36 0 12.072 0c3.181 0 6.167 1.24 8.413 3.488a11.79 11.79 0 013.5 8.401c-.003 6.713-5.317 11.928-11.985 11.928a11.95 11.95 0 01-6.083-1.611L.057 24zM6.68 20.013c1.676.995 3.276 1.591 5.392 1.593 5.448.003 9.906-4.451 9.909-9.9.002-5.462-4.415-9.89-9.881-9.893-5.455-.003-9.91 4.449-9.913 9.9-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.746-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </button>

      <a href="tel:+919966139588" className="rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white w-12 h-12 flex items-center justify-center shadow-lg" aria-label="Call">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-1.21.038 12.035 12.035 0 01-3.51-3.51.75.75 0 01.038-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.962 3.352a1.125 1.125 0 00-1.09-.852H4.5A2.25 2.25 0 002.25 4.75v2z"/></svg>
      </a>
    </div>
  );
}

