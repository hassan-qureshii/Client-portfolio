import { useState } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

import linkedin1 from "../assets/linkedin/linkedin1.png";
import linkedin2 from "../assets/linkedin/linkedin2.png";
import linkedin3 from "../assets/linkedin/linkedin3.png";
import linkedin4 from "../assets/linkedin/linkedin4.png";
import linkedin5 from "../assets/linkedin/linkedin5.png";
import linkedin6 from "../assets/linkedin/linkedin6.png";
import linkedin7 from "../assets/linkedin/linkedin7.png";
import linkedin8 from "../assets/linkedin/linkedin8.png";

const linkedins = [
  linkedin1,
  linkedin2,
  linkedin3,
  linkedin4,
  linkedin5,
  linkedin6,
  linkedin7,
  linkedin8,
];

const LinkedIn = () => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.div
        className="text-center my-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4 text-center">
          LinkedIn Banners
        </h1>

        <motion.p
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Stand Out Professionally
        </motion.p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-12 p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700 text-lg">
          Professional LinkedIn banners designed to elevate your profile and make a lasting impression. 
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>

      {/* Banners Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {linkedins.map((banner, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer 
                       bg-[linear-gradient(145deg,_#670D7F,_#851988,_#D63D98)] 
                       flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedBanner(banner)}
            role="button"
          >
            <img
              src={banner}
              alt={`LinkedIn Banner ${index + 1}`}
              className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedBanner && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBanner(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedBanner}
                alt="Selected LinkedIn Banner"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default LinkedIn;