export default function ClientsStrip() {
  const clients = [
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+1',
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+2',
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+3',
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+4',
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+5',
    'https://dummyimage.com/120x40/ddd/222.png&text=Client+6',
  ];
  return (
    <section className="bg-white">
      <div className="container-default py-10">
        <div className="text-center text-sm text-slate-500">Trusted by clients</div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center opacity-70">
          {clients.map((src, i) => (
            <img key={i} src={src} alt="Client" loading="lazy" className="h-8 object-contain grayscale" />
          ))}
        </div>
      </div>
    </section>
  );
}

