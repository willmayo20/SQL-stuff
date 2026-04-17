import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      {/* Top Navigation */}
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold text-amber-400">
            LIAM CARDS
          </Link>

          {/* Main Categories */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/?category=New Arrivals" className="hover:text-amber-400">New Arrivals</Link>
            <div className="group relative">
              <button className="hover:text-amber-400">Football ▼</button>
            </div>
            <div className="group relative">
              <button className="hover:text-amber-400">Basketball ▼</button>
            </div>
            <div className="group relative">
              <button className="hover:text-amber-400">Hockey ▼</button>
            </div>
            <div className="group relative">
              <button className="hover:text-amber-400">Baseball ▼</button>
            </div>
            <div className="group relative">
              <button className="hover:text-amber-400">Pokémon ▼</button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search cards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm w-48 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
            <button className="hover:text-amber-400"><User size={20} /></button>
            <button className="relative hover:text-amber-400">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-6">
          <Link href="/wax-products" className="hover:text-amber-400">Other Wax Products</Link>
          <Link href="/supplies" className="hover:text-amber-400">Supplies</Link>
          <Link href="/apparel" className="hover:text-amber-400">Apparel</Link>
          <Link href="/events" className="hover:text-amber-400">Upcoming Events</Link>
          <Link href="/gallery" className="hover:text-amber-400">Event Pictures</Link>
          <Link href="/about" className="hover:text-amber-400">About Us</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
