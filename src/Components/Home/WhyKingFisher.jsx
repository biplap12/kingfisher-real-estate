import React from "react";
import { Home, Wrench, Globe, Award } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    value: 48000,
    suffix: "+",
    label: "Homes Successfully Delivered",
    icon: <Home className="w-12 h-12" />,
    accent: "bg-[#F5BC6D]",
  },
  {
    value: 50100,
    suffix: "+",
    label: "Units Under Development",
    icon: <Wrench className="w-12 h-12" />,
    accent: "bg-[#2f4677]",
  },
  {
    value: 100,
    suffix: "+",
    label: "Global Industry Awards",
    icon: <Award className="w-12 h-12" />,
    accent: "bg-[#F5BC6D]",
  },
  {
    value: 7,
    label: "Countries with Active Projects",
    icon: <Globe className="w-12 h-12" />,
    accent: "bg-[#2f4677]",
  },
];

const Whykingfisher = () => {
  return (
    <section
      className="relative py-20 px-5 lg:px-16 overflow-hidden"
      id="why-us"
    >
      {/* Floating decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#F5BC6D]/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#F5BC6D]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#F5BC6D] mb-4 heading-font">
              WHY KINGFISHER?
            </h2>
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F5BC6D]"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/50 -mb-1"></div> */}
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mt-8">
            Kingfisher Real Estate is known for delivering landmark projects
            marked by quality and attention to detail. Blending modern design
            with top-tier amenities across global markets.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden border border-[#2f4677] hover:border-[#F5BC6D] transition-all duration-500"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A1430] to-[#1B2A54] opacity-90"></div>

              {/* Accent Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-2 ${stat.accent}`}
              ></div>

              {/* Floating Icon Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0A1430] border-2 border-[#F5BC6D]/30 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-[#F5BC6D]/60">
                <div className="text-[#F5BC6D] transition-all duration-500 group-hover:scale-125">
                  {stat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-center z-10">
                {/* Top: Number */}
                <div className="text-5xl font-bold text-white mt-4">
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

                {/* Bottom: Label */}
                <div className="text-white/80 group-hover:text-white transition-colors duration-500 text-lg font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5BC6D/10,transparent_70%)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
