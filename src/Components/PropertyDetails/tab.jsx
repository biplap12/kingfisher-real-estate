import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const properties = [
  {
    id: 1,
    titleHeadings: "The Horizon",
    subtitle: "1 and 2 Bedroom Apartments",
    description:
      "The first beacon to rise within the Sobha Central constellation, The Horizon is perfectly positioned at the heart of the Bluewaters and JLT interchange.",
    subHeadings: [
      {
        id: "sub1",
        title: "Overview",
        content: "Located in the heart of Patan, close to schools and markets.",
        images: [
          "/apartments/apartment1.jpg",
          "/apartments/apartment2.jpg",
          "/apartments/apartment3.jpg",
        ],
        priceRangeFrom: "AED 1.68 M | INR 3.9 CR | USD 460 K",
        sizeFrom: "From 630.4 Sq. Ft.",
        priceRangeTo: "AED 4.59 M | INR 10.6 CR | USD 1.26 M",
        sizeTo: "To 1554.0 Sq. Ft.",
        handover: "Handover - Dec 2029",
        note: "*Subject to Availability",
      },
      {
        id: "sub2",
        title: "Interior",
        content: "Modern interior design with high-quality finishes.",
        images: [
          "/apartments/apartment1.jpg",
          "/apartments/apartment2.jpg",
          "/apartments/apartment3.jpg",
        ],
        priceRangeFrom: "AED 1.80 M | USD 490 K",
        sizeFrom: "650 Sq. Ft.",
        priceRangeTo: "AED 5.00 M | USD 1.30 M",
        sizeTo: "1600 Sq. Ft.",
        handover: "Ready by Jan 2030",
        note: "*Interior design customizable",
      },
      {
        id: "sub3",
        title: "Amenities",
        content: "Includes a pool, gym, and landscaped gardens.",
        images: [
          "/apartments/apartment1.jpg",
          "/apartments/apartment2.jpg",
          "/apartments/apartment3.jpg",
        ],
        priceRangeFrom: "AED 1.70 M | USD 470 K",
        sizeFrom: "645 Sq. Ft.",
        priceRangeTo: "AED 4.90 M | USD 1.25 M",
        sizeTo: "1500 Sq. Ft.",
        handover: "Possession - Q1 2030",
        note: "*Maintenance charges apply",
      },
    ],
  },
  {
    id: 2,
    titleHeadings: "Skyline Towers",
    subtitle: "Luxury 3 BHK in Thamel",
    description:
      "Enjoy high-rise living with panoramic views of Kathmandu in this newly launched urban oasis.",
    subHeadings: [
      {
        id: "sub1",
        title: "Overview",
        content:
          "Skyline Towers redefines luxury with glass facades and open terraces.",
        images: [
          "/gallery/bg.jpg",
          "/apartments/apartment2.jpg",
          "/apartments/apartment3.jpg",
        ],
        priceRangeFrom: "NPR 2.5 CR | USD 190 K",
        sizeFrom: "From 850 Sq. Ft.",
        priceRangeTo: "NPR 5.8 CR | USD 450 K",
        sizeTo: "To 1900 Sq. Ft.",
        handover: "2026 Mid-Year",
        note: "*Bank financing available",
      },
      {
        id: "sub2",
        title: "Connectivity",
        content:
          "Just 5 mins walk from Durbar Marg, close to hospitals and malls.",
        images: [
          "/apartments/apartment1.jpg",
          "/gallery/bg.jpg",
          "/apartments/apartment2.jpg",
        ],
        priceRangeFrom: "USD 200 K",
        sizeFrom: "900 Sq. Ft.",
        priceRangeTo: "USD 470 K",
        sizeTo: "1800 Sq. Ft.",
        handover: "End 2026",
        note: "*Subject to road widening",
      },
    ],
  },
];

// export default function PropertyTabs() {
//   const [currentPropertyId] = useState(properties[0].id); // Fixed to first property
//   const [activeTab, setActiveTab] = useState(properties[0].subHeadings[0].id);
//   const [currentImage, setCurrentImage] = useState(0);

//   const property = properties.find((prop) => prop.id === currentPropertyId);
//   const currentTabContent = property.subHeadings.find(
//     (sub) => sub.id === activeTab
//   );
//   const images = currentTabContent?.images || [];

//   useEffect(() => {
//     setActiveTab(property.subHeadings[0].id);
//     setCurrentImage(0);
//   }, [property]);

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="max-w-7xl mx-auto  p-6 md:p-10  transition-all duration-300 ">
//       <div className="mb-6 text-center">
//         <h2 className="text-3xl font-extrabold text-[#F6BC6D] lg:text-6xl  mb-10 heading-font">
//           {property.titleHeadings}
//         </h2>
//         <p className="text-[#F6BC6D]  text-md lg:text-lg leading-relaxed">
//           {property.description}
//         </p>
//       </div>

