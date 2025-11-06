export default function CTASection() {
  return (
    <section className="container-default py-16">
      <div className="rounded-2xl p-8 bg-gradient-to-r from-brand-primary to-brand-primary/70 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Providing high quality and affordable services</h3>
          <p className="text-white/90 mt-1">Share your details—we’ll respond shortly with an accurate, firm estimate.</p>
        </div>
        <div className="flex gap-3">
          <a href="/contact" className="bg-white text-brand-primary px-4 py-2 rounded">Let’s Talk</a>
          <a href="tel:+919177887049" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-white">Call Us</a>
        </div>
      </div>
    </section>
  );
}

