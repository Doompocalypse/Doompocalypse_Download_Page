
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Ultra Display",
    description: "Incredibly thin and powerful display with revolutionary design.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    price: "$1,999",
    color: "bg-gray-50",
  },
  {
    id: 2,
    name: "Smart Laptop",
    description: "The most powerful laptop we've ever built with exceptional battery life.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "$2,499",
    color: "bg-gray-100",
  },
  {
    id: 3,
    name: "Innovation Phone",
    description: "Breakthrough camera system with cutting-edge A15 chip.",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "$999",
    color: "bg-gray-50",
  },
];

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
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24 reveal-text"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-gray-100 rounded-full">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Crafted with Precision
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our collection of premium products designed with a perfect balance 
            of innovation and simplicity.
          </p>
        </div>

        {/* Product showcase */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Product image carousel */}
          <div className="w-full md:w-7/12 mb-12 md:mb-0 order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  ref={el => productRefs.current[index] = el}
                  className={cn(
                    "absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 reveal-text",
                    index === activeProduct 
                      ? "opacity-100 z-10 scale-100 translate-x-0" 
                      : "opacity-0 z-0 scale-95 translate-x-10"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center p-8",
                    product.color
                  )}>
                    <img 
                      src={product.imageSrc}
                      alt={product.name}
                      className="max-h-full w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="w-full md:w-4/12 order-1 md:order-2">
            <div className="relative">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "transition-all duration-700",
                    index === activeProduct 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8 absolute top-0 left-0"
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-medium mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <p className="text-xl font-medium mb-6">{product.price}</p>
                  <button className="px-6 py-3 bg-black text-white rounded-full btn-hover hover:shadow-lg transition-shadow duration-300">
                    Learn more
                  </button>
                </div>
              ))}
            </div>

            {/* Product navigation dots */}
            <div className="flex space-x-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={cn(
                    "w-10 h-1 rounded-full transition-all duration-300",
                    index === activeProduct 
                      ? "bg-black" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