//       <nav
//         className="flex flex-wrap gap-2 border-b border-[#F6BC6D] mb-6"
//         role="tablist"
//       >
//         {property.subHeadings.map((tab) => {
//           const isActive = activeTab === tab.id;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`relative px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-t-md transition-all duration-300 ${
//                 isActive
//                   ? "bg-gradient-to-r from-[#F6BC6D] to-[#eeac3a] text-white transition-all duration-300"
//                   : "bg-gray-100 text-[#f59105] hover:bg-gray-200 "
//               }`}
//             >
//               {tab.title}
//               {isActive && (
//                 <></>
//                 // <span className="absolute -bottom-[1px] left-1/2 transform -translate-x-1/2 w-full h-1  bg-gradient-to-r from-pink-500 to-fuchsia-500"></span>
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       <section
//         key={currentTabContent?.id}
//         className="p-6 rounded-b-xl  text-lg leading-relaxed transition-all duration-300 animate-fade-in"
//       >
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="relative md:w-1/2 rounded-lg overflow-hidden transition-all duration-300">
//             <img
//               src={images[currentImage]}
//               alt={`Property image ${currentImage + 1}`}
//               className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
//             />
//             <button
//               onClick={prevImage}
//               className="absolute top-1/2 left-3 transform -translate-y-1/2 backdrop-blur bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition cursor-pointer text-white"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 backdrop-blur bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 cursor-pointer transition text-white"
//             >
//               <ChevronRight />
//             </button>
//           </div>

//           <div className="md:w-1/2 flex flex-col justify-between">
//             <div>
//               <h1 className="text-3xl font-serif mb-2">
//                 {currentTabContent?.title}
//               </h1>
//               <p className="text-white mb-6">{currentTabContent?.content}</p>

//               <div className="mb-6 space-y-3">
//                   <strong className="uppercase text-[#F6BC6D]">From</strong>
//                   <p className="font-semibold">
//                     {currentTabContent?.priceRangeFrom}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     {currentTabContent?.sizeFrom}
//                   </p>
//                 <div>
//                   <strong className="uppercase">To</strong>
//                   <p className="font-semibold">
//                     {currentTabContent?.priceRangeTo}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     {currentTabContent?.sizeTo}
//                   </p>
//                 </div>
//                 <p className="text-sm text-gray-400 italic">
//                   {currentTabContent?.handover}
//                 </p>
//                 <p className="text-xs text-gray-300">
//                   {currentTabContent?.note}
//                 </p>
//               </div>
//             </div>

//             {/* <div className="flex flex-wrap gap-4 mt-auto">
//               <button className="border border-gray-900 rounded-full py-2 px-6 tracking-widest text-sm hover:bg-gray-900 hover:text-[#F6BC6D] transition">
//                 DOWNLOAD BROCHURE
//               </button>
//               <button className="border border-gray-900 rounded-full py-2 px-6 tracking-widest text-sm hover:bg-gray-900 hover:text-[#F6BC6D] transition">
//                 LEARN MORE
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function PropertyTabs() {
  const [currentPropertyId] = useState(properties[0].id);
  const [activeTab, setActiveTab] = useState(properties[0].subHeadings[0].id);
  const [currentImage, setCurrentImage] = useState(0);

  const property = properties.find((prop) => prop.id === currentPropertyId);
  const currentTabContent = property.subHeadings.find(
    (sub) => sub.id === activeTab
  );
  const images = currentTabContent?.images || [];

  useEffect(() => {
    setActiveTab(property.subHeadings[0].id);
    setCurrentImage(0);
  }, [property]);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full   p-6 md:p-10 transition-all duration-300">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#F6BC6D] lg:text-5xl mb-6 heading-font">
          {property.titleHeadings}
        </h2>
        <p className="text-white text-md lg:text-md max-w-3xl mx-auto leading-relaxed">
          {property.description}
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
        {property.subHeadings.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-[#F6BC6D] text-white "
                  : "bg-gray-800 text-[#F6BC6D] hover:bg-gray-700"
              }`}
            >
              {tab.title}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 -z-10 bg-[#F6BC6D]"></span>
              )}
            </button>
          );
        })}
      </nav>

      <section
        key={currentTabContent?.id}
        className="bg-[#181b4d] backdrop-blur-sm rounded-xl p-6 mx-10  transition-all duration-300 animate-fade-in"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery Section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden border border-gray-700">
              <img
                src={images[currentImage]}
                alt={`Property image ${currentImage + 1}`}
                className="w-full h-64 sm:h-80 lg:h-[450px] object-cover transition-opacity duration-300"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 text-white"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage
                          ? "bg-[#F6BC6D] w-4"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#F6BC6D] mb-4">
                {currentTabContent?.title}
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentTabContent?.content}
              </p>
            </div>

            {/* Pricing Information */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-xs uppercase tracking-wider text-[#F6BC6D] mb-2">
                  From
                </h3>
                <p className="text-xl font-bold text-[#F6BC6D]">
                  {currentTabContent?.priceRangeFrom}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {currentTabContent?.sizeFrom}
                </p>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-xs uppercase tracking-wider text-[#F6BC6D] mb-2">
                  To
                </h3>
                <p className="text-xl font-bold text-[#F6BC6D]">
                  {currentTabContent?.priceRangeTo}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {currentTabContent?.sizeTo}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="m-auto space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={16} />
                <span>{currentTabContent?.handover}</span>
              </div>

              {currentTabContent?.note && (
                <p className="text-xs text-gray-500 italic">
                  *{currentTabContent?.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
