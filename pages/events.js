import Header from '../components/Header';

export default function Events() {
  const upcomingEvents = [
    { date: 'May 10, 2026', title: 'Spring Card Show', location: 'Convention Center' },
    { date: 'June 15, 2026', title: 'Grading Workshop', location: 'Liam Cards HQ' },
    { date: 'July 20, 2026', title: 'Summer Collector Meet-up', location: 'Downtown Park' },
    { date: 'August 5, 2026', title: 'Trading Card Tournament', location: 'Convention Center' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <div className="grid gap-6">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600 mb-1">📅 {event.date}</p>
                  <p className="text-slate-600">📍 {event.location}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
