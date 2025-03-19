
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1536243289408-7671af8a630c?q=80&w=1924&auto=format&fit=crop",
      title: "Get a Crypto Wallet",
      description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1621501103258-3e190133e076?q=80&w=1780&auto=format&fit=crop",
      title: "Grab Some Doomcoin",
      description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1780&auto=format&fit=crop",
      title: "Download Game",
      description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1510266001953-7bbfc5e78a95?q=80&w=1784&auto=format&fit=crop",
      title: "Gather Some Courage",
      description: "Lorem ipsum dolor si consctur adipicing elit Nullam lacat elit se qis tinunt mis.",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-4">Play. Earn. Repeat</h2>
        <p className="text-xl text-white mb-12">The Future Of Gaming Is Here</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
