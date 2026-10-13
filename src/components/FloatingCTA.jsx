import { site, whatsappUrl } from '../config/site.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';
export default function FloatingCTA() {
  const waUrl = whatsappUrl();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waUrl}
        data-tracking-location="floating"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="rounded-full bg-[#25d366] hover:bg-[#20c45c] text-[#073b25] w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
      <a href={`tel:${site.phone}`} data-tracking-location="floating" aria-label="Call Hayagriva Associates" className="rounded-full bg-[#155eef] hover:bg-[#124fd1] text-white w-12 h-12 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-1.21.038 12.035 12.035 0 01-3.51-3.51.75.75 0 01.038-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.962 3.352a1.125 1.125 0 00-1.09-.852H4.5A2.25 2.25 0 002.25 4.75v2z"/></svg>
      </a>
    </div>
  );
}

