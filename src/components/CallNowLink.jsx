import { PhoneIcon } from '@heroicons/react/24/outline';
import { site } from '../config/site.js';

export default function CallNowLink({ className = '', placement = 'primary', service }) {
  return (
    <a
      href={`tel:${site.phone}`}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      data-tracking-location={placement}
      data-service={service}
    >
      <PhoneIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
      Call Now
    </a>
  );
}
