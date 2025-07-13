import React from "react";
import { Home, Wrench, Globe, Award } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    value: 48000,
    suffix: "+",
    label: "Homes Successfully Delivered",
    icon: <Home size={60} className="text-white" />,
  },
  {
    value: 50100,
    suffix: "+",
    label: "Units Under Development",
    icon: <Wrench size={60} className="text-white" />,
  },
  {
    value: 100,
    suffix: "+",
    label: "Global Industry Awards",
    icon: <Award size={60} className="text-white" />,
  },
  {
    value: 7,
    label: "Countries with Active Projects",
    icon: <Globe size={60} className="text-white" />,
  },
];

const Whykingfisher = () => {
  return (
    <section className="sm:p-0 lg:px-4" id="why-us">
      <div className="w-full px-5 lg:px-16 mx-auto text-center text-[#F5BC6D]">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-widest uppercase mb-6">
          WHY CHOOSE KINGFISHER ?
        </h2>
        <p className="text-lg text-white/70 max-w-4xl mx-auto mb-14">
          Kingfisher Real Estate is known for delivering landmark projects
          marked by quality and attention to detail. Blending modern design with
          top-tier amenities, the company has established a strong presence
          across the UAE, Saudi Arabia, Qatar, and other global markets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full h-64 rounded-2xl text-white cursor-pointer relative overflow-hidden hover:[transform:scale(1)_rotateX(0)_rotateY(0)_rotateZ(0)] border border-[#2f4677] bg-gradient-to-br from-[#1B2A54] to-[#0A1430]"
            >
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-full z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#112763] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-full z-10 pointer-events-none" />

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
                <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 sm:w-20 sm:h-20">
                  {stat.icon}
                </div>

                {/* Label */}
                <div className="w-full text-left text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
