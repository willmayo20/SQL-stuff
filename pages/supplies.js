import Header from '../components/Header';
import CardGrid from '../components/CardGrid';
import { cards } from '../data/cards';

export default function Supplies() {
  const suppliesCards = cards.filter(c => c.category === 'Supplies');
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Supplies</h1>
        <CardGrid cards={suppliesCards} />
      </div>
    </div>
  );
}
