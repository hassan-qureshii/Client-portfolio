import React from "react";
import { motion } from "framer-motion"; 
import adobe from "../assets/adobe.png";
import adobeXD from "../assets/adobeXD.png";
import behance from "../assets/behance.png";
import canva from "../assets/canva.png";
import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";
import meta from "../assets/meta.png";
import photoshop from "../assets/photoshop.png";
import pinterest from "../assets/pinterest.png";

const items = [
  { src: adobe, label: "Adobe" },
  { src: adobeXD, label: "Adobe XD" },
  { src: behance, label: "Behance" },
  { src: canva, label: "Canva" },
  { src: figma, label: "Figma" },
  { src: illustrator, label: "Illustrator" },
  { src: meta, label: "Meta" },
  { src: photoshop, label: "Photoshop" },
  { src: pinterest, label: "Pinterest" },
];

const Carousel: React.FC = () => {
  const firstRow = items.slice(0, 5);
  const secondRow = items.slice(5);

  return (
    <div className="w-full mx-auto my-10 space-y-6">
      {/* Animated heading */}
      <motion.h1
        className="text-center text-3xl md:text-4xl font-bold 
                   bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] 
                   bg-clip-text text-transparent cursor-pointer"
      >
        Designer ToolKit
      </motion.h1>

     {/* Mobile layout: 2 items per row */}
<div className="grid grid-cols-2 gap-4 md:hidden mx-4 place-items-center">
  {items.map((item, idx) => (
    <motion.div
      key={idx}
      className="w-full h-28 sm:h-36 flex flex-col justify-center items-center 
                 bg-white rounded-xl shadow-md cursor-pointer 
                 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={item.src}
        alt={item.label}
        className="h-12 w-12 sm:h-16 sm:w-16 mb-2"
      />
      <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
        {item.label}
      </span>
    </motion.div>
  ))}
</div>


      {/* Desktop layout: 5 items + 4 items */}
      <div className="hidden md:flex justify-center flex-wrap gap-4">
        {firstRow.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-28 h-28 sm:w-40 sm:h-36 flex flex-col justify-center items-center 
                       bg-white rounded-xl shadow-md cursor-pointer 
                       transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="h-12 w-12 sm:h-16 sm:w-16 mb-2"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:flex justify-center flex-wrap gap-4">
        {secondRow.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-28 h-28 sm:w-40 sm:h-36 flex flex-col justify-center items-center 
                       bg-white rounded-xl shadow-md cursor-pointer 
                       transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="h-12 w-12 sm:h-16 sm:w-16 mb-2"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;