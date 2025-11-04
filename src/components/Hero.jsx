import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ContactForm from './forms/ContactForm.jsx';

export default function Hero() {
  const slides = useMemo(() => [
    { src: '/images/Hero1.avif', alt: 'Professional land surveying services' },
    { src: '/images/hero2.jpg', alt: 'Surveyor with total station' },
    { src: '/images/hero3.jpg', alt: 'Topographic mapping' }
  ], []);

  const encodeImagePath = (path) => {
    // Split path and encode only the filename part
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  };

  return (
    <section className="relative">
      <div className="h-[60vh] sm:h-[72vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="h-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <img src={encodeImagePath(s.src)} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
              <div className="absolute inset-0 container-default flex items-center">
                <div className="max-w-3xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Professional Land Survey Services in Mancherial</h1>
                  <p className="mt-4 text-white/90 text-base sm:text-lg">Accurate boundary surveys, plot demarcation, topographic & construction surveys with reliable reports.</p>
                  <div className="mt-6 flex gap-3">
                    <a href="/contact" className="rounded-lg px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white shadow">Get a Quote</a>
                    <a href="/about" className="rounded-lg px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30">Know About Us</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Embedded contact card */}
      <div className="container-default relative z-10">
        <div className="-mt-20 sm:-mt-28 max-w-xl bg-white rounded-2xl shadow-xl p-6 border border-slate-100 mx-auto">
          <h2 className="text-xl font-semibold">Request a Consultation</h2>
          <p className="text-sm text-slate-600 mb-4">Get in touch for land surveying and boundary solutions.</p>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}

