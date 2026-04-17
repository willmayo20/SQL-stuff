import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid';
import { cards, categories } from '../data/cards';

export default function Home() {
  const router = useRouter();
  const { category } = router.query;
  const [filteredCards, setFilteredCards] = useState(cards);
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  useEffect(() => {
    if (category === 'New Arrivals') {
      setFilteredCards(cards.filter(card => card.isNew));
      setSelectedCategory('New Arrivals');
    } else if (category && category !== 'All') {
      setFilteredCards(cards.filter(card => card.category === category));
      setSelectedCategory(category);
    } else {
      setFilteredCards(cards);
      setSelectedCategory('All');
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LIAM CARDS</h1>
          <p className="text-xl text-slate-200">Premium Trading Cards & Collectibles</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setFilteredCards(cards);
                setSelectedCategory('All');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-900 border border-slate-300 hover:border-slate-900'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (cat === 'New Arrivals') {
                    setFilteredCards(cards.filter(c => c.isNew));
                  } else {
                    setFilteredCards(cards.filter(c => c.category === cat));
                  }
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 border border-slate-300 hover:border-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </h2>
        {filteredCards.length > 0 ? (
          <CardGrid cards={filteredCards} />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No cards found in this category.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LIAM CARDS</h3>
              <p className="text-slate-400">Your premier destination for collectible trading cards.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="/?category=Football" className="hover:text-white">Football</a></li>
                <li><a href="/?category=Basketball" className="hover:text-white">Basketball</a></li>
                <li><a href="/?category=Baseball" className="hover:text-white">Baseball</a></li>
                <li><a href="/?category=Pokémon" className="hover:text-white">Pokémon</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/events" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2026 LIAM CARDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
