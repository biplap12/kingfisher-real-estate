// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     name: "Manavi Paudel",
//     date: "1st July, 2024",
//     text: "KingFisher is a true gem in the jewelry industry. Their commitment to quality, hospitality, and expert craftsmanship makes them a true gem in the jewelry industry. A truly trustworthy establishment.",
//     keywords: ["Quality", "Hospitality", "Expertise"],
//     avatars: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Hari Maya Paudel",
//     date: "15th June, 2024",
//     text: "KingFisher's collection of property is truly exceptional. Their attention to detail and commitment to quality make them a true gem in the real estate industry. A truly trustworthy establishment.",
//     keywords: ["Craftsmanship", "Customer Service", "Collection"],
//     avatars: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// export default function Testimonial() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const t = testimonials[selectedIndex];

//   const prevIndex =
//     (selectedIndex - 1 + testimonials.length) % testimonials.length;
//   const nextIndex = (selectedIndex + 1) % testimonials.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const avatarClass = (position) => {
//     switch (position) {
//       case "center":
//         return "w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#1a2a67] rounded-full cursor-pointer scale-110 shadow-lg hover:shadow-xl transition-all duration-300 z-10";
//       case "side":
//         return "w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#1a2a67]/50 rounded-full cursor-pointer grayscale hover:grayscale-0 hover:border-[#1a2a67] transition-all duration-300";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 ">
//       <div className="w-full max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-6xl font-serif text-[#F6BC6D] mb-8 md:mb-12 text-center heading-font">
//           <span className="relative z-10  px-4">Valued Customer Opinions</span>
//         </h2>

//         <fieldset className="relative w-full min-h-[400px] border-2 border-[#F6BC6D] p-6 sm:p-10 text-[#1a2a67] rounded-lg">
//           <legend className="text-xl sm:text-2xl font-semibold px-4  text-white rounded-md">
//             {t.name}
//           </legend>

//           <div className="flex flex-col sm:flex-row items-center mb-6">
//             <div className="mb-4 sm:mb-0 sm:mr-6">
//               <img
//                 src={t.avatars}
//                 alt={t.name}
//                 className="w-16 h-16 rounded-full border-2 border-[#d4af37]"
//               />
//             </div>
//             <div className="text-center sm:text-left">
//               <p className="text-sm text-white italic">{t.date}</p>
//               <div className="flex justify-center sm:justify-start mt-2">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-[#d4af37] fill-current"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <p className="text-white text-base sm:text-lg leading-relaxed italic pl-6 sm:pl-8 line-clamp-3">
//             "{t.text}"
//           </p>
//           <div className="flex flex-wrap justify-center gap-3 mt-8 mb-4">
//             {t.keywords.map((word, idx) => (
//               <span
//                 key={idx}
//                 className="px-4 py-2 rounded-full bg-[#F6BC6D] text-sm font-medium text-[#1a2a67] shadow-sm"
//               >
//                 {word}
//               </span>
//             ))}
//           </div>

//           {/* Avatar selector group */}
//           <div className="absolute left-1/2 -bottom-8 md:-bottom-10 lg:-bottom-16 transform -translate-x-1/2 flex justify-center  group items-center gap-4 sm:gap-6">
//             <img
//               src={testimonials[prevIndex].avatars}
//               alt={testimonials[prevIndex].name}
//               onClick={() => setSelectedIndex(prevIndex)}
//               className={avatarClass("side")}
//               title={testimonials[prevIndex].name}
//             />
//             <img
//               src={t.avatars}
//               alt={t.name}
//               className={avatarClass("center")}
//               title={t.name}
//             />
//             <img
//               src={testimonials[nextIndex].avatars}
//               alt={testimonials[nextIndex].name}
//               onClick={() => setSelectedIndex(nextIndex)}
//               className={avatarClass("side")}
//               title={testimonials[nextIndex].name}
//             />
//           </div>

//           {/* Decorative corner borders */}
//           <div className="absolute top-3 left-0 w-10 border-t-2 border-white transform -translate-x-full" />
//           <div className="absolute bottom-3 left-0 w-10 border-b-2 border-white transform -translate-x-full" />
//           <div className="absolute top-3 right-0 w-10 border-t-2 border-white transform translate-x-full" />
//           <div className="absolute bottom-3 right-0 w-10 border-b-2 border-white transform translate-x-full" />
//         </fieldset>
//       </div>
//     </div>
//   );
// }

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Manavi Paudel",
    date: "1st July, 2024",
    text: "KingFisher is a true gem in the jewelry industry. Their commitment to quality, hospitality, and expert craftsmanship makes them stand out. A truly trustworthy establishment.",
    keywords: ["Quality", "Hospitality", "Expertise"],
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    name: "Hari Maya Paudel",
    date: "15th June, 2024",
    text: "KingFisher's collection of property is truly exceptional. Their attention to detail and commitment to quality make them a leader in the real estate industry.",
    keywords: ["Craftsmanship", "Customer Service", "Collection"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Ramesh Shrestha",
    date: "28th May, 2024",
    text: "The personalized service at KingFisher exceeded all my expectations. They took the time to understand exactly what I was looking for and delivered beyond my imagination.",
    keywords: ["Personalized", "Attention", "Excellence"],
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Sunita Gurung",
    date: "10th May, 2024",
    text: "Working with KingFisher was a seamless experience from start to finish. Their professionalism and expertise made the entire process effortless and enjoyable.",
    keywords: ["Professionalism", "Seamless", "Effortless"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(); // initial select
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0d1b3a] to-[#1a2a67]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F6BC6D] mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#F6BC6D] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of customers trust KingFisher for their
            jewelry and real estate needs.
          </p>
        </div>

        {/* Carousel */}
        <div className="embla overflow-hidden relative" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex-shrink-0 relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full border-4 border-[#F6BC6D] object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-[#1a2a67] text-white text-xs font-bold px-2 py-1 rounded-full">
                          {testimonial.rating}/5
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-[#1a2a67]">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {testimonial.date}
                            </p>
                          </div>
                          <div className="flex ml-auto">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${
                                  i < testimonial.rating
                                    ? "text-[#d4af37]"
                                    : "text-gray-300"
                                } fill-current`}
                                viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <blockquote className="mt-6 text-gray-700 italic relative">
                          <div className="absolute top-0 left-0 text-5xl text-[#F6BC6D] font-serif -mt-4">
                            “
                          </div>
                          <p className="pl-8">{testimonial.text}</p>
                        </blockquote>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {testimonial.keywords.map((word, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-[#F6BC6D]/20 text-sm font-medium text-[#1a2a67]">
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a2a67] transition-colors z-10"
            aria-label="Previous testimonial">
            <svg
              className="w-6 h-6 text-[#1a2a67] hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a2a67] transition-colors z-10"
            aria-label="Next testimonial">
            <svg
              className="w-6 h-6 text-[#1a2a67] hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                  index === selectedIndex ? "bg-[#F6BC6D] w-6" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
