
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [{
  id: 1,
  name: "Ultra Display",
  description: "Incredibly thin and powerful display with revolutionary design.",
  imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  price: "$1,999",
  color: "bg-gray-50"
}, {
  id: 2,
  name: "Smart Laptop",
  description: "The most powerful laptop we've ever built with exceptional battery life.",
  imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  price: "$2,499",
  color: "bg-gray-100"
}, {
  id: 3,
  name: "Innovation Phone",
  description: "Breakthrough camera system with cutting-edge A15 chip.",
  imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  price: "$999",
  color: "bg-gray-50"
}];

const ProductDisplay = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each product
    productRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-rotate through products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="container px-4 mx-auto">
        <h2 
          ref={sectionRef} 
          className="text-4xl font-bold mb-12 text-center opacity-0 transition-opacity duration-1000 ease-in-out"
        >
          Featured Products
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className={cn(
                "bg-neutral-900 rounded-xl p-6 transition-all duration-500 opacity-0 transform translate-y-8",
                index === activeProduct && "ring-2 ring-red-500"
              )}
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.imageSrc} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">{product.price}</span>
                <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
