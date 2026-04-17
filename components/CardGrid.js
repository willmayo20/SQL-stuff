import { ShoppingCart } from 'lucide-react';

export default function CardGrid({ cards }) {
  const handleAddToCart = (card) => {
    alert(`Added ${card.name} to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          {/* Card Image */}
          <div className="relative bg-slate-200 h-64 flex items-center justify-center overflow-hidden">
            {card.isNew && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
            )}
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23ddd" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%23999"%3ECard Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Card Details */}
          <div className="p-4">
            <h3 className="font-bold text-lg text-slate-900 truncate">{card.name}</h3>
            <p className="text-sm text-slate-600 mb-3">{card.category}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-amber-600">${card.price.toFixed(2)}</span>
              <button
                onClick={() => handleAddToCart(card)}
                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
