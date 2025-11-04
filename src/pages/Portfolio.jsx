import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
  return (
    <div className="container-default py-12">
      <Helmet>
        <title>Portfolio - Hayagriva Associates</title>
        <meta name="description" content="Past surveying projects: boundary resolution, plot demarcation, topographic mapping, and site surveys." />
      </Helmet>
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {[
          { label: 'Topographic Survey', value: '18' },
          { label: 'Boundary Survey', value: '25' },
          { label: 'Setting-Out Survey', value: '15' },
          { label: 'Subdivision & Layout', value: '12' },
          { label: 'Earthwork Volume', value: '9' },
          { label: 'As-Built Survey', value: '7' },
        ].map((stat) => (
          <div key={stat.label} className="border rounded-lg p-4">
            <div className="text-2xl font-semibold">{stat.value}</div>
            <div className="text-xs text-slate-600 mt-1">{stat.label} Projects</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="border rounded overflow-hidden">
            <img src={`https://picsum.photos/seed/s${i}/600/360.webp`} alt="Project" loading="lazy" className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Survey Project #{i}</h3>
              <p className="text-sm text-slate-600">Brief description of the surveying work and outcome.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

