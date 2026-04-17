import { useState } from 'react';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid';
import { cards } from '../data/cards';

export default function WaxProducts() {
  const waxCards = cards.filter(c => c.category === 'Other Wax Products');
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Other Wax Products</h1>
        <CardGrid cards={waxCards} />
      </div>
    </div>
  );
}
