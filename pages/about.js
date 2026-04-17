import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Liam Cards</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            Welcome to Liam Cards, your premier destination for collectible trading cards and premium card products. Since our founding, we've been dedicated to serving the passionate collector community with authentic, graded, and rare cards from all major sports and trading card categories.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-700 mb-6">
            To provide collectors with the highest quality trading cards, supplies, and community experiences while maintaining the integrity and passion of card collecting.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <ul className="text-lg text-slate-700 space-y-3 mb-6">
            <li>✓ Professional graded cards from PSA, BGS, and CGC</li>
            <li>✓ Rare vintage and modern cards</li>
            <li>✓ Complete supplies for collectors and enthusiasts</li>
            <li>✓ Exclusive apparel and merchandise</li>
            <li>✓ Regular events and community gatherings</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
          <p className="text-lg text-slate-700">
            With years of experience in the collectibles industry, we pride ourselves on authenticity, fair pricing, and exceptional customer service. Every card in our inventory is verified for authenticity and quality.
          </p>
        </div>
      </div>
    </div>
  );
}
