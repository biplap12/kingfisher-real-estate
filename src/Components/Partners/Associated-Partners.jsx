import React from "react";

const logos = [
  "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740",
  "https://logomaster.ai/hs-fs/hubfs/lettermark-logo-cnn.jpg?width=1700&height=1148&name=lettermark-logo-cnn.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  "https://i.pinimg.com/736x/e3/24/31/e324313e7ac9f32b33d6d20f0d815e6b.jpg",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
];

const PartnerLogos = () => {
  return (
    <section className="bg-white h-auto flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-center text-3xl md:text-4xl primary-color font-light tracking-wide mb-6 uppercase">
        Associated Partners
      </h2>
      <p className="text-lg text-center text-gray-500 max-w-3xl mx-auto mb-14">
        At Kingfisher, we craft more than just properties — we build lasting
        lifestyles. With a reputation for architectural excellence, smart
        innovation, and global standards, our projects redefine luxury living
        across the UAE and beyond.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  w-full max-w-6xl">
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center py-10 p-4 border border-zinc-200 transition"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
