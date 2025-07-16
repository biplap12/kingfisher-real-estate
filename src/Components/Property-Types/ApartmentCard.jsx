import { Bed, Bath, MapPin, Ruler, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ApartmentCard({
  title,
  location,
  bedrooms,
  bathrooms,
  size,
  imageUrl,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      }}
      className="rounded-xl overflow-hidden bg-gradient-to-b from-[#0E1C41] to-[#1A2B5F] border border-[#F6BC6D]/30 transition-all duration-300 w-full max-w-sm shadow-lg"
    >
      {/* Image with gradient overlay */}
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C41]/90 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#F6BC6D] text-[#0E1C41] text-xs font-bold px-3 py-1 rounded-full">
            NEW LISTING
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex items-center text-sm text-gray-300 gap-2">
            <MapPin className="w-4 h-4 text-[#F6BC6D]" />
            {location}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-[#0E1C41]/50 px-3 py-2 rounded-lg">
            <Bed className="w-4 h-4 text-[#F6BC6D]" />
            <span className="text-white">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0E1C41]/50 px-3 py-2 rounded-lg">
            <Bath className="w-4 h-4 text-[#F6BC6D]" />
            <span className="text-white">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0E1C41]/50 px-3 py-2 rounded-lg">
            <Ruler className="w-4 h-4 text-[#F6BC6D]" />
            <span className="text-white">{size}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-[#2D3A6B] pt-4 space-y-3 text-sm">
          <div>
            <h3 className="font-medium text-gray-300">Ranging From</h3>
            <p className="text-white font-medium">$ 2.91M</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-300">To</h3>
            <p className="text-white font-medium">$ 3.91M</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-300">Handover</h3>
            <p className="text-white">Dec 2027</p>
          </div>
          <p className="text-xs text-gray-400 pt-2">
            *Subject to availability • Exchange rates may vary
          </p>
        </div>

        {/* Learn More Button */}
        <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-[#F6BC6D] to-[#F8A145] text-[#0E1C41] font-semibold py-3 px-4 flex items-center justify-center gap-2 transition-all hover:gap-3 hover:shadow-lg hover:shadow-[#F6BC6D]/20">
          Learn More
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
