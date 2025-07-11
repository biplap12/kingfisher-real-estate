// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Globe, Home, Wrench } from "lucide-react";
// // import CountUp from "react-countup";

// // const AboutSection = () => {
// //   return (
// //     <section className=" text-white py-20 px-6 md:px-20 overflow-hidden">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //         {/* Left Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-light tracking-wider uppercase heading-font">
// //             About{" "}
// //             <span className="text-[#c8a16d] font-semibold">KingFisher</span>
// //           </h2>

// //           {[
// //             "Architecture when the unknown parts of a building reveal emotions and hidden meanings. Bauen embraces the past while building for the future.",
// //             "Design in Bauen is all about feeling—minimal and focused, yet rich in detail and purpose.",
// //             "Planning and execution reflect values that are timeless in both vision and form.",
// //           ].map((text, idx) => (
// //             <motion.p
// //               key={idx}
// //               className="mt-6 text-md text-gray-400 leading-relaxed max-w-md"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 * (idx + 1), duration: 0.6 }}
// //               viewport={{ once: true }}
// //             >
// //               {text}
// //             </motion.p>
// //           ))}
// //         </motion.div>

// //         {/* Right Image */}
// //         <motion.div
// //           className="relative"
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           {/* <img
// //             src="/office-modern.jpg" // Replace with your actual image path
// //             alt="Office"
// //             className="rounded-lg object-cover w-full h-[350px] shadow-lg"
// //           />
// //           <div className="absolute -bottom-5 right-10 bg-[#0B1736] px-4 py-2 text-sm tracking-widest uppercase text-white rounded">
// //             Dubai Office
// //           </div> */}

// //           {[
// //             {
// //               value: 48000,
// //               suffix: "+",
// //               label: "Homes Successfully Delivered",
// //               icon: <Home size={40} className="text-white" />,
// //             },
// //             {
// //               value: 50100,
// //               suffix: "+",
// //               label: "Units Under Development",
// //               icon: <Wrench size={40} className="text-white" />,
// //             },
// //             {
// //               value: 7,
// //               label: "Countries with Active Projects",
// //               icon: <Globe size={40} className="text-white" />,
// //             },
// //           ].map((stat, index) => (
// //             <div
// //               key={index}
// //               className="w-full h-24 rounded-xl text-white cursor-pointer relative overflow-hidden hover:[transform:scale(1)_rotateX(0)_rotateY(0)_rotateZ(0)] border border-[#2f4677] backdrop-blur-sm"
// //             >
// //               {/* Content */}
// //               <div className="relative z-20 h-full w-fit flex flex-col justify-between items-center px-4 py-4 text-center">
// //                 <div className="w-full text-left text-sm lg:text-3xl font-bold text-[#F5BC6D]">
// //                   <CountUp
// //                     start={0}
// //                     end={stat.value}
// //                     duration={2.5}
// //                     enableScrollSpy
// //                     formattingFn={(val) => {
// //                       let display = "";

// //                       if (val >= 1_000_000) {
// //                         display = (val / 1_000_000).toFixed(1);
// //                         if (display.endsWith(".0"))
// //                           display = display.slice(0, -2);
// //                         display += "m";
// //                       } else if (val >= 1_000) {
// //                         display = (val / 1_000).toFixed(1);
// //                         if (display.endsWith(".0"))
// //                           display = display.slice(0, -2);
// //                         display += "k";
// //                       } else {
// //                         display =
// //                           val % 1 === 0 ? val.toString() : val.toFixed(1);
// //                       }

// //                       return display + (stat.suffix ?? "");
// //                     }}
// //                   />
// //                 </div>
// //                 {/* Label */}
// //                 <div className="w-full text-left text-sm text-white/70">
// //                   {stat.label}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { Globe, Home, Wrench } from "lucide-react";
// import CountUp from "react-countup";

// const AboutSection = () => {
//   return (
//     <section
//       className="relative text-white py-20 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/newImages/about.jpg')" }}
//     >
//       {/* Optional: Overlay for readability */}
//       <div className="absolute inset-0 bg-[#0e1c41]/80 z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
//         {/* Left Content: 2/3 */}
//         <motion.div
//           className="md:col-span-2"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-light tracking-wider uppercase heading-font">
//             About{" "}
//             <span className="text-[#c8a16d] font-semibold">KingFisher</span>
//           </h2>

//           {[
//             "Architecture when the unknown parts of a building reveal emotions and hidden meanings. Bauen embraces the past while building for the future.",
//             "Design in Bauen is all about feeling—minimal and focused, yet rich in detail and purpose.",
//             "Planning and execution reflect values that are timeless in both vision and form.",
//           ].map((text, idx) => (
//             <motion.p
//               key={idx}
//               className="mt-6 text-md text-gray-300 leading-relaxed max-w-2xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * (idx + 1), duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {text}
//             </motion.p>
//           ))}
//         </motion.div>

