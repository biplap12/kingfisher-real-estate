import React from "react";
import { motion } from "framer-motion";

const imageData = [
  {
    id: 1,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
  },
  {
    id: 2,
    image: "/gallery/img2.jpg",
    title: "Sold Listings",
  },
  {
    id: 3,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
  },
  {
    id: 4,
    image: "/gallery/img2.jpg",
    title: "Sold Listings",
  },
  {
    id: 5,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
  },
  {
    id: 6,
    image: "/gallery/img2.jpg",
    title: "Sold Listings",
  },
];

// Animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for gallery items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Staggered effect
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Animation variants for the button
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const PropertySection = () => {
  return (
    <motion.section
      className="w-full px-4 md:px-20 py-12 min-h-screen mb-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-center text-[#F6BC6D] heading-font">
        <span className="text-primary">Property</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  mt-10">
        {imageData.map((item, index) => (
          <motion.div
            key={item.id + item.title}
            className="relative group overflow-hidden h-[55vh] sm:h-[65vh] "
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            {/* Background image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition duration-500 group-hover:from-[#203772]/70 group-hover:via-[#203772]/40"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase mb-4 drop-shadow-lg">
                {item.title}
              </h2>
              <motion.button
                className="border border-white rounded-md px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition duration-300"
                whileHover="hover"
                variants={buttonVariants}
              >
                View All
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PropertySection;
