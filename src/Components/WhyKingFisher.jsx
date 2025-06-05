import React from "react";
import {
  Home,
  Wrench,
  Globe,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "48,000+",
    label: "Homes Successfully Delivered",
    icon: <Home size={36} className="text-yellow-500" />,
  },
  {
    value: "50,100+",
    label: "Units Under Development",
    icon: <Wrench size={36} className="text-yellow-500" />,
  },
  {
    value: "100+",
    label: "Global Industry Awards",
    icon: <Award size={36} className="text-yellow-500" />,
  },
  {
    value: "7",
    label: "Countries with Active Projects",
    icon: <Globe size={36} className="text-yellow-500" />,
  },
];

const Whykingfisher = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center text-3xl md:text-4xl text-yellow-500 font-light tracking-wide mb-6 uppercase">
          WHY CHOOSE KINGFISHER ?
        </h2>
        <p className="text-lg text-gray-00 max-w-3xl mx-auto mb-14">
          At Kingfisher, we craft more than just properties — we build lasting
          lifestyles. With a reputation for architectural excellence, smart
          innovation, and global standards, our projects redefine luxury living
          across the UAE and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-yellow-500">{stat.icon}</div>
              <p className="text-3xl font-bold text-[#003f2e]">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