//         {/* Right Stats: 1/3 */}
//         <motion.div
//           className="md:col-span-1 flex flex-col gap-6"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           {[
//             {
//               value: 48000,
//               suffix: "+",
//               label: "Homes Successfully Delivered",
//               icon: <Home size={36} className="text-[#F5BC6D]" />,
//             },
//             {
//               value: 50100,
//               suffix: "+",
//               label: "Units Under Development",
//               icon: <Wrench size={36} className="text-[#F5BC6D]" />,
//             },
//             {
//               value: 7,
//               label: "Countries with Active Projects",
//               icon: <Globe size={36} className="text-[#F5BC6D]" />,
//             },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="w-full flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * index }}
//               viewport={{ once: true }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-2">{stat.icon}</div>
//                 <div className="text-xl lg:text-3xl font-bold text-[#F5BC6D]">
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={2.5}
//                     enableScrollSpy
//                     formattingFn={(val) => {
//                       let display = "";

//                       if (val >= 1_000_000) {
//                         display = (val / 1_000_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "m";
//                       } else if (val >= 1_000) {
//                         display = (val / 1_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "k";
//                       } else {
//                         display =
//                           val % 1 === 0 ? val.toString() : val.toFixed(1);
//                       }

//                       return display + (stat.suffix ?? "");
//                     }}
//                   />
//                 </div>
//                 <div className="text-sm text-white/70">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// import React from "react";
// import { Globe, Home, Wrench } from "lucide-react";
// import CountUp from "react-countup";

// const AboutSection = () => {
//   return (
//     <section
//       className="relative text-white py-20 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/newImages/about.jpg')" }}
//     >
//       {/* Optional: Overlay for readability */}
//       <div className="absolute inset-0 bg-[#0e1c41]/80 z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
//         {/* Left Content: 2/3 */}
//         <div className="md:col-span-2">
//           <h2 className="text-4xl md:text-5xl font-light tracking-wider uppercase heading-font">
//             About{" "}
//             <span className="text-[#c8a16d] font-semibold">KingFisher</span>
//           </h2>

//           {[
//             "Architecture when the unknown parts of a building reveal emotions and hidden meanings. Bauen embraces the past while building for the future.",
//             "Design in Bauen is all about feeling—minimal and focused, yet rich in detail and purpose.",
//             "Planning and execution reflect values that are timeless in both vision and form.",
//           ].map((text, idx) => (
//             <p
//               key={idx}
//               className="mt-6 text-md text-gray-300 leading-relaxed max-w-2xl"
//             >
//               {text}
//             </p>
//           ))}
//         </div>

//         {/* Right Stats: 1/3 */}
//         <div className="md:col-span-1 flex flex-col gap-6">
//           {[
//             {
//               value: 48000,
//               suffix: "+",
//               label: "Homes Successfully Delivered",
//               icon: <Home size={36} className="text-[#F5BC6D]" />,
//             },
//             {
//               value: 50100,
//               suffix: "+",
//               label: "Units Under Development",
//               icon: <Wrench size={36} className="text-[#F5BC6D]" />,
//             },
//             {
//               value: 7,
//               label: "Countries with Active Projects",
//               icon: <Globe size={36} className="text-[#F5BC6D]" />,
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="w-full flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-2">{stat.icon}</div>
//                 <div className="text-xl lg:text-3xl font-bold text-[#F5BC6D]">
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={2.5}
//                     enableScrollSpy
//                     formattingFn={(val) => {
//                       let display = "";

//                       if (val >= 1_000_000) {
//                         display = (val / 1_000_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "m";
//                       } else if (val >= 1_000) {
//                         display = (val / 1_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "k";
//                       } else {
//                         display =
//                           val % 1 === 0 ? val.toString() : val.toFixed(1);
//                       }

//                       return display + (stat.suffix ?? "");
//                     }}
//                   />
//                 </div>
//                 <div className="text-sm text-white/70">{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

{
  /* CountUp Section */
}
{
  /* <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        <div>
          <Home className="mx-auto text-[#F6BC6D] w-10 h-10 mb-3" />
          <p className="text-sm uppercase text-gray-400">Properties Sold</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={1200} duration={3} />+
          </h3>
        </div>
        <div>
          <Users className="mx-auto text-[#F6BC6D] w-10 h-10 mb-3" />
          <p className="text-sm uppercase text-gray-400">Happy Clients</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={9800} duration={3} />+
          </h3>
        </div>
        <div>
          <Users className="mx-auto text-[#F6BC6D] w-10 h-10 mb-3" />
          <p className="text-sm uppercase text-gray-400">Agents Worldwide</p>
          <h3 className="text-3xl font-bold text-white">
            <CountUp end={350} duration={3} />+
          </h3>
        </div>
      </div> */
}
// import React from "react";
// import { Users, Home, ArrowRight } from "lucide-react";
// import CountUp from "react-countup";

// const AboutPage = () => {
//   return (
//     <section className="max-h-screen text-white py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-14">
//         {/* Left Section */}
//         <div className="md:w-1/2 relative">
//           <img
//             src="/gallery/bg.jpg"
//             alt="About Background"
//             className="w-full h-full object-cover rounded-2xl shadow-xl"
//           />

