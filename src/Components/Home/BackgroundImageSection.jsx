<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import { useBannerHeight } from "../../Context/BannerHeightContext";

const Hero1 = () => {
  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();
  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      data-theme="dark"
      className="relative w-full h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65501639-0-Desktop-Header-.jpg")',
      }}
      ref={bannerRef}
    >
      {/* Center Text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
  font-bold text-white tracking-wide uppercase leading-tight 
  text-center px-4 sm:px-10 md:px-16 lg:px-24 py-8 z-10 heading-font"
      >
        <h1 className="text-white mb-2 sm:mb-4">Your Dream House</h1>
        <h2 className="text-white">Becoming True</h2>
      </div>

      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default Hero1;
=======
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import slides from "../../data/hero";
import AbcPage from "../abc";
import OurStorySlider from "./OurStorySlider";

const HeroCarousel = () => {
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

  // const goToSlide = (index) => {
  //   if (index >= 0 && index < slides.length) {
  //     setCurrentSlide(index);
  //   }
  // };

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
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-20">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold text-center"> Title</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              accusantium deleniti dolores soluta illo rerum quas asperiores.
              Rerum labore eius debitis nihil quidem odio at, esse hic,
              temporibus molestiae in!
            </p>
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
      </div>
      <OurStorySlider />
    </>
  );
};

export default HeroCarousel;
>>>>>>> origin/dev_biplap
