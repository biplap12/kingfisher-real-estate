<<<<<<< HEAD
import React from "react";
import { Home, Wrench, Globe, Award } from "lucide-react";
import { MdDescription } from "react-icons/md";

const stats = [
  {
    value: "48,000+",
    label: "Homes Successfully Delivered",
    icon: <Home size={36} className="primary-color" />,
  },
  {
    value: "50,100+",
    label: "Units Under Development",
    icon: <Wrench size={36} className="primary-color" />,
  },
  {
    value: "100+",
    label: "Global Industry Awards",
    icon: <Award size={36} className="primary-color" />,
  },
  {
    value: "7",
    label: "Countries with Active Projects",
    icon: <Globe size={36} className="primary-color" />,
  },
];

const text = [
  {
    title: "WHY CHOOSE KINGFISHER ?",
    description:
      "Kingfisher Real Estate is known for delivering landmark projects marked by quality and attention to detail. Blending modern design with top-tier amenities, the company has established a strong presence across the UAE, Saudi Arabia, Qatar, and other global markets. Its diverse portfolio of upscale residential, commercial, and lifestyle properties reflects a commitment to excellence and innovation.",
=======



import React from "react";
import { Home, Wrench, Globe, Award } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    value: 48000,
    suffix: "+",
    label: "Homes Successfully Delivered",
    icon: <Home size={40} className="text-white" />,
  },
  {
    value: 50100,
    suffix: "+",
    label: "Units Under Development",
    icon: <Wrench size={40} className="text-white" />,
  },
  {
    value: 100,
    suffix: "+",
    label: "Global Industry Awards",
    icon: <Award size={40} className="text-white" />,
  },
  {
    value: 7,
    label: "Countries with Active Projects",
    icon: <Globe size={40} className="text-white" />,
>>>>>>> origin/dev_biplap
  },
];

const Whykingfisher = () => {
  return (
<<<<<<< HEAD
    <section className="bg-white py-20 px-4 lightSection" id="why-us">
      <div className="max-w-7xl mx-auto text-center">
        {text.map((textItem, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
              {textItem.title}
            </h2>
            {/* <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div> */}

            <p className="text-lg mt-4 raleway-regular text-gray-500 max-w-6xl mx-auto mb-14 text-center">
              {textItem.description}
            </p>
          </div>
        ))}
=======
    <section className="py-20 px-4" id="why-us">
      <div className="max-w-7xl mx-auto text-center text-[#F5BC6D]">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-widest uppercase mb-6">
          WHY CHOOSE KINGFISHER ?
        </h2>
        <p className="text-lg text-white/70 max-w-4xl mx-auto mb-14">
          Kingfisher Real Estate is known for delivering landmark projects
          marked by quality and attention to detail. Blending modern design with
          top-tier amenities, the company has established a strong presence
          across the UAE, Saudi Arabia, Qatar, and other global markets.
        </p>

>>>>>>> origin/dev_biplap
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className=" bg-white rounded-xl p-6 flex flex-col items-center  border border-gray-300 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{stat.icon}</div>
              <p className="text-3xl font-bold text-[#003f2e]">{stat.value}</p>
              <p className="raleway-regular text-gray-600 mt-2">
                {stat.label}
              </p>
=======
              className="w-full h-64 rounded-2xl text-white cursor-pointer relative overflow-hidden hover:[transform:scale(1)_rotateX(0)_rotateY(0)_rotateZ(0)] border border-[#2f4677] bg-gradient-to-br from-[#1B2A54] to-[#0A1430]"
            >
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-full z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-full z-10 pointer-events-none" />

              {/* Content */}
              <div className="relative z-20 h-full w-full flex flex-col justify-between items-center px-6 py-4 text-center">
                {/* Count Value */}
                <div className="w-full text-left text-xl lg:text-6xl font-bold text-[#F5BC6D]">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    formattingFn={(val) => {
                      let display = "";

                      if (val >= 1_000_000) {
                        display = (val / 1_000_000).toFixed(1);
                        if (display.endsWith(".0"))
                          display = display.slice(0, -2);
                        display += "m";
                      } else if (val >= 1_000) {
                        display = (val / 1_000).toFixed(1);
                        if (display.endsWith(".0"))
                          display = display.slice(0, -2);
                        display += "k";
                      } else {
                        display =
                          val % 1 === 0 ? val.toString() : val.toFixed(1);
                      }

                      return display + (stat.suffix ?? "");
                    }}
                  />
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20">
                  {stat.icon}
                </div>

                {/* Label */}
                <div className="w-full text-left text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
>>>>>>> origin/dev_biplap
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
