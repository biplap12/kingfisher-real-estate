// import { useEffect, useRef, useState } from "react";
// import slides from "../../data/hero";
// import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);

//   // Auto-play
//   useEffect(() => {
//     if (!isAutoPlaying || slides.length === 0) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 10000);
//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Detect swipe
//   const handlePointerDown = (e) => {
//     touchStartX.current = e.clientX;
//   };

//   const handlePointerMove = (e) => {
//     touchEndX.current = e.clientX;
//   };

//   const handlePointerUp = () => {
//     if (touchStartX.current !== null && touchEndX.current !== null) {
//       const distance = touchStartX.current - touchEndX.current;
//       if (distance > 50) nextSlide();
//       else if (distance < -50) prevSlide();
//     }
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   const getSlideClass = (index) => {
//     if (index === currentSlide) return "z-30 scale-100 opacity-100";
//     if (
//       index === (currentSlide - 1 + slides.length) % slides.length ||
//       index === (currentSlide + 1) % slides.length
//     )
//       return "z-20 scale-90 opacity-60 cursor-grab";
//     return "hidden md:block z-10 scale-75 opacity-0";
//   };
//   return (
//     <div className="relative w-full mt-5">
//       <h1 className="text-4xl md:text-6xl  font-bold text-white text-center heading-font">
//         Our Project
//       </h1>
//       <div
//         className="relative w-full h-screen overflow-hidden flex items-center justify-center group select-none"
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//       >
//         <div className="relative flex items-center justify-center w-full  max-w-[1400px] h-[80%] mx-auto">
//           {slides.map((slide, index) => {
//             const isPrev =
//               index === (currentSlide - 1 + slides.length) % slides.length;
//             const isNext = index === (currentSlide + 1) % slides.length;

//             return (
//               <div
//                 key={index}
//                 onClick={() => {
//                   if (isPrev || isNext) setCurrentSlide(index);
//                 }}
//                 className={`absolute transition-all duration-700 ease-in-out transform w-[70%] md:w-[80%] h-[100%] rounded-md overflow-hidden ${getSlideClass(
//                   index
//                 )}`}
//                 style={{
//                   left:
//                     index === currentSlide
//                       ? "50%"
//                       : isPrev
//                       ? "15%"
//                       : isNext
//                       ? "85%"
//                       : "50%",
//                   transform:
//                     index === currentSlide
//                       ? "translateX(-50%) scale(1)"
//                       : isPrev || isNext
//                       ? "translateX(-50%) scale(0.9)"
//                       : "translateX(-50%) scale(0.75)",
//                   transition: "all 0.7s ease-in-out",
//                   opacity:
//                     index === currentSlide ? 1 : isPrev || isNext ? 0.6 : 0,
//                   cursor: isPrev || isNext ? "grab" : "default",
//                 }}
//               >
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
//                   {currentSlide === index && (
//                     <div className="relative z-10 w-full flex flex-col justify-center items-center transition-all duration-300 transform">
//                       <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#ffac38]">
//                         {slide.title}
//                       </h2>
//                       <p className="text-sm md:text-base text-slate-500">
//                         {slide.description}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Buttons */}
//         {/* <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button> */}

//         {/* Play / Pause */}
//         {/* <button
//         onClick={() => setIsAutoPlaying((prev) => !prev)}
//         className="absolute top-4 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50"
//       >
//         {isAutoPlaying ? (
//           <Pause className="h-4 w-4 text-white" />
//         ) : (
//           <Play className="h-4 w-4 text-white" />
//         )}
//       </button> */}
//       </div>
//     </div>
//   );
// };

// export default Slider;
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   "/gallery/img1.jpg",
//   "/gallery/img2.jpg",
//   "/gallery/img3.jpg",
//   "/gallery/img3.jpg",
// ];

// export default function HorizontalSlider() {
//   const sectionRef = useRef(null);
//   const slideRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const slide = slideRef.current;

//     const totalPanels = images.length;

//     // GSAP timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: () => `+=${window.innerWidth * (totalPanels - 1)}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         markers: true,
//       },
//     });

//     tl.to(slide, {
//       xPercent: -100 * (totalPanels - 1),
//       ease: "none",
//     });

//     return () => {
//       tl.scrollTrigger?.kill();
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-screen h-screen overflow-hidden"
//     >
//       <div
//         ref={slideRef}
//         className="flex w-[200vw] justify-center items-center h-screen"
//       >
//         {images.map((src, index) => (
//           <div key={index} className="w-screen h-full flex-shrink-0">
//             <img
//               src={src}
//               alt={`slide-${index}`}
//               className="w-full h-full object-cover border-2 border-amber-200  mt-32"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    img: "/gallery/img1.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 1.",
  },
  {
    img: "/gallery/img2.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 2.",
  },
  {
    img: "/gallery/img3.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 3.",
  },
  {
    img: "/gallery/img4.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 4.",
  },
];

export default function HorizontalSlider() {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slide = slideRef.current;
    const slides = gsap.utils.toArray(slide.children);
    const numSlides = slides.length;

    // Set width for horizontal scrolling
    gsap.set(slide, { width: `${numSlides * 100}%` });
    slides.forEach((slideEl) =>
      gsap.set(slideEl, { width: `${100 / numSlides}%` })
    );

    // Kill any previous triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${section.offsetWidth * (numSlides - 1)}`,
        scrub: 5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (numSlides - 1),
          duration: 0.3,
          ease: "power1.inOut",
        },
        markers: true,
      },
    });

    tl.to(slide, {
      xPercent: -100 * (numSlides - 1),
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen  overflow-hidden z-20"
    >
      <div ref={slideRef} className="flex h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-screen flex items-center justify-center"
          >
            <img
              src={src.img}
              alt={`slide-${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="z-10 bg-black/50 p-6 rounded-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{src.title}</h2>
              <p className="text-lg">{src.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
