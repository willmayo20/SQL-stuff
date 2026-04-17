import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-2 border border-slate-300 rounded-lg"></textarea>
            </div>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">Send Message</button>
          </form>
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">contact@liamcards.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600">1-800-CARDS-01</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-600">123 Collector Street<br/>Card City, CC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