//           <div className="absolute top-5 left-5 flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
//             <span className="p-2 bg-[#f8daaf] rounded-full">
//               <Users className="text-primary w-5 h-5" />
//             </span>
//             <div>
//               <p className="text-xs uppercase tracking-wide text-gray-700">
//                 Total Clients
//               </p>
//               <h4 className="text-lg font-bold text-gray-800">
//                 <CountUp end={7000} duration={3} /> M+
//               </h4>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 space-y-4 px-2 md:px-6 flex flex-col justify-center">
//           <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-white heading-font ">
//             About Us
//           </h2>
//           <p className="text-gray-300 leading-relaxed">
//             Pellentesque egestas elementum egestas faucibus sem. Velit nunc
//             egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
//             Mi mauris nulla ac dictum ut mauris non. Lorem ipsum, dolor sit amet
//             consectetur adipisicing elit. Veritatis distinctio qui cum quia
//             similique tenetur aliquam culpa dolore dolor placeat sapiente,
//             laboriosam molestias quos magni. Odit alias velit suscipit
//             doloribus!
//           </p>
//           <button className="mt-2 inline-flex items-center w-fit gap-2 px-6 py-3 bg-[#F6BC6D] text-[#0B1736] font-semibold rounded-xl hover:bg-[#f5aa47] transition-all shadow-md">
//             Learn More
//             <ArrowRight className="w-5 h-5" />
//           </button>

//           {/* Stats Cards */}
//           <div className="flex flex-wrap md:flex-nowrap justify-start items-center gap-8 mt-6">
//             <div className="flex flex-col justify-center items-center text-center">
//               <Home className="text-[#F6BC6D] w-10 h-10 mb-2" />
//               <p className="text-sm uppercase text-gray-400">Properties Sold</p>
//               <h3 className="text-3xl font-bold text-white">
//                 <CountUp end={1200} duration={3} />+
//               </h3>
//             </div>

//             <div className="flex flex-col justify-center items-center text-center">
//               <Users className="text-[#F6BC6D] w-10 h-10 mb-2" />
//               <p className="text-sm uppercase text-gray-400">Happy Clients</p>
//               <h3 className="text-3xl font-bold text-white">
//                 <CountUp end={9800} duration={3} />+
//               </h3>
//             </div>

//             <div className="flex flex-col justify-center items-center text-center">
//               <Users className="text-[#F6BC6D] w-10 h-10 mb-2" />
//               <p className="text-sm uppercase text-gray-400">
//                 Agents Worldwide
//               </p>
//               <h3 className="text-3xl font-bold text-white">
//                 <CountUp end={350} duration={3} />+
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;

import React from "react";
import { Users, Home, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutPage = () => {
  return (
    <section className="max-h-screen text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-14">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="md:w-1/2 relative"
        >
          <img
            src="/gallery/bg.jpg"
            alt="About Background"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute top-5 left-5 flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-xl p-2.5 shadow-lg">
            <span className="p-2 bg-[#f8daaf] rounded-full">
              <Users className="text-primary w-5 h-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-700">
                Total Clients
              </p>
              <h4 className="text-lg font-bold text-gray-800">
                <CountUp end={7000} duration={3} /> M+
              </h4>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="md:w-1/2 space-y-4 px-2 md:px-6 flex flex-col justify-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={2}
            className="text-3xl md:text-5xl font-extrabold leading-snug text-white heading-font"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-gray-300 leading-relaxed"
          >
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Veritatis distinctio qui cum quia
            similique tenetur aliquam culpa dolore dolor placeat sapiente,
            laboriosam molestias quos magni. Odit alias velit suscipit
            doloribus!
          </motion.p>

          <motion.button
            variants={fadeUp}
            custom={4}
            className="mt-2 inline-flex items-center w-fit gap-2 px-4 py-2.5 bg-[#F6BC6D] text-[#0B1736] font-semibold rounded-xl hover:bg-[#f5aa47] transition-all shadow-md"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Stats Swiper (Mobile) */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-6 block md:hidden"
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              {[
                { icon: <Home />, label: "Properties Sold", value: 1200 },
                { icon: <Users />, label: "Happy Clients", value: 9800 },
                { icon: <Users />, label: "Agents Worldwide", value: 350 },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col justify-center items-center text-center bg-white/10 p-6 rounded-xl shadow">
                    <div className="text-[#F6BC6D] w-10 h-10 mb-2">
                      {item.icon}
                    </div>
                    <p className="text-sm uppercase text-gray-400">
                      {item.label}
                    </p>
                    <h3 className="text-3xl font-bold text-white">
                      <CountUp end={item.value} duration={3} />+
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Static Cards (Desktop) */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="hidden md:flex flex-wrap md:flex-nowrap justify-start items-center mt-9 gap-8"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <Home className="text-[#F6BC6D] w-10 h-10 mb-2" />
              <p className="text-sm uppercase text-gray-400">Properties Sold</p>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={1200} duration={3} />+
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <Users className="text-[#F6BC6D] w-10 h-10 mb-2" />
              <p className="text-sm uppercase text-gray-400">Happy Clients</p>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={9800} duration={3} />+
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <Users className="text-[#F6BC6D] w-10 h-10 mb-2" />
              <p className="text-sm uppercase text-gray-400">
                Agents Worldwide
              </p>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={350} duration={3} />+
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
