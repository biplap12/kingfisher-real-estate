import React from "react";

const GridGlowBackground = ({ children }) => {
  return (
    <section className="relative overflow-hidden z-0">
      {/* Grid and Glow Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]" />
      </div>

      {/* Wrapped Content */}
      {children}
    </section>
  );
};

export default GridGlowBackground;
