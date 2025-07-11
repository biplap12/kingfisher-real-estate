import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className=" text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wider uppercase heading-font">
            About{" "}
            <span className="text-[#c8a16d] font-semibold">KingFisher</span>
          </h2>

          {[
            "Architecture when the unknown parts of a building reveal emotions and hidden meanings. Bauen embraces the past while building for the future.",
            "Design in Bauen is all about feeling—minimal and focused, yet rich in detail and purpose.",
            "Planning and execution reflect values that are timeless in both vision and form.",
          ].map((text, idx) => (
            <motion.p
              key={idx}
              className="mt-6 text-md text-gray-400 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (idx + 1), duration: 0.6 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/office-modern.jpg" // Replace with your actual image path
            alt="Office"
            className="rounded-lg object-cover w-full h-[350px] shadow-lg"
          />
          <div className="absolute -bottom-5 right-10 bg-[#0B1736] px-4 py-2 text-sm tracking-widest uppercase text-white rounded">
            Dubai Office
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
