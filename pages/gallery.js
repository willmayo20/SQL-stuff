import Header from '../components/Header';

export default function Gallery() {
  const galleryImages = [
    { title: 'Spring Card Show 2025', event: 'Card Show' },
    { title: 'Collector Meet-up', event: 'Community Event' },
    { title: 'Tournament Finals', event: 'Competition' },
    { title: 'New Arrivals Display', event: 'Store Event' },
    { title: 'Grading Workshop', event: 'Educational' },
    { title: 'Community Gathering', event: 'Social' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Event Pictures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-slate-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 text-lg font-semibold">{img.title}</p>
                  <p className="text-slate-500 text-sm">{img.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
