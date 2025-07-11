import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Manavi Paudel",
    date: "1st July, 2024",
    text: "My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.My first visit to R.B. Diamond Jewellers was 8 years ago in 2009. The quality of their jewelry is exceptional, and their hospitality makes every visit memorable. Their expertise in diamond selection helped me find the perfect engagement ring for my partner.",
    keywords: ["Quality", "Hospitality", "Expertise"],
    avatars: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Hari Maya Paudel",
    date: "15th June, 2024",
    text: "I've been a loyal customer for over 5 years. The craftsmanship of their pieces is remarkable, and the staff always goes above and beyond to ensure customer satisfaction. Their collection of traditional jewelry is simply breathtaking.",
    keywords: ["Craftsmanship", "Customer Service", "Collection"],
    avatars: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sudresh Paudel",
    date: "28th May, 2024",
    text: "The personalized service at R.B. Diamond Jewellers is unmatched. They took the time to understand exactly what I was looking for and created a custom necklace that exceeded all my expectations. The attention to detail is phenomenal.",
    keywords: ["Personalized", "Custom Design", "Attention to Detail"],
    avatars: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Sijan Paudel",
    date: "10th April, 2024",
    text: "From engagement rings to anniversary gifts, R.B. Diamond has been our family jeweler for generations. Their timeless designs and ethical sourcing practices make them stand out in the industry. A truly trustworthy establishment.",
    keywords: ["Timeless", "Ethical", "Trustworthy"],
    avatars: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

export default function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = testimonials[selectedIndex];

  const prevIndex =
    (selectedIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (selectedIndex + 1) % testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const avatarClass = (position) => {
    switch (position) {
      case "center":
        return "w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#1a2a67] rounded-full cursor-pointer scale-110 shadow-lg hover:shadow-xl transition-all duration-300 z-10";
      case "side":
        return "w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#1a2a67]/50 rounded-full cursor-pointer grayscale hover:grayscale-0 hover:border-[#1a2a67] transition-all duration-300";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 ">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-serif text-[#F6BC6D] mb-8 md:mb-12 text-center heading-font">
          <span className="relative z-10  px-4">Valued Customer Opinions</span>
        </h2>

        <fieldset className="relative w-full min-h-[400px] border-2 border-[#F6BC6D] p-6 sm:p-10 text-[#1a2a67] rounded-lg">
          <legend className="text-xl sm:text-2xl font-semibold px-4 text-center bg-[#203eb5] text-white rounded-md mx-auto">
            {t.name}
          </legend>

          <div className="flex flex-col sm:flex-row items-center mb-6">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <img
                src={t.avatars}
                alt={t.name}
                className="w-16 h-16 rounded-full border-2 border-[#d4af37]"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-white italic">{t.date}</p>
              <div className="flex justify-center sm:justify-start mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#d4af37] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <p className="text-white text-base sm:text-lg leading-relaxed italic pl-6 sm:pl-8 line-clamp-3">
            "{t.text}"
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-4">
            {t.keywords.map((word, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-[#F6BC6D] text-sm font-medium text-[#1a2a67] shadow-sm"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Avatar selector group */}
          <div className="absolute left-1/2 -bottom-8 md:-bottom-10 lg:-bottom-16 transform -translate-x-1/2 flex justify-center  group items-center gap-4 sm:gap-6">
            <img
              src={testimonials[prevIndex].avatars}
              alt={testimonials[prevIndex].name}
              onClick={() => setSelectedIndex(prevIndex)}
              className={avatarClass("side")}
              title={testimonials[prevIndex].name}
            />
            <img
              src={t.avatars}
              alt={t.name}
              className={avatarClass("center")}
              title={t.name}
            />
            <img
              src={testimonials[nextIndex].avatars}
              alt={testimonials[nextIndex].name}
              onClick={() => setSelectedIndex(nextIndex)}
              className={avatarClass("side")}
              title={testimonials[nextIndex].name}
            />
          </div>

          {/* Decorative corner borders */}
          <div className="absolute top-3 left-0 w-10 border-t-2 border-white transform -translate-x-full" />
          <div className="absolute bottom-3 left-0 w-10 border-b-2 border-white transform -translate-x-full" />
          <div className="absolute top-3 right-0 w-10 border-t-2 border-white transform translate-x-full" />
          <div className="absolute bottom-3 right-0 w-10 border-b-2 border-white transform translate-x-full" />
        </fieldset>
      </div>
    </div>
  );
}
