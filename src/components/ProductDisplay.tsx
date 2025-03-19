
import React from "react";

const products = [
  {
    id: 1,
    name: "Get a Crypto Wallet",
    description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    imageSrc: "https://images.unsplash.com/photo-1536243289408-7671af8a630c?q=80&w=1924&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Grab Some Doomcoin",
    description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    imageSrc: "https://images.unsplash.com/photo-1621501103258-3e190133e076?q=80&w=1780&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Download Game",
    description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    imageSrc: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1780&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Gather Some Courage",
    description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    imageSrc: "https://images.unsplash.com/photo-1510266001953-7bbfc5e78a95?q=80&w=1784&auto=format&fit=crop",
  }
];

const ProductDisplay = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-4 reveal-text">Play. Earn. Repeat</h2>
        <p className="text-xl text-white mb-12 reveal-text">The Future Of Gaming Is Here</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-zinc-900 rounded-lg overflow-hidden reveal-text">
              <div className="aspect-square">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
