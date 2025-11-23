import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Tilt from "react-parallax-tilt";

import flyer1 from "../assets/flyer/flyer1.png";
import flyer2 from "../assets/flyer/flyer2.png";
import flyer3 from "../assets/flyer/flyer3.png";
import flyer4 from "../assets/flyer/flyer4.png";
import flyer5 from "../assets/flyer/flyer5.png";
import flyer6 from "../assets/flyer/flyer6.png";
import flyer8 from "../assets/flyer/flyer8.png";
import flyer11 from "../assets/flyer/flyer11.png";
import flyer12 from "../assets/flyer/flyer12.png";
import flyer13 from "../assets/flyer/flyer13.png";
import flyer14 from "../assets/flyer/flyer14.png";
import flyer15 from "../assets/flyer/flyer15.png";
import flyer16 from "../assets/flyer/flyer16.png";
import flyer17 from "../assets/flyer/flyer17.png";
import flyer18 from "../assets/flyer/flyer18.png";

const flyers = [
  flyer16, flyer4, flyer14, flyer5, flyer18, flyer15,
  flyer1, flyer12, flyer2, flyer13, flyer3, flyer17,
  flyer6, flyer8, flyer11,
];

const Flyers = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  // ✅ Close modal with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedFlyer(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-gray-50 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="text-center my-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-3">
          Flyers, Cards & Covers Designs
        </h1>

        <p className="text-gray-700 text-lg">
          Visuals That Speak
        </p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black text-lg">
          Every flyer, card, and cover is designed to grab attention and deliver your message with impact.
        </p>
      </motion.div>

      {/* Flyers Grid (Masonry style) */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {flyers.map((flyer, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0.3 }}   // ✅ subtle hover
              whileTap={{ scale: 0.98 }}                  // ✅ gentle tap
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.01}>
                <div
                  onClick={() => setSelectedFlyer(flyer)}
                  className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
                >
                  <img
                    src={flyer}
                    alt={`Flyer ${index + 1}`}
                    className="w-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedFlyer}
                alt="Selected Flyer"
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Flyers;