<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { showErrorToast } from "../../config/toastConfig";

// Fallback properties in case API fails
const fallbackProperties = [
  {
    _id: "1",
    name: "Kingfisher Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "$354,000",
    mainImage:
      "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "2",
    name: "Kingfisher Islands",
    location: "Dubailand, Dubai, UAE",
    price: "$678,000",
    mainImage:
      "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "3",
    name: "Violet",
    location: "Kingfisher Hills 2, Dubai, UAE",
    price: "$534,000",
    mainImage:
      "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "4",
    name: "Kingfisher Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "$790,000",
    mainImage:
      "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const text = [
  {
    title: "Explore Our Iconic Properties",
    description:
      "Kingfisher Real Estate is recognized for developing premium residential towers, exclusive communities, and luxurious resort-style homes. From contemporary apartments in prime city locations to serene urban getaways, each property showcases modern design and high-end amenities, delivering a refined and elevated living experience.",
  },
];

const IconicProperties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
=======
// import React, { useState, useEffect } from "react";
// import { MapPin, ArrowRight, Building } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";

// import api from "../../services/api";
// import { showErrorToast } from "../../config/toastConfig";

// const fallbackProperties = [
//   {
//     _id: "1",
//     name: "Kingfisher Riverside Views",
//     location: "Dubai Investment Park 2, UAE",
//     price: "$354,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     _id: "2",
//     name: "Kingfisher Islands",
//     location: "Dubailand, Dubai, UAE",
//     price: "$678,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
//   },
//   {
//     _id: "3",
//     name: "Violet",
//     location: "Kingfisher Hills 2, Dubai, UAE",
//     price: "$534,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     _id: "4",
//     name: "Kingfisher Lagoons - Mykonos",
//     location: "Dubailand, Dubai, UAE",
//     price: "$790,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
//   },
// ];

// const sectionText = {
//   title: "Explore Our Iconic Properties",
//   description:
//     "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
// };

// export default function IconicProperties() {
//   const navigate = useNavigate();
// const [properties, setProperties] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchProperties = async () => {
//     try {
//       const res = await api.get("/properties/active");
//       if (res.data.success) {
//         setProperties(res.data.data.slice(0, 4));
//       } else {
//         setProperties(fallbackProperties);
//       }
//     } catch (err) {
//       showErrorToast("Failed to load properties: " + err);
//       setProperties(fallbackProperties);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchProperties();
// }, []);

//   return (
//     <section className="py-20 ">
//       <motion.div
//         className="text-center px-4 mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
//           {sectionText.title}
//         </h2>
//         <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
//           {sectionText.description}
//         </p>
//       </motion.div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
//         </div>
//       ) : (
//         <div className="relative max-w-7xl mx-auto px-4 md:px-10">
//           {/* Custom Prev Button */}
//           <button
//             className="absolute z-10 top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
//           >
//             <ArrowRight className="rotate-180" size={18} />
//           </button>

//           {/* Custom Next Button */}
//           <button
//             className="absolute z-10 top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slideNext()}
//           >
//             <ArrowRight size={18} />
//           </button>

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             grabCursor
//           >
//             {properties.map((p, index) => (
//               <SwiperSlide key={p._id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className="backdrop-blur-md border border-[#F6BC6D] rounded-xl  transition-all duration-300 overflow-hidden"
//                 >
//                   <img
//                     src={p.mainImage}
//                     alt={p.name}
//                     className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="p-6 flex flex-col gap-4 justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold text-white line-clamp-2">
//                         {p.name}
//                       </h3>
//                       <div className="flex flex-row justify-between">
//                         <p className="text-sm text-gray-500 mt-1 flex items-center">
//                           <MapPin size={16} className="mr-1 text-amber-600" />
//                           {p.location}
//                         </p>
//                         <p className="text-sm text-gray-400 mt-1 flex items-center">
//                           <Building size={16} className="mr-1 text-amber-600" />
//                           {p.type || "Apartment"}
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-gray-300 text-sm">
//                         Starting at{" "}
//                         <span className="text-green-600 font-bold">
//                           {p.price}
//                         </span>
//                       </p>
//                       <button
//                         onClick={() => navigate(`/properties/${p._id}`)}
//                         className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
//                       >
//                         View Details <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       )}

//       <div className="mt-14 flex justify-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/properties")}
//           className="px-8 py-3 rounded-full  text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//         >
//           View All Properties
//         </motion.button>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { MapPin, ArrowRight, Building } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";

// import api from "../../services/api";
// import { showErrorToast } from "../../config/toastConfig";

// const fallbackProperties = [
//   {
//     _id: "1",
//     name: "Kingfisher Riverside Views",
//     location: "Dubai Investment Park 2, UAE",
//     price: "$354,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     _id: "2",
//     name: "Kingfisher Islands",
//     location: "Dubailand, Dubai, UAE",
//     price: "$678,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
//   },
//   {
//     _id: "3",
//     name: "Violet",
//     location: "Kingfisher Hills 2, Dubai, UAE",
//     price: "$534,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     _id: "4",
//     name: "Kingfisher Lagoons - Mykonos",
//     location: "Dubailand, Dubai, UAE",
//     price: "$790,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
//   },
// ];

// const sectionText = {
//   title: "Explore Our Iconic Properties",
//   description:
//     "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
// };

// export default function IconicProperties() {
//   const navigate = useNavigate();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await api.get("/properties/active");
//         if (res.data.success) {
//           setProperties(res.data.data.slice(0, 4));
//         } else {
//           setProperties(fallbackProperties);
//         }
//       } catch (err) {
//         showErrorToast("Failed to load properties: " + err);
//         setProperties(fallbackProperties);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProperties();
//   }, []);

//   return (
//     <section className="py-20 ">
//       <motion.div
//         className="text-center px-4 mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
//           {sectionText.title}
//         </h2>
//         <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
//           {sectionText.description}
//         </p>
//       </motion.div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
//         </div>
//       ) : (
//         <div className="relative max-w-7xl mx-auto px-4 md:px-10">
//           {/* Custom Prev Button */}
//           <button
//             className="absolute z-10 top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
//           >
//             <ArrowRight className="rotate-180" size={18} />
//           </button>

//           {/* Custom Next Button */}
//           <button
//             className="absolute z-10 top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slideNext()}
//           >
//             <ArrowRight size={18} />
//           </button>

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             grabCursor
//           >
//             {properties.map((p, index) => (
//               <SwiperSlide key={p._id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className="[perspective:500px]"
//                 >
//                   <div
//                     className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl transition-all duration-300 overflow-hidden
//                       relative transform-style-preserve-3d will-change-transform
//                       hover:[transform:translateZ(10px)_rotateX(20deg)_rotateY(20deg)]"
//                   >
//                     <img
//                       src={p.mainImage}
//                       alt={p.name}
//                       className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="p-6 flex flex-col gap-4 justify-between">
//                       <div>
//                         <h3
//                           className="text-lg font-semibold text-gray-800 line-clamp-2 transition-transform duration-500
//                             hover:[transform:translateZ(50px)]"
//                         >
//                           {p.name}
//                         </h3>
//                         <div className="flex flex-row justify-between">
//                           <p className="text-sm text-gray-500 mt-1 flex items-center">
//                             <MapPin size={16} className="mr-1 text-amber-600" />
//                             {p.location}
//                           </p>
//                           <p className="text-sm text-gray-400 mt-1 flex items-center">
//                             <Building
//                               size={16}
//                               className="mr-1 text-amber-600"
//                             />
//                             {p.type || "Apartment"}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-gray-800 text-sm">
//                           Starting at{" "}
//                           <span className="text-green-600 font-bold">
//                             {p.price}
//                           </span>
//                         </p>
//                         <button
//                           onClick={() => navigate(`/properties/${p._id}`)}
//                           className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
//                         >
//                           View Details <ArrowRight size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       )}

//       <div className="mt-14 flex justify-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/properties")}
//           className="px-8 py-3 rounded-full bg-white text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//         >
//           View All Properties
//         </motion.button>
//       </div>
//     </section>
//   );
// }

// import { Building, MapPin } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import api from "../../services/api";

// const IconicProperties = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await api.get("/properties/active");
//         if (res.data.success) {
//           setProperties(res.data.data.slice(0, 3));
//         }
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     console.log("Properties:", properties);
//     fetchProperties();
//   }, [properties]);

//   return (
//     <section className="py-20 px-6 max-w-screen-xl mx-auto">
//       <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
//         Iconic Properties
//       </h2>

//       {loading ? (
//         <div className="col-span-3 text-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading properties...</p>
//         </div>
//       ) : properties?.length === 0 ? (
//         <div className="col-span-3 text-center py-20">
//           <p className="text-gray-600">No properties found.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {properties.map((p, index) => (
//             <div
//               key={p._id || index}
//               className="relative group rounded-md w-full overflow-hidden"
//               style={{ height: "500px" }}
//             >
//               {/* Image */}
//               <img
//                 src={p.mainImage || ""}
//                 alt={p.name || "Property Image"}
//                 className="w-full h-full object-cover rounded-md"
//                 onError={(e) => {
//                   e.currentTarget.src =
//                     "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=1170&q=80";
//                 }}
//               />

//               {/* Overlay on hover */}
//               <div className="absolute inset-0 bg-primary-color bg-opacity-70 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md flex flex-col">
//                 <div className="max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 bg-primary-color bg-opacity-50">
//                   <h3 className="text-3xl font-bold leading-tight">
//                     {p.name || "Property Name"}
//                   </h3>
//                 </div>

//                 <div className="p-6 flex flex-col gap-4 justify-between flex-grow">
//                   <div>
//                     <h4 className="text-lg font-semibold line-clamp-2">
//                       {p.description || "Property Description"}
//                     </h4>
//                     <div className="flex justify-between mt-2">
//                       <p className="text-sm flex items-center">
//                         <MapPin size={16} className="mr-1 text-amber-500" />
//                         {p.location || "Unknown"}
//                       </p>
//                       <p className="text-sm flex items-center">
//                         <Building size={16} className="mr-1 text-amber-500" />
//                         {p.type || "Apartment"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Logo or Action Button */}
//                 <div className="mt-auto self-end m-5">
//                   <div className="rounded-full hover:bg-white/20 p-2 transition">
//                     <img
//                       src="/logo/icon.png"
//                       alt="logo icon"
//                       className="h-8 w-8 object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default IconicProperties;

import { ArrowRight, Building, CircleDollarSign, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const ribbonColor = {
  available: "bg-green-500",
  sold: "bg-red-500",
  pending: "bg-yellow-400",
};

const IconicProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
>>>>>>> origin/dev_biplap

  useEffect(() => {
    const fetchProperties = async () => {
      try {
<<<<<<< HEAD
        setLoading(true);
        const response = await api.get("/properties/active");
        if (response.data.success) {
          // Take first 4 properties or all if less than 4
          const activeProperties = response.data.data.slice(0, 4);
          setProperties(activeProperties);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Showing sample data.");
        showErrorToast("Failed to load properties");
        setProperties(fallbackProperties);
=======
        const res = await api.get("/properties/active");
        if (res.data.success) {
          setProperties(res.data.data.slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
>>>>>>> origin/dev_biplap
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD

    fetchProperties();
  }, []);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 1; 

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += speed;
        scrollContainer.scrollLeft += speed;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="properties"
      className="py-20 px-0 sm:px-6 lightSection overflow-x-hidden"
    >
      <div className="text-center mb-14">
        {text.map((textItem, index) => (
          <div key={index + "iconic property"}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
              {textItem.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-5xl mx-auto raleway-regular px-2">
              {textItem.description}
            </p>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-6 justify-start overflow-x-auto scrollbar-hide px-0 md:px-6 scroll-smooth"
        >
          {properties.map((property) => (
            <div
              key={property._id}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] border border-gray-300 rounded-lg 
              overflow-hidden group hover:shadow-lg transition duration-300 flex-shrink-0 "
            >
              <img
                src={
                  property.mainImage ||
                  "https://via.placeholder.com/400x300?text=Image+Not+Available"
                }
                alt={property.name}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Image+Not+Available";
                }}
              />
              <div className="p-4 flex flex-col justify-between h-[180px]">
                <div>
                  <h3 className="text-md font-bold text-gray-900 line-clamp-2">
                    {property.name}
                  </h3>
                  <p className="text-sm paragraph-font tracking-wide text-gray-600 flex items-center mt-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </p>
                </div>
                <p className="text-black font-bold text-md mb-2">
                  FROM{" "}
                  <span className="text-green-600">
                    ${property.price?.toLocaleString() || "N/A"}
                  </span>
                </p>
                <div className="mt-4">
                  <button
                    className="w-full flex paragraph-font tracking-wide items-center justify-center px-4  py-2 rounded-xl border-2 border-[#f6bc6d] text-black hover:bg-[#f6bc6d] hover:text-black transition-colors duration-300 cursor-pointer"
                    onClick={() => navigate(`/properties/${property._id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/properties")}
          className="flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#f6bc6d] text-black text-base font-medium tracking-wide hover:bg-[#f6bd6dcf] transition duration-300 ease-in-out shadow-sm hover:shadow-lg cursor-pointer"
        >
          View All
        </button>
      </div>
=======
    fetchProperties();
  }, []);

  return (
    <section className="py-20 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
        Iconic Properties
      </h2>

      {loading ? (
        <div className="text-center py-20 col-span-3">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      ) : properties.length === 0 ? (
        <div className="text-center py-20 col-span-3">
          <p className="text-gray-600">No properties found.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((p) => {
              const status = p.status?.toLowerCase();
              return (
                <div
                  key={p._id}
                  className="relative group rounded-md w-full overflow-hidden"
                  style={{ height: "500px" }}
                >
                  {/* Image */}
                  <img
                    src={p.mainImage || ""}
                    alt={p.name}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=1170&q=80";
                    }}
                  />

                  {/* STATUS RIBBON */}
                  {status && (
                    <div
                      className={`absolute top-4 left-0 px-4 py-1 text-xs font-bold text-white uppercase ${
                        ribbonColor[status] || "bg-gray-500"
                      } rounded-r-md shadow-md`}
                    >
                      {status}
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-secondary-color bg-opacity-70 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md flex flex-col">
                    {/* Title strip */}
                    <div className="max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 bg-secondary-color bg-opacity-50">
                      <h3 className="text-3xl font-bold leading-tight">
                        {p.name}
                      </h3>
                    </div>

                    <div className="p-6 flex flex-col gap-4 justify-between flex-grow">
                      <p className="text-sm text-white/80 line-clamp-4">
                        {p.description}
                      </p>
                      <div className="flex flex-row flex-wrap gap-5 text-sm mt-2 text-white/90">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-amber-400" />
                          <span>{p.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building size={16} className="text-amber-400" />
                          <span>{p.propertyType?.name || "Apartment"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          🏗️ <span>Year Built: {p.yearBuilt || "N/A"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          📐 <span>Size: {p.propertySize} sqft</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleDollarSign
                            size={16}
                            className="text-amber-400"
                          />
                          <span>
                            {p.offerPrice && p.offerPrice !== p.price ? (
                              <>
                                <span className="line-through opacity-60 mr-2">
                                  {formatCurrency(p.price)}
                                </span>
                                <span className="text-green-400 font-bold">
                                  {formatCurrency(p.offerPrice)}
                                </span>
                              </>
                            ) : (
                              <span className="font-medium">
                                {formatCurrency(p.price)}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Logo or CTA */}
                    <div className="mt-auto self-end m-5">
                      <Link
                        to={`/properties/${p._id}`}
                        className="group rounded-full p-2 bg-white/10 hover:bg-white/20 hover:scale-105 ring-1 ring-white/10 transition duration-300"
                      >
                        <ArrowRight
                          size={24}
                          className="text-white transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={() => navigate("/properties")}
              className="px-8 py-3 rounded-full bg-[#0E1C41] text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              View All Properties
            </button>
          </div>
        </>
      )}
>>>>>>> origin/dev_biplap
    </section>
  );
};

export default IconicProperties;
