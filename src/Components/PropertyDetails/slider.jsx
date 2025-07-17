// // import { useRef, useLayoutEffect, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const images = [
// //   {
// //     img: "/gallery/img1.jpg",
// //     title: "Exclusive Listings",
// //     description: "This is the description for slide 1.",
// //   },
// //   {
// //     img: "/gallery/img2.jpg",
// //     title: "Sold Listings",
// //     description: "This is the description for slide 2.",
// //   },
// //   {
// //     img: "/gallery/img3.jpg",
// //     title: "Exclusive Listings",
// //     description: "This is the description for slide 3.",
// //   },
// //   {
// //     img: "/gallery/img4.jpg",
// //     title: "Sold Listings",
// //     description: "This is the description for slide 4.",
// //   },
// // ];

// // export default function HorizontalSlider() {
// //   const trackRef = useRef(null);
// //   const containerRef = useRef(null);
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   useLayoutEffect(() => {
// //     if (!isLoaded) return;

// //     const ctx = gsap.context(() => {
// //       const slides = trackRef.current.children;
// //       const totalWidth = Array.from(slides).reduce(
// //         (acc, slide) => acc + slide.offsetWidth,
// //         0
// //       );

// //       const scrollLength = totalWidth - window.innerWidth;

// //       gsap.to(trackRef.current, {
// //         x: () => `-${scrollLength}`,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top top",
// //           end: () => `+=${scrollLength}`,
// //           scrub: true,
// //           pin: true,
// //           anticipatePin: 1,
// //           invalidateOnRefresh: true,
// //         },
// //       });

// //       // Refresh ScrollTrigger after images load
// //       ScrollTrigger.refresh();
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, [isLoaded]);

// //   // Handle image loading
// //   const handleImageLoad = () => {
// //     if (trackRef.current) {
// //       const images = trackRef.current.querySelectorAll("img");
// //       const loaded = Array.from(images).every((img) => img.complete);
// //       if (loaded) setIsLoaded(true);
// //     }
// //   };

// //   return (
// //     <div className="w-full">
// //       {/* Horizontal Scroll Section */}
// //       <section
// //         ref={containerRef}
// //         className="relative w-full h-screen overflow-hidden "
// //       >
// //         <h2 className="text-white text-center text-6xl heading-font font-bold absolute top-0 left-0 right-0 z-10">
// //           Property Details
// //         </h2>

// //         <div ref={trackRef} className="flex w-max h-screen">
// //           {images.map((item, index) => (
// //             <div
// //               key={`slide-${index}`}
// //               className="w-screen h-[90vh] mt-20 flex-shrink-0 relative"
// //             >
// //               <img
// //                 src={item.img}
// //                 alt={item.title}
// //                 className="w-full h-full object-cover"
// //                 onLoad={handleImageLoad}
// //                 onError={handleImageLoad}
// //               />
// //               <div className="absolute bottom-20 left-[50%] bg-black/50 text-white p-4  rounded-lg">
// //                 <h3 className="text-6xl heading-font font-semibold">
// //                   {item.title}
// //                 </h3>
// //                 <p className="mt-2 text-amber-500 text-xl">
// //                   {item.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import { useRef, useLayoutEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   {
//     img: "/gallery/img1.jpg",
//     title: "Exclusive Listings",
//     description: "This is the description for slide 1.",
//   },
//   {
//     img: "/gallery/img2.jpg",
//     title: "Sold Listings",
//     description: "This is the description for slide 2.",
//   },
//   {
//     img: "/gallery/img3.jpg",
//     title: "Exclusive Listings",
//     description: "This is the description for slide 3.",
//   },
//   {
//     img: "/gallery/img4.jpg",
//     title: "Sold Listings",
//     description: "This is the description for slide 4.",
//   },
// ];

// export default function HorizontalSlider() {
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const ctx = gsap.context(() => {
//       const slides = trackRef.current.children;
//       const totalWidth = Array.from(slides).reduce(
//         (acc, slide) => acc + slide.offsetWidth,
//         0
//       );

//       const scrollLength = totalWidth - window.innerWidth;

//       gsap.to(trackRef.current, {
//         x: () => `-${scrollLength}`,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: () => `+=${scrollLength}`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Refresh ScrollTrigger after images load
//       ScrollTrigger.refresh();
//     }, containerRef);

//     return () => ctx.revert();
//   }, [isLoaded]);

//   // Handle image loading
//   const handleImageLoad = () => {
//     if (trackRef.current) {
//       const images = trackRef.current.querySelectorAll("img");
//       const loaded = Array.from(images).every((img) => img.complete);
//       if (loaded) setIsLoaded(true);
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Horizontal Scroll Section */}
//       <section
//         ref={containerRef}
//         className="relative w-full h-screen overflow-hidden "
//       >
//         <h2 className="text-white text-center text-3xl md:text-6xl heading-font font-bold absolute md:-top-1 left-0 right-0 z-10">
//           Property Details
//         </h2>

//         <div
//           ref={trackRef}
//           className="flex w-max h-screen overflow-x-auto scroll-smooth snap-x snap-mandatory"
//         >
//           {images.map((item, index) => (
//             <div
//               key={`slide-${index}`}
//               className="w-screen h-[90vh] mt-10 sm:mt-10 md:mt-20 flex-shrink-0 relative snap-center"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//                 onLoad={handleImageLoad}
//                 onError={handleImageLoad}
//               />
//               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-3 rounded-lg max-w-[90%] text-center">
//                 <h3 className="text-3xl md:text-6xl heading-font font-semibold leading-snug md:leading-[1.2]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-amber-500 text-base md:text-xl">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle1",
    subtitle: "heroSubtitle1",
    description: "heroDesc1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle2",
    subtitle: "heroSubtitle2",
    description: "heroDesc2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle3",
    subtitle: "heroSubtitle3",
    description: "heroDesc3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle4",
    subtitle: "heroSubtitle4",
    description: "heroDesc4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle5",
    subtitle: "heroSubtitle5",
    description: "heroDesc5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "heroTitle6",
    subtitle: "heroSubtitle6",
    description: "heroDesc6",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Detect swipe
  const handlePointerDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    touchEndX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) nextSlide();
      else if (distance < -50) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSlideClass = (index) => {
    if (index === currentSlide) return "z-30 scale-100 opacity-100";
    if (
      index === (currentSlide - 1 + slides.length) % slides.length ||
      index === (currentSlide + 1) % slides.length
    )
      return "z-20 scale-90 opacity-60 cursor-grab";
    return "hidden md:block z-10 scale-75 opacity-0";
  };

  return (
    <>
    <section>
      <div>
        <h2 className="text-white text-center text-3xl md:text-6xl heading-font font-bold z-10">
          Images
        </h2>
      </div>
      <div
        className="relative w-full h-screen overflow-hidden flex items-center justify-center group select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
       
        <div className="relative flex items-center justify-center w-full max-w-[1400px] h-[90%]">
          {slides.map((slide, index) => {
            const isPrev =
              index === (currentSlide - 1 + slides.length) % slides.length;
            const isNext = index === (currentSlide + 1) % slides.length;

            return (
              <div
                key={index}
                onClick={() => {
                  if (isPrev || isNext) setCurrentSlide(index);
                }}
                className={`absolute transition-all duration-700 ease-in-out transform w-[70%] md:w-[60%] h-full rounded-xl overflow-hidden ${getSlideClass(
                  index
                )}`}
                style={{
                  left:
                    index === currentSlide
                      ? "50%"
                      : isPrev
                      ? "15%"
                      : isNext
                      ? "85%"
                      : "50%",
                  transform:
                    index === currentSlide
                      ? "translateX(-50%) scale(1)"
                      : isPrev || isNext
                      ? "translateX(-50%) scale(0.9)"
                      : "translateX(-50%) scale(0.75)",
                  transition: "all 0.7s ease-in-out",
                  opacity:
                    index === currentSlide ? 1 : isPrev || isNext ? 0.6 : 0,
                  cursor: isPrev || isNext ? "grab" : "default",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setIsAutoPlaying((prev) => !prev)}
          className="absolute bottom-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              } transition-all`}
            />
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Slider;
