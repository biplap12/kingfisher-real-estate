import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import slides from "../../data/hero";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ApartmentCard from "./ApartmentCard";

// Sample slides data
const ApartmentCards = [
  {
    title: "Luxury City Apartment",
    location: "Kathmandu, Nepal",
    price: "Rs. 45,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "1350 sqft",
    imageUrl: "/gallery/bg.jpg",

  },
  {
    title: "Modern Villa",
    location: "Kathmandu, Nepal",
    price: "Rs. 75,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "2000 sqft",
    imageUrl: "/gallery/bg2.jpg",
  },
  {
    title: "Cozy Studio Apartment",

    location: "Kathmandu, Nepal",
    price: "Rs. 30,000",
    bedrooms: 1,
    bathrooms: 1,
    size: "800 sqft",
    imageUrl: "/gallery/img1.jpg",
  },
];

const PropertyTypes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden group">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center right-0 z-20 p-8 pb-20">
          <div className="max-w-4xl mx-auto text-white">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                Apartments & Villas
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl font-light leading-relaxed">
                <Breadcrumbs />
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Auto-play Control */}
        <button
          onClick={() => setIsAutoPlaying((prev) => !prev)}
          className="absolute bottom-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
        {/* Apartment Cards */}
      </div>
      <div className=" w-full max-w-7xl px-4 mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ApartmentCards.map((card, index) => (
            <ApartmentCard
              key={index}
              title={card.title}
              location={card.location}
              price={card.price}
              bedrooms={card.bedrooms}
              bathrooms={card.bathrooms}
              size={card.size}
              imageUrl={card.imageUrl}
              price={card.price}
              size={card.size}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyTypes;
